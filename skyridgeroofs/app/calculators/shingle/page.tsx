'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function ShingleCalculator() {
  const [squareFootage, setSquareFootage] = useState('');
  const [shingleType, setShingleType] = useState('3-tab');
  const [waste, setWaste] = useState('10');
  const [result, setResult] = useState<{ bundles: number; squares: number; totalShingles: number } | null>(null);

  // Shingles per bundle and bundles per square
  const shingleSpecs: Record<string, { perBundle: number; bundlesPerSquare: number }> = {
    '3-tab': { perBundle: 29, bundlesPerSquare: 3 },
    'architectural': { perBundle: 22, bundlesPerSquare: 4 },
    'premium': { perBundle: 20, bundlesPerSquare: 4 },
  };

  const calculate = () => {
    const sqft = parseFloat(squareFootage);
    const wastePercent = parseFloat(waste);

    if (!sqft || sqft <= 0) {
      alert('Please enter valid square footage');
      return;
    }

    const specs = shingleSpecs[shingleType];
    const squares = sqft / 100;
    const wasteMultiplier = 1 + (wastePercent / 100);
    const adjustedSquares = squares * wasteMultiplier;
    const bundles = Math.ceil(adjustedSquares * specs.bundlesPerSquare);
    const totalShingles = bundles * specs.perBundle;

    setResult({
      bundles,
      squares: Math.ceil(adjustedSquares * 10) / 10,
      totalShingles,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Shingle Calculator</h1>
            <p className="text-lg text-blue-100">
              Calculate how many shingles you need for your roof
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roof Square Footage
                </label>
                <input
                  type="number"
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 2000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Shingle Type
                </label>
                <select
                  value={shingleType}
                  onChange={(e) => setShingleType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="3-tab">3-Tab Shingles</option>
                  <option value="architectural">Architectural Shingles</option>
                  <option value="premium">Premium/Luxury Shingles</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Waste Factor (%)
                </label>
                <input
                  type="number"
                  value={waste}
                  onChange={(e) => setWaste(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="10"
                />
                <p className="text-xs text-gray-500 mt-1">Typical waste: 10-15% for simple roofs, 15-20% for complex roofs</p>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-6"
            >
              Calculate Shingles Needed
            </button>

            {result && (
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-lg border border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Calculation Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Roofing Squares:</span>
                    <span className="text-xl font-bold text-gray-900">{result.squares} squares</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Bundles Needed:</span>
                    <span className="text-xl font-bold text-gray-900">{result.bundles} bundles</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                    <span className="text-gray-700 font-semibold">Total Shingles:</span>
                    <span className="text-2xl font-bold text-green-800">{result.totalShingles.toLocaleString()} shingles</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Always purchase 1-2 extra bundles for repairs and future use.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

