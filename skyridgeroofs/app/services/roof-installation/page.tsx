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
  title: 'Roof Installation in Utah | Sky Ridge Roofing',
  description:
    'New roof installation in Utah with quality materials and expert workmanship. Free estimates for residential and commercial roof installation.',
  alternates: { canonical: canonicalUrl('/services/roof-installation') },
  openGraph: {
    title: 'Roof Installation in Utah - Sky Ridge Roofing',
    description:
      'New roof installation in Utah with quality materials and expert workmanship. Free estimates.',
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
          serviceType: 'Roof installation',
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
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/scrap/finishing-ceramic-roof-768x512.webp"
              alt="Roof Installation in Utah"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                  Roof Installation in Utah
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  New Roof Installation for Homes & Businesses
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
                  Get Free Quote →
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Roof Installation</h2>
              <p className="mb-4 text-lg leading-relaxed">
                If you&apos;re building a home, upgrading an older system, or replacing a roof after storm
                damage, Sky Ridge Roofing provides professional roof installation across Utah. We help you
                choose materials that match your goals and Utah&apos;s weather, then install with proven
                details for ventilation, flashing, and drainage.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                Looking for roof replacement? See our{' '}
                <Link href="/services/roof-replacement" className="text-blue-700 font-semibold hover:underline">
                  roof replacement service
                </Link>{' '}
                (installation is included).
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>New roof installation (residential and commercial)</li>
                <li>Asphalt shingles, metal roofing, and more</li>
                <li>Proper underlayment, flashing, and ventilation details</li>
                <li>Clean job sites and clear communication</li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/skyridge/scrap/roofing-job.jpg"
                alt="Professional roof installation in Utah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Roof Installation Images Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Professional Roof Installation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/landmark-series-shingles-certainteed.jpg"
                    alt="Shingle roof installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Shingle Installation</h3>
                  <p className="text-sm text-gray-600">Expert asphalt shingle roof installation</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/metal-roofing-768x576.jpg"
                    alt="Metal roof installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Metal Roof Installation</h3>
                  <p className="text-sm text-gray-600">Standing seam and metal panel installation</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/commercial-roof-installation.jpg"
                    alt="Commercial roof installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Commercial Installation</h3>
                  <p className="text-sm text-gray-600">TPO, EPDM, and commercial roofing systems</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/finishing-ceramic-roof-768x512.webp"
                    alt="Roof installation finishing details"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Quality Craftsmanship</h3>
                  <p className="text-sm text-gray-600">Attention to detail in every installation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Get a Free Roof Installation Estimate</h2>
            <p className="text-lg text-gray-700 mb-6">
              Tell us a bit about your project and we’ll follow up within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Request an Estimate
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
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

