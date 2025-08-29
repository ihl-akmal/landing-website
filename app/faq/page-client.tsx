"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react"
import Link from "next/link"
import NavbarCustom from "@/components/NavbarCustom"
import Footer from "@/components/Footer"

const FAQPageClient = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Apa itu Grazedu?",
      answer: "Grazedu adalah platform pengembangan diri dan karir khusus untuk perempuan muda di Indonesia. Kami menyediakan berbagai program seperti Short Class, Intensive Class, dan Magang Mandiri untuk membantu perempuan mencapai potensi maksimal dalam karir profesional maupun pertumbuhan pribadi."
    },
    {
      question: "Program apa saja yang tersedia di Grazedu?",
      answer: "Grazedu menyediakan 3 program utama: 1) Short Class - kelas singkat untuk wawasan praktis self improvement & soft skills, 2) Intensive Class - kelas mendalam dengan materi terstruktur dan mentor supportif, 3) Magang Mandiri - program magang untuk pengalaman praktis dan konversi SKS."
    },
    {
      question: "Siapa target audience Grazedu?",
      answer: "Grazedu ditujukan untuk perempuan muda di Indonesia yang ingin mengembangkan diri dan karir mereka. Program kami cocok untuk mahasiswa, fresh graduate, dan profesional muda yang ingin meningkatkan soft skills dan karir mereka."
    },
    {
      question: "Bagaimana cara mendaftar program di Grazedu?",
      answer: "Anda dapat mendaftar melalui link yang tersedia di setiap program. Untuk informasi lebih lanjut, kamu juga bisa menghubungi tim kami melalui Whatsapp atau Instagram."
    },
    {
      question: "Apakah program Grazedu berbayar?",
      answer: "Ya, program Grazedu berbayar dengan harga yang terjangkau. Setiap program memiliki harga yang berbeda sesuai dengan durasi dan materi yang diberikan. Kamu dapat melihat detail harga di halaman pendaftaran masing-masing program."
    },
    {
      question: "Apakah ada sertifikat setelah menyelesaikan program?",
      answer: "Ya, peserta yang menyelesaikan program di Grazedu akan mendapatkan sertifikat yang dapat digunakan untuk melengkapi CV dan portofolio profesionalmu."
    },
    {
      question: "Berapa lama durasi program di Grazedu?",
      answer: "Durasi program bervariasi: Short Class biasanya 2-3 jam, Intensive Class bisa 4-8 minggu, dan Magang Mandiri berlangsung selama 1-3 bulan tergantung program yang dipilih."
    },
    {
      question: "Bagaimana sistem pembelajaran di Grazedu?",
      answer: "Sistem pembelajaran di Grazedu menggunakan metode online dengan platform Zoom. Materi disampaikan secara interaktif dengan mentor yang berpengalaman, dilengkapi dengan sesi tanya jawab dan praktik langsung."
    },
    {
      question: "Apa yang bikin belajar di Grazedu itu beda?",
      answer: "Gaya belajar di Grazedu tidak hanya fokus pada pembelajaran teknis, tetapi juga menyentuh hambatan internal yang sering dialami perempuan, sehingga setiap kelas di Grazedu kami upayakan menggunakan pendekatan empatik, feedback hangat dan inklusif."
    },  
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <NavbarCustom announcementVisible={false} />
      
      {/* Header Section */}
      <div className="pt-20 pb-12 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Kembali ke Beranda</span>
          </Link>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-poppins">
              Pertanyaan yang <span className="text-primary">Sering Diajukan</span> ❓
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang Grazedu dan program-program kami
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-pink-50 transition-colors duration-200"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 font-poppins pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-primary flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-pink-100">
                    <p className="text-gray-600 leading-relaxed pt-4 text-base lg:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">
              Masih Ada Pertanyaan? 🤔
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Tim customer service kami siap membantu menjawab pertanyaan Anda
            </p>
            <a
              href="https://wa.me/6282340622274"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md"
            >
              Konsultasi Gratis via WhatsApp! 💕
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FAQPageClient
