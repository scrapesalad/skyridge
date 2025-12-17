'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function RoofingMaterialCalculator() {
  const [squareFootage, setSquareFootage] = useState('');
  const [materialType, setMaterialType] = useState('asphalt');
  const [result, setResult] = useState<{ squares: number; bundles: number; underlayment: number; nails: number; ridge: number } | null>(null);

  const calculate = () => {
    const sqft = parseFloat(squareFootage);

    if (!sqft || sqft <= 0) {
      alert('Please enter valid square footage');
      return;
    }

    const squares = sqft / 100;
    let bundles = 0;
    let underlayment = 0;
    let nails = 0;
    let ridge = 0;

    switch (materialType) {
      case 'asphalt':
        bundles = Math.ceil(squares * 3.5); // 3-4 bundles per square
        underlayment = Math.ceil(squares * 1.1); // rolls (36" x 144')
        nails = Math.ceil(squares * 1.5); // pounds
        ridge = Math.ceil(squares * 0.3); // linear feet
        break;
      case 'metal':
        bundles = Math.ceil(squares * 1.1); // panels
        underlayment = Math.ceil(squares * 1.1);
        nails = Math.ceil(squares * 0.5);
        ridge = Math.ceil(squares * 0.3);
        break;
      case 'tile':
        bundles = Math.ceil(squares * 1.1); // tiles per square
        underlayment = Math.ceil(squares * 1.2);
        nails = Math.ceil(squares * 2);
        ridge = Math.ceil(squares * 0.3);
        break;
      default:
        bundles = Math.ceil(squares * 3.5);
        underlayment = Math.ceil(squares * 1.1);
        nails = Math.ceil(squares * 1.5);
        ridge = Math.ceil(squares * 0.3);
    }

    setResult({
      squares: Math.ceil(squares * 10) / 10,
      bundles,
      underlayment,
      nails,
      ridge,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Roofing Material Calculator</h1>
            <p className="text-lg text-blue-100">
              Calculate all materials needed for your roofing project
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
                </select>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-6"
            >
              Calculate Materials
            </button>

            {result && (
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Material Requirements</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Roofing Squares:</span>
                    <span className="text-xl font-bold text-gray-900">{result.squares} squares</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Bundles/Panels:</span>
                    <span className="text-xl font-bold text-gray-900">{result.bundles}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Underlayment Rolls:</span>
                    <span className="text-xl font-bold text-gray-900">{result.underlayment} rolls</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Roofing Nails:</span>
                    <span className="text-xl font-bold text-gray-900">{result.nails} lbs</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                    <span className="text-gray-700 font-semibold">Ridge Cap:</span>
                    <span className="text-xl font-bold text-orange-800">{result.ridge} linear ft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Add 10-15% extra for waste and future repairs. Actual quantities may vary based on roof complexity.
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

