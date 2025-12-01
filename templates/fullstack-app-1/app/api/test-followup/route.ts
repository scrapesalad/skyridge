import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Test the follow-up system by calling the process endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/process-followups`, {
      method: 'GET',
    });
    
    const result = await response.json();
    
    return NextResponse.json({
      ok: true,
      message: 'Follow-up system test completed',
      testResult: result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error testing follow-up system:', error);
    return NextResponse.json({ 
      ok: false, 
      error: 'Failed to test follow-up system',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
