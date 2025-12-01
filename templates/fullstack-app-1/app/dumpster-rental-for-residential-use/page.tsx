import type { Metadata } from 'next'
import Hero from '@/app/components/hero';
import BlogSEO from '@/app/components/BlogSEO'

export const metadata: Metadata = {
  title: 'Dumpster Rental for Residential Use: Simple Homeowner Guide',
  description: 'A clear, Utah‑focused guide to residential dumpster rentals: best sizes for common projects, driveway protection, HOA rules, and budget tips.',
  keywords: ['dumpster rental for residential use','residential dumpster rental','home dumpster rental','driveway safe dumpster'],
  alternates: { canonical: 'https://icondumpsters.com/dumpster-rental-for-residential-use' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Dumpster Rental for Residential Use: Simple Homeowner Guide',
    description: 'Choose the right size, protect your driveway, and avoid hidden fees.',
    url: 'https://icondumpsters.com/dumpster-rental-for-residential-use',
    images: [{ url: '/images/dumpsterSmallBanner2.jpeg', width: 1200, height: 630, alt: 'Residential dumpster rental' }],
    type: 'article'
  },
  robots: { index: true, follow: true }
}

export default function ResidentialDumpsterGuidePage() {
  return (
    <>
      <BlogSEO
        title="Dumpster Rental for Residential Use: Simple Homeowner Guide"
        description="A clear guide to residential dumpster rentals: best sizes for common projects, driveway protection, HOA rules, and budget tips."
        canonicalUrl="https://icondumpsters.com/dumpster-rental-for-residential-use"
        publishedDate="2025-09-23"
        modifiedDate="2025-09-23"
        author="Icon Dumpsters"
        category="RENOVATION"
        readTime="8 min read"
        featuredImage="/images/dumpsterSmallBanner2.jpeg"
        keywords={['dumpster rental for residential use','residential dumpster rental','home dumpster rental']}
      />

      <Hero />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="prose prose-lg max-w-none">
          <h2>Best Sizes for Common Projects</h2>
          <ul>
            <li>15‑yard: garage cleanouts, single‑room refresh</li>
            <li>20‑yard: kitchen/bath remodels, flooring projects</li>
            <li>30‑yard: whole‑home cleanouts, bulky items</li>
          </ul>
          <h2>Driveway Protection</h2>
          <p>We use boards and careful placement to minimize surface impact. Mark placement with a photo for the driver.</p>
        </section>
      </main>
    </>
  )
}


