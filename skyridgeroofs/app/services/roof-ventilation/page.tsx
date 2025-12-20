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
  title: 'Roof Ventilation in Utah | Sky Ridge Roofing',
  description:
    'Roof ventilation in Utah: ridge vents, soffit vents, attic airflow, and vent repairs to reduce moisture and heat buildup.',
  alternates: { canonical: canonicalUrl('/services/roof-ventilation') },
  openGraph: {
    title: 'Roof Ventilation in Utah - Sky Ridge Roofing',
    description: 'Roof ventilation in Utah: ridge vents, soffit vents, attic airflow, and vent repairs.',
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
          serviceType: 'Roof ventilation',
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
              src="/images/skyridge/scrap/gv_apr-2019_strip-ventilation.jpg"
              alt="Roof ventilation in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  Roof Ventilation in Utah
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Ridge vents, soffit vents, attic airflow, and vent repairs
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
              <h2 className="text-3xl font-bold mb-6">Why ventilation matters</h2>
              <p className="mb-4 text-lg leading-relaxed">
                Proper roof and attic ventilation reduces moisture buildup (mold risk) and helps control temperature swings in Utah’s climate.
                Poor ventilation can shorten shingle life, contribute to ice dams, and increase energy costs.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>Ventilation evaluation and recommendations</li>
                <li>Ridge vent and soffit vent improvements</li>
                <li>Bathroom and kitchen exhaust routing checks</li>
                <li>Vent and flashing repairs</li>
              </ul>
              <p className="text-lg leading-relaxed">
                Want to estimate requirements? Try our{' '}
                <Link href="/calculators/ventilation" className="text-blue-700 font-semibold hover:underline">
                  ventilation calculator
                </Link>
                .
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/skyridge/scrap/gv_apr-2019_strip-ventilation.jpg"
                alt="Roof ventilation system in Utah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Roof Ventilation Images Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Roof Ventilation Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/roofing-center-02.jpg"
                    alt="Ridge vent installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Ridge Vents</h3>
                  <p className="text-sm text-gray-600">Continuous ridge vent systems for optimal airflow</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/roofing-center-04-qg13nktj9cx8cworod4wf2skk8m3jzkgal4zrz09ao.jpg"
                    alt="Soffit vent installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Soffit Vents</h3>
                  <p className="text-sm text-gray-600">Proper intake ventilation for balanced airflow</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/roofingcenter-blog-07-qfskckmzpii02wunzlscnv7r272fkut533k7tmxgso.jpg"
                    alt="Attic ventilation system"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Attic Ventilation</h3>
                  <p className="text-sm text-gray-600">Complete attic ventilation solutions</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/roofingcenter-blog-185.jpg"
                    alt="Vent repair and maintenance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Vent Repairs</h3>
                  <p className="text-sm text-gray-600">Fix and maintain existing ventilation systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Related repairs</h2>
            <p className="text-lg text-gray-700 mb-6">
              Vent issues often show up alongside leaks and flashing problems. If you need active leak troubleshooting, start with roof repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/roof-repairs"
                className="inline-flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Roof Repairs
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

