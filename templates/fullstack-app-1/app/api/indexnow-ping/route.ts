import { NextResponse } from 'next/server'

// Lightweight IndexNow ping for sitemap submission via GET (cron-friendly)
export async function GET() {
  const key = '49e648308334459fb8dba2e49d20b199'
  const sitemap = 'https://icondumpsters.com/indexnow-sitemap.xml'
  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow',
  ]

  const results: Array<{ endpoint: string; status: number; ok: boolean }> = []
  for (const base of endpoints) {
    try {
      const url = `${base}?sitemap=${encodeURIComponent(sitemap)}&key=${encodeURIComponent(key)}`
      const res = await fetch(url, { method: 'GET', headers: { 'User-Agent': 'IconDumpsters-IndexNow/1.0' } })
      results.push({ endpoint: base, status: res.status, ok: res.ok || res.status === 202 })
    } catch {
      results.push({ endpoint: base, status: 0, ok: false })
    }
  }

  return NextResponse.json({ ok: true, sitemap, results, ts: new Date().toISOString() })
}

