import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED_PREFIXES = ['/admin-dashboard', '/kpi-dashboard', '/inventory', '/enhanced-dashboard'];

function isPathProtected(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(prefix => pathname.startsWith(prefix));
}

function isAuthorized(authorizationHeader: string | null): boolean {
  if (!authorizationHeader || !authorizationHeader.startsWith('Basic ')) return false;
  const base64Credentials = authorizationHeader.split(' ')[1];
  try {
    const decoded = atob(base64Credentials);
    const separatorIndex = decoded.indexOf(':');
    if (separatorIndex === -1) return false;
    const providedUser = decoded.slice(0, separatorIndex);
    const providedPass = decoded.slice(separatorIndex + 1);

    const expectedUser = process.env.BASIC_AUTH_USER || process.env.NEXT_BASIC_AUTH_USER || 'icon';
    const expectedPass = process.env.BASIC_AUTH_PASS || process.env.NEXT_BASIC_AUTH_PASS || 'dumpsters';
    return providedUser === expectedUser && providedPass === expectedPass;
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  // Redirect www to non-www (canonical domain)
  const hostname = request.headers.get('host') || '';
  if (hostname.startsWith('www.')) {
    url.hostname = hostname.replace('www.', '');
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  // Force HTTPS (skip for localhost in development)
  if (url.protocol === 'http:' && !hostname.includes('localhost') && !hostname.includes('127.0.0.1')) {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  // Rewrite city page URLs from /dumpster-rental-{city}-ut to /dumpster-rental/{city}-ut
  // This allows clean URLs while using Next.js catch-all routing
  const cityPageMatch = pathname.match(/^\/dumpster-rental-([a-z0-9-]+)-ut$/);
  if (cityPageMatch) {
    const citySlug = cityPageMatch[1];
    url.pathname = `/dumpster-rental/${citySlug}-ut`;
    return NextResponse.rewrite(url);
  }

  // HTTP Basic Auth for protected pages
  if (isPathProtected(pathname)) {
    const authHeader = request.headers.get('authorization');
    if (!isAuthorized(authHeader)) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Restricted Area"' }
      });
    }
  }

  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  // Allow payment API for Stripe (needed for payment forms)
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(self)');

  // Default CSP for all pages
  const defaultCSP = "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://connect.facebook.net https://vercel.live; " +
    "script-src-elem 'self' 'unsafe-inline' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://connect.facebook.net https://vercel.live; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "img-src 'self' data: blob: https:; " +
    "connect-src 'self' http: https: https://www.google-analytics.com https://www.google.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://connect.facebook.net; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "frame-src 'self' https://www.googletagmanager.com https://www.google.com https://www.googleadservices.com https://connect.facebook.net https://vercel.live; " +
    "manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';";

  // CSP for admin pages
  if (pathname.startsWith('/admin')) {
    response.headers.set('Content-Security-Policy', defaultCSP);
  }

  // CSP for cart/payment pages - allow Stripe in addition to default
  if (pathname.startsWith('/cart') || pathname.startsWith('/order-confirmation')) {
    response.headers.set(
      'Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://connect.facebook.net https://js.stripe.com https://js.stripe.com/v3 https://vercel.live; " +
      "script-src-elem 'self' 'unsafe-inline' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://connect.facebook.net https://js.stripe.com https://js.stripe.com/v3 https://vercel.live; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "img-src 'self' data: blob: https:; " +
      "connect-src 'self' http: https: https://www.google-analytics.com https://www.google.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://connect.facebook.net https://api.stripe.com; " +
      "font-src 'self' https://fonts.gstatic.com; " +
      "frame-src 'self' https://www.googletagmanager.com https://www.google.com https://www.googleadservices.com https://connect.facebook.net https://js.stripe.com https://hooks.stripe.com https://vercel.live; " +
      "manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';"
    );
  } else {
    // Apply default CSP for all other pages (home, city pages, etc.)
    response.headers.set('Content-Security-Policy', defaultCSP);
  }

  return response;
}

export const config = {
  matcher: [
    // Static file exclusions - don't run middleware on these
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ]
};
