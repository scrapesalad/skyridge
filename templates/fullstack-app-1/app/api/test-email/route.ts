import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../lib/EmailService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.to || !body.subject || !body.content) {
      return NextResponse.json(
        { error: 'to, subject, and content are required' },
        { status: 400 }
      );
    }
    
    // For security, only allow sending to approved test email addresses
    const allowedTestEmails = ['jeremyuwg@gmail.com', 'icondumpsters@gmail.com', 'admin@icondumpsters.com'];
    if (!allowedTestEmails.includes(body.to)) {
      return NextResponse.json(
        { error: 'Test emails can only be sent to approved test addresses for security' },
        { status: 403 }
      );
    }
    
    // Personalization function
    function personalizeEmail(template: string, client: any) {
      const now = new Date();
      const month = now.toLocaleString('default', { month: 'long' });
      const year = now.getFullYear();
      
      return template
        .replace(/{firstName}/g, client.firstName || 'Valued Customer')
        .replace(/{lastName}/g, client.lastName || '')
        .replace(/{companyName}/g, client.companyName || '')
        .replace(/{city}/g, client.city || 'your area')
        .replace(/{county}/g, client.county || 'your county')
        .replace(/{month}/g, month)
        .replace(/{year}/g, year.toString());
    }

    // Create a mock client object for personalization
    const mockClient = {
      firstName: body.to.split('@')[0], // Use email prefix as first name
      lastName: '',
      city: 'Utah',
      county: 'Salt Lake County'
    };

    // Personalize subject and content
    const personalizedSubject = personalizeEmail(body.subject, mockClient);
    const personalizedContent = personalizeEmail(body.content, mockClient);

    // Send the test email
    await emailService.sendEmail(
      body.to,
      personalizedSubject,
      personalizedContent, // text version
      `<html><body><p>${personalizedContent}</p><p><em>This is a test email from the Icon Dumpsters system.</em></p></body></html>` // HTML version
    );
    
    return NextResponse.json({
      success: true,
      message: `Test email sent successfully to ${body.to}`,
      details: {
        to: body.to,
        subject: body.subject,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send test email', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}