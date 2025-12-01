import QuoteForm from '@/app/components/QuoteForm';
import { Metadata } from 'next';
import Script from 'next/script';
import Hero from '@/app/components/hero';
import PageTemplate from '@/app/components/PageTemplate';

export const metadata: Metadata = {
  title: 'Free Dumpster Rental Quote | Icon Dumpsters Utah',
  description: 'Get a free, instant quote for dumpster rental in Utah. Professional waste management solutions with competitive pricing and reliable service.',
  keywords: 'dumpster rental quote, free quote, utah dumpster rental, roll-off dumpster, dumpster rental near me',
  openGraph: {
    title: 'Free Dumpster Rental Quote | Icon Dumpsters Utah',
    description: 'Get a free, instant quote for dumpster rental in Utah. Professional waste management solutions with competitive pricing and reliable service.',
    url: 'https://icondumpsters.com/free-quote',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/dumpsters.jpeg',
        width: 1200,
        height: 630,
        alt: 'Free Dumpster Rental Quote - Icon Dumpsters Utah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Dumpster Rental Quote | Icon Dumpsters Utah',
    description: 'Get a free, instant quote for dumpster rental in Utah. Professional waste management solutions with competitive pricing and reliable service.',
    images: ['/images/dumpsters.jpeg'],
  },
  alternates: { canonical: 'https://icondumpsters.com/free-quote' },
};

export default function FreeQuotePage() {
  return (
    <PageTemplate>
      {/* Schema Markup for Service */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Dumpster Rental Quote Service",
            "description": "Get a free, instant quote for dumpster rental in Utah. Professional waste management solutions with competitive pricing and reliable service.",
            "provider": {
              "@type": "Organization",
              "name": "Icon Dumpsters",
              "url": "https://icondumpsters.com",
              "logo": "/images/Icon_Dumpsters_Final.png"
            },
            "serviceType": "Dumpster Rental",
            "areaServed": {
              "@type": "State",
              "name": "Utah"
            },
            "url": "https://icondumpsters.com/free-quote"
          })
        }}
      />
             {/* Hero Section */}
       <Hero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0d9488] rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Request Your Quote</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you with a personalized quote</p>
              </div>
              <QuoteForm />
            </div>
          </div>

          {/* Benefits Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-2 bg-[#0d9488] rounded-full mr-3"></span>
                Why Choose Icon Dumpsters?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fast Delivery</h4>
                    <p className="text-sm text-gray-600">Same-day or next-day delivery available in most areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-trust-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Competitive Pricing</h4>
                    <p className="text-sm text-gray-600">Best rates guaranteed with transparent pricing</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Secure & Reliable</h4>
                    <p className="text-sm text-gray-600">Licensed, insured, and bonded for your peace of mind</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-action-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Support</h4>
                    <p className="text-sm text-gray-600">24/7 customer service to help with any questions</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Need Immediate Help?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm text-gray-600">Call us: (801) 918-6000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-sm text-gray-600">Email: icondumpsters@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
