import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Gutters & Downspouts in Utah | Sky Ridge Roofing',
  description:
    'Gutter and downspout improvements in Utah to control roof runoff and protect siding, foundations, and landscaping. Coordinate with your roofing project.',
  alternates: { canonical: canonicalUrl('/services/gutters-downspouts') },
  openGraph: {
    title: 'Gutters & Downspouts in Utah - Sky Ridge Roofing',
    description: 'Gutter and downspout work that supports roof drainage and exterior protection.',
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
          serviceType: 'Gutters and downspouts',
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
            src="/images/skyridge/scrap/gutter-covers-maryland-1024x768-1.webp"
            alt="Gutters and downspouts in Utah"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Gutters &amp; Downspouts</h1>
              <p className="text-xl drop-shadow-lg">Control roof runoff and protect your home</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Why drainage matters</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              Even a perfect roof can create problems if water is not directed away from the structure. Gutters and
              downspouts help manage runoff, reduce erosion, and prevent staining or moisture damage around the
              exterior.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">When to consider gutter updates</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Overflowing gutters during storms or snowmelt.</li>
              <li>Water pooling near foundations or basement leaks.</li>
              <li>Loose hangers, sagging runs, or separated seams.</li>
              <li>Staining or rot on fascia/soffit boards.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 mb-0">
              If you are planning{' '}
              <Link href="/services/roof-replacement" className="text-blue-700 font-semibold hover:underline">
                roof replacement
              </Link>
              , it is often the right time to ensure drip edge, fascia details, and drainage are dialed in together.
            </p>
          </section>

          {/* Gutter Services Images */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Gutter & Downspout Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/gutter-covers-maryland-1024x768-1.webp"
                    alt="Gutter installation and repair"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Gutter Installation</h3>
                  <p className="text-sm text-gray-600">New gutter systems for proper drainage</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/leavesontheroof-ra7jjucc7rnbr41zzppkycdprcwydk9ae70g2z72og.webp"
                    alt="Gutter cleaning and maintenance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Gutter Cleaning</h3>
                  <p className="text-sm text-gray-600">Remove debris and maintain proper flow</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/flashing-1.jpeg"
                    alt="Downspout installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Downspouts</h3>
                  <p className="text-sm text-gray-600">Proper downspout placement and sizing</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/RoofCricketConstruction4.webp"
                    alt="Gutter repair and replacement"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Gutter Repair</h3>
                  <p className="text-sm text-gray-600">Fix sagging, leaks, and damaged sections</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Estimate your needs</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Use our{' '}
              <Link href="/calculators/gutter-size" className="text-blue-700 font-semibold hover:underline">
                gutter size calculator
              </Link>{' '}
              to get a rough idea of sizing. Then we can confirm the best approach on-site.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition"
            >
              Get a quote
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

