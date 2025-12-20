import { INDEXABLE_ROUTES } from '@/data/seo';
import { absoluteUrl } from '@/lib/seo';
import { buildUrlSet } from '@/lib/sitemapXml';
import { LANDING_PAGES, LANDING_PAGE_SLUGS } from '@/data/landingPages';

export const revalidate = 86400;

export async function GET(): Promise<Response> {
  const now = new Date();

  const serviceDetailRoutes = INDEXABLE_ROUTES.filter(
    (route) => route.startsWith('/services/') && route !== '/services',
  );

  const landingBySlug = new Map(LANDING_PAGES.map((p) => [p.slug, p]));
  const landingRoutes = LANDING_PAGE_SLUGS.map((slug) => `/roofing/${slug}`);

  const xml = buildUrlSet(
    [...serviceDetailRoutes, ...landingRoutes].map((route) => {
      const slug = route.startsWith('/roofing/') ? route.slice('/roofing/'.length) : null;
      const landing = slug ? landingBySlug.get(slug) : null;

      return {
        loc: absoluteUrl(route),
        lastmod: now,
        changefreq: 'monthly',
        priority: route.startsWith('/roofing/') ? 0.7 : 0.8,
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
