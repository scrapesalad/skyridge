import type { Metadata } from 'next';
import ImageWithFallback from '../../components/ImageWithFallback';
import InternalLinks from '../../components/InternalLinks';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Case Study: Home Renovation Cleanup in Sandy, UT | Icon...",
  description: 'See how a 20‑yard dumpster helped a Sandy, UT homeowner finish a kitchen & flooring renovation on time. Timeline, size choice, and tips included.',
  keywords: ['dumpster rental', 'Sandy dumpster rental', 'home renovation dumpster', '20 yard dumpster'],
  alternates: { canonical: 'https://icondumpsters.com/blog/case-study-home-renovation-sandy' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Case Study: Home Renovation Cleanup in Sandy, UT | Icon...',
    description: 'See how a 20‑yard dumpster helped a Sandy, UT homeowner finish a kitchen & flooring renovation on time. Timeline, size choice, and tips included.',
    url: 'https://icondumpsters.com/blog/case-study-home-renovation-sandy',
    images: [{ url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp', width: 1200, height: 630, alt: 'Sandy UT Dumpster Rental Case Study' }],
    type: 'article'
  },
  robots: { index: true, follow: true }
};

export default function CaseStudySandy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#0d9488] via-teal-700 to-[#0d9488] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative h-56 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow mx-auto max-w-5xl bg-white flex items-center justify-center">
            <ImageWithFallback src="/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp" fallbackSrc="/images/dumpsters.webp" alt="Sandy UT home renovation cleanup case study" fill className="object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-8">Case Study: Home Renovation Cleanup in Sandy, UT</h1>
          <p className="text-purple-100 text-lg md:text-xl mt-3">How a 20‑yard dumpster kept a kitchen & flooring remodel on track.</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose max-w-none">
          <h2>Project Overview</h2>
          <p>A Sandy homeowner tackled a kitchen remodel with new flooring throughout the main level. Debris included cabinets, countertops, subfloor sections, and underlayment. The timeline was 7 days.</p>

          <h2>Why 20‑Yard Worked</h2>
          <ul>
            <li>Fits most driveways, easy loading.</li>
            <li>Handles bulky cabinets & flooring without oversizing.</li>
            <li>Kept haul count to one—no mid‑project swap needed.</li>
          </ul>

          <h2>Results</h2>
          <ul>
            <li>On‑time finish with coordinated pickup on day 7.</li>
            <li>No overweight surprises—weight billed after pickup at $55/ton.</li>
            <li>Minimal disruption thanks to driveway placement.</li>
          </ul>

          <div className="my-8 p-6 bg-white border rounded-xl shadow">
            <h3 className="m-0">Plan a Similar Project</h3>
            <ul>
              <li><Link href="https://icondumpsters.com/dumpster-sizes" className="text-[#0d9488] underline">Compare Dumpster Sizes</Link></li>
              <li><Link href="https://icondumpsters.com/faq" className="text-[#0d9488] underline">FAQs: permits, placement, timelines</Link></li>
              <li><a href="https://icondumpsters.com/#quote-form" className="text-[#0d9488] underline">Get a Free Quote</a></li>
            </ul>
          </div>
        </article>

        <section className="mt-12">
          <InternalLinks />
        </section>
      </main>
    </div>
  );
}


