'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function RoofingSquareCalculator() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('square-feet');
  const [result, setResult] = useState<{ squares: number; squareFeet: number; squareMeters: number } | null>(null);

  const calculate = () => {
    const value = parseFloat(inputValue);

    if (!value || value <= 0) {
      alert('Please enter a valid number');
      return;
    }

    let squareFeet = 0;

    // Convert to square feet first
    switch (fromUnit) {
      case 'square-feet':
        squareFeet = value;
        break;
      case 'squares':
        squareFeet = value * 100; // 1 square = 100 sq ft
        break;
      case 'square-meters':
        squareFeet = value * 10.764; // 1 sq m = 10.764 sq ft
        break;
      case 'acres':
        squareFeet = value * 43560; // 1 acre = 43,560 sq ft
        break;
    }

    const squares = squareFeet / 100;
    const squareMeters = squareFeet / 10.764;

    setResult({
      squares: Math.round(squares * 100) / 100,
      squareFeet: Math.round(squareFeet * 10) / 10,
      squareMeters: Math.round(squareMeters * 10) / 10,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Roofing Square Calculator</h1>
            <p className="text-lg text-blue-100">
              Convert between different roofing measurement units
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-bold mb-3">What is a Square in Roofing?</h2>
              <p className="text-gray-700 mb-4">
                A <strong>"square"</strong> in roofing is a unit of measurement equal to <strong>100 square feet</strong> of roof area. It's the standard unit used by roofing contractors to estimate materials and costs.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Why use squares?</strong> Roofing materials like shingles are typically sold by the square, and labor costs are often calculated per square. This makes it easier for contractors to provide accurate estimates.</p>
                <p><strong>Example:</strong> A roof that's 2,000 square feet equals 20 squares. If shingles cost $300 per square, the material cost would be $6,000 (20 squares × $300).</p>
                <p><strong>Understanding squares</strong> helps homeowners better understand estimates and material requirements when planning a roofing project.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Value
                </label>
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 2000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From Unit
                </label>
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="square-feet">Square Feet (sq ft)</option>
                  <option value="squares">Roofing Squares</option>
                  <option value="square-meters">Square Meters (sq m)</option>
                  <option value="acres">Acres</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-6"
            >
              Convert
            </button>

            {result && (
              <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-2xl font-bold text-pink-800 mb-4">Conversion Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Square Feet:</span>
                    <span className="text-xl font-bold text-gray-900">{result.squareFeet.toLocaleString()} sq ft</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Roofing Squares:</span>
                    <span className="text-xl font-bold text-gray-900">{result.squares} squares</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Square Meters:</span>
                    <span className="text-xl font-bold text-gray-900">{result.squareMeters.toLocaleString()} sq m</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

