export const dynamic = 'force-static';

import { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData from '@/app/components/StructuredData'

export const metadata: Metadata = {
  title: 'Garage Cleanout Services Utah | Icon Dumpsters',
  description: 'Professional garage cleanout services throughout Utah. Dumpster rentals for garage organization and cleanup. Call (801) 918-6000 for free quote.',
  keywords: 'garage cleanout Utah, garage organization, garage cleanup, garage dumpster rental, Salt Lake City garage cleanout',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Garage Cleanout Services Utah | Icon Dumpsters',
    description: 'Professional garage cleanout services throughout Utah. Dumpster rentals for garage organization and cleanup. Call (801) 918-6000 for free quote.',
    url: 'https://icondumpsters.com/services/garage-cleanout',
    images: [
      {
        url: 'https://icondumpsters.com/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Garage Cleanout Services Utah | Icon Dumpsters',
      },
    ],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/services/garage-cleanout',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
  },
};

export default function GarageCleanoutPage() {
  return (
    <PageTemplate>
      <StructuredData
        type="service"
        data={{
          name: "Garage Cleanout Services",
          description: "Professional garage cleanout and organization services with dumpster rentals throughout Utah",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Garage Cleanout",
          priceRange: "$200-$400"
        }}
      />
      
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete Garage Cleanout Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            At Icon Dumpsters, we specialize in garage cleanout services throughout Utah. Whether you're preparing for a move, organizing your space, or clearing out years of accumulated items, we provide the dumpster rental and disposal services you need.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Our garage cleanout services help you reclaim your space efficiently and affordably. We handle everything from old furniture and appliances to tools, sports equipment, and general clutter that has accumulated over the years.
          </p>
          
          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src="/images/dumpsterSmallBanner6.webp"
              alt="Garage cleanout services in Utah - dumpster rental for garage organization and cleanup"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* What We Remove from Garages */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We Remove from Garages</h3>
          
          {/* Garage Cleanout Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/dumpster3-500x500-1.webp"
                alt="Garage cleanout dumpster rental - perfect for organizing and clearing out garage space"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/dumpster3-500x500-2.webp"
                alt="Professional garage cleanout services - furniture, appliances, and clutter removal"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Old Furniture</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Broken chairs and tables</li>
                <li>• Old couches and recliners</li>
                <li>• Damaged dressers</li>
                <li>• Worn-out mattresses</li>
                <li>• Outdated entertainment centers</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Appliances & Electronics</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Old refrigerators and freezers</li>
                <li>• Broken washers and dryers</li>
                <li>• Outdated computers and TVs</li>
                <li>• Non-working power tools</li>
                <li>• Old stereo equipment</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Sports & Recreation</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Broken bicycles and parts</li>
                <li>• Old exercise equipment</li>
                <li>• Damaged sports gear</li>
                <li>• Outdated camping equipment</li>
                <li>• Broken toys and games</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Automotive Items</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Old car parts and tires</li>
                <li>• Used motor oil and fluids</li>
                <li>• Broken tools and equipment</li>
                <li>• Old batteries</li>
                <li>• Damaged car covers</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">General Clutter</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Cardboard boxes and packing materials</li>
                <li>• Old newspapers and magazines</li>
                <li>• Broken household items</li>
                <li>• Outdated decorations</li>
                <li>• Miscellaneous junk and debris</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Construction Materials</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Leftover lumber and wood</li>
                <li>• Old drywall and insulation</li>
                <li>• Broken tiles and flooring</li>
                <li>• Used paint and chemicals</li>
                <li>• Scrap metal and hardware</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Garage Cleanout Process */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Garage Cleanout Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Assessment & Quote</h4>
              <p className="text-gray-600">We assess your garage and provide a free quote for dumpster rental</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Dumpster Delivery</h4>
              <p className="text-gray-600">We deliver the right size dumpster to your driveway or street</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">You Load & Sort</h4>
              <p className="text-gray-600">You load items at your own pace, keeping what you want</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Pickup & Disposal</h4>
              <p className="text-gray-600">We pick up the dumpster and dispose of items responsibly</p>
            </div>
          </div>
        </section>

        {/* Dumpster Size Recommendations */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Dumpster Size Recommendations for Garage Cleanouts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">15 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">Small to medium garage</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 1-2 car garage</li>
                <li>• Light clutter and organization</li>
                <li>• Few large items</li>
                <li>• 2-3 days rental</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">20 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">Medium to large garage</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 2-3 car garage</li>
                <li>• Heavy clutter and furniture</li>
                <li>• Multiple large items</li>
                <li>• 3-5 days rental</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">30 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">Large garage or workshop</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 3+ car garage</li>
                <li>• Workshop or storage area</li>
                <li>• Major cleanout project</li>
                <li>• 5-7 days rental</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Benefits of Professional Garage Cleanout</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Reclaim Your Space</h4>
                  <p className="text-gray-600">Transform your cluttered garage into usable space</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Easy Disposal</h4>
                  <p className="text-gray-600">Convenient dumpster rental for easy item disposal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Flexible Timeline</h4>
                  <p className="text-gray-600">Work at your own pace with flexible rental periods</p>
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
                  <h4 className="text-lg font-semibold text-gray-900">Eco-Friendly Disposal</h4>
                  <p className="text-gray-600">We recycle materials whenever possible</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Cost Effective</h4>
                  <p className="text-gray-600">Affordable dumpster rental with transparent pricing</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Stress-Free Process</h4>
                  <p className="text-gray-600">Simple, straightforward garage cleanout process</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTemplate>
  )
}
