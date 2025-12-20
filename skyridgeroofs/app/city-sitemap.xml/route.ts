import { INDEXABLE_CITY_SLUGS } from '@/data/seo';
import { TOP_LEVEL_LANDINGS } from '@/data/topLevelLandings';
import { absoluteUrl } from '@/lib/seo';
import { buildUrlSet } from '@/lib/sitemapXml';

export const revalidate = 86400;

export async function GET(): Promise<Response> {
  const now = new Date();

  const locationRoutes = INDEXABLE_CITY_SLUGS.map((slug) => `/locations/${slug}`);

  const cityContractorRoutes = TOP_LEVEL_LANDINGS.filter((p) => Boolean(p.citySlug)).map((p) => `/${p.slug}`);

  const unique = Array.from(new Set([...locationRoutes, ...cityContractorRoutes]));

  const xml = buildUrlSet(
    unique.map((route) => ({
      loc: absoluteUrl(route),
      lastmod: now,
      changefreq: 'monthly',
      priority: route.startsWith('/locations/') ? 0.6 : 0.7,
    })),
  );

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

