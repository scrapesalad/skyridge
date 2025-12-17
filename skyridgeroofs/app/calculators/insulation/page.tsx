'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function InsulationCalculator() {
  const [atticArea, setAtticArea] = useState('');
  const [climateZone, setClimateZone] = useState('4');
  const [currentRValue, setCurrentRValue] = useState('');
  const [result, setResult] = useState<{ recommendedR: number; neededR: number; bags: number; cost: number } | null>(null);

  // Recommended R-values by climate zone (for attics)
  const recommendedRValues: Record<string, number> = {
    '1': 30, // Hot
    '2': 30, // Hot-Humid
    '3': 38, // Warm
    '4': 38, // Mixed
    '5': 49, // Cool
    '6': 49, // Cold
    '7': 60, // Very Cold
    '8': 60, // Subarctic
  };

  // Cost per bag (typical fiberglass batt, R-30, covers ~40 sq ft)
  const costPerBag = 25;
  const rValuePerBag = 30;
  const coveragePerBag = 40; // square feet

  const calculate = () => {
    const area = parseFloat(atticArea);
    const currentR = parseFloat(currentRValue) || 0;

    if (!area || area <= 0) {
      alert('Please enter valid attic area');
      return;
    }

    const recommendedR = recommendedRValues[climateZone] || 38;
    const neededR = Math.max(0, recommendedR - currentR);
    const bagsNeeded = Math.ceil((area / coveragePerBag) * (neededR / rValuePerBag));
    const cost = bagsNeeded * costPerBag;

    setResult({
      recommendedR,
      neededR: Math.round(neededR * 10) / 10,
      bags: bagsNeeded,
      cost: Math.round(cost),
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Roof Insulation Calculator</h1>
            <p className="text-lg text-blue-100">
              Calculate proper insulation R-value and material needed
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700 mb-2">
                <strong>R-Value:</strong> Measures insulation's resistance to heat flow. Higher R-value = better insulation.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Climate Zones:</strong> Based on U.S. Department of Energy recommendations
              </p>
            </div>

            <div className="space-y-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attic Floor Area (square feet)
                </label>
                <input
                  type="number"
                  value={atticArea}
                  onChange={(e) => setAtticArea(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 2000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Climate Zone
                </label>
                <select
                  value={climateZone}
                  onChange={(e) => setClimateZone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="1">Zone 1 - Hot (FL, TX, AZ, etc.)</option>
                  <option value="2">Zone 2 - Hot-Humid (GA, SC, etc.)</option>
                  <option value="3">Zone 3 - Warm (CA, NC, etc.)</option>
                  <option value="4">Zone 4 - Mixed (UT, CO, VA, etc.)</option>
                  <option value="5">Zone 5 - Cool (IL, NY, etc.)</option>
                  <option value="6">Zone 6 - Cold (MN, WI, etc.)</option>
                  <option value="7">Zone 7 - Very Cold (AK, MT, etc.)</option>
                  <option value="8">Zone 8 - Subarctic</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current R-Value (optional)
                </label>
                <input
                  type="number"
                  value={currentRValue}
                  onChange={(e) => setCurrentRValue(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Leave blank if unknown"
                />
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-6"
            >
              Calculate Insulation Needs
            </button>

            {result && (
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Insulation Requirements</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Recommended R-Value:</span>
                    <span className="text-xl font-bold text-gray-900">R-{result.recommendedR}</span>
                  </div>
                  {result.neededR > 0 && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Additional R-Value Needed:</span>
                        <span className="text-xl font-bold text-gray-900">R-{result.neededR}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Bags Needed (R-30):</span>
                        <span className="text-xl font-bold text-gray-900">{result.bags} bags</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                        <span className="text-gray-700 font-semibold">Estimated Cost:</span>
                        <span className="text-2xl font-bold text-amber-800">${result.cost.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                  {result.neededR <= 0 && (
                    <div className="pt-3 border-t border-gray-300">
                      <p className="text-green-700 font-semibold">Your current insulation meets or exceeds recommendations!</p>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Based on standard R-30 fiberglass batt insulation. Costs and coverage may vary by product type and brand. Professional installation recommended.
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

