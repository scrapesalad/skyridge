'use client';

import Image from "next/image";

interface HeroProps {
  className?: string;
}

export default function Hero({ className = '' }: HeroProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Hero Section */}
      <section 
        className="relative h-[650px] md:h-[700px] flex items-center overflow-hidden bg-[#0d9488]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="{{heroImage}}"
            alt="{{heroHeading}}"
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
              {/* Main Headline */}
              <h1 
                className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl font-normal leading-tight"
                style={{ 
                  fontFamily: 'Rockwell, "Rockwell Nova", "Roboto Slab", "DejaVu Serif", "Sitka Small", serif'
                }}
              >
                {{heroHeading}}
              </h1>

              {/* Subheading */}
              <p className="text-white text-lg md:text-xl mb-6">
                {{heroSubheading}}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                {/* Primary CTA */}
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-md font-normal text-lg md:text-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {{ctaLabel}}
                </a>

                {/* Secondary CTA */}
                <a
                  href="{{phoneLink}}"
                  className="flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white px-6 py-3 rounded-md font-normal text-lg md:text-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call {{phoneNumber}}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

