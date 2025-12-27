import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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

  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Content Security Policy
  const csp = "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://connect.facebook.net https://vercel.live; " +
    "script-src-elem 'self' 'unsafe-inline' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://connect.facebook.net https://vercel.live; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "img-src 'self' data: blob: https:; " +
    "connect-src 'self' http: https: https://www.google-analytics.com https://www.google.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://connect.facebook.net; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "frame-src 'self' https://www.googletagmanager.com https://www.google.com https://www.googleadservices.com https://connect.facebook.net https://vercel.live; " +
    "manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';";

  response.headers.set('Content-Security-Policy', csp);

  return response;
}

export const config = {
  matcher: [
    // Static file exclusions - don't run middleware on these
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ]
};
