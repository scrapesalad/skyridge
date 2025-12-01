import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPages from '../components/RelatedPages';

export const metadata: Metadata = {
  title: 'Website Components - Icon Dumpsters | Utah Dumpster Rental',
  description: 'Icon Dumpsters provides reliable dumpster rental services throughout Utah. Same-day delivery, competitive pricing, and excellent customer service.',
  alternates: {
    canonical: 'https://icondumpsters.com/components',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 via-green-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dumpster Rental Services in Utah</h1>
          <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto">
            Professional, reliable, and affordable dumpster rental services for residential and commercial projects throughout Utah.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/#quote-form" 
              className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/services" 
              className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-purple-400 transition-colors font-semibold"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Dumpster Rental Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-teal-600 mb-2">Residential Dumpster Rental</h3>
              <p className="text-sm text-gray-600">Perfect for home renovations, cleanouts, and DIY projects</p>
              <Link href="/services/residential-dumpster-rental" className="text-teal-600 hover:underline text-sm mt-2 inline-block">Learn More →</Link>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-teal-600 mb-2">Commercial Dumpster Rental</h3>
              <p className="text-sm text-gray-600">Business waste management solutions for offices, retail, and construction</p>
              <Link href="/services/commercial-dumpster-rental" className="text-teal-600 hover:underline text-sm mt-2 inline-block">Learn More →</Link>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-teal-600 mb-2">Construction Waste Management</h3>
              <p className="text-sm text-gray-600">Comprehensive waste disposal for construction and demolition projects</p>
              <Link href="/services/construction-dumpster-rental" className="text-teal-600 hover:underline text-sm mt-2 inline-block">Learn More →</Link>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-teal-600 mb-2">Junk Removal</h3>
              <p className="text-sm text-gray-600">Fast and efficient junk removal services throughout Utah</p>
              <Link href="/services/residential-dumpster-rental" className="text-teal-600 hover:underline text-sm mt-2 inline-block">Learn More →</Link>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-teal-600 mb-2">Same-Day Delivery</h3>
              <p className="text-sm text-gray-600">Get your dumpster delivered the same day you order</p>
              <Link href="/#quote-form" className="text-teal-600 hover:underline text-sm mt-2 inline-block">Learn More →</Link>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-teal-600 mb-2">Roll-Off Dumpster Rental</h3>
              <p className="text-sm text-gray-600">Versatile roll-off containers for projects of any size</p>
              <Link href="/services" className="text-teal-600 hover:underline text-sm mt-2 inline-block">Learn More →</Link>
            </div>
          </div>
        </div>

        {/* Dumpster Sizes */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Dumpster Sizes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/15-yard-dumpster-rental" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
              <h3 className="font-semibold text-gray-900 mb-2">15 Yard</h3>
              <p className="text-sm text-gray-600">Perfect for small renovations and cleanouts</p>
            </Link>
            <Link href="/20-yard-dumpster-rental" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
              <h3 className="font-semibold text-gray-900 mb-2">20 Yard</h3>
              <p className="text-sm text-gray-600">Ideal for large home projects</p>
            </Link>
            <Link href="/30-yard-dumpster-rental" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
              <h3 className="font-semibold text-gray-900 mb-2">30 Yard</h3>
              <p className="text-sm text-gray-600">Best for major renovations</p>
            </Link>
            <Link href="/40-yard-dumpster-rental" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
              <h3 className="font-semibold text-gray-900 mb-2">40 Yard</h3>
              <p className="text-sm text-gray-600">Extra large for commercial projects</p>
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link href="/guides/dumpster-sizes" className="text-teal-600 hover:underline font-semibold">View Complete Dumpster Sizes Guide →</Link>
          </div>
        </div>

        {/* Related Pages */}
        <RelatedPages pageType="general" />

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-xl shadow-lg p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 text-purple-50">Contact us today for a free quote on your dumpster rental</p>
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
