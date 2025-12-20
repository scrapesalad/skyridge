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
  title: 'Roof Replacement & Roof Replacement Near Me | Sky Ridge Roofing',
  description:
    'Expert roof replacement and roof replacement near me services in Utah. Professional roof installation, new roof installation, and roof replacement contractors. Free estimates.',
  alternates: { canonical: canonicalUrl('/services/roof-replacement') },
  openGraph: {
    title: 'Roof Replacement & Roof Installation | Sky Ridge Roofing',
    description: 'Professional roof replacement, roof replacement near me, and roof installation services in Utah. Expert roofing contractors.',
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
          serviceType: 'Roof replacement',
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
              src="/images/skyridge/skyridge_image_010.webp"
              alt="Roof Replacement"
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
                  Roof Replacement
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Protect Your Home. Boost Curb Appeal. Increase Value.
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
            <div>
              <h2 className="text-3xl font-bold mb-6">Is It Time to Replace Your Roof?</h2>
              <p className="mb-4 text-lg leading-relaxed">
                We specialize in full roof replacements that are built to withstand Utah's unpredictable weather - from snow and wind to harsh summer sun. Whether your roof is nearing the end of its lifespan, or storm damage has left it compromised, we'll walk you through the replacement process with honesty and clarity.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                Searching for <strong>roof installation</strong>? Roof installation is part of every roof replacement we do. You can also review our{' '}
                <Link href="/services/roof-installation" className="text-blue-700 font-semibold hover:underline">
                  roof installation service
                </Link>{' '}
                for a dedicated overview.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                If you are noticing any of the following, it might be time to replace your roof:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>Missing or damaged shingles</li>
                <li>Leaks or water damage</li>
                <li>Roof is over 20 years old</li>
                <li>Granules in your gutters</li>
                <li>Sagging or drooping roof</li>
                <li>High energy bills</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded">
                <h3 className="text-xl font-bold mb-2">How much does a new roof cost in Utah?</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  New roof cost depends on roof size (squares), material, pitch/complexity, tear-off, and any decking repairs.
                  For a quick ballpark, use our{' '}
                  <Link href="/calculators/roofing-cost" className="text-blue-700 font-semibold hover:underline">
                    roofing cost calculator
                  </Link>
                  . For an exact price, we offer free inspections and written estimates.
                </p>
                <h3 className="text-xl font-bold mb-2">How long does a roof last?</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-0">
                  Lifespan depends on material quality, ventilation, and installation. Many asphalt shingle roofs last ~15–30 years,
                  metal roofs often ~40–70 years, and tile can last 50+ years with proper underlayment and maintenance.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/skyridge/skyridge_image_006.webp"
                alt="Roof replacement work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Roof Replacement Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/skyridge/skyridge_image_007.webp"
                    alt="Inspection"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Inspection & Assessment</h3>
                <p className="text-gray-600">Thorough evaluation of your current roof condition</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/skyridge/skyridge_image_008.webp"
                    alt="Planning"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Planning & Materials</h3>
                <p className="text-gray-600">Selecting the best materials for your home and budget</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/skyridge/skyridge_image_009.webp"
                    alt="Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Professional Installation</h3>
                <p className="text-gray-600">Expert installation by our skilled roofing team</p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Recent Roof Replacements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[14, 15, 16, 17, 18, 19, 20, 21].map((num) => (
                <div key={num} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/skyridge/skyridge_image_${String(num).padStart(3, '0')}.webp`}
                    alt={`Roof replacement project ${num}`}
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
