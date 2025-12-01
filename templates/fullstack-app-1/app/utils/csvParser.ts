export interface Client {
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  county: string;
  accountId: string;
  tags: string;
  taxExempt: string;
  onHold: string;
  onHoldReason: string;
  createdOn: string;
}

export function parseCSV(csvContent: string): Client[] {
  const lines = csvContent.split('\n');
  const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
  
  const clients: Client[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Parse CSV line with proper handling of quoted fields
    const values = parseCSVLine(line);
    
    if (values.length >= headers.length) {
      const client: Client = {
        companyName: values[0] || '',
        firstName: values[1] || '',
        lastName: values[2] || '',
        email: values[3] || '',
        phone: values[4] || '',
        addressLine1: values[5] || '',
        addressLine2: values[6] || '',
        city: values[7] || '',
        state: values[8] || '',
        zip: values[9] || '',
        county: values[10] || '',
        accountId: values[11] || '',
        tags: values[12] || '',
        taxExempt: values[13] || '',
        onHold: values[14] || '',
        onHoldReason: values[15] || '',
        createdOn: values[16] || ''
      };
      
      clients.push(client);
    }
  }
  
  return clients;
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  values.push(current.trim());
  return values;
}

export function analyzeClientData(clients: Client[]) {
  const analysis = {
    totalClients: clients.length,
    residentialClients: clients.filter(c => c.tags.includes('Residential')).length,
    commercialClients: clients.filter(c => c.tags.includes('Commercial')).length,
    clientsByCounty: {} as Record<string, number>,
    clientsByCity: {} as Record<string, number>,
    leadSources: {} as Record<string, number>,
    monthlyGrowth: 0,
    topCities: [] as Array<{city: string, count: number}>,
    topCounties: [] as Array<{county: string, count: number}>,
    recentClients: [] as Client[]
  };
  
  // County and city analysis
  clients.forEach(client => {
    if (client.county) {
      analysis.clientsByCounty[client.county] = (analysis.clientsByCounty[client.county] || 0) + 1;
    }
    
    if (client.city) {
      analysis.clientsByCity[client.city] = (analysis.clientsByCity[client.city] || 0) + 1;
    }
    
    // Lead source analysis
    if (client.tags) {
      const sources = client.tags.split(',');
      sources.forEach(source => {
        const cleanSource = source.trim();
        if (cleanSource && !cleanSource.includes('Due Upon Receipt')) {
          analysis.leadSources[cleanSource] = (analysis.leadSources[cleanSource] || 0) + 1;
        }
      });
    }
  });
  
  // Top cities and counties
  analysis.topCities = Object.entries(analysis.clientsByCity)
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
  
  analysis.topCounties = Object.entries(analysis.clientsByCounty)
    .map(([county, count]) => ({ county, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  
  // Recent clients
  analysis.recentClients = clients
    .sort((a, b) => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime())
    .slice(0, 10);
  
  // Monthly growth calculation
  const currentMonth = new Date().getMonth();
  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const currentMonthClients = clients.filter(c => 
    new Date(c.createdOn).getMonth() === currentMonth
  ).length;
  const lastMonthClients = clients.filter(c => 
    new Date(c.createdOn).getMonth() === lastMonth
  ).length;
  
  analysis.monthlyGrowth = lastMonthClients > 0 
    ? ((currentMonthClients - lastMonthClients) / lastMonthClients) * 100 
    : 0;
  
  return analysis;
}

export function exportClientsToCSV(clients: Client[]): string {
  const headers = [
    'Company Name', 'First Name', 'Last Name', 'Email', 'Phone',
    'Address Line 1', 'Address Line 2', 'City', 'State', 'Zip',
    'County', 'Account Id', 'Tags', 'Tax Exempt', 'On Hold',
    'On Hold Reason', 'Created On'
  ];
  
  const csvLines = [headers.join(',')];
  
  clients.forEach(client => {
    const values = [
      client.companyName, client.firstName, client.lastName, client.email, client.phone,
      client.addressLine1, client.addressLine2, client.city, client.state, client.zip,
      client.county, client.accountId, client.tags, client.taxExempt, client.onHold,
      client.onHoldReason, client.createdOn
    ].map(value => `"${value}"`);
    
    csvLines.push(values.join(','));
  });
  
  return csvLines.join('\n');
}
