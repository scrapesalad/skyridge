/**
 * API Security Utilities
 * Provides security wrappers and helpers for API routes
 */

import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, type RateLimitConfig } from './rateLimiter';
import { 
  getClientIP, 
  isBot, 
  isScraper, 
  isIPBlocked, 
  analyzeRequest,
  logSecurityEvent,
  sanitizeInput 
} from './security';

/**
 * API security configuration
 */
export interface APISecurityConfig {
  rateLimit?: RateLimitConfig;
  requireAuth?: boolean;
  allowedMethods?: string[];
  blockBots?: boolean;
  blockScrapers?: boolean;
}

/**
 * Default API rate limit configuration
 */
const DEFAULT_RATE_LIMIT: RateLimitConfig = {
  maxRequests: 100,
  windowMs: 60 * 1000, // 1 minute
  blockDurationMs: 15 * 60 * 1000, // Block for 15 minutes if exceeded
};

/**
 * Security check result
 */
export interface SecurityCheckResult {
  allowed: boolean;
  response?: NextResponse;
  reason?: string;
}

/**
 * Check API request security
 */
export function checkAPISecurity(
  req: NextRequest,
  config: APISecurityConfig = {}
): SecurityCheckResult {
  const ip = getClientIP(req);
  const pathname = req.nextUrl.pathname;
  const method = req.method;

  // Check if IP is blocked
  if (isIPBlocked(ip)) {
    logSecurityEvent('blocked', {
      ip,
      path: pathname,
      reason: 'IP is in blocked list',
    });
    return {
      allowed: false,
      response: new NextResponse('Access Denied', {
        status: 403,
        headers: { 'X-Robots-Tag': 'noindex' },
      }),
      reason: 'IP is blocked',
    };
  }

  // Check HTTP method
  if (config.allowedMethods && !config.allowedMethods.includes(method)) {
    return {
      allowed: false,
      response: new NextResponse('Method Not Allowed', {
        status: 405,
        headers: { 'Allow': config.allowedMethods.join(', ') },
      }),
      reason: 'Method not allowed',
    };
  }

  // Bot detection
  if (config.blockBots && isBot(req)) {
    logSecurityEvent('bot', {
      ip,
      path: pathname,
      userAgent: req.headers.get('user-agent') || 'unknown',
    });
    return {
      allowed: false,
      response: new NextResponse('Access Denied', {
        status: 403,
        headers: { 'X-Robots-Tag': 'noindex' },
      }),
      reason: 'Bot detected',
    };
  }

  // Scraper detection
  if (config.blockScrapers && isScraper(req)) {
    logSecurityEvent('scraper', {
      ip,
      path: pathname,
      userAgent: req.headers.get('user-agent') || 'unknown',
    });
    return {
      allowed: false,
      response: new NextResponse('Access Denied', {
        status: 403,
        headers: { 'X-Robots-Tag': 'noindex' },
      }),
      reason: 'Scraper detected',
    };
  }

  // Analyze request for suspicious behavior
  const securityCheck = analyzeRequest(req);
  if (securityCheck.isSuspicious && securityCheck.riskLevel === 'critical') {
    logSecurityEvent('suspicious', {
      ip,
      path: pathname,
      reason: securityCheck.reasons.join(', '),
      riskLevel: securityCheck.riskLevel,
    });
    return {
      allowed: false,
      response: new NextResponse('Access Denied', {
        status: 403,
        headers: { 'X-Robots-Tag': 'noindex' },
      }),
      reason: securityCheck.reasons.join(', '),
    };
  }

  // Rate limiting
  if (config.rateLimit) {
    const rateLimitKey = `${ip}:${pathname}:${method}`;
    const rateLimitResult = checkRateLimit(rateLimitKey, config.rateLimit);

    if (!rateLimitResult.allowed) {
      logSecurityEvent('rate_limit', {
        ip,
        path: pathname,
        reason: `Rate limit exceeded: ${config.rateLimit.maxRequests} requests per ${config.rateLimit.windowMs}ms`,
      });

      return {
        allowed: false,
        response: new NextResponse(
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
              'X-RateLimit-Limit': config.rateLimit.maxRequests.toString(),
              'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
              'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
              ...(rateLimitResult.retryAfter && {
                'Retry-After': rateLimitResult.retryAfter.toString(),
              }),
            },
          }
        ),
        reason: 'Rate limit exceeded',
      };
    }
  }

  return { allowed: true };
}

/**
 * Sanitize request body
 */
export function sanitizeRequestBody<T extends Record<string, any>>(body: T): T {
  const sanitized = { ...body };
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeInput(sanitized[key]) as any;
    } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeRequestBody(sanitized[key]) as any;
    }
  }
  return sanitized;
}

/**
 * Create secure API response
 */
export function createSecureResponse(
  data: any,
  status: number = 200,
  headers: Record<string, string> = {}
): NextResponse {
  const secureHeaders = {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    ...headers,
  };

  return NextResponse.json(data, {
    status,
    headers: secureHeaders,
  });
}

