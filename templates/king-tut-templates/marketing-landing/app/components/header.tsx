'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

// Logo component with fallback handling
function LogoImage() {
  return (
    <Image
      src="{{logoPath}}"
      alt="{{logoAlt}}"
      width={143}
      height={48}
      priority
      quality={85}
      sizes="143px"
      className="flex-shrink-0 mt-2 mb-0.5"
      style={{
        maxWidth: '143px',
        height: 'auto',
      }}
    />
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Strip */}
      <div className="bg-teal-100 h-[2px]"></div>

      {/* Main Header */}
      <header className="bg-white text-gray-800 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-1">
            {/* Logo with Text - Left Side */}
            <div className="flex items-center flex-shrink-0 mr-4">
              <a href="/" className="flex flex-col hover:opacity-90 transition-opacity duration-200">
                <LogoImage />
                <span className="text-teal-800 text-[11px] whitespace-nowrap">{{tagline}}</span>
              </a>
            </div>

            {/* Phone Number Section - Right Side */}
            <div className="hidden lg:flex flex-col items-end">
              <a 
                href="{{phoneLink}}" 
                className="text-teal-800 hover:text-teal-900 transition-colors text-sm underline mb-1"
                title="Call us today"
              >
                Call us today
              </a>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0 text-teal-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a 
                  href="{{phoneLink}}" 
                  className="text-teal-800 hover:text-teal-900 transition-colors cursor-pointer whitespace-nowrap font-bold text-xl"
                  title="Call us"
                >
                  {{phoneNumber}}
                </a>
              </div>
            </div>

            {/* Mobile Phone Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Call us"
              className="lg:hidden w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-gradient-to-r from-teal-700 to-teal-600 text-white">
          {/* Desktop Navigation */}
          <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between space-x-4 h-12">
              <a href="/" className="text-white hover:text-gray-200 transition-colors font-normal text-xs">
                Home
              </a>
              <a href="/about" className="text-white hover:text-gray-200 transition-colors font-normal text-xs">
                About
              </a>
              <a href="/services" className="text-white hover:text-gray-200 transition-colors font-normal text-xs">
                Services
              </a>
              <a href="/contact" className="text-white hover:text-gray-200 transition-colors font-normal text-xs">
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
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
              <a href="/" className="block text-teal-700 hover:text-teal-700 py-2 font-semibold">
                Home
              </a>
              <a href="/about" className="block text-teal-700 hover:text-teal-700 py-2 font-semibold">
                About
              </a>
              <a href="/services" className="block text-teal-700 hover:text-teal-700 py-2 font-semibold">
                Services
              </a>
              <a href="/contact" className="block text-teal-700 hover:text-teal-700 py-2 font-semibold">
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="#contact"
                  className="block bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-800 hover:to-teal-700 text-white px-6 py-3 rounded-lg text-center font-medium text-lg transition-colors"
                >
                  {{ctaLabel}}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

