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
  title: 'Roof Restoration & Repairs in Utah | Sky Ridge Roofing',
  description:
    'Roof restoration and repairs in Utah: leak fixes, flashing corrections, maintenance, and coating options for certain systems. Free estimates.',
  alternates: { canonical: canonicalUrl('/services/roof-restoration-repairs') },
  openGraph: {
    title: 'Roof Restoration & Repairs in Utah - Sky Ridge Roofing',
    description:
      'Roof restoration and repairs in Utah: leak fixes, flashing corrections, and coating options for certain systems.',
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
          serviceType: 'Roof restoration and repairs',
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
              alt="Roof restoration and repairs in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  Roof Restoration & Repairs
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Extend service life with the right fix—not guesswork
                </p>
                <QuoteButton variant="light" className="text-lg">
                  Get a Quote →
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">Restore, repair, or replace?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The best value comes from choosing the right path for your roof’s condition. We’ll inspect the system and recommend:
              targeted repairs, maintenance, coatings/restoration (when appropriate), or full replacement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/roof-repairs" className="border rounded-lg p-5 hover:bg-blue-50 transition">
                <div className="font-bold">Roof Repairs</div>
                <div className="text-gray-700">Leaks, flashing, vents, storm damage fixes</div>
              </Link>
              <Link href="/services/roof-coatings" className="border rounded-lg p-5 hover:bg-blue-50 transition">
                <div className="font-bold">Roof Coatings</div>
                <div className="text-gray-700">Commercial/flat roof coating options</div>
              </Link>
              <Link href="/services/roof-replacement" className="border rounded-lg p-5 hover:bg-blue-50 transition">
                <div className="font-bold">Roof Replacement</div>
                <div className="text-gray-700">New roof when the system is beyond repair</div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

