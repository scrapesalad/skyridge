"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// Types

// Calendar utility functions
const isWeekend = (date: Date): boolean => {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday = 0, Saturday = 6
};

const isBusinessDay = (date: Date): boolean => {
  return !isWeekend(date);
};

const getNextBusinessDay = (date: Date): Date => {
  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);
  
  while (isWeekend(nextDay)) {
    nextDay.setDate(nextDay.getDate() + 1);
  }
  
  return nextDay;
};

const getAvailableDeliveryDates = (startDate: Date, count: number = 14): Date[] => {
  const availableDates: Date[] = [];
  const currentDate = new Date(startDate);
  
  for (let i = 0; i < count; i++) {
    if (isBusinessDay(currentDate)) {
      availableDates.push(new Date(currentDate));
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return availableDates;
};

const formatDateForDisplay = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

const formatDateForInput = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export default function DumpsterCalculator() {
  const [zipCode, setZipCode] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [isVeteran, setIsVeteran] = useState(false);
  const [rentalDate, setRentalDate] = useState('');
  const [result, setResult] = useState('');
  const [showBookingQuestion, setShowBookingQuestion] = useState(false);
  const [wantsBooking, setWantsBooking] = useState<boolean | null>(null);
  const [contact, setContact] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(-1);
  const dateInputRef = useRef<HTMLInputElement | null>(null);
  const calendarRef = useRef<HTMLDivElement | null>(null);

  // Initialize available dates when component mounts
  useEffect(() => {
    const today = new Date();
    const dates = getAvailableDeliveryDates(today, 21); // Show 3 weeks of available dates
    setAvailableDates(dates);
    
    // Set default to next business day
    if (dates.length > 0) {
      setRentalDate(formatDateForInput(dates[0]));
      setSelectedDateIndex(0);
    }
  }, [setAvailableDates, setRentalDate, setSelectedDateIndex]);

  // Handle click outside calendar to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setShowCalendar]);


  const handleDateSelect = (date: Date, index: number) => {
    setRentalDate(formatDateForInput(date));
    setSelectedDateIndex(index);
    setShowCalendar(false);
    
    // Update the input field
    if (dateInputRef.current) {
      dateInputRef.current.value = formatDateForInput(date);
    }
    
  };

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };


  const sendTextMessage = async (phone: string, size: string, date: string, duration: string) => {
    try {
      const message = `Hi! Thanks for your ${size} dumpster quote for ${date} (${duration} days). An Icon expert will text you within 30 minutes with your exact pricing and to schedule delivery. Reply STOP to opt out.`;
      
      const response = await fetch('/api/sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone.replace(/\D/g, ''),
          message,
          transcript: [
            {
              role: 'system',
              content: `Dumpster calculator quote: ${size} dumpster, ${date}, ${duration} days`
            }
          ]
        })
      });

      if (response.ok) {
        alert('Text message sent! We\'ll text you within 5 minutes with your exact quote and to schedule delivery.');
        setContactSubmitted(true);
      } else {
        alert('Text message failed to send. Please call us at (801) 918-6000.');
      }
    } catch (error) {
      console.error('Error sending text message:', error);
      alert('Text message failed to send. Please call us at (801) 918-6000.');
    }
  };

  const getDeliveryAvailability = (selectedDate: string): string => {
    if (!selectedDate) return '';
    
    const date = new Date(selectedDate);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      const hour = today.getHours();
      if (hour < 15) { // Before 3 PM
        return 'Same-day delivery available (8 AM-3 PM)';
      } else {
        return 'Same-day delivery unavailable (call for next-day)';
      }
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Next-day delivery available (8-11 AM or 12-3 PM)';
    } else {
      return 'Standard delivery available (8-11 AM or 12-3 PM)';
    }
  };

  const handleCalculate = () => {
    if (!zipCode || !selectedSize || !selectedDuration) {
      alert('Please fill in all required fields');
      return;
    }

    // Simple pricing calculation
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

    const veteranDiscount = isVeteran ? totalEstimate * 0.10 : 0;
    const finalPrice = totalEstimate - veteranDiscount;

    // Create result HTML using string concatenation
    let html = '<div class="bg-gradient-to-br from-purple-50 to-[#0d9488]/10 p-6 rounded-lg border-2 border-[#0d9488]/20 shadow-md">';
    html += '<h4 class="text-lg font-bold text-[#0d9488] mb-3">💰 Estimated Cost</h4>';
    html += '<div class="text-3xl font-bold text-[#0d9488] mb-2">$' + finalPrice.toLocaleString() + '</div>';
    html += '<p class="text-gray-600 mb-3">For ' + selectedSize + '-yard dumpster, ' + selectedDuration + ' day' + (selectedDuration === '1' ? '' : 's') + ' in ' + zipCode + (rentalDate ? (' on ' + rentalDate) : '') + '</p>';
    
    
    // Add delivery availability info
    if (rentalDate) {
      const availability = getDeliveryAvailability(rentalDate);
      html += '<div class="text-sm text-trust-blue mb-3 font-semibold">📅 ' + availability + '</div>';
    }
    
    html += '<div class="text-sm text-gray-600 space-y-1">';
    if (selectedDuration === '1') {
      html += '<div>1-day special rate: $' + (basePrice * 0.7).toLocaleString() + '</div>';
    } else {
      html += '<div class="font-semibold text-[#0d9488]">📦 ' + selectedDuration + ' Day Bundle Breakdown:</div>';
      html += '<div class="ml-4 space-y-1">';
      if (isThirtyDay) {
        // 30-day special pricing breakdown: show special rate only
        html += '<div>• 30-Day Special Rate: $' + totalEstimate.toLocaleString() + '</div>';
      } else {
        html += '<div>• Base Price: $' + basePrice.toLocaleString() + '</div>';
        if (days > 7) {
          const extraDays = days - 7;
          const dailyRate = Math.ceil(basePrice / 7);
          html += '<div>• Additional Days (' + extraDays + ' × $' + dailyRate + '): $' + (extraDays * dailyRate).toLocaleString() + '</div>';
        }
      }
      html += '<div class="font-semibold text-[#0d9488] border-t pt-1 mt-2">Total Cost: $' + totalEstimate.toLocaleString() + '</div>';
      html += '</div>';
    }
    
    // Note for specialized dumpsters pricing
    if (selectedSize === '10' || selectedSize === '12') {
      html += '<div class="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">';
      html += '<p class="text-sm text-trust-blue-dark">Specialized dumpsters (dirt, concrete, mixed heavy loads) are priced at our 30‑yard rate due to handling and weight.</p>';
      html += '</div>';
    }

    if (isVeteran) {
      html += '<div class="text-[#0d9488] font-semibold">Veteran discount (10%): -$' + veteranDiscount.toLocaleString() + '</div>';
    }
    
    html += '</div>';
    
    if (isVeteran) {
      html += '<div class="mt-3 p-3 bg-teal-50 rounded-lg border border-[#0d9488]/20">';
      html += '<p class="text-sm text-[#0d9488]">';
      html += '<strong>Thank you for your service!</strong> We\'re proud to offer a 10% discount to veterans.';
      html += '</p>';
      html += '</div>';
    }
    
    html += '<div class="mt-4 p-3 bg-teal-50 rounded-lg">';
    html += '<p class="text-sm text-[#0d9488]">';
    html += '<strong>Note:</strong> This is an estimate. Final price may vary based on location, weight, and specific requirements.';
    html += '</p>';
    html += '</div>';
    
    if (days >= 2 && days <= 7) {
      html += '<div class="mt-3 p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">';
      html += '<p class="text-sm text-teal-800"><strong>Bundle Applied:</strong> 3–7 day bundle pricing — pay the same as a 7‑day rental.</p>';
      html += '</div>';
    }

    html += '<div class="mt-3 p-3 bg-teal-50 rounded-lg border border-[#0d9488]/20">';
    html += '<p class="text-sm text-[#0d9488]">';
                    html += '<strong>⚖️ <a href="https://icondumpsters.com/tonnage-calculator" class="text-[#0d9488] hover:text-teal-700 underline font-semibold">Tonnage</a> billed separately after service is weighed at $55.00 per <a href="https://icondumpsters.com/tonnage-calculator" class="text-[#0d9488] hover:text-teal-700 underline font-semibold">ton</a>.</strong> This estimate does not include weight charges.';
    html += '</p>';
    html += '</div>';
    
    html += '<div class="mt-3 p-3 bg-teal-50 rounded-lg border border-[#0d9488]/20">';
    html += '<p class="text-sm text-[#0d9488]">';
    html += '<strong>⚠️ Additional Charges:</strong> $25 per item for refrigerators, freezers, drinking water coolers, air conditioning units (must drain freon), mattresses/box springs, or tires.';
    html += '</p>';
    html += '</div>';
    
    html += '<div class="mt-4">';
    if (false) { // Inventory check removed
    html += '<button id="exact-quote-btn" type="button" class="bg-[#0d9488] text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-block">';
    html += 'Get Exact Quote';
    html += '</button>';
    } else {
      html += '<button id="exact-quote-btn" type="button" class="bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold cursor-not-allowed" disabled>';
      html += 'Check Availability First';
      html += '</button>';
    }
    html += '</div>';
    
    html += '</div>';
    
    setResult(html);
    
    // Always show booking question first, regardless of availability
    setShowBookingQuestion(true);
    setWantsBooking(null);
    setContact('');
    setContactSubmitted(false);
    setContactError('');
  };

  // Attach click handler to dynamically rendered "Get Exact Quote" button
  useEffect(() => {
    const btn = document.getElementById('exact-quote-btn');
    if (!btn) return;
    const handler = () => { setShowCallPopup(true); };
    btn.addEventListener('click', handler);
    return () => btn.removeEventListener('click', handler);
  }, [result, setShowCallPopup]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full mb-3">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Advanced Dumpster Rental Cost Calculator</h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Get an instant price estimate for your dumpster rental. Our advanced calculator includes special rates, veteran discounts, and accurate gas pricing.
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            {/* Zip Code Input */}
        <div className="max-w-md mx-auto mb-6">
              <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-[#0d9488] rounded-full mr-2"></span>
                📍 Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter zip code"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition-all duration-300 shadow-sm"
                maxLength={5}
              />
              <p className="text-xs text-gray-500 mt-2">Multiple hubs serving Utah - calculator finds closest location</p>
            </div>

        {/* Enhanced Delivery Date Selection */}
        <div className="max-w-md mx-auto mb-6">
          <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
            <span className="w-2 h-2 bg-[#0d9488] rounded-full mr-2"></span>
            📅 Preferred Delivery Date
          </label>
          <div className="relative">
            <div
              className="w-full cursor-pointer"
              onClick={handleCalendarToggle}
          >
            <input
              ref={dateInputRef}
              type="text"
              id="preferredDate"
              value={rentalDate ? formatDateForDisplay(new Date(rentalDate)) : ''}
              readOnly
              placeholder="Select delivery date"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition-all duration-300 shadow-sm cursor-pointer bg-white"
            />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Enhanced Calendar Dropdown */}
            {showCalendar && (
              <div 
                ref={calendarRef}
                className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl max-h-80 overflow-y-auto"
              >
                <div className="p-4 border-b border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Available Delivery Dates</h4>
                  <p className="text-xs text-gray-600">We deliver Monday-Friday, excluding holidays</p>
                </div>
                <div className="p-2">
                  {availableDates.map((date, index) => {
                    const isToday = date.toDateString() === new Date().toDateString();
                    const isSelected = index === selectedDateIndex;
                    const availability = getDeliveryAvailability(formatDateForInput(date));
                    
                    return (
                      <div
                        key={index}
                        onClick={() => handleDateSelect(date, index)}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          isSelected 
                            ? 'bg-[#0d9488] text-white' 
                            : 'hover:bg-gray-50 border border-transparent hover:border-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className={`font-semibold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                              {formatDateForDisplay(date)}
                              {isToday && (
                                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                  isSelected ? 'bg-white text-[#0d9488]' : 'bg-[#0d9488] text-white'
                                }`}>
                                  Today
                                </span>
                              )}
                            </div>
                            <div className={`text-xs mt-1 ${
                              isSelected ? 'text-purple-100' : 'text-gray-600'
                            }`}>
                              {availability}
                            </div>
                          </div>
                          <svg className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    );
                  })}
                </div>
                                 <div className="p-3 border-t border-gray-100 bg-gray-50">
                   <p className="text-xs text-gray-600">
                     <strong>Delivery Windows:</strong><br/>
                     • Same-day: 8 AM-3 PM (if ordered before 3 PM)<br/>
                     • Next-day: 8-11 AM or 12-3 PM<br/>
                     • Standard: 8-11 AM or 12-3 PM
                   </p>
                 </div>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-2">Tap to select your preferred delivery date</p>
          
        </div>

        {/* Specialized Dumpsters Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-semibold text-gray-900">Specialized Dumpsters</h3>
                      </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 10 Yard Dirt */}
            <div
              className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border overflow-hidden cursor-pointer ${selectedSize === '10' ? 'border-[#0d9488]' : 'border-gray-200'}`}
              onClick={() => setSelectedSize('10')}
              role="button"
              aria-label="Select 10 Yard Dirt"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedSize('10'); }}
            >
              <div className="h-32 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">10 Yard Dirt</h4>
                <p className="text-sm text-gray-600 mb-3">Perfect for dirt & soil projects</p>
                <div className="flex items-center justify-between">
                  <button className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-action-orange transition-colors">
                    Clean Dirt Only
                  </button>
                  <button className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-action-orange transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* 10 Yard Mixed */}
            <div
              className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border overflow-hidden cursor-pointer ${selectedSize === '10' ? 'border-[#0d9488]' : 'border-gray-200'}`}
              onClick={() => setSelectedSize('10')}
              role="button"
              aria-label="Select 10 Yard Mixed"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedSize('10'); }}
            >
              <div className="h-32 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">10 Yard Mixed</h4>

                <div className="flex items-center justify-between">
                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors">
                    Mixed Load
                  </button>
                  <button className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                </div>
              </div>
              
            {/* 12 Yard Concrete */}
            <div
              className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border overflow-hidden cursor-pointer ${selectedSize === '12' ? 'border-[#0d9488]' : 'border-gray-200'}`}
              onClick={() => setSelectedSize('12')}
              role="button"
              aria-label="Select 12 Yard Concrete"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedSize('12'); }}
            >
              <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">12 Yard Concrete</h4>
                <p className="text-sm text-gray-600 mb-3">Perfect for concrete projects</p>
                <div className="flex items-center justify-between">
                  <button className="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
                    Heavy Duty
                  </button>
                  <button className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                          </div>
                        </div>
                      </div>
                    </div>
        
        {/* Dumpster Size Selection */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="w-2 h-2 bg-[#0d9488] rounded-full mr-3"></div>
            <h3 className="text-xl font-bold text-gray-900">📦 Choose Your Dumpster Size</h3>
          </div>
          
          {/* Standard Dumpsters */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">Standard Dumpsters</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { size: '15', color: 'blue', bgGradient: 'from-blue-100 to-blue-200', iconBg: 'bg-blue-500', description: 'Medium renovations' },
                { size: '20', color: 'green', bgGradient: 'from-green-100 to-green-200', iconBg: 'bg-gradient-to-br from-purple-50 to-purple-1000', description: 'Large home projects' },
                { size: '30', color: 'purple', bgGradient: 'from-purple-100 to-purple-200', iconBg: 'bg-teal-500', description: 'Major renovations' }
              ].map((option) => (
                <label
                  key={option.size}
                  className={`group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border overflow-hidden cursor-pointer ${
                    selectedSize === option.size ? `border-[#0d9488] bg-gradient-to-br ${option.bgGradient} shadow-xl` : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="dumpsterSize"
                    value={option.size}
                    checked={selectedSize === option.size}
                    onChange={(e) => {
                      setSelectedSize(e.target.value);
                    }}
                    className="sr-only"
                  />
                  <div className="p-3 text-center">
                    <div className={`w-10 h-10 ${option.iconBg} rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-base">{option.size}</span>
                    </div>
                    <div className="text-base font-bold text-gray-900 mb-1">{option.size} Yard</div>
                    <div className="text-[11px] text-gray-600 leading-relaxed">
                      {option.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
            </div>
          </div>
          
        {/* Duration Selection */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="w-2 h-2 bg-[#0d9488] rounded-full mr-3"></div>
            <h3 className="text-xl font-bold text-gray-900">⏱️ Select Rental Duration</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { duration: '1', color: 'orange', bgGradient: 'from-orange-100 to-orange-200', iconBg: 'bg-orange-500', description: 'Same day pickup' },
              { duration: '3', color: 'yellow', bgGradient: 'from-yellow-100 to-yellow-200', iconBg: 'bg-yellow-500', description: 'Bundle price (same as 7 days)' },
              { duration: '7', color: 'blue', bgGradient: 'from-blue-100 to-blue-200', iconBg: 'bg-blue-500', description: '7‑day bundle (best value)' },
              { duration: '14', color: 'green', bgGradient: 'from-green-100 to-green-200', iconBg: 'bg-gradient-to-br from-purple-50 to-purple-1000', description: 'Extended rental' },
              { duration: '30', color: 'purple', bgGradient: 'from-purple-100 to-purple-200', iconBg: 'bg-teal-500', description: 'Long term rental' }
            ].map((option) => (
              <label
                key={option.duration}
                className={`group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border overflow-hidden cursor-pointer ${
                  selectedDuration === option.duration ? `border-[#0d9488] bg-gradient-to-br ${option.bgGradient} shadow-xl` : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <input
                  type="radio"
                  name="duration"
                  value={option.duration}
                  checked={selectedDuration === option.duration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="sr-only"
                />
                <div className="p-3 text-center">
                  <div className={`w-10 h-10 ${option.iconBg} rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-base font-bold text-gray-900 mb-1">{option.duration} Day{option.duration === '1' ? '' : 's'}</div>
                  <div className="text-[11px] text-gray-600 leading-relaxed">
                    {option.description}
                  </div>
                </div>
              </label>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">3–7 day rentals use the same bundled price. Save by choosing 7 days.</p>
            </div>
            
        {/* Veteran Discount */}
        <div className="mb-6">
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
          
          {/* Calculate Button */}
        <div className="text-center mb-6">
            <button
              className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              onClick={handleCalculate}
            >
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Calculate Estimate
            </button>
          </div>
          
          {/* Results Section */}
        {result && (
          <div 
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: result }}
          />
        )}

        {/* Call Popup Modal */}
        {showCallPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowCallPopup(false)}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 w-11/12 max-w-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Us 24/7</h3>
              <p className="text-gray-700 mb-4">Speak with an Icon expert now. We're here to help 24/7.</p>
              <a href="tel:801-918-6000" className="block w-full text-center bg-[#0d9488] text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors mb-3">Call (801) 918-6000</a>
              <button onClick={() => setShowCallPopup(false)} className="w-full border border-gray-300 px-6 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50">Close</button>
            </div>
          </div>
        )}

        {/* Booking Prompt */}
        {showBookingQuestion && (
          <div className="mt-6 bg-white rounded-xl shadow border border-gray-200 p-6" id="book-now">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Would you like to book now?</h4>
            {(wantsBooking === null || wantsBooking === false) && !contactSubmitted && (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setWantsBooking(true)}
                  className="bg-[#0d9488] text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  Yes, book now
                </button>
                <button
                  onClick={() => {
                    setWantsBooking(false);
                    setShowBookingQuestion(false);
                  }}
                  className="bg-gray-100 text-gray-800 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Not now
                </button>
              </div>
            )}

            {wantsBooking === true && !contactSubmitted && (
              <form
                className="mt-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!contact.trim()) {
                    setContactError('Please enter your email or phone number.');
                    return;
                  }
                  setContactError('');
                  setContactSubmitted(true);
                  
                }}
              >
                <label htmlFor="contactInfo" className="block text-sm font-semibold text-gray-700 mb-2">Email or phone</label>
                <input
                  id="contactInfo"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="you@example.com or (801) 555-1234"
                  className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition-all duration-300 shadow-sm"
                />
                {contactError && <p className="text-sm text-red-600 mt-2">{contactError}</p>}
                <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
                  <button type="submit" className="bg-[#0d9488] text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors">Submit</button>
                  <div className="flex items-center gap-3 text-sm">
                  <a href="tel:(801) 918-6000" className="text-[#0d9488] hover:text-teal-700 font-semibold">Or call (801) 918-6000</a>
                    <span className="text-gray-400">|</span>
                    <button 
                      type="button"
                      onClick={() => {
                        if (contact && contact.includes('@')) {
                          // If it's an email, show message about texting
                          alert('Please enter your phone number to receive text messages. We\'ll text you within 5 minutes!');
                        } else if (contact && contact.replace(/\D/g, '').length >= 10) {
                          // If it's a phone number, send text
                          sendTextMessage(contact, selectedSize, rentalDate, selectedDuration);
                        } else {
                          alert('Please enter a valid phone number to receive text messages.');
                        }
                      }}
                      className="text-[#0d9488] hover:text-teal-700 font-semibold"
                    >
                      Or text us
                    </button>
                  </div>
                </div>
              </form>
            )}

            {wantsBooking === true && contactSubmitted && (
              <div className="mt-4 p-4 bg-teal-50 rounded-lg border border-[#0d9488]/20">
                <p className="text-sm text-[#0d9488]">
                  <strong>An Icon expert will get back to you, usually within 30 minutes.</strong> Or you can call us now at <a href="tel:(801) 918-6000" className="font-semibold">(801) 918-6000</a>.
                </p>
              </div>
            )}
          </div>
        )}
          
          {/* How It Works Section */}
        <div className="bg-gradient-to-br from-purple-50 to-[#0d9488]/10 rounded-xl border border-[#0d9488]/20 p-4 mt-6">
          <h4 className="font-bold text-[#0d9488] mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              💡 How the Advanced Calculator Works
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-sm text-[#0d9488] space-y-2">
                <li className="flex items-start">
                <span className="w-2 h-2 bg-[#0d9488] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Multiple Hubs:</strong> We have 3 locations serving Utah - calculator automatically finds the closest</span>
                </li>
                <li className="flex items-start">
                <span className="w-2 h-2 bg-[#0d9488] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>1-Day Special:</strong> Discounted rates for same-day pickup projects</span>
                </li>
                <li className="flex items-start">
                <span className="w-2 h-2 bg-[#0d9488] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>3-7 Day Bundles:</strong> Bundle pricing includes rental, pickup, and dropoff fees with daily rate breakdown</span>
                </li>
            </ul>
            <ul className="text-sm text-[#0d9488] space-y-2">
                <li className="flex items-start">
                <span className="w-2 h-2 bg-[#0d9488] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Extended Rentals:</strong> Additional days beyond 7 are charged at daily rates</span>
                </li>
                <li className="flex items-start">
                <span className="w-2 h-2 bg-[#0d9488] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Veteran Discount:</strong> 10% off for all veterans (thank you for your service!)</span>
                </li>
                <li className="flex items-start">
                <span className="w-2 h-2 bg-[#0d9488] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Weight-Based Pricing:</strong> $55 per <Link href="https://icondumpsters.com/tonnage-calculator" className="text-[#0d9488] hover:text-teal-700 underline font-semibold">ton</Link> charged after disposal facility weighing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* View All Sizes Button */}
        <div className="text-center mt-8">
          <button className="bg-[#0d9488] text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            View All Sizes & Pricing
          </button>
        </div>
      </div>
    </div>
  );
}
