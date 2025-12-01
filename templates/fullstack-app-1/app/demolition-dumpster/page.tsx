"use client";

import Link from "next/link";
import Image from "next/image";
import DumpsterCalculator from "@/app/components/DumpsterCalculator";
import FAQSchema from "@/app/components/FAQSchema";
import ArticleSchema from "@/app/components/ArticleSchema";
import Analytics from "@/app/components/PageAnalytics";
import { Metadata } from "next";

export default function DemolitionDumpsterPage() {
  return (
    <>
      <Analytics
        pageName="Demolition Dumpster Rental for Commercial & Construction Projects | Icon Dumpsters"
        pageType="article"
        articleId="demolition-dumpster"
      />
      <ArticleSchema
        title="Demolition Dumpster Rental for Commercial & Construction Projects | Icon Dumpsters"
        description="Specialized demolition dumpster rentals for contractors, construction companies, and roofers. Heavy-duty dirt and concrete dumpsters for commercial demolition projects in Utah. Get instant quotes."
        author="Icon Dumpsters"
        publishedDate="2025-01-27"
        modifiedDate="2025-01-27"
        imageUrl="/images/optimized/icondumpsters_general_2484955712329217818_enhance_2_1x_textai.jpg"
        articleUrl="https://icondumpsters.com/demolition-dumpster"
        category="DEMOLITION"
        readTime="PT12M"
      />
      <FAQSchema
        pageUrl="https://icondumpsters.com/demolition-dumpster"
        faqs={[
          {
            question: "What size dumpster do I need for a commercial demolition project?",
            answer: "Commercial demolition projects typically require 30-yard or 40-yard dumpsters, or multiple containers. For heavy materials like concrete and dirt, we recommend our specialized 12-yard concrete dumpster or 10-yard dirt dumpster. Use our demolition dumpster calculator to get an accurate estimate for your project."
          },
          {
            question: "Do you offer specialized dumpsters for concrete and dirt disposal?",
            answer: "Yes! We offer specialized dumpsters specifically designed for heavy materials: 10-yard clean dirt dumpster (flat rate, no weight limit), 10-yard mixed load dumpster, and 12-yard concrete dumpster (perfect for concrete, asphalt, brick, and stone). These are ideal for commercial demolition, construction, and landscaping projects."
          },
          {
            question: "How much does a demolition dumpster cost for contractors?",
            answer: "Demolition dumpster costs vary by size and material type. Standard dumpsters range from $349-$450 for 7-day rentals. Our specialized dirt and concrete dumpsters offer flat-rate pricing. Contractors with recurring projects can access our contractor pricing program. Use our calculator for instant quotes."
          },
          {
            question: "Can I rent multiple dumpsters for a large demolition project?",
            answer: "Absolutely! We specialize in multi-container rentals for large commercial and construction projects. We can coordinate delivery and pickup schedules, provide volume discounts, and manage all containers through our contractor portal. Call (801) 918-6000 to discuss your project needs."
          },
          {
            question: "What's the weight limit for demolition dumpsters?",
            answer: "Weight limits vary by dumpster size: 15-yard holds 8 tons, 20-yard holds 11 tons, 30-yard holds 12 tons. However, our specialized 10-yard dirt and 12-yard concrete dumpsters have flat-rate pricing with no weight limits, making them perfect for heavy demolition debris."
          }
        ]}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(/images/optimized/icondumpsters_general_2484955712329217818_enhance_2_1x_textai.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-4">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">FOR CONTRACTORS & COMMERCIAL PROJECTS</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Demolition Dumpster Rental for Commercial & Construction Projects
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Specialized heavy-duty dumpsters for contractors, construction companies, roofers, and commercial demolition projects. 
                Get the right container for concrete, dirt, and heavy debris disposal.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:801-918-6000"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  Call (801) 918-6000
                </a>
                <a 
                  href="/#quote-form"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  Get Instant Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Dumpsters Section - Highlight Dirt/Concrete */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specialized Dumpsters for Heavy Demolition Materials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlike standard dumpsters, our specialized containers are designed specifically for heavy materials like concrete, dirt, brick, and stone. 
                Perfect for commercial demolition, construction, and roofing projects.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* 10 Yard Dirt */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-orange-200 hover:border-orange-400 transition-all">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">10 Yard Dirt Dumpster</h3>
                  <p className="text-orange-100">Clean Dirt & Soil Only</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2"><span className="font-semibold text-gray-900">Dimensions:</span> 16.46' × 8' × 2.67'</p>
                    <p className="text-sm text-gray-600 mb-2"><span className="font-semibold text-gray-900">Weight Limit:</span> <span className="text-green-600 font-bold">Flat Rate - No Weight Limit</span></p>
                    <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Loading:</span> Level with top</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold text-gray-900 mb-2">Perfect For:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Landscaping projects</li>
                      <li>✓ Excavation debris</li>
                      <li>✓ Clean fill dirt</li>
                      <li>✓ Soil removal</li>
                      <li>✓ Grading projects</li>
                    </ul>
                  </div>
                  <a 
                    href="/#quote-form"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Get Quote
                  </a>
                </div>
              </div>

              {/* 12 Yard Concrete */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-300 hover:border-gray-500 transition-all">
                <div className="bg-gradient-to-br from-gray-600 to-gray-700 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">12 Yard Concrete Dumpster</h3>
                  <p className="text-gray-200">Heavy-Duty Concrete Disposal</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2"><span className="font-semibold text-gray-900">Dimensions:</span> 16.46' × 8' × 2.67'</p>
                    <p className="text-sm text-gray-600 mb-2"><span className="font-semibold text-gray-900">Weight Limit:</span> <span className="text-green-600 font-bold">Flat Rate - No Weight Limit</span></p>
                    <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Loading:</span> Level with top</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold text-gray-900 mb-2">Perfect For:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Concrete demolition</li>
                      <li>✓ Driveway removal</li>
                      <li>✓ Foundation disposal</li>
                      <li>✓ Asphalt removal</li>
                      <li>✓ Brick & stone disposal</li>
                    </ul>
                  </div>
                  <a 
                    href="/#quote-form"
                    className="block w-full bg-gray-600 hover:bg-gray-700 text-white text-center font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Get Quote
                  </a>
                </div>
              </div>

              {/* 10 Yard Mixed */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-red-200 hover:border-red-400 transition-all">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">10 Yard Mixed Dumpster</h3>
                  <p className="text-red-100">Mixed Heavy Loads</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2"><span className="font-semibold text-gray-900">Dimensions:</span> 16.46' × 8' × 2.67'</p>
                    <p className="text-sm text-gray-600 mb-2"><span className="font-semibold text-gray-900">Weight Limit:</span> Standard weight allowance</p>
                    <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Loading:</span> Level with top</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold text-gray-900 mb-2">Perfect For:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Mixed demolition debris</li>
                      <li>✓ Construction waste</li>
                      <li>✓ Combined materials</li>
                      <li>✓ General cleanup</li>
                    </ul>
                  </div>
                  <a 
                    href="/#quote-form"
                    className="block w-full bg-red-500 hover:bg-red-600 text-white text-center font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Why Choose Specialized Dumpsters?</h3>
              <ul className="text-blue-800 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span><strong>Flat-Rate Pricing:</strong> No weight limit worries with our dirt and concrete dumpsters - you pay one flat rate regardless of weight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span><strong>Designed for Heavy Materials:</strong> Built to handle the toughest demolition debris without damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span><strong>Cost-Effective:</strong> Avoid expensive overage fees that come with standard dumpsters when loading heavy materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span><strong>Proper Disposal:</strong> Materials are routed to appropriate recycling or disposal facilities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Commercial & Construction Focus */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Built for Commercial, Construction & Roofing Professionals
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand the unique needs of contractors, construction companies, and roofing professionals. 
                Our demolition dumpster solutions are designed to keep your projects on schedule and on budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 border border-teal-200">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Demolition</h3>
                <p className="text-gray-700 mb-4">
                  Large-scale commercial demolition projects require reliable, heavy-duty dumpsters. We provide:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Multi-container coordination</li>
                  <li>• Specialized concrete & dirt dumpsters</li>
                  <li>• Flexible scheduling for project timelines</li>
                  <li>• Volume discounts for large projects</li>
                  <li>• Contractor portal for easy management</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border border-orange-200">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Construction Projects</h3>
                <p className="text-gray-700 mb-4">
                  Construction sites need dumpsters that can handle heavy materials and frequent pickups:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Heavy-duty containers for concrete & rebar</li>
                  <li>• Dirt dumpsters for excavation debris</li>
                  <li>• Regular pickup schedules</li>
                  <li>• Jobsite delivery coordination</li>
                  <li>• Contractor pricing programs</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Roofing Professionals</h3>
                <p className="text-gray-700 mb-4">
                  Roofing contractors need dumpsters sized for shingle disposal and project timelines:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Dumpsters sized for roofing waste</li>
                  <li>• Quick delivery for tight schedules</li>
                  <li>• Multiple container coordination</li>
                  <li>• Weight-optimized for shingles</li>
                  <li>• Flexible rental periods</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Standard Dumpster Sizes for Demolition */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Standard Dumpster Sizes for Demolition Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In addition to our specialized dumpsters, we offer standard sizes for general demolition debris and mixed loads.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">15 Yard Dumpster</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Dimensions:</span> 14.5' × 7.75' × 4.67'</p>
                  <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Weight Limit:</span> 8 tons</p>
                  <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Best For:</span> Small demolition, single room removal</p>
                </div>
                <a href="/15-yard-dumpster-rental" className="text-teal-600 hover:text-teal-700 font-semibold">
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">20 Yard Dumpster</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Dimensions:</span> 17.08' × 7.54' × 5.00'</p>
                  <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Weight Limit:</span> 11 tons</p>
                  <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Best For:</span> Medium demolition, garage removal</p>
                </div>
                <a href="/20-yard-dumpster-rental" className="text-teal-600 hover:text-teal-700 font-semibold">
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">30 Yard Dumpster</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Dimensions:</span> 22.0' × 7.92' × 6.0'</p>
                  <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Weight Limit:</span> 12 tons</p>
                  <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Best For:</span> Large demolition, whole house removal</p>
                </div>
                <a href="/30-yard-dumpster-rental" className="text-teal-600 hover:text-teal-700 font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contractor Benefits */}
        <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contractor Benefits & Pricing Programs
              </h2>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                We offer special programs for contractors, construction companies, and commercial clients with recurring projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Volume Discounts</h3>
                <p className="text-teal-100 mb-4">
                  Save on multiple dumpster rentals for large projects or recurring work.
                </p>
                <ul className="text-teal-100 space-y-2">
                  <li>• Discounts on 3+ containers</li>
                  <li>• Priority scheduling</li>
                  <li>• Dedicated account management</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Contractor Portal</h3>
                <p className="text-teal-100 mb-4">
                  Manage all your dumpster rentals in one convenient online portal.
                </p>
                <ul className="text-teal-100 space-y-2">
                  <li>• Track all active rentals</li>
                  <li>• Schedule pickups online</li>
                  <li>• View billing history</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Flexible Scheduling</h3>
                <p className="text-teal-100 mb-4">
                  We work around your project timeline, not the other way around.
                </p>
                <ul className="text-teal-100 space-y-2">
                  <li>• Same-day or next-day delivery</li>
                  <li>• Extended rental periods</li>
                  <li>• Quick pickup turnaround</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Expert Support</h3>
                <p className="text-teal-100 mb-4">
                  Get expert advice on dumpster sizing and material handling.
                </p>
                <ul className="text-teal-100 space-y-2">
                  <li>• Size recommendations</li>
                  <li>• Material disposal guidance</li>
                  <li>• Project planning assistance</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/frequent-buyers"
                className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg"
              >
                Learn About Contractor Programs
              </a>
            </div>
          </div>
        </section>

        {/* Materials Accepted */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Materials We Accept for Demolition Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our specialized dumpsters are designed to handle the heaviest demolition materials safely and efficiently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-teal-600">
                  Heavy Materials (Specialized Dumpsters)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">✓</span>
                    <span><strong>Concrete:</strong> Slabs, foundations, driveways, sidewalks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">✓</span>
                    <span><strong>Dirt & Soil:</strong> Clean fill dirt, excavation debris, landscaping soil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">✓</span>
                    <span><strong>Brick & Stone:</strong> Masonry, pavers, retaining walls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">✓</span>
                    <span><strong>Asphalt:</strong> Driveways, parking lots, road material</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">✓</span>
                    <span><strong>Rock & Gravel:</strong> Large rocks, gravel, aggregate</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-teal-600">
                  General Demolition Debris
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">✓</span>
                    <span><strong>Wood & Lumber:</strong> Framing, flooring, decking, cabinets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">✓</span>
                    <span><strong>Drywall & Sheetrock:</strong> Walls, ceilings, partitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">✓</span>
                    <span><strong>Roofing Materials:</strong> Shingles, underlayment, sheathing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">✓</span>
                    <span><strong>Metal:</strong> Rebar, pipes, fixtures, appliances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">✓</span>
                    <span><strong>Mixed Debris:</strong> Combined demolition materials</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg max-w-5xl mx-auto">
              <h4 className="font-semibold text-yellow-900 mb-2">Important Note:</h4>
              <p className="text-yellow-800">
                For best results and cost savings, separate heavy materials (concrete, dirt, brick) into our specialized dumpsters. 
                This prevents weight overage fees and ensures proper disposal routing. Call us at <strong>(801) 918-6000</strong> to discuss your specific material mix.
              </p>
            </div>
          </div>
        </section>

        {/* Demolition Dumpster Calculator - Highlighted Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Demolition Dumpster Calculator
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Get an instant quote for your demolition project. Our calculator helps you determine the right dumpster size 
                and provides accurate pricing for your specific project needs, including specialized dirt and concrete dumpsters.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg max-w-3xl mx-auto mb-8">
                <p className="text-blue-800">
                  <strong>Pro Tip:</strong> For heavy materials like concrete and dirt, select our specialized dumpster options 
                  to get flat-rate pricing with no weight limits. This can save you hundreds of dollars compared to standard dumpsters.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-teal-200">
              <DumpsterCalculator />
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Need help choosing the right dumpster? Our experts are standing by to assist you.
              </p>
              <a 
                href="tel:801-918-6000"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg mr-4"
              >
                Call (801) 918-6000
              </a>
              <a 
                href="/frequent-buyers"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Contractor Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Icon Dumpsters */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Icon Dumpsters for Demolition Projects?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Specialized Equipment</h3>
                    <p className="text-gray-600">Heavy-duty dumpsters designed specifically for concrete, dirt, and demolition debris</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Flat-Rate Pricing</h3>
                    <p className="text-gray-600">No weight limit worries with our specialized dirt and concrete dumpsters</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Contractor-Friendly</h3>
                    <p className="text-gray-600">Volume discounts, flexible scheduling, and dedicated support for commercial clients</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">Same-day or next-day delivery to keep your project on schedule</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">Professional advice on dumpster sizing and material handling</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden fees - you know exactly what you'll pay upfront</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Calculators Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Link href="/dumpster-calculator/quote" className="block p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quote Calculator</h3>
                  <p className="text-gray-600 text-sm mb-3">Get instant pricing estimates for your dumpster rental</p>
                  <span className="text-blue-600 font-semibold">Get Quote →</span>
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
                <Link href="/concrete-debris-calculator" className="block p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Concrete Debris Calculator</h3>
                  <p className="text-gray-600 text-sm mb-3">Calculate concrete waste volume and disposal costs</p>
                  <span className="text-gray-600 font-semibold">Calculate →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Dumpster Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-orange-50 to-teal-50 rounded-2xl p-8 border border-orange-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Specialized Dumpster Services for Heavy Materials
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  For demolition projects involving concrete, dirt, or other heavy materials, our specialized dumpsters offer flat-rate pricing with no weight limits.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Link href="/services/concrete-dumpster-rental" className="block p-6 bg-white rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Concrete Dumpster Rental</h3>
                  <p className="text-gray-600 text-sm mb-3">Specialized 12-yard dumpster for concrete, asphalt, brick, and stone. Flat-rate pricing, no weight limits.</p>
                  <span className="text-orange-600 font-semibold">Learn More →</span>
                </Link>
                <Link href="/services/dirt-dumpster-rental" className="block p-6 bg-white rounded-xl border-2 border-teal-200 hover:border-teal-400 transition-all shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dirt Dumpster Rental</h3>
                  <p className="text-gray-600 text-sm mb-3">Specialized 10-yard dumpster for clean dirt and soil. Perfect for landscaping and excavation projects.</p>
                  <span className="text-teal-600 font-semibold">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Demolition Project?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Get an instant quote using our calculator above, or call us for personalized assistance with your commercial demolition project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:801-918-6000"
                className="bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg"
              >
                Call (801) 918-6000
              </a>
              <a 
                href="/#quote-form"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Get Instant Quote
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

