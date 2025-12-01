'use client';

// Data validation utilities for dashboard robustness

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export class DataValidator {
  static validateCSVData(data: any[]): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!Array.isArray(data)) {
      errors.push('Data must be an array');
      return { isValid: false, errors, warnings };
    }

    if (data.length === 0) {
      errors.push('No data rows found');
      return { isValid: false, errors, warnings };
    }

    // Check for required fields
    const requiredFields = ['campaignName', 'impressions', 'clicks', 'cost'];
    const firstRow = data[0];
    
    requiredFields.forEach(field => {
      if (!(field in firstRow)) {
        errors.push(`Missing required field: ${field}`);
      }
    });

    // Validate data types and ranges
    data.forEach((row, index) => {
      // Validate impressions
      if (typeof row.impressions !== 'number' || row.impressions < 0) {
        errors.push(`Row ${index + 1}: Invalid impressions value`);
      }

      // Validate clicks
      if (typeof row.clicks !== 'number' || row.clicks < 0) {
        errors.push(`Row ${index + 1}: Invalid clicks value`);
      }

      // Validate cost
      if (typeof row.cost !== 'number' || row.cost < 0) {
        errors.push(`Row ${index + 1}: Invalid cost value`);
      }

      // Validate CTR
      if (row.ctr && (typeof row.ctr !== 'number' || row.ctr < 0 || row.ctr > 100)) {
        warnings.push(`Row ${index + 1}: CTR seems unusually high (${row.ctr}%)`);
      }

      // Validate CPC
      if (row.cpc && (typeof row.cpc !== 'number' || row.cpc < 0 || row.cpc > 100)) {
        warnings.push(`Row ${index + 1}: CPC seems unusually high ($${row.cpc})`);
      }

      // Check for suspicious data patterns
      if (row.clicks > row.impressions) {
        errors.push(`Row ${index + 1}: Clicks cannot exceed impressions`);
      }

      if (row.impressions > 0 && row.clicks === 0 && row.cost > 0) {
        warnings.push(`Row ${index + 1}: Cost with no clicks detected`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  static validateSalesData(data: any[]): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!Array.isArray(data)) {
      errors.push('Sales data must be an array');
      return { isValid: false, errors, warnings };
    }

    if (data.length === 0) {
      errors.push('No sales records found');
      return { isValid: false, errors, warnings };
    }

    const requiredFields = ['dropOffDate', 'size', 'client', 'invoiceTotal'];
    const firstRow = data[0];
    
    requiredFields.forEach(field => {
      if (!(field in firstRow)) {
        errors.push(`Missing required field: ${field}`);
      }
    });

    data.forEach((row, index) => {
      // Validate date
      if (row.dropOffDate && isNaN(Date.parse(row.dropOffDate))) {
        errors.push(`Row ${index + 1}: Invalid date format`);
      }

      // Validate invoice total
      if (typeof row.invoiceTotal !== 'number' || row.invoiceTotal < 0) {
        errors.push(`Row ${index + 1}: Invalid invoice total`);
      }

      // Check for future dates
      if (row.dropOffDate && new Date(row.dropOffDate) > new Date()) {
        warnings.push(`Row ${index + 1}: Future date detected`);
      }

      // Check for unusually high amounts
      if (row.invoiceTotal > 10000) {
        warnings.push(`Row ${index + 1}: Unusually high invoice amount ($${row.invoiceTotal})`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  static sanitizeInput(input: string): string {
    if (typeof input !== 'string') return '';
    
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .substring(0, 1000); // Limit length
  }

  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validatePhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  }
}

// React hook for data validation
export function useDataValidation() {
  const validateCSV = (data: any[]) => DataValidator.validateCSVData(data);
  const validateSales = (data: any[]) => DataValidator.validateSalesData(data);
  const sanitize = (input: string) => DataValidator.sanitizeInput(input);

  return {
    validateCSV,
    validateSales,
    sanitize,
    validateEmail: DataValidator.validateEmail,
    validatePhone: DataValidator.validatePhone
  };
}
