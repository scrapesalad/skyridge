import type { Metadata } from 'next';
import FeesAndSurcharges from '../components/FeesAndSurcharges';

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
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0d9488] mb-4">
            Fees & Surcharges
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Extra charges apply only for specific items or overweight loads.
          </p>
        </div>

        <FeesAndSurcharges />

        <div className="mt-12 bg-white rounded-2xl shadow-md border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Our Pricing</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              At Icon Dumpsters, we believe in transparent pricing. The base rental price includes delivery, pickup, and disposal fees up to the weight limit for your dumpster size. Additional charges only apply for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Weight overage:</strong> If your dumpster exceeds the weight limit, we charge $55 per ton for the excess weight.</li>
              <li><strong>Special items:</strong> Certain items require special handling and disposal, including mattresses, refrigerators, and tires ($25 each).</li>
            </ul>
            <p className="mt-4">
              We'll always provide a clear quote upfront, so you know exactly what to expect. No surprises, no hidden fees.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/#quote-form"
            className="inline-block bg-[#0d9488] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </div>
  );
}

