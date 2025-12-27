'use client';

import Link from 'next/link';

interface StrategicInternalLinksProps {
  pageType?: 'service' | 'city' | 'calculator' | 'homepage';
  cityName?: string;
  serviceType?: string;
  className?: string;
}

export default function StrategicInternalLinks({
  pageType = 'homepage',
  cityName,
  serviceType,
  className = '',
}: StrategicInternalLinksProps) {
  const getLinks = () => {
    switch (pageType) {
      case 'service':
        return [
          { text: 'All Roofing Services', href: '/services/roof-replacement', description: 'Complete service catalog' },
          { text: 'Roofing Calculators', href: '/calculators/roofing-cost', description: 'Free estimate tools' },
          { text: 'Utah Roofing Company', href: '/utah-roofing-company', description: 'About our company' },
          { text: 'Roof Inspection Services', href: '/services/roof-inspection', description: 'Professional inspections' },
          { text: 'Emergency Roof Repair', href: '/services/emergency-roof-repair', description: '24/7 emergency service' },
          { text: 'Roofing Materials Guide', href: '/materials', description: 'Material options' },
        ];

      case 'city':
        const citySlug = cityName?.toLowerCase().replace(/\s+/g, '-') || '';
        return [
          { text: `${cityName} Roofing Services`, href: `/locations/${citySlug}`, description: `Complete roofing in ${cityName}` },
          { text: `Roof Replacement ${cityName}`, href: `/locations/${citySlug}`, description: `Professional replacement in ${cityName}` },
          { text: `Commercial Roofing ${cityName}`, href: `/services/commercial-roofing`, description: `Business solutions in ${cityName}` },
          { text: `Residential Roofing ${cityName}`, href: `/services/residential-roofing`, description: `Home roofing in ${cityName}` },
          { text: 'Roofing Cost Calculator', href: '/calculators/roofing-cost', description: 'Free estimate tool' },
          { text: 'Free Roof Inspection', href: '/services/roof-inspection', description: 'Schedule inspection' },
        ];

      case 'calculator':
        return [
          { text: 'Roofing Cost Calculator', href: '/calculators/roofing-cost', description: 'Estimate project cost' },
          { text: 'Shingle Calculator', href: '/calculators/shingle', description: 'Calculate shingles needed' },
          { text: 'Roof Pitch Calculator', href: '/calculators/roof-pitch', description: 'Determine roof pitch' },
          { text: 'Square Footage Calculator', href: '/calculators/square-footage', description: 'Calculate roof area' },
          { text: 'All Roofing Calculators', href: '/calculators', description: 'View all tools' },
          { text: 'Get Professional Quote', href: '/contact', description: 'Contact for accurate estimate' },
        ];

      default: // homepage
        return [
          { text: 'Roof Replacement Services', href: '/services/roof-replacement', description: 'Complete roof replacement' },
          { text: 'Roof Repair Services', href: '/services/roof-repairs', description: 'Professional repairs' },
          { text: 'Roofing Cost Calculator', href: '/calculators/roofing-cost', description: 'Free estimate tool' },
          { text: 'Utah Service Areas', href: '/locations/salt-lake-city', description: 'Cities we serve' },
          { text: 'Emergency Roof Repair', href: '/services/emergency-roof-repair', description: '24/7 availability' },
          { text: 'Free Roof Inspection', href: '/services/roof-inspection', description: 'Schedule today' },
        ];
    }
  };

  const links = getLinks();

  return (
    <section className={`bg-white rounded-xl shadow-lg p-8 mb-8 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {pageType === 'service' && 'Related Roofing Services & Resources'}
        {pageType === 'city' && `More Roofing Services in ${cityName}`}
        {pageType === 'calculator' && 'More Roofing Tools & Resources'}
        {pageType === 'homepage' && 'Explore Our Roofing Services'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="group block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
              {link.text}
            </h3>
            <p className="text-gray-600 text-sm">
              {link.description}
            </p>
            <div className="mt-3 text-blue-600 font-medium text-sm group-hover:underline">
              Learn More →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
