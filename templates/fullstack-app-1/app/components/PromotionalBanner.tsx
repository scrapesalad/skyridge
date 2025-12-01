"use client";

import React from 'react';
import ImageWithFallback from './ImageWithFallback';

export default function PromotionalBanner() {
  return (
    <section className="bg-[#0d9488] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Section - Text Content */}
          <div className="text-white text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Dumpster?
            </h2>
            <div className="space-y-2 text-lg">
              <p className="font-semibold">Call Icon Dumpsters</p>
              <p className="text-purple-100">Questions? Call (801) 918-6000</p>
            </div>
          </div>

          {/* Middle Section - Banner Image */}
          <div className="flex justify-center">
            <div className="relative">
              <ImageWithFallback
                src="https://icondumpsters.com/result.png"
                alt="Icon Dumpsters - Professional Utah Dumpster Rental Services"
                className="object-contain rounded-lg shadow-xl"
                fallbackSrc="/images/optimized/-2484955712329217818-enhance-2.1x-textai.jpg"
              />
            </div>
          </div>

          {/* Right Section - Contact & CTA */}
          <div className="text-white text-center lg:text-right">
            <div className="mb-4">
              <p className="text-3xl md:text-4xl font-bold">
                (801) 918-6000
              </p>
            </div>
            <a
              href="https://icondumpsters.com/#quote-form"
              className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request a Quote Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
