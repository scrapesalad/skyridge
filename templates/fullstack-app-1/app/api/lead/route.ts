import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../lib/EmailService';
import { securityUtils } from '../../config/security';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data: Record<string, any> = {};

    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await request.formData();
      form.forEach((value, key) => (data[key] = value));
    } else {
      const form = await request.formData();
      form.forEach((value, key) => (data[key] = value));
    }

    // Minimal validation
    if (!data.email && !data.phone) {
      return NextResponse.json({ error: 'Missing contact info' }, { status: 400 });
    }

    // Sanitize inputs
    const sanitize = (value: any) => securityUtils.sanitizeInput(String(value ?? ''));
    const firstName = sanitize(data.firstName);
    const lastName = sanitize(data.lastName);
    const email = sanitize(data.email);
    const phone = sanitize(data.phone);
    const zipCode = sanitize(data.zipCode);
    const wasteType = sanitize(data.wasteType);
    const dumpsterSize = sanitize(data.dumpsterSize);
    const deliveryDate = sanitize(data.deliveryDate);
    const pickupDate = sanitize(data.pickupDate);
    const rentalDays = sanitize(data.rentalDays || '');
    const additionalInfo = sanitize(data.additionalInfo);
    const source = sanitize(data.source || 'Website Quote Form');

    const isNewsletter = /newsletter/i.test(source) || /newsletter/i.test(String(data.subject || ''));
    const subject = sanitize(
      data.subject || (isNewsletter
        ? 'New Newsletter Subscription - Icon Dumpsters'
        : `New Quote Request - ${dumpsterSize ? `${dumpsterSize} Yard` : 'Icon Dumpsters'}`)
    );

    const submittedAt = new Date().toLocaleString();

    const signature = `
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:12px">
        <tr>
          <td style="vertical-align:top;padding-right:10px">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters - Utah dumpster rental" width="48" height="48" style="display:block;border:0;outline:none;text-decoration:none;border-radius:8px" />
          </td>
          <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.4;color:#111827">
            <div style="font-weight:600">Best regards,</div>
            Jeremy<br/>
            Manager | Icon Dumpsters<br/>
            📞 (801) 918-6000<br/>
            📧 icondumpsters@gmail.com<br/>
            🌐 <a href="https://icondumpsters.com" style="color:#0d9488;text-decoration:underline">icondumpsters.com</a><br/>
            <div style="margin-top:6px;color:#0d9488">♻ Affordable | Fast | Local</div>
          </td>
        </tr>
      </table>`;

    const html = isNewsletter
      ? `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${subject}</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; }
          h1 { color: #0d9488; }
          table { width: 100%; border-collapse: collapse; margin-top: 16px; }
          th, td { text-align: left; padding: 8px; border-bottom: 1px solid #e5e7eb; }
          th { background: #f3f4f6; width: 40%; }
          .small { color: #6b7280; font-size: 12px; margin-top: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Newsletter Subscription</h1>
          <p><strong>Source:</strong> ${source}</p>
          <table>
            <tr><th>Email</th><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><th>Submitted At</th><td>${submittedAt}</td></tr>
          </table>
          <p class="small">${signature}</p>
        </div>
      </body>
      </html>
      `
      : `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${subject}</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; }
          .container { max-width: 640px; margin: 0 auto; padding: 24px; }
          h1 { color: #0d9488; }
          table { width: 100%; border-collapse: collapse; margin-top: 16px; }
          th, td { text-align: left; padding: 8px; border-bottom: 1px solid #e5e7eb; }
          th { background: #f3f4f6; width: 40%; }
          .small { color: #6b7280; font-size: 12px; margin-top: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Quote Request</h1>
          <p><strong>Source:</strong> ${source}</p>
          <table>
            <tr><th>Name</th><td>${firstName} ${lastName}</td></tr>
            <tr><th>Email</th><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><th>Phone</th><td><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><th>Zip Code</th><td>${zipCode}</td></tr>
            <tr><th>Waste Type</th><td>${wasteType}</td></tr>
            <tr><th>Dumpster Size</th><td>${dumpsterSize}</td></tr>
            <tr><th>Delivery Date</th><td>${deliveryDate}</td></tr>
            <tr><th>Pickup Date</th><td>${pickupDate}</td></tr>
            <tr><th>Rental Duration</th><td>${rentalDays ? rentalDays + ' days' : '-'}</td></tr>
            <tr><th>Additional Info</th><td>${additionalInfo || '-'}</td></tr>
            <tr><th>Submitted At</th><td>${submittedAt}</td></tr>
          </table>
          <a href="tel:${phone}" style="display:inline-block;background:#0d9488;color:#ffffff !important;padding:10px 16px;border-radius:6px;text-decoration:none;font-weight:600">Call Customer</a>
          <p class="small">${signature}</p>
        </div>
      </body>
      </html>
      `;

    // Analytics removed

    // Send notification email
    const emailSent = await emailService.sendEmail(
      'icondumpsters@gmail.com',
      subject,
      '',
      html
    );

    // Auto-reply to customer if email is provided
    if (email) {
      const autoReplySubject = isNewsletter
        ? `Thanks for subscribing to Icon Dumpsters`
        : `We received your quote request - Icon Dumpsters`;
      const autoReplyHtml = isNewsletter
        ? `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${autoReplySubject}</title>
          <style>
            body { font-family: Arial, sans-serif; color: #111827; }
            .container { max-width: 640px; margin: 0 auto; padding: 24px; }
            h1 { color: #0d9488; }
            p { line-height: 1.6; }
          </style>
        </head>
        <body>
          <div class="container">
            <div style="text-align:center;margin-bottom:12px">
              <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" width="96" height="96" alt="Icon Dumpsters - Utah dumpster rental" style="display:inline-block;border:0;outline:none;text-decoration:none;border-radius:12px" />
            </div>
            <h1>Thanks for subscribing!</h1>
            <p>You're all set to receive dumpster rental tips, pricing updates, and local service news from Icon Dumpsters.</p>
            <p>If you need a dumpster now, call us at <a href="tel:+18019186000" style="color:#0d9488;text-decoration:underline">(801) 918-6000</a> and we'll get you scheduled fast.</p>
            <p style="margin-top:16px;">${signature}</p>
          </div>
        </body>
        </html>
      `
        : `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${autoReplySubject}</title>
          <style>
            body { font-family: Arial, sans-serif; color: #111827; }
            .container { max-width: 640px; margin: 0 auto; padding: 24px; }
            h1 { color: #0d9488; }
            p { line-height: 1.6; }
          </style>
        </head>
        <body>
          <div class="container">
            <div style="text-align:center;margin-bottom:12px">
              <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" width="96" height="96" alt="Icon Dumpsters - Utah dumpster rental" style="display:inline-block;border:0;outline:none;text-decoration:none;border-radius:12px" />
            </div>
            <h1>Thanks for reaching out to Icon Dumpsters</h1>
            <p>We have availability for your ${dumpsterSize ? `${dumpsterSize} yard` : ''} dumpster rental in ${zipCode || 'your area'}.</p>
            <p>Please call us at <a href="tel:+18019186000" style="color:#0d9488;text-decoration:underline">(801) 918-6000</a> to finalize your delivery details and secure your spot. Our team is standing by to help.</p>
            <p>Details we received:</p>
            <ul>
              <li><strong>Delivery:</strong> ${deliveryDate || '-'}</li>
              <li><strong>Pickup:</strong> ${pickupDate || '-'}</li>
              <li><strong>Rental Duration:</strong> ${rentalDays ? rentalDays + ' days' : '-'}</li>
              <li><strong>Waste Type:</strong> ${wasteType || '-'}</li>
              <li><strong>Zip Code:</strong> ${zipCode || '-'}</li>
            </ul>
            <a href="tel:+18019186000" style="display:inline-block;background:#0d9488;color:#ffffff !important;padding:12px 18px;border-radius:8px;text-decoration:none;font-weight:700">Call (801) 918-6000</a>
            <p style="margin-top:16px;">${signature}</p>
          </div>
        </body>
        </html>
      `;

      await emailService.sendEmail(
        email,
        autoReplySubject,
        '',
        autoReplyHtml
      );

      // Schedule quote response email for quote requests (not newsletters)
      if (!isNewsletter) {
        try {
          // Schedule the detailed quote response email 30 seconds later
          await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/schedule-quote`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName,
              lastName,
              email,
              phone,
              zipCode,
              wasteType,
              dumpsterSize,
              deliveryDate,
              pickupDate,
              additionalInfo,
              source,
              delaySeconds: 30
            })
          });
          console.log('Quote response email scheduled for 30 seconds');
        } catch (error) {
          console.error('Failed to schedule quote response email:', error);
        }

        // Schedule 24-hour follow-up email for quote requests (not newsletters)
        try {
          await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/schedule-followup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email,
              firstName,
              lastName,
              phone,
              zipCode,
              dumpsterSize,
              wasteType,
              deliveryDate,
              pickupDate,
              submittedAt: new Date().toISOString(),
              followUpType: 'quote_request_24h'
            })
          });
        } catch (error) {
          console.error('Failed to schedule follow-up email:', error);
        }
      }
    }

    return NextResponse.json({ ok: true, emailed: emailSent });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}


