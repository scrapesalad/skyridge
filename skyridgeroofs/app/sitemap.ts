import type { MetadataRoute } from 'next';
import { INDEXABLE_CITY_SLUGS, INDEXABLE_ROUTES } from '@/data/seo';
import { absoluteUrl } from '@/lib/seo';

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

  return [...coreUrls, ...cityUrls];
}

