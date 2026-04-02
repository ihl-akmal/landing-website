'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';

// Note for developer: You need to install xlsx package:
// npm install xlsx
// or
// yarn add xlsx

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
    if (data.length === 0) {
        alert("Tidak ada data untuk diekspor.");
        return;
    }

    // 1. Mempersiapkan data (memilih dan mengubah urutan kolom)
    const worksheetData = data.map(item => ({
      'Nama': item.name,
      'Email': item.email,
      'No. WhatsApp': item.whatsapp,
      'Domisili': item.domicile,
      'Usia': item.usia,
      'Status': item.status,
      'Sumber Informasi': item.infoSource,
      'Tantangan': item.challenge,
      'Harapan': item.hope,
      'Tanggal Daftar': item.createdAt 
        ? new Date(item.createdAt).toLocaleString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        : '-',
    }));

    // 2. Membuat worksheet dari data
    const ws = XLSX.utils.json_to_sheet(worksheetData);

    // 3. (Opsional) Mengatur lebar kolom agar lebih rapi
    const columnWidths = [
        { wch: 30 }, // Nama
        { wch: 30 }, // Email
        { wch: 20 }, // No. WhatsApp
        { wch: 20 }, // Domisili
        { wch: 10 }, // Usia
        { wch: 20 }, // Status
        { wch: 20 }, // Sumber Informasi
        { wch: 40 }, // Tantangan
        { wch: 40 }, // Harapan
        { wch: 25 }, // Tanggal Daftar
    ];
    ws['!cols'] = columnWidths;

    // 4. Membuat workbook dan menambahkan worksheet ke dalamnya
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Peserta');

    // 5. Memicu unduhan file Excel
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  };

  return (
    <Button onClick={exportToExcel} className={className} variant="outline">
      <Download className="mr-2 h-4 w-4" />
      Export Excel
    </Button>
  );
}
