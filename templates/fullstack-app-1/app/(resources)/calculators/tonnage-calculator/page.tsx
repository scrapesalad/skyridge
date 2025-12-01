import Link from "next/link";
import type { Metadata } from "next";
import TonnageCalculatorClient from "./TonnageCalculatorClient";
import RelatedPages from '@/app/components/RelatedPages';

export const metadata: Metadata = {
  title: "Tonnage Calculator – Estimate Material Weights | Icon Dumpsters",
  description: "Estimate tons from volume and material type to choose the right dumpster and avoid overweight charges. $55/ton billed after weighing.",
  alternates: { canonical: 'https://icondumpsters.com/calculators/tonnage-calculator' },
  openGraph: {
    title: "Tonnage Calculator – Estimate Material Weights | Icon Dumpsters",
    description: "Estimate tons from volume and material type to choose the right dumpster and avoid overweight charges. $55/ton billed after weighing.",
    url: 'https://icondumpsters.com/calculators/tonnage-calculator',
    siteName: 'Icon Dumpsters',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://icondumpsters.com/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Tonnage Calculator - Estimate Material Weights for Dumpster Rentals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tonnage Calculator – Estimate Material Weights | Icon Dumpsters",
    description: "Estimate tons from volume and material type to choose the right dumpster and avoid overweight charges. $55/ton billed after weighing.",
  },
};

export default function TonnageCalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-r from-[#0d9488] to-teal-700 text-white py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tonnage Calculator</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Estimate material weights to choose the right dumpster and avoid overweight charges.</p>
        </div>
      </section>

      <TonnageCalculatorClient />

      {/* Related Calculators Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Other Dumpster Calculators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/dumpster-calculator" className="block p-6 bg-teal-50 rounded-xl border-2 border-teal-200 hover:border-teal-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">All Calculators</h3>
              <p className="text-sm text-gray-600 mb-3">Browse our complete suite of dumpster calculators</p>
              <span className="text-teal-600 font-semibold">View All →</span>
            </Link>
            <Link href="/dumpster-calculator/quote" className="block p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quote Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Get instant pricing estimates for your dumpster rental</p>
              <span className="text-blue-600 font-semibold">Get Quote →</span>
            </Link>
            <Link href="/dumpster-size-calculator" className="block p-6 bg-purple-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Size Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Find the perfect dumpster size for your project</p>
              <span className="text-purple-600 font-semibold">Calculate Size →</span>
            </Link>
            <Link href="/demolition-calculator" className="block p-6 bg-red-50 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Demolition Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Calculate dumpster needs for demolition projects</p>
              <span className="text-red-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/roofing-calculator" className="block p-6 bg-purple-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Roofing Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Estimate dumpster size for roofing projects</p>
              <span className="text-purple-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/dumpster-calculator-for-concrete" className="block p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Concrete Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Calculate concrete disposal costs and dumpster size</p>
              <span className="text-gray-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/demolition-dumpster" className="block p-6 bg-orange-50 rounded-xl border-2 border-orange-300 hover:border-orange-500 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Demolition Dumpster Guide</h3>
              <p className="text-sm text-gray-600 mb-3">Commercial demolition dumpsters for contractors</p>
              <span className="text-orange-600 font-semibold">Learn More →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


