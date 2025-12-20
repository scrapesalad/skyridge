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
  title: 'Roof Inspection in Utah | Sky Ridge Roofing',
  description:
    'Roof inspections in Utah for hail damage, wind damage, leaks, and general roof condition. Photo documentation and free estimates.',
  alternates: { canonical: canonicalUrl('/services/roof-inspection') },
  openGraph: {
    title: 'Roof Inspection in Utah - Sky Ridge Roofing',
    description:
      'Roof inspections in Utah for hail damage, wind damage, leaks, and general roof condition. Free estimates.',
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
          serviceType: 'Roof inspection',
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
              src="/images/skyridge/scrap/Roof-Inspection_Sumit-Kapoor-TX_2-scaled-1.jpeg"
              alt="Roof inspection in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  Roof Inspection in Utah
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Hail damage, wind damage, leaks, and roof condition checks
                </p>

                <div className="flex items-center space-x-3 mb-8">
                  <svg className="w-8 h-8 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm text-blue-200">Call Us Today</p>
                    <a href="tel:8012526936" className="text-3xl md:text-4xl font-bold hover:text-primary-light transition">
                      801-252-6936
                    </a>
                  </div>
                </div>

                <QuoteButton variant="light" className="text-lg">
                  Request Inspection
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What we look for</h2>
              <p className="mb-4 text-lg leading-relaxed">
                Utah storms can cause damage that isn&apos;t obvious from the ground. Our roof inspections
                focus on the details that matter: shingles, flashing, vents, pipe boots, valleys, and
                penetrations—plus signs of leaks in the attic when applicable.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>Hail damage inspection (bruising, granule loss, impact patterns)</li>
                <li>Wind damage inspection (lifted or missing shingles, exposed fasteners)</li>
                <li>Leak inspection (entry points, flashing failures, ventilation issues)</li>
                <li>Photo documentation and clear next steps</li>
              </ul>
              <p className="text-lg leading-relaxed">
                If storm damage is involved, our{' '}
                <Link href="/services/insurance-claims" className="text-blue-700 font-semibold hover:underline">
                  insurance claims service
                </Link>{' '}
                can help you document and communicate effectively.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/skyridge/scrap/Roof-Inspection_Sumit-Kapoor-TX_2-scaled-1.jpeg"
                alt="Professional roof inspection in Utah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Roof Inspection Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/skyridge/scrap/Roof-Inspection-Image-768x439.jpg"
                    alt="Roof inspection for hail damage in Utah"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hail Damage Inspection</h3>
                  <p className="text-gray-600">We check for bruising, granule loss, and impact patterns that indicate storm damage.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/skyridge/scrap/What-You-Dont-Have-To-Do-Home-Inspector-01-1440x820-1.jpg"
                    alt="Professional roof inspector checking roof condition"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Comprehensive Assessment</h3>
                  <p className="text-gray-600">Thorough evaluation of shingles, flashing, vents, and all roof components.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/skyridge/scrap/hail-damage.jpeg"
                    alt="Hail damage on roof shingles"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Photo Documentation</h3>
                  <p className="text-gray-600">Detailed photos and documentation for insurance claims and repair planning.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Related services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/roof-repairs" className="border rounded-lg p-5 hover:bg-blue-50 transition">
                <div className="font-bold">Roof Repair</div>
                <div className="text-gray-600">Leaks, flashing, vents, and storm-related fixes</div>
              </Link>
              <Link href="/services/roof-replacement" className="border rounded-lg p-5 hover:bg-blue-50 transition">
                <div className="font-bold">Roof Replacement</div>
                <div className="text-gray-600">When repair isn’t the best long-term option</div>
              </Link>
              <Link href="/blog/hail-damage-roof-inspection-utah" className="border rounded-lg p-5 hover:bg-blue-50 transition">
                <div className="font-bold">Hail Inspection Guide</div>
                <div className="text-gray-600">DIY checks and what to document for claims</div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

