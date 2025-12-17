import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import QuoteButton from '@/components/QuoteButton';
import { BUSINESS, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Metal Roofing',
  description:
    'Metal roofing installation and replacement in Utah. Standing seam and exposed-fastener options, expert flashing details, and clean job sites. Free estimates.',
  alternates: { canonical: '/services/metal-roofing' },
  openGraph: {
    title: 'Metal Roofing in Utah | Sky Ridge Roofing',
    description:
      'Metal roofing installation and replacement in Utah. Standing seam and exposed-fastener options. Free estimates.',
    url: '/services/metal-roofing',
  },
};

export default function Page() {
  const faqs = [
    {
      q: 'How long does a metal roof last in Utah?',
      a: 'A properly installed metal roof can last decades. Lifespan depends on panel type, coating quality, ventilation, and how well flashing details are handled at valleys, walls, and penetrations.',
    },
    {
      q: 'Is metal roofing loud in rain or hail?',
      a: 'When installed over solid decking with underlayment (typical residential installs), metal roofing is not dramatically louder than other systems. Proper insulation and attic ventilation help too.',
    },
    {
      q: 'Do you install standing seam metal roofs?',
      a: 'Yes. We install standing seam systems and also offer exposed-fastener panels where appropriate. We'll recommend the best fit based on slope, aesthetics, and budget.',
    },
    {
      q: 'How to install metal roofing?',
      a: 'Metal roofing installation requires proper preparation: removing old roofing, inspecting and repairing the deck, installing underlayment, and securing metal panels with appropriate fasteners. Standing seam systems use concealed fasteners, while exposed-fastener systems use screws with washers. Proper flashing around valleys, chimneys, and edges is critical. We recommend hiring a professional to ensure proper installation and avoid leaks or premature failure.',
    },
    {
      q: 'How to cut metal roofing?',
      a: 'Metal roofing panels should be cut using appropriate tools to avoid damaging the protective coating. Common methods include tin snips for small cuts, a circular saw with a metal-cutting blade, or a nibbler for precise cuts. Always wear safety equipment. Cut from the back side when possible to minimize chipping. For best results and warranty coverage, we recommend having a professional handle cutting and installation.',
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
            serviceType: 'Metal roofing',
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

        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/skyridge_image_021.webp"
              alt="Metal roofing installation in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                  Metal Roofing
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Durable, energy-efficient roofing built for Utah weather
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
                    <p className="text-sm text-blue-200">Call for a free estimate</p>
                    <a
                      href="tel:8012526936"
                      className="text-3xl md:text-4xl font-bold hover:text-primary-light transition"
                    >
                      801-252-6936
                    </a>
                  </div>
                </div>

                <QuoteButton variant="light" className="text-lg">
                  Get Free Quote →
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why homeowners choose metal roofing</h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                If you want a roof that holds up to snow load, wind, and intense UV, metal roofing is
                one of the strongest options. It’s also a great fit when you want a clean, modern
                look and fewer long-term maintenance headaches.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-gray-700">
                <li>Long service life with quality coatings</li>
                <li>Great performance in freeze/thaw cycles</li>
                <li>Reflective options that can reduce attic heat</li>
                <li>Low-maintenance compared to many systems</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700">
                The difference is in the details: underlayment, ventilation, fasteners, and flashing
                work around chimneys, skylights, and valleys. That’s where our team spends the time
                to do it right.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/skyridge/skyridge_image_010.webp"
                alt="Close-up of a finished roof detail"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Metal roof options we install</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Standing seam</h3>
                <p className="text-gray-700 leading-relaxed">
                  A premium, clean-lined system with concealed fasteners. Great for durability and
                  curb appeal.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Concealed fasteners</li>
                  <li>Excellent water-shedding</li>
                  <li>Modern, high-end look</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Exposed-fastener panels</h3>
                <p className="text-gray-700 leading-relaxed">
                  A cost-effective metal roofing option that performs well when installed correctly
                  and maintained.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Budget-friendly</li>
                  <li>Great for certain slopes and buildings</li>
                  <li>Fast installation timeline</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Metal Roofing Installation Process</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Professional metal roofing installation involves several critical steps to ensure long-lasting performance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">1. Preparation & Tear-Off</h3>
                <p className="text-gray-700 leading-relaxed">
                  Remove existing roofing materials and inspect the deck for damage. Repair or replace damaged decking to ensure a solid foundation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">2. Underlayment Installation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Install high-quality underlayment to provide an additional moisture barrier and protect against condensation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">3. Panel Installation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Secure metal panels using appropriate fasteners. Standing seam systems use concealed fasteners, while exposed-fastener systems use screws with washers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">4. Flashing & Details</h3>
                <p className="text-gray-700 leading-relaxed">
                  Install proper flashing around valleys, chimneys, skylights, and roof edges to prevent water infiltration.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-gray-700">
                <strong>Important:</strong> Metal roofing installation requires specialized knowledge and tools. Incorrect installation can lead to leaks, wind damage, and voided warranties. Always hire a licensed, experienced professional.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">How to Cut Metal Roofing</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              If you need to cut metal roofing panels, use the right tools and techniques to avoid damaging the protective coating:
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Tools for Cutting Metal Roofing</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Tin snips:</strong> Best for small cuts and trimming edges</li>
                  <li><strong>Circular saw with metal-cutting blade:</strong> For straight cuts on larger panels</li>
                  <li><strong>Nibbler:</strong> Provides precise cuts without creating sharp edges</li>
                  <li><strong>Plasma cutter:</strong> For professional installations with complex cuts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Safety Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Always wear safety glasses and cut-resistant gloves</li>
                  <li>Cut from the back side when possible to minimize chipping of the finish</li>
                  <li>Support panels properly to prevent bending during cutting</li>
                  <li>Clean up metal shavings immediately to prevent injury</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-gray-700">
                <strong>Note:</strong> Improper cutting can damage the protective coating and void warranties. For best results and to maintain warranty coverage, we recommend having a professional handle cutting and installation.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">What affects metal roofing cost?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Two metal roofs can look similar but price very differently. We price based on the
              factors that actually change performance and labor.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Roof slope and overall complexity (valleys, dormers, penetrations)</li>
              <li>Tear-off needs and decking condition</li>
              <li>Panel type (standing seam vs exposed fastener) and coating grade</li>
              <li>Ventilation upgrades and flashing work</li>
              <li>Gutters, fascia, and trim details</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Metal roofing FAQ</h2>
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
            <h2 className="text-3xl font-bold mb-4">Thinking about a metal roof?</h2>
            <p className="text-xl mb-6">
              We’ll inspect your roof, talk through options, and give you a clear estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/locations"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition inline-block"
              >
                See Service Areas
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

