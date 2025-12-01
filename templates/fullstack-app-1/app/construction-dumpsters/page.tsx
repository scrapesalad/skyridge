import { Metadata } from 'next';
import ArticleSchema from '../components/ArticleSchema';

export const metadata: Metadata = {
  title: "Construction Dumpster Rental | Professional Waste...",
  description: "Professional construction dumpster rental services for commercial and residential projects. Same-day delivery, competitive pricing, and reliable waste...",
  keywords: 'construction dumpster rental, commercial dumpster rental, construction waste disposal, roll-off dumpster rental, construction site cleanup',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Construction Dumpster Rental | Professional Waste...',
      alternates: {
    canonical: 'https://icondumpsters.com/construction-dumpsters',
    images: [
      {
        url: 'https://icondumpsters.com/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Construction Dumpster Rental | Professional Waste...',
      },
    ]
  },
  description: 'Professional construction dumpster rental services for commercial and residential projects. Same-day delivery, competitive pricing, and reliable waste...',
    type: 'website',
          url: 'https://icondumpsters.com/construction-dumpsters',
  },
};

export default function ConstructionDumpstersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ArticleSchema
        title="Construction Dumpster Rental: Professional Waste Management Solutions"
        description="Professional construction dumpster rental services for commercial and residential projects. Learn about our comprehensive waste management solutions."
        publishedDate="2025-01-15T08:00:00.000Z"
        modifiedDate="2025-01-15T08:00:00.000Z"
        author="Icon Dumpsters Team"
        imageUrl="/images/dumpster500x200-1.jpeg"
        articleUrl="/construction-dumpsters"
        category="CONSTRUCTION"
        readTime="10 min read"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Construction Dumpster Rental: Professional Waste Management Solutions
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Professional construction dumpster rental services for commercial and residential projects. Get same-day delivery, competitive pricing, and reliable waste disposal solutions.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Published: January 15, 2025</span>
            <span className="mx-2">•</span>
            <span>Updated: January 15, 2025</span>
          </div>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-trust-blue">
            <li><a href="https://icondumpsters.com/#construction-services" className="hover:underline">Construction Services</a></li>
            <li><a href="https://icondumpsters.com/#dumpster-sizes" className="hover:underline">Dumpster Sizes Available</a></li>
            <li><a href="https://icondumpsters.com/#project-types" className="hover:underline">Project Types We Serve</a></li>
            <li><a href="https://icondumpsters.com/#pricing-guide" className="hover:underline">Pricing Guide</a></li>
            <li><a href="https://icondumpsters.com/#delivery-scheduling" className="hover:underline">Delivery & Scheduling</a></li>
            <li><a href="https://icondumpsters.com/#waste-management" className="hover:underline">Waste Management</a></li>
            <li><a href="https://icondumpsters.com/#safety-compliance" className="hover:underline">Safety & Compliance</a></li>
            <li><a href="https://icondumpsters.com/#faq" className="hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </div>

        <section id="construction-services" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Construction Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Construction</h3>
              <p className="text-gray-600">Large-scale commercial projects, office buildings, retail spaces, and industrial facilities require efficient waste management solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Residential Construction</h3>
              <p className="text-gray-600">Home building, renovations, additions, and remodeling projects need reliable dumpster services for construction debris.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Demolition Projects</h3>
              <p className="text-gray-600">Building demolition, site clearing, and structural removal generate significant waste that requires proper disposal.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure Projects</h3>
              <p className="text-gray-600">Road construction, utility work, and infrastructure development projects need specialized waste management.</p>
            </div>
          </div>
        </section>

        <section id="dumpster-sizes" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Sizes Available</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">15 Yard</h3>
              <p className="text-gray-600 mb-4">Small construction projects</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Room additions</li>
                <li>• Small renovations</li>
                <li>• Deck construction</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">20 Yard</h3>
              <p className="text-gray-600 mb-4">Medium construction projects</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Kitchen remodels</li>
                <li>• Bathroom renovations</li>
                <li>• Basement finishing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">30 Yard</h3>
              <p className="text-gray-600 mb-4">Large construction projects</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Full home remodels</li>
                <li>• Commercial projects</li>
                <li>• Major renovations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">40 Yard</h3>
              <p className="text-gray-600 mb-4">Major construction projects</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Large commercial builds</li>
                <li>• Multi-family projects</li>
                <li>• Industrial construction</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="project-types" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Types We Serve</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">New Construction</h3>
              <p className="text-gray-600">From foundation to finish, we provide dumpster services for new building construction projects of all sizes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Renovations & Remodels</h3>
              <p className="text-gray-600">Kitchen and bathroom remodels, basement finishing, and home additions require efficient waste management.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Projects</h3>
              <p className="text-gray-600">Office buildings, retail spaces, restaurants, and industrial facilities need reliable construction waste disposal.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure & Utilities</h3>
              <p className="text-gray-600">Road construction, utility installation, and infrastructure development projects require specialized waste management.</p>
            </div>
          </div>
        </section>

        <section id="pricing-guide" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing Guide</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              Our construction dumpster rental pricing is transparent and competitive. Contact us for exact pricing based on your project requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rental Periods</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 7-14 days standard</li>
                  <li>• Extended rentals available</li>
                  <li>• Project-based pricing</li>
                  <li>• Volume discounts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Included Services</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Delivery and pickup</li>
                  <li>• Disposal fees</li>
                  <li>• Weight allowance</li>
                  <li>• Customer support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="delivery-scheduling" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivery & Scheduling</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Scheduling</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Same-day delivery available</li>
                <li>• Weekend and holiday service</li>
                <li>• Emergency delivery options</li>
                <li>• Project timeline coordination</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Requirements</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Clear access for delivery truck</li>
                <li>• Stable ground for placement</li>
                <li>• Adequate space for dumpster</li>
                <li>• Proper permit compliance</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="waste-management" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Waste Management</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accepted Materials</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Construction debris</li>
                  <li>• Concrete and masonry</li>
                  <li>• Wood and lumber</li>
                  <li>• Metal and steel</li>
                  <li>• Drywall and insulation</li>
                  <li>• Roofing materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Items</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hazardous materials</li>
                  <li>• Chemicals and solvents</li>
                  <li>• Asbestos-containing materials</li>
                  <li>• Medical waste</li>
                  <li>• Electronics</li>
                  <li>• Tires and batteries</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="safety-compliance" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Standards</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• OSHA compliance</li>
                <li>• Proper loading procedures</li>
                <li>• Weight limit adherence</li>
                <li>• Site safety protocols</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Compliance</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• EPA regulations</li>
                <li>• Local waste ordinances</li>
                <li>• Recycling requirements</li>
                <li>• Proper disposal methods</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How quickly can you deliver to my construction site?</h3>
              <p className="text-gray-600">We offer same-day delivery for most areas. Contact us to confirm availability for your specific location and project timeline.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What size dumpster do I need for my construction project?</h3>
              <p className="text-gray-600">Our team can help you determine the right size based on your project scope, materials, and timeline. We offer free consultations.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you handle permits for street placement?</h3>
              <p className="text-gray-600">We can assist with permit applications and requirements. Contact us to discuss your specific placement needs and local regulations.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can you coordinate with my construction schedule?</h3>
              <p className="text-gray-600">Yes, we work closely with contractors and project managers to coordinate delivery and pickup with your construction timeline.</p>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Construction Project?</h2>
          <p className="text-gray-600 mb-6">
            Get your free quote for construction dumpster rental today. Our team is ready to help you with your project's waste management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://icondumpsters.com/free-quote"
              className="bg-trust-blue text-white px-6 py-3 rounded-lg hover:bg-trust-blue-dark transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:801-918-6000"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Call (801) 918-6000
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
