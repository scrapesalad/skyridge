'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuoteSidebar } from '@/contexts/QuoteSidebarContext';

type DropdownKey = 'services' | 'locations' | 'financing' | null;

type LinkItem = { href: string; label: string };

type ServicesPanel = 'commercial' | 'residential' | 'types';

function ChevronDownIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 111.06-1.06l4.24 4.24a.75.75 0 010 1.06l-4.24 4.24a.75.75 0 01-1.08.02z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const { openSidebar } = useQuoteSidebar();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [servicesPanel, setServicesPanel] = useState<ServicesPanel>('commercial');

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCommercialOpen, setMobileCommercialOpen] = useState(false);
  const [mobileResidentialOpen, setMobileResidentialOpen] = useState(false);
  const [mobileTypesOpen, setMobileTypesOpen] = useState(false);

  const PHONE_DISPLAY = '801-252-6936';
  const PHONE_TEL = '8012526936';

  const locations: LinkItem[] = [
    { href: '/locations/salt-lake-city', label: 'Salt Lake City' },
    { href: '/locations/sandy', label: 'Sandy' },
    { href: '/locations/west-jordan', label: 'West Jordan' },
    { href: '/locations/provo', label: 'Provo' },
    { href: '/locations/orem', label: 'Orem' },
    { href: '/locations/lehi', label: 'Lehi' },
    { href: '/locations/beaver-mountain', label: 'Beaver Mountain' },
    { href: '/locations', label: 'All Locations' },
  ];

  const commercialLinks: LinkItem[] = [
    { href: '/services/commercial-roofing-services', label: 'Commercial Roofing Services' },
    { href: '/services/emergency-roof-repair', label: 'Emergency Roof Repairs' },
    { href: '/services/roof-installation', label: 'Roof Installation' },
    { href: '/services/roof-restoration-repairs', label: 'Roof Restoration & Repairs' },
    { href: '/services/roof-maintenance', label: 'Roof Maintenance' },
    { href: '/services/roofing-systems-materials', label: 'Roofing Systems & Materials' },
    { href: '/services/roof-air-barrier', label: 'Roof Air Barrier' },
    { href: '/services/roof-waterproofing', label: 'Roof Waterproofing' },
    { href: '/services/metal-roofing', label: 'Metal Roofs' },
  ];

  const residentialLinks: LinkItem[] = [
    { href: '/services/residential-roofing-services', label: 'Residential Roofing Services' },
    { href: '/services/roof-replacement', label: 'Roof Replacement' },
    { href: '/services/roof-installation', label: 'Roof Installation' },
    { href: '/services/roof-repairs', label: 'Roof Repairs' },
    { href: '/services/emergency-roof-repair', label: 'Emergency Roof Repairs' },
    { href: '/services/roof-maintenance', label: 'Roof Maintenance' },
    { href: '/services/roof-inspection', label: 'Roof Inspection' },
    { href: '/services/shingle-roofing', label: 'Shingle Roofing' },
    { href: '/services/metal-roofing', label: 'Metal Roofs' },
    { href: '/services/flat-roofing', label: 'Flat Roofing' },
  ];

  const roofingTypesLinks: LinkItem[] = [
    { href: '/services/roofing-types', label: 'All Roofing Types' },
    { href: '/services/shingle-roofing', label: 'Shingle Roofing' },
    { href: '/services/metal-roofing', label: 'Metal Roofing' },
    { href: '/services/flat-roofing', label: 'Flat Roofing' },
    { href: '/services/roofing-systems-materials', label: 'Roofing Systems & Materials' },
    { href: '/services/roof-coatings', label: 'Roof Coatings' },
  ];

  const secondaryServiceLinks: LinkItem[] = [
    { href: '/services/siding', label: 'Siding' },
    { href: '/services/windows', label: 'Windows' },
    { href: '/services/brick-pointing', label: 'Brick Pointing' },
    { href: '/services/gutters-downspouts', label: 'Gutters & Downspouts' },
    { href: '/services/chimneys', label: 'Chimneys' },
  ];

  const activeServicesLinks =
    servicesPanel === 'commercial' ? commercialLinks : servicesPanel === 'residential' ? residentialLinks : roofingTypesLinks;

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    }

    function onPointerDown(e: MouseEvent | TouchEvent) {
      const target = e.target as Node | null;
      if (!target) return;
      if (headerRef.current && !headerRef.current.contains(target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, []);

  return (
    <header ref={headerRef} className="bg-white sticky top-0 z-50 shadow-md">
      <div className="border-t-2 border-amber-100 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 gap-3">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo/ROOFING.png"
                alt="Sky Ridge Roofing"
                width={280}
                height={100}
                className="h-14 md:h-20 w-auto object-contain"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-4 py-2 rounded font-semibold hover:bg-primary hover:text-white transition whitespace-nowrap"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                {PHONE_DISPLAY}
              </a>
              <button
                onClick={openSidebar}
                className="bg-primary text-white px-4 py-2 rounded font-semibold hover:bg-primary-dark transition whitespace-nowrap"
              >
                Get A Quote
              </button>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center border border-gray-300 text-gray-900 px-3 py-2 rounded font-semibold whitespace-nowrap"
              >
                Call
              </a>
              <button
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="inline-flex items-center justify-center border border-gray-300 text-gray-900 p-2 rounded"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-primary-dark text-white" aria-label="Primary">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center justify-end gap-1">
            {/* Services mega-menu */}
            <div
              className="relative"
              onMouseEnter={() => {
                setOpenDropdown('services');
                setServicesPanel('commercial');
              }}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="px-4 py-4 hover:bg-primary transition font-semibold uppercase text-sm flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={openDropdown === 'services'}
                onClick={() => setOpenDropdown((v) => (v === 'services' ? null : 'services'))}
              >
                Services <ChevronDownIcon />
              </button>

              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 bg-white text-gray-900 shadow-xl border border-gray-200 w-[680px] z-50" role="menu">
                  <div className="grid grid-cols-2">
                    <div className="py-2 border-r border-gray-200">
                      <Link href="/services/emergency-roof-repair" className="block px-4 py-2 hover:bg-gray-100 font-semibold">
                        24/7 Emergency Roofing Services
                      </Link>

                      <button
                        type="button"
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 font-semibold flex items-center justify-between ${
                          servicesPanel === 'commercial' ? 'bg-gray-100' : ''
                        }`}
                        onMouseEnter={() => setServicesPanel('commercial')}
                        onFocus={() => setServicesPanel('commercial')}
                      >
                        Commercial Roofing <ChevronRightIcon />
                      </button>

                      <button
                        type="button"
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 font-semibold flex items-center justify-between ${
                          servicesPanel === 'residential' ? 'bg-gray-100' : ''
                        }`}
                        onMouseEnter={() => setServicesPanel('residential')}
                        onFocus={() => setServicesPanel('residential')}
                      >
                        Residential Roofing <ChevronRightIcon />
                      </button>

                      <button
                        type="button"
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 font-semibold flex items-center justify-between ${
                          servicesPanel === 'types' ? 'bg-gray-100' : ''
                        }`}
                        onMouseEnter={() => setServicesPanel('types')}
                        onFocus={() => setServicesPanel('types')}
                      >
                        Roofing Types <ChevronRightIcon />
                      </button>

                      <div className="mt-1 border-t border-gray-200 pt-1">
                        {secondaryServiceLinks.map((item) => (
                          <Link key={item.href} href={item.href} className="block px-4 py-2 hover:bg-gray-100">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="py-2">
                      <div className="px-4 py-2 font-semibold text-gray-900">
                        {servicesPanel === 'commercial'
                          ? 'Commercial Roofing Services'
                          : servicesPanel === 'residential'
                            ? 'Residential Roofing Services'
                            : 'Roofing Types'}
                      </div>
                      {activeServicesLinks.map((item) => (
                        <Link key={item.href} href={item.href} className="block px-4 py-2 hover:bg-gray-100">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Locations dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('locations')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="px-4 py-4 hover:bg-primary transition font-semibold uppercase text-sm flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={openDropdown === 'locations'}
                onClick={() => setOpenDropdown((v) => (v === 'locations' ? null : 'locations'))}
              >
                Locations <ChevronDownIcon />
              </button>
              {openDropdown === 'locations' && (
                <div className="absolute top-full left-0 bg-white text-gray-900 shadow-xl border border-gray-200 min-w-[260px] py-2 z-50" role="menu">
                  {locations.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 hover:bg-gray-100">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Financing dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('financing')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="px-4 py-4 hover:bg-primary transition font-semibold uppercase text-sm flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={openDropdown === 'financing'}
                onClick={() => setOpenDropdown((v) => (v === 'financing' ? null : 'financing'))}
              >
                Financing <ChevronDownIcon />
              </button>
              {openDropdown === 'financing' && (
                <div className="absolute top-full left-0 bg-white text-gray-900 shadow-xl border border-gray-200 min-w-[240px] py-2 z-50" role="menu">
                  <Link href="/financing" className="block px-4 py-2 hover:bg-gray-100 font-semibold">
                    Financing Options
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
                    Apply / Request Details
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="px-4 py-4 hover:bg-primary transition font-semibold uppercase text-sm">
              About
            </Link>
            <Link href="/contact" className="px-4 py-4 hover:bg-primary transition font-semibold uppercase text-sm">
              Contact
            </Link>
            <Link href="/blog" className="px-4 py-4 hover:bg-primary transition font-semibold uppercase text-sm">
              Blog
            </Link>

            <div className="ml-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center bg-primary text-white px-4 py-2 rounded font-semibold hover:bg-primary-light transition"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-3 space-y-2">
              <button
                type="button"
                className="w-full text-left px-4 py-2 font-semibold bg-white/10 rounded"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
              >
                Services
              </button>
              {mobileServicesOpen && (
                <div className="px-2 space-y-1">
                  <Link
                    href="/services/emergency-roof-repair"
                    className="block px-4 py-2 rounded hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    24/7 Emergency Roofing Services
                  </Link>

                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 rounded hover:bg-white/10 font-semibold"
                    onClick={() => setMobileCommercialOpen((v) => !v)}
                    aria-expanded={mobileCommercialOpen}
                  >
                    Commercial Roofing
                  </button>
                  {mobileCommercialOpen && (
                    <div className="pl-4">
                      {commercialLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 rounded hover:bg-white/10"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 rounded hover:bg-white/10 font-semibold"
                    onClick={() => setMobileResidentialOpen((v) => !v)}
                    aria-expanded={mobileResidentialOpen}
                  >
                    Residential Roofing
                  </button>
                  {mobileResidentialOpen && (
                    <div className="pl-4">
                      {residentialLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 rounded hover:bg-white/10"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 rounded hover:bg-white/10 font-semibold"
                    onClick={() => setMobileTypesOpen((v) => !v)}
                    aria-expanded={mobileTypesOpen}
                  >
                    Roofing Types
                  </button>
                  {mobileTypesOpen && (
                    <div className="pl-4">
                      {roofingTypesLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 rounded hover:bg-white/10"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  <div className="pt-2 border-t border-white/20">
                    {secondaryServiceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 rounded hover:bg-white/10"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Link href="/locations" className="block px-4 py-2 rounded hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>
                Locations
              </Link>
              <Link href="/financing" className="block px-4 py-2 rounded hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>
                Financing
              </Link>
              <Link href="/about" className="block px-4 py-2 rounded hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="block px-4 py-2 rounded hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link href="/blog" className="block px-4 py-2 rounded hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openSidebar();
                }}
                className="w-full bg-primary text-white px-4 py-2 rounded font-semibold hover:bg-primary-light transition"
              >
                Get A Quote
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
