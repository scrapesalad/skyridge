import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Chimney Flashing & Repairs in Utah | Sky Ridge Roofing',
  description:
    'Chimney-related roof leak fixes in Utah: flashing, caps, and water intrusion troubleshooting. Protect roof transitions around masonry and vents.',
  alternates: { canonical: canonicalUrl('/services/chimneys') },
  openGraph: {
    title: 'Chimneys in Utah - Sky Ridge Roofing',
    description: 'Chimney flashing and roof transition repairs to stop leaks and protect your roof system.',
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
          serviceType: 'Chimney flashing and repairs',
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
            src="/images/skyridge/scrap/flashing-1.jpeg"
            alt="Chimney flashing and roof transition repairs in Utah"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Chimneys</h1>
              <p className="text-xl drop-shadow-lg">Fix leaks at roof and masonry transitions</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Common chimney leak causes</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Worn or improperly installed step/counterflashing.</li>
              <li>Cracked mortar joints or deteriorated masonry.</li>
              <li>Damaged chimney caps or crown issues.</li>
              <li>Sealant failures around metal chases and penetrations.</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Recommended approach</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The right fix depends on the source. We start by verifying roof conditions, flashing details, and moisture
              pathways. If masonry repair is needed, we can coordinate the work and align it with the roofing scope.
            </p>
            <p className="text-gray-700 leading-relaxed mb-0">
              If you suspect damage after wind or storms, consider{' '}
              <Link href="/services/roof-inspection" className="text-blue-700 font-semibold hover:underline">
                a roof inspection
              </Link>{' '}
              or{' '}
              <Link href="/services/emergency-roof-repair" className="text-blue-700 font-semibold hover:underline">
                emergency roof repair
              </Link>
              .
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Brick and mortar repairs</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cracked joints or spalling brick can undermine flashing. Learn about{' '}
              <Link href="/services/brick-pointing" className="text-blue-700 font-semibold hover:underline">
                brick pointing
              </Link>{' '}
              and when masonry repairs are appropriate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition"
            >
              Request a chimney evaluation
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

