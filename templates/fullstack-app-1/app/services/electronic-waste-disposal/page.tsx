import type { Metadata } from 'next';
import CityServicePage from '../../components/CityServicePage';
import { buildServiceMetadata } from '../../utils/servicePageHelpers';

const serviceSlug = 'electronic-waste-disposal';
const citySlug = 'utah';

export const metadata: Metadata = buildServiceMetadata(serviceSlug, citySlug, {
  canonicalPath: '/services/electronic-waste-disposal',
  alternates: {
    canonical: 'https://icondumpsters.com/services/electronic-waste-disposal',
  },
});

export default function GeneratedCityServicePage() {
  return (
    <CityServicePage
      serviceSlug={serviceSlug}
      citySlug={citySlug}
      canonicalPath='/services/electronic-waste-disposal'
      variant='services'
    />
  );
}
