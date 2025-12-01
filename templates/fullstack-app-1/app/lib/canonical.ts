/**
 * Canonical URL utility functions
 * Ensures all canonical URLs use absolute, non-www URLs
 */

export const SITE_URL = 'https://icondumpsters.com';

/**
 * Generate a canonical URL for a page path
 * @param path - The page path (e.g., '/blog', '/services')
 * @returns Absolute canonical URL
 */
export function getCanonicalUrl(path: string): string {
  // Remove leading/trailing slashes except for root
  const cleanPath = path === '/' ? '/' : path.replace(/^\/+|\/+$/g, '');
  
  // Ensure path starts with /
  const normalizedPath = cleanPath === '' ? '/' : `/${cleanPath}`;
  
  // Return absolute URL
  return `${SITE_URL}${normalizedPath}`;
}

/**
 * Generate canonical metadata for Next.js
 * @param path - The page path
 * @returns Metadata alternates object
 */
export function getCanonicalMetadata(path: string) {
  return {
    alternates: {
      canonical: getCanonicalUrl(path),
    },
  };
}

/**
 * Check if a URL is already absolute
 */
export function isAbsoluteUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

/**
 * Normalize a URL to be absolute and non-www
 */
export function normalizeUrl(url: string): string {
  if (isAbsoluteUrl(url)) {
    // Remove www if present
    return url.replace(/^https?:\/\/www\./, 'https://');
  }
  return getCanonicalUrl(url);
}

