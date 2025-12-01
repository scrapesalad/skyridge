"use client";

export default function BookNowBanner({ className = '' }: { className?: string }) {
  return (
    <section className={`bg-gradient-to-r from-[#0d9488] to-teal-700 rounded-2xl p-8 text-white text-center ${className}`}>
      <h2 className="text-3xl font-bold mb-2">Ready to Book Now?</h2>
      <p className="text-purple-100 mb-6">Reserve your dumpster in minutes. Size, dates, and address — we'll handle the rest.</p>
      <a href="https://icondumpsters.com/book" className="inline-block bg-white text-[#0d9488] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Book Now</a>
    </section>
  );
}


