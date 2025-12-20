import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Roofing Types in Utah | Sky Ridge Roofing',
  description:
    'Learn about common roofing types in Utah, including shingles, metal roofs, flat roofing systems, and commercial roof options.',
  alternates: { canonical: canonicalUrl('/services/roofing-types') },
  openGraph: {
    title: 'Roofing Types in Utah - Sky Ridge Roofing',
    description:
      'Learn about common roofing types in Utah, including shingles, metal roofs, and flat roofing systems.',
    type: 'website',
  },
};

const items = [
  {
    title: 'Shingle Roofing',
    description: 'Asphalt shingles are common in Utah—great value and broad style options.',
    href: '/services/shingle-roofing',
    image: '/images/skyridge/scrap/landmark-series-shingles-certainteed.jpg',
  },
  {
    title: 'Metal Roofing',
    description: 'Standing seam and exposed-fastener systems built for Utah weather.',
    href: '/services/metal-roofing',
    image: '/images/skyridge/scrap/metal-roofing-768x576.jpg',
  },
  {
    title: 'Flat Roofing',
    description: 'Low-slope and commercial flat roof systems, repairs, and coatings.',
    href: '/services/flat-roofing',
    image: '/images/skyridge/scrap/flat-roof.jpg',
  },
  {
    title: 'Roofing Systems & Materials',
    description: 'Underlayment, flashing, ventilation, and system choices that impact performance.',
    href: '/services/roofing-systems-materials',
    image: '/images/skyridge/scrap/roofing-center-02.jpg',
  },
] as const;

export default function Page() {
  return (
    <>
      <Header />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Roofing Types in Utah',
          about: 'Roofing types and systems in Utah',
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
            src="/images/skyridge/scrap/metal-roofing-768x576.jpg"
            alt="Roofing types in Utah"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Roofing Types</h1>
              <p className="text-xl drop-shadow-lg">Common roof systems for Utah homes and businesses</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative h-56">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                  <div className="mt-4 text-blue-700 font-semibold">Learn more →</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Need help choosing?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Start with a roof inspection and we’ll recommend the best system for your goals, budget, and Utah’s climate.
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

