import { INDEXABLE_CITY_SLUGS } from '@/data/seo';
import { absoluteUrl } from '@/lib/seo';
import { buildUrlSet } from '@/lib/sitemapXml';

export const revalidate = 86400;

export async function GET(): Promise<Response> {
  const now = new Date();

  const xml = buildUrlSet(
    INDEXABLE_CITY_SLUGS.map((slug) => ({
      loc: absoluteUrl(`/locations/${slug}`),
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.6,
    })),
  );

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
