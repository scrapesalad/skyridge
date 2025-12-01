export const dynamic = 'force-static';

import { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData, { TwentyYardDumpsterProduct } from '@/app/components/StructuredData'
import TwentyYardDimensions from '@/app/components/TwentyYardDimensions'
import StrategicInternalLinks from '@/app/components/StrategicInternalLinks'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '20 Yard Dumpster Rental Utah | Most Popular Size | Icon Dumpsters',
  description: 'Our most popular 20-yard dumpster rental in Utah. Perfect for home renovations, construction projects, and large cleanouts. Starting at $349. Same-day delivery available.',
  keywords: '20 yard dumpster rental, most popular dumpster size Utah, home renovation dumpster, construction dumpster rental, large cleanout dumpster, Salt Lake City dumpster rental',
  alternates: { canonical: 'https://icondumpsters.com/20-yard-dumpster-rental' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: '20 Yard Dumpster Rental Utah | Most Popular Size',
    description: 'Our most popular 20-yard dumpster rental in Utah. Perfect for home renovations and construction projects. Starting at $349.',
    url: 'https://icondumpsters.com/20-yard-dumpster-rental',
    images: [{ url: '/images/20-yard-dumpster-rental-utah.jpg', width: 1200, height: 630, alt: '20 Yard Dumpster Rental Utah' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
}

export default function TwentyYardDumpsterRentalPage() {
  return (
    <PageTemplate>
      <StructuredData
        type="service"
        data={{
          name: "20 Yard Dumpster Rental",
          description: "Our most popular 20-yard dumpster rental for medium to large projects throughout Utah",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Dumpster Rental",
          priceRange: "$349-$449"
        }}
      />
      <StructuredData type="product" data={TwentyYardDumpsterProduct} />
      
      <Hero />

      {/* Dumpster Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              20 Yard Dumpster Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular size offers excellent capacity while fitting in most driveways.
            </p>
          </div>

          {/* Dimensions Graphic */}
          <div className="mb-12">
            <TwentyYardDimensions />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">20</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cubic Yards</h3>
              <p className="text-gray-600">Approximately 4-5 pickup truck loads</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">17.08'</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Length</h3>
              <p className="text-gray-600">Standard length for most projects</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">7.54'</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Width</h3>
              <p className="text-gray-600">Wide enough for easy loading</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">5.00'</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Depth</h3>
              <p className="text-gray-600">Standard depth for easy access</p>
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
              Our 20-yard dumpster is versatile enough for a wide range of projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Whole House Renovations</h3>
              <p className="text-gray-600">Perfect for complete home renovations including multiple rooms and flooring.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-trust-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Construction Projects</h3>
              <p className="text-gray-600">Ideal for small to medium construction projects and building materials disposal.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Estate Cleanouts</h3>
              <p className="text-gray-600">Perfect for clearing out entire homes during estate sales or moving.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-action-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Demolition Work</h3>
              <p className="text-gray-600">Great for small demolition projects like removing walls, decks, or sheds.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Roofing Projects</h3>
              <p className="text-gray-600">Perfect for disposing of old roofing materials and debris.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Cleanouts</h3>
              <p className="text-gray-600">Ideal for office cleanouts, retail space renovations, and commercial projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              20 Yard Dumpster Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular size with competitive pricing and no hidden fees.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#0d9488] to-[#6b46c1] rounded-2xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">$349</div>
            <div className="text-xl mb-4">Starting Price</div>
            <div className="text-lg mb-6">Includes delivery, pickup, and disposal</div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-semibold mb-2">7 Days</div>
                <div className="text-gray-200">Rental Period</div>
              </div>
              <div>
                <div className="text-2xl font-semibold mb-2">3 Tons</div>
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

      {/* Why Choose Our 20 Yard Dumpster */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our 20 Yard Dumpster?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular size for good reason - perfect balance of capacity and convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Most Popular Size</h3>
              <p className="text-gray-600">Our customers' favorite choice for its versatility and capacity.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">Get your dumpster delivered the same day you order in most areas.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Setup</h3>
              <p className="text-gray-600">Fast and efficient delivery and setup for your project.</p>
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
              <p className="text-gray-600">Our team is here to help you choose the right size and answer any questions.</p>
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
          <StrategicInternalLinks pageType="dumpster-size" currentSize="20-yard" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0d9488]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Rent Your 20 Yard Dumpster?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who chose our most popular dumpster size.
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
