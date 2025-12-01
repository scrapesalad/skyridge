import type { Metadata } from 'next';
import CityServicePage from '../../components/CityServicePage';
import { buildServiceMetadata } from '../../utils/servicePageHelpers';

const serviceSlug = 'retail-cleanout';
const citySlug = 'utah';

export const metadata: Metadata = buildServiceMetadata(serviceSlug, citySlug, {
  canonicalPath: '/services/retail-cleanout',
  alternates: {
    canonical: 'https://icondumpsters.com/services/retail-cleanout',
  },
});

export default function GeneratedCityServicePage() {
  return (
    <CityServicePage
      serviceSlug={serviceSlug}
      citySlug={citySlug}
      canonicalPath='/services/retail-cleanout'
      variant='services'
    />
  );
}
