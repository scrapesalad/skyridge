import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import QuoteButton from '@/components/QuoteButton';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Metal Roofing | Standing Seam Metal Roof Installation | Sky Ridge Roofing',
  description:
    'Expert metal roofing installation and metal roof replacement in Utah. Professional standing seam metal roof and metal roof installation services. Metal roofing contractors near me. Free estimates.',
  alternates: { canonical: canonicalUrl('/services/metal-roofing') },
  openGraph: {
    title: 'Metal Roofing & Standing Seam Metal Roof | Sky Ridge Roofing',
    description:
      'Professional metal roofing installation and standing seam metal roof services in Utah. Expert metal roofing contractors. Free estimates.',
    url: '/services/metal-roofing',
  },
};

export default function Page() {
  const faqs = [
    {
      q: 'How long does a metal roof last in Utah?',
      a: 'A properly installed metal roof can last for decades. Lifespan depends on panel type, coating quality, ventilation, and how well flashing details are handled at valleys, walls, and penetrations.',
    },
    {
      q: 'Is metal roofing loud in rain or hail?',
      a: 'On a typical residential installation over solid decking with underlayment, metal roofing is not dramatically louder than other systems. Insulation and attic ventilation also help.',
    },
    {
      q: 'Do you install standing seam metal roofs?',
      a: 'Yes. We install standing seam systems and can also quote exposed-fastener panels when they are a better fit. We will recommend the best option based on slope, aesthetics, and budget.',
    },
    {
      q: 'Can I install a metal roof over shingles?',
      a: 'Sometimes. It depends on roof condition, local requirements, and whether the roof can be properly prepped for a long-lasting install. We will inspect the deck, ventilation, and flashing details and recommend the safest approach.',
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
              src="/images/skyridge/scrap/metal-roofing-768x576.jpg"
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

                <div className="flex flex-col sm:flex-row gap-4">
                  <QuoteButton variant="light" className="text-lg">
                    Get Free Quote →
                  </QuoteButton>
                  <Link
                    href="/materials"
                    className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition text-lg"
                  >
                    Compare Materials
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why homeowners choose metal roofing</h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Metal roofing is a strong choice in Utah when you want a roof that holds up to snow
                load, wind, and intense UV. It can also help manage attic heat when paired with
                proper ventilation and underlayment.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-gray-700">
                <li>Long service life with quality coatings</li>
                <li>Great performance in freeze/thaw cycles</li>
                <li>Reflective options for summer heat</li>
                <li>Low-maintenance compared to many systems</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700">
                The difference is in the details: underlayment, ventilation, fasteners, and flashing
                around chimneys, skylights, valleys, and walls. That is where we focus to prevent
                leaks and premature wear.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/skyridge/scrap/metal-roofing-768x576.jpg"
                alt="Metal roofing installation in Utah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Metal Roofing Images Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Metal Roofing Options & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/stone-coated-steel-roofing-py0b531a3pw0q3pck11fbqef8yt55ywsy8pkksoxzk.jpg"
                    alt="Stone coated steel metal roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Stone Coated Steel</h3>
                  <p className="text-sm text-gray-600">Durable and attractive metal roofing option</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/shutterstock_1819028381-1920w.webp"
                    alt="Standing seam metal roof installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Standing Seam</h3>
                  <p className="text-sm text-gray-600">Premium metal roofing with concealed fasteners</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/finishing-ceramic-roof-768x512.webp"
                    alt="Metal roof finishing details"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Expert Installation</h3>
                  <p className="text-sm text-gray-600">Professional metal roof installation and finishing</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/roofing-job.jpg"
                    alt="Completed metal roofing project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Quality Results</h3>
                  <p className="text-sm text-gray-600">Beautiful, long-lasting metal roofs</p>
                </div>
              </div>
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
                  A cost-effective option that performs well when installed correctly and maintained.
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
              We will inspect your roof, talk through options, and give you a clear estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton className="bg-white text-blue-700 hover:bg-gray-100">
                Request a Free Quote
              </QuoteButton>
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

