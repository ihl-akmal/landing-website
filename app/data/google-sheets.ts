
import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

// ===========================
// Interfaces
// ===========================

export interface GoogleSheetsConfig {
  spreadsheetId: string;
  range: string;
  serviceAccountKey: string;
}

export interface GoogleSheetsClass {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  image: string;
  thumbnail: string;
  duration: string;
  date: string;
  time: string;
  price: string;
  instructor: string;
  level: string;
  category: string;
  formUrl: string;
  isActive: string;
  requirements: string;
  benefits: string;
  location: string;
  status: string;
}

// ===========================
// Config
// ===========================

export const GOOGLE_SHEETS_CONFIG: GoogleSheetsConfig = {
  spreadsheetId: process.env.GOOGLE_SHEETS_ID || '',
  range: 'Sheet1!A1:V15', // pastikan sesuai jumlah kolom
  serviceAccountKey: process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '',
};

// ===========================
// Helpers
// ===========================

export const isGoogleSheetsConfigured = (): boolean => {
  return (
    !!GOOGLE_SHEETS_CONFIG.spreadsheetId &&
    !!GOOGLE_SHEETS_CONFIG.serviceAccountKey
  );
};

let cachedClasses: GoogleSheetsClass[] | null = null;
let lastFetched = 0; // timestamp

// ===========================
// Fetch function
// ===========================

export async function fetchClassesFromGoogleSheets(
  config: GoogleSheetsConfig
): Promise<GoogleSheetsClass[]> {
  try {
    if (!config.spreadsheetId || !config.serviceAccountKey) {
      console.warn('⚠️ Google Sheets config belum lengkap');
      return [];
    }

    let credentials;

    if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      const fixedKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, '\\n');
      credentials = JSON.parse(fixedKey);
    } else {
      const keyPath = path.join(process.cwd(), 'app/config/service-account.json');
      const fileContent = fs.readFileSync(keyPath, 'utf-8');
      credentials = JSON.parse(fileContent);
    }


    // Buat auth client
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient as any });

    // Ambil data dari Google Sheets
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: config.spreadsheetId,
      range: config.range,
    });

    const rows = res.data.values;
    if (!rows || rows.length === 0) {
      console.warn('⚠️ Tidak ada data di Google Sheets');
      return [];
    }

    const [header, ...data] = rows;

    // Mapping data ke interface
    const formattedData: GoogleSheetsClass[] = data.map((row) => {
      const obj: any = {};
      header.forEach((key, i) => {
        obj[key] = row[i] ?? '';
      });

      // ✅ Tambahkan fallback di sini
      obj.image =
        obj.image && obj.image.trim() !== ''
          ? obj.image
          : '/class/default-class.jpg'; // fallback gambar utama

      obj.thumbnail =
        obj.thumbnail && obj.thumbnail.trim() !== ''
          ? obj.thumbnail
          : '/class/default-thumbnail.jpg'; // fallback thumbnail

      obj.formUrl =
        obj.formUrl && obj.formUrl.trim() !== ''
          ? obj.formUrl
          : 'https://forms.gle/'; // fallback form kosong

      // ✅ Konversi string boolean → boolean
      obj.isActive = obj.isActive === 'true' || obj.isActive === true;

      return obj as GoogleSheetsClass;
    });

    // Filter kelas dengan status 'draft' sesuai permintaan.
    let filteredData = formattedData.filter(cls => cls.status !== 'draft');
    
    // Balik urutan array agar data terbaru (paling bawah di sheet) muncul pertama
    filteredData.reverse();

    return filteredData;
  } catch (error) {
    console.error('❌ Gagal mengambil data dari Google Sheets:', error);
    return [];
  }
}

// ===========================
// Utility functions
// ===========================

export async function getAllClasses(): Promise<GoogleSheetsClass[]> {
  return fetchClassesFromGoogleSheets(GOOGLE_SHEETS_CONFIG);
}

export async function getClassBySlug(
  slug: string
): Promise<GoogleSheetsClass | undefined> {
  const classes = await getAllClasses();
  return classes.find(
    (cls) => cls.slug === slug && (cls.isActive === 'true')
  );
}
