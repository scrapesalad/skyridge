'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function GutterSizeCalculator() {
  const [roofArea, setRoofArea] = useState('');
  const [rainfall, setRainfall] = useState('moderate');
  const [result, setResult] = useState<{ gutterSize: string; downspouts: number; description: string } | null>(null);

  const calculate = () => {
    const area = parseFloat(roofArea);

    if (!area || area <= 0) {
      alert('Please enter valid roof area');
      return;
    }

    // Rainfall intensity multipliers
    const rainfallMultipliers: Record<string, number> = {
      light: 1.0,
      moderate: 1.5,
      heavy: 2.0,
      extreme: 2.5,
    };

    const multiplier = rainfallMultipliers[rainfall] || 1.5;
    const adjustedArea = area * multiplier;

    let gutterSize = '';
    let downspouts = 0;
    let description = '';

    if (adjustedArea <= 5000) {
      gutterSize = '5" (Standard)';
      downspouts = Math.ceil(area / 2000);
      description = 'Standard 5-inch gutters are sufficient for most residential applications.';
    } else if (adjustedArea <= 8000) {
      gutterSize = '6" (Large)';
      downspouts = Math.ceil(area / 2500);
      description = '6-inch gutters provide better capacity for larger roofs and moderate rainfall.';
    } else {
      gutterSize = '6" or 7" (Commercial)';
      downspouts = Math.ceil(area / 3000);
      description = 'Large gutters recommended for commercial buildings or areas with heavy rainfall.';
    }

    setResult({
      gutterSize,
      downspouts: Math.max(1, downspouts),
      description,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Gutter Size Calculator</h1>
            <p className="text-lg text-blue-100">
              Determine the correct gutter size for your roof
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roof Area (square feet)
                </label>
                <input
                  type="number"
                  value={roofArea}
                  onChange={(e) => setRoofArea(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 2000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Rainfall Intensity
                </label>
                <select
                  value={rainfall}
                  onChange={(e) => setRainfall(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="light">Light (Arid/Desert)</option>
                  <option value="moderate">Moderate (Most Areas)</option>
                  <option value="heavy">Heavy (Coastal/Mountain)</option>
                  <option value="extreme">Extreme (Tropical/Storm-Prone)</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-6"
            >
              Calculate Gutter Size
            </button>

            {result && (
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 p-6 rounded-lg border border-teal-200">
                <h3 className="text-2xl font-bold text-teal-800 mb-4">Gutter Recommendations</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Recommended Gutter Size:</span>
                    <span className="text-xl font-bold text-gray-900">{result.gutterSize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Number of Downspouts:</span>
                    <span className="text-xl font-bold text-gray-900">{result.downspouts}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-300">
                    <p className="text-gray-700">{result.description}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Standard downspout spacing: 1 per 20-30 feet of gutter. Consider more for heavy rainfall areas.
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

