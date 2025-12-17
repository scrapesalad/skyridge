'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function RoofPitchCalculator() {
  const [rise, setRise] = useState('');
  const [run, setRun] = useState('');
  const [result, setResult] = useState<{ pitch: number; angle: number; percentage: number; description: string } | null>(null);

  const calculate = () => {
    const riseNum = parseFloat(rise);
    const runNum = parseFloat(run);

    if (!riseNum || !runNum || riseNum <= 0 || runNum <= 0) {
      alert('Please enter valid rise and run measurements');
      return;
    }

    const pitch = riseNum / runNum;
    const angle = Math.atan(pitch) * (180 / Math.PI);
    const percentage = pitch * 100;

    let description = '';
    if (pitch < 0.25) description = 'Nearly Flat (0-2/12)';
    else if (pitch < 0.33) description = 'Low Slope (2-4/12)';
    else if (pitch < 0.5) description = 'Moderate Slope (4-6/12)';
    else if (pitch < 0.67) description = 'Standard Slope (6-8/12)';
    else if (pitch < 1) description = 'Steep Slope (8-12/12)';
    else description = 'Very Steep (12/12+)';

    setResult({
      pitch: Math.round(pitch * 12 * 10) / 10,
      angle: Math.round(angle * 10) / 10,
      percentage: Math.round(percentage * 10) / 10,
      description,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Roof Pitch Calculator</h1>
            <p className="text-lg text-blue-100">
              Calculate roof pitch from rise and run measurements
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Rise:</strong> The vertical distance from the top of the wall to the peak of the roof
              </p>
              <p className="text-sm text-gray-700">
                <strong>Run:</strong> The horizontal distance from the edge of the roof to the center (half the width)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rise (inches)
                </label>
                <input
                  type="number"
                  value={rise}
                  onChange={(e) => setRise(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Run (inches)
                </label>
                <input
                  type="number"
                  value={run}
                  onChange={(e) => setRun(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 12"
                />
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-6"
            >
              Calculate Pitch
            </button>

            {result && (
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Pitch Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Pitch Ratio:</span>
                    <span className="text-xl font-bold text-gray-900">{result.pitch}/12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Angle:</span>
                    <span className="text-xl font-bold text-gray-900">{result.angle}°</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Percentage:</span>
                    <span className="text-xl font-bold text-gray-900">{result.percentage}%</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                    <span className="text-gray-700 font-semibold">Classification:</span>
                    <span className="text-lg font-bold text-purple-800">{result.description}</span>
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

