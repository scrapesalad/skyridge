export const dynamic = 'force-static';

import { Metadata } from 'next'
import Link from 'next/link'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData from '@/app/components/StructuredData'
import FAQSchema from '@/app/components/FAQSchema'
import QuoteFormSection from '@/app/components/QuoteFormSection'

export const metadata: Metadata = {
  title: 'Dirt Dumpster Rental Utah | Clean Dirt & Soil Disposal | Icon Dumpsters',
  description: "Professional dirt dumpster rental services in Utah. Specialized 10-yard clean dirt dumpsters for dirt, soil, and fill disposal. Flat-rate pricing, no weight limits. Call (801) 918-6000 for dirt disposal solutions.",
  keywords: 'dirt dumpster rental, dirt dumpster rental Utah, dirt disposal dumpster, soil dumpster rental, clean dirt dumpster, fill dirt dumpster, landscaping dirt removal, excavation dirt disposal, dirt waste removal, specialized dirt dumpster',
  openGraph: {
    title: 'Dirt Dumpster Rental Utah | Clean Dirt & Soil Disposal | Icon Dumpsters',
    description: 'Professional dirt dumpster rental services in Utah. Specialized 10-yard clean dirt dumpsters for dirt, soil, and fill disposal.',
    type: 'website',
    url: 'https://icondumpsters.com/services/dirt-dumpster-rental',
    siteName: 'Icon Dumpsters',
    locale: 'en_US',
    images: [
      {
        url: 'https://icondumpsters.com/images/result.png',
        width: 1200,
        height: 630,
        alt: 'Dirt Dumpster Rental Services in Utah',
      },
    ],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/services/dirt-dumpster-rental',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
  },
};

const dirtFAQs = [
  {
    question: "What is a dirt dumpster rental?",
    answer: "A dirt dumpster rental is a specialized dumpster service designed specifically for disposing of clean dirt, soil, and fill materials. Our 10-yard clean dirt dumpster uses flat-rate pricing with no weight limits, making it perfect for landscaping projects, excavation work, and soil removal. Unlike standard dumpsters that charge by weight, dirt dumpsters are designed to handle heavy soil materials without weight restrictions or overage fees."
  },
  {
    question: "How much does dirt dumpster rental cost?",
    answer: "Dirt dumpster rental costs start at $299 for our 10-yard clean dirt dumpster with a 7-day rental period. This flat-rate pricing includes delivery, pickup, and disposal with no weight limits - perfect for heavy dirt and soil. We also offer 1-day special pricing at $280 and 30-day rentals at $600. All pricing is transparent with no hidden fees. Contact us at (801) 918-6000 for a customized quote based on your project location and timeline."
  },
  {
    question: "What size dirt dumpster do I need?",
    answer: "For dirt disposal, we offer a specialized 10-yard clean dirt dumpster that's designed specifically for heavy soil materials. This size is ideal because dirt and soil are very heavy (1.5-2 tons per cubic yard), so you'll reach weight capacity before volume capacity. A 10-yard dirt dumpster can typically hold 8-10 cubic yards of dirt, which is equivalent to about 12-20 tons. For larger projects, you may need multiple dumpsters or scheduled pickups. Our team can help you estimate the right size based on your project."
  },
  {
    question: "What types of dirt can go in a dirt dumpster?",
    answer: "Our clean dirt dumpster accepts: clean fill dirt, topsoil, subsoil, sand, gravel, clay, and other clean earth materials. The dirt must be free of contaminants, debris, rocks larger than 6 inches, organic matter, roots, and other non-dirt materials. We cannot accept: contaminated soil, dirt mixed with construction debris, dirt with roots or organic matter, or dirt containing hazardous materials. For mixed loads of dirt and other materials, consider our 10-yard mixed load dumpster."
  },
  {
    question: "How much does dirt weigh in a dumpster?",
    answer: "Dirt and soil weight varies by type: topsoil weighs about 1.3-1.5 tons per cubic yard (2,600-3,000 pounds), fill dirt weighs about 1.5-1.8 tons per cubic yard (3,000-3,600 pounds), and wet or compacted dirt can weigh 2.0-2.5 tons per cubic yard (4,000-5,000 pounds). This is why our dirt dumpster uses flat-rate pricing with no weight limits - standard dumpsters would quickly exceed weight capacity. A 10-yard dirt dumpster can typically hold 12-20 tons of dirt material."
  },
  {
    question: "Can I use a dirt dumpster for landscaping projects?",
    answer: "Yes! Our dirt dumpster rental is perfect for landscaping projects. Whether you're removing old soil, excavating for new landscaping, or disposing of excess dirt from grading work, our clean dirt dumpster is ideal. Common landscaping uses include: removing old topsoil, disposing of excavated dirt, grading and leveling projects, and preparing sites for new landscaping. The flat-rate pricing makes it cost-effective for landscaping contractors and homeowners."
  },
  {
    question: "What's the difference between clean dirt and mixed load dumpsters?",
    answer: "Clean dirt dumpsters are for dirt and soil only - no other materials allowed. They use flat-rate pricing with no weight limits. Mixed load dumpsters accept dirt mixed with other materials like rocks, roots, or small amounts of debris, but they have standard weight limits (typically 4 tons). Clean dirt dumpsters are cheaper per load because clean dirt can be recycled or used as fill, while mixed loads go to landfills. Choose clean dirt if you have only dirt/soil; choose mixed load if you have dirt with other materials."
  },
  {
    question: "Do you offer dirt recycling or reuse?",
    answer: "Yes, we coordinate dirt recycling and reuse whenever possible. Clean dirt is valuable and can be reused as fill material, topsoil, or for landscaping projects. We work with facilities throughout Utah that accept clean dirt for recycling. This helps reduce environmental impact and may provide cost savings. When you rent a dirt dumpster, let us know if you're interested in recycling options, and we'll route your dirt to appropriate facilities."
  },
  {
    question: "Can I rent a dirt dumpster for excavation work?",
    answer: "Absolutely! Our dirt dumpster rental is perfect for excavation projects. Whether you're excavating for foundations, basements, utility installation, or site preparation, our clean dirt dumpster handles the soil removal efficiently. For large excavation projects, you may need multiple dumpsters or scheduled pickups. We can coordinate delivery and pickup around your excavation schedule. Call us at (801) 918-6000 to discuss your excavation project needs."
  },
  {
    question: "How long can I keep a dirt dumpster?",
    answer: "Our standard dirt dumpster rental period is 7 days, which is included in the base price of $299. We also offer: 1-day special pricing at $280 for quick projects, extended rentals up to 30 days at $600, and custom rental periods for contractors with ongoing projects. If you need the dumpster longer than your rental period, we can extend it for an additional daily fee. Just let us know your timeline when you order."
  },
  {
    question: "Do you deliver dirt dumpsters to construction sites?",
    answer: "Yes, we deliver dirt dumpsters to construction sites, excavation sites, residential properties, and commercial locations throughout Utah. We serve Salt Lake City, West Valley City, Provo, Ogden, and all surrounding areas. Our delivery trucks can access most construction sites, though we need about 60 feet of clearance for delivery and pickup. For remote or difficult-to-access locations, we can coordinate special delivery arrangements. Call us to discuss your specific location requirements."
  },
  {
    question: "Can I use a dirt dumpster for yard work or garden projects?",
    answer: "Yes, our dirt dumpster is perfect for yard work and garden projects. Whether you're removing old soil from garden beds, disposing of dirt from landscaping projects, or cleaning up after yard work, our clean dirt dumpster makes disposal easy. However, the dirt must be clean - free of roots, organic matter, and debris. For yard waste mixed with dirt, you may need a different dumpster type. Contact us to discuss your specific yard work or garden project needs."
  }
];

export default function DirtDumpsterRentalPage() {
  return (
    <PageTemplate>
      <FAQSchema 
        faqs={dirtFAQs}
        pageUrl="https://icondumpsters.com/services/dirt-dumpster-rental"
      />
      
      <StructuredData
        type="service"
        data={{
          name: "Dirt Dumpster Rental Services",
          description: "Specialized dirt dumpster rental services for clean dirt, soil, and fill disposal in Utah. Flat-rate pricing with no weight limits.",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Dirt Dumpster Rental",
          priceRange: "$280-$600"
        }}
      />
      
      <header>
        <Hero />
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dirt Dumpster Rental in Utah
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Specialized Clean Dirt & Soil Disposal Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Need to dispose of dirt, soil, or fill material? Our specialized 10-yard clean dirt dumpster rental 
            is designed specifically for heavy soil materials. With flat-rate pricing and no weight limits, it's the 
            perfect solution for landscaping projects, excavation work, grading projects, and soil removal.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Unlike standard dumpsters that charge by weight, our dirt dumpster rental uses flat-rate pricing 
            that includes delivery, pickup, and disposal - no surprise fees, no weight limits. Perfect for contractors, 
            landscapers, and homeowners dealing with dirt and soil disposal.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:8019186000"
              className="inline-flex items-center justify-center bg-[#0d9488] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (801) 918-6000
            </a>
            <a 
              href="/#quote-form"
              className="inline-flex items-center justify-center bg-white border-2 border-[#0d9488] text-[#0d9488] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors"
            >
              Get Free Dirt Dumpster Quote
            </a>
          </div>
          
          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src="/images/result.png"
              alt="Dirt dumpster rental services in Utah - specialized dirt and soil disposal solutions"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gradient-to-r from-[#0d9488] to-teal-700 rounded-2xl p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">Dirt Dumpster Rental Pricing</h2>
          <p className="text-xl text-purple-100 mb-6 max-w-3xl mx-auto text-center">
            Flat-rate pricing with no weight limits - perfect for heavy dirt and soil materials. All prices include delivery, pickup, and disposal.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-white/20">
              <h3 className="text-xl font-semibold mb-2">1-Day Special</h3>
              <p className="text-4xl font-bold mb-2">$280</p>
              <p className="text-purple-100 text-sm mb-4">Perfect for quick dirt removal projects</p>
              <ul className="text-purple-100 text-sm space-y-1">
                <li>• Same-day delivery</li>
                <li>• Next-day pickup</li>
                <li>• No weight limits</li>
                <li>• All disposal included</li>
              </ul>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border-2 border-white">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-[#0d9488] px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-2">7-Day Standard</h3>
              <p className="text-4xl font-bold mb-2">$299</p>
              <p className="text-purple-100 text-sm mb-4">Ideal for most dirt disposal projects</p>
              <ul className="text-purple-100 text-sm space-y-1">
                <li>• Full week rental</li>
                <li>• No weight limits</li>
                <li>• Delivery & pickup included</li>
                <li>• Perfect for landscaping</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-white/20">
              <h3 className="text-xl font-semibold mb-2">30-Day Extended</h3>
              <p className="text-4xl font-bold mb-2">$600</p>
              <p className="text-purple-100 text-sm mb-4">Best for large or ongoing projects</p>
              <ul className="text-purple-100 text-sm space-y-1">
                <li>• Month-long rental</li>
                <li>• No weight limits</li>
                <li>• Contractor-friendly</li>
                <li>• Multiple pickups available</li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-purple-100 mt-6 text-sm">
            *All prices include delivery, pickup, and disposal. No weight limits. No hidden fees.
          </p>
        </section>

        {/* Why Choose Dirt Dumpster */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Choose Our Dirt Dumpster Rental?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Dirt and soil are very heavy (1.5-2 tons per cubic yard), which makes standard dumpsters impractical. 
            Our specialized dirt dumpster solves this problem with flat-rate pricing and no weight limits.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Weight Limits</h3>
              <p className="text-gray-600">Unlike standard dumpsters, our dirt dumpster has no weight limits. Fill it completely without worrying about overweight fees.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flat-Rate Pricing</h3>
              <p className="text-gray-600">Know your exact cost upfront. No surprise fees, no weight overage charges. One flat rate includes everything.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialized Design</h3>
              <p className="text-gray-600">Built specifically for heavy dirt and soil materials. Designed to handle the extreme weight without damage or safety concerns.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dirt Recycling</h3>
              <p className="text-gray-600">We coordinate dirt recycling and reuse whenever possible, helping reduce environmental impact and potentially lower costs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day or next-day delivery available. We understand project timelines and work around your schedule.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Service</h3>
              <p className="text-gray-600">Our team understands dirt disposal challenges. We'll help you choose the right solution and coordinate delivery around your project.</p>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Common Dirt Dumpster Rental Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Our dirt dumpster rental is perfect for a wide variety of dirt and soil disposal projects throughout Utah.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Landscaping Projects</h3>
              <p className="text-gray-600 mb-3">Remove old soil, dispose of excavated dirt, or clean up after landscaping work. Perfect for garden bed preparation and yard renovation.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Garden bed removal</li>
                <li>• Yard renovation</li>
                <li>• Landscaping cleanup</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excavation Work</h3>
              <p className="text-gray-600 mb-3">Dispose of dirt from foundation excavation, basement digging, or utility installation. Handle large amounts of excavated soil efficiently.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Foundation excavation</li>
                <li>• Basement digging</li>
                <li>• Utility installation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Grading & Leveling</h3>
              <p className="text-gray-600 mb-3">Remove excess dirt from grading projects, leveling work, or site preparation. Perfect for construction site preparation and land development.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Site grading</li>
                <li>• Land leveling</li>
                <li>• Site preparation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Topsoil Removal</h3>
              <p className="text-gray-600 mb-3">Remove old topsoil, replace soil in garden beds, or dispose of excess topsoil from landscaping projects.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Old topsoil removal</li>
                <li>• Soil replacement</li>
                <li>• Garden preparation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fill Dirt Disposal</h3>
              <p className="text-gray-600 mb-3">Dispose of clean fill dirt, subsoil, or excess fill material from construction or landscaping projects.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fill dirt removal</li>
                <li>• Subsoil disposal</li>
                <li>• Excess fill material</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pool Removal</h3>
              <p className="text-gray-600 mb-3">Dispose of dirt and soil from pool removal projects. Handle the backfill and soil removal efficiently.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pool backfill removal</li>
                <li>• Pool excavation dirt</li>
                <li>• Pool removal cleanup</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dirt Weight Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Understanding Dirt Weight for Dumpster Rental</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Dirt and soil are very heavy, which is why specialized dirt dumpsters are essential. Here's what you need to know about dirt weight.
          </p>
          
          <div className="bg-green-50 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dirt Weight Per Cubic Yard</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Topsoil</h4>
                <p className="text-gray-700 mb-4"><strong>1.3-1.5 tons per cubic yard</strong> (2,600-3,000 pounds)</p>
                <p className="text-sm text-gray-600">Lighter, organic-rich soil from surface layers</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Fill Dirt / Subsoil</h4>
                <p className="text-gray-700 mb-4"><strong>1.5-1.8 tons per cubic yard</strong> (3,000-3,600 pounds)</p>
                <p className="text-sm text-gray-600">Heavier, compacted soil from deeper layers</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Wet or Compacted Dirt</h4>
                <p className="text-gray-700 mb-4"><strong>2.0-2.5 tons per cubic yard</strong> (4,000-5,000 pounds)</p>
                <p className="text-sm text-gray-600">Saturated or heavily compacted soil</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Clay Soil</h4>
                <p className="text-gray-700 mb-4"><strong>1.6-2.0 tons per cubic yard</strong> (3,200-4,000 pounds)</p>
                <p className="text-sm text-gray-600">Dense clay soil common in Utah</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Standard Dumpsters Don't Work</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <span>Standard dumpsters have 2-5 ton weight limits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <span>Dirt fills only 1-2 cubic yards before hitting weight limit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <span>Overage fees can cost $45-$68 per additional ton</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <span>You'd need multiple standard dumpsters for dirt projects</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Our Dirt Dumpster Works</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <span>No weight limits - fill it completely</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <span>Flat-rate pricing - no surprise fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <span>Designed specifically for heavy soil materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <span>One dumpster handles most dirt projects</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Dirt Dumpster Rental Throughout Utah</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            We provide dirt dumpster rental services to contractors, landscapers, and homeowners across the Wasatch Front and throughout Utah.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Salt Lake City', 'West Valley City', 'Sandy', 'West Jordan', 'Murray', 
              'Taylorsville', 'South Jordan', 'Orem', 'Provo', 'Ogden', 'Layton', 
              'Draper', 'Riverton', 'Herriman', 'Midvale', 'Millcreek', 'Bountiful',
              'Lehi', 'American Fork', 'Spanish Fork', 'Springville', 'Tooele'
            ].map((city) => (
              <div 
                key={city}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center"
              >
                <span className="text-gray-700 font-medium">{city}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions About Dirt Dumpster Rental</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {dirtFAQs.map((faq, index) => (
              <details key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <summary className="cursor-pointer font-semibold text-lg text-gray-900 mb-2">
                  {faq.question}
                </summary>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <nav className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" aria-label="Related resources">
            <Link href="/services/concrete-dumpster-rental" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Concrete Dumpster Rental</h3>
              <p className="text-sm text-gray-600">Specialized dumpster for concrete, asphalt, and masonry disposal</p>
            </Link>
            <Link href="/services/construction-dumpster-rental" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Construction Dumpster Rental</h3>
              <p className="text-sm text-gray-600">Dumpster solutions for construction projects</p>
            </Link>
            <Link href="/services/yard-waste-removal" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Yard Waste Removal</h3>
              <p className="text-sm text-gray-600">Yard waste and debris removal services</p>
            </Link>
            <Link href="/services/construction-waste-management" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Construction Waste Management</h3>
              <p className="text-sm text-gray-600">Complete waste management for construction sites</p>
            </Link>
            <Link href="/faq" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Dumpster Rental FAQ</h3>
              <p className="text-sm text-gray-600">Answers to common dumpster rental questions</p>
            </Link>
            <Link href="/dumpster-sizes" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Dumpster Sizes Guide</h3>
              <p className="text-sm text-gray-600">Complete guide to dumpster sizes and capacities</p>
            </Link>
          </nav>
        </section>
      </main>

      <QuoteFormSection 
        title="Get Your Free Dirt Dumpster Quote"
        description="Tell us about your dirt disposal project and we'll provide a customized quote with flat-rate pricing and no weight limits."
      />
    </PageTemplate>
  )
}

