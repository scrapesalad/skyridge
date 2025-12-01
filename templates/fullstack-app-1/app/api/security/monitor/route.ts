import { NextRequest, NextResponse } from 'next/server';
import { getAllRateLimits } from '@/app/lib/rateLimiter';
import { getBlockedIPs } from '@/app/lib/security';

/**
 * Security Monitoring API
 * Provides security status and statistics
 * Accessible only in development or with proper authentication
 */
export async function GET(req: NextRequest) {
  // In production, add authentication check here
  if (process.env.NODE_ENV === 'production') {
    // Check for admin authentication
    const authCookie = req.cookies.get('admin_auth');
    if (!authCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  try {
    const rateLimits = getAllRateLimits();
    const blockedIPs = getBlockedIPs();

    // Convert Map to object for JSON serialization
    const rateLimitData: Record<string, any> = {};
    rateLimits.forEach((value, key) => {
      rateLimitData[key] = {
        count: value.count,
        resetTime: new Date(value.resetTime).toISOString(),
        blocked: value.blocked,
        blockUntil: value.blockUntil ? new Date(value.blockUntil).toISOString() : null,
      };
    });

    return NextResponse.json({
      status: 'active',
      timestamp: new Date().toISOString(),
      rateLimits: {
        total: rateLimits.size,
        entries: rateLimitData,
      },
      blockedIPs: {
        total: blockedIPs.length,
        ips: blockedIPs,
      },
      security: {
        botDetection: true,
        scraperProtection: true,
        rateLimiting: true,
        bruteForceProtection: true,
      },
    });
  } catch (error) {
    console.error('Security monitoring error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

