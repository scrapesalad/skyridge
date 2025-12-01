import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Call the schedule-followup endpoint to process due follow-ups
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/schedule-followup`, {
      method: 'GET',
      headers: {
        'Authorization': request.headers.get('authorization') || '',
      }
    });
    
    const result = await response.json();
    
    return NextResponse.json({
      ok: true,
      message: 'Follow-up emails processed',
      ...result
    });
  } catch (error) {
    console.error('Error processing follow-ups:', error);
    return NextResponse.json({ 
      ok: false, 
      error: 'Failed to process follow-ups' 
    }, { status: 500 });
  }
}
