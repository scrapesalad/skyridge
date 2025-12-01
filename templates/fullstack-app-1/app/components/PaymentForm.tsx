'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

interface PaymentFormProps {
  amount: number;
  dumpsterSize: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipCode: string;
  };
  deliveryDate?: string;
  pickupDate?: string;
  rentalDays?: string;
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
}

function CheckoutForm({
  amount,
  dumpsterSize,
  customerInfo,
  deliveryDate,
  pickupDate,
  rentalDays,
  onSuccess,
  onError,
}: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Check if we're using test or live keys
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';
  const isTestMode = publishableKey.startsWith('pk_test_');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order-confirmation`,
          payment_method_data: {
            billing_details: {
              name: `${customerInfo.firstName} ${customerInfo.lastName}`,
              email: customerInfo.email,
              phone: customerInfo.phone,
            },
          },
        },
        redirect: 'if_required',
      });

      if (error) {
        setErrorMessage(error.message || 'Payment failed');
        onError(error.message || 'Payment failed');
        setIsProcessing(false);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent.id);
        
        // Send order confirmation email immediately (works locally and in production)
        try {
          await fetch('/api/send-order-confirmation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              paymentIntentId: paymentIntent.id,
              amount: amount.toFixed(2),
              customerName: `${customerInfo.firstName} ${customerInfo.lastName}`,
              customerEmail: customerInfo.email,
              customerPhone: customerInfo.phone,
              dumpsterSize: dumpsterSize,
              deliveryDate: deliveryDate || '',
              pickupDate: pickupDate || '',
              rentalDays: rentalDays || '',
              zipCode: customerInfo.zipCode || '',
            }),
          });
          console.log('Order confirmation email sent');
        } catch (emailError) {
          console.error('Error sending order confirmation email:', emailError);
          // Don't block the redirect if email fails
        }
        
        // Redirect to confirmation page
        window.location.href = `/order-confirmation?payment_intent=${paymentIntent.id}`;
      } else {
        setIsProcessing(false);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred');
      onError(err.message || 'An error occurred');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isTestMode && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-4">
          <p className="text-sm font-semibold">⚠️ TEST MODE</p>
          <p className="text-xs mt-1">Using test keys. Test cards will work (e.g., 4242 4242 4242 4242)</p>
        </div>
      )}
      {!isTestMode && process.env.NODE_ENV === 'production' && (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg mb-4">
          <p className="text-sm font-semibold">🔒 LIVE MODE</p>
          <p className="text-xs mt-1">Using live keys. Real credit cards required. Test cards will not work.</p>
        </div>
      )}
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 font-semibold">Order Total</span>
          <span className="text-2xl font-bold text-teal-600">${amount.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-600">{dumpsterSize} Dumpster Rental</p>
      </div>

      <PaymentElement />

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
      >
        {isProcessing ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Your payment is secure and encrypted. We never store your card details.
      </p>
    </form>
  );
}

export default function PaymentForm(props: PaymentFormProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Validate delivery date before creating payment intent
    if (props.deliveryDate) {
      const selectedDate = new Date(props.deliveryDate);
      const now = new Date();
      const minDate = new Date(now.getTime() + 48 * 60 * 60 * 1000); // 48 hours from now
      
      if (selectedDate < minDate) {
        const errorMsg = 'Delivery date must be at least 48 hours from now. Please go back and select a later date.';
        setError(errorMsg);
        props.onError(errorMsg);
        setIsLoading(false);
        return;
      }
    }

    // Create payment intent when component mounts
    const createPaymentIntent = async () => {
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: props.amount,
            dumpsterSize: props.dumpsterSize,
            customerInfo: props.customerInfo,
            deliveryDate: props.deliveryDate,
            pickupDate: props.pickupDate,
            rentalDays: props.rentalDays,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to create payment intent');
        }

        setClientSecret(data.clientSecret);
      } catch (err: any) {
        setError(err.message || 'Failed to initialize payment');
        props.onError(err.message || 'Failed to initialize payment');
      } finally {
        setIsLoading(false);
      }
    };

    createPaymentIntent();
  }, [props.deliveryDate, props.amount, props.dumpsterSize, props.customerInfo, props.pickupDate, props.rentalDays, props.onError]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
        <span className="ml-3 text-gray-700">Loading payment form...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
        {error}
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg">
        Unable to initialize payment. Please try again.
      </div>
    );
  }

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
      variables: {
        colorPrimary: '#0d9488',
        colorBackground: '#ffffff',
        colorText: '#1f2937',
        colorDanger: '#ef4444',
        fontFamily: 'system-ui, sans-serif',
        spacingUnit: '4px',
        borderRadius: '8px',
      },
    },
  };

  // Use key prop to force remount when clientSecret changes
  // This prevents "Unsupported prop change" error from Stripe
  return (
    <Elements key={clientSecret} stripe={stripePromise} options={options}>
      <CheckoutForm {...props} />
    </Elements>
  );
}

