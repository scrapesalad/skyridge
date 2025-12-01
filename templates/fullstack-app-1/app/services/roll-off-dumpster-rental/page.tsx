export const dynamic = 'force-static';

import { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData from '@/app/components/StructuredData'
import FAQSchema, { dumpsterRentalFAQs } from '@/app/components/FAQSchema'

export const metadata: Metadata = {
  title: 'Roll-Off Dumpster Rental Services Utah | Icon Dumpsters',
  description: 'Professional roll-off dumpster rental services throughout Utah. Reliable waste management for construction, demolition, and large projects. Call (801) 918-6000.',
  keywords: 'roll-off dumpster rental Utah, roll-off container rental, construction dumpster rental, demolition dumpster rental, Salt Lake City roll-off dumpster',
  alternates: {
    canonical: 'https://icondumpsters.com/services/roll-off-dumpster-rental',
  },
  openGraph: {
    title: 'Roll-Off Dumpster Rental Services Utah | Icon Dumpsters',
    description: 'Professional roll-off dumpster rental services throughout Utah. Reliable waste management for construction, demolition, and large projects. Call (801) 918-6000.',
    url: 'https://icondumpsters.com/services/roll-off-dumpster-rental',
    siteName: 'Icon Dumpsters',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://icondumpsters.com/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Roll-Off Dumpster Rental Services Utah - Icon Dumpsters',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
  },
};

export default function RollOffDumpsterRentalPage() {
  return (
    <PageTemplate>
      <StructuredData
        type="service"
        data={{
          name: "Roll-Off Dumpster Rental Services",
          description: "Professional roll-off dumpster rental services for construction, demolition, and large projects throughout Utah",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Roll-Off Dumpster Rental",
          priceRange: "$300-$800"
        }}
      />
      
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Roll-Off Dumpster Rentals for Every Project
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            At Icon Dumpsters, we provide comprehensive roll-off dumpster rental services throughout Utah. Whether you're managing a construction project, demolition, or any large-scale project, our roll-off containers are the perfect solution for efficient waste management.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our roll-off dumpster rental services are designed for contractors, construction companies, and property owners who need reliable, heavy-duty containers for large projects. We offer flexible rental terms and professional service that keeps your project moving forward.
          </p>
        </div>

        {/* Roll-Off Dumpster Sizes */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Roll-Off Dumpster Sizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">15 Yard Roll-Off</h4>
              <p className="text-gray-600 mb-4">Small to medium projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Small construction projects</li>
                <li>• Home renovations</li>
                <li>• Demolition projects</li>
                <li>• Landscaping projects</li>
                <li>• Cleanup projects</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">20 Yard Roll-Off</h4>
              <p className="text-gray-600 mb-4">Medium to large projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Whole house renovation</li>
                <li>• Commercial renovation</li>
                <li>• Roof replacement</li>
                <li>• Large demolition</li>
                <li>• Construction projects</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">30 Yard Roll-Off</h4>
              <p className="text-gray-600 mb-4">Large construction projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• New construction</li>
                <li>• Major demolition</li>
                <li>• Commercial builds</li>
                <li>• Industrial projects</li>
                <li>• Large-scale renovation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">40 Yard Roll-Off</h4>
              <p className="text-gray-600 mb-4">Massive projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Large commercial construction</li>
                <li>• Industrial demolition</li>
                <li>• Infrastructure projects</li>
                <li>• Multi-story buildings</li>
                <li>• Complex construction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Schema for roll-off dumpster rental */}
        <FAQSchema faqs={dumpsterRentalFAQs} pageUrl="https://icondumpsters.com/services/roll-off-dumpster-rental" />

        {/* Roll-Off Features */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Roll-Off Dumpster Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Heavy-duty construction</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Easy loading access</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Secure closure system</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Weather-resistant design</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Easy pickup and delivery</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">High weight capacity</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Durable construction</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Flexible rental periods</span>
              </div>
            </div>
          </div>
        </section>

        {/* Roll-Off Benefits */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Icon Dumpsters for Roll-Off Rentals?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Professional Service</h4>
                  <p className="text-gray-600">Experienced team that understands roll-off container needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Flexible Scheduling</h4>
                  <p className="text-gray-600">Delivery and pickup schedules that work with your project timeline</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Competitive Pricing</h4>
                  <p className="text-gray-600">Affordable roll-off dumpster rental rates with no hidden fees</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Reliable Equipment</h4>
                  <p className="text-gray-600">Well-maintained roll-off containers that perform consistently</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Quick Response</h4>
                  <p className="text-gray-600">Fast delivery and pickup service to keep your project on schedule</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Expert Guidance</h4>
                  <p className="text-gray-600">Help choosing the right roll-off size for your specific project</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Dumpster Rental Pages - Internal Linking for SEO */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Dumpster Rental Services Throughout Utah
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              We provide roll-off dumpster rental services in cities throughout Utah. Find dumpster rental options in your area or explore our specialized services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Top Ranking City Pages */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dumpster Rental by City</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="/dumpster-rental-murray-ut" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental in Murray, UT
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Professional roll-off dumpster rental services in Murray</p>
                  </li>
                  <li>
                    <a 
                      href="/dumpster-rental-millcreek-ut" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental in Millcreek, UT
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Reliable dumpster rental for Millcreek projects</p>
                  </li>
                  <li>
                    <a 
                      href="/dumpster-rental-south-jordan-ut" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental in South Jordan, UT
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Same-day dumpster delivery in South Jordan</p>
                  </li>
                  <li>
                    <a 
                      href="/dumpster-rental-salt-lake-city-ut" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental in Salt Lake City, UT
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Utah's premier dumpster rental service</p>
                  </li>
                </ul>
              </div>

              {/* Related Service Pages */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Dumpster Rental Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="/services/residential-dumpster-rental" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Residential Dumpster Rental Services
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Perfect for home renovation and cleanup projects</p>
                  </li>
                  <li>
                    <a 
                      href="/services/construction-dumpster-rental" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Construction Dumpster Rental
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Heavy-duty containers for construction projects</p>
                  </li>
                  <li>
                    <a 
                      href="/services" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      All Dumpster Rental Services
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Complete list of our dumpster rental options</p>
                  </li>
                  <li>
                    <a 
                      href="/pricing/dumpster-prices" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental Pricing
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Transparent pricing for all dumpster sizes</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTemplate>
  )
}
