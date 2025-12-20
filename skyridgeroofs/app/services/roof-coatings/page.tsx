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
  title: 'Roof Coatings in Utah | Sky Ridge Roofing',
  description:
    'Roof coatings in Utah for commercial and flat roofs to extend service life and improve performance. Inspection and recommendations included.',
  alternates: { canonical: canonicalUrl('/services/roof-coatings') },
  openGraph: {
    title: 'Roof Coatings in Utah - Sky Ridge Roofing',
    description: 'Roof coatings in Utah for commercial and flat roofs to extend service life.',
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
          serviceType: 'Roof coatings',
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
              src="/images/skyridge/scrap/Cincinnati-commercial-roof-restoration.jpg"
              alt="Roof coatings in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  Roof Coatings in Utah
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Commercial and flat roof coating options
                </p>
                <QuoteButton variant="light" className="text-lg">
                  Get a Quote
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">When coatings make sense</h2>
              <p className="mb-4 text-lg leading-relaxed">
                Roof coatings can be a cost-effective alternative to replacement for certain commercial and flat roofing systems—especially when the roof is structurally sound but needs added waterproofing and UV protection.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>Flat roof coating evaluations</li>
                <li>Leak and seam remediation before coating</li>
                <li>Performance-focused recommendations</li>
              </ul>
              <p className="text-lg leading-relaxed">
                For full commercial system work, see{' '}
                <Link href="/services/commercial-roofing" className="text-blue-700 font-semibold hover:underline">
                  commercial roofing
                </Link>
                .
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/skyridge/scrap/Cincinnati-commercial-roof-restoration.jpg"
                alt="Commercial roof coating in Utah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Roof Coatings Images Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Roof Coating Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/greeley-commercial-replacement-experts-q5ci09vs7pm79teahi5wnibtyc7pl27apafiidv1g0.jpg"
                    alt="Commercial roof coating application"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Elastomeric Coatings</h3>
                  <p className="text-sm text-gray-600">Flexible, waterproof roof coating systems</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/flat-roof.jpg"
                    alt="Flat roof coating services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Flat Roof Coatings</h3>
                  <p className="text-sm text-gray-600">Extend flat roof life with professional coatings</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/commercial-roof-installation.jpg"
                    alt="Roof restoration coating"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Restoration Coatings</h3>
                  <p className="text-sm text-gray-600">Complete roof restoration with coatings</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/commercial-roofing-inspections-longmont-300x200.jpg"
                    alt="Roof coating inspection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Coating Evaluation</h3>
                  <p className="text-sm text-gray-600">Professional assessment for coating suitability</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Get a recommendation</h2>
            <p className="text-lg text-gray-700 mb-6">
              We’ll inspect your roof and recommend the best path: targeted repairs, coatings, restoration, or replacement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/roof-inspection"
                className="inline-flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Roof Inspection
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

