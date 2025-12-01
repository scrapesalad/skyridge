import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Simple in-memory rate limiting for FAILED attempts only (use Redis in prod)
const loginAttempts = new Map<string, { failed: number; lastAttempt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

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

function getRateLimitKey(req: NextRequest): string {
  const ip = getClientIp(req);
  return `login_${ip}`;
}

function isBlocked(key: string): { blocked: boolean; remainingMs: number } {
  const now = Date.now();
  const attempts = loginAttempts.get(key);
  if (!attempts) return { blocked: false, remainingMs: 0 };
  const age = now - attempts.lastAttempt;
  if (age > WINDOW_MS) {
    loginAttempts.delete(key);
    return { blocked: false, remainingMs: 0 };
  }
  const blocked = attempts.failed >= MAX_ATTEMPTS;
  const remainingMs = blocked ? Math.max(WINDOW_MS - age, 0) : 0;
  return { blocked, remainingMs };
}

function incrementFailed(key: string): void {
  const now = Date.now();
  const attempts = loginAttempts.get(key);
  if (!attempts) {
    loginAttempts.set(key, { failed: 1, lastAttempt: now });
    return;
  }
  const age = now - attempts.lastAttempt;
  if (age > WINDOW_MS) {
    loginAttempts.set(key, { failed: 1, lastAttempt: now });
    return;
  }
  attempts.failed += 1;
  attempts.lastAttempt = now;
  loginAttempts.set(key, attempts);
}

function resetAttempts(key: string): void {
  loginAttempts.delete(key);
}

export async function POST(req: NextRequest) {
  try {
    const rateLimitKey = getRateLimitKey(req);

    // Read body first so we can allow valid passwords even if blocked
    const body = await req.json().catch(() => ({}));
    const password = String(body?.password || '').trim();

    // Case-sensitive password. If ADMIN_PASSWORD is not set, fallback to default.
    const expected = (process.env.ADMIN_PASSWORD || 'IconDumpsters2024!').trim();
    const isDev = process.env.NODE_ENV !== 'production';
    const devFallbackOk = isDev && password === 'IconDumpsters2024!';

    const { blocked, remainingMs } = isBlocked(rateLimitKey);
    if (password !== expected && !devFallbackOk) {
      if (blocked) {
        return NextResponse.json({
          ok: false,
          error: 'Too many login attempts. Please try again in 15 minutes.',
          retryAfterMs: remainingMs,
        }, { status: 429, headers: { 'Cache-Control': 'no-store' } });
      }
      incrementFailed(rateLimitKey);
      return NextResponse.json({ ok: false, error: 'Invalid password' }, { status: 401, headers: { 'Cache-Control': 'no-store' } });
    }
    // Successful login resets the failed attempt counter
    resetAttempts(rateLimitKey);
    const res = NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' } });
    // Create session token with timestamp
    const sessionToken = Buffer.from(JSON.stringify({
      authenticated: true,
      timestamp: Date.now(),
      ip: getClientIp(req)
    })).toString('base64');

    res.cookies.set('admin_auth', sessionToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 2, // 2 hours (reduced from 8 for security)
    });
    return res;
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  const rateLimitKey = getRateLimitKey(req);
  const params = req.nextUrl.searchParams;
  const isDev = process.env.NODE_ENV !== 'production';
  if (isDev && params.get('reset') === '1') {
    resetAttempts(rateLimitKey);
    return NextResponse.json({ ok: true, reset: true }, { headers: { 'Cache-Control': 'no-store' } });
  }
  const { blocked, remainingMs } = isBlocked(rateLimitKey);
  return NextResponse.json({ ok: true, blocked, remainingMs }, { headers: { 'Cache-Control': 'no-store' } });
}


