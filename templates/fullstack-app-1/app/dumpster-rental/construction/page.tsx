import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../../components/hero';

export const metadata: Metadata = {
  title: "Construction Dumpster Rentals for Building Projects |",
  description: "Heavy-duty construction dumpster rentals for new construction, demolition, roofing, and large-scale renovation projects. Multiple sizes available with",
  keywords: "construction dumpster rental, demolition dumpster, new construction dumpster, roofing project dumpster, concrete removal dumpster, large scale renovation dumpster",
  openGraph: {
    title: "Construction Dumpster Rentals for Building Projects |",
    description: "Heavy-duty construction dumpster rentals for new construction, demolition, roofing, and large-scale renovation projects. Multiple sizes available with",
    url: '/dumpster-rental/construction',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Construction Dumpster Rentals for Building Projects - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Construction Dumpster Rentals for Building Projects | Icon Dumpsters",
    description: "Heavy-duty construction dumpster rentals for new construction, demolition, roofing, and large-scale renovation projects. Multiple sizes available with",
    images: ['/images/ca97086c-729c-480f-a90d-d117c1278945.webp'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental/construction',
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

export default function ConstructionDumpsterRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Construction Services */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🚧 Construction Project Services</h2>
            <ul className="space-y-4 text-lg text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-action-orange mr-3">✓</span>
                <div>
                  <strong>New Construction</strong>
                  <p className="text-sm text-gray-600 mt-1">Foundation work, framing debris, and construction materials</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-action-orange mr-3">✓</span>
                <div>
                  <strong>Demolition Projects</strong>
                  <p className="text-sm text-gray-600 mt-1">Building teardowns, interior demolition, and structural removal</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-action-orange mr-3">✓</span>
                <div>
                  <strong>Roofing Projects</strong>
                  <p className="text-sm text-gray-600 mt-1">Shingle removal, underlayment, and roofing materials</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-action-orange mr-3">✓</span>
                <div>
                  <strong>Concrete Removal</strong>
                  <p className="text-sm text-gray-600 mt-1">Driveways, sidewalks, foundations, and concrete structures</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-action-orange mr-3">✓</span>
                <div>
                  <strong>Large-Scale Renovations</strong>
                  <p className="text-sm text-gray-600 mt-1">Major structural changes and complete building overhauls</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-action-orange mr-3">✓</span>
                <div>
                  <strong>Site Preparation</strong>
                  <p className="text-sm text-gray-600 mt-1">Land clearing, excavation debris, and site cleanup</p>
                </div>
              </li>
            </ul>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">Why Choose Us for Construction Projects?</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Heavy-duty dumpsters built for construction waste</li>
                <li>• Multiple sizes for projects of any scale</li>
                <li>• Same-day delivery to keep projects on schedule</li>
                <li>• Experienced with construction site logistics</li>
                <li>• Proper disposal of construction materials</li>
                <li>• Flexible scheduling for project timelines</li>
              </ul>
            </div>
          </div>

          {/* Dumpster Sizes & Pricing */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">📏 Construction Dumpster Solutions</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900">20 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-2">Small construction projects</p>
                  <div className="text-2xl font-bold text-action-orange">$349</div>
                  <p className="text-sm text-gray-500">Holds about 4-5 pickup truck loads</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900">30 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-2">Medium construction projects</p>
                  <div className="text-2xl font-bold text-action-orange">$449</div>
                  <p className="text-sm text-gray-500">Holds about 6-7 pickup truck loads</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900">40 Yard Dumpster</h3>
                  <p className="text-gray-600 mb-2">Large construction projects</p>
                  <div className="text-2xl font-bold text-action-orange">$549</div>
                  <p className="text-sm text-gray-500">Holds about 8-10 pickup truck loads</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-trust-blue-dark text-sm">
                  <strong>🏗️ Construction Ready:</strong> All dumpsters are reinforced for heavy construction waste. 
                  Contact us for custom solutions for very large projects!
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Construction Project?</h3>
              <p className="mb-6">Get a free quote and heavy-duty dumpster solutions for your construction needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:801-918-6000"
                  className="bg-white text-action-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://icondumpsters.com/#quote-form"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-action-orange transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Construction Benefits Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Construction Project Benefits</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Efficiency</h3>
              <p className="text-gray-600">Keep your construction site clean and organized to maintain productivity and safety.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Compliance</h3>
              <p className="text-gray-600">Proper waste management helps maintain OSHA compliance and job site safety.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Timeline Management</h3>
              <p className="text-gray-600">Flexible scheduling ensures waste removal doesn't delay your construction timeline.</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Construction Project Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-action-orange">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Planning</h3>
              <p className="text-gray-600">We'll assess your construction scope and recommend the best dumpster solution.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-action-orange">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Placement</h3>
              <p className="text-gray-600">Dumpster placed in optimal location to minimize disruption to construction workflow.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-action-orange">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Support</h3>
              <p className="text-gray-600">Ongoing support with additional dumpsters or services as your project progresses.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-action-orange">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Site</h3>
              <p className="text-gray-600">Prompt pickup when you're ready, leaving your construction site clean and organized.</p>
            </div>
          </div>
        </div>

        {/* Construction Waste Types */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Construction Waste We Handle</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏗️ Building Materials</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Wood and lumber scraps</li>
                <li>• Drywall and sheetrock</li>
                <li>• Insulation materials</li>
                <li>• Metal scraps and rebar</li>
                <li>• Concrete and masonry debris</li>
                <li>• Roofing materials</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🚧 Demolition Debris</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Structural demolition waste</li>
                <li>• Interior demolition debris</li>
                <li>• Flooring and tile removal</li>
                <li>• Plumbing and electrical waste</li>
                <li>• HVAC system components</li>
                <li>• Site preparation debris</li>
              </ul>
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
              Get Your Construction Dumpster Quote
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about your construction project and we'll provide a custom quote with the perfect dumpster solution.
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                Construction Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                required
              >
                <option value="">Select your project type</option>
                <option value="new-construction">New Construction</option>
                <option value="demolition">Demolition Project</option>
                <option value="roofing">Roofing Project</option>
                <option value="concrete-removal">Concrete Removal</option>
                <option value="large-renovation">Large-Scale Renovation</option>
                <option value="site-preparation">Site Preparation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700 mb-2">
                Project Size
              </label>
              <select
                id="projectSize"
                name="projectSize"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                required
              >
                <option value="">Select project size</option>
                <option value="small">Small (1-2 rooms)</option>
                <option value="medium">Medium (3-5 rooms)</option>
                <option value="large">Large (entire building)</option>
                <option value="commercial">Commercial building</option>
                <option value="industrial">Industrial facility</option>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="Tell us about your construction project, timeline, and any specific requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-action-orange text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-action-orange-dark transition-colors"
            >
              Get Free Construction Quote
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
