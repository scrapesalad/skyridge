import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Service Areas | Sky Ridge Roofing - Serving Utah',
  description: 'Sky Ridge Roofing provides expert roofing services throughout Utah. Find your city and get a free estimate today.',
  alternates: { canonical: canonicalUrl('/locations') },
  openGraph: {
    title: 'Service Areas - Sky Ridge Roofing',
    description: 'Sky Ridge Roofing provides expert roofing services throughout Utah.',
    type: 'website',
  },
};

const serviceAreas = [
  { name: 'Salt Lake City', slug: 'salt-lake-city', zipCodes: ['84101', '84102', '84103', '84104', '84105'] },
  { name: 'Provo', slug: 'provo', zipCodes: ['84601', '84602', '84603', '84604', '84605'] },
  { name: 'Ogden', slug: 'ogden', zipCodes: ['84401', '84402', '84403', '84404'] },
  { name: 'West Valley City', slug: 'west-valley-city', zipCodes: ['84119', '84120', '84128'] },
  { name: 'Sandy', slug: 'sandy', zipCodes: ['84070', '84092', '84093', '84094'] },
  { name: 'Orem', slug: 'orem', zipCodes: ['84057', '84058', '84059', '84097'] },
  { name: 'Layton', slug: 'layton', zipCodes: ['84040', '84041'] },
  { name: 'Taylorsville', slug: 'taylorsville', zipCodes: ['84118', '84123', '84129'] },
  { name: 'St. George', slug: 'st-george', zipCodes: ['84770', '84790', '84791'] },
  { name: 'Logan', slug: 'logan', zipCodes: ['84321', '84322', '84323', '84341'] },
  { name: 'Beaver Mountain', slug: 'beaver-mountain', zipCodes: ['84321', '84341', '84318', '84335', '84319', '84332', '84339', '84333', '84320'] },
];

export default function Page() {
  const faqs = [
    {
      q: 'Do you offer free inspections in Utah?',
      a: 'Yes. We can inspect your roof, explain what we’re seeing, and provide a clear estimate.',
    },
    {
      q: 'How fast can you respond after storm damage?',
      a: 'If you suspect hail or wind damage, contact us as soon as possible. We’ll prioritize time-sensitive inspections and help document damage for insurance when needed.',
    },
    {
      q: 'What if my city is not listed?',
      a: 'Reach out anyway—our service area continues to grow and we often serve nearby communities.',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
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
        <section className="relative h-96 mb-12">
          <Image
            src="/images/skyridge/skyridge_image_022.webp"
            alt="Service Areas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Service Areas</h1>
              <p className="text-xl drop-shadow-lg">Expert Roofing Services Throughout Utah</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">We Serve All of Utah</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sky Ridge Roofing provides professional roofing services throughout Utah. Whether you're in Salt Lake City, Provo, Ogden, or any surrounding area, we're here to help with all your roofing needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">Local roofing help, without the runaround</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Utah weather can be tough on roofs—snow load, freeze/thaw cycles, high winds, and summer
              UV all add up. Our team focuses on practical recommendations and straightforward
              communication, so you know what’s urgent, what can wait, and what options fit your
              budget.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Need help with a claim? We can document storm damage and walk you through the next
              steps with your insurer.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceAreas.map((area) => (
              <div key={area.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/skyridge_image_005.webp"
                    alt={`Roofing services in ${area.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{area.name}</h3>
                  <p className="text-gray-600 mb-4">Serving ZIP codes: {area.zipCodes.join(', ')}</p>
                  <Link 
                    href={`/locations/${area.slug}`}
                    className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Service area FAQ</h2>
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

          {/* CTA Section */}
          <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your City?</h2>
            <p className="text-xl mb-6">We serve many more areas throughout Utah. Contact us to see if we service your location.</p>
            <Link href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
              Contact Us Today
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

