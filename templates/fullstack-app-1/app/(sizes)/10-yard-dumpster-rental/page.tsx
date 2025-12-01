export const dynamic = 'force-static';

import { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData from '@/app/components/StructuredData'
import StrategicInternalLinks from '@/app/components/StrategicInternalLinks'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '10 Yard Dumpster Rental Utah | Small Cleanout Dumpsters | Icon Dumpsters',
  description: 'Compact 10-yard dumpster rental for small cleanouts in Utah. Perfect for garage cleanouts, small renovations, and yard waste. Starting at $249. Same-day delivery available.',
  keywords: '10 yard dumpster rental, small dumpster rental Utah, garage cleanout dumpster, yard waste dumpster, Salt Lake City dumpster rental',
  alternates: { canonical: 'https://icondumpsters.com/10-yard-dumpster-rental' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: '10 Yard Dumpster Rental Utah | Small Cleanout Dumpsters',
    description: 'Compact 10-yard dumpster rental for small cleanouts in Utah. Starting at $249 with same-day delivery.',
    url: 'https://icondumpsters.com/10-yard-dumpster-rental',
    images: [{ url: '/images/optimized/icondumpsters_general_img_3190.webp', width: 1200, height: 630, alt: '10 Yard Dumpster Rental Utah' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
}

export default function TenYardDumpsterRentalPage() {
  return (
    <PageTemplate>
      <StructuredData
        type="service"
        data={{
          name: "10 Yard Dumpster Rental",
          description: "Compact 10-yard dumpster rental for small projects throughout Utah",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Dumpster Rental",
          priceRange: "$249-$349"
        }}
      />
      
      <Hero />

      {/* Dumpster Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              10 Yard Dumpster Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most compact size, perfect for small projects and tight spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">10</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cubic Yards</h3>
              <p className="text-gray-600">Approximately 2-3 pickup truck loads</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">12'</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Length</h3>
              <p className="text-gray-600">Compact length for tight spaces</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">7.5'</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Width</h3>
              <p className="text-gray-600">Standard width for easy loading</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">3.5'</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Depth</h3>
              <p className="text-gray-600">Low sides for easy access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect For Small Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The 10-yard dumpster is ideal for smaller cleanouts and renovation projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#0d9488] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Garage Cleanouts</h3>
              <p className="text-gray-600">
                Perfect size for clearing out a single garage. Holds old furniture, boxes, and general clutter.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#0d9488] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Yard Waste</h3>
              <p className="text-gray-600">
                Great for seasonal cleanups, landscaping projects, and removing brush or small branches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#0d9488] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Renovations</h3>
              <p className="text-gray-600">
                Ideal for bathroom updates, small flooring projects, or minor interior remodels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#0d9488] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Estate Cleanouts</h3>
              <p className="text-gray-600">
                Perfect for smaller estate cleanouts or downsizing projects with minimal debris.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#0d9488] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Light Debris</h3>
              <p className="text-gray-600">
                Great for lighter materials like cardboard, paper, and general household waste.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#0d9488] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deck Removal</h3>
              <p className="text-gray-600">
                Ideal for removing small decks or patio structures with minimal lumber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Starting at just $249 for 7 days, including delivery, pickup, and disposal.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#0d9488] to-[#6b46c1] rounded-lg shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">What's Included:</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>7-day rental period</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Same-day or next-day delivery available</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Up to 2 tons of material included</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Responsible waste disposal</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Flexible pickup scheduling</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:801-918-6000"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0d9488] px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call 801-918-6000
              </a>
              <a
                href="/#quote-form"
                className="inline-flex items-center justify-center gap-2 bg-[#10b981] text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-[#059669] transition-all duration-200 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Sizes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compare Dumpster Sizes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Not sure if the 10-yard is right for you? Compare our dumpster sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/10-yard-dumpster-rental" className="bg-gradient-to-br from-[#0d9488] to-[#6b46c1] text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">10 Yard</h3>
              <p className="text-sm mb-4">Perfect for small projects</p>
              <p className="font-semibold">Starting at $249</p>
            </Link>

            <Link href="/15-yard-dumpster-rental" className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-[#0d9488] transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15 Yard</h3>
              <p className="text-sm text-gray-600 mb-4">Our most popular size</p>
              <p className="font-semibold text-[#0d9488]">Starting at $299</p>
            </Link>

            <Link href="/20-yard-dumpster-rental" className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-[#0d9488] transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">20 Yard</h3>
              <p className="text-sm text-gray-600 mb-4">Great for renovations</p>
              <p className="font-semibold text-[#0d9488]">Starting at $349</p>
            </Link>

            <Link href="/30-yard-dumpster-rental" className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-[#0d9488] transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">30 Yard</h3>
              <p className="text-sm text-gray-600 mb-4">For large projects</p>
              <p className="font-semibold text-[#0d9488]">Starting at $399</p>
            </Link>
          </div>
        </div>
      </section>

      <StrategicInternalLinks />
    </PageTemplate>
  )
}

