import { NextRequest, NextResponse } from 'next/server';
import { automatedQuoteService } from '../../lib/AutomatedQuoteService';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const {
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
      delaySeconds = 30
    } = data;

    // Validate required fields
    if (!email || !firstName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Wait for the specified delay (for serverless environments, this is a simple delay)
    if (delaySeconds > 0) {
      await new Promise(resolve => setTimeout(resolve, delaySeconds * 1000));
    }

    // Send the quote response email
    const quoteData = {
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
      source
    };

    const success = await automatedQuoteService.sendQuoteResponse(quoteData);

    if (success) {
      console.log(`Quote response email sent successfully to ${email} after ${delaySeconds}s delay`);
      return NextResponse.json({ 
        success: true, 
        message: 'Quote response email sent successfully',
        recipient: email,
        dumpsterSize: dumpsterSize
      });
    } else {
      console.error(`Failed to send quote response email to ${email}`);
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to send quote response email' 
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Schedule quote API error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Internal server error' 
    }, { status: 500 });
  }
}
