import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Competitive Pricing | Icon Dumpsters',
  description: 'Transparent, competitive dumpster rental pricing with no surprises. Learn how we price fairly across Utah and ways to save.',
    openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Competitive Pricing | Icon Dumpsters",
    description: "Transparent, competitive dumpster rental pricing with no surprises. Learn how we price fairly across Utah and ways to save.",
    url: 'https://icondumpsters.com/pricing/competitive-pricing',
    images: [
      {
        url: 'https://icondumpsters.com/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp',
        width: 1200,
        height: 630,
        alt: 'Icon Dumpsters Utah',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Competitive Pricing | Icon Dumpsters",
    description: "Transparent, competitive dumpster rental pricing with no surprises. Learn how we price fairly across Utah and ways to save.",
    images: ['https://icondumpsters.com/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp'],
  },
  alternates: { canonical: 'https://icondumpsters.com/pricing/competitive-pricing' },
};

export default function CompetitivePricingPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="https://icondumpsters.com/" className="text-[#0d9488] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Competitive Pricing</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Competitive Pricing</h1>
        <p className="text-lg text-gray-700 mb-6">We keep pricing simple and fair. No surprise add‑ons — just transparent rates with delivery, pickup, and landfill fees clearly outlined.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Clear base rates by dumpster size</li>
          <li>Distance and fuel already factored for our usual service areas</li>
          <li>Easy ways to save: weekday delivery windows, veteran discounts, and longer bookings</li>
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="https://icondumpsters.com/#quote-form" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700">Get Free Quote</a>
          <a href="tel:801-918-6000" className="inline-block border-2 border-[#0d9488] text-[#0d9488] px-6 py-3 rounded-lg font-semibold hover:bg-[#0d9488] hover:text-white">Call (801) 918-6000</a>
        </div>
      </div>
    </div>
  );
}


