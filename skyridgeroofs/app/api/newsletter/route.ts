import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { buildCcRecipients, parseEmailList } from '@/lib/emailRecipients';

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
    const { firstName, lastName, email } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const toRecipients = parseEmailList(EMAIL_CONFIG.to);
    const ccRecipients = buildCcRecipients(EMAIL_CONFIG.cc);

    // Log CC recipients for debugging
    console.log('CC Recipients:', ccRecipients);

    // Email to business
    const businessEmail = {
      from: EMAIL_CONFIG.user,
      to: toRecipients.length > 0 ? toRecipients : EMAIL_CONFIG.to,
      cc: ccRecipients.length > 0 ? ccRecipients : undefined,
      subject: 'New Newsletter Subscription',
      text: `
New Newsletter Subscription

Name: ${firstName || ''} ${lastName || ''}
Email: ${email}

Subscribed at: ${new Date().toLocaleString()}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            New Newsletter Subscription
          </h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${firstName || ''} ${lastName || ''}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Welcome email to the subscriber
    const welcomeEmail = {
      from: EMAIL_CONFIG.user,
      to: email,
      subject: 'Welcome to Sky Ridge Roofing Newsletter!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Sky Ridge Roofing Newsletter</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1e40af; font-size: 28px; margin: 0;">Welcome to Sky Ridge Roofing!</h1>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 20px 0;">
              Hi ${firstName || 'there'},
            </p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 20px 0;">
              Thank you for subscribing to the Sky Ridge Roofing newsletter! You'll now receive:
            </p>
            
            <ul style="color: #374151; font-size: 16px; line-height: 1.8; margin: 20px 0; padding-left: 30px;">
              <li>Latest roofing tips and maintenance advice</li>
              <li>Seasonal roofing care reminders</li>
              <li>Exclusive offers and promotions</li>
              <li>Updates on new services and materials</li>
              <li>Utah roofing industry news</li>
            </ul>
            
            <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
              <p style="margin: 0 0 15px 0; color: #1e40af; font-weight: bold; font-size: 18px;">
                Need roofing services right now?
              </p>
              <p style="margin: 0; color: #374151; font-size: 16px;">
                Call us at <a href="tel:8012526936" style="color: #1e40af; font-weight: bold; text-decoration: none;">801-252-6936</a>
              </p>
              <p style="margin: 10px 0 0 0; color: #374151; font-size: 16px;">
                or email us at <a href="mailto:Info@skyridgeco.com" style="color: #1e40af; text-decoration: none;">Info@skyridgeco.com</a>
              </p>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 30px 0 0 0;">
              Best regards,<br>
              <strong>The Sky Ridge Roofing Team</strong>
            </p>
            
            <div style="border-top: 1px solid #e5e7eb; margin-top: 30px; padding-top: 20px; text-align: center;">
              <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
                Sky Ridge Roofing<br>
                Serving all of Utah
              </p>
              <p style="color: #9ca3af; font-size: 11px; margin: 20px 0 0 0;">
                You're receiving this email because you subscribed to our newsletter.<br>
                If you wish to unsubscribe, please contact us at Info@skyridgeco.com
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessEmail),
      transporter.sendMail(welcomeEmail),
    ]);

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending newsletter subscription email:', error);
    return NextResponse.json(
      { error: 'Failed to process newsletter subscription. Please try again later.' },
      { status: 500 }
    );
  }
}

