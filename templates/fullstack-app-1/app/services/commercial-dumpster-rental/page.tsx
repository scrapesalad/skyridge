export const dynamic = 'force-static';

import { Metadata } from 'next'
import Link from 'next/link'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData from '@/app/components/StructuredData'
import FAQSchema from '@/app/components/FAQSchema'
import QuoteFormSection from '@/app/components/QuoteFormSection'
import BlogLinks from '@/app/components/BlogLinks'

export const metadata: Metadata = {
  title: 'Commercial Dumpster Rental Services Utah | Business Waste Management | Icon Dumpsters',
  description: "Professional commercial dumpster rental services throughout Utah. Reliable waste management for businesses, offices, retail stores, restaurants, and commercial properties. Flexible contracts, competitive pricing, and dedicated account management. Call (801) 918-6000 for a free quote.",
  keywords: 'commercial dumpster rental Utah, business dumpster rental, commercial waste disposal, office dumpster rental, Salt Lake City commercial dumpster, retail dumpster rental, restaurant dumpster rental, property management dumpster, commercial waste management Utah, business dumpster service',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Commercial Dumpster Rental Services Utah | Business Waste Management | Icon Dumpsters',
    description: 'Professional commercial dumpster rental services throughout Utah. Reliable waste management for businesses, offices, retail stores, restaurants, and commercial properties.',
    url: 'https://icondumpsters.com/services/commercial-dumpster-rental',
    images: [
      {
        url: 'https://icondumpsters.com/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Commercial Dumpster Rental Services Utah | Icon Dumpsters',
      },
    ]
  },
  alternates: {
    canonical: 'https://icondumpsters.com/services/commercial-dumpster-rental',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
  },
};

const commercialFAQs = [
  {
    question: "How much does commercial dumpster rental cost in Utah?",
    answer: "Commercial dumpster rental costs in Utah typically range from $375 to $800 per month, depending on dumpster size, pickup frequency, and location. A 15-yard dumpster with weekly pickup starts around $375-$415, while a 30-yard dumpster with multiple weekly pickups can cost $600-$800. We offer volume discounts for multiple dumpsters and long-term contracts. Contact us at (801) 918-6000 for a customized quote based on your business needs."
  },
  {
    question: "What size commercial dumpster do I need for my business?",
    answer: "The right commercial dumpster size depends on your business type and waste volume. Small offices and retail stores typically need 15-yard dumpsters. Medium businesses like restaurants and multi-tenant buildings often use 20-yard dumpsters. Large retail stores, warehouses, and manufacturing facilities usually require 30-yard or 40-yard dumpsters. Our team can assess your waste volume and recommend the perfect size. Factors include: number of employees, business type, waste generation rate, and pickup frequency needed."
  },
  {
    question: "How often should commercial dumpsters be picked up?",
    answer: "Commercial dumpster pickup frequency depends on your waste volume and business type. Most businesses need weekly or bi-weekly pickups. High-volume businesses like restaurants, retail stores, and manufacturing facilities may need 2-3 pickups per week. Low-volume businesses like small offices might only need monthly pickups. We'll work with you to create a pickup schedule that prevents overflow while optimizing costs. Flexible scheduling allows adjustments as your business needs change."
  },
  {
    question: "Do commercial dumpster rentals require contracts?",
    answer: "We offer both contract and month-to-month commercial dumpster rentals. Long-term contracts (6-12 months) typically include volume discounts and guaranteed pricing. Month-to-month rentals offer flexibility for seasonal businesses or short-term projects. We can customize contract terms to fit your business needs, including flexible pickup schedules, multiple dumpster locations, and seasonal adjustments. Contact us to discuss which option works best for your business."
  },
  {
    question: "What types of waste can go in commercial dumpsters?",
    answer: "Commercial dumpsters accept most types of business waste including: general office waste, cardboard, packaging materials, food waste (for restaurants), retail waste, construction debris from renovations, and non-hazardous materials. We cannot accept hazardous materials, medical waste, electronics, batteries, or chemicals. For specialized waste streams like e-waste or recyclables, we can coordinate separate pickups. Our team can help you develop a waste management plan that ensures compliance with local regulations."
  },
  {
    question: "Do I need a permit for commercial dumpster placement?",
    answer: "Permit requirements for commercial dumpster placement vary by city in Utah. If the dumpster is placed on private property (parking lot, loading dock), permits are usually not required. If the dumpster must be placed on public property or right-of-way, a permit is typically needed. Salt Lake City, West Valley City, Provo, and other major cities require permits for street placement. We handle permit applications and can guide you through the process. Permit costs typically range from $25-$120 depending on the city and duration."
  },
  {
    question: "Can I get multiple dumpsters for different locations?",
    answer: "Yes, we provide commercial dumpster services for multiple locations. Many businesses with multiple locations, property management companies, and retail chains use our multi-location services. We offer centralized billing, consistent service across all locations, and volume discounts for multiple dumpsters. Our account management team coordinates delivery, pickup schedules, and billing for all your locations. This simplifies waste management for businesses with multiple properties."
  },
  {
    question: "What happens if my commercial dumpster overflows?",
    answer: "If your commercial dumpster overflows, we can schedule an emergency pickup to prevent violations and maintain a clean business environment. We recommend adjusting your pickup frequency if overflow becomes regular. Our team monitors your account and can proactively suggest schedule changes based on your waste patterns. Emergency pickups are available with advance notice, and we can adjust your regular schedule to prevent future overflow issues."
  },
  {
    question: "Do you offer recycling services for commercial customers?",
    answer: "Yes, we offer recycling coordination for commercial customers. We can provide separate dumpsters for recyclables, coordinate with recycling facilities, and help you develop a comprehensive recycling program. Many businesses use separate dumpsters for cardboard, paper, plastics, and other recyclables. We can help you reduce waste disposal costs through effective recycling programs and provide documentation for sustainability reporting."
  },
  {
    question: "What makes Icon Dumpsters different for commercial customers?",
    answer: "Icon Dumpsters specializes in commercial waste management with dedicated account management, flexible contracts, volume discounts, and reliable service. We understand business operations and work around your schedule. Our commercial services include: customized billing, multiple location management, flexible pickup schedules, compliance support, and emergency service. We're locally owned and operated, so you get personalized service and quick response times. Our team has extensive experience serving businesses across Utah."
  }
];

export default function CommercialDumpsterRentalPage() {
  return (
    <PageTemplate>
      <FAQSchema 
        faqs={commercialFAQs}
        pageUrl="https://icondumpsters.com/services/commercial-dumpster-rental"
      />
      
      <StructuredData
        type="service"
        data={{
          name: "Commercial Dumpster Rental Services",
          description: "Professional commercial dumpster rental services for businesses and commercial properties throughout Utah. Flexible contracts, competitive pricing, and dedicated account management.",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT', 'Murray, UT', 'Taylorsville, UT', 'South Jordan, UT'],
          serviceType: "Commercial Dumpster Rental",
          priceRange: "$375-$800"
        }}
      />
      
      <header>
        <Hero />
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Commercial Dumpster Rental Services in Utah
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Professional Waste Management Solutions for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            At Icon Dumpsters, we provide comprehensive commercial dumpster rental services throughout Utah. Whether you're managing an office building, retail store, restaurant, warehouse, or any commercial property, we have the waste management solutions you need to keep your business running smoothly.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Our commercial dumpster rental services are designed to meet the unique needs of businesses. We offer flexible rental terms, reliable pickup schedules, competitive pricing, and professional service that keeps your commercial property clean and compliant. With dedicated account management and volume discounts, we make commercial waste management simple and cost-effective.
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
              Get Free Commercial Quote
            </a>
          </div>
          
          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src="/images/commercial.webp"
              alt="Commercial dumpster rental services in Utah - professional waste management for businesses"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Commercial Dumpster Sizes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Commercial Dumpster Sizes for Every Business</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Choose the right dumpster size for your business needs. Our commercial dumpsters range from 15 to 40 yards, 
            perfect for small offices to large industrial facilities.
          </p>
          
          {/* Commercial Dumpster Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/dumpster500x500-1.webp"
                alt="Commercial dumpster rental - 15-20 yard dumpsters for small to medium businesses"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/dumpster500x500-2.webp"
                alt="Large commercial dumpster rental - 30-40 yard dumpsters for large businesses and industrial facilities"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">15 Yard Dumpster</h3>
              <p className="text-[#0d9488] font-bold text-lg mb-3">$375-$415/month</p>
              <p className="text-gray-600 mb-4">Perfect for small businesses and offices</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Small retail stores</li>
                <li>• Office buildings (1-20 employees)</li>
                <li>• Small restaurants</li>
                <li>• Medical offices</li>
                <li>• Professional services</li>
                <li>• Coffee shops</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#0d9488] hover:shadow-lg transition-shadow">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0d9488] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-2">20 Yard Dumpster</h3>
              <p className="text-[#0d9488] font-bold text-lg mb-3">$415-$465/month</p>
              <p className="text-gray-600 mb-4">Ideal for medium commercial properties</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Medium retail stores</li>
                <li>• Restaurants and cafes</li>
                <li>• Small warehouses</li>
                <li>• Multi-tenant buildings</li>
                <li>• Shopping centers</li>
                <li>• Hotels (small)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">30 Yard Dumpster</h3>
              <p className="text-[#0d9488] font-bold text-lg mb-3">$465-$525/month</p>
              <p className="text-gray-600 mb-4">Best for large commercial properties</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Large retail stores</li>
                <li>• Manufacturing facilities</li>
                <li>• Distribution centers</li>
                <li>• Large restaurants</li>
                <li>• Commercial complexes</li>
                <li>• Hotels (large)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">40 Yard Dumpster</h3>
              <p className="text-[#0d9488] font-bold text-lg mb-3">$565-$635/month</p>
              <p className="text-gray-600 mb-4">For industrial and large facilities</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Industrial facilities</li>
                <li>• Large warehouses</li>
                <li>• Manufacturing plants</li>
                <li>• Major distribution centers</li>
                <li>• Large commercial projects</li>
                <li>• Event venues</li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-8">
            <strong>Note:</strong> Pricing shown is for standard weekly pickup. Multiple weekly pickups, specialized waste handling, 
            and long-term contracts may affect pricing. <Link href="/#quote-form" className="text-[#0d9488] hover:text-teal-700 font-semibold">Contact us</Link> for a customized quote.
          </p>
        </section>

        {/* Business Types We Serve */}
        <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Commercial Dumpster Services for Every Business Type</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            We provide commercial dumpster rental services to businesses across all industries throughout Utah. 
            Our flexible solutions adapt to your specific waste management needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Retail & Shopping</h3>
              </div>
              <p className="text-gray-600 text-sm">Retail stores, shopping centers, malls, boutiques, and specialty shops. We handle packaging waste, cardboard, and general retail debris.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Restaurants & Food Service</h3>
              </div>
              <p className="text-gray-600 text-sm">Restaurants, cafes, food trucks, catering companies, and commercial kitchens. Specialized handling for food waste and grease trap waste.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Office Buildings</h3>
              </div>
              <p className="text-gray-600 text-sm">Corporate offices, professional services, medical offices, law firms, and business centers. Regular pickup schedules for paper and general office waste.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Manufacturing & Industrial</h3>
              </div>
              <p className="text-gray-600 text-sm">Manufacturing facilities, industrial plants, warehouses, and production facilities. Large capacity dumpsters for high-volume waste streams.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Healthcare & Medical</h3>
              </div>
              <p className="text-gray-600 text-sm">Hospitals, clinics, medical offices, dental practices, and healthcare facilities. Compliance-focused waste management for medical facilities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Property Management</h3>
              </div>
              <p className="text-gray-600 text-sm">Property management companies, apartment complexes, condos, and multi-tenant buildings. Centralized waste management for multiple properties.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Hotels & Hospitality</h3>
              </div>
              <p className="text-gray-600 text-sm">Hotels, resorts, event venues, and hospitality businesses. High-volume waste management with flexible scheduling for peak seasons.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Warehouses & Distribution</h3>
              </div>
              <p className="text-gray-600 text-sm">Warehouses, distribution centers, logistics facilities, and fulfillment centers. Large capacity solutions for packaging and shipping waste.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Construction & Renovation</h3>
              </div>
              <p className="text-gray-600 text-sm">Commercial construction sites, renovation projects, and building remodels. Temporary dumpster solutions for construction waste.</p>
            </div>
          </div>
        </section>

        {/* Commercial Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Choose Icon Dumpsters for Commercial Projects?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            We understand that commercial waste management is different from residential. That's why we offer specialized 
            services designed specifically for businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600">Consistent pickup schedules that work with your business operations. We never miss a pickup, ensuring your dumpsters are always ready for use.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Contracts</h3>
              <p className="text-gray-600">Short-term and long-term rental options to fit your business needs. Month-to-month or annual contracts with volume discounts available.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Volume Discounts</h3>
              <p className="text-gray-600">Competitive pricing for multiple dumpsters and long-term contracts. Save money with our volume pricing for businesses with high waste volumes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Account Management</h3>
              <p className="text-gray-600">Personal account manager for commercial customers. One point of contact for all your waste management needs and questions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Support</h3>
              <p className="text-gray-600">Help with waste management regulations and reporting. We ensure your business stays compliant with local and state waste management requirements.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Service</h3>
              <p className="text-gray-600">Quick response for urgent waste management needs. Same-day or next-day service available for overflow situations or unexpected waste.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Recycling Programs</h3>
              <p className="text-gray-600">Comprehensive recycling coordination for commercial customers. Separate dumpsters for recyclables with documentation for sustainability reporting.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Location Management</h3>
              <p className="text-gray-600">Centralized billing and service for businesses with multiple locations. Simplify waste management across all your properties with one account.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees or surprise charges. Clear, upfront pricing with detailed invoices. Know exactly what you're paying for every month.</p>
            </div>
          </div>
        </section>

        {/* Pricing Information */}
        <section className="bg-gradient-to-r from-[#0d9488] to-teal-700 rounded-2xl p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">Commercial Dumpster Rental Pricing</h2>
          <p className="text-xl text-purple-100 mb-6 max-w-3xl mx-auto text-center">
            Competitive pricing for commercial dumpster rentals throughout Utah. Volume discounts available for multiple dumpsters and long-term contracts.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Standard Monthly Pricing</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• 15-yard dumpster: $375-$415/month</li>
                <li>• 20-yard dumpster: $415-$465/month</li>
                <li>• 30-yard dumpster: $465-$525/month</li>
                <li>• 40-yard dumpster: $565-$635/month</li>
              </ul>
              <p className="text-sm text-purple-200 mt-4">*Includes weekly pickup. Additional pickups available.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Volume Discounts Available</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• Multiple dumpster locations</li>
                <li>• Long-term contracts (6+ months)</li>
                <li>• High-volume waste generators</li>
                <li>• Multi-location businesses</li>
              </ul>
              <p className="text-sm text-purple-200 mt-4">Contact us for customized pricing based on your needs.</p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="tel:8019186000"
              className="inline-flex items-center justify-center bg-white text-[#0d9488] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors mr-4"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (801) 918-6000 for Pricing
            </a>
            <a 
              href="/#quote-form"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0d9488] transition-colors"
            >
              Get Free Commercial Quote
            </a>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Commercial Dumpster Services Throughout Utah</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            We provide commercial dumpster rental services to businesses across the Wasatch Front and throughout Utah.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Salt Lake City', 'West Valley City', 'Sandy', 'West Jordan', 'Murray', 
              'Taylorsville', 'South Jordan', 'Orem', 'Provo', 'Ogden', 'Layton', 
              'Draper', 'Riverton', 'Herriman', 'Midvale', 'Millcreek', 'Holladay',
              'Kearns', 'South Salt Lake', 'North Salt Lake', 'Bountiful', 'Lehi',
              'American Fork', 'Spanish Fork', 'Springville', 'Payson', 'Tooele'
            ].map((city) => (
              <Link 
                key={city}
                href={`/dumpster-rental-${city.toLowerCase().replace(/\s+/g, '-')}-ut`}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-[#0d9488] transition-all text-center"
              >
                <span className="text-gray-700 font-medium">{city}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions About Commercial Dumpster Rental</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {commercialFAQs.map((faq, index) => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Commercial Resources</h2>
          <nav className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" aria-label="Related resources">
            <Link href="/services/construction-dumpster-rental" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Construction Dumpster Rental</h3>
              <p className="text-sm text-gray-600">Dumpster solutions for construction and renovation projects</p>
            </Link>
            <Link href="/services/industrial-dumpster-rental" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Industrial Dumpster Rental</h3>
              <p className="text-sm text-gray-600">Large capacity solutions for industrial facilities</p>
            </Link>
            <Link href="/pricing/dumpster-rental-costs" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Dumpster Rental Costs</h3>
              <p className="text-sm text-gray-600">Complete pricing breakdown and cost factors</p>
            </Link>
            <Link href="/dumpster-rental-salt-lake-city-ut" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Salt Lake City Dumpster Rental</h3>
              <p className="text-sm text-gray-600">Commercial dumpster services in Salt Lake City</p>
            </Link>
            <Link href="/services/commercial-dumpster-rental-salt-lake-city-ut" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Commercial Services SLC</h3>
              <p className="text-sm text-gray-600">Business dumpster rental in Salt Lake City</p>
            </Link>
            <Link href="/faq" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="font-semibold text-[#0d9488] mb-2">Dumpster Rental FAQ</h3>
              <p className="text-sm text-gray-600">Answers to common questions about dumpster rental</p>
            </Link>
          </nav>
        </section>
      </main>

      {/* Blog Links Section */}
      <BlogLinks serviceType="commercial" limit={6} />

      <QuoteFormSection 
        title="Get Your Free Commercial Dumpster Quote"
        description="Tell us about your business waste management needs and we'll provide a customized quote with competitive pricing and flexible service options."
      />
    </PageTemplate>
  )
}
