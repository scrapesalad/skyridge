'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface InternalLinksProps {
  currentPath?: string;
  exclude?: string[];
  className?: string;
}

const ALL_LINKS = {
  services: [
    { label: 'Dumpster Sizes', href: '/dumpster-sizes' },
    { label: 'Dumpster Calculator', href: '/dumpster-calculator' },
    { label: 'Dumpster Size Guide Utah', href: '/dumpster-size-guide-utah' },
    { label: 'Cheap Dumpster Rentals Near Me', href: '/cheap-dumpster-rentals-near-me' },
    { label: 'Dumpster Rental Cost Calculator', href: '/dumpster-rental-cost-calculator' },
    { label: 'Industrial Dumpster Rental', href: '/services/industrial-dumpster-rental' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  guides: [
    { label: 'Complete Dumpster Rental Guide 2025', href: '/dumpster-rental-guide-2025' },
    { label: 'Dumpster Rentals Near Me 2025', href: '/dumpster-rentals-near-me-2025' },
    { label: 'Construction Waste Management 2025', href: '/construction-waste-management-2025' },
    { label: 'Home Renovation Waste Disposal', href: '/home-renovation-waste-disposal-guide' },
    { label: 'Commercial Dumpster Rental Solutions', href: '/commercial-dumpster-rental-business-solutions' },
    { label: 'Utah Waste Management Regulations', href: '/utah-waste-management-regulations' },
    { label: 'Dumpster Permit Guide Utah', href: '/dumpster-permit-guide-utah' },
    { label: 'Dumpster Size Estimation Guide', href: '/blog/dumpster-size-estimation-guide' },
  ],
  areas: [
    { label: 'Salt Lake City', href: '/dumpster-rental-salt-lake-city-ut' },
    { label: 'West Valley City', href: '/dumpster-rental-west-valley-city-ut' },
    { label: 'Sandy', href: '/dumpster-rental-sandy-ut' },
    { label: 'West Jordan', href: '/dumpster-rental-west-jordan-ut' },
    { label: 'Murray', href: '/dumpster-rental-murray-ut' },
    { label: 'South Jordan', href: '/dumpster-rental-south-jordan-ut' },
    { label: 'Orem', href: '/dumpster-rental-orem-ut' },
    { label: 'Provo', href: '/dumpster-rental-provo-ut' },
    { label: 'Layton', href: '/dumpster-rental-layton-ut' },
    { label: 'Taylorsville', href: '/dumpster-rental-taylorsville-ut' },
    { label: 'Millcreek', href: '/dumpster-rental-millcreek-ut' },
    { label: 'Holladay', href: '/dumpster-rental-holladay-ut' },
  ],
  commercial: [
    { label: 'Commercial Dumpster Rental Salt Lake City', href: '/services/commercial-dumpster-rental-salt-lake-city-ut' },
    { label: 'Commercial Dumpster Rental Murray', href: '/services/commercial-dumpster-rental-murray-ut' },
    { label: 'Commercial Dumpster Rental Sandy', href: '/services/commercial-dumpster-rental-sandy-ut' },
    { label: 'Commercial Dumpster Rental West Jordan', href: '/services/commercial-dumpster-rental-west-jordan-ut' },
    { label: 'Commercial Dumpster Rental Orem', href: '/services/commercial-dumpster-rental-orem-ut' },
    { label: 'Commercial Dumpster Rental Provo', href: '/services/commercial-dumpster-rental-provo-ut' },
  ],
  residential: [
    { label: 'Residential Dumpster Rental Salt Lake City', href: '/services/residential-dumpster-rental-salt-lake-city-ut' },
    { label: 'Residential Dumpster Rental Murray', href: '/services/residential-dumpster-rental-murray-ut' },
    { label: 'Residential Dumpster Rental Sandy', href: '/services/residential-dumpster-rental-sandy-ut' },
    { label: 'Residential Dumpster Rental West Jordan', href: '/services/residential-dumpster-rental-west-jordan-ut' },
    { label: 'Residential Dumpster Rental South Jordan', href: '/services/residential-dumpster-rental-south-jordan-ut' },
    { label: 'Residential Dumpster Rental Orem', href: '/services/residential-dumpster-rental-orem-ut' },
  ],
  utilities: [
    { label: 'Frequent Buyers Program', href: '/frequent-buyers' },
    { label: 'Multiple Sizes Available', href: '/multiple-sizes-available' },
    { label: 'Utah-Wide Coverage', href: '/utah-wide-coverage' },
    { label: 'Dumpster Rentals Near Me Prices', href: '/dumpster-rentals-near-me-prices' },
    { label: 'AI Optimized Content', href: '/ai-optimized-content' },
  ],
};

export default function InternalLinks({ currentPath, exclude = [], className }: InternalLinksProps) {
  const pathname = usePathname();
  const excludeSet = new Set<string>([...(exclude || []), currentPath || pathname || '/']);

  function filterList(list: { label: string; href: string }[]) {
    const seen = new Set<string>();
    return list.filter((item) => {
      if (excludeSet.has(item.href)) return false;
      if (seen.has(item.href)) return false;
      seen.add(item.href);
      return true;
    });
  }

  const services = filterList(ALL_LINKS.services);
  const guides = filterList(ALL_LINKS.guides);
  const areas = filterList(ALL_LINKS.areas);
  const commercial = filterList(ALL_LINKS.commercial);
  const residential = filterList(ALL_LINKS.residential);
  const utilities = filterList(ALL_LINKS.utilities);

  return (
    <section className={`bg-white rounded-xl shadow-md p-8 ${className || ''}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More With Icon Dumpsters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Popular Services</h3>
          <ul className="space-y-2 text-gray-700">
            {services.slice(0, 6).map((l) => (
              <li key={l.href}>• <Link href={l.href} className="text-[#0d9488] hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Helpful Guides</h3>
          <ul className="space-y-2 text-gray-700">
            {guides.slice(0, 6).map((l) => (
              <li key={l.href}>• <Link href={l.href} className="text-[#0d9488] hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Top Areas</h3>
          <ul className="space-y-2 text-gray-700">
            {areas.slice(0, 6).map((l) => (
              <li key={l.href}>• <Link href={l.href} className="text-[#0d9488] hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Commercial Services</h3>
          <ul className="space-y-2 text-gray-700">
            {commercial.slice(0, 6).map((l) => (
              <li key={l.href}>• <Link href={l.href} className="text-[#0d9488] hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Residential Services</h3>
          <ul className="space-y-2 text-gray-700">
            {residential.slice(0, 6).map((l) => (
              <li key={l.href}>• <Link href={l.href} className="text-[#0d9488] hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Utilities & Programs</h3>
          <ul className="space-y-2 text-gray-700">
            {utilities.slice(0, 6).map((l) => (
              <li key={l.href}>• <Link href={l.href} className="text-[#0d9488] hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


