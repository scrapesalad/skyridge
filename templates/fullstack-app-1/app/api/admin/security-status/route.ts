import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const adminAuth = req.cookies.get('admin_auth');
    
    let sessionData = null;
    let sessionValid = false;
    let lastLogin = null;
    let sessionExpires = null;

    if (adminAuth) {
      try {
        sessionData = JSON.parse(Buffer.from(adminAuth.value, 'base64').toString());
        const sessionAge = Date.now() - sessionData.timestamp;
        const maxAge = 2 * 60 * 60 * 1000; // 2 hours
        
        sessionValid = sessionAge < maxAge;
        lastLogin = new Date(sessionData.timestamp).toISOString();
        sessionExpires = new Date(sessionData.timestamp + maxAge).toISOString();
      } catch (error) {
        // Invalid session token
      }
    }

    const securityStatus = {
      authentication: !!sessionData?.authenticated,
      sessionValid,
      rateLimitActive: true, // Always active
      securityHeaders: true, // Middleware adds them
      lastLogin,
      sessionExpires,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(securityStatus);

  } catch (error) {
    console.error('Security status check error:', error);
    return NextResponse.json({ error: 'Failed to check security status' }, { status: 500 });
  }
}
