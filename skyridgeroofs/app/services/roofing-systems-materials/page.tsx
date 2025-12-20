import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Roofing Systems & Materials in Utah | Sky Ridge Roofing',
  description:
    'Roofing systems and materials in Utah: underlayment, flashing, ventilation, shingles, metal, and flat roofing components that impact performance and lifespan.',
  alternates: { canonical: canonicalUrl('/services/roofing-systems-materials') },
  openGraph: {
    title: 'Roofing Systems & Materials in Utah - Sky Ridge Roofing',
    description:
      'Underlayment, flashing, ventilation, and material choices that impact roof performance and lifespan in Utah.',
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
          serviceType: 'Roofing systems and materials',
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
            src="/images/skyridge/scrap/landmark-series-shingles-certainteed.jpg"
            alt="Roofing systems and materials in Utah"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Roofing Systems & Materials</h1>
              <p className="text-xl drop-shadow-lg">The details that prevent leaks and extend roof life</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">What makes a roof “good” in Utah</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A roof is more than shingles or panels. In Utah, sun, wind, and freeze/thaw cycles punish weak details.
              Our focus is on the system: underlayment, flashing, ventilation, drainage, and proper fastening.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li><strong>Underlayment:</strong> added protection beneath the exterior roof covering</li>
              <li><strong>Ice & water protection:</strong> critical at eaves/valleys where water can back up</li>
              <li><strong>Flashing:</strong> the #1 leak-prevention detail around edges and penetrations</li>
              <li><strong>Ventilation:</strong> helps reduce moisture and heat buildup in the attic</li>
              <li><strong>Drainage:</strong> gutters and downspouts protect siding and foundation</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/services/roof-ventilation" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="font-bold text-xl mb-2">Roof Ventilation</div>
              <div className="text-gray-700">Ridge vents, soffit vents, airflow improvements</div>
            </Link>
            <Link href="/services/shingle-roofing" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="font-bold text-xl mb-2">Shingle Roofing</div>
              <div className="text-gray-700">Asphalt shingles for many Utah homes</div>
            </Link>
            <Link href="/services/metal-roofing" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="font-bold text-xl mb-2">Metal Roofing</div>
              <div className="text-gray-700">Durable options built for Utah weather</div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

