import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Siding Services in Utah | Sky Ridge Roofing',
  description:
    'Coordinate siding repair or replacement in Utah alongside your roofing project. Improve curb appeal, weather protection, and energy performance.',
  alternates: { canonical: canonicalUrl('/services/siding') },
  openGraph: {
    title: 'Siding Services in Utah - Sky Ridge Roofing',
    description:
      'Siding repair and replacement coordination in Utah alongside roof repair or roof replacement projects.',
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
          serviceType: 'Siding services',
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
            alt="Siding services in Utah"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Siding</h1>
              <p className="text-xl drop-shadow-lg">Exterior protection that complements your roof</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Siding help during roofing projects</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Siding and roofing work often overlap around fascia, soffits, flashing, and trim. If you are already
              planning a{' '}
              <Link href="/services/roof-replacement" className="text-blue-700 font-semibold hover:underline">
                roof replacement
              </Link>{' '}
              or{' '}
              <Link href="/services/roof-repairs" className="text-blue-700 font-semibold hover:underline">
                roof repair
              </Link>
              , we can help you coordinate siding repairs or replacement so the exterior finishes come together
              cleanly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-0">
              If siding is not part of your scope, we can still inspect for moisture intrusion and detailing issues
              during a{' '}
              <Link href="/services/roof-inspection" className="text-blue-700 font-semibold hover:underline">
                roof inspection
              </Link>
              .
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Common siding goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-2">Weather protection</h3>
                <p className="leading-relaxed">
                  Replace damaged panels, repair rot, and improve sealing at penetrations to help keep water out of the
                  wall system.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Curb appeal</h3>
                <p className="leading-relaxed">
                  Match updated siding and trim with your roofing material for a cohesive, higher-value exterior.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Energy performance</h3>
                <p className="leading-relaxed">
                  Better detailing can reduce drafts and help insulation perform as designed (especially with proper{' '}
                  <Link href="/services/roof-air-barrier" className="text-blue-700 font-semibold hover:underline">
                    air sealing concepts
                  </Link>
                  ).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Better drainage</h3>
                <p className="leading-relaxed">
                  Pair siding work with{' '}
                  <Link href="/services/gutters-downspouts" className="text-blue-700 font-semibold hover:underline">
                    gutters and downspouts
                  </Link>{' '}
                  so water is directed away from siding, foundations, and landscaping.
                </p>
              </div>
            </div>
          </section>

          {/* Siding Services Images */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Siding Services & Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/building-exterior.jpg"
                    alt="Siding repair and replacement"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Siding Repair</h3>
                  <p className="text-sm text-gray-600">Fix damaged panels and improve weather protection</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/increasing-your-curb-appeal.jpg"
                    alt="Siding replacement for curb appeal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Curb Appeal</h3>
                  <p className="text-sm text-gray-600">Match siding with roofing for cohesive exterior</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/bungalow-holiday-apartments-on-cyprus.jpg"
                    alt="Exterior siding installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Full Replacement</h3>
                  <p className="text-sm text-gray-600">Complete siding replacement services</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/hero-image-vacation-homes.jpg"
                    alt="Siding and roofing coordination"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Coordination</h3>
                  <p className="text-sm text-gray-600">Coordinate siding with roof projects</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Get an exterior assessment</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Tell us what you want to accomplish and we will recommend a plan that prioritizes roof performance first,
              then exterior finish upgrades.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition"
            >
              Request an estimate
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

