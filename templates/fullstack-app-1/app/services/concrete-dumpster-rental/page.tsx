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
  title: 'Concrete Dumpster Rental Utah | Specialized Concrete Disposal | Icon Dumpsters',
  description: "Professional concrete dumpster rental services in Utah. Specialized 12-yard concrete dumpsters for concrete, asphalt, brick, and stone disposal. Flat-rate pricing, no weight limits. Call (801) 918-6000 for concrete disposal solutions.",
  keywords: 'concrete dumpster rental, concrete dumpster rental Utah, concrete disposal dumpster, concrete waste removal, concrete demolition dumpster, asphalt dumpster rental, brick disposal dumpster, stone removal dumpster, concrete recycling dumpster, specialized concrete dumpster',
  openGraph: {
    title: 'Concrete Dumpster Rental Utah | Specialized Concrete Disposal | Icon Dumpsters',
    description: 'Professional concrete dumpster rental services in Utah. Specialized 12-yard concrete dumpsters for concrete, asphalt, brick, and stone disposal.',
    type: 'website',
    url: 'https://icondumpsters.com/services/concrete-dumpster-rental',
    siteName: 'Icon Dumpsters',
    locale: 'en_US',
    images: [
      {
        url: 'https://icondumpsters.com/images/result.png',
        width: 1200,
        height: 630,
        alt: 'Concrete Dumpster Rental Services in Utah',
      },
    ],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/services/concrete-dumpster-rental',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
  },
};

const concreteFAQs = [
  {
    question: "What is a concrete dumpster rental?",
    answer: "A concrete dumpster rental is a specialized dumpster service designed specifically for disposing of heavy concrete materials. Our 12-yard concrete dumpster is perfect for concrete, asphalt, brick, stone, and masonry disposal. Unlike standard dumpsters, concrete dumpsters use flat-rate pricing with no weight limits, making them ideal for heavy demolition and construction projects. These dumpsters are built to handle the extreme weight of concrete materials without the risk of overweight fees."
  },
  {
    question: "How much does concrete dumpster rental cost?",
    answer: "Concrete dumpster rental costs start at $349 for our 12-yard concrete dumpster with a 7-day rental period. This flat-rate pricing includes delivery, pickup, and disposal with no weight limits - perfect for heavy concrete materials. We also offer 1-day special pricing at $280 and 30-day rentals at $600. All pricing is transparent with no hidden fees. Contact us at (801) 918-6000 for a customized quote based on your project location and timeline."
  },
  {
    question: "What size concrete dumpster do I need?",
    answer: "For concrete disposal, we offer a specialized 12-yard concrete dumpster that's designed specifically for heavy materials. This size is ideal because concrete is extremely heavy (2.5-3 tons per cubic yard), so you'll reach weight capacity before volume capacity. A 12-yard concrete dumpster can typically hold 8-10 cubic yards of broken concrete, which is equivalent to about 20-30 tons. For larger projects, you may need multiple dumpsters or scheduled pickups. Use our concrete calculator to determine the exact size needed for your project."
  },
  {
    question: "What materials can go in a concrete dumpster?",
    answer: "Our concrete dumpster is designed for heavy masonry materials including: concrete (broken or whole), asphalt, brick, stone, cinder blocks, concrete blocks, pavers, retaining wall blocks, and similar masonry materials. We can also accept concrete with rebar attached, though large pieces may need to be broken down. We cannot accept: hazardous materials, liquids, paint, chemicals, or non-masonry construction debris. For mixed loads of concrete and other materials, consider our 10-yard mixed load dumpster."
  },
  {
    question: "How much does concrete weigh in a dumpster?",
    answer: "Concrete is extremely heavy, weighing approximately 2.5-3.0 tons per cubic yard (5,000-6,000 pounds). Standard concrete weighs about 2.5 tons per cubic yard, while reinforced concrete with rebar can weigh 2.7-3.0 tons per cubic yard. This is why our concrete dumpster uses flat-rate pricing with no weight limits - standard dumpsters would quickly exceed weight capacity. A 12-yard concrete dumpster can typically hold 20-30 tons of concrete material, which is why specialized concrete dumpsters are essential for concrete disposal projects."
  },
  {
    question: "Do you offer concrete recycling?",
    answer: "Yes, we coordinate concrete recycling whenever possible. Concrete is one of the most recyclable construction materials and can be crushed and reused as aggregate for new concrete, road base, or fill material. We work with recycling facilities throughout Utah to ensure your concrete is properly recycled rather than sent to landfills. This helps reduce environmental impact and may provide cost savings. When you rent a concrete dumpster, let us know if you're interested in recycling options."
  },
  {
    question: "How do I prepare concrete for dumpster disposal?",
    answer: "To prepare concrete for dumpster disposal: 1) Break large pieces into manageable sizes (pieces should be no larger than 2-3 feet), 2) Remove any attached wood, metal, or other non-concrete materials when possible, 3) Separate rebar if feasible (though rebar can stay attached), 4) Ensure concrete is dry and free of paint, chemicals, or hazardous materials, 5) Load concrete evenly in the dumpster to distribute weight. Breaking concrete into smaller pieces helps maximize dumpster capacity and makes disposal more efficient."
  },
  {
    question: "Can I rent a concrete dumpster for a driveway removal?",
    answer: "Absolutely! Our concrete dumpster rental is perfect for driveway removal projects. A typical residential driveway (20x20 feet, 4 inches thick) produces about 5-6 cubic yards of concrete, which fits perfectly in our 12-yard concrete dumpster. For larger driveways or commercial projects, you may need multiple dumpsters or scheduled pickups. We can coordinate delivery and pickup around your demolition schedule. Call us at (801) 918-6000 to discuss your driveway removal project."
  },
  {
    question: "What's the difference between a concrete dumpster and a regular dumpster?",
    answer: "The main differences are: 1) Pricing structure - concrete dumpsters use flat-rate pricing with no weight limits, while regular dumpsters have weight limits (typically 2-5 tons) with overage fees, 2) Design - concrete dumpsters are built to handle extreme weight, 3) Capacity - concrete dumpsters are sized for heavy materials where weight, not volume, is the limiting factor, 4) Materials accepted - concrete dumpsters are specifically for masonry materials. Regular dumpsters are better for mixed construction debris, while concrete dumpsters are essential for heavy concrete-only loads."
  },
  {
    question: "How long can I keep a concrete dumpster?",
    answer: "Our standard concrete dumpster rental period is 7 days, which is included in the base price of $349. We also offer: 1-day special pricing at $280 for quick projects, extended rentals up to 30 days at $600, and custom rental periods for contractors with ongoing projects. If you need the dumpster longer than your rental period, we can extend it for an additional daily fee. Just let us know your timeline when you order."
  },
  {
    question: "Do you deliver concrete dumpsters to construction sites?",
    answer: "Yes, we deliver concrete dumpsters to construction sites, demolition sites, residential properties, and commercial locations throughout Utah. We serve Salt Lake City, West Valley City, Provo, Ogden, and all surrounding areas. Our delivery trucks can access most construction sites, though we need about 60 feet of clearance for delivery and pickup. For remote or difficult-to-access locations, we can coordinate special delivery arrangements. Call us to discuss your specific location requirements."
  },
  {
    question: "Can I use a concrete dumpster for a patio or sidewalk removal?",
    answer: "Yes, our concrete dumpster is perfect for patio and sidewalk removal projects. A typical patio (12x12 feet, 4 inches thick) produces about 2 cubic yards of concrete, while a standard sidewalk (4 feet wide, 4 inches thick, 50 feet long) produces about 3 cubic yards. Both easily fit in our 12-yard concrete dumpster. For larger projects like commercial patios or extensive sidewalk removal, you may need multiple dumpsters. We can help you estimate the amount of concrete your project will generate."
  }
];

export default function ConcreteDumpsterRentalPage() {
  return (
    <PageTemplate>
      <FAQSchema 
        faqs={concreteFAQs}
        pageUrl="https://icondumpsters.com/services/concrete-dumpster-rental"
      />
      
      <StructuredData
        type="service"
        data={{
          name: "Concrete Dumpster Rental Services",
          description: "Specialized concrete dumpster rental services for concrete, asphalt, brick, and stone disposal in Utah. Flat-rate pricing with no weight limits.",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Concrete Dumpster Rental",
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
            Concrete Dumpster Rental in Utah
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Specialized Concrete Disposal Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Need to dispose of concrete, asphalt, brick, or stone? Our specialized 12-yard concrete dumpster rental 
            is designed specifically for heavy masonry materials. With flat-rate pricing and no weight limits, it's the 
            perfect solution for concrete demolition, driveway removal, patio demolition, and construction projects.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Unlike standard dumpsters that charge by weight, our concrete dumpster rental uses flat-rate pricing 
            that includes delivery, pickup, and disposal - no surprise fees, no weight limits. Perfect for contractors, 
            homeowners, and businesses dealing with heavy concrete materials.
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
              Get Free Concrete Dumpster Quote
            </a>
          </div>
          
          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src="/images/result.png"
              alt="Concrete dumpster rental services in Utah - specialized concrete disposal solutions"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gradient-to-r from-[#0d9488] to-teal-700 rounded-2xl p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">Concrete Dumpster Rental Pricing</h2>
          <p className="text-xl text-purple-100 mb-6 max-w-3xl mx-auto text-center">
            Flat-rate pricing with no weight limits - perfect for heavy concrete materials. All prices include delivery, pickup, and disposal.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-white/20">
              <h3 className="text-xl font-semibold mb-2">1-Day Special</h3>
              <p className="text-4xl font-bold mb-2">$280</p>
              <p className="text-purple-100 text-sm mb-4">Perfect for quick concrete removal projects</p>
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
              <p className="text-4xl font-bold mb-2">$349</p>
              <p className="text-purple-100 text-sm mb-4">Ideal for most concrete disposal projects</p>
              <ul className="text-purple-100 text-sm space-y-1">
                <li>• Full week rental</li>
                <li>• No weight limits</li>
                <li>• Delivery & pickup included</li>
                <li>• Perfect for driveways, patios</li>
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

        {/* Why Choose Concrete Dumpster */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Choose Our Concrete Dumpster Rental?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Concrete is extremely heavy (2.5-3 tons per cubic yard), which makes standard dumpsters impractical. 
            Our specialized concrete dumpster solves this problem with flat-rate pricing and no weight limits.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Weight Limits</h3>
              <p className="text-gray-600">Unlike standard dumpsters, our concrete dumpster has no weight limits. Fill it completely without worrying about overweight fees.</p>
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
              <p className="text-gray-600">Built specifically for heavy concrete materials. Designed to handle the extreme weight without damage or safety concerns.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Concrete Recycling</h3>
              <p className="text-gray-600">We coordinate concrete recycling whenever possible, helping reduce environmental impact and potentially lower costs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day or next-day delivery available. We understand construction timelines and work around your schedule.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Service</h3>
              <p className="text-gray-600">Our team understands concrete disposal challenges. We'll help you choose the right solution and coordinate delivery around your project.</p>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Common Concrete Dumpster Rental Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Our concrete dumpster rental is perfect for a wide variety of concrete disposal projects throughout Utah.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Driveway Removal</h3>
              <p className="text-gray-600 mb-3">Remove old driveways, patios, or walkways. A typical 20x20 foot driveway produces 5-6 cubic yards of concrete.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Residential driveways</li>
                <li>• Commercial driveways</li>
                <li>• Parking lot removal</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patio & Sidewalk Demolition</h3>
              <p className="text-gray-600 mb-3">Perfect for removing concrete patios, sidewalks, and walkways. Easy disposal of all concrete materials.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Concrete patios</li>
                <li>• Sidewalk removal</li>
                <li>• Walkway demolition</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Foundation Removal</h3>
              <p className="text-gray-600 mb-3">Dispose of old foundations, footings, and structural concrete. Handle large amounts of heavy concrete safely.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Foundation demolition</li>
                <li>• Footing removal</li>
                <li>• Structural concrete</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Concrete Block & Brick</h3>
              <p className="text-gray-600 mb-3">Remove concrete blocks, cinder blocks, bricks, and masonry materials from construction or demolition projects.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Concrete blocks</li>
                <li>• Cinder blocks</li>
                <li>• Brick removal</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Asphalt Removal</h3>
              <p className="text-gray-600 mb-3">Dispose of asphalt from driveways, roads, or parking lots. Our concrete dumpster handles asphalt materials perfectly.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Asphalt driveways</li>
                <li>• Road removal</li>
                <li>• Parking lot asphalt</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Retaining Wall Removal</h3>
              <p className="text-gray-600 mb-3">Remove concrete or stone retaining walls. Handle heavy masonry materials efficiently and safely.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Concrete retaining walls</li>
                <li>• Stone wall removal</li>
                <li>• Masonry structures</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Concrete Weight Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Understanding Concrete Weight for Dumpster Rental</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Concrete is extremely heavy, which is why specialized concrete dumpsters are essential. Here's what you need to know about concrete weight.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Concrete Weight Per Cubic Yard</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Standard Concrete</h4>
                <p className="text-gray-700 mb-4"><strong>2.5 tons per cubic yard</strong> (5,000 pounds)</p>
                <p className="text-sm text-gray-600">Most common type for driveways, patios, and foundations</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Reinforced Concrete</h4>
                <p className="text-gray-700 mb-4"><strong>2.7-3.0 tons per cubic yard</strong> (5,400-6,000 pounds)</p>
                <p className="text-sm text-gray-600">Concrete with rebar or steel reinforcement</p>
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
                  <span>Concrete fills only 1-2 cubic yards before hitting weight limit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <span>Overage fees can cost $45-$68 per additional ton</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <span>You'd need multiple standard dumpsters for concrete projects</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Our Concrete Dumpster Works</h3>
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
                  <span>Designed specifically for heavy materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <span>One dumpster handles most concrete projects</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Concrete Dumpster Rental Throughout Utah</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            We provide concrete dumpster rental services to contractors, homeowners, and businesses across the Wasatch Front and throughout Utah.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions About Concrete Dumpster Rental</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {concreteFAQs.map((faq, index) => (
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
            <Link href="/services/dirt-dumpster-rental" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Dirt Dumpster Rental</h3>
              <p className="text-sm text-gray-600">Specialized dumpster for clean dirt and soil disposal</p>
            </Link>
            <Link href="/services/demolition-waste-disposal" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Demolition Waste Disposal</h3>
              <p className="text-sm text-gray-600">Complete demolition waste management solutions</p>
            </Link>
            <Link href="/(resources)/dumpster-calculator-for-concrete" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Concrete Dumpster Calculator</h3>
              <p className="text-sm text-gray-600">Calculate the right dumpster size for your concrete project</p>
            </Link>
            <Link href="/(resources)/calculators/concrete-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Concrete Debris Calculator</h3>
              <p className="text-sm text-gray-600">Estimate concrete weight and dumpster needs</p>
            </Link>
            <Link href="/services/construction-dumpster-rental" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Construction Dumpster Rental</h3>
              <p className="text-sm text-gray-600">Dumpster solutions for construction projects</p>
            </Link>
            <Link href="/faq" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Dumpster Rental FAQ</h3>
              <p className="text-sm text-gray-600">Answers to common dumpster rental questions</p>
            </Link>
          </nav>
        </section>
      </main>

      <QuoteFormSection 
        title="Get Your Free Concrete Dumpster Quote"
        description="Tell us about your concrete disposal project and we'll provide a customized quote with flat-rate pricing and no weight limits."
      />
    </PageTemplate>
  )
}

