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
  title: 'Residential Roofing in Utah | Sky Ridge Roofing',
  description:
    'Residential roofing in Utah: roof repair, roof replacement, and roof installation with quality materials and expert workmanship. Free estimates.',
  alternates: { canonical: canonicalUrl('/services/residential-roofing') },
  openGraph: {
    title: 'Residential Roofing in Utah - Sky Ridge Roofing',
    description:
      'Residential roofing in Utah: roof repair, roof replacement, and roof installation. Free estimates.',
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
          serviceType: 'Residential roofing',
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
        <section className="relative h-[520px] md:h-[620px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/scrap/roofing-job.jpg"
              alt="Residential roofing in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  Residential Roofing in Utah
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Roof repair, replacement, and installation—done right
                </p>
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
              <h2 className="text-3xl font-bold mb-6">What we do</h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Sky Ridge Roofing serves homeowners across Utah with clear recommendations, clean job sites, and
                durable roof details—flashing, ventilation, and drainage included.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-gray-700">
                <li>
                  <Link href="/services/roof-repairs" className="text-blue-700 font-semibold hover:underline">
                    Roof repairs
                  </Link>{' '}
                  for leaks, flashing, vents, and storm damage
                </li>
                <li>
                  <Link href="/services/roof-replacement" className="text-blue-700 font-semibold hover:underline">
                    Roof replacement
                  </Link>{' '}
                  when repairs aren’t the best long-term option
                </li>
                <li>
                  <Link href="/services/roof-installation" className="text-blue-700 font-semibold hover:underline">
                    Roof installation
                  </Link>{' '}
                  for new builds and planned upgrades
                </li>
                <li>
                  <Link href="/services/shingle-roofing" className="text-blue-700 font-semibold hover:underline">
                    Shingle roofing
                  </Link>{' '}
                  and{' '}
                  <Link href="/services/metal-roofing" className="text-blue-700 font-semibold hover:underline">
                    metal roofing
                  </Link>
                </li>
              </ul>
              <p className="text-lg text-gray-700">
                Not sure what you need? Start with a{' '}
                <Link href="/services/roof-inspection" className="text-blue-700 font-semibold hover:underline">
                  roof inspection
                </Link>
                .
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/skyridge/scrap/roofing-job.jpg"
                alt="Residential roofing services in Utah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Residential Roofing Services Images */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Residential Roofing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/landmark-series-shingles-certainteed.jpg"
                    alt="Residential shingle roof installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Shingle Roofing</h3>
                  <p className="text-sm text-gray-600">Asphalt shingle installation and repair</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/metal-roofing-768x576.jpg"
                    alt="Residential metal roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Metal Roofing</h3>
                  <p className="text-sm text-gray-600">Standing seam and metal panel systems</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/Camelot_Aged_Oak_Photo_1-scaled-1.jpg"
                    alt="Residential roof replacement"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Roof Replacement</h3>
                  <p className="text-sm text-gray-600">Complete residential roof replacement</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/flashing-1.jpeg"
                    alt="Residential roof repairs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Roof Repairs</h3>
                  <p className="text-sm text-gray-600">Leak repairs and maintenance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Roofing materials</h2>
            <p className="text-lg text-gray-700 mb-6">
              Explore common systems and materials for Utah homes, including asphalt shingles, metal roofing, and tile.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/materials"
                className="inline-flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Roofing Materials
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

