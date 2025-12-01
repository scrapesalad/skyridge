import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkRateLimit, type RateLimitConfig } from './lib/rateLimiter';
import { 
  getClientIP, 
  isBot, 
  isScraper, 
  isIPBlocked, 
  analyzeRequest,
  logSecurityEvent 
} from './lib/security';
import { getCityData } from './config/cityData';

const INDEXABLE_NEAR_ME = new Set([
  'salt-lake-city',
  'west-jordan',
  'sandy',
  'south-jordan',
  'murray',
]);

/**
 * List of permanently deleted URLs that should return 410 Gone
 * Add URLs here when pages are permanently deleted (not moved/redirected)
 * 
 * Format: exact path matches only (case-sensitive, without leading slash)
 * Example: 'old-deleted-page' for /old-deleted-page
 */
const DELETED_URLS = new Set<string>([
  // Example: 'old-deleted-page',
  // Add deleted URLs here as they are permanently removed
  // Note: These should NOT be in redirects - they should return 410 Gone
]);

/**
 * Rate limiting configurations
 */
const RATE_LIMIT_CONFIGS: Record<string, RateLimitConfig> = {
  // General API rate limit
  api: {
    maxRequests: 100,
    windowMs: 60 * 1000, // 1 minute
    blockDurationMs: 15 * 60 * 1000, // Block for 15 minutes if exceeded
  },
  // Form submission rate limit (stricter)
  form: {
    maxRequests: 10,
    windowMs: 60 * 1000, // 1 minute
    blockDurationMs: 30 * 60 * 1000, // Block for 30 minutes if exceeded
  },
  // Admin endpoints (very strict)
  admin: {
    maxRequests: 5,
    windowMs: 15 * 60 * 1000, // 15 minutes
    blockDurationMs: 60 * 60 * 1000, // Block for 1 hour if exceeded
  },
  // General page requests (lenient for legitimate users)
  page: {
    maxRequests: 200,
    windowMs: 60 * 1000, // 1 minute
  },
};

function extractCitySlug(pathname: string): string | null {
  // Matches both /dumpster-rental-near-me-{city}-ut and /dumpster-rental-me-{city}-ut
  const m = pathname.match(/^\/(dumpster-rental-(?:near-me|me)-)([a-z0-9-]+)-ut\/?$/);
  return m ? m[2] : null;
}

function extractCityFromDumpsterRental(pathname: string): string | null {
  // Matches /dumpster-rental-{city}-ut pattern
  const m = pathname.match(/^\/dumpster-rental-([a-z0-9-]+)-ut\/?$/);
  return m ? m[1] : null;
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const url = req.nextUrl.clone();
  const ip = getClientIP(req);

  // CRITICAL: Rewrite /dumpster-rental-{city}-ut FIRST, before any other checks
  // This must happen before route matching to prevent [slug] route from catching it
  const citySlug = extractCityFromDumpsterRental(pathname);
  if (citySlug) {
    console.log('[Middleware] Rewriting:', pathname, '->', `/dumpster-rental/${citySlug}-ut`);
    url.pathname = `/dumpster-rental/${citySlug}-ut`;
    return NextResponse.rewrite(url);
  }

  // Redirect dumpster-rental-{city} (without -ut) to dumpster-rental-{city}-ut
  // This must happen early, before security checks, to catch URLs like /dumpster-rental-west-valley
  // Normalize pathname by removing trailing slash for this check
  const normalizedPathname = pathname.replace(/\/$/, '');
  if (normalizedPathname.startsWith('/dumpster-rental-') && !normalizedPathname.endsWith('-ut')) {
    const dumpsterRentalMatch = normalizedPathname.match(/^\/dumpster-rental-([a-z0-9-]+)$/);
    if (dumpsterRentalMatch) {
      const citySlug = dumpsterRentalMatch[1];
      // Exclude known routes that shouldn't be redirected
      const excludedPatterns = ['near-me', 'sizes', 'prices', 'guide', 'faq', 'process', 'tips', 'permit', 'calculator', '101', 'permits', 'sizes'];
      if (!excludedPatterns.some(pattern => citySlug.includes(pattern))) {
        // Try exact match first
        let cityData = getCityData(citySlug);
        let finalCitySlug = citySlug;
        
        // If not found, try appending "-city" (e.g., "west-valley" → "west-valley-city")
        if (!cityData) {
          const citySlugWithCity = `${citySlug}-city`;
          cityData = getCityData(citySlugWithCity);
          if (cityData) {
            finalCitySlug = citySlugWithCity;
          }
        }
        
        if (cityData) {
          url.pathname = `/dumpster-rental-${finalCitySlug}-ut`;
          return NextResponse.redirect(url, 301);
        }
      }
    }
  }

  // SECURITY: Check if IP is blocked
  if (isIPBlocked(ip)) {
    logSecurityEvent('blocked', {
      ip,
      path: pathname,
      reason: 'IP is in blocked list',
    });
    return new NextResponse('Access Denied', {
      status: 403,
      headers: {
        'X-Robots-Tag': 'noindex',
      },
    });
  }

  // SECURITY: Bot and scraper detection
  const isBotRequest = isBot(req);
  const isScraperRequest = isScraper(req);
  
  if (isScraperRequest) {
    logSecurityEvent('scraper', {
      ip,
      path: pathname,
      userAgent: req.headers.get('user-agent') || 'unknown',
    });
    // Block scrapers from API endpoints and admin areas
    if (pathname.startsWith('/api/') || pathname.startsWith('/admin')) {
      return new NextResponse('Access Denied', {
        status: 403,
        headers: {
          'X-Robots-Tag': 'noindex',
        },
      });
    }
  }

  // SECURITY: Analyze request for suspicious behavior
  const securityCheck = analyzeRequest(req);
  if (securityCheck.isSuspicious && securityCheck.riskLevel === 'critical') {
    logSecurityEvent('suspicious', {
      ip,
      path: pathname,
      reason: securityCheck.reasons.join(', '),
      riskLevel: securityCheck.riskLevel,
    });
    return new NextResponse('Access Denied', {
      status: 403,
      headers: {
        'X-Robots-Tag': 'noindex',
      },
    });
  }

  // SECURITY: Rate limiting based on path type
  let rateLimitConfig: RateLimitConfig;
  if (pathname.startsWith('/api/admin')) {
    rateLimitConfig = RATE_LIMIT_CONFIGS.admin;
  } else if (pathname.startsWith('/api/lead') || pathname.startsWith('/api/schedule-quote')) {
    rateLimitConfig = RATE_LIMIT_CONFIGS.form;
  } else if (pathname.startsWith('/api/')) {
    rateLimitConfig = RATE_LIMIT_CONFIGS.api;
  } else {
    // Skip rate limiting for static assets and Next.js internal routes
    if (pathname.startsWith('/_next/') || 
        pathname.startsWith('/images/') ||
        pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|webp)$/)) {
      return NextResponse.next();
    }
    rateLimitConfig = RATE_LIMIT_CONFIGS.page;
  }

  const rateLimitKey = `${ip}:${pathname}`;
  const rateLimitResult = checkRateLimit(rateLimitKey, rateLimitConfig);

  if (!rateLimitResult.allowed) {
    logSecurityEvent('rate_limit', {
      ip,
      path: pathname,
      reason: `Rate limit exceeded: ${rateLimitConfig.maxRequests} requests per ${rateLimitConfig.windowMs}ms`,
    });

    const response = new NextResponse(
      JSON.stringify({
        error: 'Too many requests',
        message: rateLimitResult.blocked 
          ? 'You have been temporarily blocked due to excessive requests. Please try again later.'
          : 'Rate limit exceeded. Please slow down your requests.',
        retryAfter: rateLimitResult.retryAfter,
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': rateLimitConfig.maxRequests.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
          ...(rateLimitResult.retryAfter && {
            'Retry-After': rateLimitResult.retryAfter.toString(),
          }),
        },
      }
    );
    return response;
  }

  // Check for permanently deleted URLs (410 Gone)
  // This must be checked BEFORE redirects to ensure proper status code
  const pathWithoutSlash = pathname.slice(1); // Remove leading slash
  if (DELETED_URLS.has(pathWithoutSlash)) {
    return new NextResponse(null, {
      status: 410,
      statusText: 'Gone',
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Robots-Tag': 'noindex',
      },
    });
  }

  // Force HTTPS - redirect HTTP to HTTPS
  // Check x-forwarded-proto header (used by Vercel and other proxies)
  const forwardedProto = req.headers.get('x-forwarded-proto');
  if (process.env.NODE_ENV === 'production' && forwardedProto === 'http') {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  // Normalize trailing slashes - redirect trailing slash to non-trailing slash
  // Exclude root path and API routes
  if (pathname !== '/' && pathname.endsWith('/') && !pathname.startsWith('/api')) {
    const normalizedPath = pathname.slice(0, -1);
    url.pathname = normalizedPath;
    // Preserve query string
    url.search = search;
    return NextResponse.redirect(url, 301);
  }

  // Normalize www to non-www (canonical domain)
  const hostname = req.headers.get('host') || '';
  if (hostname.startsWith('www.')) {
    url.hostname = hostname.replace('www.', '');
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  // Redirect old city pages /{city} to new format /dumpster-rental-{city}-ut
  // Only redirect if it's a single-segment path and matches a valid city slug
  // Exclude known routes that shouldn't be redirected
  const excludedRoutes = new Set([
    'blog', 'contact', 'about', 'faq', 'services', 'pricing', 'locations',
    'admin', 'api', 'sitemap', 'robots', 'favicon', 'images', '_next',
    'free-quote', 'book', 'cart', 'order-confirmation', 'reviews', 'rating',
    'privacy-policy', 'terms-of-service', 'guides', 'calculators', 'pricing',
    'dumpster-rental', 'dumpster-rentals', 'sitemap.xml', 'post-sitemap.xml',
    'indexnow-sitemap.xml', 'robots.txt', 'ai.txt', 'manifest.json',
  ]);

  // Check if pathname is a single segment (e.g., /sandy, /salt-lake-city)
  // and not in excluded routes
  const pathSegments = pathname.split('/').filter(Boolean);
  if (pathSegments.length === 1 && !excludedRoutes.has(pathSegments[0])) {
    const potentialCitySlug = pathSegments[0];
    
    // Check if it's a valid city slug
    const cityData = getCityData(potentialCitySlug);
    if (cityData) {
      // Redirect to new city page format
      url.pathname = `/dumpster-rental-${potentialCitySlug}-ut`;
      return NextResponse.redirect(url, 301);
    }
  }

  // Redirect {city}-dumpster-rental-guide-2025 to dumpster-rental-{city}-ut
  const guideMatch = pathname.match(/^\/([a-z0-9-]+)-dumpster-rental-guide-2025\/?$/);
  if (guideMatch) {
    const citySlug = guideMatch[1];
    const cityData = getCityData(citySlug);
    if (cityData) {
      url.pathname = `/dumpster-rental-${citySlug}-ut`;
      return NextResponse.redirect(url, 301);
    }
  }

  // Redirect rolloff-dumpster-rental-{city}-ut and roll-off-dumpster-rental-{city}-ut to dumpster-rental-{city}-ut
  const rolloffMatch = pathname.match(/^\/(rolloff|roll-off)-dumpster-rental-([a-z0-9-]+)-ut\/?$/);
  if (rolloffMatch) {
    const citySlug = rolloffMatch[2];
    const cityData = getCityData(citySlug);
    if (cityData) {
      url.pathname = `/dumpster-rental-${citySlug}-ut`;
      return NextResponse.redirect(url, 301);
    }
  }

  // Redirect slc-dumpster-rental-{city}-ut to dumpster-rental-{city}-ut
  const slcMatch = pathname.match(/^\/slc-dumpster-rental-([a-z0-9-]+)-ut\/?$/);
  if (slcMatch) {
    const citySlug = slcMatch[1];
    const cityData = getCityData(citySlug);
    if (cityData) {
      url.pathname = `/dumpster-rental-${citySlug}-ut`;
      return NextResponse.redirect(url, 301);
    }
  }

  // Redirect /pricing/fees to /fees (canonical URL)
  if (pathname === '/pricing/fees') {
    url.pathname = '/fees';
    return NextResponse.redirect(url, 301);
  }

  // Redirect /dumpster-prices to /pricing (canonical URL)
  if (pathname === '/dumpster-prices') {
    url.pathname = '/pricing';
    return NextResponse.redirect(url, 301);
  }

  // This rewrite is now handled at the top of the middleware function

  if (pathname.startsWith('/dumpster-rental-near-me-') || pathname.startsWith('/dumpster-rental-me-')) {
    const city = extractCitySlug(pathname);
    if (city && !INDEXABLE_NEAR_ME.has(city)) {
      const res = NextResponse.next();
      res.headers.set('X-Robots-Tag', 'noindex, follow');
      return res;
    }
  }

  // SECURITY: Add security headers to response
  const response = NextResponse.next();
  
  // Add rate limit headers (only for non-static routes)
  if (!pathname.startsWith('/_next/') && 
      !pathname.startsWith('/images/') &&
      !pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|webp)$/)) {
    response.headers.set('X-RateLimit-Limit', rateLimitConfig.maxRequests.toString());
    response.headers.set('X-RateLimit-Remaining', rateLimitResult.remaining.toString());
    response.headers.set('X-RateLimit-Reset', new Date(rateLimitResult.resetTime).toISOString());
  }

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(self)');

  // Add bot detection header (for monitoring)
  if (isBotRequest) {
    response.headers.set('X-Bot-Detected', 'true');
  }

  return response;
}

export const config = {
  // Match all routes to ensure HTTPS enforcement runs on every request
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
