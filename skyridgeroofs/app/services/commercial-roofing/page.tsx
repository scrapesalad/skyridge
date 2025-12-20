import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Commercial Roofing | TPO Roofing & EPDM Roofing | Sky Ridge Roofing',
  description:
    'Expert commercial roofing services in Utah: TPO roofing, EPDM roofing, commercial roof repair, commercial roof replacement, and commercial roofing contractors. Free estimates.',
  alternates: { canonical: canonicalUrl('/services/commercial-roofing') },
  openGraph: {
    title: 'Commercial Roofing Company | TPO & EPDM Roofing | Sky Ridge Roofing',
    description:
      'Professional commercial roofing in Utah: TPO roofing, EPDM roofing, commercial roof repairs, replacements, coatings, and maintenance programs.',
    url: '/services/commercial-roofing',
  },
};

export default function Page() {
  const faqs = [
    {
      q: 'Do you work on flat roofs and low-slope systems?',
      a: 'Yes. We handle flat and low-slope commercial roofs and can recommend the best approach—repair, restoration coating, or replacement—based on the roof condition and budget.',
    },
    {
      q: 'What is TPO roofing?',
      a: 'TPO (Thermoplastic Polyolefin) is a single-ply membrane roofing system commonly used for flat and low-slope commercial and residential roofs. It features a white or light-colored reflective surface that helps reduce cooling costs. TPO roofing is known for its durability, resistance to UV radiation, and energy efficiency. The membrane is typically heat-welded at seams to create a watertight seal. TPO roofs can last 20-30 years with proper installation and maintenance.',
    },
    {
      q: 'What is EPDM roofing?',
      a: 'EPDM (Ethylene Propylene Diene Monomer) is a synthetic rubber membrane used for flat and low-slope roofs. It\'s a durable, flexible material that\'s typically black in color and known for its excellent weather resistance and longevity. EPDM roofing can last 20-50 years depending on installation quality and maintenance. It\'s installed in large sheets with seams sealed using adhesive or tape. EPDM is popular for both commercial and residential flat roofs due to its cost-effectiveness and proven performance.',
    },
    {
      q: 'Can you help prevent leaks with a maintenance plan?',
      a: 'Absolutely. Proactive inspections and minor repairs are often the most cost-effective way to extend roof life and reduce disruption for tenants and staff.',
    },
    {
      q: 'How do you minimize disruption for a business?',
      a: 'We coordinate access, staging, and work hours when possible, keep the site clean, and communicate daily so your team knows what to expect.',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Commercial roofing',
            provider: {
              '@type': 'LocalBusiness',
              name: BUSINESS.name,
              legalName: BUSINESS.legalName,
              url: SITE_URL,
              telephone: BUSINESS.phone,
            },
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

        {/* Hero */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/skyridge_image_043.webp"
              alt="Commercial roofing services in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                  Commercial Roofing
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Reliable service for flat and low-slope roofing systems
                </p>

                <div className="flex items-center space-x-3 mb-8">
                  <svg
                    className="w-8 h-8 text-primary-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-blue-200">Schedule an inspection</p>
                    <a
                      href="tel:8012526936"
                      className="text-3xl md:text-4xl font-bold hover:text-primary-light transition"
                    >
                      801-252-6936
                    </a>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-primary-light text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary transition text-lg uppercase tracking-wide"
                >
                  Request a Bid →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Commercial roofing that protects your property</h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Leaks and roof failures don’t just damage a building—they disrupt operations. We
                focus on clear communication, clean job sites, and workmanship that holds up through
                Utah’s weather swings.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-gray-700">
                <li>Leak diagnosis and targeted repairs</li>
                <li>Roof replacement planning and execution</li>
                <li>Restoration coatings when appropriate</li>
                <li>Preventive maintenance programs</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700">
                If you manage multiple properties, we can help standardize inspections and reporting
                so your team has consistent documentation and timelines.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/skyridge/skyridge_image_031.webp"
                alt="Roof inspection and documentation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Common commercial roof systems</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We'll recommend the best solution after an on-site inspection and moisture assessment.
              These are common systems we work with:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">TPO Roofing (Thermoplastic Polyolefin)</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  TPO is a single-ply membrane roofing system commonly used for flat and low-slope roofs. It features a white or light-colored reflective surface that helps reduce cooling costs.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>20-30 year lifespan with proper installation</li>
                  <li>Energy-efficient reflective surface</li>
                  <li>Heat-welded seams for watertight seal</li>
                  <li>Resistant to UV radiation and chemicals</li>
                  <li>Cost-effective for large commercial roofs</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">EPDM Roofing (Ethylene Propylene Diene Monomer)</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  EPDM is a synthetic rubber membrane known for its durability and flexibility. It's typically black and excels in handling temperature extremes.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>20-50 year lifespan depending on installation</li>
                  <li>Excellent weather resistance</li>
                  <li>Flexible and durable material</li>
                  <li>Cost-effective installation</li>
                  <li>Proven performance in extreme temperatures</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Modified bitumen</h3>
                <p className="text-gray-700 leading-relaxed">
                  Durable, time-tested, and often a strong choice for roofs with heavy foot traffic.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Coatings & restoration</h3>
                <p className="text-gray-700 leading-relaxed">
                  When the roof is structurally sound, coatings can extend service life and improve
                  reflectivity.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Metal for commercial</h3>
                <p className="text-gray-700 leading-relaxed">
                  Excellent for certain buildings and slopes. We'll confirm details like thermal
                  movement and flashing requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">TPO vs EPDM: Which is Right for Your Roof?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700">TPO Roofing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Best for:</strong> Buildings where energy efficiency is a priority, especially in hot climates. The reflective white surface can significantly reduce cooling costs.
                </p>
                <h4 className="font-bold mb-2">Advantages:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Energy-efficient reflective surface</li>
                  <li>Heat-welded seams create strong bonds</li>
                  <li>Resistant to chemicals and oils</li>
                  <li>Environmentally friendly material</li>
                  <li>Good for new construction</li>
                </ul>
                <h4 className="font-bold mb-2">Considerations:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Requires professional installation for proper seam welding</li>
                  <li>Can be more expensive than EPDM initially</li>
                  <li>White surface may show dirt over time</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700">EPDM Roofing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Best for:</strong> Cost-conscious projects, roofs with many penetrations, and areas with extreme temperature variations.
                </p>
                <h4 className="font-bold mb-2">Advantages:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Proven track record (used since 1960s)</li>
                  <li>Excellent flexibility and durability</li>
                  <li>Cost-effective material and installation</li>
                  <li>Handles temperature extremes well</li>
                  <li>Good for both new and replacement roofs</li>
                </ul>
                <h4 className="font-bold mb-2">Considerations:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Black color absorbs heat (higher cooling costs)</li>
                  <li>Seams require careful installation</li>
                  <li>Can shrink over time if not properly installed</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-gray-700">
                <strong>Our Recommendation:</strong> The best choice depends on your specific building, climate, budget, and energy goals. We'll assess your roof and provide a recommendation based on your needs. Both TPO and EPDM are excellent choices when properly installed by experienced professionals.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Commercial roofing FAQ</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need commercial roofing help?</h2>
            <p className="text-xl mb-6">
              Request an inspection and we’ll provide a clear recommendation and bid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
              >
                Request a Bid
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition inline-block"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

