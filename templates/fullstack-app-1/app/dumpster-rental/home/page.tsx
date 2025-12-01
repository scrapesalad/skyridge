import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../../components/hero';

export const metadata: Metadata = {
  title: "Residential Dumpster Rentals for Home Projects | Icon...",
  description: "Professional residential dumpster rentals for home renovations, cleanouts, and yard projects. Same-day delivery, competitive pricing, and excellent customer...",
  keywords: "residential dumpster rental, home dumpster rental, house renovation dumpster, basement cleanout dumpster, yard waste removal, estate cleanout dumpster",
  openGraph: {
    title: "Residential Dumpster Rentals for Home Projects | Icon...",
    description: "Professional residential dumpster rentals for home renovations, cleanouts, and yard projects. Same-day delivery, competitive pricing, and excellent customer...",
    url: '/dumpster-rental/home',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Residential Dumpster Rentals for Home Projects - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Residential Dumpster Rentals for Home Projects | Icon Dumpsters",
    description: "Professional residential dumpster rentals for home renovations, cleanouts, and yard projects.",
    images: ['/images/ca97086c-729c-480f-a90d-d117c1278945.webp'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental/home',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ResidentialDumpsterRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Residential Services */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏠 Home Project Services</h2>
            <ul className="space-y-4 text-lg text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-trust-blue mr-3">✓</span>
                <div>
                  <strong>Home Renovations & Remodeling</strong>
                  <p className="text-sm text-gray-600 mt-1">Kitchen, bathroom, basement, and whole-house renovations</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-trust-blue mr-3">✓</span>
                <div>
                  <strong>Basement & Garage Cleanouts</strong>
                  <p className="text-sm text-gray-600 mt-1">Remove years of accumulated items and debris</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-trust-blue mr-3">✓</span>
                <div>
                  <strong>Yard Waste Removal</strong>
                  <p className="text-sm text-gray-600 mt-1">Landscaping debris, tree trimmings, and garden waste</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-trust-blue mr-3">✓</span>
                <div>
                  <strong>Estate Cleanouts</strong>
                  <p className="text-sm text-gray-600 mt-1">Compassionate service for estate and moving cleanouts</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-trust-blue mr-3">✓</span>
                <div>
                  <strong>Spring Cleaning Projects</strong>
                  <p className="text-sm text-gray-600 mt-1">Annual cleanouts and organization projects</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-trust-blue mr-3">✓</span>
                <div>
                  <strong>Moving & Relocation</strong>
                  <p className="text-sm text-gray-600 mt-1">Clean out unwanted items before moving</p>
                </div>
              </li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Why Choose Us for Home Projects?</h3>
              <ul className="text-trust-blue-dark space-y-2">
                <li>• Flexible scheduling to fit your timeline</li>
                <li>• No long-term commitments</li>
                <li>• Competitive pricing for homeowners</li>
                <li>• Same-day delivery available</li>
                <li>• Professional and courteous service</li>
              </ul>
            </div>
          </div>

          {/* Dumpster Sizes & Pricing */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">📏 Perfect Sizes for Home Projects</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900">15 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-2">Perfect for small projects</p>
                  <div className="text-2xl font-bold text-trust-blue">$299</div>
                  <p className="text-sm text-gray-500">Holds about 3-4 pickup truck loads</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900">20 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-2">Most popular for home projects</p>
                  <div className="text-2xl font-bold text-trust-blue">$349</div>
                  <p className="text-sm text-gray-500">Holds about 4-5 pickup truck loads</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900">30 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-2">For large renovations</p>
                  <div className="text-2xl font-bold text-trust-blue">$449</div>
                  <p className="text-sm text-gray-500">Holds about 6-7 pickup truck loads</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <p className="text-teal-800 text-sm">
                  <strong>💡 Tip:</strong> Most home projects work perfectly with a 20-yard dumpster. 
                  When in doubt, our team can help you choose the right size!
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Home Project?</h3>
              <p className="mb-6">Get a free quote and same-day delivery for your residential dumpster rental.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:801-918-6000"
                  className="bg-white text-trust-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://icondumpsters.com/#quote-form"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-trust-blue transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-trust-blue">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call or Get Quote</h3>
              <p className="text-gray-600">Tell us about your project and we'll recommend the perfect dumpster size.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-trust-blue">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Delivery</h3>
              <p className="text-gray-600">Choose your preferred delivery date and time that works for you.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-trust-blue">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fill & Call</h3>
              <p className="text-gray-600">Fill your dumpster at your own pace, then call when you're ready for pickup.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-trust-blue">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We Pick Up</h3>
              <p className="text-gray-600">We'll pick up your filled dumpster and dispose of everything properly.</p>
            </div>
          </div>
        </div>

        {/* Back to Main Services */}
        <div className="mt-12 text-center">
          <Link
            href="https://icondumpsters.com/dumpster-rental"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
          >
            ← Back to All Dumpster Rental Services
          </Link>
        </div>
      </div>

      {/* Quote Form */}
      <section id="quote-form" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Residential Dumpster Quote
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about your home project and we'll provide a custom quote with the perfect dumpster size.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                Home Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              >
                <option value="">Select your project type</option>
                <option value="renovation">Home Renovation</option>
                <option value="cleanout">Basement/Garage Cleanout</option>
                <option value="yard">Yard Waste Removal</option>
                <option value="estate">Estate Cleanout</option>
                <option value="spring-cleaning">Spring Cleaning</option>
                <option value="moving">Moving/Relocation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Tell us about your home project, timeline, and any specific requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-trust-blue text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-trust-blue-dark transition-colors"
            >
              Get Free Residential Quote
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
