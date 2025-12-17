'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function VentilationCalculator() {
  const [atticArea, setAtticArea] = useState('');
  const [climate, setClimate] = useState('moderate');
  const [result, setResult] = useState<{ intake: number; exhaust: number; total: number; description: string } | null>(null);

  const calculate = () => {
    const area = parseFloat(atticArea);

    if (!area || area <= 0) {
      alert('Please enter valid attic area');
      return;
    }

    // Building code: 1 sq ft of ventilation per 150 sq ft of attic space (minimum)
    // For balanced ventilation: 50% intake, 50% exhaust
    const baseRatio = 150;
    
    // Climate adjustments
    const climateMultipliers: Record<string, number> = {
      cold: 1.2, // More ventilation needed in cold climates
      moderate: 1.0,
      hot: 0.9, // Slightly less in hot climates
    };

    const multiplier = climateMultipliers[climate] || 1.0;
    const ratio = baseRatio / multiplier;
    const totalVentilation = area / ratio;
    const intake = totalVentilation / 2;
    const exhaust = totalVentilation / 2;

    let description = '';
    if (totalVentilation < 1) {
      description = 'Minimum ventilation required. Consider adding more for better air circulation.';
    } else if (totalVentilation < 2) {
      description = 'Adequate ventilation for most applications.';
    } else {
      description = 'Excellent ventilation. Your attic should have good air circulation.';
    }

    setResult({
      intake: Math.round(intake * 10) / 10,
      exhaust: Math.round(exhaust * 10) / 10,
      total: Math.round(totalVentilation * 10) / 10,
      description,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Roof Ventilation Calculator</h1>
            <p className="text-lg text-blue-100">
              Calculate proper ventilation requirements for your attic
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Building Code Standard:</strong> 1 sq ft of ventilation per 150 sq ft of attic space (minimum)
              </p>
              <p className="text-sm text-gray-700">
                <strong>Balanced System:</strong> 50% intake (soffit vents) and 50% exhaust (ridge/roof vents)
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
                  value={climate}
                  onChange={(e) => setClimate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="cold">Cold Climate</option>
                  <option value="moderate">Moderate Climate</option>
                  <option value="hot">Hot Climate</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-6"
            >
              Calculate Ventilation
            </button>

            {result && (
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 p-6 rounded-lg border border-cyan-200">
                <h3 className="text-2xl font-bold text-cyan-800 mb-4">Ventilation Requirements</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Intake Ventilation (Soffit):</span>
                    <span className="text-xl font-bold text-gray-900">{result.intake} sq ft</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Exhaust Ventilation (Ridge/Roof):</span>
                    <span className="text-xl font-bold text-gray-900">{result.exhaust} sq ft</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                    <span className="text-gray-700 font-semibold">Total Ventilation:</span>
                    <span className="text-2xl font-bold text-cyan-800">{result.total} sq ft</span>
                  </div>
                  <div className="pt-3 border-t border-gray-300">
                    <p className="text-gray-700">{result.description}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * This is a minimum requirement. More ventilation may be needed for high-humidity areas or complex roof designs.
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

