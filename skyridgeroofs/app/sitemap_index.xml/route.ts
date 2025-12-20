import { absoluteUrl } from '@/lib/seo';
import { buildSitemapIndex } from '@/lib/sitemapXml';

export const revalidate = 86400;

export async function GET(): Promise<Response> {
  const now = new Date();

  const xml = buildSitemapIndex([
    { loc: absoluteUrl('/post-sitemap.xml'), lastmod: now },
    { loc: absoluteUrl('/page-sitemap.xml'), lastmod: now },
    { loc: absoluteUrl('/category-sitemap.xml'), lastmod: now },
    { loc: absoluteUrl('/post_tag-sitemap.xml'), lastmod: now },
    { loc: absoluteUrl('/author-sitemap.xml'), lastmod: now },
  ]);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
