import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import QuoteButton from '@/components/QuoteButton';

export const metadata: Metadata = {
  title: 'Additional Services | Sky Ridge Roofing',
  description: 'Solar installation, siding, and gutter services. Complete exterior solutions for your property in Utah.',
  openGraph: {
    title: 'Additional Services - Sky Ridge Roofing',
    description: 'Solar installation, siding, and gutter services.',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/skyridge_image_013.webp"
              alt="Additional Services"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Content Container */}
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                  Additional Services
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Complete Exterior Solutions for Your Property
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

                {/* CTA Button */}
                <QuoteButton variant="light" className="text-lg">
                  Get Free Quote →
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <p className="mb-8 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            In addition to our top-tier residential roofing solutions, we offer a full range of additional exterior services to protect and enhance your property. Whether you're upgrading your home or managing a commercial building, we have the expertise and equipment to get the job done right.
          </p>

          {/* Solar Installation */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/skyridge/skyridge_image_040.webp"
                  alt="Solar Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Solar Installation</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Reduce your energy costs and increase your property's value with our professional solar installation services.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Roof-integrated solar panel systems</li>
                  <li>Battery backup and energy storage options</li>
                  <li>Assistance with tax credits and incentives</li>
                  <li>Seamless integration with new or existing roofing systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Siding */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Siding Installation & Replacement</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Give your property a fresh, durable exterior with our siding services.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Vinyl, fiber cement, wood, and composite siding</li>
                  <li>Full siding replacement or targeted repairs</li>
                  <li>Weather-resistant materials with high curb appeal</li>
                  <li>Custom color and texture options</li>
                </ul>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/skyridge/skyridge_image_041.webp"
                  alt="Siding Installation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Gutters */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/skyridge/skyridge_image_042.webp"
                  alt="Gutters & Gutter Guards"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Gutters & Gutter Guards</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Protect your home from water damage with our custom gutter solutions.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Seamless aluminum and copper gutters</li>
                  <li>Gutter guard installation to prevent clogs</li>
                  <li>Downspout repair and redirection</li>
                  <li>Seasonal maintenance and cleaning services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Commercial Roofing */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Commercial Roofing</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  We provide comprehensive commercial roofing services for businesses of all sizes.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Flat roof installation and repair</li>
                  <li>Commercial roof maintenance programs</li>
                  <li>Emergency roof repairs</li>
                  <li>Roof coating and restoration</li>
                </ul>
                <div className="mt-6">
                  <Link href="/services/commercial-roofing" className="text-blue-700 font-semibold hover:underline">
                    Learn about Commercial Roofing →
                  </Link>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/skyridge/skyridge_image_043.webp"
                  alt="Commercial Roofing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Additional Services Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[44, 45, 46, 47, 48, 49].map((num) => (
                <div key={num} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/skyridge/skyridge_image_${String(num).padStart(3, '0')}.webp`}
                    alt={`Additional service project ${num}`}
                    fill
                    className="object-cover hover:scale-110 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
