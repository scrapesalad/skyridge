import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const runtime = 'nodejs'

/**
 * IndexNow Sitemap - References other sitemaps to avoid duplication
 * This sitemap should NOT duplicate URLs from sitemap.xml or post-sitemap.xml
 * Instead, it references them using a sitemap index format
 */
export async function GET() {
  const base = 'https://icondumpsters.com'
  const now = new Date().toISOString()
  
  // IndexNow sitemap should reference other sitemaps, not duplicate URLs
  // This prevents pages from appearing in multiple sitemaps
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${base}/sitemap.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${base}/post-sitemap.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}

