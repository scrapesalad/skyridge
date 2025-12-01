import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../../components/hero';

export const metadata: Metadata = {
  title: "Commercial Dumpster Rentals for Business Projects | Icon...",
  description: "Professional commercial dumpster rentals for office renovations, retail cleanouts, restaurant projects, and industrial waste removal. Same-day delivery and...",
  keywords: "commercial dumpster rental, business dumpster rental, office renovation dumpster, retail cleanout dumpster, restaurant renovation dumpster, industrial waste removal",
  openGraph: {
    title: "Commercial Dumpster Rentals for Business Projects | Icon...",
    description: "Professional commercial dumpster rentals for office renovations, retail cleanouts, restaurant projects, and industrial waste removal. Same-day delivery and...",
    url: '/dumpster-rental/business',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Commercial Dumpster Rentals for Business Projects - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Commercial Dumpster Rentals for Business Projects | Icon Dumpsters",
    description: "Professional commercial dumpster rentals for office renovations, retail cleanouts, restaurant projects, and industrial waste removal.",
    images: ['/images/ca97086c-729c-480f-a90d-d117c1278945.webp'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental/business',
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

export default function CommercialDumpsterRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Commercial Services */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏢 Business Project Services</h2>
            <ul className="space-y-4 text-lg text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-teal-600 mr-3">✓</span>
                <div>
                  <strong>Office Renovations</strong>
                  <p className="text-sm text-gray-600 mt-1">Modernize workspaces, update interiors, and improve functionality</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3">✓</span>
                <div>
                  <strong>Retail Store Cleanouts</strong>
                  <p className="text-sm text-gray-600 mt-1">Clear out old inventory, fixtures, and store renovations</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3">✓</span>
                <div>
                  <strong>Restaurant Renovations</strong>
                  <p className="text-sm text-gray-600 mt-1">Kitchen updates, dining room remodels, and equipment removal</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3">✓</span>
                <div>
                  <strong>Industrial Waste Removal</strong>
                  <p className="text-sm text-gray-600 mt-1">Manufacturing debris, equipment disposal, and facility cleanouts</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3">✓</span>
                <div>
                  <strong>Event Cleanup</strong>
                  <p className="text-sm text-gray-600 mt-1">Post-event waste removal for conferences, trade shows, and festivals</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3">✓</span>
                <div>
                  <strong>Warehouse Cleanouts</strong>
                  <p className="text-sm text-gray-600 mt-1">Clear out old inventory, equipment, and accumulated debris</p>
                </div>
              </li>
            </ul>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Why Choose Us for Business Projects?</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Professional service for business environments</li>
                <li>• Flexible scheduling to minimize business disruption</li>
                <li>• Volume discounts for ongoing projects</li>
                <li>• Same-day delivery available</li>
                <li>• Proper waste disposal and documentation</li>
                <li>• Experienced with commercial projects</li>
              </ul>
            </div>
          </div>

          {/* Dumpster Sizes & Pricing */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">📏 Commercial Dumpster Solutions</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900">20 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-2">Perfect for small office renovations</p>
                  <div className="text-2xl font-bold text-teal-600">$349</div>
                  <p className="text-sm text-gray-500">Holds about 4-5 pickup truck loads</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900">30 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-2">Ideal for retail and restaurant projects</p>
                  <div className="text-2xl font-bold text-teal-600">$449</div>
                  <p className="text-sm text-gray-500">Holds about 6-7 pickup truck loads</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900">40 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-2">For large commercial projects</p>
                  <div className="text-2xl font-bold text-teal-600">$549</div>
                  <p className="text-sm text-gray-500">Holds about 8-10 pickup truck loads</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-trust-blue-dark text-sm">
                  <strong>💼 Business Benefits:</strong> Volume discounts available for multiple dumpsters or ongoing projects. 
                  Contact us for custom pricing!
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Business Project?</h3>
              <p className="mb-6">Get a free quote and professional service for your commercial dumpster rental.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:801-918-6000"
                  className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://icondumpsters.com/#quote-form"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Business Benefits Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Business Benefits</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Minimal Disruption</h3>
              <p className="text-gray-600">Flexible scheduling to work around your business hours and minimize downtime.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600">Competitive pricing with volume discounts for larger projects and ongoing needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proper Documentation</h3>
              <p className="text-gray-600">Complete waste disposal documentation for compliance and record-keeping.</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Commercial Project Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Assessment</h3>
              <p className="text-gray-600">We'll assess your project scope and recommend the best dumpster solution.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Delivery</h3>
              <p className="text-gray-600">Delivery scheduled to minimize disruption to your business operations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Support</h3>
              <p className="text-gray-600">Ongoing support throughout your project with additional services as needed.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Removal</h3>
              <p className="text-gray-600">Prompt pickup when you're ready, leaving your site clean and ready for business.</p>
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
              Get Your Commercial Dumpster Quote
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about your business project and we'll provide a custom quote with the perfect dumpster solution.
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                Business Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              >
                <option value="">Select your project type</option>
                <option value="office-renovation">Office Renovation</option>
                <option value="retail-cleanout">Retail Store Cleanout</option>
                <option value="restaurant-renovation">Restaurant Renovation</option>
                <option value="industrial-waste">Industrial Waste Removal</option>
                <option value="event-cleanup">Event Cleanup</option>
                <option value="warehouse-cleanout">Warehouse Cleanout</option>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Tell us about your business project, timeline, and any specific requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors"
            >
              Get Free Commercial Quote
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
