import { NextRequest, NextResponse } from 'next/server';
import EmailService from '@/app/lib/EmailService';

const emailService = new EmailService();

export async function POST(request: NextRequest) {
  try {
    const {
      paymentIntentId,
      amount,
      customerName,
      customerEmail,
      customerPhone,
      dumpsterSize,
      deliveryDate,
      pickupDate,
      rentalDays,
      zipCode,
    } = await request.json();

    // Validate required fields
    if (!paymentIntentId || !amount || !customerName || !dumpsterSize) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

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
            <tr><th>Payment Intent ID</th><td>${paymentIntentId}</td></tr>
            <tr><th>Customer Name</th><td>${customerName}</td></tr>
            <tr><th>Customer Email</th><td><a href="mailto:${customerEmail || 'N/A'}">${customerEmail || 'N/A'}</a></td></tr>
            <tr><th>Customer Phone</th><td><a href="tel:${customerPhone || 'N/A'}">${customerPhone || 'N/A'}</a></td></tr>
            <tr><th>Dumpster Size</th><td><strong>${dumpsterSize}</strong></td></tr>
            <tr><th>Delivery Date</th><td>${deliveryDate || 'Not specified'}</td></tr>
            <tr><th>Pickup Date</th><td>${pickupDate || 'Not specified'}</td></tr>
            <tr><th>Rental Duration</th><td>${rentalDays ? rentalDays + ' days' : 'Not specified'}</td></tr>
            <tr><th>Zip Code</th><td>${zipCode || 'N/A'}</td></tr>
            <tr><th>Order Total</th><td><strong>$${amount}</strong></td></tr>
            <tr><th>Payment Status</th><td><strong style="color: #059669;">Paid</strong></td></tr>
            <tr><th>Order Date</th><td>${new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })}</td></tr>
          </table>
          
          <div class="payment-info">
            <h3>Payment Information</h3>
            <p><strong>Payment Intent ID:</strong> ${paymentIntentId}</p>
            <p><strong>Amount:</strong> $${amount}</p>
            <p><strong>Currency:</strong> USD</p>
          </div>
          
          ${customerPhone ? `<a href="tel:${customerPhone}" class="cta-button">Call Customer</a>` : ''}
          ${customerEmail ? `<a href="mailto:${customerEmail}" class="cta-button" style="margin-left: 12px;">Email Customer</a>` : ''}
          
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
      `New Order Received: ${dumpsterSize} Dumpster - $${amount}\n\nCustomer: ${customerName}\nEmail: ${customerEmail || 'N/A'}\nPhone: ${customerPhone || 'N/A'}\nDelivery Date: ${deliveryDate || 'Not specified'}\nPickup Date: ${pickupDate || 'Not specified'}\nRental Duration: ${rentalDays ? rentalDays + ' days' : 'Not specified'}\nPayment Intent ID: ${paymentIntentId}`,
      orderHtml
    );
    
    console.log('Order confirmation email sent to icondumpsters@gmail.com');
    
    return NextResponse.json({ success: true, message: 'Order confirmation email sent' });
  } catch (error: any) {
    console.error('Error sending order confirmation email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send order confirmation email' },
      { status: 500 }
    );
  }
}

