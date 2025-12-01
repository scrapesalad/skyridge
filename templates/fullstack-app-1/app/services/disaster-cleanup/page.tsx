import type { Metadata } from 'next';
import CityServicePage from '../../components/CityServicePage';
import { buildServiceMetadata } from '../../utils/servicePageHelpers';

const serviceSlug = 'disaster-cleanup';
const citySlug = 'utah';

export const metadata: Metadata = buildServiceMetadata(serviceSlug, citySlug, {
  canonicalPath: '/services/disaster-cleanup',
  alternates: {
    canonical: 'https://icondumpsters.com/services/disaster-cleanup',
  },
});

export default function GeneratedCityServicePage() {
  return (
    <CityServicePage
      serviceSlug={serviceSlug}
      citySlug={citySlug}
      canonicalPath='/services/disaster-cleanup'
      variant='services'
    />
  );
}
