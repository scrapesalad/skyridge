import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration from environment variables
const EMAIL_CONFIG = {
  user: process.env.SMTP_USER || '',
  appPassword: process.env.SMTP_APP_PASSWORD || '',
  to: process.env.EMAIL_TO || '',
  cc: process.env.EMAIL_CC || '',
};

// Validate environment variables
if (!EMAIL_CONFIG.user || !EMAIL_CONFIG.appPassword || !EMAIL_CONFIG.to) {
  console.error('Missing required email configuration in environment variables');
}

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_CONFIG.user,
    pass: EMAIL_CONFIG.appPassword,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, telephone, address, city, zipCode, service, message, formType } = body;

    // Validate required fields
    if (!email || !telephone) {
      return NextResponse.json(
        { error: 'Email and phone number are required' },
        { status: 400 }
      );
    }

    // Format the form data
    const formDataText = `
New ${formType || 'Contact'} Form Submission

Contact Information:
- Name: ${firstName || ''} ${lastName || ''}
- Email: ${email}
- Phone: ${telephone}
${address ? `- Address: ${address}` : ''}
${city ? `- City: ${city}` : ''}
${zipCode ? `- ZIP Code: ${zipCode}` : ''}
${service ? `- Service Needed: ${service}` : ''}
${message ? `\nMessage:\n${message}` : ''}
    `.trim();

    // Email to business (skyridgeroofs@gmail.com and jeremyuwg@gmail.com)
    const businessEmail = {
      from: EMAIL_CONFIG.user,
      to: EMAIL_CONFIG.to,
      cc: EMAIL_CONFIG.cc,
      subject: `New ${formType || 'Contact'} Form Submission from ${firstName || email}`,
      text: formDataText,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New ${formType || 'Contact'} Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName || ''} ${lastName || ''}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${telephone}">${telephone}</a></p>
            ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
            ${city ? `<p><strong>City:</strong> ${city}</p>` : ''}
            ${zipCode ? `<p><strong>ZIP Code:</strong> ${zipCode}</p>` : ''}
            ${service ? `<p><strong>Service Needed:</strong> ${service}</p>` : ''}
            ${message ? `<div style="margin-top: 20px;"><strong>Message:</strong><p style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message.replace(/\n/g, '<br>')}</p></div>` : ''}
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
            This email was sent from the Sky Ridge Roofing contact form.
          </p>
        </div>
      `,
    };

    // Follow-up email to the customer
    const followUpEmail = {
      from: EMAIL_CONFIG.user,
      to: email,
      subject: 'Thank You for Contacting Sky Ridge Roofing',
      text: `
Thank you for contacting Sky Ridge Roofing!

We've received your request and one of our team members will get back to you within 24 hours.

Here's a summary of your submission:
${formDataText}

If you have any urgent questions, please call us at 801-252-6936.

Best regards,
Sky Ridge Roofing Team
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Thank You for Contacting Sky Ridge Roofing!</h2>
          <p>We've received your request and one of our team members will get back to you within 24 hours.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Submission Summary</h3>
            <p><strong>Name:</strong> ${firstName || ''} ${lastName || ''}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${telephone}</p>
            ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
            ${city ? `<p><strong>City:</strong> ${city}</p>` : ''}
            ${zipCode ? `<p><strong>ZIP Code:</strong> ${zipCode}</p>` : ''}
            ${service ? `<p><strong>Service Needed:</strong> ${service}</p>` : ''}
            ${message ? `<div style="margin-top: 20px;"><strong>Message:</strong><p style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message.replace(/\n/g, '<br>')}</p></div>` : ''}
          </div>

          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Need immediate assistance?</strong></p>
            <p style="margin: 5px 0 0 0;">Call us at <a href="tel:8012526936" style="color: #1e40af; font-weight: bold;">801-252-6936</a></p>
          </div>

          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
            Sky Ridge Roofing<br>
            Serving all of Utah
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessEmail),
      transporter.sendMail(followUpEmail),
    ]);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

