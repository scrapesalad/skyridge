"use client";

import { useState } from 'react';

type ShapeType = 'slab' | 'column' | 'circular' | 'curb' | 'stairs';
type Unit = 'feet' | 'inches' | 'yards' | 'meters' | 'centimeters';

interface CalculationResult {
  volumeCubicYards: number;
  volumeCubicFeet: number;
  volumeCubicMeters: number;
  weightPounds: number;
  weightTons: number;
  bags60lb: number;
  bags80lb: number;
}

export default function ConcreteCalculator() {
  const [shapeType, setShapeType] = useState<ShapeType>('slab');
  const [unit, setUnit] = useState<Unit>('feet');
  const [quantity, setQuantity] = useState<number>(1);
  const [results, setResults] = useState<CalculationResult | null>(null);

  // Slab/Footing/Wall inputs
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [thickness, setThickness] = useState<string>('');

  // Column/Round Footing inputs
  const [diameter, setDiameter] = useState<string>('');
  const [depth, setDepth] = useState<string>('');

  // Circular Slab/Tube inputs
  const [outerDiameter, setOuterDiameter] = useState<string>('');
  const [innerDiameter, setInnerDiameter] = useState<string>('');
  const [circularHeight, setCircularHeight] = useState<string>('');

  // Curb inputs
  const [curbDepth, setCurbDepth] = useState<string>('');
  const [gutterWidth, setGutterWidth] = useState<string>('');
  const [curbHeight, setCurbHeight] = useState<string>('');
  const [flagThickness, setFlagThickness] = useState<string>('');
  const [curbLength, setCurbLength] = useState<string>('');

  // Stairs inputs
  const [run, setRun] = useState<string>('');
  const [rise, setRise] = useState<string>('');
  const [stairsWidth, setStairsWidth] = useState<string>('');
  const [platformDepth, setPlatformDepth] = useState<string>('');
  const [numSteps, setNumSteps] = useState<string>('');

  // Convert to feet
  const toFeet = (value: string, fromUnit: Unit): number => {
    const num = parseFloat(value) || 0;
    switch (fromUnit) {
      case 'feet': return num;
      case 'inches': return num / 12;
      case 'yards': return num * 3;
      case 'meters': return num * 3.28084;
      case 'centimeters': return num / 30.48;
      default: return num;
    }
  };

  const calculate = () => {
    let volumeCubicFeet = 0;

    switch (shapeType) {
      case 'slab':
        const l = toFeet(length, unit);
        const w = toFeet(width, unit);
        const t = toFeet(thickness, unit);
        volumeCubicFeet = l * w * t * quantity;
        break;

      case 'column':
        const d = toFeet(diameter, unit);
        const h = toFeet(depth, unit);
        const radius = d / 2;
        volumeCubicFeet = Math.PI * radius * radius * h * quantity;
        break;

      case 'circular':
        const od = toFeet(outerDiameter, unit);
        const id = toFeet(innerDiameter, unit);
        const ch = toFeet(circularHeight, unit);
        const outerRadius = od / 2;
        const innerRadius = id / 2;
        volumeCubicFeet = (Math.PI * (outerRadius * outerRadius - innerRadius * innerRadius) * ch) * quantity;
        break;

      case 'curb':
        const cd = toFeet(curbDepth, unit);
        const gw = toFeet(gutterWidth, unit);
        const ch2 = toFeet(curbHeight, unit);
        const ft = toFeet(flagThickness, unit);
        const cl = toFeet(curbLength, unit);
        // Curb volume = (curb depth × curb height × length) + (gutter width × flag thickness × length)
        volumeCubicFeet = ((cd * ch2) + (gw * ft)) * cl * quantity;
        break;

      case 'stairs':
        const r = toFeet(run, unit);
        const ris = toFeet(rise, unit);
        const sw = toFeet(stairsWidth, unit);
        const pd = toFeet(platformDepth, unit);
        const ns = parseInt(numSteps) || 1;
        // Stairs volume = (run × rise × width × number of steps) + (platform depth × width × rise)
        const stepVolume = (r * ris * sw * ns);
        const platformVolume = pd * sw * ris;
        volumeCubicFeet = (stepVolume + platformVolume) * quantity;
        break;
    }

    // Convert to cubic yards
    const volumeCubicYards = volumeCubicFeet / 27;
    // Convert to cubic meters
    const volumeCubicMeters = volumeCubicFeet * 0.0283168;

    // Calculate weight (concrete weighs ~150 lbs per cubic foot, or ~4050 lbs per cubic yard)
    const weightPounds = volumeCubicFeet * 150;
    const weightTons = weightPounds / 2000;

    // Calculate bags needed
    // 60 lb bag = 0.45 cubic feet, 80 lb bag = 0.6 cubic feet
    const bags60lb = Math.ceil(volumeCubicFeet / 0.45);
    const bags80lb = Math.ceil(volumeCubicFeet / 0.6);

    setResults({
      volumeCubicYards,
      volumeCubicFeet,
      volumeCubicMeters,
      weightPounds,
      weightTons,
      bags60lb,
      bags80lb,
    });
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setThickness('');
    setDiameter('');
    setDepth('');
    setOuterDiameter('');
    setInnerDiameter('');
    setCircularHeight('');
    setCurbDepth('');
    setGutterWidth('');
    setCurbHeight('');
    setFlagThickness('');
    setCurbLength('');
    setRun('');
    setRise('');
    setStairsWidth('');
    setPlatformDepth('');
    setNumSteps('');
    setQuantity(1);
    setResults(null);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Concrete Calculator</h3>
          <p className="text-gray-600">
            Calculate the volume and weight of concrete needed for your project. Purchasing slightly more concrete than estimated can reduce the probability of having insufficient concrete.
          </p>
        </div>

        {/* Shape Type Selector */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Shape Type</label>
          <select
            value={shapeType}
            onChange={(e) => {
              setShapeType(e.target.value as ShapeType);
              setResults(null);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="slab">Slabs, Square Footings, or Walls</option>
            <option value="column">Hole, Column, or Round Footings</option>
            <option value="circular">Circular Slab or Tube</option>
            <option value="curb">Curb and Gutter Barrier</option>
            <option value="stairs">Stairs</option>
          </select>
        </div>

        {/* Unit Selector */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Unit</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as Unit)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="feet">Feet</option>
            <option value="inches">Inches</option>
            <option value="yards">Yards</option>
            <option value="meters">Meters</option>
            <option value="centimeters">Centimeters</option>
          </select>
        </div>

        {/* Input Fields Based on Shape Type */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {shapeType === 'slab' && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Length ({unit})</label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Width ({unit})</label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Thickness/Height ({unit})</label>
                <input
                  type="number"
                  value={thickness}
                  onChange={(e) => setThickness(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
            </>
          )}

          {shapeType === 'column' && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Diameter ({unit})</label>
                <input
                  type="number"
                  value={diameter}
                  onChange={(e) => setDiameter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Depth/Height ({unit})</label>
                <input
                  type="number"
                  value={depth}
                  onChange={(e) => setDepth(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
            </>
          )}

          {shapeType === 'circular' && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Outer Diameter ({unit})</label>
                <input
                  type="number"
                  value={outerDiameter}
                  onChange={(e) => setOuterDiameter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Inner Diameter ({unit})</label>
                <input
                  type="number"
                  value={innerDiameter}
                  onChange={(e) => setInnerDiameter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Length/Height ({unit})</label>
                <input
                  type="number"
                  value={circularHeight}
                  onChange={(e) => setCircularHeight(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
            </>
          )}

          {shapeType === 'curb' && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Curb Depth ({unit})</label>
                <input
                  type="number"
                  value={curbDepth}
                  onChange={(e) => setCurbDepth(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gutter Width ({unit})</label>
                <input
                  type="number"
                  value={gutterWidth}
                  onChange={(e) => setGutterWidth(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Curb Height ({unit})</label>
                <input
                  type="number"
                  value={curbHeight}
                  onChange={(e) => setCurbHeight(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Flag Thickness ({unit})</label>
                <input
                  type="number"
                  value={flagThickness}
                  onChange={(e) => setFlagThickness(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Length ({unit})</label>
                <input
                  type="number"
                  value={curbLength}
                  onChange={(e) => setCurbLength(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
            </>
          )}

          {shapeType === 'stairs' && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Run ({unit})</label>
                <input
                  type="number"
                  value={run}
                  onChange={(e) => setRun(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Rise ({unit})</label>
                <input
                  type="number"
                  value={rise}
                  onChange={(e) => setRise(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Width ({unit})</label>
                <input
                  type="number"
                  value={stairsWidth}
                  onChange={(e) => setStairsWidth(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Platform Depth ({unit})</label>
                <input
                  type="number"
                  value={platformDepth}
                  onChange={(e) => setPlatformDepth(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Steps</label>
                <input
                  type="number"
                  value={numSteps}
                  onChange={(e) => setNumSteps(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="1"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={calculate}
            className="flex-1 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Calculate
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Results */}
        {results && (
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border-2 border-teal-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Calculation Results</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Volume (Cubic Yards)</div>
                <div className="text-2xl font-bold text-teal-600">{results.volumeCubicYards.toFixed(2)}</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Volume (Cubic Feet)</div>
                <div className="text-2xl font-bold text-teal-600">{results.volumeCubicFeet.toFixed(2)}</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Volume (Cubic Meters)</div>
                <div className="text-2xl font-bold text-teal-600">{results.volumeCubicMeters.toFixed(2)}</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Weight (Pounds)</div>
                <div className="text-2xl font-bold text-teal-600">{results.weightPounds.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Weight (Tons)</div>
                <div className="text-2xl font-bold text-teal-600">{results.weightTons.toFixed(2)}</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">60 lb Bags Needed</div>
                <div className="text-2xl font-bold text-teal-600">{results.bags60lb}</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">80 lb Bags Needed</div>
                <div className="text-2xl font-bold text-teal-600">{results.bags80lb}</div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> It's recommended to purchase 5-10% more concrete than calculated to account for waste, spillage, and variations in measurements.
              </p>
            </div>
          </div>
        )}

        {/* Information Section */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">About Concrete</h4>
          <p className="text-sm text-gray-700 mb-3">
            Concrete is a material comprised of coarse aggregates (sand, gravel, crushed stone, and slag) bonded with cement. 
            Cement is used to bind materials and hardens over time. While there are many types of cement, Portland cement is 
            the most commonly used and is an ingredient in concrete, mortar, and plasters.
          </p>
          <p className="text-sm text-gray-700 mb-3">
            Concrete can be purchased in 60 or 80-pound bags, or delivered in large amounts by specialized concrete mixer trucks. 
            Proper mixing is essential for the production of strong, uniform concrete.
          </p>
          <p className="text-sm text-gray-700">
            The process of concrete hardening once it has been placed is called curing, and typically takes around four weeks 
            to reach over 90% of its final strength.
          </p>
        </div>
      </div>
    </div>
  );
}

