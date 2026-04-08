'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';

// This component is now generic and can export any array of objects to Excel.

interface ExportData {
  [key: string]: any;
}

interface ExportButtonProps {
  data: ExportData[];
  fileName: string;
  className?: string;
}

export default function ExportButton({ data, fileName, className }: ExportButtonProps) {
  const exportToExcel = () => {
    // Check if there is data to export
    if (!data || data.length === 0) {
        alert("Tidak ada data untuk diekspor.");
        return;
    }

    // 1. Create a worksheet directly from the data array.
    // The keys of the first object in the array will be used as headers.
    const worksheet = XLSX.utils.json_to_sheet(data);

    // 2. (Optional) Auto-calculate column widths for better readability.
    try {
        const header = Object.keys(data[0]);
        const colWidths = header.map((key) => ({
            // Calculate max width of header or cell content
            wch: Math.max(
                key.length,
                ...data.map((row) => (row[key] ? row[key].toString().length : 0))
            ) + 1, // Add a little extra padding
        }));
        worksheet["!cols"] = colWidths;
    } catch (e) {
        console.error("Could not calculate column widths for Excel export", e);
    }

    // 3. Create a new workbook and append the worksheet.
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data'); // Use a generic sheet name

    // 4. Trigger the file download.
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
    <Button 
      onClick={exportToExcel} 
      className={className} 
      variant="outline"
      // Disable the button if there is no data
      disabled={!data || data.length === 0}
    >
      <Download className="mr-2 h-4 w-4" />
      Export Excel
    </Button>
  );
}
