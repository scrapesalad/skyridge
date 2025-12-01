import type { Metadata } from "next";
import FAQSchema from "@/app/components/FAQSchema";

export const metadata: Metadata = {
  title: "Dumpster Size Guide Utah: Complete Sizing Chart & Project Recommendations | Icon Dumpsters",
  description: "Expert dumpster size guide for Utah projects. Compare 15, 20, and 30-yard dumpsters with dimensions, capacity, and project-specific recommendations. Get the perfect size for your project.",
  keywords: ['dumpster size guide utah', 'dumpster dimensions utah', '15 yard dumpster utah', '20 yard dumpster utah', '30 yard dumpster utah', 'dumpster size calculator'],
  alternates: { canonical: 'https://icondumpsters.com/guides/dumpster-size-guide-utah' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Dumpster Size Guide Utah: Complete Sizing Chart & Project Recommendations | Icon Dumpsters',
    description: 'Expert dumpster size guide for Utah projects. Compare 15, 20, and 30-yard dumpsters with dimensions, capacity, and project-specific recommendations. Get the perfect size for your project.',
    url: 'https://icondumpsters.com/guides/dumpster-size-guide-utah',
    images: [{ url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp', width: 1200, height: 630, alt: 'Utah Dumpster Size Guide' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

const sizeGuideFAQs = [
  {
    question: "What are the exact dimensions of each dumpster size in Utah?",
    answer: "In Utah, dumpster dimensions are standardized: 15-yard dumpsters measure 14.5&apos; × 7.75&apos; × 4.67&apos; (L × W × D), 20-yard dumpsters are 17.08&apos; × 7.54&apos; × 5.00&apos; (L × W × D), and 30-yard dumpsters are 22.0&apos; × 7.92&apos; × 6.0&apos; (L × W × D). These dimensions are consistent across all Utah dumpster rental companies and are designed to fit standard delivery trucks and residential driveways."
  },
  {
    question: "How do I choose the right dumpster size for my Utah project?",
    answer: "Choose dumpster size based on project type and volume: 15-yard for small cleanouts (1-2 rooms, minor renovations), 20-yard for medium projects (kitchen/bathroom renovation, 3-4 room cleanout), and 30-yard for large projects (whole house renovation, major construction). Consider material density - heavy items like concrete require larger dumpsters due to weight limits."
  },
  {
    question: "What's the weight limit for each dumpster size in Utah?",
    answer: "Utah dumpster weight limits are: 15-yard dumpsters allow 2-3 tons, 20-yard dumpsters permit 3-4 tons, and 30-yard dumpsters allow 4-6 tons. Exceeding limits typically costs $50-100 per ton over. Heavy materials like concrete, dirt, or roofing shingles can quickly exceed limits, so discuss your materials with the rental company before choosing size."
  },
  {
    question: "Can I fit a 30-yard dumpster in my Utah driveway?",
    answer: "30-yard dumpsters require 18 feet of length and 8 feet of width, plus 60 feet of overhead clearance for delivery. Most Utah driveways can accommodate them, but measure first. The delivery truck needs 18 feet of width and 60 feet of height clearance. If space is limited, consider a 20-yard dumpster (16&apos; x 7&apos;) or discuss placement options with your rental company."
  },
  {
    question: "What's the cost difference between dumpster sizes in Utah?",
    answer: "Utah dumpster rental costs typically range: 15-yard ($300-400), 20-yard ($350-450), and 30-yard ($450-600). The price difference reflects capacity and weight limits. While larger dumpsters cost more upfront, they may be more cost-effective for large projects than renting multiple smaller dumpsters. All prices include delivery and pickup; landfill disposal is billed separately at $55/ton."
  }
];

export default function DumpsterSizeGuideUtah() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d9488] to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Complete Dumpster Size Guide for Utah Projects
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Expert guide to choosing the right dumpster size for your Utah project. Compare dimensions, capacity, weight limits, and get project-specific recommendations from Utah's leading dumpster rental experts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Expert Sizing Guide</span>
              </div>
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Utah-Specific</span>
              </div>
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Project Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Size Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Utah Dumpster Size Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare all available dumpster sizes with exact dimensions, capacity, and weight limits for Utah projects.
            </p>
          </div>

          {/* Visual Size Comparison */}
          <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Visual Size Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">15 Yard</span>
                </div>
                <p className="text-sm text-gray-600">16' x 7' x 4'</p>
                <p className="text-sm text-gray-600">Small Projects</p>
              </div>
              <div className="text-center">
                <div className="w-full h-40 bg-gradient-to-br from-[#0d9488] to-teal-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">20 Yard</span>
                </div>
                <p className="text-sm text-gray-600">16' x 7' x 6'</p>
                <p className="text-sm text-gray-600">Medium Projects</p>
              </div>
              <div className="text-center">
                <div className="w-full h-40 bg-gradient-to-br from-purple-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">30 Yard</span>
                </div>
                <p className="text-sm text-gray-600">22' x 7' x 6'</p>
                <p className="text-sm text-gray-600">Large Projects</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 15 Yard Dumpster */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">15</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">15 Yard Dumpster</h3>
                <p className="text-gray-600">Perfect for small projects</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Dimensions:</span>
                  <span className="text-gray-900">16' x 7' x 4'</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Capacity:</span>
                  <span className="text-gray-900">15 cubic yards</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Weight Limit:</span>
                  <span className="text-gray-900">2-3 tons</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Cost Range:</span>
                  <span className="text-gray-900">$300-400</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Best For:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Small home cleanouts (1-2 rooms)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Bathroom renovations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Minor construction projects
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Garage cleanouts
                  </li>
                </ul>
              </div>

              <a href="tel:801-918-6000" className="w-full bg-gradient-to-r from-blue-500 to-teal-600 text-white py-3 px-6 rounded-lg hover:from-teal-600 hover:to-blue-500 transition-all duration-300 font-semibold text-center block">
                Get 15-Yard Quote
              </a>
            </div>

            {/* 20 Yard Dumpster */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#0d9488] to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0d9488] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">20</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">20 Yard Dumpster</h3>
                <p className="text-gray-600">Ideal for medium projects</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Dimensions:</span>
                  <span className="text-gray-900">16' x 7' x 6'</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Capacity:</span>
                  <span className="text-gray-900">20 cubic yards</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Weight Limit:</span>
                  <span className="text-gray-900">3-4 tons</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Cost Range:</span>
                  <span className="text-gray-900">$350-450</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Best For:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Kitchen renovations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Room additions
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Medium cleanouts (3-4 rooms)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Roofing projects
                  </li>
                </ul>
              </div>

              <a href="tel:801-918-6000" className="w-full bg-gradient-to-r from-[#0d9488] to-blue-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 font-semibold text-center block">
                Get 20-Yard Quote
              </a>
            </div>

            {/* 30 Yard Dumpster */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">30</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">30 Yard Dumpster</h3>
                <p className="text-gray-600">Best for large projects</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Dimensions:</span>
                  <span className="text-gray-900">22' x 7' x 6'</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Capacity:</span>
                  <span className="text-gray-900">30 cubic yards</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Weight Limit:</span>
                  <span className="text-gray-900">4-6 tons</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Cost Range:</span>
                  <span className="text-gray-900">$450-600</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Best For:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Whole house renovations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Large construction projects
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Major cleanouts (5+ rooms)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Commercial projects
                  </li>
                </ul>
              </div>

              <a href="tel:801-918-6000" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-500 transition-all duration-300 font-semibold text-center block">
                Get 30-Yard Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project-Specific Recommendations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Project-Specific Size Recommendations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get expert recommendations for the right dumpster size based on your specific Utah project type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Home Renovation */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-trust-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Home Renovation</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm font-semibold mr-3">20-30 Yard</span>
                  <span className="text-gray-600">Whole house renovation</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-100 text-trust-blue-dark px-2 py-1 rounded text-sm font-semibold mr-3">15-20 Yard</span>
                  <span className="text-gray-600">Kitchen/bathroom remodel</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm font-semibold mr-3">15 Yard</span>
                  <span className="text-gray-600">Single room renovation</span>
                </div>
              </div>
            </div>

            {/* Construction */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-action-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Construction</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm font-semibold mr-3">30 Yard</span>
                  <span className="text-gray-600">New construction</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-100 text-trust-blue-dark px-2 py-1 rounded text-sm font-semibold mr-3">20-30 Yard</span>
                  <span className="text-gray-600">Addition/extension</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm font-semibold mr-3">15-20 Yard</span>
                  <span className="text-gray-600">Small construction</span>
                </div>
              </div>
            </div>

            {/* Cleanout */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cleanout</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm font-semibold mr-3">20-30 Yard</span>
                  <span className="text-gray-600">Whole house cleanout</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-100 text-trust-blue-dark px-2 py-1 rounded text-sm font-semibold mr-3">15-20 Yard</span>
                  <span className="text-gray-600">Multi-room cleanout</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm font-semibold mr-3">15 Yard</span>
                  <span className="text-gray-600">Garage/basement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dumpster Size FAQ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert answers to common questions about choosing the right dumpster size for your Utah project.
            </p>
          </div>

          <div className="space-y-6">
            {sizeGuideFAQs.map((faq, index) => (
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
            Still Not Sure Which Size You Need?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get expert guidance from Utah's most trusted dumpster rental company. We'll help you choose the perfect size for your project.
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
              Get Free Quote
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
                  <a href="/dumpster-calculator" className="text-[#0d9488] hover:text-teal-700 transition-colors">
                    Dumpster Calculator
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/guides/dumpster-sizes" className="text-[#0d9488] hover:text-teal-700 transition-colors">
                    Dumpster Sizes
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
                  <a href="/utah-waste-management-regulations" className="text-[#0d9488] hover:text-teal-700 transition-colors">
                    Utah Waste Management Regulations
                  </a>
                </h3>
              </div>
            
          </div>
        </div>
      </section>
    
            <FAQSchema faqs={sizeGuideFAQs} pageUrl="/dumpster-size-guide-utah" />
    </div>
  );
}
