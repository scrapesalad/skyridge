// Canonical URL validation utility
// This helps ensure all pages have correct canonical URLs

export function validateCanonicalUrl(pagePath: string, canonicalUrl: string): boolean {
  // Remove trailing slashes for comparison
  const normalizedPath = pagePath.replace(/\/$/, '') || '/';
  const normalizedCanonical = canonicalUrl.replace(/\/$/, '') || '/';
  
  // Extract path from canonical URL
  const canonicalPath = normalizedCanonical.replace('https://icondumpsters.com', '');
  
  // Check if canonical URL matches the actual page path
  return normalizedPath === canonicalPath;
}

export function generateCanonicalUrl(pagePath: string): string {
  const baseUrl = 'https://icondumpsters.com';
  const normalizedPath = pagePath === '/' ? '' : pagePath;
  return `${baseUrl}${normalizedPath}`;
}

export function fixCanonicalUrl(pagePath: string, currentCanonical: string): string {
  // If current canonical is incorrect, return the correct one
  if (!validateCanonicalUrl(pagePath, currentCanonical)) {
    return generateCanonicalUrl(pagePath);
  }
  return currentCanonical;
}
