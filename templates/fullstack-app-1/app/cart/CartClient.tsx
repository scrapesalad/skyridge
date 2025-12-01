'use client';

import { useState, useEffect } from 'react';
import QuoteForm from '../components/QuoteForm';
import PaymentForm from '../components/PaymentForm';

interface Pricing {
  [key: string]: number;
}

const PRICING: Pricing = {
  '15': 349,
  '20': 375,
  '30': 450,
  '10-dirt': 299,
  '10-mixed': 329,
  '12-concrete': 349,
  // Also support the formatted versions
  '15-yard': 349,
  '20-yard': 375,
  '30-yard': 450,
  '10-yard-dirt': 299,
  '10-yard-mixed': 329,
  '12-yard-concrete': 349,
};

// Map form values to display names
const SIZE_DISPLAY_NAMES: { [key: string]: string } = {
  '15': '15 Yard Dumpster',
  '20': '20 Yard Dumpster',
  '30': '30 Yard Dumpster',
  '10-dirt': '10 Yard Clean Dirt',
  '10-mixed': '10 Yard Mixed Load',
  '12-concrete': '12 Yard Concrete',
};

export default function CartClient() {
  const [step, setStep] = useState<'form' | 'payment'>('form');
  const [formData, setFormData] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [prefilledData, setPrefilledData] = useState<any>(null);

  // Calculate price based on dumpster size and rental duration
  const calculatePrice = (size: string, rentalDays: string): number => {
    const basePrices: { [key: string]: number } = {
      '15': 349,
      '20': 375,
      '30': 450,
      '10-dirt': 299,
      '10-mixed': 329,
      '12-concrete': 349,
    };

    const basePrice = basePrices[size] || basePrices['15'];
    const days = parseInt(rentalDays || '7');
    
    // Pricing logic based on duration
    if (days === 1) {
      // Special single-day pricing (30% discount)
      return Math.round(basePrice * 0.7);
    } else if (days <= 7) {
      // Standard 7-day pricing
      return basePrice;
    } else if (days === 30) {
      // 30-day pricing
      const thirtyDayPrices: { [key: string]: number } = {
        '15': 500,
        '20': 525,
        '30': 600,
      };
      return thirtyDayPrices[size] || 600;
    } else {
      // Extended rental: base price + daily rate for extra days
      const extraDays = days - 7;
      const dailyRate = Math.ceil(basePrice / 7);
      return basePrice + (extraDays * dailyRate);
    }
  };

  const handleFormSubmit = (data: any) => {
    console.log('handleFormSubmit called with data:', data);
    
    // Validate delivery date is at least 48 hours from now
    if (data.deliveryDate) {
      const selectedDate = new Date(data.deliveryDate);
      const now = new Date();
      const minDate = new Date(now.getTime() + 48 * 60 * 60 * 1000); // 48 hours from now
      
      if (selectedDate < minDate) {
        alert('Delivery date must be at least 48 hours from now. Please select a later date.');
        return;
      }
    }
    
    // Extract dumpster size and rental days from form data
    const size = data.dumpsterSize || '';
    const rentalDays = data.rentalDays || '7';
    const price = calculatePrice(size, rentalDays);
    
    console.log('Setting form data, size:', size, 'rentalDays:', rentalDays, 'price:', price);
    setFormData(data);
    setSelectedSize(SIZE_DISPLAY_NAMES[size] || size);
    setAmount(price);
    console.log('Transitioning to payment step');
    setStep('payment');
  };

  const handlePaymentSuccess = (paymentIntentId: string) => {
    console.log('Payment successful:', paymentIntentId);
    // Payment success is handled by redirect in PaymentForm
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error);
    alert(`Payment error: ${error}`);
  };

  // Check for form data from sessionStorage on mount (from QuoteFormSection or PricingCalculator)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedFormData = sessionStorage.getItem('quoteFormData');
      if (storedFormData) {
        try {
          const parsedData = JSON.parse(storedFormData);
          // Clear the stored data
          sessionStorage.removeItem('quoteFormData');
          
          // Check if we have all required fields for payment
          const hasRequiredFields = parsedData.firstName && 
                                   parsedData.lastName && 
                                   parsedData.email && 
                                   parsedData.phone && 
                                   parsedData.deliveryDate;
          
          if (hasRequiredFields) {
            // All required fields present - go straight to payment
            handleFormSubmit(parsedData);
          } else {
            // Partial data from PricingCalculator - pre-populate form
            setPrefilledData(parsedData);
            // If we have a calculated price, use it
            const storedPrice = sessionStorage.getItem('calculatedPrice');
            if (storedPrice) {
              sessionStorage.removeItem('calculatedPrice');
            }
          }
        } catch (error) {
          console.error('Error parsing stored form data:', error);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (step === 'payment' && formData) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="mb-6">
          <button
            onClick={() => setStep('form')}
            className="text-teal-600 hover:text-teal-700 font-semibold mb-4 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Order Details
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Payment</h2>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Order Summary</h3>
            <div className="space-y-1 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Dumpster Size:</span>
                <span className="font-semibold">{selectedSize || formData.dumpsterSize}</span>
              </div>
              <div className="flex justify-between">
                <span>Customer:</span>
                <span className="font-semibold">{formData.firstName} {formData.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span>Email:</span>
                <span className="font-semibold">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span>Phone:</span>
                <span className="font-semibold">{formData.phone}</span>
              </div>
              {formData.deliveryDate && (
                <div className="flex justify-between">
                  <span>Delivery Date:</span>
                  <span className="font-semibold">{formData.deliveryDate}</span>
                </div>
              )}
              {formData.rentalDays && (
                <div className="flex justify-between">
                  <span>Rental Duration:</span>
                  <span className="font-semibold">{formData.rentalDays} days</span>
                </div>
              )}
              <div className="border-t border-gray-300 pt-2 mt-2">
                <div className="flex justify-between text-lg font-bold text-teal-600">
                  <span>Total:</span>
                  <span>${amount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PaymentForm
          amount={amount}
          dumpsterSize={selectedSize}
          customerInfo={{
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            zipCode: formData.zipCode || '',
          }}
          deliveryDate={formData.deliveryDate}
          pickupDate={formData.pickupDate}
          rentalDays={formData.rentalDays}
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
        />
      </div>
    );
  }

  // Debug: Log current state
  console.log('CartClient render - step:', step, 'formData:', formData);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Dumpster Rental</h2>
      {prefilledData && (
        <div className="mb-4 p-4 bg-teal-50 border border-teal-200 rounded-lg">
          <p className="text-sm text-teal-800">
            <strong>Pre-filled from calculator:</strong> {prefilledData.dumpsterSize} Yard Dumpster, {prefilledData.rentalDays} days, {prefilledData.wasteType}
            {prefilledData.zipCode && ` • Zip: ${prefilledData.zipCode}`}
          </p>
        </div>
      )}
      <QuoteForm 
        onFormSubmit={handleFormSubmit}
        initialData={prefilledData}
      />
    </div>
  );
}

