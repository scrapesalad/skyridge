import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../lib/EmailService';

export const dynamic = 'force-dynamic';

// Store follow-up requests in memory (in production, use a database)
const followUpQueue: Array<{
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  zipCode: string;
  dumpsterSize: string;
  wasteType: string;
  deliveryDate: string;
  pickupDate: string;
  submittedAt: string;
  followUpType: string;
  scheduledFor: number;
  sent: boolean;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Schedule follow-up for 24 hours from now
    const scheduledFor = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
    
    const followUpRequest = {
      id: `followup_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...data,
      scheduledFor,
      sent: false
    };
    
    followUpQueue.push(followUpRequest);
    
    console.log('Follow-up email scheduled for:', new Date(scheduledFor).toLocaleString());
    
    return NextResponse.json({ ok: true, scheduledFor: new Date(scheduledFor).toISOString() });
  } catch (error) {
    console.error('Error scheduling follow-up:', error);
    return NextResponse.json({ ok: false, error: 'Failed to schedule follow-up' }, { status: 500 });
  }
}

// Check for due follow-ups (this would be called by a cron job or scheduled function)
export async function GET() {
  try {
    const now = Date.now();
    const dueFollowUps = followUpQueue.filter(f => !f.sent && f.scheduledFor <= now);
    
    for (const followUp of dueFollowUps) {
      await sendFollowUpEmail(followUp);
      followUp.sent = true;
    }
    
    return NextResponse.json({ 
      ok: true, 
      processed: dueFollowUps.length,
      remaining: followUpQueue.filter(f => !f.sent).length
    });
  } catch (error) {
    console.error('Error processing follow-ups:', error);
    return NextResponse.json({ ok: false, error: 'Failed to process follow-ups' }, { status: 500 });
  }
}

async function sendFollowUpEmail(followUp: any) {
  const signature = `
    <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
      <p><strong>Icon Dumpsters</strong><br>
      Professional Dumpster Rental Services<br>
      📞 (801) 918-6000<br>
      📧 icondumpsters@gmail.com<br>
      🌐 <a href="https://icondumpsters.com" style="color: #0d9488;">icondumpsters.com</a></p>
    </div>
  `;

  const followUpHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Follow-up on your dumpster rental quote</title>
      <style>
        body { font-family: Arial, sans-serif; color: #111827; }
        .container { max-width: 640px; margin: 0 auto; padding: 24px; }
        h1 { color: #0d9488; }
        p { line-height: 1.6; }
        .highlight { background: #fef3c7; padding: 16px; border-radius: 8px; margin: 16px 0; }
        .cta-button { display: inline-block; background: #0d9488; color: #ffffff !important; padding: 12px 18px; border-radius: 8px; text-decoration: none; font-weight: 700; margin: 16px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div style="text-align:center;margin-bottom:12px">
          <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" width="96" height="96" alt="Icon Dumpsters - Utah dumpster rental" style="display:inline-block;border:0;outline:none;text-decoration:none;border-radius:12px" />
        </div>
        
        <h1>Hi ${followUp.firstName},</h1>
        
        <p>I wanted to follow up on your dumpster rental quote request from yesterday. I hope you had a chance to review our availability and pricing for your ${followUp.dumpsterSize ? `${followUp.dumpsterSize} yard` : ''} dumpster rental in ${followUp.zipCode || 'your area'}.</p>
        
        <div class="highlight">
          <p><strong>Quick reminder of your request:</strong></p>
          <ul>
            <li><strong>Dumpster Size:</strong> ${followUp.dumpsterSize || 'Not specified'}</li>
            <li><strong>Waste Type:</strong> ${followUp.wasteType || 'Not specified'}</li>
            <li><strong>Delivery Date:</strong> ${followUp.deliveryDate || 'Not specified'}</li>
            <li><strong>Pickup Date:</strong> ${followUp.pickupDate || 'Not specified'}</li>
            <li><strong>Location:</strong> ${followUp.zipCode || 'Not specified'}</li>
          </ul>
        </div>
        
        <p>Our team is ready to help you with your waste disposal needs. We have excellent availability and competitive pricing for your project.</p>
        
        <p><strong>Next steps:</strong></p>
        <ol>
          <li>Call us at <a href="tel:+18019186000" style="color:#0d9488;text-decoration:underline">(801) 918-6000</a> to confirm your rental</li>
          <li>We'll schedule your delivery and pickup times</li>
          <li>You'll receive confirmation details via text/email</li>
        </ol>
        
        <div style="text-align: center;">
          <a href="tel:+18019186000" class="cta-button">Call (801) 918-6000 Now</a>
        </div>
        
        <p>If you have any questions about pricing, availability, or the rental process, don't hesitate to reach out. We're here to make your waste disposal as easy as possible.</p>
        
        <p>Thanks for considering Icon Dumpsters for your project!</p>
        
        <p>Best regards,<br>
        The Icon Dumpsters Team</p>
        
        ${signature}
      </div>
    </body>
    </html>
  `;

  try {
    await emailService.sendEmail(
      followUp.email,
      'Follow-up on your dumpster rental quote - Icon Dumpsters',
      '',
      followUpHtml
    );
    
    console.log(`Follow-up email sent to ${followUp.email} for quote request ${followUp.id}`);
  } catch (error) {
    console.error(`Failed to send follow-up email to ${followUp.email}:`, error);
  }
}
