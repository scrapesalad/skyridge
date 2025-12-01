import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Friendly, Live Help | Icon Dumpsters',
  description: "Talk to a real person 7 days a week. Get advice on dumpster sizes, placement, timing, and special waste handling. Fast, affordable dumpster rental services for",
    openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Friendly, Live Help | Icon Dumpsters",
    description: "Talk to a real person 7 days a week. Get advice on dumpster sizes, placement, timing, and special waste handling. Fast, affordable dumpster rental services for",
    url: 'https://icondumpsters.com/friendly-live-help',
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
    title: "Friendly, Live Help | Icon Dumpsters",
    description: "Talk to a real person 7 days a week. Get advice on dumpster sizes, placement, timing, and special waste handling. Fast, affordable dumpster rental services for",
    images: ['/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp'],
  },
  alternates: { canonical: 'https://icondumpsters.com/friendly-live-help' },
};

export default function FriendlyLiveHelpPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="https://icondumpsters.com/" className="text-[#0d9488] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Friendly, Live Help</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Friendly, Live Help</h1>
        <p className="text-lg text-gray-700 mb-6">Need guidance before you book? Call <a href="tel:801-918-6000" className="text-[#0d9488] underline">(801) 918‑6000</a>. We’ll recommend the right size, answer permit questions, and schedule quickly.</p>
        <p className="text-gray-700">Prefer a callback? Use the quote form and choose your preferred contact method. We respond fast.</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="https://icondumpsters.com/#quote-form" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700">Get Free Quote</a>
          <a href="tel:801-918-6000" className="inline-block border-2 border-[#0d9488] text-[#0d9488] px-6 py-3 rounded-lg font-semibold hover:bg-[#0d9488] hover:text-white">Call (801) 918-6000</a>
        </div>
      </div>
    </div>
  );
}


