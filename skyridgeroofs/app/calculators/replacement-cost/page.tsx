'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function ReplacementCostCalculator() {
  const [squareFootage, setSquareFootage] = useState('');
  const [materialType, setMaterialType] = useState('asphalt');
  const [complexity, setComplexity] = useState('standard');
  const [location, setLocation] = useState('utah');
  const [result, setResult] = useState<{ materialCost: number; laborCost: number; removalCost: number; totalCost: number } | null>(null);

  // Cost per square (100 sq ft) - includes materials
  const materialCosts: Record<string, number> = {
    asphalt: 350,
    metal: 800,
    tile: 1200,
    slate: 1500,
    wood: 700,
    flat: 500,
  };

  // Labor cost per square
  const laborCosts: Record<string, number> = {
    simple: 150,
    standard: 200,
    complex: 300,
  };

  // Removal cost per square
  const removalCosts: Record<string, number> = {
    utah: 100,
    moderate: 120,
    high: 150,
  };

  const calculate = () => {
    const sqft = parseFloat(squareFootage);

    if (!sqft || sqft <= 0) {
      alert('Please enter valid square footage');
      return;
    }

    const squares = sqft / 100;
    const materialCostPerSquare = materialCosts[materialType] || 350;
    const laborCostPerSquare = laborCosts[complexity] || 200;
    const removalCostPerSquare = removalCosts[location] || 100;

    const materialCost = squares * materialCostPerSquare;
    const laborCost = squares * laborCostPerSquare;
    const removalCost = squares * removalCostPerSquare;
    const totalCost = materialCost + laborCost + removalCost;

    setResult({
      materialCost: Math.round(materialCost),
      laborCost: Math.round(laborCost),
      removalCost: Math.round(removalCost),
      totalCost: Math.round(totalCost),
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Roof Replacement Cost Calculator</h1>
            <p className="text-lg text-blue-100">
              Get a detailed estimate for complete roof replacement
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                  Material Type
                </label>
                <select
                  value={materialType}
                  onChange={(e) => setMaterialType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="asphalt">Asphalt Shingles</option>
                  <option value="metal">Metal Roofing</option>
                  <option value="tile">Tile Roofing</option>
                  <option value="slate">Slate Roofing</option>
                  <option value="wood">Wood Shakes</option>
                  <option value="flat">Flat Roof (EPDM/TPO)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roof Complexity
                </label>
                <select
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="simple">Simple (Few angles, low pitch)</option>
                  <option value="standard">Standard (Normal complexity)</option>
                  <option value="complex">Complex (Multiple angles, high pitch, dormers)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location/Cost Area
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="utah">Utah (Standard)</option>
                  <option value="moderate">Moderate Cost Area</option>
                  <option value="high">High Cost Area</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-6"
            >
              Calculate Replacement Cost
            </button>

            {result && (
              <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-6 rounded-lg border border-red-200">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Cost Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Material Cost:</span>
                    <span className="text-xl font-bold text-gray-900">${result.materialCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Labor Cost:</span>
                    <span className="text-xl font-bold text-gray-900">${result.laborCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Removal/Disposal:</span>
                    <span className="text-xl font-bold text-gray-900">${result.removalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2 border-gray-400">
                    <span className="text-gray-900 font-bold text-lg">Total Estimated Cost:</span>
                    <span className="text-3xl font-bold text-red-800">${result.totalCost.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * This estimate includes materials, labor, and old roof removal. Additional costs may apply for permits, repairs, or special features. Contact us for a detailed, personalized quote.
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

