'use client';

import Link from 'next/link';

interface StrategicInternalLinksProps {
  pageType?: 'dumpster-size' | 'service' | 'city' | 'guide' | 'homepage';
  currentSize?: '15-yard' | '20-yard' | '30-yard';
  cityName?: string;
  serviceType?: string;
  className?: string;
}

export default function StrategicInternalLinks({
  pageType = 'homepage',
  currentSize,
  cityName,
  serviceType,
  className = '',
}: StrategicInternalLinksProps) {
  const getLinks = () => {
    switch (pageType) {
      case 'dumpster-size':
        const sizeLinks = [
          { text: 'Dumpster Sizes Guide', href: '/dumpster-sizes', description: 'Compare all dumpster sizes' },
          { text: 'Dumpster Size Calculator', href: '/dumpster-calculator', description: 'Calculate the right size' },
          { text: 'Dumpster Rental Pricing', href: '/dumpster-prices', description: 'Transparent pricing information' },
          { text: 'Utah Dumpster Permits Guide', href: '/utah-dumpster-permits-guide', description: 'Permit requirements' },
        ];

        // Add other size links if not current
        if (currentSize !== '15-yard') {
          sizeLinks.push({ text: '15 Yard Dumpster Rental', href: '/15-yard-dumpster-rental', description: 'Perfect for small projects' });
        }
        if (currentSize !== '20-yard') {
          sizeLinks.push({ text: '20 Yard Dumpster Rental', href: '/20-yard-dumpster-rental', description: 'Most popular size' });
        }
        if (currentSize !== '30-yard') {
          sizeLinks.push({ text: '30 Yard Dumpster Rental', href: '/30-yard-dumpster-rental', description: 'Large capacity option' });
        }

        return sizeLinks;

      case 'service':
        return [
          { text: 'All Dumpster Rental Services', href: '/services', description: 'Complete service catalog' },
          { text: 'Dumpster Rental Blog & Guides', href: '/blog', description: 'Expert tips and guides' },
          { text: 'Dumpster Sizes Guide', href: '/dumpster-sizes', description: 'Choose the right size' },
          { text: 'Dumpster Rental Near Me', href: '/dumpster-rentals-near-me', description: 'Local service areas' },
          { text: 'Dumpster Rental Pricing', href: '/dumpster-prices', description: 'Transparent pricing' },
          { text: 'Same-Day Dumpster Delivery', href: '/services/same-day-dumpster-delivery', description: 'Fast delivery service' },
          { text: 'Dumpster Rental FAQ', href: '/faq', description: 'Common questions answered' },
        ];

      case 'city':
        const citySlug = cityName?.toLowerCase().replace(/\s+/g, '-') || '';
        return [
          { text: `${cityName} Dumpster Rental Services`, href: `/dumpster-rental-${citySlug}-ut`, description: `Complete dumpster rental in ${cityName}` },
          { text: `Roll-off Dumpster Rental ${cityName}`, href: `/dumpster-rental-${citySlug}-ut`, description: `Professional roll-off service in ${cityName}` },
          { text: `Commercial Dumpster Rental ${cityName}`, href: `/dumpster-rental-${citySlug}-ut`, description: `Business solutions in ${cityName}` },
          { text: `Residential Dumpster Rental ${cityName}`, href: `/dumpster-rental-${citySlug}-ut`, description: `Home project solutions in ${cityName}` },
          { text: 'Dumpster Sizes Guide', href: '/dumpster-sizes', description: 'Choose the right dumpster size' },
          { text: 'Utah Dumpster Permits', href: '/utah-dumpster-permits-guide', description: 'City permit requirements' },
        ];

      case 'guide':
        return [
          { text: 'Dumpster Sizes Guide', href: '/dumpster-sizes', description: 'Complete size comparison' },
          { text: 'Dumpster Rental Services', href: '/services', description: 'All service options' },
          { text: 'Dumpster Rental Pricing', href: '/dumpster-prices', description: 'Transparent pricing' },
          { text: 'Dumpster Rental Near Me', href: '/dumpster-rentals-near-me', description: 'Find local service' },
          { text: 'Dumpster Rental FAQ', href: '/faq', description: 'Common questions' },
          { text: 'Contact Us', href: '/contact', description: 'Get in touch' },
        ];

      default: // homepage
        return [
          { text: 'Dumpster Sizes Guide', href: '/dumpster-sizes', description: 'Compare 15, 20, and 30-yard dumpsters' },
          { text: 'Dumpster Rental Services in Utah', href: '/services', description: 'Residential and commercial solutions' },
          { text: 'Dumpster Rental Near Me', href: '/dumpster-rentals-near-me', description: 'Find local dumpster rental' },
          { text: 'Dumpster Rental Pricing', href: '/dumpster-prices', description: 'Transparent pricing with no hidden fees' },
          { text: 'Same-Day Dumpster Delivery', href: '/services/same-day-dumpster-delivery', description: 'Fast delivery service' },
          { text: 'Dumpster Rental FAQ', href: '/faq', description: 'Common questions answered' },
        ];
    }
  };

  const links = getLinks();

  return (
    <section className={`bg-white rounded-xl shadow-lg p-8 mb-8 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {pageType === 'dumpster-size' && 'Related Dumpster Rental Resources'}
        {pageType === 'service' && 'Related Services & Resources'}
        {pageType === 'city' && `More Dumpster Rental Services in ${cityName}`}
        {pageType === 'guide' && 'Related Resources'}
        {pageType === 'homepage' && 'Explore Dumpster Rental Services'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="group block p-6 border border-gray-200 rounded-lg hover:border-[#0d9488] hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0d9488] mb-2">
              {link.text}
            </h3>
            <p className="text-gray-600 text-sm">
              {link.description}
            </p>
            <div className="mt-3 text-[#0d9488] font-medium text-sm group-hover:underline">
              Learn More →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

