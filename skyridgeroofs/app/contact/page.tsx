import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact Us | Sky Ridge Roofing - Free Estimate',
  description: 'Contact Sky Ridge Roofing for a free estimate. Call 801-252-6936 or fill out our contact form. We serve all of Utah.',
  alternates: { canonical: canonicalUrl('/contact') },
  openGraph: {
    title: 'Contact Us - Sky Ridge Roofing',
    description: 'Contact Sky Ridge Roofing for a free estimate. Call 801-252-6936 or fill out our contact form.',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-96 mb-12">
          <Image
            src="/images/skyridge/skyridge_image_016.webp"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Contact Us</h1>
              <p className="text-xl drop-shadow-lg">Get Your Free Estimate Today</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <a href="tel:8012526936" className="text-blue-600 hover:text-blue-800">
                        801-252-6936
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a href="mailto:Info@skyridgeco.com" className="text-blue-600 hover:text-blue-800">
                        Info@skyridgeco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Service Area</h3>
                      <p className="text-gray-700">Serving all of Utah</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">License</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      <strong>Emergency Service:</strong> Available 24/7 for urgent roofing issues
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
