import { NextRequest, NextResponse } from 'next/server';
import { inventoryService } from '../../../lib/InventoryService';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const allItems = inventoryService.getAllItems();
    
    return NextResponse.json({
      success: true,
      totalItems: allItems.length,
      items: allItems,
      sampleItem: allItems[0] || null
    });
  } catch (error) {
    console.error('Inventory test error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to test inventory system' 
    }, { status: 500 });
  }
}
