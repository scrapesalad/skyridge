import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Load Your Dumpster & Schedule Pickup | Icon Dumpsters',
  description: "Guidelines for safe loading, restricted items, and how to schedule your pickup when finished. Contact Icon Dumpsters for reliable service.",
    openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Load Your Dumpster & Schedule Pickup | Icon Dumpsters",
    description: "Guidelines for safe loading, restricted items, and how to schedule your pickup when finished. Contact Icon Dumpsters for reliable service.",
    url: 'https://icondumpsters.com/load-dumpster-and-schedule-pickup',
    images: [
      {
        url: '/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp',
        width: 1200,
        height: 630,
        alt: 'Icon Dumpsters Utah',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Load Your Dumpster & Schedule Pickup | Icon Dumpsters",
    description: "Guidelines for safe loading, restricted items, and how to schedule your pickup when finished. Contact Icon Dumpsters for reliable service.",
    images: ['/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp'],
  },
  alternates: { canonical: 'https://icondumpsters.com/load-dumpster-and-schedule-pickup' },
};

export default function LoadDumpsterPickupPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="https://icondumpsters.com/" className="text-[#0d9488] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Load Dumpster & Schedule Pickup</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Load Your Dumpster & Schedule Pickup</h1>
        <p className="text-lg text-gray-700 mb-6">Best practices for loading evenly, keeping weight under limits, and booking your pickup.</p>
        <p className="text-gray-700">Avoid prohibited items like liquids, batteries, and hazardous waste. Call us if unsure.</p>
      </div>
    </div>
  );
}


