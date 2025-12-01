interface InventoryItem {
  id: string;
  name: string;
  size: string;
  quantity: number;
  location: string;
  status: 'available' | 'rented' | 'maintenance' | 'out-for-delivery' | 'reserved';
  customerId?: string;
  rentalStartDate?: Date;
  rentalEndDate?: Date;
  lastUpdated: Date;
}

class InventoryService {
  private inventory: InventoryItem[] = [];

  constructor() {
    // Only load inventory on client-side
    if (typeof window !== 'undefined') {
      this.loadInventory();
      this.initializeDefaultInventory();
    }
  }

  private loadInventory() {
    // Load inventory from localStorage or database
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem('inventory');
        if (stored) {
          this.inventory = JSON.parse(stored);
        }
      }
    } catch (error) {
      console.error('InventoryService: Failed to load inventory:', error);
    }
  }

  private initializeDefaultInventory() {
    // Initialize with default dumpster inventory if none exists
    if (this.inventory.length === 0) {
      const defaultInventory: Omit<InventoryItem, 'id' | 'lastUpdated'>[] = [
        { name: '15 Yard Dumpster #1', size: '15', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '15 Yard Dumpster #2', size: '15', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '15 Yard Dumpster #3', size: '15', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '15 Yard Dumpster #4', size: '15', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '15 Yard Dumpster #5', size: '15', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '20 Yard Dumpster #1', size: '20', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '20 Yard Dumpster #2', size: '20', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '20 Yard Dumpster #3', size: '20', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '20 Yard Dumpster #4', size: '20', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '20 Yard Dumpster #5', size: '20', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '30 Yard Dumpster #1', size: '30', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '30 Yard Dumpster #2', size: '30', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '30 Yard Dumpster #3', size: '30', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '30 Yard Dumpster #4', size: '30', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '30 Yard Dumpster #5', size: '30', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '10 Yard Dirt Dumpster #1', size: '10', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '10 Yard Dirt Dumpster #2', size: '10', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '10 Yard Mixed Dumpster #1', size: '10', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '10 Yard Mixed Dumpster #2', size: '10', quantity: 1, location: 'Warehouse', status: 'available' },
        { name: '12 Yard Concrete Dumpster #1', size: '12', quantity: 1, location: 'Warehouse', status: 'available' }
      ];

      defaultInventory.forEach(item => {
        this.addItem(item);
      });
    }
  }

  private saveInventory() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('inventory', JSON.stringify(this.inventory));
      }
    } catch (error) {
      console.error('InventoryService: Failed to save inventory:', error);
    }
  }

  getAllItems(): InventoryItem[] {
    return [...this.inventory];
  }

  getItem(id: string): InventoryItem | undefined {
    return this.inventory.find(item => item.id === id);
  }

  addItem(item: Omit<InventoryItem, 'id' | 'lastUpdated'>): InventoryItem {
    const newItem: InventoryItem = {
      ...item,
      id: Date.now().toString(),
      lastUpdated: new Date()
    };
    
    this.inventory.push(newItem);
    this.saveInventory();
    return newItem;
  }

  updateItem(id: string, updates: Partial<InventoryItem>): InventoryItem | null {
    const index = this.inventory.findIndex(item => item.id === id);
    if (index === -1) return null;

    this.inventory[index] = {
      ...this.inventory[index],
      ...updates,
      lastUpdated: new Date()
    };

    this.saveInventory();
    return this.inventory[index];
  }

  deleteItem(id: string): boolean {
    const index = this.inventory.findIndex(item => item.id === id);
    if (index === -1) return false;

    this.inventory.splice(index, 1);
    this.saveInventory();
    return true;
  }

  searchItems(query: string): InventoryItem[] {
    const lowerQuery = query.toLowerCase();
    return this.inventory.filter(item =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.location.toLowerCase().includes(lowerQuery)
    );
  }

  getInventoryStatus() {
    const totalItems = this.inventory.length;
    const availableItems = this.inventory.filter(item => item.status === 'available').length;
    const rentedItems = this.inventory.filter(item => item.status === 'rented').length;
    const utilizationRate = totalItems > 0 ? (rentedItems / totalItems) * 100 : 0;
    
    return {
      totalDumpsters: totalItems,
      availableDumpsters: availableItems,
      activeRentals: rentedItems,
      utilizationRate: utilizationRate
    };
  }

  // Check availability for a specific size
  checkAvailability(size: string): { available: boolean; count: number; alternativeSizes?: string[] } {
    const availableItems = this.inventory.filter(item => 
      item.size === size && item.status === 'available'
    );
    
    if (availableItems.length > 0) {
      return { available: true, count: availableItems.length };
    }
    
    // Suggest alternative sizes
    const alternativeSizes = this.inventory
      .filter(item => item.status === 'available')
      .map(item => item.size)
      .filter((size, index, arr) => arr.indexOf(size) === index)
      .sort((a, b) => parseInt(a) - parseInt(b));
    
    return { 
      available: false, 
      count: 0, 
      alternativeSizes: alternativeSizes.length > 0 ? alternativeSizes : undefined 
    };
  }

  // Rent a dumpster
  rentDumpster(size: string, customerId: string, startDate: Date, endDate: Date): InventoryItem | null {
    const availableItem = this.inventory.find(item => 
      item.size === size && item.status === 'available'
    );
    
    if (!availableItem) return null;
    
    availableItem.status = 'rented';
    availableItem.customerId = customerId;
    availableItem.rentalStartDate = startDate;
    availableItem.rentalEndDate = endDate;
    availableItem.lastUpdated = new Date();
    
    this.saveInventory();
    return availableItem;
  }

  // Return a dumpster
  returnDumpster(id: string): boolean {
    const item = this.inventory.find(item => item.id === id);
    if (!item || item.status !== 'rented') return false;
    
    item.status = 'available';
    item.customerId = undefined;
    item.rentalStartDate = undefined;
    item.rentalEndDate = undefined;
    item.lastUpdated = new Date();
    
    this.saveInventory();
    return true;
  }

  // Get items by status
  getItemsByStatus(status: 'available' | 'rented' | 'maintenance' | 'out-for-delivery' | 'reserved'): InventoryItem[] {
    return this.inventory.filter(item => item.status === status);
  }

  // Get items by size
  getItemsBySize(size: string): InventoryItem[] {
    return this.inventory.filter(item => item.size === size);
  }
}

export default InventoryService;

// Export a singleton instance
export const inventoryService = new InventoryService();
