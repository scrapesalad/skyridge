export const dynamic = 'force-static';

import { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData from '@/app/components/StructuredData'

export const metadata: Metadata = {
  title: 'Construction Waste Management Services Utah | Icon Dumpsters',
  description: 'Professional construction waste management and disposal services throughout Utah. Dumpster rentals, debris removal, and recycling for construction projects.',
  keywords: 'construction waste management Utah, construction debris disposal, construction dumpster rental, building waste removal, construction site cleanup',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Construction Waste Management Services Utah | Icon Dumpsters',
      alternates: {
    canonical: 'https://icondumpsters.com/services/construction-waste-management',
    images: [
      {
        url: 'https://icondumpsters.com/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Construction Waste Management Services Utah | Icon Dumpsters',
      },
    ]
  },
  description: 'Professional construction waste management and disposal services throughout Utah. Dumpster rentals, debris removal, and recycling for construction projects.',
    type: 'website',
    url: 'https://icondumpsters.com/services/construction-waste-management',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
  },
};

export default function ConstructionWasteManagementPage() {
  return (
    <PageTemplate>
      <StructuredData
        type="service"
        data={{
          name: "Construction Waste Management Services",
          description: "Comprehensive construction waste management and disposal services for contractors and construction companies throughout Utah",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Construction Waste Management",
          priceRange: "$300-$800"
        }}
      />
      
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete Construction Waste Management Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            At Icon Dumpsters, we specialize in construction waste management for projects of all sizes throughout Utah. From small renovations to large commercial builds, we provide efficient, cost-effective waste disposal solutions that keep your project moving forward.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Our comprehensive approach includes dumpster rentals, debris removal, material recycling, and ongoing waste management consulting. We work closely with contractors, project managers, and construction companies to ensure compliance with local regulations and environmental standards.
          </p>
          
          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src="/images/Construction-Rental-480x480.webp"
              alt="Construction waste management services in Utah - professional debris removal and recycling"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Services We Provide */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Construction Waste Management Services</h3>
          
          {/* Services Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/concrete.webp"
                alt="Concrete and masonry debris disposal - professional construction waste management"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp"
                alt="Professional construction waste pickup and disposal services"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Dumpster Rentals</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 15, 20, 30, and 40-yard containers</li>
                <li>• Flexible rental periods</li>
                <li>• Same-day delivery available</li>
                <li>• Construction-specific containers</li>
                <li>• Multiple container management</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Debris Removal</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Construction debris pickup</li>
                <li>• Demolition waste removal</li>
                <li>• Material sorting and separation</li>
                <li>• Hazardous material handling</li>
                <li>• Emergency cleanup services</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Material Recycling</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Concrete and masonry recycling</li>
                <li>• Metal and steel recycling</li>
                <li>• Wood and lumber recycling</li>
                <li>• Drywall and gypsum recycling</li>
                <li>• Asphalt and roofing recycling</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Project Management</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Waste management planning</li>
                <li>• Permit assistance</li>
                <li>• Compliance monitoring</li>
                <li>• Regular pickup schedules</li>
                <li>• Progress reporting</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Site Cleanup</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Post-construction cleanup</li>
                <li>• Final site clearing</li>
                <li>• Material sorting and disposal</li>
                <li>• Environmental compliance</li>
                <li>• Documentation and reporting</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Consulting Services</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Waste reduction strategies</li>
                <li>• Cost optimization</li>
                <li>• Environmental compliance</li>
                <li>• LEED certification support</li>
                <li>• Sustainability planning</li>
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
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Flooring and tiles</span>
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
                <span className="text-gray-700">Electrical and plumbing materials</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Windows and doors</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">HVAC equipment and ductwork</span>
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

        {/* Benefits */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Benefits of Professional Construction Waste Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Cost Savings</h4>
                  <p className="text-gray-600">Reduce disposal costs through efficient waste management and recycling</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Environmental Compliance</h4>
                  <p className="text-gray-600">Meet local regulations and environmental standards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Project Efficiency</h4>
                  <p className="text-gray-600">Keep your construction site clean and organized</p>
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
                  <h4 className="text-lg font-semibold text-gray-900">Material Recovery</h4>
                  <p className="text-gray-600">Maximize recycling and material recovery rates</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Safety & Security</h4>
                  <p className="text-gray-600">Maintain a safe work environment for your crew</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Documentation</h4>
                  <p className="text-gray-600">Complete waste tracking and disposal documentation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTemplate>
  )
}
