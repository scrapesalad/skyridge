export const dynamic = 'force-static';

﻿import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "{{PRIMARY_SERVICE}} in {{SERVICE_AREA}} | {{BUSINESS_NAME}}",
  description: "{{HOME_PAGE_DESCRIPTION}}",
  keywords: ['{{PRIMARY_SERVICE}}', '{{SERVICE_AREA}}', '{{BUSINESS_NAME}}'],
  alternates: { canonical: '{{WEBSITE_URL}}' },
  openGraph: {
    locale: 'en_US',
    siteName: '{{BUSINESS_NAME}}',
    title: '{{PRIMARY_SERVICE}} in {{SERVICE_AREA}} | {{BUSINESS_NAME}}',
    description: '{{HOME_PAGE_DESCRIPTION}}',
    url: '{{WEBSITE_URL}}',
    images: [{ url: '/images/hero-image.jpg', width: 1200, height: 630, alt: '{{PRIMARY_SERVICE}} in {{SERVICE_AREA}}' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <header className="relative z-10">
        <Hero />
      </header>

      {/* Services Section */}
      <section className="relative z-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our {{PRIMARY_SERVICE}} Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {{BUSINESS_NAME}} provides professional {{PRIMARY_SERVICE}} in {{SERVICE_AREA}}. Quality service, competitive pricing, guaranteed results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{{SERVICE_1}}</h3>
              <p className="text-gray-600">Professional {{SERVICE_1}} services with quality workmanship and competitive pricing.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{{SERVICE_2}}</h3>
              <p className="text-gray-600">Professional {{SERVICE_2}} services with quality workmanship and competitive pricing.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{{SERVICE_3}}</h3>
              <p className="text-gray-600">Professional {{SERVICE_3}} services with quality workmanship and competitive pricing.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{{SERVICE_4}}</h3>
              <p className="text-gray-600">Professional {{SERVICE_4}} services with quality workmanship and competitive pricing.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{{SERVICE_5}}</h3>
              <p className="text-gray-600">Professional {{SERVICE_5}} services with quality workmanship and competitive pricing.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{{SERVICE_6}}</h3>
              <p className="text-gray-600">Professional {{SERVICE_6}} services with quality workmanship and competitive pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About {{BUSINESS_NAME}}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {{BUSINESS_DESCRIPTION}}
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We've been serving {{SERVICE_AREA}} since {{YEAR_STARTED}}, providing exceptional {{PRIMARY_SERVICE}} with a focus on quality, reliability, and customer satisfaction.
              </p>
              <a 
                href="/about"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg"
              >
                Learn More About Us
              </a>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-image.jpg"
                  alt="{{PRIMARY_SERVICE}} in {{SERVICE_AREA}}"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose {{BUSINESS_NAME}}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Workmanship</h3>
              <p className="text-gray-600">We deliver exceptional results on every project.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Fair, transparent pricing with no hidden fees.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600">Dependable scheduling and professional service.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">Deep knowledge of {{SERVICE_AREA}} and local needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Contact {{BUSINESS_NAME}} today for {{PRIMARY_SERVICE}} in {{SERVICE_AREA}}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg"
            >
              {{ctaLabel}}
            </a>
            <a 
              href="{{phoneLink}}"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Call {{PHONE}}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
