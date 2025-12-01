export const dynamic = 'force-static';

import { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData from '@/app/components/StructuredData'

export const metadata: Metadata = {
  title: 'Professional Junk Removal Services Utah | Icon Dumpsters',
  description: 'Fast, reliable junk removal services throughout Utah. Same-day pickup, eco-friendly disposal, and transparent pricing. Call (801) 918-6000 for free quote.',
  keywords: 'junk removal Utah, furniture disposal, appliance removal, same-day junk pickup, eco-friendly disposal, Salt Lake City junk removal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Professional Junk Removal Services Utah | Icon Dumpsters',
    description: 'Fast, reliable junk removal services throughout Utah. Same-day pickup, eco-friendly disposal, and transparent pricing. Call (801) 918-6000 for free quote.',
    url: 'https://icondumpsters.com/services/junk-removal',
    images: [
      {
        url: 'https://icondumpsters.com/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Junk Removal Services Utah | Icon Dumpsters',
      },
    ],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/services/junk-removal',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
  },
};

export default function JunkRemovalPage() {
  return (
    <PageTemplate>
      <StructuredData
        type="service"
        data={{
          name: "Junk Removal Services",
          description: "Professional junk removal services for residential and commercial properties throughout Utah",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Junk Removal",
          priceRange: "$150-$500"
        }}
      />
      
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete Junk Removal Solutions for Utah Homes & Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            At Icon Dumpsters, we provide comprehensive junk removal services throughout Utah. Whether you're clearing out a home, office, or construction site, our experienced team handles everything from pickup to disposal with professionalism and care.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            We're committed to eco-friendly disposal practices, recycling materials whenever possible and ensuring proper waste management. With same-day service available and transparent pricing, we make junk removal simple and stress-free.
          </p>
          
          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src="/images/dumpsterSmallBanner2.webp"
              alt="Professional junk removal services in Utah - same-day pickup and eco-friendly disposal"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* What We Remove */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We Remove</h3>
          
          {/* Junk Removal Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/dumpsterSmallBanner3.webp"
                alt="Furniture and appliance removal - professional junk removal services"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/dumpsterSmallBanner4.webp"
                alt="Construction debris and yard waste removal - comprehensive junk removal"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/dumpsterSmallBanner5.webp"
                alt="Electronics and e-waste disposal - eco-friendly junk removal"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Furniture & Appliances</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Couches, chairs, tables</li>
                <li>• Refrigerators, washers, dryers</li>
                <li>• Mattresses and box springs</li>
                <li>• Entertainment centers</li>
                <li>• Office furniture</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Construction Debris</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Drywall and lumber</li>
                <li>• Concrete and masonry</li>
                <li>• Roofing materials</li>
                <li>• Flooring and tiles</li>
                <li>• Insulation materials</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Yard & Outdoor Items</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Tree branches and yard waste</li>
                <li>• Outdoor furniture</li>
                <li>• Barbecue grills</li>
                <li>• Playground equipment</li>
                <li>• Fencing materials</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Electronics & E-Waste</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Computers and monitors</li>
                <li>• Televisions</li>
                <li>• Printers and scanners</li>
                <li>• Cell phones and tablets</li>
                <li>• Audio equipment</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">General Household Items</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Clothing and textiles</li>
                <li>• Books and magazines</li>
                <li>• Kitchen items</li>
                <li>• Toys and games</li>
                <li>• Holiday decorations</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Commercial Items</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Office equipment</li>
                <li>• Retail fixtures</li>
                <li>• Restaurant equipment</li>
                <li>• Industrial materials</li>
                <li>• Warehouse items</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Junk Removal Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Call or Quote Online</h4>
              <p className="text-gray-600">Contact us for a free estimate or get an instant quote online</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Schedule Pickup</h4>
              <p className="text-gray-600">Choose a convenient time for pickup, same-day available</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">We Load & Haul</h4>
              <p className="text-gray-600">Our team loads everything and hauls it away safely</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly Disposal</h4>
              <p className="text-gray-600">We sort and recycle materials, disposing responsibly</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Icon Dumpsters for Junk Removal?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Same-Day Service</h4>
                  <p className="text-gray-600">We offer same-day junk removal for urgent needs</p>
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
                  <h4 className="text-lg font-semibold text-gray-900">Transparent Pricing</h4>
                  <p className="text-gray-600">No hidden fees - you know the cost upfront</p>
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
                  <h4 className="text-lg font-semibold text-gray-900">Licensed & Insured</h4>
                  <p className="text-gray-600">Fully licensed and insured for your protection</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Professional Team</h4>
                  <p className="text-gray-600">Experienced, courteous, and efficient crew members</p>
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
                  <p className="text-gray-600">We work around your schedule, including weekends</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTemplate>
  )
}
