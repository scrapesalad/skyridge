/**
 * Pagination metadata utility for Next.js
 * Generates rel="prev" and rel="next" links for paginated pages
 */

import { Metadata } from 'next';
import { getCanonicalUrl } from '@/app/lib/canonical';

interface PaginationMetadataProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  currentMetadata: Metadata;
}

/**
 * Add pagination metadata (rel="prev" and rel="next") to existing metadata
 */
export function addPaginationMetadata({
  currentPage,
  totalPages,
  basePath,
  currentMetadata,
}: PaginationMetadataProps): Metadata {
  const alternates: { canonical?: string; prev?: string; next?: string } = {
    canonical: getCanonicalUrl(basePath + (currentPage > 1 ? `?page=${currentPage}` : '')),
  };

  // Add prev link if not on first page
  if (currentPage > 1) {
    if (currentPage === 2) {
      alternates.prev = getCanonicalUrl(basePath);
    } else {
      alternates.prev = getCanonicalUrl(`${basePath}?page=${currentPage - 1}`);
    }
  }

  // Add next link if not on last page
  if (currentPage < totalPages) {
    alternates.next = getCanonicalUrl(`${basePath}?page=${currentPage + 1}`);
  }

  return {
    ...currentMetadata,
    alternates: {
      ...currentMetadata.alternates,
      ...alternates,
    },
  };
}

/**
 * Generate pagination metadata for a paginated page
 */
export function generatePaginationMetadata(
  currentPage: number,
  totalPages: number,
  basePath: string,
  baseMetadata: Metadata
): Metadata {
  return addPaginationMetadata({
    currentPage,
    totalPages,
    basePath,
    currentMetadata: baseMetadata,
  });
}

