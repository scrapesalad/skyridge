/**
 * Security Utilities
 * Bot detection, scraping protection, and security helpers
 */

import type { NextRequest } from 'next/server';

/**
 * Get client IP from request
 */
export function getClientIP(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    const ips = forwarded.split(',').map(ip => ip.trim());
    return ips[0] || 'unknown';
  }

  return (
    req.headers.get('x-real-ip') ||
    req.headers.get('x-client-ip') ||
    req.headers.get('cf-connecting-ip') || // Cloudflare
    'unknown'
  );
}

/**
 * Bot detection patterns
 */
const BOT_PATTERNS = [
  /bot/i,
  /crawler/i,
  /spider/i,
  /scraper/i,
  /curl/i,
  /wget/i,
  /python/i,
  /php/i,
  /java/i,
  /perl/i,
  /ruby/i,
  /go-http-client/i,
  /httpclient/i,
  /okhttp/i,
  /apache-httpclient/i,
  /libwww-perl/i,
  /lwp-request/i,
  /lwp-simple/i,
  /mechanize/i,
  /scrapy/i,
  /selenium/i,
  /phantomjs/i,
  /headless/i,
  /chrome-lighthouse/i,
  /lighthouse/i,
  /pagespeed/i,
  /gtmetrix/i,
  /webpagetest/i,
  /pingdom/i,
  /uptimerobot/i,
  /monitor/i,
  /uptime/i,
  /availability/i,
  /status/i,
  /health/i,
  /check/i,
  /test/i,
  /debug/i,
  /development/i,
  /staging/i,
  /preview/i,
  /beta/i,
  /alpha/i,
  /dev/i,
  /stage/i,
  /prod/i,
  /production/i,
  /live/i,
  /demo/i,
  /example/i,
  /sample/i,
  /fake/i,
  /dummy/i,
  /postman/i,
  /insomnia/i,
  /httpie/i,
  /rest-client/i,
  /api-client/i,
];

/**
 * Check if request is from a bot/scraper
 */
export function isBot(req: NextRequest): boolean {
  const userAgent = req.headers.get('user-agent') || '';
  const accept = req.headers.get('accept') || '';
  
  // Check user agent patterns
  for (const pattern of BOT_PATTERNS) {
    if (pattern.test(userAgent)) {
      return true;
    }
  }

  // Check for missing or suspicious Accept header (many bots don't send proper headers)
  if (!accept || accept === '*/*' || !accept.includes('text/html')) {
    // Allow if it's an API request or static asset
    const pathname = req.nextUrl.pathname;
    if (pathname.startsWith('/api/') || 
        pathname.startsWith('/_next/') || 
        pathname.startsWith('/images/') ||
        pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)) {
      return false;
    }
    // Missing Accept header for HTML pages is suspicious
    return true;
  }

  return false;
}

/**
 * Check if request is from a known scraper
 */
export function isScraper(req: NextRequest): boolean {
  const userAgent = req.headers.get('user-agent') || '';
  const scraperPatterns = [
    /scrapy/i,
    /selenium/i,
    /phantomjs/i,
    /headless/i,
    /puppeteer/i,
    /playwright/i,
    /cheerio/i,
    /beautifulsoup/i,
    /mechanize/i,
  ];

  return scraperPatterns.some(pattern => pattern.test(userAgent));
}

/**
 * Suspicious behavior patterns
 */
export interface SecurityCheck {
  isSuspicious: boolean;
  reasons: string[];
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
}

/**
 * Analyze request for suspicious behavior
 */
export function analyzeRequest(req: NextRequest): SecurityCheck {
  const reasons: string[] = [];
  let riskLevel: 'low' | 'medium' | 'high' | 'critical' = 'low';

  const userAgent = req.headers.get('user-agent') || '';
  const referer = req.headers.get('referer') || '';
  const pathname = req.nextUrl.pathname;

  // Check for bot/scraper
  if (isBot(req)) {
    reasons.push('Bot user agent detected');
    riskLevel = 'medium';
  }

  if (isScraper(req)) {
    reasons.push('Scraper detected');
    riskLevel = 'high';
  }

  // Check for missing common headers
  if (!userAgent) {
    reasons.push('Missing User-Agent header');
    riskLevel = 'high';
  }

  // Check for suspicious path patterns
  if (pathname.includes('..') || pathname.includes('//')) {
    reasons.push('Path traversal attempt detected');
    riskLevel = 'critical';
  }

  // Check for SQL injection patterns
  const suspiciousQueryParams = ['union', 'select', 'drop', 'delete', 'insert', 'update', 'exec', 'script'];
  for (const param of suspiciousQueryParams) {
    if (req.nextUrl.searchParams.toString().toLowerCase().includes(param)) {
      reasons.push(`Suspicious query parameter detected: ${param}`);
      riskLevel = 'high';
    }
  }

  // Check for rapid requests (this would be handled by rate limiting)
  // Multiple requests in short time from same IP

  // Check referer for suspicious patterns
  if (referer && !referer.startsWith('https://icondumpsters.com') &&
      !referer.startsWith('http://localhost')) {
    // External referer is normal for public pages, but suspicious for API/admin
    if (pathname.startsWith('/api/admin')) {
      reasons.push('Unauthorized referer for admin endpoint');
      riskLevel = 'high';
    }
  }

  return {
    isSuspicious: reasons.length > 0,
    reasons,
    riskLevel,
  };
}

/**
 * Blocked IPs (add known malicious IPs here)
 * In production, use Redis or database for persistent blocking
 */
const blockedIPs = new Set<string>([
  // Add known malicious IPs here
  // Example: '192.168.1.100',
]);

/**
 * Check if IP is blocked
 */
export function isIPBlocked(ip: string): boolean {
  return blockedIPs.has(ip);
}

/**
 * Block an IP (add to blocked list)
 */
export function blockIP(ip: string): void {
  blockedIPs.add(ip);
}

/**
 * Unblock an IP
 */
export function unblockIP(ip: string): void {
  blockedIPs.delete(ip);
}

/**
 * Get all blocked IPs (for monitoring)
 */
export function getBlockedIPs(): string[] {
  return Array.from(blockedIPs);
}

/**
 * Sanitize input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .trim();
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
}

/**
 * Log security event
 */
export function logSecurityEvent(
  type: 'blocked' | 'suspicious' | 'rate_limit' | 'bot' | 'scraper',
  details: {
    ip: string;
    path: string;
    userAgent?: string;
    reason?: string;
    riskLevel?: string;
  }
): void {
  // In production, send to logging service (Sentry, LogRocket, etc.)
  if (process.env.NODE_ENV === 'production') {
    console.log(`[SECURITY] ${type.toUpperCase()}:`, {
      ...details,
      timestamp: new Date().toISOString(),
    });
  } else {
    console.warn(`[SECURITY] ${type.toUpperCase()}:`, details);
  }
}

