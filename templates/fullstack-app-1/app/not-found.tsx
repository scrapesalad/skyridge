import Link from 'next/link';
import RelatedPages from './components/RelatedPages';

export const metadata = {
  title: 'Page Not Found - Icon Dumpsters | Utah Dumpster Rental',
  description: 'The page you\'re looking for doesn\'t exist. Browse our dumpster rental services, guides, and resources for Utah.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 via-green-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or may have been moved. But don't worry - we have plenty of helpful resources for your dumpster rental needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/" 
              className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold"
            >
              Go to Homepage
            </Link>
            <Link 
              href="/services" 
              className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-purple-400 transition-colors font-semibold"
            >
              View Services
            </Link>
            <Link 
              href="/#quote-form" 
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-400 transition-colors font-semibold"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Pages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/services" className="block p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
              <h3 className="font-semibold text-teal-600 mb-2">Our Services</h3>
              <p className="text-sm text-gray-600">Residential and commercial dumpster rental services throughout Utah</p>
            </Link>
            <Link href="/guides/dumpster-sizes" className="block p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
              <h3 className="font-semibold text-teal-600 mb-2">Dumpster Sizes</h3>
              <p className="text-sm text-gray-600">15, 20, 30, and 40-yard dumpster options available</p>
            </Link>
            <Link href="/locations" className="block p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
              <h3 className="font-semibold text-teal-600 mb-2">Service Areas</h3>
              <p className="text-sm text-gray-600">We serve all major cities in Utah including Salt Lake City, Provo, Ogden</p>
            </Link>
            <Link href="/pricing/dumpster-prices" className="block p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
              <h3 className="font-semibold text-teal-600 mb-2">Pricing</h3>
              <p className="text-sm text-gray-600">Transparent pricing with no hidden fees</p>
            </Link>
            <Link href="/dumpster-rental-faq" className="block p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
              <h3 className="font-semibold text-teal-600 mb-2">FAQ</h3>
              <p className="text-sm text-gray-600">Common questions about dumpster rentals</p>
            </Link>
            <Link href="/contact" className="block p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
              <h3 className="font-semibold text-teal-600 mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600">Get in touch with our team at (801) 918-6000</p>
            </Link>
          </div>
        </div>

        {/* Guides Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/dumpster-rental-faq#permits" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Utah Dumpster Permits Guide</h3>
              <p className="text-sm text-gray-600">Learn about permit requirements in different Utah cities</p>
            </Link>
            <Link href="/construction-waste-management-2025" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Construction Waste Management Guide</h3>
              <p className="text-sm text-gray-600">Complete guide to managing construction waste</p>
            </Link>
            <Link href="/home-renovation-waste-disposal-guide" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Home Renovation Waste Disposal</h3>
              <p className="text-sm text-gray-600">Tips for managing waste during home renovations</p>
            </Link>
            <Link href="/guides/dumpster-sizes" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">How to Choose Dumpster Size</h3>
              <p className="text-sm text-gray-600">Expert tips for selecting the right dumpster size</p>
            </Link>
            <Link href="/dumpster-rental-guide-2025" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Complete Dumpster Rental Guide</h3>
              <p className="text-sm text-gray-600">Everything you need to know about dumpster rentals</p>
            </Link>
            <Link href="/pricing/dumpster-prices" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Dumpster Rental Costs</h3>
              <p className="text-sm text-gray-600">Understanding pricing and fees</p>
            </Link>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Blog Posts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog" className="block p-4 bg-gradient-to-br from-purple-50 to-green-50 rounded-lg hover:shadow-md transition-all border border-purple-100">
              <h3 className="font-semibold text-teal-600 mb-2">Visit Our Blog</h3>
              <p className="text-sm text-gray-600">Read expert tips, guides, and insights about waste management and dumpster rentals</p>
            </Link>
            <Link href="/blog/15-winter-home-improvement-projects-you-can-actually-do-this-season" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Winter Home Improvement Projects</h3>
              <p className="text-sm text-gray-600">15 winter projects you can tackle this season</p>
            </Link>
            <Link href="/guides/dumpster-sizes" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Dumpster Size Guide</h3>
              <p className="text-sm text-gray-600">How to choose the right dumpster for your project</p>
            </Link>
            <Link href="/dumpster-rental-faq#permits" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Utah Dumpster Permits</h3>
              <p className="text-sm text-gray-600">Everything about permits in Utah cities</p>
            </Link>
          </div>
        </div>

        {/* Related Pages Component */}
        <RelatedPages pageType="general" />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Dumpster Right Away?</h2>
          <p className="text-lg mb-6 text-purple-50">Get same-day delivery and competitive pricing</p>
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
  )
}
