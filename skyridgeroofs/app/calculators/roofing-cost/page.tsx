'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function RoofingCostCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [pitch, setPitch] = useState('');
  const [materialType, setMaterialType] = useState('asphalt');
  const [result, setResult] = useState<{ squareFootage: number; squares: number; cost: number } | null>(null);

  // Material costs per square (100 sq ft) - includes materials and labor
  const materialCosts: Record<string, number> = {
    asphalt: 350,
    metal: 800,
    tile: 1200,
    slate: 1500,
    wood: 700,
    flat: 500,
  };

  const calculate = () => {
    const lengthNum = parseFloat(length);
    const widthNum = parseFloat(width);
    const pitchNum = parseFloat(pitch);

    if (!lengthNum || !widthNum || !pitchNum || pitchNum <= 0) {
      alert('Please enter valid measurements');
      return;
    }

    // Calculate base area
    const baseArea = lengthNum * widthNum;
    
    // Calculate pitch multiplier (simplified - assumes standard roof)
    const pitchMultiplier = 1 + (pitchNum / 12) * 0.5;
    const roofArea = baseArea * pitchMultiplier;

    // Convert to squares (1 square = 100 sq ft)
    const squares = roofArea / 100;

    // Calculate cost
    const costPerSquare = materialCosts[materialType] || 350;
    const totalCost = squares * costPerSquare;

    setResult({
      squareFootage: Math.ceil(roofArea),
      squares: Math.ceil(squares * 10) / 10,
      cost: Math.round(totalCost),
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Roofing Cost Calculator</h1>
            <p className="text-lg text-blue-100">
              Estimate the total cost of your roofing project
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">How Much Does Roofing Cost?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Roofing costs vary widely based on several factors. Understanding these factors helps you make informed decisions about your roofing project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Factors That Affect Cost</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Roof size:</strong> Measured in squares (100 sq ft each)</li>
                  <li><strong>Material choice:</strong> From affordable asphalt to premium slate</li>
                  <li><strong>Roof complexity:</strong> Pitch, valleys, dormers, penetrations</li>
                  <li><strong>Location:</strong> Labor costs vary by region</li>
                  <li><strong>Tear-off needs:</strong> Removing old roofing adds cost</li>
                  <li><strong>Decking repairs:</strong> Structural issues increase price</li>
                  <li><strong>Accessibility:</strong> Hard-to-reach roofs cost more</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Average Cost Per Square (100 sq ft)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between"><span>Asphalt Shingles:</span> <strong>$3,000-$7,000</strong></li>
                  <li className="flex justify-between"><span>Metal Roofing:</span> <strong>$7,000-$15,000</strong></li>
                  <li className="flex justify-between"><span>Tile Roofing:</span> <strong>$10,000-$20,000</strong></li>
                  <li className="flex justify-between"><span>Slate Roofing:</span> <strong>$15,000-$30,000</strong></li>
                  <li className="flex justify-between"><span>Flat Roof (TPO/EPDM):</span> <strong>$5,000-$10,000</strong></li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  * Costs include materials and labor. Prices vary by location and project complexity.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-gray-700">
                <strong>Example:</strong> A typical 2,000 sq ft roof (20 squares) with asphalt shingles might cost $6,000-$14,000 total, while the same roof with metal might cost $14,000-$30,000. Use the calculator above for a more specific estimate based on your roof dimensions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roof Length (feet)
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
                  Roof Width (feet)
                </label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roof Pitch (rise/12)
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
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-6"
            >
              Calculate Cost
            </button>

            {result && (
              <div className="bg-gradient-to-br from-blue-50 to-primary/10 p-6 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-4">Estimate Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Roof Area:</span>
                    <span className="text-xl font-bold text-gray-900">{result.squareFootage.toLocaleString()} sq ft</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Roofing Squares:</span>
                    <span className="text-xl font-bold text-gray-900">{result.squares} squares</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                    <span className="text-gray-700 font-semibold">Estimated Total Cost:</span>
                    <span className="text-3xl font-bold text-primary">${result.cost.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * This is an estimate. Actual costs may vary based on location, complexity, and current market rates. Contact us for a detailed quote.
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

