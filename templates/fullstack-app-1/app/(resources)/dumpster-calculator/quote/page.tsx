import Link from "next/link";
import type { Metadata } from "next";
import DumpsterCalculator from "@/app/components/DumpsterCalculator";
import RelatedPages from '@/app/components/RelatedPages';

export const metadata: Metadata = {
  title: "Dumpster Quote Calculator - Get Instant Pricing | Icon Dumpsters",
  description: "Get instant pricing estimates for your dumpster rental. Our advanced calculator includes veteran discounts, special rates, and accurate Utah pricing.",
  keywords: "dumpster quote calculator, dumpster pricing calculator, Utah dumpster rental cost, dumpster rental estimate",
  alternates: { canonical: 'https://icondumpsters.com/dumpster-calculator/quote' }};

export default function DumpsterQuoteCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#0d9488] to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dumpster Quote Calculator</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Get instant <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link> estimates for your dumpster rental with our advanced cost calculator. 
            Includes veteran discounts, special rates, and accurate Utah <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link>.
          </p>
        </div>
      </div>

      <DumpsterCalculator />

      {/* Related Calculators Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Other Dumpster Calculators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/dumpster-calculator" className="block p-6 bg-teal-50 rounded-xl border-2 border-teal-200 hover:border-teal-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">All Calculators</h3>
              <p className="text-gray-600 text-sm mb-3">Browse our complete suite of dumpster calculators</p>
              <span className="text-teal-600 font-semibold">View All →</span>
            </Link>
            <Link href="/dumpster-size-calculator" className="block p-6 bg-purple-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Size Calculator</h3>
              <p className="text-gray-600 text-sm mb-3">Find the perfect dumpster size for your project</p>
              <span className="text-purple-600 font-semibold">Calculate Size →</span>
            </Link>
            <Link href="/tonnage-calculator" className="block p-6 bg-orange-50 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tonnage Calculator</h3>
              <p className="text-gray-600 text-sm mb-3">Estimate material weights to avoid overweight charges</p>
              <span className="text-orange-600 font-semibold">Calculate Weight →</span>
            </Link>
            <Link href="/demolition-calculator" className="block p-6 bg-red-50 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Demolition Calculator</h3>
              <p className="text-gray-600 text-sm mb-3">Calculate dumpster needs for demolition projects</p>
              <span className="text-red-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/roofing-calculator" className="block p-6 bg-purple-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Roofing Calculator</h3>
              <p className="text-gray-600 text-sm mb-3">Estimate dumpster size for roofing projects</p>
              <span className="text-purple-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/dumpster-calculator-for-concrete" className="block p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Concrete Calculator</h3>
              <p className="text-gray-600 text-sm mb-3">Calculate concrete disposal costs and dumpster size</p>
              <span className="text-gray-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/demolition-dumpster" className="block p-6 bg-orange-50 rounded-xl border-2 border-orange-300 hover:border-orange-500 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Demolition Dumpster Guide</h3>
              <p className="text-gray-600 text-sm mb-3">Commercial demolition dumpsters for contractors</p>
              <span className="text-orange-600 font-semibold">Learn More →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
