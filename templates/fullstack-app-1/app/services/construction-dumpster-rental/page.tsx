export const dynamic = 'force-static';

import { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData from '@/app/components/StructuredData'
import FAQSchema, { constructionWasteFAQs } from '@/app/components/FAQSchema'
import BlogLinks from '@/app/components/BlogLinks'

export const metadata: Metadata = {
  title: 'Construction Dumpster Rental Services Utah | Icon Dumpsters',
  description: "Professional construction dumpster rental services throughout Utah. Reliable waste management for construction projects, contractors, and builders. Call",
  keywords: 'construction dumpster rental Utah, contractor dumpster rental, construction waste disposal, building dumpster rental, Salt Lake City construction dumpster',
  openGraph: {
    title: "Construction Dumpster Rental Services Utah | Icon Dumpsters",
    description: "Professional construction dumpster rental services throughout Utah. Reliable waste management for construction projects, contractors, and builders. Call",
    type: 'website',
    url: 'https://icondumpsters.com/services/construction-dumpster-rental',
    siteName: 'Icon Dumpsters',
    locale: 'en_US',
    images: [
      {
        url: 'https://icondumpsters.com/IconDumpsters_Logo_Vector_Pantone267DarkerPurple.png',
        width: 1200,
        height: 630,
        alt: 'Icon Dumpsters - Professional Dumpster Rental Services in Utah',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/services/construction-dumpster-rental',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
  },
};

export default function ConstructionDumpsterRentalPage() {
  return (
    <PageTemplate>
      <StructuredData
        type="service"
        data={{
          name: "Construction Dumpster Rental Services",
          description: "Professional construction dumpster rental services for contractors and construction projects throughout Utah",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Construction Dumpster Rental",
          priceRange: "$400-$1000"
        }}
      />
      
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dumpster Rental Salt Lake City - Construction Services
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Construction Dumpster Rentals for Every Project
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            At Icon Dumpsters, we provide comprehensive construction dumpster rental services throughout Utah. Whether you're building a new home, renovating a commercial space, or managing a large construction project, we have the waste management solutions you need.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Our construction dumpster rental services are designed for contractors, builders, and construction companies. We offer flexible rental terms, reliable pickup schedules, and professional service that keeps your construction site clean and organized.
          </p>
          
          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src="/images/result.png"
              alt="Construction dumpster rental services in Utah - professional waste management for construction projects"
              fill
              className="object-cover scale-105 object-[center_40%]"
              priority
            />
          </div>
        </div>

        {/* Construction Dumpster Sizes */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Construction Dumpster Sizes</h3>
          
          {/* Dumpster Sizes Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/Gemini_Generated_Image_tu00pitu00pitu00.png"
                alt="20 yard construction dumpster rental - perfect for medium construction projects"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp"
                alt="Professional dumpster delivery and pickup service for construction sites"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">20 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">Small construction projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Small home additions</li>
                <li>• Kitchen renovations</li>
                <li>• Bathroom remodels</li>
                <li>• Deck construction</li>
                <li>• Small demolition</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">30 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">Medium construction projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Whole house renovation</li>
                <li>• New home construction</li>
                <li>• Commercial renovation</li>
                <li>• Roof replacement</li>
                <li>• Large demolition</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">40 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">Large construction projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Large commercial builds</li>
                <li>• Industrial construction</li>
                <li>• Multi-story projects</li>
                <li>• Major demolition</li>
                <li>• Infrastructure projects</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Multiple Containers</h4>
              <p className="text-gray-600 mb-4">Massive construction projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Large commercial complexes</li>
                <li>• Industrial facilities</li>
                <li>• Long-term projects</li>
                <li>• Multiple phases</li>
                <li>• Complex construction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Construction Debris Types */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Construction Debris We Handle</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Concrete and masonry debris</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Wood and lumber waste</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Drywall and insulation</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Roofing materials</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Metal and steel</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Flooring and tiles</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Electrical and plumbing materials</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Packaging and construction supplies</span>
              </div>
            </div>
          </div>
        </section>

        {/* Construction Benefits */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Icon Dumpsters for Construction Projects?</h3>
          
          {/* Benefits Image */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl mb-12">
            <ImageWithFallback
              src="/images/dumpsters2.webp"
              alt="Professional construction dumpster rental service - reliable waste management for contractors"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Construction-Focused Service</h4>
                  <p className="text-gray-600">We understand construction timelines and work around your schedule</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Flexible Rental Terms</h4>
                  <p className="text-gray-600">Short-term and long-term rental options for any project duration</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Contractor Discounts</h4>
                  <p className="text-gray-600">Special pricing for contractors and construction companies</p>
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
                  <h4 className="text-lg font-semibold text-gray-900">Reliable Pickup</h4>
                  <p className="text-gray-600">Consistent pickup schedules to keep your site clean</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Material Recycling</h4>
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
                  <h4 className="text-lg font-semibold text-gray-900">Project Management</h4>
                  <p className="text-gray-600">Dedicated support for large construction projects</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Schema for construction waste */}
        <FAQSchema faqs={constructionWasteFAQs} pageUrl="https://icondumpsters.com/services/construction-dumpster-rental" />

        {/* Blog Links Section */}
        <BlogLinks serviceType="construction" limit={6} />

      </div>
    </PageTemplate>
  )
}
