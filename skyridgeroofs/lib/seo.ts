import { SITE_URL } from '@/lib/site';

/**
 * Ensures the base URL is skyridgeroofs.com (no www)
 */
const BASE_URL = SITE_URL.replace(/^https?:\/\/(www\.)?/, 'https://');

export function absoluteUrl(pathname: string): string {
  const base = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

/**
 * Get canonical URL for metadata
 */
export function canonicalUrl(pathname: string): string {
  return absoluteUrl(pathname);
}

