import type { Metadata } from 'next'
import Hero from '@/app/components/hero';
import BlogSEO from '@/app/components/BlogSEO'

export const metadata: Metadata = {
  title: 'Roll‑Off Dumpster Business Profit Margin: Costs & Pricing Model',
  description: 'Realistic roll‑off business margins: revenue per pull, disposal, fuel, maintenance, insurance, and pricing frameworks with example P&L inputs.',
  keywords: ['roll-off dumpster business profit margin','dumpster business profit','roll off business pricing','waste hauling margins'],
  alternates: { canonical: 'https://icondumpsters.com/roll-off-dumpster-business-profit-margin' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Roll‑Off Dumpster Business Profit Margin: Costs & Pricing Model',
    description: 'Breakdown of costs and pricing to estimate realistic margins for roll‑off operations.',
    url: 'https://icondumpsters.com/roll-off-dumpster-business-profit-margin',
    images: [{ url: '/images/dumpster500x500-2.jpeg', width: 1200, height: 630, alt: 'Roll‑off dumpster business margins' }],
    type: 'article'
  },
  robots: { index: true, follow: true }
}

export default function RolloffBusinessMarginPage() {
  return (
    <>
      <BlogSEO
        title="Roll‑Off Dumpster Business Profit Margin: Costs & Pricing Model"
        description="Break down revenue per pull, disposal, fuel, maintenance, insurance, and pricing frameworks with example P&L inputs."
        canonicalUrl="https://icondumpsters.com/roll-off-dumpster-business-profit-margin"
        publishedDate="2025-09-23"
        modifiedDate="2025-09-23"
        author="Icon Dumpsters"
        category="COMMERCIAL"
        readTime="10 min read"
        featuredImage="/images/dumpster500x500-2.jpeg"
        keywords={['roll-off dumpster business profit margin','dumpster business profit','roll off business pricing']}
      />

      <Hero />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="prose prose-lg max-w-none">
          <h2>Key Cost Buckets</h2>
          <ul>
            <li>Disposal and transfer fees</li>
            <li>Fuel and routing efficiency</li>
            <li>Truck, container, and maintenance capex/opex</li>
            <li>Insurance, permits, compliance</li>
            <li>Labor and overhead</li>
          </ul>
          <h2>Pricing Framework</h2>
          <p>Set base rate + included tonnage per size; model per‑ton overage and seasonal utilization to keep contribution margins healthy across cycles.</p>
        </section>
      </main>
    </>
  )
}


