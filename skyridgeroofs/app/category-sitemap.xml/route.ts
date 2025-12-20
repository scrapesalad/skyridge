import { absoluteUrl } from '@/lib/seo';
import { buildUrlSet } from '@/lib/sitemapXml';

export const revalidate = 86400;

const CATEGORY_HUB_ROUTES = ['/services', '/materials', '/locations', '/calculators'] as const;

export async function GET(): Promise<Response> {
  const now = new Date();

  const xml = buildUrlSet(
    CATEGORY_HUB_ROUTES.map((route) => ({
      loc: absoluteUrl(route),
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
