'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function SquareFootageCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [pitch, setPitch] = useState('');
  const [result, setResult] = useState<{ baseArea: number; roofArea: number; squares: number; pitchMultiplier: number } | null>(null);

  const calculate = () => {
    const lengthNum = parseFloat(length);
    const widthNum = parseFloat(width);
    const pitchNum = parseFloat(pitch);

    if (!lengthNum || !widthNum || pitchNum < 0) {
      alert('Please enter valid measurements');
      return;
    }

    const baseArea = lengthNum * widthNum;
    
    // Calculate pitch multiplier
    // For a roof with pitch X/12, the multiplier accounts for the slope
    let pitchMultiplier = 1;
    if (pitchNum > 0) {
      // Simplified calculation: multiplier = sqrt(1 + (pitch/12)^2)
      const pitchRatio = pitchNum / 12;
      pitchMultiplier = Math.sqrt(1 + pitchRatio * pitchRatio);
    }
    
    const roofArea = baseArea * pitchMultiplier;
    const squares = roofArea / 100;

    setResult({
      baseArea: Math.round(baseArea * 10) / 10,
      roofArea: Math.round(roofArea * 10) / 10,
      squares: Math.round(squares * 10) / 10,
      pitchMultiplier: Math.round(pitchMultiplier * 100) / 100,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Roof Square Footage Calculator</h1>
            <p className="text-lg text-blue-100">
              Calculate your roof's total square footage
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Length (feet)
                </label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Width (feet)
                </label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 30"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roof Pitch (rise/12) - Leave blank for flat roof
                </label>
                <input
                  type="number"
                  value={pitch}
                  onChange={(e) => setPitch(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 6 (for 6/12 pitch)"
                />
                <p className="text-xs text-gray-500 mt-1">Common pitches: 4/12, 6/12, 8/12, 12/12</p>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-6"
            >
              Calculate Square Footage
            </button>

            {result && (
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">Calculation Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Base Area:</span>
                    <span className="text-xl font-bold text-gray-900">{result.baseArea.toLocaleString()} sq ft</span>
                  </div>
                  {result.pitchMultiplier > 1 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Pitch Multiplier:</span>
                      <span className="text-xl font-bold text-gray-900">{result.pitchMultiplier}x</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                    <span className="text-gray-700 font-semibold">Total Roof Area:</span>
                    <span className="text-2xl font-bold text-indigo-800">{result.roofArea.toLocaleString()} sq ft</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Roofing Squares:</span>
                    <span className="text-2xl font-bold text-indigo-800">{result.squares} squares</span>
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

