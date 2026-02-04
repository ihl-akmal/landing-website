import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function SkCommitmentFeePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <div className="pt-28 pb-12 bg-gradient-to-br from-pink-50 via-white to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-poppins">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-primary font-semibold">
              Commitment Fee Program Women's Career Lab - Project Based Internship | Social Media & Content Strategist
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 leading-relaxed space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">1. Ketentuan Umum</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Commitment Fee sebesar Rp59.000 dibayarkan sebagai bukti keseriusan peserta untuk mengikuti program Social Media & Content Strategist selama 10 minggu.</li>
                <li>Kuota program ini sangat terbatas, hanya untuk 5 peserta terpilih yang telah menyelesaikan pembayaran.</li>
                <li>Pendaftaran akan otomatis ditutup setelah kuota 5 orang terpenuhi.</li>
                <li>Peserta dapat upgrade ke paket Career-Ready pada pertengahan program hanya cukup dengan membayar sisa kekurangan biaya programnya.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">2. Mekanisme Pengembalian (Refund)</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Pengembalian 100%</strong>: Commitment fee akan dikembalikan secara penuh kepada peserta di akhir program, <strong>APABILA</strong> peserta memenuhi syarat kelulusan (kehadiran minimal 75% dan menyelesaikan proyek internal 2 minggu).
                </li>
                <li>
                  <strong>Hangus (Non-Refundable)</strong>: Commitment fee dinyatakan hangus dan tidak dapat dikembalikan apabila:
                  <ul className="list-[circle] pl-6 mt-2 space-y-1">
                    <li>Peserta mengundurkan diri setelah pembayaran dilakukan dengan alasan apa pun.</li>
                    <li>Peserta tidak memenuhi standar kehadiran dan tugas yang disepakati di awal program.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">3. Komitmen Peserta</h2>
              <p>Dengan membayar commitment fee, peserta menyatakan sanggup untuk:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Mengikuti jadwal pertemuan yang telah ditentukan (Online).</li>
                <li>Belajar secara kolaboratif di sesi materi intensif.</li>
                <li>Menjaga etika berkomunikasi baik dengan mentor dan sesama peserta.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">4. Hak Peserta</h2>
              <p>Peserta yang telah membayar dan terdaftar berhak mendapatkan:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Akses penuh ke modul pembelajaran dan pendampingan program Women's Career Lab</li>
                <li>Community Grup (Reflective mentoring, fun bonding night)</li>
                <li>Review tugas</li>
                <li>Sertifikat penyelesaian program (only platform)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">5. Diskualifikasi</h2>
              <p>WCL berhak mendiskualifikasi peserta di tengah program jika ditemukan pelanggaran kode etik berat atau tindakan yang merugikan nama baik WCL, tanpa adanya pengembalian commitment fee.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}