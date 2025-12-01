'use client';

import { useState } from 'react';
import { parseCSV, analyzeClientData, Client } from '../utils/csvParser';

interface CSVUploaderProps {
  onDataUploaded: (clients: Client[], analysis: any) => void;
}

export default function CSVUploader({ onDataUploaded }: CSVUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      setErrorMessage('Please upload a CSV file');
      setUploadStatus('error');
      return;
    }

    setIsUploading(true);
    setUploadStatus('idle');
    setErrorMessage('');

    try {
      // Create FormData to send the file
      const formData = new FormData();
      formData.append('csvFile', file);

      // Upload to the API endpoint
      const response = await fetch('/api/clients/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const result = await response.json();
      
      // Save to localStorage as backup
      localStorage.setItem('clientData', JSON.stringify(result.clients));
      localStorage.setItem('clientAnalysis', JSON.stringify(result.analysis));
      
      onDataUploaded(result.clients, result.analysis);
      setUploadStatus('success');
    } catch (error) {
      console.error('Error uploading CSV:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Error uploading CSV file. Please try again.');
      setUploadStatus('error');
    } finally {
      setIsUploading(false);
    }
  };

  const loadSampleData = () => {
    // Load sample data for demonstration
    const sampleClients: Client[] = [
      {
        companyName: "AC Construction & Landscaping",
        firstName: "Leo",
        lastName: "Nepote",
        email: "leo@acconstruction.com",
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
      }
    ];

    const analysis = analyzeClientData(sampleClients);
    
    // Save to localStorage
    localStorage.setItem('clientData', JSON.stringify(sampleClients));
    localStorage.setItem('clientAnalysis', JSON.stringify(analysis));
    
    onDataUploaded(sampleClients, analysis);
    setUploadStatus('success');
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Import Client Data</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload CSV File
          </label>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            disabled={isUploading}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#0d9488] file:text-white hover:file:bg-teal-700"
          />
        </div>

        <div className="text-center">
          <span className="text-sm text-gray-500">or</span>
        </div>

        <button
          onClick={loadSampleData}
          disabled={isUploading}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d9488] disabled:opacity-50"
        >
          Load Sample Data
        </button>

        {isUploading && (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#0d9488]"></div>
            <span className="ml-2 text-sm text-gray-600">Processing...</span>
          </div>
        )}

        {uploadStatus === 'success' && (
          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-teal-800">
                  Data uploaded successfully!
                </p>
              </div>
            </div>
          </div>
        )}

        {uploadStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">
                  {errorMessage}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-md">
        <h4 className="text-sm font-medium text-blue-900 mb-2">CSV Format Requirements:</h4>
        <ul className="text-sm text-trust-blue-dark space-y-1">
          <li>• Headers: Company Name, First Name, Last Name, Email, Phone, etc.</li>
          <li>• Use commas to separate values</li>
          <li>• Quote fields that contain commas</li>
          <li>• Include all required columns</li>
        </ul>
      </div>
    </div>
  );
}
