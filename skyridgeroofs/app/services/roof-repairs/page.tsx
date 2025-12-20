import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import QuoteButton from '@/components/QuoteButton';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Roof Repair & Roof Leak Repair | Sky Ridge Roofing',
  description:
    'Expert roof repair and roof leak repair services in Utah. Professional roof repairs for leaks, storm damage, shingles, flashing, and ventilation issues. Fast scheduling and free estimates.',
  alternates: { canonical: canonicalUrl('/services/roof-repairs') },
  openGraph: {
    title: 'Roof Repair & Roof Leak Repair | Sky Ridge Roofing',
    description: 'Professional roof repair and roof leak repair in Utah for leaks, storm damage, shingles, and flashing issues.',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Roof repair',
          areaServed: 'Utah',
          provider: {
            '@type': 'LocalBusiness',
            name: BUSINESS.name,
            url: SITE_URL,
            telephone: BUSINESS.phone,
          },
        }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/scrap/flashing-1.jpeg"
              alt="Roof Repairs"
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
                  Roof Repairs
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Fast, Reliable, and Professional Roof Repair Services
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/skyridge/scrap/nails-1.jpeg"
                alt="Roof repair work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Roof Repair Services</h2>
              <p className="mb-4 text-lg leading-relaxed">
                Don't let a small roof problem become a major expense. Our experienced team provides prompt, professional roof repairs to address leaks, damaged shingles, flashing issues, and more.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                Common roof repair services we provide:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>Leak detection and repair</li>
                <li>Shingle replacement</li>
                <li>Flashing repair</li>
                <li>Gutter repair and cleaning</li>
                <li>Vent and chimney repairs</li>
                <li>Storm damage repairs</li>
              </ul>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Repair Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/flashing-1.jpeg"
                  alt="Roof flashing repair in Utah"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/nails-1.jpeg"
                  alt="Roof shingle repair and replacement"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/Poorly-Installed-Shingles-1024x683-1.jpeg"
                  alt="Professional shingle repair services"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/replace-rotted-roof-decking-r9s0s1ll2umws3di4jscahu9s54iilxkq8ir4t3ads.jpg"
                  alt="Roof decking repair and replacement"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/leavesontheroof-ra7jjucc7rnbr41zzppkycdprcwydk9ae70g2z72og.webp"
                  alt="Roof maintenance and cleaning"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/RoofCricketConstruction4.webp"
                  alt="Roof cricket and flashing repair"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/hail-damage.jpeg"
                  alt="Storm damage roof repair"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/roofing-job.jpg"
                  alt="Professional roof repair work"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
