import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import EmailService from '@/app/lib/EmailService';

const emailService = new EmailService();

export async function POST(request: NextRequest) {
  // Initialize Stripe lazily to avoid build-time errors
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: 'Stripe secret key not configured' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2024-11-20.acacia',
  });

  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: 'Missing signature or webhook secret' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Payment succeeded:', paymentIntent.id);
        
        // Extract order details from payment intent
        const amount = (paymentIntent.amount / 100).toFixed(2);
        const customerName = paymentIntent.metadata.customerName || 'N/A';
        const customerEmail = paymentIntent.metadata.customerEmail || '';
        const customerPhone = paymentIntent.metadata.customerPhone || '';
        const dumpsterSize = paymentIntent.metadata.dumpsterSize || 'N/A';
        const deliveryDate = paymentIntent.metadata.deliveryDate || 'Not specified';
        const pickupDate = paymentIntent.metadata.pickupDate || 'Not specified';
        const rentalDays = paymentIntent.metadata.rentalDays || 'Not specified';
        const zipCode = paymentIntent.metadata.zipCode || 'N/A';
        
        // Send order confirmation email to icondumpsters@gmail.com
        try {
          const orderSubject = `New Order - ${dumpsterSize} Dumpster - $${amount}`;
          
          const orderHtml = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <title>${orderSubject}</title>
              <style>
                body { font-family: Arial, sans-serif; color: #111827; }
                .container { max-width: 640px; margin: 0 auto; padding: 24px; }
                h1 { color: #0d9488; }
                .order-header { background: #0d9488; color: white; padding: 16px; border-radius: 8px; margin-bottom: 24px; }
                .order-header h2 { margin: 0; color: white; }
                .order-amount { font-size: 24px; font-weight: bold; margin-top: 8px; }
                table { width: 100%; border-collapse: collapse; margin-top: 16px; }
                th, td { text-align: left; padding: 12px; border-bottom: 1px solid #e5e7eb; }
                th { background: #f3f4f6; width: 40%; font-weight: 600; }
                .payment-info { background: #f0fdf4; border: 1px solid #86efac; padding: 16px; border-radius: 8px; margin-top: 16px; }
                .payment-info h3 { margin-top: 0; color: #166534; }
                .cta-button { display: inline-block; background: #0d9488; color: white !important; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; margin-top: 16px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="order-header">
                  <h2>🎉 New Order Received!</h2>
                  <div class="order-amount">$${amount}</div>
                </div>
                
                <h1>Order Details</h1>
                
                <table>
                  <tr><th>Payment Intent ID</th><td>${paymentIntent.id}</td></tr>
                  <tr><th>Customer Name</th><td>${customerName}</td></tr>
                  <tr><th>Customer Email</th><td><a href="mailto:${customerEmail}">${customerEmail}</a></td></tr>
                  <tr><th>Customer Phone</th><td><a href="tel:${customerPhone}">${customerPhone}</a></td></tr>
                  <tr><th>Dumpster Size</th><td><strong>${dumpsterSize}</strong></td></tr>
                  <tr><th>Delivery Date</th><td>${deliveryDate}</td></tr>
                  <tr><th>Pickup Date</th><td>${pickupDate}</td></tr>
                  <tr><th>Rental Duration</th><td>${rentalDays ? rentalDays + ' days' : 'Not specified'}</td></tr>
                  <tr><th>Zip Code</th><td>${zipCode}</td></tr>
                  <tr><th>Order Total</th><td><strong>$${amount}</strong></td></tr>
                  <tr><th>Payment Status</th><td><strong style="color: #059669;">Paid</strong></td></tr>
                  <tr><th>Order Date</th><td>${new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })}</td></tr>
                </table>
                
                <div class="payment-info">
                  <h3>Payment Information</h3>
                  <p><strong>Payment Intent ID:</strong> ${paymentIntent.id}</p>
                  <p><strong>Amount:</strong> $${amount}</p>
                  <p><strong>Currency:</strong> ${paymentIntent.currency.toUpperCase()}</p>
                  <p><strong>Payment Method:</strong> ${paymentIntent.payment_method_types.join(', ')}</p>
                </div>
                
                <a href="tel:${customerPhone}" class="cta-button">Call Customer</a>
                <a href="mailto:${customerEmail}" class="cta-button" style="margin-left: 12px;">Email Customer</a>
                
                <p style="margin-top: 24px; color: #6b7280; font-size: 14px;">
                  This order was placed through the online payment system. Please schedule delivery and pickup accordingly.
                </p>
              </div>
            </body>
            </html>
          `;
          
          // Send email to icondumpsters@gmail.com
          await emailService.sendEmail(
            'icondumpsters@gmail.com',
            orderSubject,
            `New Order Received: ${dumpsterSize} Dumpster - $${amount}\n\nCustomer: ${customerName}\nEmail: ${customerEmail}\nPhone: ${customerPhone}\nDelivery Date: ${deliveryDate}\nPickup Date: ${pickupDate}\nRental Duration: ${rentalDays ? rentalDays + ' days' : 'Not specified'}\nPayment Intent ID: ${paymentIntent.id}`,
            orderHtml
          );
          
          console.log('Order confirmation email sent to icondumpsters@gmail.com');
        } catch (emailError) {
          console.error('Error sending order confirmation email:', emailError);
        }
        
        // Also send to your lead API for tracking
        if (paymentIntent.metadata.customerEmail) {
          try {
            await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/lead`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                firstName: customerName.split(' ')[0] || '',
                lastName: customerName.split(' ').slice(1).join(' ') || '',
                email: customerEmail,
                phone: customerPhone,
                zipCode: zipCode,
                dumpsterSize: dumpsterSize,
                deliveryDate: deliveryDate,
                pickupDate: pickupDate,
                rentalDays: rentalDays,
                source: 'Stripe Payment - Order Confirmed',
                additionalInfo: `Payment Intent ID: ${paymentIntent.id} | Amount: $${amount}`,
              }),
            });
          } catch (error) {
            console.error('Error sending lead data:', error);
          }
        }
        break;

      case 'payment_intent.payment_failed':
        console.log('Payment failed:', event.data.object);
        // Handle failed payment - maybe send email to customer
        break;

      case 'payment_intent.canceled':
        console.log('Payment canceled:', event.data.object);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Error handling webhook:', error);
    return NextResponse.json(
      { error: 'Error processing webhook' },
      { status: 500 }
    );
  }
}

