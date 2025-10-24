import { GOOGLE_SHEETS_CONFIG, fetchClassesFromGoogleSheets } from '../data/google-sheets';

export default async function DebugSheetPage() {
  const data = await fetchClassesFromGoogleSheets(GOOGLE_SHEETS_CONFIG);

  return (
    <div style={{ padding: 20 }}>
      <h1>Debug Google Sheets</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
