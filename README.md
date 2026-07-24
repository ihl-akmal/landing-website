# Proyek Website Grazedu

## Deskripsi Singkat

Proyek ini adalah aplikasi web untuk Grazedu, sebuah platform yang menyediakan kelas-kelas online. Aplikasi ini menampilkan daftar kelas, detail kelas, dan memungkinkan pengguna untuk mendaftar. Terdapat juga panel admin untuk mengelola data kelas dan pendaftaran. Data kelas diambil langsung dari Google Sheets, yang berfungsi sebagai CMS (Content Management System) sederhana.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (dengan App Router)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/)
- **Manajemen Form**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Data Fetching**: [Google Sheets API](https://developers.google.com/sheets/api), [Firebase](https://firebase.google.com/)
- **Backend/API**: Next.js API Routes, Server Actions
- **Lainnya**:
  - `date-fns` untuk manipulasi tanggal
  - `nodemailer` untuk pengiriman email
  - `xlsx` untuk fungsionalitas ekspor ke Excel

## Struktur Folder

```
.
├── app/                  # Folder utama Next.js App Router
│   ├── api/              # Rute API (misal: login, logout)
│   ├── admin/            # Halaman-halaman khusus admin
│   ├── data/             # Logika fetching data (termasuk dari Google Sheets)
│   ├── kelas/            # Halaman daftar dan detail kelas
│   ├── [slug]/           # Halaman dinamis untuk setiap kelas
│   ├── layout.tsx        # Layout utama aplikasi
│   └── page.tsx          # Halaman utama (Homepage)
├── components/           # Komponen-komponen React
│   ├── ui/               # Komponen UI dari Shadcn (Button, Card, dll.)
│   ├── admin/            # Komponen spesifik untuk panel admin
│   └── general/          # Komponen umum yang digunakan di banyak halaman
├── hooks/                # Custom React Hooks
├── lib/                  # Fungsi utilitas dan konfigurasi
│   ├── actions/          # Next.js Server Actions (interaksi server-side)
│   ├── firebase/         # Konfigurasi Firebase (client & admin)
│   └── utils.ts          # Fungsi helper umum
├── public/               # Aset statis (gambar, ikon, font)
└── ...
```

- **`app/`**: Berisi semua rute dan halaman aplikasi. Setiap folder di dalamnya merepresentasikan sebuah segmen URL.
- **`components/`**: Tempat untuk menyimpan komponen-komponen UI yang reusable.
- **`lib/`**: Berisi logika non-UI, seperti fungsi utilitas, actions untuk server, dan konfigurasi third-party.
- **`public/`**: Untuk file-file yang bisa diakses secara publik, seperti gambar dan logo.

## Setup dan Run Local

1.  **Clone Repository**
    ```bash
    git clone <url-repository>
    cd <nama-folder-proyek>
    ```

2.  **Install Dependencies**
    Proyek ini menggunakan `pnpm`.
    ```bash
    pnpm install
    ```

3.  **Setup Environment Variables**
    Buat file `.env.local` di root proyek dan isi dengan variabel yang dibutuhkan.
    ```
    # Google Sheets
    GOOGLE_SHEETS_ID=xxxxxxxxxxxxxxxxxxxx
    GOOGLE_SERVICE_ACCOUNT_KEY=xxxxxxxxxxxxxxxxxxxx
    
    # Firebase (Contoh, sesuaikan dengan konfigurasi Anda)
    NEXT_PUBLIC_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxx
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxxxxxxxxxxxxxxxxxx
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxxxxxxxxxxxxxxxxxx
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxxxxxxxxxxxxxxxxxx
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxxxxxxxxxxxx
    NEXT_PUBLIC_FIREBASE_APP_ID=xxxxxxxxxxxxxxxxxxxx
    ```
    - `GOOGLE_SHEETS_ID`: ID dari spreadsheet Google yang digunakan sebagai database.
    - `GOOGLE_SERVICE_ACCOUNT_KEY`: Kunci service account Google dalam format JSON. Pastikan untuk meng-escape newline characters dengan benar (`\n`).

4.  **Run Development Server**
    ```bash
    pnpm dev
    ```
    Aplikasi akan berjalan di `http://localhost:3000`.

## Halaman Utama

- **`/`**: Homepage, menampilkan hero section, kelas yang akan datang, dan testimoni.
- **`/about-us`**: Halaman tentang Grazedu.
- **`/faq`**: Halaman berisi pertanyaan yang sering diajukan.
- **`/kelas`**: Menampilkan semua kelas yang aktif.
- **`/kelas/[slug]`**: Halaman detail untuk kelas tertentu, berisi deskripsi, silabus, dan tombol registrasi.
- **`/admin/login`**: Halaman login untuk admin.
- **`/admin/kelas`**: Dashboard admin untuk melihat daftar kelas.
- **`/admin/kelas/[id]/registrations`**: Halaman untuk melihat pendaftar di kelas tertentu.
- **`/evaluasi/[token]`**: Halaman untuk mengisi evaluasi setelah kelas selesai.

## Arsitektur Backend

### Struktur Firebase (Firestore)

Struktur database NoSQL di Firestore dirancang per kelas untuk mengelompokkan data terkait.

-   **`classes/{classId}`**: Dokumen yang menyimpan data detail untuk setiap kelas.
    -   **Fields**: `slug`, `title`, `description`, `price`, `status`, `createdAt`, dll. (Lihat interface `ClassData` di `lib/actions/classes.ts`).
-   **`classes/{classId}/registrations/{registrationId}`**: Sub-collection di dalam setiap dokumen kelas yang berisi data pendaftar.
    -   **Fields**: `name`, `email`, `whatsapp`, `status`, `createdAt`, dll. (Lihat interface `RegistrationData` di `lib/actions/registrations.ts`).

### API Routes

API Routes digunakan untuk proses otentikasi admin.

-   **`POST /api/admin/login`** (`app/api/admin/login/route.ts`)
    -   **Fungsi**: Menangani login admin.
    -   **Body Request**: `{ email: string, password: string }`.
    -   **Respons**: Jika berhasil, akan membuat sesi (session) dalam bentuk cookie HTTP-only dan me-redirect ke dashboard admin. Jika gagal, mengembalikan respons JSON dengan pesan error.

-   **`POST /api/admin/logout`** (`app/api/admin/logout/route.ts`)
    -   **Fungsi**: Menangani logout admin.
    -   **Respons**: Menghapus cookie sesi dan me-redirect ke halaman login.

### Server Actions

Server Actions digunakan untuk melakukan mutasi dan query data dari sisi server, dipanggil langsung dari komponen React (Server/Client Components).

-   **`lib/actions/classes.ts`**: Mengelola data kelas.
    -   `createClass(data)`: Membuat kelas baru.
    -   `getAdminClasses()`: Mengambil semua kelas untuk panel admin.
    -   `getPublicClasses()`: Mengambil kelas yang berstatus `publish` dan `closed` untuk publik.
    -   `getClassBySlug(slug)`: Mengambil satu kelas berdasarkan `slug` untuk halaman detail publik.
    -   `getAdminClassById(id)`: Mengambil satu kelas berdasarkan ID untuk form edit admin.
    -   `updateClass(id, data)`: Memperbarui data kelas.
    -   `deleteClass(id)`: Menghapus kelas.

-   **`lib/actions/registrations.ts`**: Mengelola data pendaftaran.
    -   `createRegistration(data)`: Membuat entri pendaftaran baru untuk sebuah kelas.
    -   `getRegistrationsByClassId(classId)`: Mengambil semua pendaftar untuk kelas tertentu.
    -   `checkEmailExists(classId, email)`: Memeriksa apakah sebuah email sudah terdaftar di kelas tertentu.

-   **`lib/actions/evaluations.ts`**: Mengelola data evaluasi (asumsi berdasarkan struktur).
    -   *Fungsi untuk membuat dan mengambil data evaluasi kelas.*

## Komponen Utama

- **`Navbar` (`components/Navbar.tsx`)**: Komponen navigasi utama.
- **`Footer` (`components/Footer.tsx`)**: Komponen footer.
- **`RegistrationForm` (`components/RegistrationForm.tsx`)**: Form pendaftaran untuk kelas.
- **`CountdownTimer` (`components/general/CountdownTimer.tsx`)**: Timer hitung mundur yang mungkin digunakan untuk promo atau pendaftaran.
- **Komponen UI (`components/ui/`)**: Berisi komponen-komponen dasar seperti `Button`, `Card`, `Input`, `Dialog`, yang di-generate dari Shadcn/UI.

## File Sensitif

Harap berhati-hati saat mengedit file-file berikut karena berisi logika inti atau konfigurasi sensitif:

- **`.env.local`**: Berisi semua kunci API dan kredensial. **JANGAN PERNAH** commit file ini ke repository.
- **`app/data/google-sheets.ts`**: Berisi logika untuk mengambil dan mem-format data dari Google Sheets. Perubahan di sini dapat mempengaruhi seluruh data kelas yang ditampilkan.
- **`lib/firebase/admin.ts`**: Konfigurasi sisi server untuk Firebase Admin.
- **`lib/actions/*.ts`**: Berisi server actions yang menangani logika backend seperti pendaftaran dan otentikasi.
- **`next.config.mjs`**: File konfigurasi Next.js.

## Catatan untuk Developer Baru

1.  **Data Source Utama**: Sumber data untuk kelas adalah Google Sheets. Untuk mengubah konten kelas (judul, deskripsi, jadwal), Anda perlu mengeditnya langsung di spreadsheet yang terhubung.
2.  **UI & Styling**: Proyek ini menggunakan TailwindCSS dan Shadcn/UI. Untuk menambahkan komponen UI baru, disarankan untuk menggunakan CLI dari Shadcn/UI (`pnpm dlx shadcn-ui@latest add [nama-komponen]`).
3.  **Fetching Data**: Sebagian besar data di-fetch di sisi server (Server Components) untuk performa yang lebih baik. Lihat file-file `page.tsx` untuk contoh implementasinya.
4.  **Server Actions**: Interaksi yang membutuhkan komunikasi ke server (seperti submit form) menggunakan Server Actions. Logikanya ada di `lib/actions/`.
5.  **Environment Variables**: Pastikan file `.env.local` Anda sudah terisi dengan benar. Tanpa itu, aplikasi tidak akan bisa mengambil data kelas atau terhubung ke Firebase.
