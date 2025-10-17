import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">Kelas Tidak Ditemukan</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Sepertinya kelas yang kamu cari sudah tidak aktif atau telah ditutup.  
        Yuk, jelajahi kelas lain yang masih tersedia!
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
