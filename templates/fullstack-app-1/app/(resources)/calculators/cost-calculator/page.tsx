import Link from "next/link";
import type { Metadata } from "next";
import FAQSchema from "@/app/components/FAQSchema";
import RelatedPages from '@/app/components/RelatedPages';

export const metadata: Metadata = {
  title: "Dumpster Rental Cost Calculator Utah: Pricing Guide | Icon Dumpsters",
  description: "Complete dumpster rental cost calculator for Utah. Calculate total costs including rental fees, permits, weight charges, and hidden fees. Get accurate pricing estimates.",
  keywords: ['dumpster rental cost calculator utah', 'dumpster rental pricing utah', 'dumpster rental cost breakdown', 'utah dumpster rental fees', 'dumpster rental hidden costs'],
  alternates: { canonical: 'https://icondumpsters.com/calculators/cost-calculator' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Dumpster Rental Cost Calculator Utah: Pricing Guide | Icon Dumpsters",
    description: "Complete dumpster rental cost calculator for Utah. Calculate total costs including rental fees, permits, weight charges, and hidden fees. Get accurate pricing estimates.",
    url: 'https://icondumpsters.com/calculators/cost-calculator',
    images: [{ url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp', width: 1200, height: 630, alt: 'Utah Dumpster Rental Cost Calculator' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

const costFAQs = [
  {
    question: "What's included in the base dumpster rental cost in Utah?",
    answer: "Base dumpster rental costs in Utah typically include delivery, pickup, and the rental period (usually 7-14 days). However, landfill disposal fees are almost always separate and charged at $55/ton based on actual weight. Some companies include a small weight allowance (1-2 tons), but most charge for all weight. Always ask what's included in the quoted price to avoid surprises."
  },
  {
    question: "How much do dumpster permits cost in Utah cities?",
    answer: "Dumpster permit costs in Utah range from $25-75 depending on the city and duration. Salt Lake City charges $50 for 7 days, West Jordan charges $35 for 14 days, Sandy charges $40 for 10 days, and Murray charges $30 for 7 days. Permits are only required when placing dumpsters on public property (streets, sidewalks). Private property placement (driveways, yards) doesn't require permits."
  },
  {
    question: "What are the hidden fees in dumpster rental?",
    answer: "Common hidden fees include: weight overage charges ($50-100/ton), extended rental fees ($5-15/day), prohibited material fees ($50-200), overweight pickup fees ($100-300), and environmental fees ($10-25). Some companies also charge fuel surcharges, delivery fees, or processing fees. Always ask for a complete cost breakdown including all potential fees before signing any rental agreement."
  },
  {
    question: "How is dumpster weight calculated and charged?",
    answer: "Dumpster weight is calculated when the dumpster is picked up and taken to the landfill. The total weight minus the empty dumpster weight equals your waste weight. Most Utah companies charge $55/ton for disposal, with no weight included in the base rental price. Heavy materials like concrete, dirt, or roofing shingles can quickly add significant costs. A 20-yard dumpster filled with concrete could weigh 8-10 tons, adding $275-330 in disposal fees."
  },
  {
    question: "Can I get a fixed-price dumpster rental in Utah?",
    answer: "Some Utah dumpster rental companies offer fixed-price options, but they're rare and usually have strict limitations. Fixed prices typically include a specific weight allowance (2-4 tons) and short rental periods (7 days). Exceeding these limits results in additional charges. Most companies use weight-based pricing because landfill disposal costs are weight-dependent. Always clarify pricing structure before renting."
  }
];

const costBreakdown = [
  {
    category: "Base Rental Cost",
    items: [
      { name: "15-yard dumpster", cost: "$300-400", description: "7-14 day rental period" },
      { name: "20-yard dumpster", cost: "$350-450", description: "7-14 day rental period" },
      { name: "30-yard dumpster", cost: "$450-600", description: "7-14 day rental period" }
    ]
  },
  {
    category: "Permit Costs (if needed)",
    items: [
      { name: "Salt Lake City", cost: "$50", description: "7-day permit" },
      { name: "West Jordan", cost: "$35", description: "14-day permit" },
      { name: "Sandy", cost: "$40", description: "10-day permit" },
      { name: "Murray", cost: "$30", description: "7-day permit" }
    ]
  },
  {
    category: "Disposal Fees",
    items: [
      { name: "Landfill disposal", cost: "$55/ton", description: "Based on actual weight" },
      { name: "Weight allowance", cost: "$0-2 tons", description: "Varies by company" },
      { name: "Overage charges", cost: "$50-100/ton", description: "Over weight limit" }
    ]
  },
  {
    category: "Additional Fees",
    items: [
      { name: "Extended rental", cost: "$5-15/day", description: "Beyond included period" },
      { name: "Prohibited materials", cost: "$50-200", description: "Hazardous waste fees" },
      { name: "Overweight pickup", cost: "$100-300", description: "Exceeds truck capacity" },
      { name: "Environmental fee", cost: "$10-25", description: "Waste processing fee" }
    ]
  }
];

export default function DumpsterRentalCostCalculator() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d9488] to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Dumpster Rental Cost Calculator for Utah
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Complete cost breakdown for dumpster rentals in Utah. Calculate total expenses including rental fees, permits, weight charges, and hidden costs. Get accurate <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link> estimates for your project.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Complete Cost Breakdown</span>
              </div>
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Utah-Specific <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dumpster Rental Cost Calculator
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estimate your total dumpster rental costs including all fees and charges. Get accurate <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link> for your Utah project.
            </p>
          </div>

          {/* Cost Breakdown Visual */}
          <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Cost Breakdown Visual Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-trust-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Base Rental</h4>
                <p className="text-sm text-gray-600">$300-600</p>
                <p className="text-xs text-gray-500">Dumpster + delivery</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Permit</h4>
                <p className="text-sm text-gray-600">$25-75</p>
                <p className="text-xs text-gray-500">If needed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Disposal</h4>
                <p className="text-sm text-gray-600">$55/ton</p>
                <p className="text-xs text-gray-500">Weight-based</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Fees</h4>
                <p className="text-sm text-gray-600">$10-25</p>
                <p className="text-xs text-gray-500">Environmental</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Costs</h3>
              
              <div className="space-y-6">
                {/* <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2"><Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link></label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent">
                    <option value="15">15-yard dumpster ($300-400)</option>
                    <option value="20">20-yard dumpster ($350-450)</option>
                    <option value="30">30-yard dumpster ($450-600)</option>
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City (for permit cost)</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent">
                    <option value="none">No permit needed (private property)</option>
                    <option value="slc">Salt Lake City ($50)</option>
                    <option value="westjordan">West Jordan ($35)</option>
                    <option value="sandy">Sandy ($40)</option>
                    <option value="murray">Murray ($30)</option>
                    <option value="draper">Draper ($25)</option>
                    <option value="lehi">Lehi ($35)</option>
                    <option value="orem">Orem ($40)</option>
                    <option value="provo">Provo ($45)</option>
                  </select>
                </div>

                {/* Estimated Weight */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Weight (tons)</label>
                  <input 
                    type="number" 
                    placeholder="2" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">Typical weights: Light materials (1-2 tons), Mixed debris (2-4 tons), Heavy materials (4-8 tons)</p>
                </div>

                {/* Rental Duration */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Rental Duration (days)</label>
                  <input 
                    type="number" 
                    placeholder="7" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">Standard rental is 7-14 days. Extended rentals cost $5-15/day</p>
                </div>

                {/* Calculate Button */}
                <button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 rounded-lg font-bold text-lg hover:from-teal-700 hover:to-teal-600 transition-all duration-300">
                  Calculate Total Cost
                </button>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Estimated Cost Breakdown</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Base Rental Cost</span>
                  <span className="font-semibold text-gray-900">$375</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Permit Cost</span>
                  <span className="font-semibold text-gray-900">$50</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Disposal Fees (3 tons)</span>
                  <span className="font-semibold text-gray-900">$165</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Environmental Fee</span>
                  <span className="font-semibold text-gray-900">$15</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b-2 border-gray-200">
                  <span className="text-gray-700">Extended Rental (0 days)</span>
                  <span className="font-semibold text-gray-900">$0</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-gray-50 rounded-lg px-4">
                  <span className="text-lg font-bold text-gray-900">Total Estimated Cost</span>
                  <span className="text-xl font-bold text-[#0d9488]">$605</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Cost Saving Tips:</h4>
                <ul className="text-sm text-trust-blue-dark space-y-1">
                  <li>• Place dumpster on private property to avoid permit costs</li>
                  <li>• Separate heavy materials to reduce disposal fees</li>
                  <li>• Complete your project within the rental period</li>
                  <li>• Avoid prohibited materials to prevent additional fees</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Cost Breakdown
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of all dumpster rental costs in Utah. Understand what you're paying for and avoid surprise charges.
            </p>
          </div>

          <div className="space-y-8">
            {costBreakdown.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-md border border-gray-200">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <span className="text-lg font-bold text-[#0d9488]">{item.cost}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Utah Dumpster Rental Cost Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare total costs for different project types and <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> in Utah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Small Project */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Small Project</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">15-yard dumpster</span>
                  <span className="font-semibold">$350</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Permit (if needed)</span>
                  <span className="font-semibold">$50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Disposal (2 tons)</span>
                  <span className="font-semibold">$110</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Environmental fee</span>
                  <span className="font-semibold">$15</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Cost</span>
                  <span className="text-xl font-bold text-[#0d9488]">$525</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Examples: Bathroom renovation, garage cleanout, small room remodel</p>
            </div>

            {/* Medium Project */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#0d9488] to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Common
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Medium Project</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">20-yard dumpster</span>
                  <span className="font-semibold">$400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Permit (if needed)</span>
                  <span className="font-semibold">$50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Disposal (4 tons)</span>
                  <span className="font-semibold">$220</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Environmental fee</span>
                  <span className="font-semibold">$15</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Cost</span>
                  <span className="text-xl font-bold text-[#0d9488]">$685</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Examples: Kitchen renovation, multi-room cleanout, medium construction</p>
            </div>

            {/* Large Project */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Large Project</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">30-yard dumpster</span>
                  <span className="font-semibold">$525</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Permit (if needed)</span>
                  <span className="font-semibold">$50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Disposal (6 tons)</span>
                  <span className="font-semibold">$330</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Environmental fee</span>
                  <span className="font-semibold">$15</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Cost</span>
                  <span className="text-xl font-bold text-[#0d9488]">$920</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Examples: Whole house renovation, major construction, large cleanout</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dumpster Rental Cost FAQ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert answers to common questions about dumpster rental costs and <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link> in Utah.
            </p>
          </div>

          <div className="space-y-6">
            {costFAQs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="bg-[#0d9488] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <div className="ml-11">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Accurate Dumpster Rental Quote
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Icon Dumpsters provides transparent <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link> with no hidden fees. Get an accurate quote for your Utah project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:801-918-6000" 
              className="bg-white text-[#0d9488] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (801) 918-6000
            </a>
            <a 
              href="/#quote-form" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#0d9488] transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Get <Link href="/#quote-form" className="text-trust-blue hover:underline">free quote</Link>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Schema for AI */}
      {/* Internal Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Resources
            </h2>
            <p className="text-xl text-gray-600">
              Explore more helpful resources for your dumpster rental needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/guides/dumpster-size-guide-utah" className="text-[#0d9488] hover:text-teal-700 transition-colors">
                    <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> Guide Utah
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/dumpster-rental-guide-2025" className="text-[#0d9488] hover:text-teal-700 transition-colors">
                    Cheap Dumpster Rentals Near Me
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/pricing/dumpster-prices" className="text-[#0d9488] hover:text-teal-700 transition-colors">
                    Dumpster Rentals Near Me Prices
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/pricing/dumpster-prices" className="text-[#0d9488] hover:text-teal-700 transition-colors">
                    Transparent Pricing
                  </a>
                </h3>
              </div>
            
          </div>
        </div>
      </section>
    
            <FAQSchema faqs={costFAQs} pageUrl="/dumpster-rental-cost-calculator" />
    </div>
  );
}
