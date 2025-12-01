import type { Metadata } from 'next';
import CityServicePage from '../components/CityServicePage';
import { buildServiceMetadata } from '../utils/servicePageHelpers';

const serviceSlug = 'commercial-dumpster-rental';
const citySlug = 'utah';
const canonicalPath = '/commercial-dumpster-rental';

export const metadata: Metadata = buildServiceMetadata(serviceSlug, citySlug, {
  canonicalPath,
  alternates: {
    canonical: 'https://icondumpsters.com/commercial-dumpster-rental',
  },
});

export default function CommercialDumpsterRentalPage() {
  return (
    <CityServicePage
      serviceSlug={serviceSlug}
      citySlug={citySlug}
      canonicalPath={canonicalPath}
      variant="services"
    />
  );
}
