import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  try {
    // Initialize Stripe lazily to avoid build-time errors
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: 'Stripe secret key not configured' },
        { status: 500 }
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-11-20.acacia',
    });

    const { amount, dumpsterSize, customerInfo, deliveryDate, pickupDate, rentalDays } = await request.json();

    // Validate required fields
    if (!amount || !dumpsterSize || !customerInfo) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate delivery date is at least 48 hours from now (server-side validation)
    if (deliveryDate) {
      const selectedDate = new Date(deliveryDate);
      const now = new Date();
      const minDate = new Date(now.getTime() + 48 * 60 * 60 * 1000); // 48 hours from now
      
      if (selectedDate < minDate) {
        return NextResponse.json(
          { error: 'Delivery date must be at least 48 hours from now. Please select a later date.' },
          { status: 400 }
        );
      }
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert dollars to cents
      currency: 'usd',
      metadata: {
        dumpsterSize,
        customerName: `${customerInfo.firstName} ${customerInfo.lastName}`,
        customerEmail: customerInfo.email,
        customerPhone: customerInfo.phone,
        deliveryDate: deliveryDate || '',
        pickupDate: pickupDate || '',
        rentalDays: rentalDays || '',
        zipCode: customerInfo.zipCode || '',
      },
      description: `${dumpsterSize} Dumpster Rental - ${customerInfo.firstName} ${customerInfo.lastName}`,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error: any) {
    console.error('Stripe payment intent error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}

