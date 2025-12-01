import { NextResponse } from 'next/server';
import { parseCSV, analyzeClientData } from '../../utils/csvParser';
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

// Load clients from file
const loadClientsFromFile = () => {
  try {
    ensureDataDirectory();
    if (fs.existsSync(CLIENT_DATA_FILE)) {
      const data = fs.readFileSync(CLIENT_DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading clients from file:', error);
  }
  return [];
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

// Sample client data based on your CSV structure
const sampleClients = [
  {
    companyName: "711",
    firstName: "KYLE",
    lastName: "BERRYMAN",
    email: "kberryman@ncswash.com",
    phone: "(385) 395-8813",
    addressLine1: "3731 South Jordan Landing Boulevard",
    addressLine2: "",
    city: "West Jordan",
    state: "Utah",
    zip: "84084",
    county: "Salt Lake",
    accountId: "71-2507-1614",
    tags: "Commercial,Facebook",
    taxExempt: "No",
    onHold: "No",
    onHoldReason: "",
    createdOn: "2025/07/22 05:14 PM"
  },
  {
    companyName: "AC Construction & Landscaping",
    firstName: "Leo",
    lastName: "Nepote",
    email: "",
    phone: "(801) 347-7149",
    addressLine1: "1021 East 5245 South",
    addressLine2: "",
    city: "Salt Lake City",
    state: "Utah",
    zip: "84117",
    county: "Salt Lake",
    accountId: "AC-2408-5508",
    tags: "Residential,Google",
    taxExempt: "No",
    onHold: "No",
    onHoldReason: "",
    createdOn: "2024/08/08 04:08 PM"
  },
  {
    companyName: "Advanced Cabinets LLC",
    firstName: "",
    lastName: "",
    email: "office@advanced-cabinets.com",
    phone: "(801) 251-0155",
    addressLine1: "6860 South 300 West",
    addressLine2: "",
    city: "Midvale",
    state: "Utah",
    zip: "84047",
    county: "Salt Lake",
    accountId: "AD-2507-3502",
    tags: "Commercial,Web,Due Upon Receipt",
    taxExempt: "No",
    onHold: "No",
    onHoldReason: "",
    createdOn: "2025/07/22 09:07 AM"
  },
  {
    companyName: "",
    firstName: "Alice",
    lastName: "Ly",
    email: "sushion8@gmail.com",
    phone: "(385) 335-9910",
    addressLine1: "466 North 900 East Street",
    addressLine2: "",
    city: "American Fork",
    state: "Utah",
    zip: "84003",
    county: "Utah",
    accountId: "LY-2505-3911",
    tags: "Residential,Google",
    taxExempt: "No",
    onHold: "No",
    onHoldReason: "",
    createdOn: "2025/05/05 04:11 PM"
  },
  {
    companyName: "All Weather Waterproofing",
    firstName: "Jason",
    lastName: "Webster",
    email: "jwebster@allweatherwaterproofing.com",
    phone: "(385) 566-7653",
    addressLine1: "5941 Stratler Street",
    addressLine2: "",
    city: "Murray",
    state: "Utah",
    zip: "84107",
    county: "Salt Lake",
    accountId: "AL-2410-9648",
    tags: "Commercial,Facebook",
    taxExempt: "No",
    onHold: "No",
    onHoldReason: "",
    createdOn: "2024/10/02 11:30 AM"
  }
];

export async function GET() {
  try {
    // Load clients from persistent storage
    const clients = loadClientsFromFile();
    
    // If no clients found, return sample data
    if (clients.length === 0) {
      return NextResponse.json(sampleClients);
    }
    
    return NextResponse.json(clients);
  } catch (error) {
    console.error('Error fetching client data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch client data' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const newClient = await request.json();
    
    // In a real implementation, you would:
    // 1. Validate the client data
    // 2. Save to your database
    // 3. Update your CSV file if needed
    
    console.log('New client data:', newClient);
    
    return NextResponse.json(
      { message: 'Client added successfully', client: newClient },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding client:', error);
    return NextResponse.json(
      { error: 'Failed to add client' },
      { status: 500 }
    );
  }
}
