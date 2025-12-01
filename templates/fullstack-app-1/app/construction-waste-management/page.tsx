import type { Metadata } from 'next';
import CityServicePage from '../components/CityServicePage';
import { buildServiceMetadata } from '../utils/servicePageHelpers';

const serviceSlug = 'construction-waste-management';
const citySlug = 'utah';
const canonicalPath = '/construction-waste-management';

export const metadata: Metadata = buildServiceMetadata(serviceSlug, citySlug, {
  canonicalPath,
  alternates: {
    canonical: 'https://icondumpsters.com/construction-waste-management',
  },
});

export default function ConstructionWasteManagementPage() {
  return (
    <CityServicePage
      serviceSlug={serviceSlug}
      citySlug={citySlug}
      canonicalPath={canonicalPath}
      variant="services"
    />
  );
}
