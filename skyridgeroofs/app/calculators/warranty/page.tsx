'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function WarrantyCalculator() {
  const [installDate, setInstallDate] = useState('');
  const [warrantyYears, setWarrantyYears] = useState('');
  const [materialType, setMaterialType] = useState('asphalt');
  const [result, setResult] = useState<{ yearsRemaining: number; expirationDate: string; coverage: string; status: string } | null>(null);

  const calculate = () => {
    if (!installDate || !warrantyYears) {
      alert('Please enter installation date and warranty period');
      return;
    }

    const install = new Date(installDate);
    const warranty = parseInt(warrantyYears);
    const today = new Date();
    const expiration = new Date(install);
    expiration.setFullYear(expiration.getFullYear() + warranty);

    const yearsRemaining = (expiration.getTime() - today.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    const monthsRemaining = yearsRemaining * 12;

    let coverage = '';
    let status = '';

    if (materialType === 'asphalt') {
      coverage = warranty >= 30 ? 'Lifetime/30-year warranty typically covers materials and workmanship' : 'Standard warranty covers materials and workmanship';
    } else if (materialType === 'metal') {
      coverage = 'Metal roofs typically have 20-50 year warranties covering materials, paint finish, and workmanship';
    } else if (materialType === 'tile') {
      coverage = 'Tile roofs often have 50+ year warranties covering materials and installation';
    } else {
      coverage = 'Warranty coverage varies by manufacturer and installation quality';
    }

    if (yearsRemaining < 0) {
      status = 'Expired';
    } else if (yearsRemaining < 1) {
      status = 'Expiring Soon';
    } else if (yearsRemaining < 5) {
      status = 'Active (Less than 5 years remaining)';
    } else {
      status = 'Active';
    }

    setResult({
      yearsRemaining: Math.round(yearsRemaining * 10) / 10,
      expirationDate: expiration.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      coverage,
      status,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Roofing Warranty Calculator</h1>
            <p className="text-lg text-blue-100">
              Calculate warranty coverage and remaining period
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Installation Date
                </label>
                <input
                  type="date"
                  value={installDate}
                  onChange={(e) => setInstallDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Warranty Period (years)
                </label>
                <input
                  type="number"
                  value={warrantyYears}
                  onChange={(e) => setWarrantyYears(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 30"
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
                </select>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-6"
            >
              Calculate Warranty Status
            </button>

            {result && (
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 rounded-lg border border-emerald-200">
                <h3 className="text-2xl font-bold text-emerald-800 mb-4">Warranty Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Years Remaining:</span>
                    <span className={`text-xl font-bold ${result.yearsRemaining < 0 ? 'text-red-600' : result.yearsRemaining < 1 ? 'text-orange-600' : 'text-gray-900'}`}>
                      {result.yearsRemaining < 0 ? 'Expired' : `${result.yearsRemaining} years`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Expiration Date:</span>
                    <span className="text-xl font-bold text-gray-900">{result.expirationDate}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                    <span className="text-gray-700 font-semibold">Status:</span>
                    <span className={`text-lg font-bold ${
                      result.status === 'Expired' ? 'text-red-600' : 
                      result.status.includes('Expiring') ? 'text-orange-600' : 
                      'text-emerald-800'
                    }`}>
                      {result.status}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-gray-300">
                    <p className="text-gray-700 text-sm">{result.coverage}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Warranty terms vary by manufacturer and installer. Always check your specific warranty documentation for exact coverage details.
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

