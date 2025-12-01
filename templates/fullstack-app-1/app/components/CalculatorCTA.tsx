import Link from 'next/link';

export default function CalculatorCTA({ className = '' }: { className?: string }) {
  return (
    <section className={`bg-gradient-to-br from-purple-50 to-[#0d9488]/10 p-6 rounded-xl border border-[#0d9488]/20 ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-[#0d9488]">Try our Dumpster Calculator</h3>
          <p className="text-gray-700">Get an instant estimate tailored to your project in seconds.</p>
        </div>
        <Link
          href="https://icondumpsters.com/dumpster-calculator"
          className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
        >
          Try the Calculator
        </Link>
      </div>
    </section>
  );
}


