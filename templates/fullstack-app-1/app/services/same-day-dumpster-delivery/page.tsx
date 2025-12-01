export const dynamic = 'force-static';

import { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import ImageWithFallback from '@/app/components/ImageWithFallback'
import StructuredData from '@/app/components/StructuredData'

export const metadata: Metadata = {
  title: 'Same-Day Dumpster Delivery Utah | Icon Dumpsters',
  description: 'Same-day dumpster delivery throughout Utah. Emergency dumpster rental with fast delivery for urgent projects. Call (801) 918-6000 for immediate service.',
  keywords: 'same-day dumpster delivery Utah, emergency dumpster rental, fast dumpster delivery, urgent dumpster service, Salt Lake City same-day delivery',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Same-Day Dumpster Delivery Utah | Icon Dumpsters',
      alternates: {
    canonical: 'https://icondumpsters.com/services/same-day-dumpster-delivery',
    images: [
      {
        url: 'https://icondumpsters.com/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Same-Day Dumpster Delivery Utah | Icon Dumpsters',
      },
    ]
  },
  description: 'Same-day dumpster delivery throughout Utah. Emergency dumpster rental with fast delivery for urgent projects. Call (801) 918-6000 for immediate service.',
    type: 'website',
    url: 'https://icondumpsters.com/services/same-day-dumpster-delivery',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
  },
};

export default function SameDayDumpsterDeliveryPage() {
  return (
    <PageTemplate>
      <StructuredData
        type="service"
        data={{
          name: "Same-Day Dumpster Delivery Services",
          description: "Emergency same-day dumpster delivery services for urgent projects throughout Utah",
          provider: {
            name: "Icon Dumpsters",
            url: "https://icondumpsters.com"
          },
          areaServed: ['Salt Lake City, UT', 'West Valley City, UT', 'Provo, UT', 'West Jordan, UT', 'Orem, UT', 'Sandy, UT', 'Ogden, UT'],
          serviceType: "Same-Day Dumpster Delivery",
          priceRange: "$250-$600"
        }}
      />
      
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Fast, Reliable Same-Day Dumpster Delivery
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            When you need a dumpster immediately, Icon Dumpsters delivers. Our same-day service is available throughout Utah for emergency situations, urgent projects, and time-sensitive cleanups.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We understand that sometimes projects can't wait. Whether it's a sudden cleanup need, emergency construction debris removal, or an unexpected project deadline, we're here to help with fast, professional service.
          </p>
        </div>

        {/* When You Need Same-Day Service */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">When You Need Same-Day Service</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Emergency Cleanup</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Storm damage debris</li>
                <li>• Water damage cleanup</li>
                <li>• Fire damage restoration</li>
                <li>• Natural disaster cleanup</li>
                <li>• Emergency construction</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Urgent Projects</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Last-minute renovations</li>
                <li>• Moving deadlines</li>
                <li>• Property preparation</li>
                <li>• Event cleanup</li>
                <li>• Time-sensitive construction</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Commercial Needs</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Retail store renovations</li>
                <li>• Office relocations</li>
                <li>• Restaurant cleanouts</li>
                <li>• Warehouse clearing</li>
                <li>• Construction site emergencies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Available Sizes */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Same-Day Dumpster Sizes Available</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">15 Yard</h4>
              <p className="text-gray-600 mb-4">Perfect for small cleanouts</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Kitchen remodel</li>
                <li>• Bathroom renovation</li>
                <li>• Garage cleanout</li>
                <li>• Small demolition</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">20 Yard</h4>
              <p className="text-gray-600 mb-4">Ideal for medium projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Whole house cleanout</li>
                <li>• Roof replacement</li>
                <li>• Large renovation</li>
                <li>• Estate clearing</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">30 Yard</h4>
              <p className="text-gray-600 mb-4">Best for large projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• New construction</li>
                <li>• Major demolition</li>
                <li>• Commercial renovation</li>
                <li>• Large-scale cleanup</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">40 Yard</h4>
              <p className="text-gray-600 mb-4">For massive projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Industrial cleanup</li>
                <li>• Large demolition</li>
                <li>• Commercial construction</li>
                <li>• Major renovation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How Same-Day Service Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Call Immediately</h4>
              <p className="text-gray-600">Call (801) 918-6000 as soon as you know you need a dumpster</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Assessment</h4>
              <p className="text-gray-600">We quickly assess your needs and recommend the right size</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-600">We deliver your dumpster within hours, not days</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Start Working</h4>
              <p className="text-gray-600">Begin your project immediately with your dumpster on-site</p>
            </div>
          </div>
        </section>

        {/* Why Choose Our Same-Day Service */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Same-Day Service?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Lightning Fast</h4>
                  <p className="text-gray-600">Same-day delivery when you need it most</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">No Extra Fees</h4>
                  <p className="text-gray-600">Same-day delivery at no additional cost</p>
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
                  <p className="text-gray-600">We work around your timeline and needs</p>
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
                  <h4 className="text-lg font-semibold text-gray-900">Reliable Service</h4>
                  <p className="text-gray-600">Count on us to deliver when we say we will</p>
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
                  <p className="text-gray-600">Experienced drivers and delivery personnel</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Wide Coverage</h4>
                  <p className="text-gray-600">Same-day service throughout Utah</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="bg-red-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need a Dumpster Right Now?</h3>
          <p className="text-lg mb-6">Don't wait - call us immediately for same-day delivery. We're standing by to help with your urgent project!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(801) 918-6000"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Call Now (801) 918-6000
            </a>
            <a
              href="/#quote-form"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </section>
      </div>
    </PageTemplate>
  )
}
