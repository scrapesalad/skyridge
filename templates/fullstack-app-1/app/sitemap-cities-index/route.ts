import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const runtime = 'nodejs'

export async function GET() {
  const base = 'https://icondumpsters.com'
  const today = new Date().toISOString().slice(0, 10)

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

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${utahCities.map(city => `
  <sitemap>
    <loc>${base}/sitemap-cities/${city}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join('')}
</sitemapindex>`

  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
