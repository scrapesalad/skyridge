import { INDEXABLE_ROUTES } from '@/data/seo';
import { absoluteUrl } from '@/lib/seo';
import { buildUrlSet } from '@/lib/sitemapXml';
import { TOP_LEVEL_LANDINGS } from '@/data/topLevelLandings';

export const revalidate = 86400;

const CATEGORY_HUB_ROUTES = new Set(['/services', '/materials', '/locations', '/calculators']);

export async function GET(): Promise<Response> {
  const now = new Date();

  const pageRoutes = INDEXABLE_ROUTES.filter(
    (route) => !route.startsWith('/services/') && !CATEGORY_HUB_ROUTES.has(route),
  );

  const topLevelLandingRoutes = TOP_LEVEL_LANDINGS.map((p) => `/${p.slug}`);

  const xml = buildUrlSet(
    [...pageRoutes, '/roofing', ...topLevelLandingRoutes].map((route) => {
      const landing = TOP_LEVEL_LANDINGS.find((p) => `/${p.slug}` === route);
      return {
        loc: absoluteUrl(route),
        lastmod: now,
        changefreq: route === '/' ? 'weekly' : 'monthly',
        priority: route === '/' ? 1.0 : 0.7,
        images: landing ? [absoluteUrl(landing.heroImage)] : undefined,
      };
    }),
  );

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
