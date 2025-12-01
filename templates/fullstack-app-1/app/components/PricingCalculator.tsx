'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface PricingCalculatorProps {
  className?: string;
}

export default function PricingCalculator({ className = '' }: PricingCalculatorProps) {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState('15');
  const [selectedDuration, setSelectedDuration] = useState('7');
  const [selectedWasteType, setSelectedWasteType] = useState('general');
  const [zipCode, setZipCode] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isVeteran, setIsVeteran] = useState(false);

  const dumpsterSizes = [
    { size: '10', name: '10 Yard', capacity: '3-4 pickup truck loads', price: 250 },
    { size: '12', name: '12 Yard', capacity: '4-5 pickup truck loads', price: 250 },
    { size: '15', name: '15 Yard', capacity: '4-5 pickup truck loads', price: 350 },
    { size: '20', name: '20 Yard', capacity: '6-7 pickup truck loads', price: 375 },
    { size: '30', name: '30 Yard', capacity: '9-10 pickup truck loads', price: 450 },
    { size: '40', name: '40 Yard', capacity: '12-15 pickup truck loads', price: 525 },
  ];

  const wasteTypes = [
    { value: 'general', label: 'General Waste', multiplier: 1.0 },
    { value: 'construction', label: 'Construction Debris', multiplier: 1.0 },
    { value: 'concrete', label: 'Concrete/Asphalt', multiplier: 1.0 },
    { value: 'hazardous', label: 'Hazardous Materials', multiplier: 1.0 },
  ];

  const durations = [
    { days: '1', label: '1 Day', multiplier: 0.7 },
    { days: '3', label: '3 Days', multiplier: 1.0 },
    { days: '7', label: '7 Days', multiplier: 1.0 },
    { days: '14', label: '14 Days', multiplier: 1.0 },
    { days: '30', label: '30 Days', multiplier: 1.0 },
  ];

  const calculatePrice = useCallback(() => {
    if (!selectedSize || !selectedDuration) {
      setCalculatedPrice(0);
      return;
    }

    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      // Use exact same pricing logic as DumpsterCalculator
      const basePrices = {
        '10': 250,
        '12': 350,
        '15': 350,
        '20': 375,
        '30': 450,
        '40': 525
      };

      const pricingKey = (selectedSize === '10' || selectedSize === '12') ? '30' : selectedSize;
      const basePrice = basePrices[pricingKey as keyof typeof basePrices] || 350;
      const days = parseInt(selectedDuration);
      const isThirtyDay = days === 30;
      let totalEstimate = basePrice;

      if (isThirtyDay) {
        const thirtyDayPrices = {
          '15': 500,
          '20': 525,
          '30': 600
        };
        totalEstimate = thirtyDayPrices[pricingKey as keyof typeof thirtyDayPrices] || 600;
      } else if (days === 1) {
        // Special single‑day pricing
        totalEstimate = basePrice * 0.7; // 30% discount for 1 day
      } else if (days <= 7) {
        // Bundle pricing: 3–7 days cost the same as the 7‑day bundle
        totalEstimate = basePrice;
      } else {
        const extraDays = days - 7;
        const dailyRate = Math.ceil(basePrice / 7);
        totalEstimate = basePrice + (extraDays * dailyRate);
      }

      // Apply veteran discount
      const veteranDiscount = isVeteran ? totalEstimate * 0.10 : 0;
      const finalPrice = totalEstimate - veteranDiscount;

      setCalculatedPrice(Math.round(finalPrice));
      setIsCalculating(false);
    }, 500);
  }, [isVeteran, selectedDuration, selectedSize]);

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  const selectedDumpster = dumpsterSizes.find(s => s.size === selectedSize);
  const selectedWaste = wasteTypes.find(w => w.value === selectedWasteType);
  const selectedDurationLabel = durations.find(d => d.days === selectedDuration)?.label;

  return (
    <div className={`bg-white rounded-2xl shadow-2xl p-6 md:p-8 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Get Your Instant Quote
        </h3>
        <p className="text-gray-600">
          No hidden fees • Same-day delivery available • Free pickup
        </p>
      </div>

      <div className="space-y-6">
        {/* Dumpster Size Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Choose Dumpster Size
          </label>
          <div className="grid grid-cols-2 gap-3">
            {dumpsterSizes.map((dumpster) => {
              // Calculate the actual price for this size
              const basePrices = {
                '10': 250,
                '12': 350,
                '15': 350,
                '20': 375,
                '30': 450,
                '40': 525
              };
              const pricingKey = (dumpster.size === '10' || dumpster.size === '12') ? '30' : dumpster.size;
              const basePrice = basePrices[pricingKey as keyof typeof basePrices] || 350;
              const displayPrice = selectedDuration === '1' ? Math.round(basePrice * 0.7) : basePrice;
              
              return (
                <button
                  key={dumpster.size}
                  onClick={() => setSelectedSize(dumpster.size)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedSize === dumpster.size
                      ? 'border-[#0d9488] bg-teal-50 text-[#0d9488]'
                      : 'border-gray-200 hover:border-purple-300 text-gray-700'
                  }`}
                >
                  <div className="text-lg font-bold">{dumpster.name}</div>
                  <div className="text-sm text-gray-500">{dumpster.capacity}</div>
                  <div className="text-sm font-semibold text-teal-600">
                    {selectedDuration === '1' ? '1-Day Special: ' : 'Starting at '}${displayPrice}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Duration Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Rental Duration
          </label>
          <div className="grid grid-cols-5 gap-2">
            {durations.map((duration) => (
              <button
                key={duration.days}
                onClick={() => setSelectedDuration(duration.days)}
                className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                  selectedDuration === duration.days
                    ? 'border-[#0d9488] bg-teal-50 text-[#0d9488]'
                    : 'border-gray-200 hover:border-purple-300 text-gray-700'
                }`}
              >
                {duration.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            3–7 day rentals use the same bundled price. Save by choosing 7 days.
          </p>
        </div>

        {/* Waste Type Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Type of Waste
          </label>
          <select
            value={selectedWasteType}
            onChange={(e) => setSelectedWasteType(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0d9488] focus:outline-none transition-colors"
          >
            {wasteTypes.map((waste) => (
              <option key={waste.value} value={waste.value}>
                {waste.label}
              </option>
            ))}
          </select>
        </div>

        {/* Zip Code Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Delivery Zip Code
          </label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
            placeholder="Enter your zip code"
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0d9488] focus:outline-none transition-colors"
          />
        </div>

        {/* Veteran Discount */}
        <div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="veteranDiscount"
              checked={isVeteran}
              onChange={(e) => setIsVeteran(e.target.checked)}
              className="w-5 h-5 text-[#0d9488] border-gray-300 rounded focus:ring-[#0d9488] focus:ring-2"
            />
            <label htmlFor="veteranDiscount" className="text-sm font-semibold text-gray-700 flex items-center ml-3">
              <svg className="w-4 h-4 text-[#0d9488] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Veteran Discount (10%)
            </label>
          </div>
          <p className="text-xs text-gray-600 mt-2 ml-8">
            We proudly support our veterans with special pricing on all dumpster rentals.
          </p>
        </div>

        {/* Price Display */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-6 text-center">
          <div className="text-white">
            <div className="text-sm font-medium mb-1">Estimated Total</div>
            {isCalculating ? (
              <div className="text-3xl font-bold flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mr-3"></div>
                Calculating...
              </div>
            ) : (
              <div className="text-4xl md:text-5xl font-bold">
                ${calculatedPrice.toLocaleString()}
              </div>
            )}
            <div className="text-purple-100 text-sm mt-2">
              {selectedDumpster?.name} • {selectedDurationLabel} • {selectedWaste?.label}
            </div>
            <div className="text-purple-100 text-xs mt-1">
              Includes delivery, pickup, and disposal
            </div>
            {isVeteran && (
              <div className="text-yellow-300 text-sm mt-2 font-semibold">
                ✓ Veteran Discount Applied (10% off)
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => {
              // Validate required fields
              if (!zipCode || zipCode.length !== 5) {
                alert('Please enter a valid 5-digit zip code');
                return;
              }

              // Map PricingCalculator data to QuoteForm format
              const formData = {
                dumpsterSize: selectedSize,
                rentalDays: selectedDuration,
                wasteType: selectedWaste?.label || 'General Waste',
                zipCode: zipCode,
                // Set default values for required fields (user will fill these on cart page)
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                deliveryDate: '', // Will be set on cart page with 48-hour validation
                pickupDate: '',
                additionalInfo: isVeteran ? 'Veteran Discount Applied (10%)' : '',
                smsConsent: 'false',
              };

              // Store form data in sessionStorage for cart page
              if (typeof window !== 'undefined') {
                sessionStorage.setItem('quoteFormData', JSON.stringify(formData));
                // Also store the calculated price for reference
                sessionStorage.setItem('calculatedPrice', calculatedPrice.toString());
              }

              // Redirect to cart page for payment
              router.push('/cart');
            }}
            className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get This Quote Now
          </button>
          
          <div className="flex gap-3">
            <a
              href="tel:801-918-6000"
              className="flex-1 bg-white border-2 border-[#0d9488] text-[#0d9488] py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 hover:bg-teal-50"
            >
              Call (801) 918-6000
            </a>
            <a
              href="tel:+18019186000"
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300"
            >
              Text Us
            </a>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No Hidden Fees
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Same-Day Delivery
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free Pickup
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-3 text-xs text-gray-600">
          <div className="p-3 bg-teal-50 rounded-lg border border-purple-200">
            <p className="text-teal-800">
              <strong>⚖️ Tonnage</strong> billed separately after service is weighed at $55.00 per ton. This estimate does not include weight charges.
            </p>
          </div>
          
          <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-orange-800">
              <strong>⚠️ Additional Charges:</strong> $25 per item for refrigerators, freezers, drinking water coolers, air conditioning units (must drain freon), mattresses/box springs, or tires.
            </p>
          </div>

          {selectedDuration === '3' || selectedDuration === '7' ? (
            <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <p className="text-teal-800">
                <strong>Bundle Applied:</strong> 3–7 day bundle pricing — pay the same as a 7‑day rental.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
