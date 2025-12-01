import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return (
    req.headers.get('x-real-ip') ||
    req.headers.get('x-client-ip') ||
    'unknown'
  );
}

export async function GET(req: NextRequest) {
  try {
    const adminAuth = req.cookies.get('admin_auth');
    
    if (!adminAuth) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Decode and verify session token
    try {
      // Handle URL-encoded cookies
      const cookieValue = decodeURIComponent(adminAuth.value);
      const sessionData = JSON.parse(Buffer.from(cookieValue, 'base64').toString());
      
      // Check if session is expired (2 hours)
      const sessionAge = Date.now() - sessionData.timestamp;
      const maxAge = 2 * 60 * 60 * 1000; // 2 hours
      
      if (sessionAge > maxAge) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
      }

      // Check if IP matches (basic security) - be lenient to avoid proxy mismatches
      const currentIp = getClientIp(req);
      const sessionIp = sessionData.ip || 'unknown';
      if (
        process.env.NODE_ENV === 'production' &&
        sessionIp !== 'unknown' &&
        currentIp !== 'unknown' &&
        sessionIp !== currentIp
      ) {
        console.warn('IP mismatch detected (warning only):', { sessionIp, currentIp });
        // Do not block login due to proxy rotations; continue
      }

      if (!sessionData.authenticated) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
      }
    } catch (error) {
      console.error('Session token decode error:', error);
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Additional security checks
    const userAgent = req.headers.get('user-agent') || '';
    const referer = req.headers.get('referer') || '';
    
    // Basic bot detection
    const suspiciousPatterns = [
      /bot/i,
      /crawler/i,
      /spider/i,
      /curl/i,
      /wget/i,
      /python/i,
      /php/i
    ];

    const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(userAgent));
    
    if (isSuspicious) {
      console.warn('Suspicious user agent detected:', userAgent);
      return NextResponse.json({ authenticated: false }, { status: 403 });
    }

    // Check if request is from same origin (basic CSRF protection) - but be more lenient for development
    const origin = req.headers.get('origin');
    const host = req.headers.get('host');
    
    if (origin && !origin.includes(host || '') && process.env.NODE_ENV === 'production') {
      console.warn('Cross-origin request detected:', { origin, host });
      return NextResponse.json({ authenticated: false }, { status: 403 });
    }

    return NextResponse.json({ 
      authenticated: true,
      timestamp: new Date().toISOString()
    }, { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' } });

  } catch (error) {
    console.error('Auth verification error:', error);
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}
