import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Brick Pointing & Masonry Repairs in Utah | Sky Ridge Roofing',
  description:
    'Brick pointing and masonry repairs around chimneys in Utah. Protect your roofline by addressing cracked mortar and flashing transitions.',
  alternates: { canonical: canonicalUrl('/services/brick-pointing') },
  openGraph: {
    title: 'Brick Pointing in Utah - Sky Ridge Roofing',
    description: 'Masonry and chimney-related repairs that protect flashing and roof transitions.',
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
          serviceType: 'Brick pointing and masonry repairs',
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
            src="/images/skyridge/scrap/building-exterior.jpg"
            alt="Brick pointing and chimney masonry repairs in Utah"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Brick Pointing</h1>
              <p className="text-xl drop-shadow-lg">Masonry repairs that protect your roofline</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">What is brick pointing?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              Brick pointing (repointing) is the process of repairing mortar joints where the mortar has cracked,
              eroded, or separated. For many homes in Utah, this is most important around{' '}
              <Link href="/services/chimneys" className="text-blue-700 font-semibold hover:underline">
                chimneys
              </Link>{' '}
              and roof transitions where failing mortar can allow water intrusion.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">How it connects to roofing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-2">Flashing performance</h3>
                <p className="leading-relaxed">
                  Mortar joints and masonry condition affect counterflashing and sealing. Fixing the masonry helps
                  flashing perform correctly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Leak prevention</h3>
                <p className="leading-relaxed">
                  Many chimney leaks are not shingle failures. Addressing brick and mortar can stop persistent water
                  issues.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Next steps</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you see cracked mortar, spalling brick, or leaks around a chimney chase, start with an evaluation.
              We can also combine this with{' '}
              <Link href="/services/roof-repairs" className="text-blue-700 font-semibold hover:underline">
                roof repairs
              </Link>{' '}
              to address everything in one scope.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition"
            >
              Request an evaluation
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

