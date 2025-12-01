'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSchema from '@/app/components/FAQSchema';

const faqs = [
  {
    question: "How accurate is the dumpster rental cost calculator?",
    answer: "Our calculator provides estimates based on typical Utah dumpster rental pricing. Actual costs may vary based on your specific location, permit requirements, weight of materials, and rental duration. We recommend getting a free quote for the most accurate pricing."
  },
  {
    question: "What factors affect dumpster rental costs in Utah?",
    answer: "Several factors affect dumpster rental costs: dumpster size (15, 20, or 30 yards), rental duration, weight of materials, permit requirements (varies by city), delivery location, and any prohibited materials. Heavy materials like concrete or roofing shingles may incur additional weight charges."
  },
  {
    question: "Are there hidden fees in dumpster rentals?",
    answer: "Transparent companies will disclose all fees upfront. Common additional fees include: weight overage charges ($55/ton over limit), permit costs ($25-$50), environmental fees, and extension fees if you need to keep the dumpster longer. Always ask for a complete breakdown before booking."
  }
];

export default function DumpsterRentalCostCalculator() {
  const [formData, setFormData] = useState({
    size: '20',
    city: 'salt-lake-city',
    duration: '7',
    materials: [] as string[],
    placement: 'driveway',
    permit: 'unknown'
  });

  const [result, setResult] = useState<{
    baseRental: number;
    delivery: number;
    permit: number;
    weightEstimate: number;
    total: number;
    breakdown: string[];
  } | null>(null);

  const sizes = [
    { value: '15', label: '15-Yard Dumpster', basePrice: 350, weightLimit: 2.5 },
    { value: '20', label: '20-Yard Dumpster', basePrice: 450, weightLimit: 3.5 },
    { value: '30', label: '30-Yard Dumpster', basePrice: 550, weightLimit: 5 }
  ];

  const cities = [
    { value: 'salt-lake-city', label: 'Salt Lake City', permitCost: 35 },
    { value: 'west-valley-city', label: 'West Valley City', permitCost: 30 },
    { value: 'provo', label: 'Provo', permitCost: 25 },
    { value: 'ogden', label: 'Ogden', permitCost: 35 },
    { value: 'sandy', label: 'Sandy', permitCost: 30 },
    { value: 'other', label: 'Other City', permitCost: 30 }
  ];

  const materialOptions = [
    { value: 'light', label: 'Light Materials (furniture, wood, drywall)', weightMultiplier: 0.5 },
    { value: 'medium', label: 'Medium Materials (mixed debris, roofing)', weightMultiplier: 1.0 },
    { value: 'heavy', label: 'Heavy Materials (concrete, dirt, brick)', weightMultiplier: 2.5 },
    { value: 'mixed', label: 'Mixed Materials', weightMultiplier: 1.2 }
  ];

  const calculateCost = () => {
    const selectedSize = sizes.find(s => s.value === formData.size);
    const selectedCity = cities.find(c => c.value === formData.city);
    
    if (!selectedSize || !selectedCity) return;

    // Base rental
    let baseRental = selectedSize.basePrice;
    
    // Delivery fee
    const delivery = 75;
    
    // Permit cost
    let permitCost = 0;
    if (formData.permit === 'yes' || (formData.permit === 'unknown' && formData.placement === 'street')) {
      permitCost = selectedCity.permitCost;
    }
    
    // Weight estimate
    const selectedMaterials = materialOptions.filter(m => formData.materials.includes(m.value));
    let weightMultiplier = 1.0;
    if (selectedMaterials.length > 0) {
      weightMultiplier = selectedMaterials.reduce((sum, m) => sum + m.weightMultiplier, 0) / selectedMaterials.length;
    }
    
    const estimatedWeight = selectedSize.weightLimit * weightMultiplier;
    let weightOverage = 0;
    if (estimatedWeight > selectedSize.weightLimit) {
      const overageTons = estimatedWeight - selectedSize.weightLimit;
      weightOverage = Math.ceil(overageTons) * 55; // $55 per ton
    }
    
    // Duration extension (if over 14 days)
    let extensionFee = 0;
    const days = parseInt(formData.duration);
    if (days > 14) {
      extensionFee = (days - 14) * 10; // $10 per day after 14 days
    }
    
    const total = baseRental + delivery + permitCost + weightOverage + extensionFee;
    
    const breakdown: string[] = [];
    breakdown.push(`Base rental (${selectedSize.label}): $${baseRental}`);
    breakdown.push(`Delivery fee: $${delivery}`);
    if (permitCost > 0) {
      breakdown.push(`Permit (${selectedCity.label}): $${permitCost}`);
    }
    if (weightOverage > 0) {
      breakdown.push(`Weight overage (estimated): $${weightOverage}`);
    }
    if (extensionFee > 0) {
      breakdown.push(`Extension fee (${days - 14} days): $${extensionFee}`);
    }
    
    setResult({
      baseRental,
      delivery,
      permit: permitCost,
      weightEstimate: estimatedWeight,
      total,
      breakdown
    });
  };

  const handleMaterialChange = (material: string) => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.includes(material)
        ? prev.materials.filter(m => m !== material)
        : [...prev.materials, material]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <FAQSchema faqs={faqs} pageUrl="https://icondumpsters.com/calculators/dumpster-rental-cost-calculator" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d9488] via-teal-700 to-[#0d9488] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dumpster Rental Cost Calculator
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Get an instant estimate for your dumpster rental in Utah. No surprises, no hidden fees—just honest pricing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Calculator */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Dumpster Rental Cost</h2>
              
              <div className="space-y-6">
                {/* Dumpster Size */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    What size dumpster do you need?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {sizes.map(size => (
                      <button
                        key={size.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, size: size.value }))}
                        className={`p-4 rounded-lg border-2 text-left transition-colors ${
                          formData.size === size.value
                            ? 'border-[#0d9488] bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold text-gray-900">{size.label}</div>
                        <div className="text-sm text-gray-600 mt-1">Base: ${size.basePrice}</div>
                        <div className="text-xs text-gray-500 mt-1">Weight limit: {size.weightLimit} tons</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What city are you in?
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
                  >
                    {cities.map(city => (
                      <option key={city.value} value={city.value}>{city.label}</option>
                    ))}
                  </select>
                </div>

                {/* Placement */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Where will the dumpster be placed?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, placement: 'driveway' }))}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        formData.placement === 'driveway'
                          ? 'border-[#0d9488] bg-teal-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">Driveway</div>
                      <div className="text-sm text-gray-600 mt-1">Private property</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, placement: 'street' }))}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        formData.placement === 'street'
                          ? 'border-[#0d9488] bg-teal-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">Street/Right-of-Way</div>
                      <div className="text-sm text-gray-600 mt-1">Permit usually required</div>
                    </button>
                  </div>
                </div>

                {/* Permit */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Do you need a permit?
                  </label>
                  <select
                    value={formData.permit}
                    onChange={(e) => setFormData(prev => ({ ...prev, permit: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
                  >
                    <option value="unknown">I'm not sure</option>
                    <option value="yes">Yes, I need a permit</option>
                    <option value="no">No permit needed</option>
                  </select>
                  {formData.placement === 'street' && (
                    <p className="text-sm text-amber-600 mt-2">
                      ⚠️ Street placement usually requires a permit. We'll include permit costs in your estimate.
                    </p>
                  )}
                </div>

                {/* Rental Duration */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    How long do you need the dumpster? (days)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={formData.duration}
                    onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Most rentals include 7-14 days. Additional days may incur fees.
                  </p>
                </div>

                {/* Materials */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    What materials will you be disposing? (select all that apply)
                  </label>
                  <div className="space-y-2">
                    {materialOptions.map(material => (
                      <label key={material.value} className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.materials.includes(material.value)}
                          onChange={() => handleMaterialChange(material.value)}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{material.label}</div>
                          <div className="text-xs text-gray-600 mt-1">
                            {material.weightMultiplier < 1 ? 'Light weight' : 
                             material.weightMultiplier < 2 ? 'Medium weight' : 'Heavy - may incur extra charges'}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateCost}
                  className="w-full bg-[#0d9488] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors"
                >
                  Calculate My Cost
                </button>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="bg-gradient-to-br from-[#0d9488] to-teal-700 rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Your Estimated Cost</h3>
                <div className="text-5xl font-bold mb-6">${result.total.toLocaleString()}</div>
                
                <div className="bg-white/10 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-4">Cost Breakdown:</h4>
                  <ul className="space-y-2">
                    {result.breakdown.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.split(':')[0]}:</span>
                        <span className="font-semibold">${item.split('$')[1]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-gray-900 mb-6">
                  <p className="text-sm font-semibold mb-2">⚠️ Important Notes:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>This is an estimate. Actual costs may vary.</li>
                    <li>Weight charges apply if you exceed the dumpster's weight limit.</li>
                    <li>Permit costs vary by city and placement location.</li>
                    <li>For the most accurate quote, contact us directly.</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://icondumpsters.com/#quote-form"
                    className="bg-white text-[#0d9488] px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
                  >
                    Get Free Quote
                  </a>
                  <a
                    href="tel:(801) 918-6000"
                    className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/10 transition-colors"
                  >
                    Call (801) 918-6000
                  </a>
                </div>
              </div>
            )}

            {/* Information Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Dumpster Rental Costs</h2>
              
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-4">
                  I've been helping Utah homeowners and contractors with dumpster rentals for years, and I know how frustrating it can be when you get hit with surprise fees. That's why I built this calculator—to give you a realistic idea of what your dumpster rental will actually cost.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What's Included in the Base Price</h3>
                <p className="leading-relaxed mb-4">
                  The base rental fee covers the dumpster itself, delivery, and pickup. Most rentals include 7-14 days of use. That's the starting point, but there are usually a few additional costs to consider.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Common Additional Fees</h3>
                <ul className="space-y-2 mb-4">
                  <li><strong>Weight overage:</strong> If you exceed the weight limit (usually 2.5-5 tons depending on size), you'll pay $55 per ton over. Heavy materials like concrete, dirt, or roofing shingles can push you over quickly.</li>
                  <li><strong>Permits:</strong> Most Utah cities require permits for street placement. Costs range from $25-$50 depending on your city.</li>
                  <li><strong>Extension fees:</strong> If you need to keep the dumpster longer than the included rental period, expect to pay $5-$15 per additional day.</li>
                  <li><strong>Environmental fees:</strong> Some disposal facilities charge environmental processing fees ($10-$25).</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How to Avoid Surprise Charges</h3>
                <p className="leading-relaxed mb-4">
                  The best way to avoid surprises is to ask questions upfront. When you call for a quote, make sure they tell you about weight limits, permit requirements, and any potential additional fees. A good company will be transparent about all costs from the start.
                </p>
                <p className="leading-relaxed">
                  If you're dealing with heavy materials or you're not sure about weight, it's worth asking if a larger dumpster might be more cost-effective. Sometimes paying a bit more upfront for a bigger dumpster saves you money on weight overage fees later.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-700 mb-4">
                  Our team can help you choose the right size and give you an accurate quote.
                </p>
                <a
                  href="tel:(801) 918-6000"
                  className="block w-full bg-[#0d9488] text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-teal-700 transition-colors mb-3"
                >
                  Call (801) 918-6000
                </a>
                <a
                  href="https://icondumpsters.com/#quote-form"
                  className="block w-full bg-gray-100 text-gray-900 px-4 py-3 rounded-lg font-semibold text-center hover:bg-gray-200 transition-colors"
                >
                  Get Free Quote
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/guides/ultimate-guide-dumpster-rental-utah" className="text-[#0d9488] hover:text-teal-700">Ultimate Guide to Dumpster Rental</Link></li>
                  <li><Link href="/guides/dumpster-sizes" className="text-[#0d9488] hover:text-teal-700">Dumpster Sizes Guide</Link></li>
                  <li><Link href="/guides/utah-permits" className="text-[#0d9488] hover:text-teal-700">Utah Permits Guide</Link></li>
                  <li><Link href="/dumpster-sizes" className="text-[#0d9488] hover:text-teal-700">View All Sizes</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

