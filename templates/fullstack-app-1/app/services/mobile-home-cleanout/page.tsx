import type { Metadata } from 'next';
import CityServicePage from '../../components/CityServicePage';
import { buildServiceMetadata } from '../../utils/servicePageHelpers';

const serviceSlug = 'mobile-home-cleanout';
const citySlug = 'utah';

export const metadata: Metadata = buildServiceMetadata(serviceSlug, citySlug, {
  canonicalPath: '/services/mobile-home-cleanout',
  alternates: {
    canonical: 'https://icondumpsters.com/services/mobile-home-cleanout',
  },
});

export default function GeneratedCityServicePage() {
  return (
    <CityServicePage
      serviceSlug={serviceSlug}
      citySlug={citySlug}
      canonicalPath='/services/mobile-home-cleanout'
      variant='services'
    />
  );
}
