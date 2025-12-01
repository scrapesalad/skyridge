'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Hero from '@/app/components/hero';
import RelatedPages from '@/app/components/RelatedPages';

interface ProjectData {
  projectType: string;
  projectSize: string;
  materials: string[];
  estimatedVolume: number;
  recommendedSize: string;
  additionalNotes: string[];
}

export default function DumpsterSizeCalculatorPage() {
  const [formData, setFormData] = useState({
    projectType: '',
    projectSize: '',
    materials: [] as string[],
    estimatedVolume: 0,
    additionalNotes: ''
  });

  const [result, setResult] = useState<ProjectData | null>(null);
  const [showResult, setShowResult] = useState(false);

  const projectTypes = [
    { value: 'home-renovation', label: 'Home Renovation', icon: '🏠' },
    { value: 'kitchen-remodel', label: 'Kitchen Remodel', icon: '🍳' },
    { value: 'bathroom-remodel', label: 'Bathroom Remodel', icon: '🚿' },
    { value: 'basement-cleanout', label: 'Basement Cleanout', icon: '🏡' },
    { value: 'garage-cleanout', label: 'Garage Cleanout', icon: '🚗' },
    { value: 'yard-cleanup', label: 'Yard Cleanup', icon: '🌳' },
    { value: 'construction', label: 'Construction Project', icon: '🏗️' },
    { value: 'demolition', label: 'Demolition', icon: '🔨' },
    { value: 'moving', label: 'Moving & Relocation', icon: '📦' },
    { value: 'estate-cleanout', label: 'Estate Cleanout', icon: '🏛️' }
  ];

  const projectSizes = [
    { value: 'small', label: 'Small (1-2 rooms)', volume: 5 },
    { value: 'medium', label: 'Medium (3-4 rooms)', volume: 10 },
    { value: 'large', label: 'Large (5+ rooms)', volume: 15 },
    { value: 'whole-house', label: 'Whole House', volume: 25 }
  ];

  const materialOptions = [
    { value: 'drywall', label: 'Drywall & Sheetrock', weight: 0.5 },
    { value: 'wood', label: 'Wood & Lumber', weight: 0.3 },
    { value: 'concrete', label: 'Concrete & Masonry', weight: 2.0 },
    { value: 'metal', label: 'Metal & Appliances', weight: 1.5 },
    { value: 'furniture', label: 'Furniture & Mattresses', weight: 0.8 },
    { value: 'carpet', label: 'Carpet & Flooring', weight: 0.4 },
    { value: 'tile', label: 'Tile & Ceramics', weight: 1.2 },
    { value: 'insulation', label: 'Insulation', weight: 0.2 },
    { value: 'dirt', label: 'Dirt & Soil', weight: 1.8 },
    { value: 'debris', label: 'General Debris', weight: 0.6 }
  ];

  const dumpsterSizes = [
    { size: '10 Yard', dimensions: '12\' x 6\' x 4\'', capacity: '10 cubic yards', price: '$299', bestFor: 'Small projects, single room renovations' },
    { size: '15 Yard', dimensions: '16\' x 7\' x 4\'', capacity: '15 cubic yards', price: '$399', bestFor: 'Medium projects, kitchen/bathroom remodels' },
    { size: '20 Yard', dimensions: '17.08\' x 7.54\' x 5.00\'', capacity: '20 cubic yards', price: '$499', bestFor: 'Large projects, whole house renovations' },
    { size: '30 Yard', dimensions: '22.0&apos; × 7.92&apos; × 6.0&apos; (L × W × D)', capacity: '30 cubic yards', price: '$699', bestFor: 'Major projects, construction sites' }
  ];

  const handleMaterialChange = (material: string) => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.includes(material)
        ? prev.materials.filter(m => m !== material)
        : [...prev.materials, material]
    }));
  };

  const calculateDumpsterSize = () => {
    let totalVolume = 0;
    let notes: string[] = [];

    // Base volume from project size
    const sizeData = projectSizes.find(s => s.value === formData.projectSize);
    if (sizeData) {
      totalVolume = sizeData.volume;
    }

    // Add volume based on materials
    formData.materials.forEach(material => {
      const materialData = materialOptions.find(m => m.value === material);
      if (materialData) {
        totalVolume += materialData.weight * 2; // 2 cubic yards per material type
      }
    });

    // Adjust based on project type
    switch (formData.projectType) {
      case 'construction':
        totalVolume *= 1.5;
        notes.push('Construction projects typically generate more waste than renovations');
        break;
      case 'demolition':
        totalVolume *= 2.0;
        notes.push('Demolition projects generate significant debris - consider going larger');
        break;
      case 'estate-cleanout':
        totalVolume *= 1.3;
        notes.push('Estate cleanouts often include furniture and personal items');
        break;
      case 'yard-cleanup':
        totalVolume *= 0.8;
        notes.push('Yard waste is lighter but takes up more space');
        break;
    }

    // Determine recommended size
    let recommendedSize = '10 Yard';
    if (totalVolume > 25) {
      recommendedSize = '30 Yard';
      notes.push('Large project detected - 30 yard dumpster recommended');
    } else if (totalVolume > 18) {
      recommendedSize = '20 Yard';
      notes.push('Medium-large project - 20 yard dumpster should handle the load');
    } else if (totalVolume > 12) {
      recommendedSize = '15 Yard';
      notes.push('Medium project - 15 yard dumpster is ideal');
    } else {
      notes.push('Small project - 10 yard dumpster should be sufficient');
    }

    // Additional considerations
    if (formData.materials.includes('concrete')) {
      notes.push('Concrete is heavy - ensure proper weight distribution');
    }
    if (formData.materials.includes('metal')) {
      notes.push('Metal items can be recycled - consider separate disposal');
    }
    if (totalVolume > 20) {
      notes.push('Consider multiple pickups or larger dumpster for convenience');
    }

    const result: ProjectData = {
      projectType: formData.projectType,
      projectSize: formData.projectSize,
      materials: formData.materials,
      estimatedVolume: Math.round(totalVolume * 10) / 10,
      recommendedSize,
      additionalNotes: notes
    };

    setResult(result);
    setShowResult(true);
  };

  const resetCalculator = () => {
    setFormData({
      projectType: '',
      projectSize: '',
      materials: [],
      estimatedVolume: 0,
      additionalNotes: ''
    });
    setResult(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div id="calculator" className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link></h2>
              
              <form onSubmit={(e) => { e.preventDefault(); calculateDumpsterSize(); }} className="space-y-6">
                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What type of project are you working on?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, projectType: type.value }))}
                        className={`p-3 rounded-lg border-2 text-left transition-colors ${
                          formData.projectType === type.value
                            ? 'border-[#0d9488] bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-4xl mb-1">{type.icon}</div>
                        <div className="text-sm font-medium text-gray-900">{type.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How large is your project?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {projectSizes.map((size) => (
                      <button
                        key={size.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, projectSize: size.value }))}
                        className={`p-4 rounded-lg border-2 text-center transition-colors ${
                          formData.projectSize === size.value
                            ? 'border-[#0d9488] bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium text-gray-900">{size.label}</div>
                        <div className="text-sm text-gray-500">~{size.volume} cubic yards</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What materials will you be disposing of? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {materialOptions.map((material) => (
                      <label key={material.value} className="flex items-center p-3 rounded-lg border-2 border-gray-200 hover:border-gray-300 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.materials.includes(material.value)}
                          onChange={() => handleMaterialChange(material.value)}
                          className="mr-3 h-4 w-4 text-[#0d9488] border-gray-300 rounded focus:ring-[#0d9488]"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{material.label}</div>
                          <div className="text-xs text-gray-500">Heavy material</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0d9488] focus:border-[#0d9488]"
                    placeholder="Any special considerations or details about your project..."
                  />
                </div>

                {/* Calculate Button */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={!formData.projectType || !formData.projectSize}
                    className="flex-1 bg-[#0d9488] text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Calculate <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link>
                  </button>
                  <button
                    type="button"
                    onClick={resetCalculator}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Results & Information */}
          <div className="space-y-6">
            {/* Results */}
            {showResult && result && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Results</h3>
                
                <div className="space-y-4">
                  <div className="bg-teal-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-teal-800 mb-1">Recommended Size</div>
                    <div className="text-2xl font-bold text-purple-900">{result.recommendedSize}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">Estimated Volume</div>
                    <div className="text-lg font-semibold text-gray-900">{result.estimatedVolume} cubic yards</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Project Details</div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>• {projectTypes.find(t => t.value === result.projectType)?.label}</div>
                      <div>• {projectSizes.find(s => s.value === result.projectSize)?.label}</div>
                      <div>• {result.materials.length} material types selected</div>
                    </div>
                  </div>
                  
                  {result.additionalNotes.length > 0 && (
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Recommendations</div>
                      <div className="text-sm text-gray-600 space-y-1">
                        {result.additionalNotes.map((note, index) => (
                          <div key={index}>• {note}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <a
                    href="https://icondumpsters.com/dumpster-calculator/quote"
                    className="block w-full bg-[#0d9488] text-white text-center py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors font-medium"
                  >
                    Get Quote for {result.recommendedSize}
                  </a>
                </div>
              </div>
            )}

            {/* <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> Guide */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4"><Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> Guide</h3>
              <div className="space-y-3">
                {dumpsterSizes.map((dumpster) => (
                  <div key={dumpster.size} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-semibold text-gray-900">{dumpster.size}</div>
                      <div className="text-lg font-bold text-[#0d9488]">{dumpster.price}</div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Dimensions: {dumpster.dimensions}</div>
                      <div>Capacity: {dumpster.capacity}</div>
                      <div className="text-xs text-gray-500">{dumpster.bestFor}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">💡 Pro Tips</h3>
              <div className="text-sm text-trust-blue-dark space-y-2">
                <div>• It's better to go slightly larger than too small</div>
                <div>• Heavy materials like concrete require proper weight distribution</div>
                <div>• Consider access and placement when choosing size</div>
                <div>• Multiple pickups may be more cost-effective for large projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Other Dumpster Calculators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/dumpster-calculator/quote" className="block p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quote Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Get instant pricing estimates for your dumpster rental</p>
              <span className="text-blue-600 font-semibold">Get Quote →</span>
            </Link>
            <Link href="/tonnage-calculator" className="block p-6 bg-orange-50 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tonnage Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Estimate material weights to avoid overweight charges</p>
              <span className="text-orange-600 font-semibold">Calculate Weight →</span>
            </Link>
            <Link href="/demolition-calculator" className="block p-6 bg-red-50 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Demolition Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Calculate dumpster needs for demolition projects</p>
              <span className="text-red-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/roofing-calculator" className="block p-6 bg-purple-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Roofing Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Estimate dumpster size for roofing projects</p>
              <span className="text-purple-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/dumpster-calculator-for-concrete" className="block p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Concrete Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Calculate concrete disposal costs and dumpster size</p>
              <span className="text-gray-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/demolition-dumpster" className="block p-6 bg-orange-50 rounded-xl border-2 border-orange-300 hover:border-orange-500 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Demolition Dumpster Guide</h3>
              <p className="text-sm text-gray-600 mb-3">Commercial demolition dumpsters for contractors</p>
              <span className="text-orange-600 font-semibold">Learn More →</span>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Your Quote?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Now that you know the right size, get an instant price quote for your dumpster rental.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://icondumpsters.com/dumpster-calculator/quote"
              className="bg-[#0d9488] text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-medium text-lg"
            >
              Get Price Quote
            </a>
            <a
              href="tel:(801) 918-6000"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-action-orange transition-colors font-medium text-lg"
            >
              Call (801) 918-6000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
