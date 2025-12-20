import type { MetadataRoute } from 'next';
import { CALCULATOR_ROUTES, INDEXABLE_CITY_SLUGS, INDEXABLE_ROUTES } from '@/data/seo';
import { getAllBlogPosts } from '@/data/blogData';
import { absoluteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const coreUrls: MetadataRoute.Sitemap = INDEXABLE_ROUTES.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/blog' ? 0.8 : 0.7,
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

  // Blog post URLs
  const blogPosts = getAllBlogPosts();
  const blogPostUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.lastModified ? new Date(post.lastModified) : new Date(post.publishedDate),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...coreUrls, ...cityUrls, ...calculatorUrls, ...blogPostUrls];
}
