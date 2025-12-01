import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fees & Surcharges | Icon Dumpsters',
  description: 'Transparent dumpster rental fees in Utah: weight billed at $55/ton after pickup, plus optional item surcharges (mattress, fridge, tires). No hidden fees.',
    openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Fees & Surcharges | Icon Dumpsters",
    description: "Transparent dumpster rental fees in Utah: weight billed at $55/ton after pickup, plus optional item surcharges (mattress, fridge, tires). No hidden fees.",
    url: 'https://icondumpsters.com/fees',
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
    title: "Fees & Surcharges | Icon Dumpsters",
    description: "Transparent dumpster rental fees in Utah: weight billed at $55/ton after pickup, plus optional item surcharges (mattress, fridge, tires). No hidden fees.",
    images: ['/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp'],
  },
  alternates: { canonical: 'https://icondumpsters.com/fees' },
  robots: { index: true, follow: true }
};

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Fees & Surcharges</h1>
        <p className="text-lg text-gray-600 mb-8">
          Transparent dumpster rental fees in Utah: weight billed at $55/ton after pickup, plus optional item surcharges (mattress, fridge, tires). No hidden fees.
        </p>
      </div>
    </div>
  );
}


