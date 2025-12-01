import Link from 'next/link';

export const metadata = {
  title: 'Same-Day Dumpster Delivery | Icon Dumpsters',
  description: 'Fast, same-day roll-off dumpster delivery across Salt Lake County when you call before 2 PM.',

  alternates: { canonical: 'https://icondumpsters.com/same-day-delivery' }};

export default function SameDayDelivery() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Same‑Day Delivery</h1>
      <p className="text-lg text-gray-700 mb-6">Call before 2 PM and we’ll do our best to deliver your dumpster the same day. We service Salt Lake County and nearby areas.</p>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Flexible time windows</li>
        <li>Driveway‑friendly placement</li>
        <li>Professional, courteous drivers</li>
      </ul>
      <div className="flex gap-3">
        <Link href="https://icondumpsters.com/" className="bg-[#0d9488] text-white px-5 py-3 rounded-lg hover:bg-teal-700">Get Free Quote</Link>
        <a href="tel:+18019186000" className="border-2 border-[#0d9488] text-[#0d9488] px-5 py-3 rounded-lg hover:bg-[#0d9488] hover:text-white">Call (801) 918‑6000</a>
      </div>
    </div>
  );
}


