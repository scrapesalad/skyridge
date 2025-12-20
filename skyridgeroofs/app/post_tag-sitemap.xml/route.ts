import { CALCULATOR_ROUTES } from '@/data/seo';
import { absoluteUrl } from '@/lib/seo';
import { buildUrlSet } from '@/lib/sitemapXml';

export const revalidate = 86400;

export async function GET(): Promise<Response> {
  const now = new Date();

  // Treat calculators as tag-like utility content.
  const calculatorRoutes = CALCULATOR_ROUTES.filter((route) => route !== '/calculators');

  const xml = buildUrlSet(
    calculatorRoutes.map((route) => ({
      loc: absoluteUrl(route),
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.5,
    })),
  );

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
