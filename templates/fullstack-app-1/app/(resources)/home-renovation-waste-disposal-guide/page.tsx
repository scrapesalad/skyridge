import type { Metadata } from 'next';
import HomeRenovationWasteDisposal from './HomeRenovationClient';

export const metadata: Metadata = {
  title: 'Home Renovation Waste Disposal Guide | Icon Dumpsters',
  description: 'Complete guide to managing renovation waste: dumpster sizes, sorting, recycling, and cost-saving tips for Utah homeowners and contractors.',
  alternates: { canonical: 'https://icondumpsters.com/home-renovation-waste-disposal-guide' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Home Renovation Waste Disposal Guide | Icon Dumpsters',
    description: 'Complete guide to managing renovation waste: dumpster sizes, sorting, recycling, and cost-saving tips for Utah homeowners and contractors.',
    url: 'https://icondumpsters.com/home-renovation-waste-disposal-guide',
    images: [{ url: '/images/home-renovation.jpg', width: 1200, height: 630, alt: 'Home Renovation Waste Disposal Guide' }],
    type: 'article',
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <HomeRenovationWasteDisposal />;
}
