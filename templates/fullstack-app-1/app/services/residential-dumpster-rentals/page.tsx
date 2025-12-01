import type { Metadata } from "next";
import Hero from '../../components/hero';
import PageTemplate from "../../components/PageTemplate";

export const metadata: Metadata = {
  title: 'Residential Dumpster Rentals in Utah | Icon Dumpsters',
  description: "Residential-friendly dumpster rentals for home projects, renovations, and cleanouts. Professional delivery and pickup throughout Utah. Call (801) 918-6000",
    openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Residential Dumpster Rentals in Utah | Icon Dumpsters",
    description: "Residential-friendly dumpster rentals for home projects, renovations, and cleanouts. Professional delivery and pickup throughout Utah. Call (801) 918-6000",
    url: 'https://icondumpsters.com/services/residential-dumpster-rentals',
    images: [
      {
        url: '/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp',
        width: 1200,
        height: 630,
        alt: 'Icon Dumpsters Utah',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Residential Dumpster Rentals in Utah | Icon Dumpsters",
    description: "Residential-friendly dumpster rentals for home projects, renovations, and cleanouts. Professional delivery and pickup throughout Utah. Call (801) 918-6000",
    images: ['/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp'],
  },
  alternates: { canonical: 'https://icondumpsters.com/services/residential-dumpster-rentals' },
  robots: { index: true, follow: true }
};

export default function ResidentialDumpsterRentals() {
  return (
    <PageTemplate>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Residential-Friendly Dumpster Rentals
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Icon Dumpsters specializes in residential-friendly dumpster rentals, offering a seamless and efficient solution for waste management. Our service includes easy-to-navigate dumpster sizes, professional dumpster delivery and pickup by our courteous team.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Tailored for both homeowners and contractors, our dumpsters are designed to fit residential properties, ensuring a perfect fit for any project while maintaining the aesthetic appeal of your neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://icondumpsters.com/#quote-form" className="bg-[#0d9488] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors text-center">
                Get Free Quote
              </a>
              <a href="tel:(801) 918-6000" className="bg-white text-[#0d9488] px-8 py-4 rounded-lg font-bold text-lg border-2 border-[#0d9488] hover:bg-gray-50 transition-colors text-center">
                Call (801) 918-6000
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose Icon Dumpsters?</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Residential-friendly design</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Professional delivery & pickup</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Flexible rental periods</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Competitive pricing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Perfect For Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Perfect For These Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#0d9488] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Home Renovations</h4>
              <p className="text-gray-600">Kitchen remodels, bathroom updates, basement finishing, and room additions</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#0d9488] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Cleanouts</h4>
              <p className="text-gray-600">Basement, attic, and garage organization projects</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#0d9488] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Moving Projects</h4>
              <p className="text-gray-600">Pre-move cleanouts, downsizing, and post-move cleanup</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#0d9488] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Landscaping</h4>
              <p className="text-gray-600">Yard cleanup, garden projects, and outdoor renovations</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#0d9488] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Furniture Disposal</h4>
              <p className="text-gray-600">Old furniture, appliances, and household items removal</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#0d9488] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Seasonal Cleanup</h4>
              <p className="text-gray-600">Spring cleaning, fall cleanup, and holiday preparation</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Size</h4>
              <p className="text-gray-600">Select from our range of residential-friendly dumpster sizes based on your project needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Schedule Delivery</h4>
              <p className="text-gray-600">Choose your preferred delivery date and we'll place the dumpster in your driveway</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fill & Pickup</h4>
              <p className="text-gray-600">Fill the dumpster at your own pace, then call us for pickup when you're ready</p>
            </div>
          </div>
        </div>

      </div>
    </PageTemplate>
  );
}
