import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Window Replacement Coordination in Utah | Sky Ridge Roofing',
  description:
    'Coordinate window replacement in Utah with your roofing project. Improve comfort and reduce water intrusion risks with correct flashing details.',
  alternates: { canonical: canonicalUrl('/services/windows') },
  openGraph: {
    title: 'Windows in Utah - Sky Ridge Roofing',
    description:
      'Window replacement and exterior flashing coordination in Utah alongside roof replacement and roof repair.',
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
          serviceType: 'Window replacement coordination',
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
        <section className="relative h-96 mb-12">
          <Image
            src="/images/skyridge/scrap/bungalow-holiday-apartments-on-cyprus.jpg"
            alt="Window replacement coordination in Utah"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Windows</h1>
              <p className="text-xl drop-shadow-lg">Coordinate upgrades with roof work</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Why windows matter for the roof system</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              Many leaks blamed on roofing actually begin at window flashing, siding transitions, or wall penetrations.
              If you are planning a{' '}
              <Link href="/services/roof-replacement" className="text-blue-700 font-semibold hover:underline">
                roof replacement
              </Link>{' '}
              or{' '}
              <Link href="/services/roof-repairs" className="text-blue-700 font-semibold hover:underline">
                roof repair
              </Link>
              , we can help you coordinate window replacement with proper exterior detailing so water is directed away
              from the building envelope.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Typical window upgrade outcomes</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Reduced drafts and better indoor comfort.</li>
              <li>Improved water management with correct flashing integration.</li>
              <li>Lower condensation risk when ventilation and sealing are balanced.</li>
              <li>Cleaner exterior appearance when paired with trim and siding updates.</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Start with an inspection</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Not sure where the water is coming from? A{' '}
              <Link href="/services/roof-inspection" className="text-blue-700 font-semibold hover:underline">
                roof inspection
              </Link>{' '}
              can help you prioritize roof issues first, then coordinate window and exterior improvements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition"
            >
              Schedule an inspection
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

