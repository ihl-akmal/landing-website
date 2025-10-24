# Fitur Daftar Kelas - GrazEdu

## 📋 Overview
Fitur daftar kelas memungkinkan pengguna untuk melihat dan mendaftar ke berbagai kelas pengembangan diri yang tersedia. Setiap kelas memiliki halaman detail sendiri dengan form pendaftaran yang di-embed dari Google Forms.

## 🗂️ Struktur File

```
app/
├── data/
│   ├── classes.ts              # Data kelas statis (siap upgrade ke Google Sheets)
│   └── google-sheets.ts        # Utility untuk integrasi Google Sheets
└── kelas/
    ├── layout.tsx              # Layout dengan navbar dan footer
    ├── page.tsx                # Halaman daftar semua kelas
    ├── [slug]/
    │   └── page.tsx            # Halaman detail kelas individual
    └── README.md               # Dokumentasi ini
```

## 🎯 Fitur Utama

### 1. **Halaman Daftar Kelas** (`/kelas`)
- Grid layout responsive untuk semua kelas
- Filter berdasarkan kategori
- Informasi singkat setiap kelas
- Link langsung ke halaman detail

### 2. **Halaman Detail Kelas** (`/kelas/[slug]`)
- SEO-friendly dengan metadata lengkap
- Informasi detail kelas (durasi, mentor, harga, dll)
- Benefits dan requirements
- Testimoni peserta
- Google Form embed untuk pendaftaran
- Responsive design untuk semua device

### 3. **SEO Optimization**
- Dynamic metadata untuk setiap halaman
- Open Graph tags untuk social media
- Twitter Card support
- Structured data ready
- SEO-friendly URLs dengan slug

## 🔧 Konfigurasi

### Data Kelas
Edit file `app/data/classes.ts` untuk menambah/mengubah data kelas:

```typescript
{
  slug: "public-speaking-for-women",        // URL-friendly slug
  title: "Public Speaking for Women",       // Judul kelas
  description: "...",                       // Deskripsi lengkap
  shortDescription: "...",                  // Deskripsi singkat
  metaTitle: "...",                         // SEO title
  metaDescription: "...",                   // SEO description
  keywords: ["public speaking", "..."],     // SEO keywords
  image: "/class/publicspeaking.png",       // Gambar kelas
  duration: "4 sesi (2 jam/sesi)",          // Durasi
  price: "Rp 299.000",                      // Harga
  instructor: "Cindy",                      // Nama mentor
  level: "Beginner",                        // Level kesulitan
  category: "Soft Skills",                  // Kategori
  formUrl: "https://docs.google.com/...",   // URL Google Form
  isActive: true,                           // Status aktif
  // ... dan field lainnya
}
```

### Google Form URL
Pastikan URL Google Form sudah dalam format embed:
```
https://docs.google.com/forms/d/e/[FORM_ID]/viewform?embedded=true
```

## 🚀 Upgrade ke Google Sheets

### 1. Setup Google Sheets API
1. Buat project di Google Cloud Console
2. Enable Google Sheets API
3. Buat service account atau API key
4. Tambahkan environment variables:
   ```env
   GOOGLE_SHEETS_ID=your_spreadsheet_id
   GOOGLE_SHEETS_API_KEY=your_api_key
   ```

### 2. Struktur Google Sheets
Buat sheet dengan kolom sesuai interface `GoogleSheetsClass`:
- A: slug
- B: title
- C: description
- D: shortDescription
- E: metaTitle
- F: metaDescription
- G: keywords (comma-separated)
- H: image
- I: thumbnail
- J: duration
- K: price
- L: instructor
- M: level
- N: category
- O: formUrl
- P: isActive
- Q: startDate
- R: endDate
- S: maxParticipants
- T: currentParticipants
- U: requirements (semicolon-separated)
- V: benefits (semicolon-separated)

### 3. Update Data Source
Ubah import di `app/data/classes.ts`:
```typescript
// Dari static data
import { classes } from './classes';

// Ke Google Sheets
import { fetchClassesFromGoogleSheets } from './google-sheets';
```

## 📱 Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Features
- Mobile-first approach
- Touch-friendly buttons
- Optimized images
- Readable typography
- Accessible navigation

## 🎨 Styling

### Color Scheme
- Primary: Purple (#8B5CF6)
- Secondary: Pink (#EC4899)
- Background: Gradient purple-pink
- Text: Gray scale

### Components
- Cards dengan shadow dan hover effects
- Gradient buttons
- Responsive grid layouts
- Consistent spacing

## 🔍 SEO Features

### Meta Tags
- Dynamic title dan description
- Open Graph untuk social media
- Twitter Card support
- Keywords optimization

### URL Structure
- SEO-friendly slugs
- Breadcrumb navigation
- Canonical URLs

### Performance
- Static generation untuk halaman kelas
- Optimized images dengan Next.js Image
- Lazy loading untuk iframe

## 🧪 Testing

### Manual Testing
1. Navigasi ke `/kelas`
2. Klik kelas untuk melihat detail
3. Test form pendaftaran
4. Test responsive design
5. Test SEO metadata

### Checklist
- [ ] Semua link berfungsi
- [ ] Form embed loading dengan benar
- [ ] Responsive di semua device
- [ ] SEO metadata ter-generate
- [ ] Navigation smooth

## 🚀 Deployment

### Build
```bash
npm run build
```

### Static Generation
Halaman kelas akan di-generate secara static untuk performa optimal.

### Environment Variables
Untuk Google Sheets integration:
```env
GOOGLE_SHEETS_ID=your_spreadsheet_id
GOOGLE_SHEETS_API_KEY=your_api_key
```

## 📞 Support

Jika ada pertanyaan atau masalah dengan fitur ini, silakan hubungi tim development atau buat issue di repository.
