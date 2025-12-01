import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const runtime = 'nodejs'

// List of all Utah cities we serve
const utahCities = [
  'salt-lake-city',
  'west-jordan', 
  'sandy',
  'murray',
  'taylorsville',
  'midvale',
  'millcreek',
  'holladay',
  'kearns',
  'magna',
  'riverton',
  'south-jordan',
  'south-salt-lake',
  'west-valley-city',
  'cottonwood-heights',
  'draper',
  'herriman',
  'bluffdale',
  'copperton',
  'brighton',
  'alta',
  'emigration-canyon',
  'white-city',
  'american-fork',
  'bountiful',
  'centerville',
  'clearfield',
  'davis-county',
  'eagle-mountain',
  'farmington',
  'kaysville',
  'layton',
  'lehi',
  'lindon',
  'north-salt-lake',
  'orem',
  'pleasant-grove',
  'poplar-grove',
  'provo',
  'saratoga-springs',
  'ogden',
  'roy',
  'weber-county',
  'park-city',
  'summit-county',
  'tooele',
  'tooele-county',
  'cache-county',
  'wasatch-county',
  'utah-county',
  'salt-lake-county'
]

export async function GET(
  request: Request,
  context: { params: Promise<{ city: string }> }
) {
  const { city } = await context.params
  const base = 'https://icondumpsters.com'
  const today = new Date().toISOString().slice(0, 10)

  // Validate city parameter
  if (!utahCities.includes(city)) {
    return new NextResponse('City not found', { status: 404 })
  }

  // Generate city-specific sitemap
  const citySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main city page -->
  <url>
    <loc>${base}/dumpster-rental-${city}-ut</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Residential dumpster rental -->
  <url>
    <loc>${base}/services/residential-dumpster-rental-${city}-ut</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Commercial dumpster rental -->
  <url>
    <loc>${base}/services/commercial-dumpster-rental-${city}-ut</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- City dumpster rentals -->
  <url>
    <loc>${base}/${city}-dumpster-rentals</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Dumpster rental near me -->
  <url>
    <loc>${base}/dumpster-rental-near-me-${city}-ut</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- City dumpster rental guide -->
  <url>
    <loc>${base}/${city}-dumpster-rental-guide-2025</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- 15 yard dumpster rental -->
  <url>
    <loc>${base}/15-yard-dumpster-rental-${city}-ut</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- 20 yard dumpster rental -->
  <url>
    <loc>${base}/20-yard-dumpster-rental-${city}-ut</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- 30 yard dumpster rental -->
  <url>
    <loc>${base}/30-yard-dumpster-rental-${city}-ut</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`

  return new NextResponse(citySitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
