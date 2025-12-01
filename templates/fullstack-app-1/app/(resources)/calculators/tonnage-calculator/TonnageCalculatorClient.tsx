"use client";

import Link from "next/link";

export default function TonnageCalculatorClient() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow border border-gray-2 00 p-6 relative min-w-0 overflow-visible">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Calculate Tonnage</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="min-w-0">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Material</label>
                <select id="t-material" className="w-full min-w-0 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent" onChange={() => {
                  const m = (document.getElementById('t-material') as HTMLSelectElement)?.value;
                  const weights: Record<string, number> = { 'concrete': 2.5, 'asphalt': 2.0, 'brick': 2.0, 'crushed-stone': 2.7, 'dirt': 1.5, 'sand': 1.6, 'gravel': 2.0, 'construction-debris': 1.0, 'wood': 0.5, 'cardboard': 0.1, 'metal': 3.0, 'roofing': 1.2, 'custom': 0 };
                  (document.getElementById('t-unit') as HTMLInputElement).value = String(weights[m] ?? 0);
                }}>
                  <option value="concrete">Concrete & Masonry</option>
                  <option value="asphalt">Asphalt</option>
                  <option value="brick">Brick & Stone</option>
                  <option value="crushed-stone">Crushed Stone</option>
                  <option value="dirt">Dirt & Soil</option>
                  <option value="sand">Sand</option>
                  <option value="gravel">Gravel</option>
                  <option value="construction-debris">Construction Debris</option>
                  <option value="wood">Wood & Lumber</option>
                  <option value="cardboard">Cardboard & Paper</option>
                  <option value="metal">Metal & Scrap</option>
                  <option value="roofing">Roofing Materials</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              <div className="min-w-0">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Unit Weight (tons/cu yd)</label>
                <input id="t-unit" type="number" step="0.1" defaultValue={2.5} className="w-full min-w-0 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Length','Width','Depth'].map((label) => (
                <div key={label} className="min-w-0">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
                  <div className="flex items-center gap-2 min-w-0">
                    <input id={`t-${label.toLowerCase()}`} type="number" step="0.1" placeholder="0" className="flex-1 min-w-0 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent" />
                    <select id={`t-${label.toLowerCase()}-unit`} className="w-28 sm:w-32 shrink-0 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent">
                      {label === 'Depth' ? (
                        <>
                          <option value="inches">inches</option>
                          <option value="feet">feet</option>
                          <option value="yards">yards</option>
                          <option value="meters">meters</option>
                        </>
                      ) : (
                        <>
                          <option value="feet">feet</option>
                          <option value="yards">yards</option>
                          <option value="meters">meters</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const get = (id: string) => (document.getElementById(id) as HTMLInputElement | HTMLSelectElement)?.value || '0';
                const L = parseFloat(get('t-length')); const W = parseFloat(get('t-width')); const D = parseFloat(get('t-depth')); const U = parseFloat(get('t-unit'));
                const Lu = get('t-length-unit'); const Wu = get('t-width-unit'); const Du = get('t-depth-unit');
                const toYd = (v: number, u: string) => u === 'feet' ? v/3 : u === 'meters' ? v*1.09361 : u === 'inches' ? v/36 : v;
                const volume = toYd(L, Lu) * toYd(W, Wu) * toYd(D, Du);
                const tons = volume * U;
                const result = document.getElementById('t-result');
                if (result) {
                  result.innerHTML = `<div class=\"bg-teal-50 border border-purple-200 rounded-lg p-4\">\n                    <div class=\"grid grid-cols-2 gap-4\">\n                      <div class=\"text-center bg-white p-3 rounded\"><div class=\"text-2xl font-bold text-teal-700\">${tons.toFixed(2)}</div><div class=\"text-sm text-gray-600\">Total Tons</div></div>\n                      <div class=\"text-center bg-white p-3 rounded\"><div class=\"text-2xl font-bold text-trust-blue-dark\">${volume.toFixed(2)}</div><div class=\"text-sm text-gray-600\">Cubic Yards</div></div>\n                    </div>\n                    <div class=\"mt-3 text-sm text-teal-800\"><strong>Note:</strong> Additional weight over dumpster limits is billed at $55/ton after disposal facility weighing.</div>\n                  </div>`;
                }
              }}
              className="mt-6 w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-600 transition-all"
            >Calculate</button>

            <div id="t-result" className="mt-4"></div>
          </div>

          <aside className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-1 text-sm">Dumpster Weight Limits</h3>
              <ul className="text-xs text-trust-blue-dark space-y-1">
                <li className="flex justify-between"><span>15‑Yard:</span><span className="font-semibold">3 tons</span></li>
                <li className="flex justify-between"><span>20‑Yard:</span><span className="font-semibold">4 tons</span></li>
                <li className="flex justify-between"><span>30‑Yard:</span><span className="font-semibold">6 tons</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-1 text-sm">Common Material Weights</h3>
              <ul className="text-xs text-teal-800 space-y-1">
                <li className="flex justify-between"><span>Concrete:</span><span>2.5 tons/cu yd</span></li>
                <li className="flex justify-between"><span>Asphalt:</span><span>2.0 tons/cu yd</span></li>
                <li className="flex justify-between"><span>Crushed Stone:</span><span>2.7 tons/cu yd</span></li>
                <li className="flex justify-between"><span>Dirt/Soil:</span><span>1.5 tons/cu yd</span></li>
                <li className="flex justify-between"><span>Sand:</span><span>1.6 tons/cu yd</span></li>
                <li className="flex justify-between"><span>Construction Debris:</span><span>1.0 tons/cu yd</span></li>
                <li className="flex justify-between"><span>Wood/Lumber:</span><span>0.5 tons/cu yd</span></li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-xl border border-red-200">
              <h3 className="font-semibold text-red-900 mb-1 text-sm">Overweight Charges</h3>
              <ul className="text-xs text-red-800 space-y-1">
                <li>• $55 per ton over limit</li>
                <li>• Weighed at disposal facility</li>
                <li>• Heavy materials add up quickly</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700">
              We drop off empty and bill actual weight after pickup at $55/ton. No weight is included in base rental. See more details on our <Link href="https://icondumpsters.com/fees" className="text-[#0d9488] hover:underline">fees</Link> and <Link href="https://icondumpsters.com/dumpster-sizes" className="text-[#0d9488] hover:underline">sizes</Link> pages.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
