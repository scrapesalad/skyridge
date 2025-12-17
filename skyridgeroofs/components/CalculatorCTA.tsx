import Link from 'next/link';

interface CalculatorCTAProps {
  className?: string;
  title?: string;
  description?: string;
  href: string;
  buttonText?: string;
}

export default function CalculatorCTA({ 
  className = '',
  title = 'Try our Roofing Calculator',
  description = 'Get an instant estimate tailored to your project in seconds.',
  href,
  buttonText = 'Try the Calculator'
}: CalculatorCTAProps) {
  return (
    <section className={`bg-gradient-to-br from-blue-50 to-primary/10 p-6 rounded-xl border border-primary/20 ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-primary">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
        <Link
          href={href}
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

