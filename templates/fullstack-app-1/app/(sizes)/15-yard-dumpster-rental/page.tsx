export const dynamic = 'force-static';

import { Metadata } from 'next'
import Link from 'next/link'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData, { FifteenYardDumpsterProduct } from '@/app/components/StructuredData'
import FifteenYardDimensions from '@/app/components/FifteenYardDimensions'
import StrategicInternalLinks from '@/app/components/StrategicInternalLinks'

export const metadata: Metadata = {
  title: '15 Yard Dumpster Rental Utah | Small Project Dumpsters | Icon Dumpsters',
  description: 'Perfect 15-yard dumpster rental for small projects in Utah. Kitchen renovations, bathroom remodels, garage cleanouts. Starting at $299. Same-day delivery available.',
  keywords: '15 yard dumpster rental, small dumpster rental Utah, kitchen renovation dumpster, bathroom remodel dumpster, garage cleanout dumpster, Salt Lake City dumpster rental',
  alternates: { canonical: 'https://icondumpsters.com/15-yard-dumpster-rental' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: '15 Yard Dumpster Rental Utah | Small Project Dumpsters',
    description: 'Perfect 15-yard dumpster rental for small projects in Utah. Starting at $299 with same-day delivery.',
    url: 'https://icondumpsters.com/15-yard-dumpster-rental',
    images: [{ url: '/images/15-yard-dumpster-rental-utah.jpg', width: 1200, height: 630, alt: '15 Yard Dumpster Rental Utah' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
}

export default function FifteenYardDumpsterRentalPage() {
  return (
    <PageTemplate>
      <StructuredData
        type="service"
        data={{
          name: "15 Yard Dumpster Rental",
          description: "Perfect 15-yard dumpster rental for small projects throughout Utah",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Dumpster Rental",
          priceRange: "$299-$399"
        }}
      />
      <StructuredData type="product" data={FifteenYardDumpsterProduct} />
      
      <Hero />

      {/* Hero Image */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ImageWithFallback
              src="/images/optimized/icondumpsters_general_ca97086c_729c_480f_a90d_d117c1278945.webp"
              alt="15 Yard Dumpster Rental Utah - Perfect for small projects and specialized materials"
              width={1200}
              height={400}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Dumpster Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              15 Yard Dumpster Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compact yet spacious, our 15-yard dumpster is perfect for residential projects.
            </p>
          </div>

          {/* Dimensions Graphic */}
          <div className="mb-12">
            <FifteenYardDimensions />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">15</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cubic Yards</h3>
              <p className="text-gray-600">Approximately 3-4 pickup truck loads</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">14.5'</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Length</h3>
              <p className="text-gray-600">Fits in most driveways</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">7.75'</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Width</h3>
              <p className="text-gray-600">Standard width for easy access</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">4.67'</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Depth</h3>
              <p className="text-gray-600">Low sides for easy loading</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect For These Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our 15-yard dumpster is ideal for a variety of small to medium projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kitchen Renovations</h3>
              <p className="text-gray-600">Perfect for removing old cabinets, countertops, and appliances during kitchen remodels.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-trust-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bathroom Remodels</h3>
              <p className="text-gray-600">Ideal for disposing of old vanities, toilets, bathtubs, and tile during bathroom renovations.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Garage Cleanouts</h3>
              <p className="text-gray-600">Great for clearing out old furniture, boxes, and accumulated items from your garage.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-action-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Basement Cleanouts</h3>
              <p className="text-gray-600">Perfect for removing old storage items, furniture, and debris from basement spaces.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Demolition</h3>
              <p className="text-gray-600">Suitable for small demolition projects like removing walls, flooring, or small structures.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Yard Cleanup</h3>
              <p className="text-gray-600">Great for seasonal yard cleanup, removing branches, leaves, and other yard debris.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              15 Yard Dumpster Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. All prices include delivery, pickup, and disposal.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#0d9488] to-[#6b46c1] rounded-2xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">$299</div>
            <div className="text-xl mb-4">Starting Price</div>
            <div className="text-lg mb-6">Includes delivery, pickup, and disposal</div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-semibold mb-2">7 Days</div>
                <div className="text-gray-200">Rental Period</div>
              </div>
              <div>
                <div className="text-2xl font-semibold mb-2">2 Tons</div>
                <div className="text-gray-200">Weight Limit</div>
              </div>
              <div>
                <div className="text-2xl font-semibold mb-2">Same Day</div>
                <div className="text-gray-200">Delivery Available</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Additional tonnage: $50 per ton | Additional days: $10 per day
            </p>
            <a
              href="/#quote-form"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0d9488] hover:bg-[#3d2a8a] transition-colors"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Our 15 Yard Dumpster */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our 15 Yard Dumpster?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perfect size for small projects with all the benefits of our premium service. Need help choosing? Check our <a href="/guides/dumpster-sizes" className="text-[#0d9488] hover:text-teal-700 underline font-semibold">dumpster sizes guide</a> or use our <a href="/dumpster-calculator" className="text-[#0d9488] hover:text-teal-700 underline font-semibold">dumpster size calculator</a> to find the right size for your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">Get your dumpster delivered the same day you order in most areas. Learn more about our <a href="/#quote-form" className="text-[#0d9488] hover:text-teal-700 underline font-semibold">same-day delivery service</a>.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">Transparent pricing with no surprise charges or hidden costs. See our <a href="/pricing/dumpster-prices" className="text-[#0d9488] hover:text-teal-700 underline font-semibold">dumpster rental pricing</a> for complete details.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
              <p className="text-gray-600">We recycle and dispose of waste responsibly to protect the environment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Our team is here to help you choose the right size and answer any questions. Check our <a href="/dumpster-rental-faq" className="text-[#0d9488] hover:text-teal-700 underline font-semibold">dumpster rental FAQ</a> for common questions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Pickup</h3>
              <p className="text-gray-600">Fast and efficient pickup when your project is complete.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Internal Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StrategicInternalLinks pageType="dumpster-size" currentSize="15-yard" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0d9488]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Rent Your 15 Yard Dumpster?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get your free quote today and have your dumpster delivered as soon as tomorrow. Need a different size? Check out our <Link href="/20-yard-dumpster-rental" className="text-white underline font-semibold hover:text-purple-200">20-yard dumpster rental</Link> or <Link href="/30-yard-dumpster-rental" className="text-white underline font-semibold hover:text-purple-200">30-yard dumpster rental</Link> options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#quote-form"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0d9488] bg-white hover:bg-gray-50 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:(801) 918-6000"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-[#0d9488] transition-colors"
            >
              Call (801) 918-6000
            </a>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}
