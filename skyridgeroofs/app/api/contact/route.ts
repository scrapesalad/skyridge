import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { buildContactEmailContent } from '@/lib/contactEmailTemplates';
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
    const { firstName, lastName, email, telephone, address, city, zipCode, service, message, formType } = body;

    // Validate required fields
    if (!email || !telephone) {
      return NextResponse.json(
        { error: 'Email and phone number are required' },
        { status: 400 }
      );
    }

    const { businessHtml, customerHtml, summaryText, businessSubject, customerSubject } =
      buildContactEmailContent({
        firstName,
        lastName,
        email,
        telephone,
        address,
        city,
        zipCode,
        service,
        message,
        formType,
      });

    const toRecipients = parseEmailList(EMAIL_CONFIG.to);
    const ccRecipients = buildCcRecipients(EMAIL_CONFIG.cc);

    // Log CC recipients for debugging
    console.log('CC Recipients:', ccRecipients);

    // Email to business (skyridgeroofs@gmail.com and jeremyuwg@gmail.com)
    const businessEmail = {
      from: EMAIL_CONFIG.user,
      to: toRecipients.length > 0 ? toRecipients : EMAIL_CONFIG.to,
      cc: ccRecipients.length > 0 ? ccRecipients : undefined,
      subject: businessSubject,
      text: summaryText,
      html: businessHtml,
    };

    // Follow-up email to the customer
    const followUpEmail = {
      from: EMAIL_CONFIG.user,
      to: email,
      subject: customerSubject,
      text: `Thank you for contacting Sky Ridge Roofing!\n\nWe’ve received your request and will follow up within 24 hours.\n\nIf you have an urgent question, call us at 801-252-6936.`,
      html: customerHtml,
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

