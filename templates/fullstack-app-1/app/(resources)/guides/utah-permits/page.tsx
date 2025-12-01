import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Utah Dumpster Permits Guide 2025 | Complete Permit...",
  description: 'Complete guide to dumpster permits in Utah. Learn about permit requirements, costs, and how to get permits for different Utah cities.',
    alternates: {
    canonical: 'https://icondumpsters.com/guides/utah-permits',
  },
  keywords: 'Utah dumpster permits, dumpster permit requirements, Utah cities permits, construction permits Utah',
};

export default function UtahDumpsterPermitsGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0d9488] to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Utah Dumpster Permits Guide 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Everything you need to know about dumpster permits in Utah cities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dumpster Permit Requirements in Utah</h2>
              <p className="text-lg text-gray-700 mb-6">
                Most Utah cities require permits for dumpsters placed on public property, right-of-way, or in some cases, 
                private property. Permit requirements vary by city, so it's important to check with your local building department.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This guide covers the most common Utah cities and their dumpster permit requirements. 
                Always verify current requirements with your local city office.
              </p>
            </section>

            {/* Major Cities */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Major Utah Cities - Permit Requirements</h2>
              
              <div className="space-y-6">
                {/* Salt Lake City */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Salt Lake City</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Permit Required:</strong> Yes, for dumpsters on public property or right-of-way
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Cost:</strong> $25-50
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Contact:</strong> <a href="tel:801-535-6000" className="text-trust-blue hover:text-trust-blue-dark">(801) 535-6000</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Process:</strong> Apply online or in person at the Building Services Division
                  </p>
                </div>

                {/* West Valley City */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">West Valley City</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Permit Required:</strong> Yes, for dumpsters on public property
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Cost:</strong> $30
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Contact:</strong> <a href="tel:801-963-3200" className="text-trust-blue hover:text-trust-blue-dark">(801) 963-3200</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Process:</strong> Apply at the Community Development Department
                  </p>
                </div>

                {/* Provo */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Provo</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Permit Required:</strong> Yes, for dumpsters on public property or right-of-way
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Cost:</strong> $25
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Contact:</strong> <a href="tel:801-852-6400" className="text-trust-blue hover:text-trust-blue-dark">(801) 852-6400</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Process:</strong> Apply at the Building Department
                  </p>
                </div>

                {/* Ogden */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ogden</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Permit Required:</strong> Yes, for dumpsters on public property
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Cost:</strong> $35
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Contact:</strong> <a href="tel:801-629-8200" className="text-trust-blue hover:text-trust-blue-dark">(801) 629-8200</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Process:</strong> Apply at the Community Development Department
                  </p>
                </div>

                {/* Tooele */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Tooele</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Permit Required:</strong> Yes, for dumpsters on public property or right-of-way
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Cost:</strong> $25-50
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Contact:</strong> <a href="tel:435-843-2120" className="text-trust-blue hover:text-trust-blue-dark">(435) 843-2120</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Process:</strong> Apply at the Building Department
                  </p>
                </div>
              </div>
            </section>

            {/* General Process */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">General Permit Process</h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  <strong>Contact Your City:</strong> Call your local building department to confirm permit requirements
                </li>
                <li>
                  <strong>Gather Information:</strong> You'll typically need project details, dumpster placement location, and rental duration
                </li>
                <li>
                  <strong>Submit Application:</strong> Apply online, in person, or by mail (varies by city)
                </li>
                <li>
                  <strong>Pay Fees:</strong> Most cities charge $25-50 for dumpster permits
                </li>
                <li>
                  <strong>Receive Permit:</strong> Get your permit before dumpster delivery
                </li>
                <li>
                  <strong>Display Permit:</strong> Keep the permit visible on or near the dumpster
                </li>
              </ol>
            </section>

            {/* Tips */}
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips for Getting Dumpster Permits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ Do's</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Apply early - permits can take 1-3 business days</li>
                    <li>• Have exact placement location ready</li>
                    <li>• Keep permit visible on dumpster</li>
                    <li>• Follow city placement guidelines</li>
                    <li>• Renew permits for extended rentals</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">❌ Don'ts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Don't place dumpster without a permit</li>
                    <li>• Don't block traffic or sidewalks</li>
                    <li>• Don't exceed weight limits</li>
                    <li>• Don't put prohibited items in dumpster</li>
                    <li>• Don't ignore city placement rules</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Quick Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Contact */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-700 mb-4">
                  We can help you navigate the permit process for your city.
                </p>
                <a 
                  href="tel:(801) 918-6000"
                  className="block w-full bg-[#0d9488] text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-teal-700 transition-colors"
                >
                  Call (801) 918-6000
                </a>
              </div>

              {/* Common Cities */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick City Contacts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Salt Lake City:</strong><br />
                    <a href="tel:801-535-6000" className="text-trust-blue hover:text-trust-blue-dark">(801) 535-6000</a>
                  </div>
                  <div>
                    <strong>West Valley City:</strong><br />
                    <a href="tel:801-963-3200" className="text-trust-blue hover:text-trust-blue-dark">(801) 963-3200</a>
                  </div>
                  <div>
                    <strong>Provo:</strong><br />
                    <a href="tel:801-852-6400" className="text-trust-blue hover:text-trust-blue-dark">(801) 852-6400</a>
                  </div>
                  <div>
                    <strong>Ogden:</strong><br />
                    <a href="tel:801-629-8200" className="text-trust-blue hover:text-trust-blue-dark">(801) 629-8200</a>
                  </div>
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Links</h3>
                <ul className="space-y-2">
                  <li><Link href="https://icondumpsters.com/dumpster-prices" className="text-trust-blue hover:text-trust-blue-dark">Dumpster Prices</Link></li>
                  <li><Link href="https://icondumpsters.com/dumpster-sizes" className="text-trust-blue hover:text-trust-blue-dark">Dumpster Sizes</Link></li>
                  <li><Link href="https://icondumpsters.com/faq" className="text-trust-blue hover:text-trust-blue-dark">FAQ</Link></li>
                  <li><Link href="https://icondumpsters.com/contact" className="text-trust-blue hover:text-trust-blue-dark">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

