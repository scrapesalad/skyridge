import Image from "next/image";
import ImageWithFallback from "@/app/components/ImageWithFallback";
import QuoteForm from "@/app/components/QuoteForm";
import PhoneModalLink from "@/app/components/PhoneModalLink";
import Hero from '@/app/components/hero';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Icon Dumpsters - Get Your Free Quote Today',
  description: 'Contact Icon Dumpsters for professional dumpster rental services in Utah. Get a free quote, schedule delivery, or speak with our waste management experts.',
  keywords: ['contact icon dumpsters', 'dumpster rental quote', 'utah waste management contact', 'free dumpster quote'],
  alternates: { canonical: 'https://icondumpsters.com/contact' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Contact Icon Dumpsters - Get Your Free Quote Today',
    description: 'Contact Icon Dumpsters for professional dumpster rental services in Utah. Get a free quote, schedule delivery, or speak with our waste management experts.',
    url: 'https://icondumpsters.com/contact',
    images: [{ url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp', width: 1200, height: 630, alt: 'Contact Icon Dumpsters - Utah Dumpster Rental' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function ContactPage() {


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Contact Information Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Contact Icon Dumpsters for professional dumpster rental services in Utah. 
              We provide instant quotes, flexible scheduling, and reliable service throughout Salt Lake County and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="text-center">
              <div className="bg-[#0d9488] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <PhoneModalLink phone="(801) 918-6000" telHref="tel:+18019186000" className="text-lg text-[#0d9488] font-semibold hover:underline" />
              <p className="text-gray-600">Available 7 days a week</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="bg-[#0d9488] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:icondumpsters@gmail.com" className="text-lg text-[#0d9488] font-semibold hover:underline">icondumpsters@gmail.com</a>
              <p className="text-gray-600">Quick response guaranteed</p>
            </div>

            {/* Service Area */}
            <div className="text-center">
              <div className="bg-[#0d9488] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Area</h3>
              <p className="text-lg text-[#0d9488] font-semibold">Salt Lake County</p>
              <p className="text-gray-600">And surrounding areas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Get Your Free Quote</h2>
              <p className="text-lg text-gray-600">
                Fill out the form to receive a free, no-obligation quote for your dumpster rental needs. 
                Our team will get back to you quickly with competitive pricing and flexible scheduling options.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-trust-blue-dark">Why Choose Icon Dumpsters?</h3>
                    <div className="mt-2 text-sm text-trust-blue-dark">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Instant quotes and competitive pricing</li>
                        <li>Flexible delivery and pickup scheduling</li>
                        <li>Professional service throughout Utah</li>
                        <li>Multiple dumpster sizes available</li>
                        <li>Direct contact with owners/operators</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Dumpster Sizes</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">15 Yard Dumpster</span>
                    <span className="font-medium">Perfect for small projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">20 Yard Dumpster</span>
                    <span className="font-medium">Ideal for medium projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">30 Yard Dumpster</span>
                    <span className="font-medium">Great for large projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>

      {/* SMS Consent Information */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">SMS Messaging Consent</h3>
                        <p className="text-sm text-gray-600 mb-4">
              By checking this box, you agree to receive quote confirmations, delivery updates, service reminders, and promotional offers via SMS from Icon Dumpsters. 
              Message frequency varies. Message and data rates may apply. For help, reply HELP. To opt out, reply STOP. 
              We do not share your information with third parties. See our privacy policy at https://icondumpsters.com/privacy-policy and terms and conditions at https://icondumpsters.com/terms-of-service.
            </p>
                        <div className="text-sm text-gray-600 space-y-2">
              <p><strong>Message Types:</strong> Quote confirmations, delivery updates, service reminders, and promotional offers</p>
              <p><strong>Message Frequency:</strong> Varies based on your service needs and promotions</p>
              <p><strong>Opt-out:</strong> Reply STOP to any message or call (801) 918-6000</p>
              <p><strong>Help:</strong> Reply HELP to any message or call (801) 918-6000</p>
              <p><strong>Privacy:</strong> Your mobile information is never shared with third parties. View our <a href="https://icondumpsters.com/privacy-policy" className="text-[#0d9488] hover:underline">Privacy Policy</a> and <a href="https://icondumpsters.com/terms-of-service" className="text-[#0d9488] hover:underline">Terms of Service</a>.</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
