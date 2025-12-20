import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Roof Air Barrier in Utah | Sky Ridge Roofing',
  description:
    'Roof air barrier details in Utah that reduce drafts, moisture movement, and energy loss. Learn how air sealing and roof system details work together.',
  alternates: { canonical: canonicalUrl('/services/roof-air-barrier') },
  openGraph: {
    title: 'Roof Air Barrier in Utah - Sky Ridge Roofing',
    description:
      'Air barrier and air sealing concepts for roof systems in Utah: reduce drafts, moisture movement, and energy loss.',
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
          serviceType: 'Roof air barrier',
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
            src="/images/skyridge/scrap/gv_apr-2019_strip-ventilation.jpg"
            alt="Roof air barrier and ventilation in Utah"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Roof Air Barrier</h1>
              <p className="text-xl drop-shadow-lg">Air sealing concepts that support performance</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">What it means</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A roof air barrier is part of a broader building-envelope strategy to reduce uncontrolled air movement.
              Less air leakage can help reduce moisture movement and improve comfort. In practice, the roof still
              needs proper ventilation and watertight flashing details.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              If you’re troubleshooting ice dams, attic moisture, or airflow issues, start with{' '}
              <Link href="/services/roof-ventilation" className="text-blue-700 font-semibold hover:underline">
                roof ventilation
              </Link>{' '}
              or a{' '}
              <Link href="/services/roof-inspection" className="text-blue-700 font-semibold hover:underline">
                roof inspection
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

