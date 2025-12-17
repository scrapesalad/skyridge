import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

import JsonLd from '@/components/JsonLd';
import QuoteForm from '@/components/QuoteForm';
import AICitationSchema from '@/components/AICitationSchema';
import LLMSchema from '@/components/LLMSchema';
import { BUSINESS, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Utah Roofing Company',
  description:
    'Roof replacement, roof repairs, and insurance-claim help across Utah. Licensed & insured. Call for a free estimate.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Sky Ridge Roofing',
    description:
      'Roof replacement, roof repairs, and insurance-claim help across Utah. Licensed & insured. Free estimates.',
    url: '/',
  },
};

export default function Page() {
  // All 49 images available
  const allImages = Array.from({ length: 49 }, (_, i) => i + 1);
  
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* AI Citation Schema for ChatGPT */}
        <AICitationSchema />
        <LLMSchema />
        {/* Standard LocalBusiness Schema */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: BUSINESS.name,
            legalName: BUSINESS.legalName,
            url: SITE_URL,
            telephone: BUSINESS.phone,
            areaServed: 'Utah',
          }}
        />
        {/* Hero Section with Background Video/Image */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/skyridge/skyridge_image_023.webp"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
              {/* Left Side - Main Content */}
              <div className="text-white py-12">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  SKY RIDGE{' '}
                  <span className="text-primary-light">ROOFING</span>
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100">
                  Expert Roofing Solutions
                </p>
                
                {/* Phone Number */}
                <div className="flex items-center space-x-3 mb-8">
                  <svg className="w-8 h-8 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm text-blue-200">Call Us Today</p>
                    <a href="tel:8012526936" className="text-3xl md:text-4xl font-bold hover:text-primary-light transition">
                      801-252-6936
                    </a>
                  </div>
                </div>

                {/* Learn More Button */}
                <Link
                  href="/about"
                  className="inline-block bg-primary-light text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary transition text-lg uppercase tracking-wide"
                >
                  Learn More About Us →
                </Link>
              </div>

              {/* Right Side - Quote Form */}
              <div className="lg:relative lg:top-12">
                <QuoteForm />
              </div>
            </div>
          </div>

          {/* 30-Second Roof Estimate Banner */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
            <Link
              href="/calculators/roofing-cost"
              className="bg-primary-light text-white px-4 py-8 writing-vertical-rl text-center font-bold text-sm hover:bg-primary transition shadow-lg"
              style={{ writingMode: 'vertical-rl' }}
            >
              30-Second Roof Estimate
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/skyridge_image_001.webp"
                    alt="Roof Replacement"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Roof Replacement</h3>
                  <p className="text-gray-600 mb-4">
                    Complete roof replacement services with quality materials and expert installation.
                  </p>
                  <Link href="/services/roof-replacement" className="text-blue-600 font-semibold hover:text-blue-800">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/skyridge_image_002.webp"
                    alt="Roof Repairs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Roof Repairs</h3>
                  <p className="text-gray-600 mb-4">
                    Fast and reliable roof repair services to fix leaks, damage, and wear.
                  </p>
                  <Link href="/services/roof-repairs" className="text-blue-600 font-semibold hover:text-blue-800">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/skyridge_image_003.webp"
                    alt="Insurance Claims"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Insurance Claims</h3>
                  <p className="text-gray-600 mb-4">
                    Expert assistance with insurance claims to ensure you get the coverage you deserve.
                  </p>
                  <Link href="/services/insurance-claims" className="text-blue-600 font-semibold hover:text-blue-800">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section with Images */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Sky Ridge Roofing?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/skyridge/skyridge_image_010.webp"
                    alt="Licensed & Insured"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed and insured in the State of Utah</p>
              </div>

              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/skyridge/skyridge_image_011.webp"
                    alt="Expert Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Service</h3>
                <p className="text-gray-600">Years of experience in roofing and insurance claims</p>
              </div>

              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/skyridge/skyridge_image_012.webp"
                    alt="Transparent Pricing"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">No surprises, clear and upfront pricing</p>
              </div>

              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/skyridge/skyridge_image_013.webp"
                    alt="Warranty Backed"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Warranty Backed</h3>
                <p className="text-gray-600">Quality workmanship with warranty protection</p>
              </div>
            </div>
          </div>
        </section>

        {/* Expanded Gallery Section - Using All Images */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Work Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {allImages.map((num) => (
                <div key={num} className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={`/images/skyridge/skyridge_image_${String(num).padStart(3, '0')}.webp`}
                    alt={`Roofing project ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Showcase Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Quality Craftsmanship</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/skyridge/skyridge_image_020.webp"
                  alt="Quality roofing work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/skyridge/skyridge_image_025.webp"
                  alt="Professional installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/skyridge/skyridge_image_030.webp"
                  alt="Expert roofing team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Sky Ridge Roofing did an amazing job replacing our roof. The team was professional, clean, and completed the work on time. Highly recommend!"</p>
                <p className="font-semibold">- Sarah Johnson, Salt Lake City</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"We had storm damage and needed help with our insurance claim. Sky Ridge Roofing handled everything and made the process so easy."</p>
                <p className="font-semibold">- Michael Chen, Provo</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Fast response time and excellent workmanship. Our new roof looks fantastic and we feel confident it will last for years."</p>
                <p className="font-semibold">- Jennifer Martinez, Ogden</p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/testimonials" className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center">
                Read More Reviews →
              </Link>
            </div>
          </div>
        </section>

        {/* Certifications & Badges */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Certified & Trusted</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">✓</div>
                  <h3 className="font-semibold mb-2">Licensed</h3>
                  <p className="text-sm text-gray-600">UT License # 14235218-5501</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">✓</div>
                  <h3 className="font-semibold mb-2">Insured</h3>
                  <p className="text-sm text-gray-600">Fully insured & bonded</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">✓</div>
                  <h3 className="font-semibold mb-2">Warranty</h3>
                  <p className="text-sm text-gray-600">Workmanship guaranteed</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">✓</div>
                  <h3 className="font-semibold mb-2">Local</h3>
                  <p className="text-sm text-gray-600">Utah-based company</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Roofing Project?</h2>
            <p className="text-xl mb-8">Contact us today for a free estimate</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
                Get Free Quote
              </Link>
              <Link href="/financing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition inline-block">
                Learn About Financing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
