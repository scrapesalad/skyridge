'use client';

// Legacy header preserved for reference.

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuoteSidebar } from '@/contexts/QuoteSidebarContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [calculatorsOpen, setCalculatorsOpen] = useState(false);
  const { openSidebar } = useQuoteSidebar();

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      {/* Top Bar with Beige Border */}
      <div className="border-t-2 border-amber-100 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Large Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo/ROOFING.png"
                alt="Sky Ridge Roofing"
                width={280}
                height={100}
                className="h-16 md:h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* Social Media & Contact Info */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                <a href="#" className="text-primary-dark hover:text-primary transition" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary-dark hover:text-primary transition" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary-dark hover:text-primary transition" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary-dark hover:text-primary transition" aria-label="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary-dark hover:text-primary transition" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* Contact Info - Phone */}
              <div className="flex items-center space-x-3 border-l border-gray-200 pl-6">
                <svg className="w-7 h-7 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div>
                  <p className="text-xs text-gray-600 font-medium">24/7 Customer Support</p>
                  <a href="tel:8012526936" className="text-primary font-bold text-lg hover:text-primary-dark block">
                    801-252-6936
                  </a>
                </div>
              </div>

              {/* Contact Info - Email */}
              <div className="flex items-center space-x-3 border-l border-gray-200 pl-6">
                <div className="relative">
                  <svg className="w-7 h-7 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <svg className="absolute -bottom-0.5 -right-0.5 w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Email Us</p>
                  <a href="mailto:Info@skyridgeco.com" className="text-primary font-semibold text-base hover:text-primary-dark block">
                    Info@skyridgeco.com
                  </a>
                </div>
              </div>

              {/* Calculators Button */}
              <div className="border-l border-gray-200 pl-6">
                <Link
                  href="/calculators"
                  className="bg-primary text-white px-5 py-2.5 rounded-md font-semibold hover:bg-primary-dark transition uppercase text-sm whitespace-nowrap inline-flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Calculators
                </Link>
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="lg:hidden flex items-center space-x-4">
              <a href="tel:8012526936" className="text-primary p-2" aria-label="Call us">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              <a href="mailto:Info@skyridgeco.com" className="text-primary p-2" aria-label="Email us">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-primary-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/" className="px-4 py-4 text-white hover:bg-primary transition font-semibold uppercase text-sm">
                Home
              </Link>
              <Link href="/about" className="px-4 py-4 text-white hover:bg-primary transition font-semibold uppercase text-sm">
                About Us
              </Link>
              <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/services" className="px-4 py-4 text-white hover:bg-primary transition font-semibold uppercase text-sm flex items-center">
                  Services <span className="ml-1">+</span>
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg min-w-[200px] py-2">
                    <Link href="/services/roof-replacement" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Roof Replacement</Link>
                    <Link href="/services/roof-repairs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Roof Repairs</Link>
                    <Link href="/services/metal-roofing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Metal Roofing</Link>
                    <Link href="/services/insurance-claims" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Insurance Claims</Link>
                    <Link href="/services/commercial-roofing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Commercial Roofing</Link>
                    <Link href="/services/additional-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Additional Services</Link>
                  </div>
                )}
              </div>
              <div 
                className="relative"
                onMouseEnter={() => setCalculatorsOpen(true)}
                onMouseLeave={() => setCalculatorsOpen(false)}
              >
                <Link href="/calculators" className="px-4 py-4 text-white hover:bg-primary transition font-semibold uppercase text-sm flex items-center">
                  Calculators <span className="ml-1">+</span>
                </Link>
                {calculatorsOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg min-w-[280px] py-2 z-50">
                    <Link href="/calculators" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold border-b border-gray-200">
                      All Calculators
                    </Link>
                    <Link href="/calculators/roofing-cost" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Roofing Cost</Link>
                    <Link href="/calculators/replacement-cost" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Replacement Cost</Link>
                    <Link href="/calculators/shingle" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Shingle Calculator</Link>
                    <Link href="/calculators/roof-pitch" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Roof Pitch</Link>
                    <Link href="/calculators/square-footage" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Square Footage</Link>
                    <Link href="/calculators/labor-cost" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Labor Cost</Link>
                  </div>
                )}
              </div>
              <div 
                className="relative"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                <Link href="/locations" className="px-4 py-4 text-white hover:bg-primary transition font-semibold uppercase text-sm flex items-center">
                  Locations <span className="ml-1">+</span>
                </Link>
                {locationsOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg min-w-[200px] py-2">
                    <Link href="/locations/salt-lake-city" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Salt Lake City</Link>
                    <Link href="/utah-roofing-company" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Utah Roofing Company</Link>
                    <Link href="/locations" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">All Locations</Link>
                  </div>
                )}
              </div>
              <div 
                className="relative"
                onMouseEnter={() => setContactOpen(true)}
                onMouseLeave={() => setContactOpen(false)}
              >
                <Link href="/contact" className="px-4 py-4 text-white hover:bg-primary transition font-semibold uppercase text-sm flex items-center">
                  Contact Us <span className="ml-1">+</span>
                </Link>
                {contactOpen && (
                  <div className="absolute top-full right-0 bg-white shadow-lg min-w-[200px] py-2">
                    <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact Form</Link>
                    <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">FAQ</Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Get Quote Button */}
            <button
              onClick={openSidebar}
              className="bg-primary-light text-white px-6 py-3 font-semibold hover:bg-primary transition uppercase text-sm whitespace-nowrap"
            >
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 space-y-2">
              <Link href="/" className="block px-4 py-2 text-white hover:bg-primary">Home</Link>
              <Link href="/about" className="block px-4 py-2 text-white hover:bg-primary">About Us</Link>
              <Link href="/services" className="block px-4 py-2 text-white hover:bg-primary">Services</Link>
              <Link href="/calculators" className="block px-4 py-2 text-white hover:bg-primary">Calculators</Link>
              <Link href="/locations" className="block px-4 py-2 text-white hover:bg-primary">Locations</Link>
              <Link href="/contact" className="block px-4 py-2 text-white hover:bg-primary">Contact Us</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
