import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { INDEXABLE_CITY_SLUGS } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Utah Roofing Company',
  description:
    'Sky Ridge Roofing provides roof replacement, roof repairs, metal roofing, and commercial roofing across Utah. Licensed & insured. Free estimates.',
  alternates: { canonical: '/utah-roofing-company' },
  openGraph: {
    title: 'Utah Roofing Company | Sky Ridge Roofing',
    description:
      'Roof replacement, roof repairs, metal roofing, and commercial roofing across Utah. Licensed & insured. Free estimates.',
    url: '/utah-roofing-company',
  },
};

const featuredCities: Array<{ slug: string; name: string }> = [
  { slug: 'salt-lake-city', name: 'Salt Lake City' },
  { slug: 'provo', name: 'Provo' },
  { slug: 'ogden', name: 'Ogden' },
  { slug: 'west-valley-city', name: 'West Valley City' },
  { slug: 'sandy', name: 'Sandy' },
  { slug: 'orem', name: 'Orem' },
  { slug: 'layton', name: 'Layton' },
  { slug: 'st-george', name: 'St. George' },
  { slug: 'logan', name: 'Logan' },
];

export default function Page() {
  const faqs = [
    {
      q: 'Do you provide free inspections and estimates?',
      a: 'Yes. We can inspect your roof, explain what we’re seeing, and provide a clear estimate and options based on your goals and budget.',
    },
    {
      q: 'Do you offer metal roofing and commercial roofing?',
      a: 'Yes. We install metal roofing systems and provide commercial roofing services for flat and low-slope roofs across Utah.',
    },
    {
      q: 'Can you help after hail or wind damage?',
      a: 'Yes. We can document storm damage, share photos and notes, and help guide the insurance process when needed.',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: BUSINESS.name,
            legalName: BUSINESS.legalName,
            url: SITE_URL,
            telephone: BUSINESS.phone,
            areaServed: 'Utah',
          }}
        />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }}
        />

        <section className="relative h-[520px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/skyridge_image_022.webp"
              alt="Roofing contractor serving Utah homeowners"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 h-full relative z-10 flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                Utah Roofing Company
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 drop-shadow-lg mb-8">
                Sky Ridge Roofing helps Utah homeowners and property managers with honest inspections,
                clear estimates, and quality workmanship—from repairs to full replacements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8012526936"
                  className="bg-primary-light text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary transition text-lg text-center"
                >
                  Call 801-252-6936
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg text-center"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold mb-4">A straightforward roofing process</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Most roofing projects go smoothly when the scope is clear and the details are done
                right. We focus on the common failure points—flashing, ventilation, and transitions—so
                your roof performs in Utah’s snow, wind, and summer heat.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li>Clear inspection notes and photos</li>
                <li>Written scope of work (no vague line items)</li>
                <li>Options that match budget and timeline</li>
                <li>Clean job sites and proactive communication</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold mb-4">Roofing services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Whether you need a repair, a full replacement, or storm-damage support, we’ll help you
                choose the best next step.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
                <li>
                  <Link className="text-blue-700 hover:underline" href="/services/roof-replacement">
                    Roof replacement
                  </Link>
                </li>
                <li>
                  <Link className="text-blue-700 hover:underline" href="/services/roof-repairs">
                    Roof repairs
                  </Link>
                </li>
                <li>
                  <Link className="text-blue-700 hover:underline" href="/services/metal-roofing">
                    Metal roofing
                  </Link>
                </li>
                <li>
                  <Link className="text-blue-700 hover:underline" href="/services/commercial-roofing">
                    Commercial roofing
                  </Link>
                </li>
                <li>
                  <Link className="text-blue-700 hover:underline" href="/services/insurance-claims">
                    Insurance claim support
                  </Link>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">Service areas across Utah</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We serve communities across Utah. Start with a featured city, or view the full list of
              locations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {featuredCities
                .filter((c) =>
                  INDEXABLE_CITY_SLUGS.includes(c.slug as (typeof INDEXABLE_CITY_SLUGS)[number]),
                )
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}`}
                    className="border border-gray-200 rounded-lg p-4 text-center hover:border-primary hover:shadow-sm transition"
                  >
                    <span className="font-semibold text-gray-900">{c.name}</span>
                    <span className="block text-sm text-gray-600 mt-1">Roofing services</span>
                  </Link>
                ))}
            </div>

            <div className="text-center">
              <Link
                href="/locations"
                className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                View All Locations
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="border border-gray-200 rounded-lg p-4">
                  <summary className="cursor-pointer font-semibold text-gray-900">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for a free inspection?</h2>
            <p className="text-xl mb-6">
              Tell us what’s going on and we’ll help you choose the best next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
              >
                Request a Free Quote
              </Link>
              <a
                href="tel:8012526936"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition inline-block"
              >
                Call 801-252-6936
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

