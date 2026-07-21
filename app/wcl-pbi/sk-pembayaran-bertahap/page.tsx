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
              Skema Pembayaran Bertahap Program Women's Career Lab (WCL) - Project Based Internship Batch 3
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
                <li>Skema pembayaran bertahap tersedia khusus untuk paket Career-Ready Women's Career Lab Batch 3.</li>
                <li>Pembayaran bertahap dibagi menjadi 2 tahap tanpa bunga.</li>
                <li>Skema pembayaran bertahap hanya berlaku untuk pendaftaran sebelum 24 Juli 2026.</li>
                <li>Fee channel yang tertera di form pembayaran merupakan biaya transaksi yang dikenakan oleh kanal pembayaran, bukan bagian dari bunga.</li>
                <li>Pendaftar dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan ini.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">2. Skema Pembayaran</h2>
              <p className="font-bold">Biaya program keseluruhan senilai Rp599.000 yang dapat dibayar melalui 2 tahap:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Tahap 1: Sebesar Rp300.000 saat pendaftaran</li>
                <li>Tahap 2: Sebesar Rp299.000 sebelum fase real-project intenship dimulai (Perkiraan akhir September).</li>
                
                  
        
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">3. Hak Peserta</h2>
              <p className="font-bold">Setelah tahap 1 dibayarkan:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Seat batch 3 resmi diamankan.</li>
                <li>Akses 7x sesi intensif.</li>
                <li>Feedback tugas selama sesi intensif.</li>
              </ul>
              <p className="mt-4 font-bold">Setelah tahap 2 dibayarkan:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Akses real-project internship di UMKM/Agency partner</li>
                <li>Akses e-course: Interview Strategy & Linkedin Optimization.</li>
                <li>Sertifikat penyelesaian program 3 pilar validation (Platform + HR Practitioner + Partner UMKM) dengan syarat tetap menyelesaikan program hingga akhir.</li>
                <li>Konsultasi karir 1-on-1 dengan Career Mentor</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">4. Komitmen Peserta</h2>
              
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Berkomitmen melunasi tahap 2 sebelum fase magang dimulai (Minimal H-14 sebelum proses initial placement magang)</li>
                <li>Memahami bahwa akses placement dan sertifikat penyelesaian program akan diberikan setelah pelunasan tahap 2.</li>
                <li>Bersedia kehilangan hak placement apabila tidak melunasi tahap 2 sesuai batas waktu.</li>
                <li>Tidak dapat meminta pengembalian dana (refund) pembayaran tahap 1 apabila membatalkan keikutsertaan.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">5. Ketentuan Pembatalan</h2>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Pembayaran tahap 1 yang sudah dibayarkan tidak dapat dikembalikan dalam kondisi apapun.</li>
                <li>Apabila peserta tidak melunasi tahap 2 sesuai batas waktu, peserta tidak mendapat hak/akses real project internship, akses e-course, sertifkat penyelesaian program, dan konsultasi karir 1-on-1.</li>
                <li>Grazedu berhak memberikan seat placement kepada peserta lain apabila pelunasan tidak dilakukan tepat waktu.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">6. Cara Melakukan Pembayaran Bertahap</h2>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Klik link yang tertera dibawah paket di halaman bidang program WCL.</li>
                <li>Setelah diarahkan ke halaman pembayaran, silahkan dapat mengisi form.</li>
                <li>Setelah pembayaran berhasil, cek email untuk panduan informasi berikutnya.</li>
              </ul>
            </div>
            <p>*Apabila telah membaca SK, silahkan kembali ke form pembayaran dan centang "Saya setuju dengan Syarat dan Ketentuan"</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}