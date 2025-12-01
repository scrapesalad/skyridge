import type { Metadata } from "next";
import Hero from "./components/hero";

export const metadata: Metadata = {
  title: "{{siteTitle}}",
  description: "{{metaDescription}}",
  keywords: "{{metaKeywords}}",
  alternates: { canonical: '{{siteUrl}}/' },
  openGraph: {
    locale: 'en_US',
    siteName: '{{siteTitle}}',
    title: '{{siteTitle}}',
    description: '{{metaDescription}}',
    url: '{{siteUrl}}/',
    images: [{ url: '{{heroImage}}', width: 1200, height: 630, alt: '{{siteTitle}}' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden">
      {/* Hero Section */}
      <header className="relative z-10">
        <Hero />
      </header>

      {/* Features Section */}
      <section className="relative z-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Feature One</h3>
              <p className="text-gray-600">
                Description of your first key feature or benefit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Feature Two</h3>
              <p className="text-gray-600">
                Description of your second key feature or benefit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Feature Three</h3>
              <p className="text-gray-600">
                Description of your third key feature or benefit.
              </p>
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
            Contact us today to learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg"
            >
              {{ctaLabel}}
            </a>
            <a 
              href="{{phoneLink}}"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Call {{phoneNumber}}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

