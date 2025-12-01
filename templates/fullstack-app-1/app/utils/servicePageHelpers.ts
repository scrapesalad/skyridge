import type { Metadata } from 'next';
import { buildDefaultMetadata } from '../config/serviceTemplates';

interface MetadataOptions {
  canonicalPath: string;
}

export function buildServiceMetadata(
  serviceSlug: string,
  citySlug: string,
  options: MetadataOptions | string
): Metadata {
  // Handle both object and string inputs for backward compatibility
  const canonicalPath = typeof options === 'string' ? options : options.canonicalPath;
  
  if (!canonicalPath) {
    console.error(`Missing canonicalPath for serviceSlug: ${serviceSlug}, citySlug: ${citySlug}`);
  }
  
  return buildDefaultMetadata(serviceSlug, citySlug, canonicalPath || `/${citySlug}-dumpster-rentals`);
}
