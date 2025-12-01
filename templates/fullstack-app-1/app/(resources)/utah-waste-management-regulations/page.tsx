import type { Metadata } from "next";
import FAQSchema from "@/app/components/FAQSchema";

export const metadata: Metadata = {
  title: "Utah Waste Management Regulations: Complete Guide | Icon Dumpsters",
  description: "Complete guide to Utah waste management regulations for dumpster rentals. Learn about permits, prohibited materials, disposal requirements, and compliance.",
  keywords: ['utah waste management regulations', 'utah dumpster rental laws', 'utah deq regulations', 'utah waste disposal laws', 'dumpster rental compliance utah'],
  alternates: { canonical: 'https://icondumpsters.com/utah-waste-management-regulations' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Utah Waste Management Regulations: Complete Guide | Icon Dumpsters",
    description: "Complete guide to Utah waste management regulations for dumpster rentals. Learn about permits, prohibited materials, disposal requirements, and compliance.",
    url: 'https://icondumpsters.com/utah-waste-management-regulations',
    images: [{ url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp', width: 1200, height: 630, alt: 'Utah Waste Management Regulations Guide' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

const regulationsFAQs = [
  {
    question: "What are the main Utah waste management regulations for dumpster rentals?",
    answer: "Utah's primary waste management regulations for dumpster rentals are governed by the Utah Department of Environmental Quality (DEQ) and include: proper waste classification and disposal, prohibited material restrictions, permit requirements for public placement, weight and size limitations, and environmental compliance standards. All dumpster rental companies must be licensed and follow specific disposal protocols at approved landfills and transfer stations."
  },
  {
    question: "What materials are prohibited in Utah dumpster rentals?",
    answer: "Utah prohibits several materials in standard dumpster rentals: hazardous waste (paint, chemicals, batteries, fluorescent bulbs), electronics (TVs, computers, monitors), medical waste, asbestos, tires, liquids, and food waste. Some materials like concrete, dirt, and roofing shingles may be allowed but often require special handling and incur additional fees. Always check with your rental company and local regulations before disposing of any questionable materials."
  },
  {
    question: "Do I need special permits for construction waste disposal in Utah?",
    answer: "Construction waste disposal in Utah typically requires standard dumpster permits for public placement, but special permits may be needed for large quantities of specific materials. Asbestos-containing materials require special handling and permits from the Utah DEQ. Large construction projects may need environmental impact assessments. Always consult with your rental company and local authorities for projects involving significant amounts of construction debris."
  },
  {
    question: "What are the weight and size limitations for dumpster rentals in Utah?",
    answer: "Utah dumpster weight limits are: 15-yard dumpsters allow 2-3 tons, 20-yard dumpsters permit 3-4 tons, and 30-yard dumpsters allow 4-6 tons. Exceeding these limits results in additional fees ($50-100/ton over). Size limitations are primarily determined by delivery truck capacity and placement space requirements. Most Utah cities require 60 feet of overhead clearance and adequate space for delivery trucks to maneuver safely."
  },
  {
    question: "How do Utah environmental regulations affect dumpster rental costs?",
    answer: "Utah environmental regulations impact dumpster rental costs through: landfill disposal fees ($55/ton), environmental processing fees ($10-25), special handling charges for prohibited materials ($50-200), and compliance costs for proper waste classification. These regulations ensure proper disposal and environmental protection, but they do add to the total cost of dumpster rentals. Transparent companies will explain all environmental fees upfront."
  }
];

const prohibitedMaterials = [
  {
    category: "Hazardous Materials",
    materials: ["Paint and paint cans", "Chemicals and solvents", "Batteries (all types)", "Fluorescent bulbs", "Pesticides and herbicides", "Motor oil and antifreeze"],
    reason: "Require special handling and disposal at hazardous waste facilities",
    penalty: "$50-200 per item"
  },
  {
    category: "Electronics",
    materials: ["Televisions", "Computers and monitors", "Cell phones", "Appliances with refrigerants", "Electronic waste"],
    reason: "Contain hazardous materials and require e-waste recycling",
    penalty: "$25-100 per item"
  },
  {
    category: "Medical Waste",
    materials: ["Sharps and needles", "Medical equipment", "Pharmaceuticals", "Contaminated materials"],
    reason: "Biohazardous and require medical waste disposal",
    penalty: "$100-500 per incident"
  },
  {
    category: "Construction Materials",
    materials: ["Asbestos-containing materials", "Lead-based paint", "Insulation with asbestos", "Roofing materials with asbestos"],
    reason: "Require special permits and certified disposal",
    penalty: "$200-1000 per incident"
  },
  {
    category: "Liquids and Food",
    materials: ["Liquid waste", "Food waste", "Grease and oils", "Contaminated soil"],
    reason: "Can contaminate other waste and cause environmental issues",
    penalty: "$25-100 per incident"
  }
];

const utahRegulations = [
  {
    agency: "Utah Department of Environmental Quality (DEQ)",
    regulations: [
      "Waste classification and disposal requirements",
      "Hazardous waste handling protocols",
      "Environmental impact assessments",
      "Landfill operation standards"
    ],
    contact: "(801) 536-4000",
    website: "https://deq.utah.gov/"
  },
  {
    agency: "Utah Division of Waste Management",
    regulations: [
      "Solid waste disposal regulations",
      "Recycling requirements",
      "Waste reduction programs",
      "Transfer station operations"
    ],
    contact: "(801) 536-0200",
    website: "https://deq.utah.gov//waste-management"
  },
  {
    agency: "Local Health Departments",
    regulations: [
      "Public health and safety standards",
      "Vector control requirements",
      "Sanitation standards",
      "Local permit requirements"
    ],
    contact: "Varies by county",
    website: "Varies by county"
  },
  {
    agency: "City Public Works Departments",
    regulations: [
      "Dumpster placement permits",
      "Traffic and safety requirements",
      "Public right-of-way regulations",
      "Local waste collection rules"
    ],
    contact: "Varies by city",
    website: "Varies by city"
  }
];

export default function UtahWasteManagementRegulations() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d9488] to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Utah Waste Management Regulations Guide
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Complete guide to Utah waste management regulations for dumpster rentals. Understand permits, prohibited materials, disposal requirements, and compliance with Utah DEQ regulations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Official Regulations</span>
              </div>
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>DEQ Compliant</span>
              </div>
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Agencies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Utah Regulatory Agencies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key agencies that regulate waste management and dumpster rentals in Utah. Understanding their roles and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {utahRegulations.map((agency, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{agency.agency}</h3>
                <div className="space-y-3 mb-6">
                  {agency.regulations.map((regulation, regIndex) => (
                    <div key={regIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{regulation}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex flex-col space-y-2">
                    <a href={`tel:${agency.contact}`} className="text-[#0d9488] hover:underline font-semibold">
                      {agency.contact}
                    </a>
                    <a href={`https://${agency.website}`} target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">
                      {agency.website}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Materials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Prohibited Materials in Utah Dumpster Rentals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding what materials are prohibited in Utah dumpster rentals and the penalties for improper disposal.
            </p>
          </div>

          {/* Prohibited Materials Visual Guide */}
          <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Prohibited Materials Visual Guide</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Hazardous</h4>
                <p className="text-sm text-gray-600">Paint, chemicals</p>
                <p className="text-xs text-red-600">$50-200 fine</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-action-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Electronics</h4>
                <p className="text-sm text-gray-600">TVs, computers</p>
                <p className="text-xs text-red-600">$25-100 fine</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Medical</h4>
                <p className="text-sm text-gray-600">Needles, drugs</p>
                <p className="text-xs text-red-600">$100-500 fine</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Construction</h4>
                <p className="text-sm text-gray-600">Asbestos, lead</p>
                <p className="text-xs text-red-600">$200-1000 fine</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {prohibitedMaterials.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
                <div className="bg-red-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-red-900">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Prohibited Materials:</h4>
                      <ul className="space-y-2">
                        {category.materials.map((material, materialIndex) => (
                          <li key={materialIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{material}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Reason for Prohibition:</h4>
                      <p className="text-gray-700">{category.reason}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Penalty for Violation:</h4>
                      <p className="text-red-600 font-semibold">{category.penalty}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compliance Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential compliance requirements for dumpster rentals in Utah to avoid fines and ensure proper waste disposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Permit Compliance */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-trust-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Permit Compliance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Obtain required permits for public placement</li>
                <li>• Display permits visibly on dumpster</li>
                <li>• Renew permits before expiration</li>
                <li>• Follow placement requirements</li>
              </ul>
            </div>

            {/* Waste Classification */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Classification</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Properly classify waste materials</li>
                <li>• Separate prohibited materials</li>
                <li>• Follow disposal guidelines</li>
                <li>• Maintain disposal records</li>
              </ul>
            </div>

            {/* Environmental Protection */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Protection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Prevent environmental contamination</li>
                <li>• Use proper containment methods</li>
                <li>• Follow spill prevention protocols</li>
                <li>• Report environmental incidents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Best Practices for Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these best practices to ensure full compliance with Utah waste management regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Before Renting */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Before Renting</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Research Requirements</h4>
                    <p className="text-gray-600 text-sm">Check local permit requirements and placement regulations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Choose Licensed Company</h4>
                    <p className="text-gray-600 text-sm">Verify the rental company is licensed and insured</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Plan Material Disposal</h4>
                    <p className="text-gray-600 text-sm">Identify prohibited materials and plan proper disposal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* During Rental */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">During Rental</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Monitor Contents</h4>
                    <p className="text-gray-600 text-sm">Ensure only approved materials are placed in dumpster</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Maintain Safety</h4>
                    <p className="text-gray-600 text-sm">Keep dumpster secure and follow safety requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Track Weight Limits</h4>
                    <p className="text-gray-600 text-sm">Monitor weight to avoid overage charges</p>
                  </div>
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
              Utah Waste Management Regulations FAQ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert answers to common questions about Utah waste management regulations and dumpster rental compliance.
            </p>
          </div>

          <div className="space-y-6">
            {regulationsFAQs.map((faq, index) => (
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
            Need Help with Utah Waste Management Compliance?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Icon Dumpsters ensures full compliance with Utah waste management regulations. Get expert guidance and compliant dumpster rental services.
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
                  <a href="/dumpster-rental-faq#permits" className="text-[#0d9488] hover:text-teal-700 transition-colors">
                    Dumpster Permit Guide Utah
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/guides/dumpster-size-guide-utah" className="text-[#0d9488] hover:text-teal-700 transition-colors">
                    Dumpster Size Guide Utah
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/construction-waste-management-2025" className="text-[#0d9488] hover:text-teal-700 transition-colors">
                    Construction Waste Management 2025
                  </a>
                </h3>
              </div>
            
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="/dumpster-rental-faq" className="text-[#0d9488] hover:text-teal-700 transition-colors">
                    Responsible Disposal
                  </a>
                </h3>
              </div>
            
          </div>
        </div>
      </section>
    
            <FAQSchema faqs={regulationsFAQs} pageUrl="/utah-waste-management-regulations" />
    </div>
  );
}
