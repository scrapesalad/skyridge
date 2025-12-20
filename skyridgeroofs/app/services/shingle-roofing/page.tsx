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
  title: 'Shingle Roofing in Utah | Sky Ridge Roofing',
  description:
    'Asphalt shingle roofing in Utah: shingle roof installation, repairs, and replacement. Built for Utah sun, wind, and snow.',
  alternates: { canonical: canonicalUrl('/services/shingle-roofing') },
  openGraph: {
    title: 'Shingle Roofing in Utah - Sky Ridge Roofing',
    description: 'Asphalt shingle roofing in Utah: installation, repairs, and replacement. Free estimates.',
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
          serviceType: 'Shingle roofing',
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
              src="/images/skyridge/scrap/landmark-series-shingles-certainteed.jpg"
              alt="Shingle roofing in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  Shingle Roofing in Utah
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Asphalt shingle installation, repairs, and replacement
                </p>
                <QuoteButton variant="light" className="text-lg">
                  Get a Quote
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Asphalt shingles</h2>
              <p className="mb-4 text-lg leading-relaxed">
                Asphalt shingles are one of the most common roof types in Utah. We install and repair shingle roofing with attention to the details that prevent leaks: underlayment, ice & water protection, flashing, ventilation, and proper nailing patterns.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>Shingle roof installation for new builds</li>
                <li>Shingle roof repairs (missing shingles, flashing, leaks)</li>
                <li>Full shingle roof replacement</li>
              </ul>
              <p className="text-lg leading-relaxed">
                Learn about materials on our{' '}
                <Link href="/materials" className="text-blue-700 font-semibold hover:underline">
                  roofing materials
                </Link>{' '}
                page.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/skyridge/scrap/landmark-series-shingles-certainteed.jpg"
                alt="Asphalt shingle roof installation in Utah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Shingle Roofing Images Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Asphalt Shingle Roofing Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/GAF_Timberline_HD_Slate_2_Shown_For_Color-1-scaled-1.jpg"
                    alt="GAF Timberline HD shingles"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">GAF Shingles</h3>
                  <p className="text-sm text-gray-600">Premium GAF Timberline shingle installation</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/Camelot_Aged_Oak_Photo_1-scaled-1.jpg"
                    alt="Architectural shingle roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Architectural Shingles</h3>
                  <p className="text-sm text-gray-600">Enhanced dimensional shingle options</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/CF-Shingle-Project-8-300x202.webp"
                    alt="Shingle roof replacement project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Roof Replacement</h3>
                  <p className="text-sm text-gray-600">Complete shingle roof replacement services</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/closed-roof-valley.jpg"
                    alt="Shingle roof valley installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Expert Installation</h3>
                  <p className="text-sm text-gray-600">Professional shingle installation and details</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Related services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/roof-installation" className="border rounded-lg p-5 hover:bg-blue-50 transition">
                <div className="font-bold">Roof Installation</div>
                <div className="text-gray-600">Project planning and new installs</div>
              </Link>
              <Link href="/services/roof-repairs" className="border rounded-lg p-5 hover:bg-blue-50 transition">
                <div className="font-bold">Roof Repair</div>
                <div className="text-gray-600">Leak fixes and targeted shingle repairs</div>
              </Link>
              <Link href="/services/roof-replacement" className="border rounded-lg p-5 hover:bg-blue-50 transition">
                <div className="font-bold">Roof Replacement</div>
                <div className="text-gray-600">Full replacements when needed</div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

