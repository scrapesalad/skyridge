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
  title: 'Roof Maintenance in Utah | Sky Ridge Roofing',
  description:
    'Roof maintenance in Utah to prevent leaks and extend roof life: minor repairs, flashing checks, ventilation reviews, and more.',
  alternates: { canonical: canonicalUrl('/services/roof-maintenance') },
  openGraph: {
    title: 'Roof Maintenance in Utah - Sky Ridge Roofing',
    description: 'Roof maintenance in Utah to prevent leaks and extend roof life. Free estimates.',
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
          serviceType: 'Roof maintenance',
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
              src="/images/skyridge/skyridge_image_019.webp"
              alt="Roof maintenance in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  Roof Maintenance in Utah
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Prevent leaks and extend your roof’s lifespan
                </p>
                <QuoteButton variant="light" className="text-lg">
                  Get Maintenance Quote
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What’s included</h2>
              <p className="mb-4 text-lg leading-relaxed">
                Regular roof maintenance helps catch small issues before they become expensive repairs. In Utah, freeze/thaw cycles,
                wind, and sun can loosen fasteners, degrade sealants, and stress flashing details.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>Minor roof repairs (sealants, fasteners, small flashing fixes)</li>
                <li>Vent and pipe boot checks</li>
                <li>Gutter and drainage review</li>
                <li>Photo notes and recommendations</li>
              </ul>
              <p className="text-lg leading-relaxed">
                If you already have an active leak, start with{' '}
                <Link href="/services/roof-repairs" className="text-blue-700 font-semibold hover:underline">
                  roof repair
                </Link>{' '}
                instead.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/skyridge/skyridge_image_023.webp"
                alt="Roof maintenance checklist"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Need an inspection first?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Not sure what your roof needs? Schedule a roof inspection and we’ll recommend the right path.
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

