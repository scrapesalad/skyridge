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
  title: 'Solar Installation in Utah | Sky Ridge Roofing',
  description:
    'Solar installation in Utah through trusted solar partners, coordinated by Sky Ridge Roofing. Roof + solar planning, clean installs, and a single point of contact.',
  alternates: { canonical: canonicalUrl('/services/solar') },
  openGraph: {
    title: 'Solar Installation in Utah - Sky Ridge Roofing',
    description:
      'Solar installation in Utah through trusted solar partners, coordinated by Sky Ridge Roofing. Roof + solar planning and clean installs.',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Can you install solar if I need a new roof?',
    a: 'Yes. We can coordinate roof replacement or roof installation first, then work with our solar partners to install solar on a solid, warrantable roof system.',
  },
  {
    q: 'Do you remove and reinstall solar panels for roof replacement?',
    a: 'We can coordinate solar remove-and-reinstall through our partners so the roof work and solar work are scheduled cleanly with minimal downtime.',
  },
  {
    q: 'What types of roofs can support solar in Utah?',
    a: 'Most roof types can support solar—especially asphalt shingles and metal roofing. We’ll evaluate roof condition, pitch, shading, and mounting approach during inspection.',
  },
  {
    q: 'Will solar void my roof warranty?',
    a: 'Warranty depends on the roof system and how mounting is handled. Our process focuses on proper flashing and mounting details so the roof remains protected.',
  },
] as const;

export default function Page() {
  return (
    <>
      <Header />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Solar installation',
          areaServed: 'Utah',
          provider: {
            '@type': 'LocalBusiness',
            name: BUSINESS.name,
            url: SITE_URL,
            telephone: BUSINESS.phone,
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.a,
            },
          })),
        }}
      />
      <main className="min-h-screen bg-gray-50">
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/skyridge_image_040.webp"
              alt="Solar installation in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                  Solar Installation in Utah
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Roof-first planning, coordinated solar installs, one point of contact
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
                  Get Solar Quote →
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">Solar that protects your roof</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Solar is a great investment—but only if it’s installed on a roof that’s ready for it. Sky Ridge Roofing
              coordinates solar installation through trusted solar partners so your roof details (flashing, vents, and
              penetrations) stay watertight and warrantable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              If your roof is older or has storm damage, we’ll help you decide whether to start with{' '}
              <Link href="/services/roof-repairs" className="text-blue-700 font-semibold hover:underline">
                roof repair
              </Link>{' '}
              or a full{' '}
              <Link href="/services/roof-replacement" className="text-blue-700 font-semibold hover:underline">
                roof replacement
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What you get</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li>Roof + solar assessment with clear next steps</li>
                <li>Coordinated scheduling with trusted solar partners</li>
                <li>Mounting and flashing details that prioritize leak prevention</li>
                <li>Options for battery backup and energy storage</li>
                <li>Guidance on incentives and paperwork (as applicable)</li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/skyridge/skyridge_image_006.webp"
                alt="Roof ready for solar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Our process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="font-bold text-xl mb-2">1) Roof check</div>
                <p className="text-gray-700">
                  We inspect roof condition, ventilation, and leak risk. If the roof needs attention, we recommend repairs or replacement first.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="font-bold text-xl mb-2">2) Solar planning</div>
                <p className="text-gray-700">
                  We coordinate with solar partners on layout, mounting approach, and schedule so roof penetrations stay protected.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="font-bold text-xl mb-2">3) Install + finish</div>
                <p className="text-gray-700">
                  Your solar system is installed with clean jobsite standards and final walkthrough—while keeping roof integrity front and center.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 md:p-12 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Get a roof-first solar quote</h2>
              <p className="text-lg mb-6 text-blue-100">
                Tell us what you’re trying to achieve—lower bills, backup power, or solar on a new roof—and we’ll guide the next steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Request Solar Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  View All Services
                </Link>
              </div>
              <p className="text-sm mt-4 text-blue-200">
                Prefer to call? <a className="font-semibold hover:text-white" href="tel:8012526936">801-252-6936</a>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-3xl font-bold mb-6">Solar FAQs</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="border border-gray-200 rounded-lg p-4">
                  <summary className="cursor-pointer font-semibold text-gray-900">{f.q}</summary>
                  <p className="text-gray-700 mt-2">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

