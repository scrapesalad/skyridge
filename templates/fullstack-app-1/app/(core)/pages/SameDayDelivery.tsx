import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Same‑Day Dumpster Delivery | Icon Dumpsters',
  description: 'Get your dumpster delivered the same day when you call before 2 PM (subject to availability). Fast, reliable roll‑off service.',
  alternates: { canonical: '/same-day-delivery' },
};

export default function SameDayDeliveryPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="https://icondumpsters.com/" className="text-[#0d9488] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Same‑Day Delivery</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Same‑Day Delivery</h1>
        <p className="text-lg text-gray-700 mb-6">Get your dumpster delivered the same day when you call before 2 PM. We know time matters to your project schedule.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Fast scheduling windows</li>
          <li>Real‑time ETAs and updates</li>
          <li>Job‑site safe placement</li>
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="https://icondumpsters.com/#quote-form" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700">Get Free Quote</a>
          <a href="tel:801-918-6000" className="inline-block border-2 border-[#0d9488] text-[#0d9488] px-6 py-3 rounded-lg font-semibold hover:bg-[#0d9488] hover:text-white">Call (801) 918-6000</a>
        </div>
      </div>
    </div>
  );
}


