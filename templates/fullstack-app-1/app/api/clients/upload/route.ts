import { NextResponse } from 'next/server';
import { parseCSV, analyzeClientData } from '../../../utils/csvParser';
import fs from 'fs';
import path from 'path';

// File path for storing client data
const CLIENT_DATA_FILE = path.join(process.cwd(), 'data', 'clients.json');

// Ensure data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.dirname(CLIENT_DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Save clients to file
const saveClientsToFile = (clients: any[]) => {
  try {
    ensureDataDirectory();
    fs.writeFileSync(CLIENT_DATA_FILE, JSON.stringify(clients, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving clients to file:', error);
    return false;
  }
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const csvFile = formData.get('csvFile') as File;
    
    if (!csvFile) {
      return NextResponse.json(
        { error: 'No CSV file provided' },
        { status: 400 }
      );
    }

    // Read the CSV file content
    const csvContent = await csvFile.text();
    
    // Parse the CSV data
    const clients = parseCSV(csvContent);
    
    if (clients.length === 0) {
      return NextResponse.json(
        { error: 'No valid client data found in CSV' },
        { status: 400 }
      );
    }

    // Save to persistent storage
    const saved = saveClientsToFile(clients);
    
    if (!saved) {
      return NextResponse.json(
        { error: 'Failed to save client data' },
        { status: 500 }
      );
    }

    // Generate analysis
    const analysis = analyzeClientData(clients);

    return NextResponse.json({
      message: 'CSV uploaded and processed successfully',
      clientsCount: clients.length,
      clients: clients,
      analysis: analysis
    });

  } catch (error) {
    console.error('Error processing CSV upload:', error);
    return NextResponse.json(
      { error: 'Failed to process CSV file' },
      { status: 500 }
    );
  }
}
