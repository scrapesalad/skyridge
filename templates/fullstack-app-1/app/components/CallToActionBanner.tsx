"use client";

import ImageWithFallback from "./ImageWithFallback";
import Link from "next/link";

export default function CallToActionBanner() {
  return (
    <section className="bg-trust-blue text-white py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section - Text */}
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Need a Dumpster?
            </h2>
            <p className="text-lg md:text-xl font-semibold mb-2">
              Call Icon Dumpsters
            </p>
            <p className="text-base md:text-lg">
              Questions? Call (801) 918-6000
            </p>
          </div>

          {/* Middle Section - Image */}
          <div className="flex-1 flex justify-center mb-6 lg:mb-0">
            <div className="relative">
              <ImageWithFallback
                src="/images/truck-mobile-cropped.webp"
                alt="Icon Dumpsters roll-off dumpster rental in Utah"
                width={400}
                height={300}
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Section - Phone and Button */}
          <div className="flex-1 text-center lg:text-right">
            <div className="text-2xl md:text-3xl font-bold mb-4">
              (801) 918-6000
            </div>
            <Link 
              href="https://icondumpsters.com/#quote-form"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors"
            >
              Request a Quote Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
