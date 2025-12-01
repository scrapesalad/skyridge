import type { Metadata } from 'next';
import Link from 'next/link';
import ImageWithFallback from '../../components/ImageWithFallback';
import InternalLinks from '../../components/InternalLinks';

export const metadata: Metadata = {
  title: "Utah Dumpster Permits Guide: Do You Need One? City Rules",
  description: 'Find out when you need a dumpster permit in Utah cities, how to apply, and best practices for street placement. Get a quick quote and avoid delays.',
  keywords: ['dumpster rental', 'Utah dumpster permit', 'dumpster permit Salt Lake City', 'street placement dumpster'],
  alternates: { canonical: 'https://icondumpsters.com/blog/utah-dumpster-permits-guide' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Utah Dumpster Permits Guide: Do You Need One? City Rules",
    description: 'Find out when you need a dumpster permit in Utah cities, how to apply, and best practices for street placement. Get a quick quote and avoid delays.',
    url: 'https://icondumpsters.com/blog/utah-dumpster-permits-guide',
    images: [{ url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp', width: 1200, height: 630, alt: 'Utah Dumpster Permit Guide' }],
    type: 'article'
  },
  robots: { index: true, follow: true }
};

export default function UtahPermitsGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d9488] via-teal-700 to-[#0d9488] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative h-56 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow mx-auto max-w-5xl bg-white flex items-center justify-center">
            <ImageWithFallback src="/images/optimized/IMG_0336.webp" fallbackSrc="/images/dumpsterSmallBanner3.jpeg" alt="Utah dumpster permit rules" fill className="object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-8">Utah Dumpster Permits: Do You Need One?</h1>
          <p className="text-purple-100 text-lg md:text-xl mt-3">City rules, street placement tips, and how to avoid delays.</p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose max-w-none">
          <h2>When is a Permit Required?</h2>
          <p>In most Utah cities, no permit is required if the dumpster sits on private property (driveway). A permit is typically required if you place a dumpster on a public street, sidewalk, or right‑of‑way.</p>

          <h2>City‑By‑City Basics</h2>
          <ul>
            <li><strong>Salt Lake City</strong>: Street placement usually requires a temporary occupancy permit. Call city public services first.</li>
            <li><strong>Sandy, West Jordan, Murray</strong>: Similar rules; driveway placement is preferred and avoids permits.</li>
            <li><strong>HOAs</strong>: May require notification or time limits even on private property—check your CCRs.</li>
          </ul>

          <h2>How to Apply</h2>
          <ol>
            <li>Confirm if street placement is necessary (driveway is best).</li>
            <li>Contact your city’s public works or engineering department.</li>
            <li>Request a temporary occupancy or right‑of‑way permit.</li>
            <li>Ask about safety (cones, reflective tape) and time limits.</li>
          </ol>

          <div className="my-8 p-6 bg-white border rounded-xl shadow">
            <h3 className="m-0">Helpful Resources</h3>
            <ul>
              <li><Link href="https://icondumpsters.com/dumpster-sizes" className="text-[#0d9488] underline">Dumpster Sizes & Dimensions</Link></li>
              <li><Link href="https://icondumpsters.com/faq" className="text-[#0d9488] underline">Dumpster Rental FAQ</Link></li>
              <li><a href="https://icondumpsters.com/#quote-form" className="text-[#0d9488] underline">Get a Free Quote</a></li>
            </ul>
          </div>

          <h2>Tips to Avoid Delays</h2>
          <ul>
            <li>Choose driveway placement when possible (no permit required).</li>
            <li>Clear 60 ft for delivery/pickup; avoid soft ground or slopes.</li>
            <li>Use cones/reflectors if near traffic; keep lids closed to prevent debris.</li>
          </ul>
        </article>

        <section className="mt-12">
          <InternalLinks />
        </section>
      </main>
    </div>
  );
}


