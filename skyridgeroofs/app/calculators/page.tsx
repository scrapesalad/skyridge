import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Roofing Calculators | Sky Ridge Roofing',
  description: 'Free roofing calculators to help estimate costs, materials, measurements, and more for your roofing project.',
  alternates: { canonical: canonicalUrl('/calculators') },
  openGraph: {
    title: 'Roofing Calculators - Sky Ridge Roofing',
    description: 'Free roofing calculators for your roofing project.',
    type: 'website',
  },
};

const calculators = [
  {
    id: 'roofing-cost',
    title: 'Roofing Cost Calculator',
    description: 'Estimate the total cost of your roofing project based on square footage, material type, and roof pitch.',
    href: '/calculators/roofing-cost',
    color: 'bg-blue-500',
  },
  {
    id: 'shingle',
    title: 'Shingle Calculator',
    description: 'Calculate how many shingles you need for your roof based on square footage and shingle type.',
    href: '/calculators/shingle',
    color: 'bg-green-500',
  },
  {
    id: 'roof-pitch',
    title: 'Roof Pitch Calculator',
    description: 'Determine your roof pitch from rise and run measurements, or convert between different pitch formats.',
    href: '/calculators/roof-pitch',
    color: 'bg-purple-500',
  },
  {
    id: 'roofing-material',
    title: 'Roofing Material Calculator',
    description: 'Calculate bundles, rolls, and other materials needed for your roofing project.',
    href: '/calculators/roofing-material',
    color: 'bg-orange-500',
  },
  {
    id: 'gutter-size',
    title: 'Gutter Size Calculator',
    description: 'Determine the correct gutter size for your roof based on roof area and rainfall intensity.',
    href: '/calculators/gutter-size',
    color: 'bg-teal-500',
  },
  {
    id: 'square-footage',
    title: 'Roof Square Footage Calculator',
    description: 'Calculate your roof\'s total square footage from length, width, and pitch measurements.',
    href: '/calculators/square-footage',
    color: 'bg-indigo-500',
  },
  {
    id: 'roofing-square',
    title: 'Roofing Square Calculator',
    description: 'Convert between square feet, roofing squares, and other measurement units.',
    href: '/calculators/roofing-square',
    color: 'bg-pink-500',
  },
  {
    id: 'ventilation',
    title: 'Roof Ventilation Calculator',
    description: 'Calculate the proper ventilation requirements for your attic and roof system.',
    href: '/calculators/ventilation',
    color: 'bg-cyan-500',
  },
  {
    id: 'replacement-cost',
    title: 'Roof Replacement Cost Calculator',
    description: 'Get a detailed estimate for complete roof replacement including materials and labor.',
    href: '/calculators/replacement-cost',
    color: 'bg-red-500',
  },
  {
    id: 'labor-cost',
    title: 'Roofing Labor Cost Calculator',
    description: 'Estimate labor costs for your roofing project based on complexity and square footage.',
    href: '/calculators/labor-cost',
    color: 'bg-yellow-500',
  },
  {
    id: 'warranty',
    title: 'Roofing Warranty Calculator',
    description: 'Calculate warranty coverage and estimate remaining warranty period for your roof.',
    href: '/calculators/warranty',
    color: 'bg-emerald-500',
  },
  {
    id: 'insulation',
    title: 'Roof Insulation Calculator',
    description: 'Calculate the proper insulation R-value and material needed for your roof.',
    href: '/calculators/insulation',
    color: 'bg-amber-500',
  },
];

export default function CalculatorsPage() {
  const faqs = [
    {
      q: 'Are these roofing calculator results accurate?',
      a: 'They’re designed to give a quick ballpark estimate. Real-world pricing depends on roof complexity, tear-off needs, ventilation, flashing, decking condition, and current material rates. For an accurate quote, request a free inspection.',
    },
    {
      q: 'What measurements do I need?',
      a: 'For most estimates, you’ll want the home footprint (length and width) and a rough pitch. If you don’t know pitch, use the Roof Pitch Calculator first.',
    },
    {
      q: 'Do you help with insurance claims?',
      a: 'Yes. If you’ve had storm damage, we can document the roof condition and help guide you through the insurance process from inspection to completion.',
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
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }}
        />
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-5xl font-bold mb-4">Roofing Calculators</h1>
            <p className="text-xl text-blue-100">
              Free tools to help you plan and estimate your roofing project
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="container mx-auto px-4 py-10 max-w-6xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Quick estimates, clear next steps</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              These tools are built for homeowners who want a fast starting point—whether you’re
              comparing materials, checking measurements, or planning a replacement timeline. They’re
              especially helpful when you’re gathering info before calling for an estimate.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you’re in Utah and you’d like a professional inspection, we’re happy to help. We’ll
              verify measurements, inspect flashing and ventilation, and provide a clear written
              quote—no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Calculators Grid */}
        <section className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calculator) => {
              return (
                <Link
                  key={calculator.id}
                  href={calculator.href}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200 hover:border-primary/50 group"
                >
                  <div className={`${calculator.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {calculator.title}
                  </h3>
                  <p className="text-gray-600">{calculator.description}</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 pb-12 max-w-6xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
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
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-12">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">Need Professional Help?</h2>
            <p className="text-xl mb-6 text-blue-100">
              These calculators provide estimates. For accurate quotes, contact our roofing experts.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

