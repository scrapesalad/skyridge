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
  title: 'Roof Waterproofing in Utah | Sky Ridge Roofing',
  description:
    'Roof waterproofing in Utah: leak prevention details, flashing improvements, coatings for certain systems, and targeted repairs to keep water out.',
  alternates: { canonical: canonicalUrl('/services/roof-waterproofing') },
  openGraph: {
    title: 'Roof Waterproofing in Utah - Sky Ridge Roofing',
    description:
      'Roof waterproofing in Utah: leak prevention details, flashing improvements, coatings for certain systems, and targeted repairs.',
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
          serviceType: 'Roof waterproofing',
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
              src="/images/skyridge/scrap/flashing-1.jpeg"
              alt="Roof waterproofing in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  Roof Waterproofing in Utah
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Leak prevention, flashing improvements, and roof repair options
                </p>
                <QuoteButton variant="light" className="text-lg">
                  Get a Quote →
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Common waterproofing approaches</h2>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-gray-700">
                <li>Targeted roof leak repairs and flashing corrections</li>
                <li>Underlayment and ice & water protection upgrades (during replacement)</li>
                <li>Drainage improvements to reduce pooling and backup</li>
                <li>Coatings for certain commercial/flat roof systems when appropriate</li>
              </ul>
              <p className="text-lg text-gray-700">
                If you have an active leak, start with{' '}
                <Link href="/services/roof-repairs" className="text-blue-700 font-semibold hover:underline">
                  roof repair
                </Link>
                . For commercial systems, see{' '}
                <Link href="/services/flat-roofing" className="text-blue-700 font-semibold hover:underline">
                  flat roofing
                </Link>{' '}
                and{' '}
                <Link href="/services/roof-coatings" className="text-blue-700 font-semibold hover:underline">
                  roof coatings
                </Link>
                .
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/skyridge/scrap/flat-roof.jpg"
                alt="Flat roof waterproofing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

