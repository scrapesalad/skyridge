export const dynamic = 'force-static';

import { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'
import Hero from '@/app/components/hero';
import StructuredData from '@/app/components/StructuredData'

export const metadata: Metadata = {
  title: 'Industrial Dumpster Rental Services Utah | Icon Dumpsters',
  description: 'Industrial dumpster rental services throughout Utah. Heavy-duty roll-off containers for manufacturing, warehouses, facilities, and large-scale projects. Call (801) 918-6000.',
  keywords: 'industrial dumpster rental Utah, manufacturing dumpster rental, warehouse dumpster, heavy-duty roll-off containers, industrial waste disposal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Industrial Dumpster Rental Services Utah | Icon Dumpsters',
      alternates: {
    canonical: 'https://icondumpsters.com/services/industrial-dumpster-rental',
    images: [
      {
        url: 'https://icondumpsters.com/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
        width: 1200,
        height: 630,
        alt: 'Industrial Dumpster Rental Services Utah | Icon Dumpsters',
      },
    ]
  },
  description: 'Heavy-duty industrial dumpster rentals throughout Utah for manufacturing, warehousing, and large-scale projects.',
    type: 'website',
    url: 'https://icondumpsters.com/services/industrial-dumpster-rental',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
  },
}

export default function IndustrialDumpsterRentalPage() {
  return (
    <PageTemplate>
      <StructuredData
        type="service"
        data={{
          name: 'Industrial Dumpster Rental Services',
          description:
            'Heavy-duty industrial dumpster rentals for manufacturing, warehousing, and large-scale projects throughout Utah',
          provider: {
            name: 'Icon Dumpsters',
            url: 'https://icondumpsters.com',
          },
          areaServed: [
            'Salt Lake City, UT',
            'West Valley City, UT',
            'Provo, UT',
            'West Jordan, UT',
            'Orem, UT',
            'Sandy, UT',
            'Ogden, UT',
          ],
          serviceType: 'Industrial Dumpster Rental',
          priceRange: '$400-$1,000',
        }}
      />

      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Industrial Dumpster Rentals for Demanding Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Our industrial dumpster rental services support complex, heavy-duty operations across Utah. From manufacturing and warehousing to large infrastructure projects, our roll-off containers keep waste under control so your team can stay focused on production.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We offer flexible scheduling, high weight-capacity options, and reliable delivery and pickup tailored to industrial timelines and safety requirements.
          </p>
        </div>

        {/* Industrial Use Cases */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Industrial Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing Facilities</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Production scrap and materials</li>
                <li>• Pallets and packaging</li>
                <li>• Equipment changeouts</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Warehouses & Distribution</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Bulk packaging waste</li>
                <li>• Inventory cleanouts</li>
                <li>• Racking renovations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Industrial Construction</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Infrastructure projects</li>
                <li>• Plant expansions</li>
                <li>• Demolition debris</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Sizes */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recommended Dumpster Sizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">20 Yard</h4>
              <p className="text-gray-600 mb-4">Medium industrial cleanups</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Equipment swaps</li>
                <li>• Packaging waste</li>
                <li>• Maintenance projects</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">30 Yard</h4>
              <p className="text-gray-600 mb-4">Large facility turnover</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Plant upgrades</li>
                <li>• High-volume debris</li>
                <li>• Construction waste</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">40 Yard</h4>
              <p className="text-gray-600 mb-4">Massive industrial projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Industrial demolition</li>
                <li>• Infrastructure work</li>
                <li>• Multi-phase cleanouts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d9488] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Industrial Dumpster Rentals?</h3>
          <p className="text-lg mb-6">Get a free quote today. Our team will help you choose the right container and schedule delivery to match your operation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#quote-form"
              className="bg-white text-[#0d9488] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:(801) 918-6000"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0d9488] transition-colors"
            >
              Call (801) 918-6000
            </a>
          </div>
        </section>
      </div>
    </PageTemplate>
  )
}


