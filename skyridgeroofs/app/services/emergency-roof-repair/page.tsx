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
  title: 'Emergency Roof Repair in Utah | Sky Ridge Roofing',
  description:
    'Emergency roof repair in Utah for active leaks and storm damage. Fast response, temporary protection, and permanent repairs.',
  alternates: { canonical: canonicalUrl('/services/emergency-roof-repair') },
  openGraph: {
    title: 'Emergency Roof Repair in Utah - Sky Ridge Roofing',
    description: 'Emergency roof repair in Utah for active leaks and storm damage. Fast response.',
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
          serviceType: 'Emergency roof repair',
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
              src="/images/skyridge/scrap/hail-damage.jpeg"
              alt="Emergency roof repair in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  Emergency Roof Repair in Utah
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Active leak help, storm damage tarps, and fast repairs
                </p>
                <div className="flex items-center space-x-3 mb-8">
                  <svg className="w-8 h-8 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm text-blue-200">Call Now</p>
                    <a href="tel:8012526936" className="text-3xl md:text-4xl font-bold hover:text-primary-light transition">
                      801-252-6936
                    </a>
                  </div>
                </div>
                <QuoteButton variant="light" className="text-lg">
                  Request Help
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What to do during a leak</h2>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>Place a bucket under the leak and move valuables away.</li>
                <li>Take photos of the leak and any ceiling stains.</li>
                <li>If safe, check the attic for the general leak area.</li>
                <li>Call us for emergency roof repair to prevent further damage.</li>
              </ul>
              <p className="text-lg leading-relaxed">
                For non-emergency issues, our standard{' '}
                <Link href="/services/roof-repairs" className="text-blue-700 font-semibold hover:underline">
                  roof repair service
                </Link>{' '}
                is a great fit.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/skyridge/scrap/hail-damage.jpeg"
                alt="Emergency roof repair for storm damage"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Emergency Repair Images Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Emergency Roof Repair Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/flashing-1.jpeg"
                    alt="Emergency flashing repair"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Leak Repair</h3>
                  <p className="text-sm text-gray-600">Fast response to active roof leaks</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/replace-rotted-roof-decking-r9s0s1ll2umws3di4jscahu9s54iilxkq8ir4t3ads.jpg"
                    alt="Emergency roof decking repair"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Storm Damage</h3>
                  <p className="text-sm text-gray-600">Immediate protection from storm damage</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/nails-1.jpeg"
                    alt="Emergency shingle replacement"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Temporary Protection</h3>
                  <p className="text-sm text-gray-600">Tarps and temporary fixes to prevent further damage</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/RoofCricketConstruction4.webp"
                    alt="Emergency roof structure repair"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">24/7 Service</h3>
                  <p className="text-sm text-gray-600">Available around the clock for emergencies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Storm damage?</h2>
            <p className="text-lg text-gray-700 mb-6">
              If hail or wind caused the issue, we can document damage for an insurance claim and help you understand the next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/insurance-claims"
                className="inline-flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Insurance Claims Help
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

