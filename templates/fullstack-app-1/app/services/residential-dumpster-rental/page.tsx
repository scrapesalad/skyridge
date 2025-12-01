export const dynamic = 'force-static';

import { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData from '@/app/components/StructuredData'
import FAQSchema, { residentialWasteFAQs } from '@/app/components/FAQSchema'
import BlogLinks from '@/app/components/BlogLinks'

export const metadata: Metadata = {
  title: 'Residential Dumpster Rental Services Utah | Icon Dumpsters',
  description: "Professional residential dumpster rental services throughout Utah. Fast delivery, competitive pricing, and reliable service for home projects. Call (801) 918-6000.",
  keywords: 'residential dumpster rental Utah, home dumpster rental, residential waste disposal, home renovation dumpster, Salt Lake City residential dumpster',
  alternates: {
    canonical: 'https://icondumpsters.com/services/residential-dumpster-rental',
  },
  openGraph: {
    title: 'Residential Dumpster Rental Services Utah | Icon Dumpsters',
    description: 'Professional residential dumpster rental services throughout Utah. Fast delivery, competitive pricing, and reliable service for home projects. Call (801) 918-6000.',
    url: 'https://icondumpsters.com/services/residential-dumpster-rental',
    siteName: 'Icon Dumpsters',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://icondumpsters.com/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Residential Dumpster Rental Services Utah - Icon Dumpsters',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
  },
};

export default function ResidentialDumpsterRentalPage() {
  return (
    <PageTemplate>
      <StructuredData
        type="service"
        data={{
          name: "Residential Dumpster Rental Services",
          description: "Professional residential dumpster rental services for home projects throughout Utah",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Residential Dumpster Rental",
          priceRange: "$200-$600"
        }}
      />
      
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dumpster Rental Salt Lake City - Residential Services
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Residential Dumpster Rentals for Every Home Project
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            At Icon Dumpsters, we specialize in residential dumpster rentals throughout Utah. Whether you're renovating your kitchen, cleaning out your garage, or tackling a major home improvement project, we have the perfect dumpster size for your needs.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Our residential dumpster rental services are designed with homeowners in mind. We offer flexible rental periods, competitive pricing, and convenient delivery and pickup services to make your project as smooth as possible.
          </p>
          
          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src="/images/dumpsterSmallBanner.webp"
              alt="Residential dumpster rental services in Utah - perfect for home renovation and cleanup projects"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Dumpster Sizes for Residential Projects */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Residential Dumpster Sizes</h3>
          
          {/* Dumpster Sizes Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/dumpster500x200-1.webp"
                alt="15 yard residential dumpster - perfect for small home projects"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/dumpster500x200-2.webp"
                alt="20 yard residential dumpster - ideal for medium home renovation projects"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/dumpster500x200-3.webp"
                alt="30 yard residential dumpster - best for large home construction and renovation"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">15 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">Perfect for small home projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Kitchen or bathroom remodel</li>
                <li>• Basement cleanout</li>
                <li>• Garage organization</li>
                <li>• Small deck removal</li>
                <li>• Yard waste collection</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">20 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">Ideal for medium home projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Whole house renovation</li>
                <li>• Roof replacement</li>
                <li>• Large deck removal</li>
                <li>• Room addition</li>
                <li>• Estate cleanout</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">30 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">Best for large home projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• New construction</li>
                <li>• Major demolition</li>
                <li>• Whole house cleanout</li>
                <li>• Large-scale renovation</li>
                <li>• Property preparation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">40 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">For massive home projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Large new construction</li>
                <li>• Major demolition</li>
                <li>• Commercial renovation</li>
                <li>• Multi-room projects</li>
                <li>• Property development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Residential Projects */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Residential Projects We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Home renovations and remodeling</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Garage and basement cleanouts</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Yard waste and landscaping</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Roofing and siding projects</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Moving and relocation cleanouts</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Estate cleanouts and downsizing</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Deck and patio construction</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Pool and hot tub installation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Residential */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Icon Dumpsters for Residential Projects?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Homeowner-Friendly Service</h4>
                  <p className="text-gray-600">We understand residential projects and work around your schedule</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Flexible Rental Periods</h4>
                  <p className="text-gray-600">Rent for as long as you need - from a few days to several weeks</p>
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
                  <p className="text-gray-600">Affordable rates with no hidden fees for residential customers</p>
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
                  <h4 className="text-lg font-semibold text-gray-900">Convenient Delivery</h4>
                  <p className="text-gray-600">We deliver directly to your driveway or street</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Eco-Friendly Disposal</h4>
                  <p className="text-gray-600">We recycle materials whenever possible to reduce landfill waste</p>
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
                  <p className="text-gray-600">Help choosing the right dumpster size for your project</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Schema for residential dumpster rental */}
        <FAQSchema faqs={residentialWasteFAQs} pageUrl="https://icondumpsters.com/services/residential-dumpster-rental" />

        {/* Related Dumpster Rental Pages - Internal Linking for SEO */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Residential Dumpster Rental Throughout Utah
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              We provide residential dumpster rental services in cities throughout Utah. Find dumpster rental options in your area or explore our other specialized services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Top Ranking City Pages */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Residential Dumpster Rental by City</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="/dumpster-rental-murray-ut" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental in Murray, UT
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Residential-friendly dumpster rental services in Murray</p>
                  </li>
                  <li>
                    <a 
                      href="/dumpster-rental-millcreek-ut" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental in Millcreek, UT
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Home project dumpster rentals in Millcreek</p>
                  </li>
                  <li>
                    <a 
                      href="/dumpster-rental-south-jordan-ut" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental in South Jordan, UT
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Residential dumpster rental for South Jordan homeowners</p>
                  </li>
                  <li>
                    <a 
                      href="/dumpster-rental-salt-lake-city-ut" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental in Salt Lake City, UT
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Home renovation dumpster rental in Salt Lake City</p>
                  </li>
                </ul>
              </div>

              {/* Related Service Pages */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Dumpster Rental Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="/services/roll-off-dumpster-rental" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Roll-Off Dumpster Rental Services
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Professional roll-off containers for large projects</p>
                  </li>
                  <li>
                    <a 
                      href="/services/construction-dumpster-rental" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Construction Dumpster Rental
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Heavy-duty dumpsters for construction projects</p>
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
                    <p className="text-sm text-gray-600 mt-1">Transparent pricing for residential dumpster rentals</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Links Section */}
        <BlogLinks serviceType="residential" limit={6} />

      </div>
    </PageTemplate>
  )
}
