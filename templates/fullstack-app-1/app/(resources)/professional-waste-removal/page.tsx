import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Waste Removal | Icon Dumpsters',
  description: "What happens after you fill your dumpster: timely pickup, responsible disposal, and recycling where possible. Fast, affordable dumpster rental services for",
    openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Professional Waste Removal | Icon Dumpsters",
    description: "What happens after you fill your dumpster: timely pickup, responsible disposal, and recycling where possible. Fast, affordable dumpster rental services for",
    url: 'https://icondumpsters.com/professional-waste-removal',
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
    title: "Professional Waste Removal | Icon Dumpsters",
    description: "What happens after you fill your dumpster: timely pickup, responsible disposal, and recycling where possible. Fast, affordable dumpster rental services for",
    images: ['/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp'],
  },
  alternates: { canonical: 'https://icondumpsters.com/professional-waste-removal' },
};

export default function ProfessionalWasteRemovalPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="https://icondumpsters.com/" className="text-[#0d9488] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Professional Waste Removal</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Waste Removal</h1>
        <p className="text-lg text-gray-700 mb-6">Our team removes and disposes of materials responsibly with full compliance.</p>
        <p className="text-gray-700">We prioritize recycling streams for concrete, metal, and clean wood when available.</p>
      </div>
    </div>
  );
}


