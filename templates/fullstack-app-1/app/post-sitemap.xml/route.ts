import { NextResponse } from 'next/server'
import postsData from '../../posts-metadata.json'

export const dynamic = 'force-static'
export const runtime = 'nodejs'

// Slugs that should be marked as noindex and excluded from sitemap
const NOINDEX_SLUGS = new Set<string>(['test-route'])

export async function GET() {
  const base = 'https://icondumpsters.com'
  
  const posts = postsData as Array<{
    slug: string;
    title: string;
    url: string;
    lastmod: string;
    priority: number;
  }>

  // Filter out noindex posts from sitemap
  const indexablePosts = posts.filter((post) => !NOINDEX_SLUGS.has(post.slug))

  const urls = indexablePosts.map((post) => ({
    loc: `${base}${post.url}`,
    lastmod: post.lastmod,
    changefreq: 'monthly',
    priority: post.priority,
  }))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}

