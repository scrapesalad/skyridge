import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multiple Sizes Available | Icon Dumpsters',
  description: "From 15‑yard to 30‑yard dumpsters, we have the perfect size for your project needs and space constraints. Fast, affordable dumpster rental services for",
    openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Multiple Sizes Available | Icon Dumpsters",
    description: "From 15‑yard to 30‑yard dumpsters, we have the perfect size for your project needs and space constraints. Fast, affordable dumpster rental services for",
    url: 'https://icondumpsters.com/multiple-sizes-available',
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
    title: "Multiple Sizes Available | Icon Dumpsters",
    description: "From 15‑yard to 30‑yard dumpsters, we have the perfect size for your project needs and space constraints. Fast, affordable dumpster rental services for",
    images: ['/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp'],
  },
  alternates: { canonical: 'https://icondumpsters.com/multiple-sizes-available' },
};

export default function MultipleSizesAvailablePage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="https://icondumpsters.com/" className="text-[#0d9488] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Multiple Sizes Available</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Multiple Sizes Available</h1>
        <p className="text-lg text-gray-700 mb-6">From small cleanouts to major renovations, choose from 15‑, 20‑ and 30‑yard roll‑off dumpsters.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>15‑yard: tight driveways and small projects</li>
          <li>20‑yard: most renovations and roofing</li>
          <li>30‑yard: large construction and cleanouts</li>
        </ul>
        <div className="mt-10">
          <a href="https://icondumpsters.com/dumpster-sizes" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700">View Dumpster Sizes</a>
        </div>
      </div>
    </div>
  );
}


