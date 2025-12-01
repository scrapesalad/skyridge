import type { Metadata } from 'next'
import Hero from '@/app/components/hero';
import BlogSEO from '@/app/components/BlogSEO'

export const metadata: Metadata = {
  title: 'Waste Management Dumpster Prohibited Items: Complete List',
  description: 'Know what cannot go in a dumpster: paints, oils, batteries, tires, appliances with refrigerant, hazardous waste, and more. Safe disposal alternatives in Utah.',
  keywords: ['waste management dumpster prohibited items','dumpster rules','what not to put in dumpster','prohibited items list'],
  alternates: { canonical: 'https://icondumpsters.com/waste-management-dumpster-prohibited-items' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Waste Management Dumpster Prohibited Items: Complete List',
    description: 'Avoid fees and delays. Learn what you can’t toss and where to take it instead.',
    url: 'https://icondumpsters.com/waste-management-dumpster-prohibited-items',
    images: [{ url: '/images/dumpsterSmallBanner.jpeg', width: 1200, height: 630, alt: 'Dumpster prohibited items' }],
    type: 'article'
  },
  robots: { index: true, follow: true }
}

export default function ProhibitedItemsPage() {
  return (
    <>
      <BlogSEO
        title="Waste Management Dumpster Prohibited Items: What You Can’t Toss"
        description="Avoid fines and delays. See the complete list of dumpster prohibited items, with safe disposal alternatives and Utah resources."
        canonicalUrl="https://icondumpsters.com/waste-management-dumpster-prohibited-items"
        publishedDate="2025-09-23"
        modifiedDate="2025-09-23"
        author="Icon Dumpsters"
        category="GUIDES"
        readTime="6 min read"
        featuredImage="/images/dumpsterSmallBanner.jpeg"
        keywords={["waste management dumpster prohibited items","dumpster rules","what not to put in dumpster"]}
      />

      <Hero />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="prose prose-lg max-w-none">
          <h2>Common Prohibited Items</h2>
          <ul>
            <li>Liquids, paints, solvents, oils, fuels</li>
            <li>Batteries, pesticides, fluorescent bulbs, e‑waste</li>
            <li>Tires, appliances with refrigerant</li>
            <li>Asbestos or suspect materials (test first)</li>
          </ul>
          <h2>Safe Alternatives</h2>
          <p>Use county hazmat events or approved drop‑offs. Ask us for guidance—happy to point you to the right facility.</p>
        </section>
      </main>
    </>
  )
}


