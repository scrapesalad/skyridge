import type { Metadata } from 'next'
import Hero from '@/app/components/hero';
import BlogSEO from '@/app/components/BlogSEO'

export const metadata: Metadata = {
  title: 'Bin Dumpster Rental: Sizes, Prices, Delivery Windows',
  description: 'Everything you need to know about bin dumpster rentals: size selection, transparent pricing, included tonnage, and placement tips.',
  keywords: ['bin dumpster rental','rent a bin','rent bin','garbage bin rental','trash bin rental'],
  alternates: { canonical: 'https://icondumpsters.com/bin-dumpster-rental' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Bin Dumpster Rental: Sizes, Prices, Delivery Windows',
    description: 'Choose the right bin size and avoid overage fees with clear, upfront pricing.',
    url: 'https://icondumpsters.com/bin-dumpster-rental',
    images: [{ url: '/images/dumpster500x500-2.jpeg', width: 1200, height: 630, alt: 'Bin dumpster rental' }],
    type: 'article'
  },
  robots: { index: true, follow: true }
}

export default function BinDumpsterRentalPage() {
  return (
    <>
      <BlogSEO
        title="Bin Dumpster Rental: Sizes, Prices, Delivery Windows"
        description="Everything you need to know about bin dumpster rentals: size selection, transparent pricing, included tonnage, and placement tips."
        canonicalUrl="https://icondumpsters.com/bin-dumpster-rental"
        publishedDate="2025-09-23"
        modifiedDate="2025-09-23"
        author="Icon Dumpsters"
        category="GUIDES"
        readTime="7 min read"
        featuredImage="/images/dumpster500x500-2.jpeg"
        keywords={['bin dumpster rental','rent a bin','rent bin','garbage bin rental']}
      />

      <Hero />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="prose prose-lg max-w-none">
          <h2>Sizes & Use Cases</h2>
          <p>Pick 15, 20, or 30‑yard bins based on debris type and volume. Dense materials? Use smaller bins and plan swaps.</p>
        </section>
      </main>
    </>
  )
}


