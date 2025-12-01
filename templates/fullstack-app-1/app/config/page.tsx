import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPages from '../components/RelatedPages';

export const metadata: Metadata = {
  title: 'Dumpster Rental Configuration - Icon Dumpsters | Utah',
  description: 'Configure your dumpster rental needs. Learn about dumpster sizes, service areas, and pricing for your Utah project.',
  alternates: {
    canonical: 'https://icondumpsters.com/config',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ConfigPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 via-green-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Dumpster Rental</h1>
          <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto">
            Find the perfect dumpster size and configuration for your project in Utah
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Size Calculator */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose the Right Dumpster Size</h2>
          <p className="text-gray-700 mb-6">
            Selecting the right dumpster size is crucial for your project. Use our guide to determine which size works best for your needs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/guides/dumpster-sizes" className="block p-6 bg-gradient-to-br from-purple-50 to-green-50 rounded-lg hover:shadow-md transition-all border border-purple-200">
              <h3 className="font-semibold text-teal-600 mb-2 text-lg">Dumpster Sizes Guide</h3>
              <p className="text-sm text-gray-600 mb-4">Complete overview of all available dumpster sizes and what fits in each</p>
              <span className="text-teal-600 font-semibold">View Guide →</span>
            </Link>
            <Link href="/(resources)/calculators/cost-calculator" className="block p-6 bg-gradient-to-br from-green-50 to-purple-50 rounded-lg hover:shadow-md transition-all border border-green-200">
              <h3 className="font-semibold text-success-green mb-2 text-lg">Cost Calculator</h3>
              <p className="text-sm text-gray-600 mb-4">Calculate the estimated cost for your dumpster rental project</p>
              <span className="text-success-green font-semibold">Use Calculator →</span>
            </Link>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Areas in Utah</h2>
          <p className="text-gray-700 mb-6">
            We proudly serve all major cities throughout Utah. Select your city to learn more about local services and pricing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Salt Lake City', 'West Jordan', 'Sandy', 'South Jordan', 'Murray', 'Draper',
              'Provo', 'Orem', 'Ogden', 'Layton', 'Taylorsville', 'Millcreek'
            ].map((city) => (
              <Link 
                key={city}
                href={`/dumpster-rental-${city.toLowerCase().replace(/\s+/g, '-')}-ut`}
                className="block p-3 bg-gray-50 rounded-lg hover:bg-teal-50 hover:border-purple-300 border border-gray-200 text-center transition-all"
              >
                <span className="text-sm font-medium text-gray-700">{city}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/locations" className="text-teal-600 hover:underline font-semibold">View All Service Areas →</Link>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing & Fees</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Transparent Pricing</h3>
              <p className="text-sm text-gray-700 mb-3">No hidden fees. Clear, upfront pricing for all dumpster sizes and rental periods.</p>
              <Link href="/pricing/dumpster-prices" className="text-success-green hover:underline text-sm font-semibold">View Pricing →</Link>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-teal-800 mb-2">No Hidden Fees</h3>
              <p className="text-sm text-gray-700 mb-3">What you see is what you pay. No surprise charges or unexpected fees.</p>
              <Link href="/pricing/dumpster-prices" className="text-teal-600 hover:underline text-sm font-semibold">Learn More →</Link>
            </div>
          </div>
        </div>

        {/* Guides */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Guides & Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/dumpster-rental-faq#permits" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Permit Requirements</h3>
              <p className="text-sm text-gray-600">Learn about dumpster permit requirements in Utah cities</p>
            </Link>
            <Link href="/construction-waste-management-2025" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Construction Waste Guide</h3>
              <p className="text-sm text-gray-600">Managing construction and demolition waste</p>
            </Link>
            <Link href="/dumpster-rental-faq" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Frequently Asked Questions</h3>
              <p className="text-sm text-gray-600">Common questions about dumpster rentals answered</p>
            </Link>
            <Link href="/guides/dumpster-sizes" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Choosing Dumpster Size</h3>
              <p className="text-sm text-gray-600">Expert tips for selecting the right size</p>
            </Link>
            <Link href="/home-renovation-waste-disposal-guide" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Home Renovation Guide</h3>
              <p className="text-sm text-gray-600">Waste management for home renovation projects</p>
            </Link>
            <Link href="/blog" className="block p-4 bg-gradient-to-br from-purple-50 to-green-50 rounded-lg hover:shadow-md transition-all border border-purple-200">
              <h3 className="font-semibold text-teal-600 mb-2">Visit Our Blog</h3>
              <p className="text-sm text-gray-600">Read expert tips and insights about waste management</p>
            </Link>
          </div>
        </div>

        {/* Related Pages */}
        <RelatedPages pageType="general" />

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-xl shadow-lg p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Order Your Dumpster?</h2>
          <p className="text-lg mb-6 text-purple-50">Get same-day delivery and competitive pricing today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/#quote-form" 
              className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold"
            >
              Get Free Quote
            </Link>
            <a 
              href="tel:801-918-6000" 
              className="bg-teal-700 text-white px-8 py-3 rounded-lg hover:bg-teal-800 transition-colors font-semibold"
            >
              Call (801) 918-6000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
