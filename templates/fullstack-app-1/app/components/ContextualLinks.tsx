'use client';

import Link from 'next/link';

interface ContextualLink {
  text: string;
  href: string;
  description?: string;
}

interface ContextualLinksProps {
  type?: 'dumpster-sizes' | 'services' | 'guides' | 'cities' | 'pricing' | 'custom';
  customLinks?: ContextualLink[];
  cityName?: string;
  excludeCurrent?: boolean;
  className?: string;
}

export default function ContextualLinks({
  type = 'custom',
  customLinks,
  cityName,
  excludeCurrent = true,
  className = '',
}: ContextualLinksProps) {
  const getLinksByType = (): ContextualLink[] => {
    switch (type) {
      case 'dumpster-sizes':
        return [
          { text: '15 Yard Dumpster Rental', href: '/15-yard-dumpster-rental', description: 'Perfect for small projects' },
          { text: '20 Yard Dumpster Rental', href: '/20-yard-dumpster-rental', description: 'Most popular size' },
          { text: '30 Yard Dumpster Rental', href: '/30-yard-dumpster-rental', description: 'Large capacity option' },
          { text: 'Dumpster Size Guide Utah', href: '/dumpster-size-guide-utah', description: 'Complete sizing guide' },
          { text: 'Dumpster Size Calculator', href: '/dumpster-calculator', description: 'Calculate the right size' },
        ];

      case 'services':
        return [
          { text: 'Residential Dumpster Rental', href: '/services/residential-dumpster-rental', description: 'Home project solutions' },
          { text: 'Commercial Dumpster Rental', href: '/services/commercial-dumpster-rental', description: 'Business waste management' },
          { text: 'Construction Dumpster Rental', href: '/services/construction-dumpster-rental', description: 'Construction site solutions' },
          { text: 'Roll-off Dumpster Rental', href: '/services/roll-off-dumpster-rental', description: 'Professional roll-off service' },
          { text: 'Same-Day Dumpster Delivery', href: '/services/same-day-dumpster-delivery', description: 'Fast delivery service' },
        ];

      case 'guides':
        return [
          { text: 'Dumpster Rental Guide 2025', href: '/dumpster-rental-guide-2025', description: 'Complete rental guide' },
          { text: 'Construction Waste Management', href: '/construction-waste-management', description: 'Construction waste guide' },
          { text: 'Home Renovation Waste Disposal', href: '/home-renovation-waste-disposal-guide', description: 'Home renovation guide' },
          { text: 'Utah Dumpster Permits Guide', href: '/utah-dumpster-permits-guide', description: 'Permit requirements' },
          { text: 'Dumpster Rental Pricing Guide', href: '/dumpster-prices', description: 'Transparent pricing info' },
        ];

      case 'cities':
        if (cityName) {
          const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
          return [
            { text: `${cityName} Dumpster Rental`, href: `/dumpster-rental-${citySlug}-ut`, description: `Dumpster rental in ${cityName}` },
            { text: `Dumpster Rental ${cityName} Utah`, href: `/dumpster-rental-${citySlug}-ut`, description: `Professional service in ${cityName}` },
            { text: `Roll-off Dumpster Rental ${cityName}`, href: `/dumpster-rental-${citySlug}-ut`, description: `Roll-off service in ${cityName}` },
            { text: `Commercial Dumpster Rental ${cityName}`, href: `/dumpster-rental-${citySlug}-ut`, description: `Commercial service in ${cityName}` },
            { text: `Residential Dumpster Rental ${cityName}`, href: `/dumpster-rental-${citySlug}-ut`, description: `Residential service in ${cityName}` },
          ];
        }
        return [
          { text: 'Salt Lake City Dumpster Rental', href: '/dumpster-rental-salt-lake-city-ut', description: 'Utah\'s capital city' },
          { text: 'Provo Dumpster Rental', href: '/dumpster-rental-provo-ut', description: 'Home to BYU' },
          { text: 'Sandy Dumpster Rental', href: '/dumpster-rental-sandy-ut', description: 'Family-friendly community' },
          { text: 'West Valley City Dumpster Rental', href: '/dumpster-rental-west-valley-city-ut', description: 'Second largest city' },
          { text: 'West Jordan Dumpster Rental', href: '/dumpster-rental-west-jordan-ut', description: 'Growing suburban area' },
        ];

      case 'pricing':
        return [
          { text: 'Dumpster Rental Pricing', href: '/dumpster-prices', description: 'Transparent pricing info' },
          { text: 'Dumpster Rental Cost Calculator', href: '/dumpster-rental-cost-calculator', description: 'Calculate your costs' },
          { text: 'Dumpster Size Calculator', href: '/dumpster-calculator', description: 'Find the right size' },
          { text: 'Frequent Buyers Program', href: '/frequent-buyers', description: 'Save on multiple rentals' },
          { text: 'No Hidden Fees', href: '/fees', description: 'Transparent pricing' },
        ];

      default:
        return customLinks || [];
    }
  };

  const links = getLinksByType();

  if (links.length === 0) {
    return null;
  }

  return (
    <div className={`bg-gray-50 rounded-xl p-6 ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {type === 'dumpster-sizes' && 'Related Dumpster Sizes'}
        {type === 'services' && 'Related Services'}
        {type === 'guides' && 'Helpful Guides'}
        {type === 'cities' && (cityName ? `Other Cities Near ${cityName}` : 'Nearby Cities We Serve')}
        {type === 'pricing' && 'Pricing Resources'}
        {type === 'custom' && 'Related Resources'}
      </h3>
      <ul className="space-y-3">
        {links.slice(0, 5).map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="group flex items-start text-[#0d9488] hover:text-teal-700 transition-colors"
            >
              <span className="mr-2 text-teal-600 group-hover:text-teal-700">→</span>
              <div>
                <span className="font-semibold hover:underline">{link.text}</span>
                {link.description && (
                  <span className="block text-sm text-gray-600 mt-1">{link.description}</span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

