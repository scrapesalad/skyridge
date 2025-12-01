import type { Metadata } from 'next';
import Link from 'next/link';
import ImageWithFallback from '../../components/ImageWithFallback';
import InternalLinks from '../../components/InternalLinks';

export const metadata: Metadata = {
  title: "How to Choose the Right Dumpster Size | Utah Dumpster...",
  description: "Learn how to pick the right dumpster size for your project. Compare 15, 20, and 30 yard roll‑off dumpsters, typical uses, and weight tips. Get a free quote...",
  keywords: ['dumpster rental', 'dumpster rental near me', 'utah dumpster rental', 'dumpster sizes', 'roll‑off dumpster'],
  alternates: { canonical: 'https://icondumpsters.com/blog/how-to-choose-dumpster-size' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'How to Choose the Right Dumpster Size | Utah Dumpster...',
    description: 'Learn how to pick the right dumpster size for your project. Compare 15, 20, and 30 yard roll‑off dumpsters, typical uses, and weight tips. Get a free quote...',
    url: 'https://icondumpsters.com/blog/how-to-choose-dumpster-size',
    images: [{ url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp', width: 1200, height: 630, alt: 'Dumpster Sizes Guide - Icon Dumpsters' }],
    type: 'article'
  },
  robots: { index: true, follow: true }
};

export default function BlogChooseSize() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d9488] via-teal-700 to-[#0d9488] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative h-56 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow mx-auto max-w-5xl bg-white flex items-center justify-center">
            <ImageWithFallback src="/images/optimized/dumpsterSmallBanner3.webp" fallbackSrc="/images/dumpsterSmallBanner3.webp" alt="Dumpster sizes in Utah - roll‑off dumpster guide" fill className="object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-8">How to Choose the Right Dumpster Size</h1>
          <p className="text-purple-100 text-lg md:text-xl mt-3">15, 20, or 30 yard? Here’s how to decide.</p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose max-w-none">
          <h2>Quick Size Comparison</h2>
          <ul>
            <li><strong>15‑Yard</strong>: small cleanouts, yard debris, bathroom remodels.</li>
            <li><strong>20‑Yard</strong>: kitchen remodels, roofing, medium renovations.</li>
            <li><strong>30‑Yard</strong>: construction & demolition, whole‑home cleanouts.</li>
          </ul>

          <h2>How to Estimate Volume</h2>
          <p>Think in pickup truck loads: 15 yd ≈ 3–4 loads, 20 yd ≈ 4–6, 30 yd ≈ 6–8. When in doubt, size up to avoid a second haul.</p>

          <h2>Weight & Materials</h2>
          <p>Weight is billed after pickup at $55/ton. Heavy materials like concrete, dirt, or shingles can add up quickly—call us if your project includes these.</p>

          <div className="my-8 p-6 bg-white border rounded-xl shadow">
            <h3 className="m-0">Helpful Resources</h3>
            <ul>
              <li><Link href="https://icondumpsters.com/dumpster-sizes" className="text-[#0d9488] underline">Dumpster Sizes & Dimensions</Link></li>
              <li><Link href="https://icondumpsters.com/faq" className="text-[#0d9488] underline">Dumpster Rental FAQ</Link></li>
              <li><a href="https://icondumpsters.com/#quote" className="text-[#0d9488] underline">Get a Free Quote</a></li>
            </ul>
          </div>

          <h2>Common Projects</h2>
          <ul>
            <li><strong>Renovations</strong>: 20 yd is the go‑to; 30 yd for major demos.</li>
            <li><strong>Landscaping</strong>: 15 yd fits branches, shrubs, and yard bags.</li>
            <li><strong>Roofing</strong>: 20 yd typically handles shingles and underlayment.</li>
          </ul>
        </article>

        <section id="quote" className="mt-12">
          <div className="bg-gradient-to-r from-[#0d9488] to-teal-700 rounded-2xl p-8 text-white text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Ready for a Quick Quote?</h2>
            <p className="text-purple-100 mb-6">We’ll recommend the right size and give you instant pricing.</p>
            <a href="https://icondumpsters.com/#quote-form" className="inline-block bg-white text-[#0d9488] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Start Free Quote</a>
          </div>
          <InternalLinks />
        </section>
      </main>
    </div>
  );
}


