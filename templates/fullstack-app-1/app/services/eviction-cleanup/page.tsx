import type { Metadata } from 'next';
import CityServicePage from '../../components/CityServicePage';
import { buildServiceMetadata } from '../../utils/servicePageHelpers';

const serviceSlug = 'eviction-cleanup';
const citySlug = 'utah';

export const metadata: Metadata = buildServiceMetadata(serviceSlug, citySlug, {
  canonicalPath: '/services/eviction-cleanup',
  alternates: {
    canonical: 'https://icondumpsters.com/services/eviction-cleanup',
  },
});

export default function GeneratedCityServicePage() {
  return (
    <CityServicePage
      serviceSlug={serviceSlug}
      citySlug={citySlug}
      canonicalPath='/services/eviction-cleanup'
      variant='services'
    />
  );
}
