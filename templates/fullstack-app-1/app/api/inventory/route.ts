import { NextRequest, NextResponse } from 'next/server';
import { inventoryService } from '../../lib/InventoryService';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    
    switch (action) {
      case 'items':
        const allItems = inventoryService.getAllItems();
        return NextResponse.json(allItems);
        
      case 'search':
        const query = searchParams.get('q');
        if (!query) {
          return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
        }
        const searchResults = inventoryService.searchItems(query);
        return NextResponse.json(searchResults);
        
      default:
        const defaultItems = inventoryService.getAllItems();
        return NextResponse.json(defaultItems);
    }
  } catch (error) {
    console.error('Inventory API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, ...data } = body;
    
    switch (action) {
      case 'add':
        const newItem = inventoryService.addItem(data);
        return NextResponse.json({ success: true, item: newItem });
        
      case 'update':
        const { id, ...updates } = data;
        if (!id) {
          return NextResponse.json({ error: 'Item ID is required' }, { status: 400 });
        }
        const updated = inventoryService.updateItem(id, updates);
        if (updated) {
          return NextResponse.json({ success: true, item: updated });
        }
        return NextResponse.json({ success: false, error: 'Item not found' }, { status: 404 });
        
      case 'delete':
        const { id: deleteId } = data;
        if (!deleteId) {
          return NextResponse.json({ error: 'Item ID is required' }, { status: 400 });
        }
        const deleted = inventoryService.deleteItem(deleteId);
        return NextResponse.json({ success: deleted });
        
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Inventory API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
