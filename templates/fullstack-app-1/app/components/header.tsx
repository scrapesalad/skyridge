'use client';

import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import PhoneModal from './PhoneModal';

// Logo component with fallback handling
function LogoImage() {
  // Use Next.js Image component for consistent server/client rendering
  return (
      <Image
        src="/images/optimized/IconDumpsters_Logo_Vector_Pantone266purple.webp"
        alt="Icon Dumpsters - Professional Dumpster Rental Services" 
        width={143}
        height={48}
        priority
        quality={85}
        sizes="143px"
        className="flex-shrink-0 mt-2 mb-0.5"
        style={{
          filter: 'hue-rotate(-90deg) saturate(1.3) brightness(0.95)',
          maxWidth: '143px',
          height: 'auto',
        }}
      />
  );
}

export default function Header() {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isCityMenuOpen, setIsCityMenuOpen] = useState(false);
  const [isDumpsterSizesMenuOpen, setIsDumpsterSizesMenuOpen] = useState(false);
  const [isFrequentBuyersMenuOpen, setIsFrequentBuyersMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isPricingMenuOpen, setIsPricingMenuOpen] = useState(false);
  const [isDumpsterRental101MenuOpen, setIsDumpsterRental101MenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesByDumpsterTypeOpen, setIsServicesByDumpsterTypeOpen] = useState(false);
  const [isServicesByLocationOpen, setIsServicesByLocationOpen] = useState(false);
  const [isServicesByProjectTypeOpen, setIsServicesByProjectTypeOpen] = useState(false);

  // Timeout refs for delayed menu closing
  const menuTimeouts = useRef<Record<string, NodeJS.Timeout>>({});

  // Helper function to handle menu close with delay - memoized to reduce re-renders
  const handleMenuClose = useCallback((setMenuOpen: (value: boolean) => void, menuKey: string, delay: number = 150) => {
    if (menuTimeouts.current[menuKey]) {
      clearTimeout(menuTimeouts.current[menuKey]);
    }
    menuTimeouts.current[menuKey] = setTimeout(() => {
      setMenuOpen(false);
    }, delay);
  }, []);

  // Helper function to handle menu open (cancel any pending close) - memoized
  const handleMenuOpen = useCallback((setMenuOpen: (value: boolean) => void, menuKey: string) => {
    if (menuTimeouts.current[menuKey]) {
      clearTimeout(menuTimeouts.current[menuKey]);
      delete menuTimeouts.current[menuKey];
    }
    setMenuOpen(true);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(menuTimeouts.current).forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <>
      {/* Top Strip - Very Thin Decorative Border - Teal Theme */}
      <div className="bg-teal-100 h-[2px]"></div>

      {/* Main Header - White Background - Teal Theme */}
      <header className="bg-white text-gray-800 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-1">
            {/* Logo with Text - Left Side */}
            <div className="flex items-center flex-shrink-0 mr-4">
              <a href="/" className="flex flex-col hover:opacity-90 transition-opacity duration-200">
                <LogoImage />
                <span className="text-teal-800 text-[11px] whitespace-nowrap">We've rented thousands of dumpsters</span>
              </a>
            </div>

            {/* Phone Number Section - Right Side - Teal Theme */}
            <div className="hidden lg:flex flex-col items-end">
              <a 
                href="tel:+18019186000" 
                className="text-teal-800 hover:text-teal-900 transition-colors text-sm underline mb-1"
                title="Call to Rent a Dumpster Today"
              >
                Call to Rent a Dumpster Today
              </a>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0 text-teal-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a 
                  href="tel:+18019186000" 
                  className="text-teal-800 hover:text-teal-900 transition-colors cursor-pointer whitespace-nowrap font-bold text-xl"
                  title="Call us at 801-918-6000"
                >
                  801-918-6000
                </a>
              </div>
            </div>

            {/* Mobile Phone Button */}
                  <button
                    onClick={() => setIsPhoneModalOpen(true)}
                    aria-label="Call Icon Dumpsters"
                    className="lg:hidden w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                  >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Bar - Teal Background - Matching Teal Theme */}
        <nav className="bg-gradient-to-r from-teal-700 to-teal-600 text-white overflow-visible">
          {/* Desktop Navigation - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
            <div className="flex items-center justify-between space-x-4 h-12 overflow-visible min-w-0">
              {/* Dumpster Rental 101 Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMenuOpen(setIsDumpsterRental101MenuOpen, 'dumpsterRental101')}
                onMouseLeave={() => handleMenuClose(setIsDumpsterRental101MenuOpen, 'dumpsterRental101')}
              >
                <button
                  className="text-white hover:text-gray-200 transition-colors flex items-center font-normal text-xs whitespace-nowrap overflow-visible"
                >
                  Dumpster Rental 101
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDumpsterRental101MenuOpen && (
                  <div
                    className="absolute top-full left-0 w-64 bg-transparent z-50"
                  >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="py-2">
                      <a href="https://icondumpsters.com/dumpster-rental-guide-2025" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 border-b border-gray-100">
                        <div className="font-semibold">Dumpster Rental Guide</div>
                        <div className="text-xs text-gray-500">Complete guide to dumpster rentals</div>
                      </a>
                      <a href="/guides/dumpster-sizes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 border-b border-gray-100">
                        <div className="font-semibold">How to Choose a Dumpster Size</div>
                        <div className="text-xs text-gray-500">Find the right size for your project</div>
                      </a>
                      <a href="/pricing/dumpster-prices" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                        <div className="font-semibold">Understanding Dumpster Fees</div>
                        <div className="text-xs text-gray-500">Learn about pricing & fees</div>
                      </a>
                    </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Dumpster Rental Prices Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMenuOpen(setIsPricingMenuOpen, 'pricing')}
                onMouseLeave={() => handleMenuClose(setIsPricingMenuOpen, 'pricing')}
              >
                <button
                  className="text-white hover:text-gray-200 transition-colors flex items-center font-normal text-xs whitespace-nowrap overflow-visible"
                >
                  Dumpster Rental Prices
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isPricingMenuOpen && (
                  <div
                    className="absolute top-full left-0 w-56 bg-transparent z-50"
                  >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="py-2">
                      <a href="/#pricing" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                        <div className="font-semibold">Pricing & Rates</div>
                        <div className="text-xs text-gray-500">View our competitive pricing</div>
                      </a>
                    </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Roll Off Dumpster Sizes Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMenuOpen(setIsDumpsterSizesMenuOpen, 'dumpsterSizes')}
                onMouseLeave={() => handleMenuClose(setIsDumpsterSizesMenuOpen, 'dumpsterSizes')}
              >
                <button
                  className="text-white hover:text-gray-200 transition-colors flex items-center font-normal text-xs whitespace-nowrap overflow-visible"
                >
                  Roll Off Dumpster Sizes
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                                 {isDumpsterSizesMenuOpen && (
                   <div
                     className="absolute top-full left-0 w-72 bg-transparent z-50"
                   >
                     <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                     <div className="py-2">
                       {/* Specialized Dumpsters */}
                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                         Specialized Dumpsters
                       </div>
                       <a href="/#10-yard-dirt" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 border-b border-gray-100">
                         <div className="font-semibold">10 Yard Dirt</div>
                         <div className="text-xs text-gray-500">Perfect for dirt & soil projects</div>
                       </a>
                       <a href="/#10-yard-mixed" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 border-b border-gray-100">
                         <div className="font-semibold">10 Yard Mixed</div>
                         <div className="text-xs text-gray-500">Mixed heavy loads</div>
                       </a>
                       <a href="/#12-yard-concrete" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 border-b border-gray-100">
                         <div className="font-semibold">12 Yard Concrete</div>
                         <div className="text-xs text-gray-500">Perfect for concrete projects</div>
                       </a>
                       
                       {/* Standard Dumpsters */}
                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                         Standard Dumpsters
                       </div>
                       <a href="/15-yard-dumpster-rental" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 border-b border-gray-100">
                         <div className="font-semibold">15 Yard Dumpsters</div>
                         <div className="text-xs text-gray-500">Ideal for medium projects</div>
                       </a>
                       <a href="/20-yard-dumpster-rental" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 border-b border-gray-100">
                         <div className="font-semibold">20 Yard Dumpsters</div>
                         <div className="text-xs text-gray-500">Great for large projects</div>
                       </a>
                       <a href="/30-yard-dumpster-rental" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 border-b border-gray-100">
                         <div className="font-semibold">30 Yard Dumpsters</div>
                         <div className="text-xs text-gray-500">For major projects</div>
                       </a>
                       <a href="/guides/dumpster-sizes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                         <div className="font-semibold">View All Dumpster Sizes</div>
                         <div className="text-xs text-gray-500">See complete selection</div>
                       </a>
                     </div>
                     </div>
                   </div>
                 )}
              </div>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMenuOpen(setIsServicesMenuOpen, 'services')}
                onMouseLeave={() => {
                  handleMenuClose(setIsServicesMenuOpen, 'services');
                  setIsServicesByDumpsterTypeOpen(false);
                  setIsServicesByLocationOpen(false);
                  setIsServicesByProjectTypeOpen(false);
                }}
              >
                <button
                  className="text-white hover:text-gray-200 transition-colors flex items-center font-normal text-xs whitespace-nowrap overflow-visible"
                >
                  Services
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesMenuOpen && (
                  <div
                    className="absolute top-full left-0 w-56 bg-transparent z-50"
                  >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="py-2">
                      {/* By Dumpster Type - with nested submenu */}
                      <div 
                        className="relative"
                        onMouseEnter={() => setIsServicesByDumpsterTypeOpen(true)}
                        onMouseLeave={() => setIsServicesByDumpsterTypeOpen(false)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-teal-50 hover:text-teal-700 cursor-pointer">
                          By Dumpster Type
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        {isServicesByDumpsterTypeOpen && (
                          <div className="absolute left-full top-0 pl-1 w-56 bg-transparent z-50">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                              <div className="py-2">
                                <a href="/10-yard-dumpster-rental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">10 Yard Dumpsters</a>
                                <a href="/15-yard-dumpster-rental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">15 Yard Dumpsters</a>
                                <a href="/20-yard-dumpster-rental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">20 Yard Dumpsters</a>
                                <a href="/30-yard-dumpster-rental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">30 Yard Dumpsters</a>
                                <a href="/40-yard-dumpster-rental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">40 Yard Dumpsters</a>
                                <a href="/guides/dumpster-sizes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">View All Sizes</a>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* By Location - with nested submenu */}
                      <div 
                        className="relative"
                        onMouseEnter={() => setIsServicesByLocationOpen(true)}
                        onMouseLeave={() => setIsServicesByLocationOpen(false)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-teal-50 hover:text-teal-700 cursor-pointer">
                          By Location
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        {isServicesByLocationOpen && (
                          <div className="absolute left-full top-0 pl-1 w-56 bg-transparent z-50">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                              <div className="py-2">
                                <a href="/locations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">All Locations</a>
                                <a href="/dumpster-rental-salt-lake-city-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">Salt Lake City</a>
                                <a href="/dumpster-rental-west-valley-city-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">West Valley City</a>
                                <a href="/dumpster-rental-west-jordan-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">West Jordan</a>
                                <a href="/dumpster-rental-sandy-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">Sandy</a>
                                <a href="/dumpster-rental-orem-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">Orem</a>
                                <a href="/dumpster-rental-provo-ut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">Provo</a>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* By Project Type - with nested submenu */}
                      <div 
                        className="relative"
                        onMouseEnter={() => setIsServicesByProjectTypeOpen(true)}
                        onMouseLeave={() => setIsServicesByProjectTypeOpen(false)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-teal-50 hover:text-teal-700 cursor-pointer">
                          By Project Type
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        {isServicesByProjectTypeOpen && (
                          <div className="absolute left-full top-0 pl-1 w-56 bg-transparent z-50">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                              <div className="py-2">
                                <a href="/services/residential-dumpster-rental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">Residential</a>
                                <a href="/services/construction-dumpster-rental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">Construction</a>
                                <a href="/services/commercial-dumpster-rental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">Commercial</a>
                                <a href="/services/commercial-dumpster-rental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">Industrial</a>
                                <a href="/services/yard-waste-removal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">Yard Waste</a>
                                <a href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">All Services</a>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMenuOpen(setIsCityMenuOpen, 'resources')}
                onMouseLeave={() => handleMenuClose(setIsCityMenuOpen, 'resources')}
              >
                <button
                  className="text-white hover:text-gray-200 transition-colors flex items-center font-normal text-xs whitespace-nowrap overflow-visible"
                >
                  Resources
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isCityMenuOpen && (
                  <div
                    className="absolute top-full left-0 w-64 bg-transparent z-50"
                  >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="py-2">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Resources
                      </div>
                      <a href="/dumpster-rental-guide-2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                        Dumpster Rental Guide
                      </a>
                      <a href="/dumpster-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                        Dumpster Calculator
                      </a>
                      <a href="/guides/dumpster-sizes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                        Dumpster Sizes Guide
                      </a>
                      <a href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                        Service Information
                      </a>
                    </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMenuOpen(setIsFrequentBuyersMenuOpen, 'aboutUs')}
                onMouseLeave={() => handleMenuClose(setIsFrequentBuyersMenuOpen, 'aboutUs')}
              >
                <button
                  className="text-white hover:text-gray-200 transition-colors flex items-center font-normal text-xs whitespace-nowrap overflow-visible"
                >
                  About Us
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isFrequentBuyersMenuOpen && (
                  <div
                    className="absolute top-full left-0 w-48 bg-transparent z-50"
                  >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="py-2">
                      <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                        About Icon Dumpsters
                      </a>
                      <a href="/frequent-buyers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                        Frequent Buyers Program
                      </a>
                    </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Dashboard - No Dropdown */}
              <a 
                href="/frequent-buyers" 
                className="text-white hover:text-gray-200 transition-colors font-normal text-xs whitespace-nowrap overflow-visible"
              >
                Service Dashboard
              </a>

            </div>
          </div>
          
          {/* Mobile Menu Button - Hidden on desktop, shown on mobile */}
          <div className="lg:hidden flex items-center justify-between px-4 h-12">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            className="p-2 rounded-md text-white hover:bg-white/20 flex-shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-6 py-6 space-y-4">
            {/* Mobile Services */}
            <div className="border-b border-gray-200 pb-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Services</div>
              <a href="/guides/dumpster-sizes" className="flex items-center justify-between text-teal-700 hover:text-teal-700 py-2 font-semibold">
                By Dumpster Type
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/locations" className="flex items-center justify-between text-teal-700 hover:text-teal-700 py-2 font-semibold">
                By Location
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/services" className="flex items-center justify-between text-teal-700 hover:text-teal-700 py-2 font-semibold">
                By Project Type
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Mobile SIZES */}
             <div className="border-t border-gray-200 pt-2">
               <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">SIZES - Specialized Dumpsters</div>
               <a href="/#10-yard-dirt" className="block text-teal-700 hover:text-teal-700 py-1">10 Yard Dirt</a>
               <a href="/#10-yard-mixed" className="block text-teal-700 hover:text-teal-700 py-1">10 Yard Mixed</a>
               <a href="/#12-yard-concrete" className="block text-teal-700 hover:text-teal-700 py-1">12 Yard Concrete</a>
               <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">Standard Dumpsters</div>
               <a href="/15-yard-dumpster-rental" className="block text-teal-700 hover:text-teal-700 py-1">15 Yard Dumpsters</a>
               <a href="/20-yard-dumpster-rental" className="block text-teal-700 hover:text-teal-700 py-1">20 Yard Dumpsters</a>
               <a href="/30-yard-dumpster-rental" className="block text-teal-700 hover:text-teal-700 py-1">30 Yard Dumpsters</a>
               <a href="/guides/dumpster-sizes" className="block text-teal-700 hover:text-teal-700 py-1">View All Dumpster Sizes</a>
             </div>
            
            {/* Mobile Pricing & Calculator */}
            <div className="border-t border-gray-200 pt-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Pricing & Tools</div>
              <a href="/#pricing" className="block text-teal-700 hover:text-teal-700 py-1">Pricing & Rates</a>
              <a href="/dumpster-calculator" className="block text-teal-700 hover:text-teal-700 py-1">Dumpster Calculator</a>
            </div>
            
            {/* Mobile City Pages */}
            <div className="border-t border-gray-200 pt-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Salt Lake County</div>
              <a href="/dumpster-rental-west-valley-city-ut" className="block text-teal-700 hover:text-teal-700 py-1">West Valley City</a>
              <a href="/dumpster-rental-taylorsville-ut" className="block text-teal-700 hover:text-teal-700 py-1">Taylorsville</a>
              <a href="/dumpster-rental-kearns-ut" className="block text-teal-700 hover:text-teal-700 py-1">Kearns</a>
              <a href="/dumpster-rental-magna-ut" className="block text-teal-700 hover:text-teal-700 py-1">Magna</a>
              <a href="/dumpster-rental-millcreek-ut" className="block text-teal-700 hover:text-teal-700 py-1">Millcreek</a>
              <a href="/dumpster-rental-holladay-ut" className="block text-teal-700 hover:text-teal-700 py-1">Holladay</a>
              <a href="/dumpster-rental-cottonwood-heights-ut" className="block text-teal-700 hover:text-teal-700 py-1">Cottonwood Heights</a>
              <a href="/dumpster-rental-south-salt-lake-ut" className="block text-teal-700 hover:text-teal-700 py-1">South Salt Lake</a>
              <a href="/dumpster-rental-riverton-ut" className="block text-teal-700 hover:text-teal-700 py-1">Riverton</a>
              <a href="/dumpster-rental-herriman-ut" className="block text-teal-700 hover:text-teal-700 py-1">Herriman</a>
              <a href="/dumpster-rental-bluffdale-ut" className="block text-teal-700 hover:text-teal-700 py-1">Bluffdale</a>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">Davis County</div>
              <a href="/dumpster-rental-bountiful-ut" className="block text-teal-700 hover:text-teal-700 py-1">Bountiful</a>
              <a href="/dumpster-rental-north-salt-lake-ut" className="block text-teal-700 hover:text-teal-700 py-1">North Salt Lake</a>
              <a href="/dumpster-rental-centerville-ut" className="block text-teal-700 hover:text-teal-700 py-1">Centerville</a>
              <a href="/dumpster-rental-farmington-ut" className="block text-teal-700 hover:text-teal-700 py-1">Farmington</a>
              <a href="/dumpster-rental-layton-ut" className="block text-teal-700 hover:text-teal-700 py-1">Layton</a>
              <a href="/dumpster-rental-woods-cross-ut" className="block text-teal-700 hover:text-teal-700 py-1">Woods Cross</a>
              <a href="/dumpster-rental-clearfield-ut" className="block text-teal-700 hover:text-teal-700 py-1">Clearfield</a>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">Utah County</div>
              <a href="/dumpster-rental-lehi-ut" className="block text-teal-700 hover:text-teal-700 py-1">Lehi</a>
              <a href="/dumpster-rental-american-fork-ut" className="block text-teal-700 hover:text-teal-700 py-1">American Fork</a>
              <a href="/dumpster-rental-pleasant-grove-ut" className="block text-teal-700 hover:text-teal-700 py-1">Pleasant Grove</a>
              <a href="/dumpster-rental-eagle-mountain-ut" className="block text-teal-700 hover:text-teal-700 py-1">Eagle Mountain</a>
              <a href="/dumpster-rental-saratoga-springs-ut" className="block text-teal-700 hover:text-teal-700 py-1">Saratoga Springs</a>
              <a href="/dumpster-rental-orem-ut" className="block text-teal-700 hover:text-teal-700 py-1">Orem</a>
              <a href="/dumpster-rental-provo-ut" className="block text-teal-700 hover:text-teal-700 py-1">Provo</a>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">Summit & Tooele</div>
              <a href="/dumpster-rental-park-city-ut" className="block text-teal-700 hover:text-teal-700 py-1">Park City</a>
              <a href="/dumpster-rental-tooele-ut" className="block text-teal-700 hover:text-teal-700 py-1">Tooele</a>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">SLC Neighborhoods</div>
              <a href="/dumpster-rental-salt-lake-city-ut" className="block text-teal-700 hover:text-teal-700 py-1">Rose Park</a>
              <a href="/dumpster-rental-salt-lake-city-ut" className="block text-teal-700 hover:text-teal-700 py-1">Sugar House</a>
              <a href="/dumpster-rental-salt-lake-city-ut" className="block text-teal-700 hover:text-teal-700 py-1">Glendale</a>
              <a href="/dumpster-rental-salt-lake-city-ut" className="block text-teal-700 hover:text-teal-700 py-1">Poplar Grove</a>
              <a href="/dumpster-rental-salt-lake-city-ut" className="block text-teal-700 hover:text-teal-700 py-1">Downtown Salt Lake</a>
              
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2 pt-2 border-t border-gray-200">County-Based Services</div>
              <a href="/dumpster-rental-salt-lake-county-ut" className="block text-teal-700 hover:text-teal-700 py-1">Salt Lake County</a>
              <a href="/dumpster-rental-utah-county-ut" className="block text-teal-700 hover:text-teal-700 py-1">Utah County</a>
              <a href="/dumpster-rental-davis-county-ut" className="block text-teal-700 hover:text-teal-700 py-1">Davis County</a>
              <a href="/dumpster-rental-weber-county-ut" className="block text-teal-700 hover:text-teal-700 py-1">Weber County</a>
              <a href="/dumpster-rental-cache-county-ut" className="block text-teal-700 hover:text-teal-700 py-1">Cache County</a>
              <a href="/dumpster-rental-tooele-county-ut" className="block text-teal-700 hover:text-teal-700 py-1">Tooele County</a>
              <a href="/dumpster-rental-summit-county-ut" className="block text-teal-700 hover:text-teal-700 py-1">Summit County</a>
              <a href="/dumpster-rental-wasatch-county-ut" className="block text-teal-700 hover:text-teal-700 py-1">Wasatch County</a>
            </div>
            
            <a href="/about" className="block text-teal-700 hover:text-teal-700 py-2 font-semibold">
              About Us
            </a>
            <a href="/frequent-buyers" className="block text-teal-700 hover:text-teal-700 py-2 font-semibold">
              Frequent Buyers Program
            </a>
            <div className="pt-4 border-t border-gray-200">
              <a 
                href="/#quote-form"
                className="block bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-800 hover:to-teal-700 text-white px-6 py-3 rounded-lg text-center font-medium text-lg transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
        )}
      </header>

      {/* Phone Modal */}
      <PhoneModal 
        isOpen={isPhoneModalOpen} 
        onClose={() => setIsPhoneModalOpen(false)} 
      />
    </>
  );
}

