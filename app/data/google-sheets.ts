// Google Sheets Integration Utilities
// This file contains utilities for future Google Sheets integration

export interface GoogleSheetsConfig {
  spreadsheetId: string;
  range: string;
  apiKey?: string;
  serviceAccountKey?: string;
}

export interface GoogleSheetsClass {
  // Basic Information
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  
  // SEO & Meta
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  
  // Visual
  image?: string;
  thumbnail?: string;
  
  // Class Details
  duration?: string;
  price?: string;
  instructor?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  category?: string;
  
  // Registration
  formUrl: string;
  isActive: boolean;
  
  // Schedule & Capacity
  startDate?: string;
  endDate?: string;
  maxParticipants?: number;
  currentParticipants?: number;
  
  // Additional Info
  requirements?: string[];
  benefits?: string[];
  testimonials?: {
    name: string;
    text: string;
    rating: number;
  }[];
  
  // Google Sheets specific
  rowIndex?: number;
  lastUpdated?: string;
}

export interface GoogleSheetsResponse {
  values: string[][];
}

/**
 * Fetch classes from Google Sheets
 * This function will replace the static data when Google Sheets integration is implemented
 */
export async function fetchClassesFromGoogleSheets(config: GoogleSheetsConfig): Promise<GoogleSheetsClass[]> {
  try {
    // For now, return empty array - this will be implemented when Google Sheets API is set up
    console.log('Google Sheets integration not yet implemented');
    return [];
    
    /* 
    // Future implementation example:
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${config.range}?key=${config.apiKey}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data from Google Sheets: ${response.statusText}`);
    }
    
    const data: GoogleSheetsResponse = await response.json();
    const rows = data.values;
    
    if (!rows || rows.length < 2) {
      return [];
    }
    
    // Transform rows to class objects
    // Assuming the first row contains headers
    const headers = rows[0];
    const classRows = rows.slice(1);
    
    return classRows.map((row, index) => {
      const classData: GoogleSheetsClass = {
        slug: row[0] || '',
        title: row[1] || '',
        description: row[2] || '',
        shortDescription: row[3] || '',
        metaTitle: row[4] || '',
        metaDescription: row[5] || '',
        keywords: row[6] ? row[6].split(',').map(k => k.trim()) : [],
        image: row[7] || '',
        thumbnail: row[8] || '',
        duration: row[9] || '',
        price: row[10] || '',
        instructor: row[11] || '',
        level: row[12] as 'Beginner' | 'Intermediate' | 'Advanced' || 'Beginner',
        category: row[13] || '',
        formUrl: row[14] || '',
        isActive: row[15]?.toLowerCase() === 'true',
        startDate: row[16] || '',
        endDate: row[17] || '',
        maxParticipants: row[18] ? parseInt(row[18]) : undefined,
        currentParticipants: row[19] ? parseInt(row[19]) : 0,
        requirements: row[20] ? row[20].split(';').map(r => r.trim()) : [],
        benefits: row[21] ? row[21].split(';').map(b => b.trim()) : [],
        rowIndex: index + 2, // +2 because we skip header and 0-indexed
        lastUpdated: new Date().toISOString(),
      };
      
      return classData;
    });
    */
  } catch (error) {
    console.error('Error fetching classes from Google Sheets:', error);
    return [];
  }
}

/**
 * Update class data in Google Sheets
 * This function will be used to update class information
 */
export async function updateClassInGoogleSheets(
  config: GoogleSheetsConfig,
  classData: Partial<GoogleSheetsClass>
): Promise<boolean> {
  try {
    // For now, just log the update - this will be implemented when Google Sheets API is set up
    console.log('Update class in Google Sheets:', classData);
    return true;
    
    /*
    // Future implementation example:
    const values = [
      [
        classData.slug,
        classData.title,
        classData.description,
        classData.shortDescription,
        classData.metaTitle,
        classData.metaDescription,
        classData.keywords?.join(', '),
        classData.image,
        classData.thumbnail,
        classData.duration,
        classData.price,
        classData.instructor,
        classData.level,
        classData.category,
        classData.formUrl,
        classData.isActive?.toString(),
        classData.startDate,
        classData.endDate,
        classData.maxParticipants?.toString(),
        classData.currentParticipants?.toString(),
        classData.requirements?.join(';'),
        classData.benefits?.join(';'),
      ]
    ];
    
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${config.range}?valueInputOption=RAW&key=${config.apiKey}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: values,
        }),
      }
    );
    
    return response.ok;
    */
  } catch (error) {
    console.error('Error updating class in Google Sheets:', error);
    return false;
  }
}

/**
 * Get class registration count from Google Sheets
 * This can be used to track how many people have registered for each class
 */
export async function getClassRegistrationCount(
  config: GoogleSheetsConfig,
  classSlug: string
): Promise<number> {
  try {
    // For now, return 0 - this will be implemented when Google Sheets API is set up
    console.log('Get registration count for class:', classSlug);
    return 0;
    
    /*
    // Future implementation example:
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/Registrations!A:B?key=${config.apiKey}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch registration data');
    }
    
    const data: GoogleSheetsResponse = await response.json();
    const rows = data.values || [];
    
    // Count registrations for the specific class
    return rows.filter(row => row[0] === classSlug).length;
    */
  } catch (error) {
    console.error('Error getting registration count:', error);
    return 0;
  }
}

/**
 * Add new class registration to Google Sheets
 * This function will be called when someone registers for a class
 */
export async function addClassRegistration(
  config: GoogleSheetsConfig,
  registrationData: {
    classSlug: string;
    participantName: string;
    email: string;
    phone: string;
    registrationDate: string;
    additionalInfo?: string;
  }
): Promise<boolean> {
  try {
    // For now, just log the registration - this will be implemented when Google Sheets API is set up
    console.log('Add class registration:', registrationData);
    return true;
    
    /*
    // Future implementation example:
    const values = [
      [
        registrationData.classSlug,
        registrationData.participantName,
        registrationData.email,
        registrationData.phone,
        registrationData.registrationDate,
        registrationData.additionalInfo || '',
      ]
    ];
    
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/Registrations!A:F:append?valueInputOption=RAW&key=${config.apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: values,
        }),
      }
    );
    
    return response.ok;
    */
  } catch (error) {
    console.error('Error adding class registration:', error);
    return false;
  }
}

/**
 * Configuration for Google Sheets integration
 * This should be moved to environment variables in production
 */
export const GOOGLE_SHEETS_CONFIG: GoogleSheetsConfig = {
  spreadsheetId: process.env.GOOGLE_SHEETS_ID || '',
  range: 'Classes!A:V', // Adjust range based on your sheet structure
  apiKey: process.env.GOOGLE_SHEETS_API_KEY || '',
};

/**
 * Helper function to check if Google Sheets integration is configured
 */
export function isGoogleSheetsConfigured(): boolean {
  return !!(
    GOOGLE_SHEETS_CONFIG.spreadsheetId &&
    GOOGLE_SHEETS_CONFIG.apiKey
  );
}

/**
 * Helper function to get data source (static or Google Sheets)
 * This function will determine whether to use static data or fetch from Google Sheets
 */
export async function getDataSource(): Promise<'static' | 'google-sheets'> {
  if (isGoogleSheetsConfigured()) {
    // You can add additional checks here, like testing the connection
    return 'google-sheets';
  }
  return 'static';
}
