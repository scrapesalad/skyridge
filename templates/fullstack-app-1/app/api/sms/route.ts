import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../lib/EmailService';
import { securityUtils } from '../../config/security';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const phone = securityUtils.sanitizeInput(String(body.phone || ''));
    const message = securityUtils.sanitizeInput(String(body.message || ''));
    const transcript = Array.isArray(body.transcript) ? body.transcript : [];

    if (!phone) {
      return NextResponse.json({ ok: false, error: 'Phone required' }, { status: 400 });
    }

    // Try to send SMS via Twilio if configured
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    
    if (twilioAccountSid && twilioAuthToken && twilioPhoneNumber) {
      try {
        // Send SMS via Twilio
        const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`;
        const twilioResponse = await fetch(twilioUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${Buffer.from(`${twilioAccountSid}:${twilioAuthToken}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            To: `+1${phone}`,
            From: twilioPhoneNumber,
            Body: message,
          }),
        });

        if (twilioResponse.ok) {
          console.log('SMS sent successfully via Twilio');
          return NextResponse.json({ ok: true, method: 'twilio' });
        } else {
          console.error('Twilio SMS failed:', await twilioResponse.text());
        }
      } catch (twilioError) {
        console.error('Twilio SMS error:', twilioError);
      }
    }

    // Fallback: Email the request so the team can text the user manually
    const subject = `SMS Request from Chat: ${phone}`;
    const html = `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;padding:16px;">
        <h2 style="color:#0d9488;">SMS Hand-off Requested</h2>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <h3 style="color:#0d9488;">Recent Chat Transcript</h3>
        <pre style="white-space:pre-wrap;background:#f7f7fb;border:1px solid #e5e7eb;padding:12px;border-radius:8px;">${transcript.map((m: any) => `${m.timestamp || ''} [${m.role}] ${m.content}`).join('\n')}</pre>
      </div>
    `;

    await emailService.sendEmail('icondumpsters@gmail.com', subject, '', html);

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Internal error' }, { status: 500 });
  }
}


