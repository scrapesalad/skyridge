"use client";

import React from 'react';
import DumpsterCalculator from './DumpsterCalculator';

export default function CalculatorBanner() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-[#0d9488]/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d9488] mb-4">
            Get Your Instant Dumpster Rental Quote
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate your dumpster rental cost in seconds. Our advanced calculator includes special rates, veteran discounts, and accurate pricing for Utah.
          </p>
        </div>
        <DumpsterCalculator />
      </div>
    </section>
  );
}
