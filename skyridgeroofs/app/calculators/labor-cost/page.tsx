'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function LaborCostCalculator() {
  const [squareFootage, setSquareFootage] = useState('');
  const [complexity, setComplexity] = useState('standard');
  const [materialType, setMaterialType] = useState('asphalt');
  const [result, setResult] = useState<{ hours: number; costPerSquare: number; totalCost: number; description: string } | null>(null);

  // Labor hours per square (100 sq ft)
  const hoursPerSquare: Record<string, Record<string, number>> = {
    simple: {
      asphalt: 2,
      metal: 3,
      tile: 4,
      slate: 5,
      wood: 3,
      flat: 2,
    },
    standard: {
      asphalt: 3,
      metal: 4,
      tile: 5,
      slate: 6,
      wood: 4,
      flat: 3,
    },
    complex: {
      asphalt: 4,
      metal: 5,
      tile: 6,
      slate: 8,
      wood: 5,
      flat: 4,
    },
  };

  // Average labor rate per hour
  const laborRate = 75; // $75/hour average

  const calculate = () => {
    const sqft = parseFloat(squareFootage);

    if (!sqft || sqft <= 0) {
      alert('Please enter valid square footage');
      return;
    }

    const squares = sqft / 100;
    const hours = squares * (hoursPerSquare[complexity]?.[materialType] || 3);
    const totalCost = hours * laborRate;
    const costPerSquare = totalCost / squares;

    let description = '';
    if (complexity === 'simple') {
      description = 'Simple roof with minimal angles and standard pitch. Faster installation.';
    } else if (complexity === 'standard') {
      description = 'Standard roof with normal complexity. Typical installation time.';
    } else {
      description = 'Complex roof with multiple angles, high pitch, or special features. Longer installation time.';
    }

    setResult({
      hours: Math.round(hours * 10) / 10,
      costPerSquare: Math.round(costPerSquare),
      totalCost: Math.round(totalCost),
      description,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Roofing Labor Cost Calculator</h1>
            <p className="text-lg text-blue-100">
              Estimate labor costs for your roofing project
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
                  <option value="flat">Flat Roof</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-6"
            >
              Calculate Labor Cost
            </button>

            {result && (
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">Labor Cost Estimate</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Estimated Hours:</span>
                    <span className="text-xl font-bold text-gray-900">{result.hours} hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cost per Square:</span>
                    <span className="text-xl font-bold text-gray-900">${result.costPerSquare.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                    <span className="text-gray-700 font-semibold">Total Labor Cost:</span>
                    <span className="text-2xl font-bold text-yellow-800">${result.totalCost.toLocaleString()}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-300">
                    <p className="text-gray-700 text-sm">{result.description}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Based on average labor rate of $75/hour. Actual rates may vary by location and contractor. This estimate does not include materials.
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

