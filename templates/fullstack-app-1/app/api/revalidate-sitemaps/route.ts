import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token') || request.headers.get('x-revalidate-token') || ''
    const required = process.env.REVALIDATE_TOKEN
    if (required && token !== required) {
      return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
    }

    // Revalidate sitemap and related XML endpoints
    const paths = ['/sitemap.xml', '/post-sitemap.xml', '/indexnow-sitemap.xml', '/robots.txt']
    for (const p of paths) revalidatePath(p)

    return NextResponse.json({ ok: true, revalidated: paths, ts: new Date().toISOString() })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Internal error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  return GET(request)
}

