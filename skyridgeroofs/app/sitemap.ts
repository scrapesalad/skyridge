import type { MetadataRoute } from 'next';
import { INDEXABLE_CITY_SLUGS, INDEXABLE_ROUTES } from '@/data/seo';
import { absoluteUrl } from '@/lib/seo';

// Calculator routes
const CALCULATOR_ROUTES = [
  '/calculators',
  '/calculators/roofing-cost',
  '/calculators/shingle',
  '/calculators/roof-pitch',
  '/calculators/roofing-material',
  '/calculators/gutter-size',
  '/calculators/square-footage',
  '/calculators/roofing-square',
  '/calculators/ventilation',
  '/calculators/replacement-cost',
  '/calculators/labor-cost',
  '/calculators/warranty',
  '/calculators/insulation',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const coreUrls: MetadataRoute.Sitemap = INDEXABLE_ROUTES.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));

  const cityUrls: MetadataRoute.Sitemap = INDEXABLE_CITY_SLUGS.map((slug) => ({
    url: absoluteUrl(`/locations/${slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const calculatorUrls: MetadataRoute.Sitemap = CALCULATOR_ROUTES.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...coreUrls, ...cityUrls, ...calculatorUrls];
}

