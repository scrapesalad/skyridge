'use client';

import Image from "next/image";

interface HeroProps {
  className?: string;
}

export default function Hero({ className = '' }: HeroProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Hero Section - Matching Budget Dumpster Layout - Compact, Not Full Screen */}
      <section 
        className="relative h-[650px] md:h-[700px] flex items-center overflow-hidden bg-[#0d9488]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-couple-boxes.png" 
              alt="Icon Dumpsters professional roll-off dumpster with truck - dumpster rental Utah, roll-off dumpster, dumpster rental near me"
              fill
              className="object-cover object-[right_10%]"
              priority
              fetchPriority="high"
              sizes="100vw"
            />
          </div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-2xl text-center md:text-left">
            {/* Dark Overlay - Only Behind Text Content */}
            <div className="absolute inset-0 bg-black/60 -z-10 rounded-lg"></div>
            
            {/* Content with padding */}
            <div className="relative p-6 md:p-8">
              {/* Main Headline - Compact 3 Lines Total */}
              <h1 
                className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl font-normal leading-tight"
              style={{ 
                fontFamily: 'Rockwell, "Rockwell Nova", "Roboto Slab", "DejaVu Serif", "Sitka Small", serif'
              }}
            >
              Dumpster Rental Salt Lake City - Affordable & Reliable Service
            </h1>

            {/* CTA Buttons - 1 Line - Matching Budget Dumpster Layout */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    {/* Call Button - Action Orange */}
                    <a
                      href="tel:801-918-6000"
                      data-analytics-type="cta"
                      data-analytics-name="call_hero"
                      className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-md font-normal text-lg md:text-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call 801-918-6000
              </a>

                    {/* Order Online Button - Success Green */}
                    <a
                      href="/cart"
                      data-analytics-type="cta"
                      data-analytics-name="quote_hero"
                      className="flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white px-6 py-3 rounded-md font-normal text-lg md:text-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                Order Online
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

