export const dynamic = 'force-static';

import { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData from '@/app/components/StructuredData'

export const metadata: Metadata = {
  title: 'Demolition Waste Disposal Services Utah | Icon Dumpsters',
  description: 'Professional demolition waste disposal and debris removal services throughout Utah. Dumpster rentals for demolition projects. Call (801) 918-6000.',
  keywords: 'demolition waste disposal Utah, demolition debris removal, demolition dumpster rental, construction demolition, Salt Lake City demolition waste',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Demolition Waste Disposal Services Utah | Icon Dumpsters',
    description: 'Professional demolition waste disposal and debris removal services throughout Utah. Dumpster rentals for demolition projects. Call (801) 918-6000.',
    url: 'https://icondumpsters.com/services/demolition-waste-disposal',
    images: [
      {
        url: 'https://icondumpsters.com/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Demolition Waste Disposal Services Utah | Icon Dumpsters',
      },
    ],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/services/demolition-waste-disposal',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
  },
};

export default function DemolitionWasteDisposalPage() {
  return (
    <PageTemplate>
      <StructuredData
        type="service"
        data={{
          name: "Demolition Waste Disposal Services",
          description: "Professional demolition waste disposal and debris removal services throughout Utah",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Demolition Waste Disposal",
          priceRange: "$400-$1000"
        }}
      />
      
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete Demolition Waste Disposal Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            At Icon Dumpsters, we specialize in demolition waste disposal throughout Utah. Whether you're demolishing a single room or an entire building, we provide the dumpster rental and disposal services you need to handle all types of demolition debris safely and efficiently.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Our demolition waste disposal services are designed for contractors, demolition companies, and property owners who need reliable, cost-effective solutions for managing demolition debris. We handle everything from concrete and masonry to wood, metal, and hazardous materials.
          </p>
          
          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src="/images/dumpster4-500x500-1.webp"
              alt="Demolition waste disposal services in Utah - professional debris removal and dumpster rental"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Demolition Debris Types */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Demolition Debris We Handle</h3>
          
          {/* Demolition Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/dumpster5-500x500-1.webp"
                alt="Concrete and masonry demolition debris disposal - professional waste management"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/dumpster500x200-4.webp"
                alt="Wood and metal demolition debris removal - comprehensive disposal services"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Concrete & Masonry</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Concrete slabs and foundations</li>
                <li>• Brick and block walls</li>
                <li>• Stone and masonry materials</li>
                <li>• Concrete pipes and culverts</li>
                <li>• Asphalt and paving materials</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Wood & Lumber</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Framing lumber and beams</li>
                <li>• Flooring and subflooring</li>
                <li>• Roofing materials and trusses</li>
                <li>• Doors and window frames</li>
                <li>• Decking and outdoor structures</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Metal & Steel</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Structural steel beams</li>
                <li>• Rebar and wire mesh</li>
                <li>• Metal roofing and siding</li>
                <li>• HVAC ductwork and pipes</li>
                <li>• Electrical conduit and wiring</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Drywall & Insulation</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Drywall and plaster</li>
                <li>• Insulation materials</li>
                <li>• Ceiling tiles and panels</li>
                <li>• Wall coverings and finishes</li>
                <li>• Soundproofing materials</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Flooring & Tiles</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Ceramic and porcelain tiles</li>
                <li>• Hardwood and laminate flooring</li>
                <li>• Carpet and padding</li>
                <li>• Vinyl and linoleum</li>
                <li>• Stone and marble tiles</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Hazardous Materials</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Asbestos-containing materials</li>
                <li>• Lead-based paint</li>
                <li>• Chemical containers</li>
                <li>• Fluorescent light bulbs</li>
                <li>• Electronic waste</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dumpster Size Recommendations */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Dumpster Size Recommendations for Demolition Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">20 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">Small demolition projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Single room demolition</li>
                <li>• Small shed removal</li>
                <li>• Bathroom renovation</li>
                <li>• Kitchen demolition</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">30 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">Medium demolition projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Whole house demolition</li>
                <li>• Garage demolition</li>
                <li>• Commercial renovation</li>
                <li>• Multi-room projects</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">40 Yard Dumpster</h4>
              <p className="text-gray-600 mb-4">Large demolition projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Commercial building demolition</li>
                <li>• Industrial demolition</li>
                <li>• Large residential projects</li>
                <li>• Multi-story buildings</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Multiple Containers</h4>
              <p className="text-gray-600 mb-4">Massive demolition projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Large commercial demolition</li>
                <li>• Industrial facility demolition</li>
                <li>• Multi-building projects</li>
                <li>• Long-term demolition</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Safety & Compliance */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Safety & Environmental Compliance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Hazardous Material Handling</h4>
                  <p className="text-gray-600">Proper identification and disposal of hazardous materials</p>
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
                  <p className="text-gray-600">Meet all local and federal environmental regulations</p>
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
                  <p className="text-gray-600">Maximize recycling and material recovery rates</p>
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
                  <h4 className="text-lg font-semibold text-gray-900">Permit Assistance</h4>
                  <p className="text-gray-600">Help with demolition permits and documentation</p>
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
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Licensed Disposal</h4>
                  <p className="text-gray-600">All materials disposed at licensed facilities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTemplate>
  )
}
