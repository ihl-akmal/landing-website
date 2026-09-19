"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CountdownTimer from "@/components/general/CountdownTimer"
import { useState } from "react"
import Image from "next/image";
import { ChevronDown, Gamepad2, CheckCircle, Users, BookOpen, Zap, MessageSquare, Calendar, Instagram, Linkedin} from "lucide-react"




export default function LnDPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  // const [activePackage, setActivePackage] = useState<"fast-track" | "career-ready">("fast-track")

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

     // --- Logika Flash Sale -- -
        const flashSaleEndDate = new Date("2026-09-18T23:59:59");
        const isFlashSaleActive = new Date() < flashSaleEndDate;
        // ------------------------
    
      // Kurikulum by Week
      const curriculum = [
        {
          week: "Sesi 1",
          title: "Fundamental of Learning Development",
          topics: [
            "Mengenal Profesi & Career Path di Bidang HR Learning & Development", 
            "Business Mindset dalam L&D: Mengapa Perusahaan Berinvestasi pada Learning",
            "End-to-end Learning Development Process", 
            "Deliverables of Learning Development: TNA Report, Learning Blueprint, Session Plan dst",
            ],
          hours: 8,
        },
        {
          week: "Sesi 2",
          title: "Training Need Analysis",
          topics: [
            "Business Problem vs Learning Problem: Membedakan permasalahan bisnis dengan permasalahan kompetensi yang dapat diselesaikan melalui pembelajaran",
            "Competency Gap Analysis",
            "Training Need Analysis",
            "Data Collection",
            "Prioritizing Learning Needs: Menentukan prioritas kompetensi yang perlu dikembangkan berdasarkan dampaknya terhadap tujuan bisnis.",
          ],
          hours: 8,
        },
        {
          week: "Sesi 3",
          title: "Curriculum Design & Learning Journey",
          topics: [
            "Adult Learning Principles",
            "Learning Objective & Outcomes",
            "Curriculum Planning", 
            "Learning Journey",
            "Memilih Metode Pembelajaran",
          ],
          hours: 8,
        },
        {
          week: "Sesi 4",
          title: "Learning Content & Development",
          topics: [
            "Session Plan: Menyusun alur pembelajaran yang mencakup pembukaan, aktivitas inti, refleksi, dan penutup",
            "Learning Activities: Merancang aktivitas pembelajaran",
            "Assessment Design",
            "Facilitator Guide & Training Evaluation",
          ],
          hours: 8,
          
        },
        {
          week: "Sesi 5",
          title: "Portfolio Building",
          topics: [
            "Cara Menyusun Struktur Portfolio yang Memikat dan Meyakinkan",
            "Project Documentation: Belajar cara menampilkan hasil case study ke dalam format portfolio yang rapi, profesional, dan mudah dipahami oleh recruiter.",
            
            
            ],
          hours: 8,
          // Simulasi Week yang digembok untuk Fast-Track
        },
        {
          week: "Capstone Project",
          title: "Merancang Solusi Training dari Masalah Nyata di Lapangan",
          topics: [
            "Mengerjakan 1 project industry case secara end-to-end, mulai dari analisis masalah bisnis, merancang modul training, hingga menyusunnya jadi satu Case Study Report yang merangkum seluruh proses belajarmu.",
            
            
            ],
          hours: 8,
          // Simulasi Week yang digembok untuk Fast-Track
        },
        
      ]
    
      // Tools
      const tools = [
        
        {
          name: "Google Docs",
          logo: "/google-docs.svg",
          width: "w-21",
          justImage: true
        },
        {
          name: "Google Spreadsheet",
          logo: "/google-spreadsheet.svg",
          width: "w-21",
          justImage: true
        },
        {
          name: "Google Slides",
          logo: "/google-slides.svg",
          width: "w-21",
          justImage: true,
          
        },
        {
          name: "ChatGPT",
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
          width: "w-8",
          justImage: false,
          text: "ChatGPT",
          fontStyle: "font-bold text-[20px] ml-2 text-black tracking-tight"
        },
        {
          name: "Gemini",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/500px-Google_Gemini_logo.svg.png",
          width: "w-18",
          justImage: false,
          // text: "Gemini",
          fontStyle: "font-normal text-[22px] ml-1.5 text-[#5f6368] tracking-tight"
        },
        
        
        
        
      ]
    
      // Learning Methods
      const learningMethods = [
        {
          title: "Intimate Learning",
          icon: BookOpen,
          description:
            "Pendekatan pembelajaran dengan jumlah peserta yang terbatas untuk menciptakan suasana lebih dekat dan memungkinkan kamu untuk aktif tanpa merasa tenggalam.",
          color: "from-blue-400 to-blue-600",
        },
        {
          title: "Low Cognitive Load",
          icon: Gamepad2,
          description:
            "Ritme belajar yang ringan dan dirancang biar tetap seimbang dengan kesibukanmu sehari-hari.",
          color: "from-pink-400 to-pink-600",
        },
        {
          title: "Feedback Oriented",
          icon: MessageSquare,
          description:
            "Pembelajaran yang juga berfokus pada feedback, bukan penilaian semata, agar setiap peserta mendapatkan insight perbaikan yang lebih mendalam.",
          color: "from-purple-400 to-purple-600",
        },
      ]
    
      // Mentors (2 people)
      const mentors = [
        {
          name: "Novilia Ayu Kusuma,S.Psi., CHRP.",
          title: "HR Practitioner",
          // company: "Shopee Indonesia",
          image:
            "/novilia-ayu.jpg",
          bio: "14+ tahun berkecimpung di dunia Human Capital, dengan pengalaman menghadapi berbagai ratusan kasus, tantangan, dan dinamika dibaliknya. Dapatkan semua ilmunya untuk membantumu berkembang menjadi professional L&D hanya dalam 5 sesi belajar.",
          specialties: ["Human Capital Strategy", "Learning & Development", "Talent & Performance Management"],
          label: "Expert Mentor",
          imagePosition: "center 20%",
          achievements: [
            { title: "", description: "Merancang Organization Development & Learning Strategy 1.500+ karyawan di perusahaan infrastruktur telekomunikasi nasional." },
            { title: "", description: "Mengelola program Employee Engagement dan meraih Engagement Score 96%." },
            { title: "", description: "Dipercaya mengelola investasi Learning & Development senilai miliaran rupiah untuk untuk membangun kapabilitas SDM perusahaan." },
          ],
          instagram :"https://instagram.com/ayunovilia",
          linkedin: "https://www.linkedin.com/in/novilia-ayu-kusuma-chrp-b669a669/",
        },
        
      
        {
          name: "Dinar Lathifah, S.A.B, CPS, CDTEE",
          title: "GenZ Career Mentor",
          // company: "Manufacture Industry",
          image:
            "/dinar-lathifah.jpg",
          bio: "Career & People Development Practitioner dengan pengalaman mendampingi 5.000+ learners yang akan membantumu menavigasi arah karir lebih percaya diri dan bermakna.",
          specialties: ["Career Coaching","Linkedin Profile Optimization", "Interview Strategy","CV Review"],
          label: "Career Mentor",
          imagePosition: "center 20%",
          achievements: [
            { title: "", description: "Top 20 LinkedIn Influencers Indonesia yang aktif membekali GenZ dalam hal persiapan karir melalui konten yang relatable dan actionable." },
            { title: "", description: "Top 10 Voices in HR, Leadership & People Strategy in Indonesia 2026" },
            { title: "", description: "Linkedin score 86/100 dengan 22k+ followers di Linkedin" },
          ],
          instagram :"https://instagram.com/dinarlala",
          linkedin: "https://www.linkedin.com/in/dinar-lathifah/",
        },
        
      ]
    
      // Jadwal Pembelajaran
      const scheduleData = [
        { label: "Durasi", value: "1 bulan" },
        { label: "Frekuensi belajar", value: "1x per minggu" },
        { label: "Waktu kelas", value: "Setiap Rabu malam 19.30-21.30 WIB" },
        { label: "Mulai belajar", value: "Rabu, 7 Oktober 2026" },
        
      ];
    
      // Timeline (Week by week)
      const timeline = [
        {
          week: 1,
          title: "Registration",
          description: "Periode pendaftaran untuk mengamankan seat.",
        },
        {
          week: 2,
          title: "On-Boarding",
          description: "Sesi pengenalan ekosistem belajar, tools, dan community rules agar setiap student dapat belajar dengan rasa aman. ",
        },
       
        {
          week: 3,
          title: "Sesi Pembelajaran Intensif",
          description: "Rangkaian kelas interaktif yang berfokus pada pendalaman materi.",
        },
        
        {
          week: 4,
          title: "Capstone Project",
          description: "Sesi mengimplementasikan materi yang telah dipelajari melalui study case project",
        },
        {
          week: 5,
          title: "Final Presentation & Graduation",
          description: "Pemaparan hasil Capstone Project di-depan mentor untuk mendapatkan masukan improvement serta caremony penutupan program.",
        },
        {
          week: 5,
          title: "Distribusi Sertifikat & 1-on-1 Career Consultation",
          description: "Pemberian sertifikat completion bagi yang memenuhi standar kelulusan, diikuti dengan sesi konsultasi 1-on-1 dengan Career Mentor untuk mendapatkan guidance, peningkatan CV, maupun persiapan lainnya menuju dunia kerja.",
        },
        
      ]
    
      // Learning Story
      const testimonials = [
          {
              name: "Naufa Zelda Aurelia",
              role: "Mahasiswa",
              avatar: "/path-to-avatar-1.jpg",
              content: "JUJURRRR aku bener-bener dapet ilmu baru pas sesi ini. Jadi kaya, 'oh selama ini kita scroll tuh di belakang layarnya kayak gini ya wkwk'. Sukses terus untuk tim Grazedu, and hopefully see you in the next amazing classs🤪✌",
              stars: 5,
          },
          {
              name: "Nina Widiya Nengsih",
              role: "Mahasiswa",
              avatar: "/path-to-avatar-2.jpg",
              content: "Aku jadi paham kalo visual brand tentang warna, font itu penting banget buat brand kita padahal dulu aku ngasal trs 😭😭",
              stars: 5,
          },
          {
              name: "Khoiru Nisa",
              role: "Mahasiswa",
              avatar: "/path-to-avatar-3.jpg",
              content: "Banyaakk banget ilmunya! Aku kira bidang ini tuh cuma sekadar bikin konten, tapi ternyata semua hal itu ada ilmunya. So far aku suka dengan program Grazedu yang ini, karena emang menarik dan sangat-sangat berguna. Thank you untuk semua yang terlibat dalam program ini, kalian beneran keren! <3",
              stars: 5,
          },
      ];
    
      
    
   
    const COMMUNITY_PHOTOS = [
      {
        src: "/cuplikan-wcl.png",
        alt: "Sesi belajar WCL",
        className: "w-[26%] md:w-[30%]",
        aspect: "aspect-[4/5]",
        rotate: -6,
        z: 1,
      },
      {
        src: "/wcl-session.png",
        alt: "Sesi belajar WCL",
        className: "w-[58%] md:w-[42%] -mx-4 sm:-mx-6 md:-mx-4 mb-[6%] md:mb-[6%]",
        aspect: "aspect-[3/2]",
        rotate: 6,
        z: 3,
      },
      {
        src: "/hero-wcl.png",
        alt: "Sesi belajar WCL",
        className: "w-[20%] md:w-[22%] self-start mt-[-5%]",
        aspect: "aspect-[4/5]",
        rotate: -3,
    z: 2,
      },
    ];
    
      // Schedule & Pricing
      const pricingPackages = [
        
        {
          name: "Career-Ready",
          price: isFlashSaleActive ? "Rp 549.000" : "Rp 489.000", // Harga dinamis
          originalPrice: isFlashSaleActive ? "Rp 549.000" : "Rp 549.000", // Harga coret dinamis
          weeklyPrice: "Lebih hemat! Sekitar 6 ribuan/hari",
          duration: "3 bulan pembelajaran",
          href: isFlashSaleActive 
                ? "https://grazedu.myr.id/pl/wcl-learning-dev"
                : "https://grazedu.myr.id/pl/last-call-wcl-hr-learning-development", // Link dinamis
          isPopular: true,
          color: "from-primary to-primary-light",
          benefits: [
            "5x sesi intensif bareng Expert Mentor",  
            "Akses kelas & recording selamanya",
            "Industry case project untuk portfolio",
            "Community support sesama perempuan: no pressure & safe space.",
            "Feedback setiap tugas untuk improve skill",
            "Pendampingan karir 1-on-1 dengan Career Mentor untuk membantu kamu menyiapkan apply magang/kerja",
            "Sertifikat Completion",
          ],
        },
      ]
    
      // FAQ
      const faqs = [
        {
          question: "Kenapa program ini berbayar?",
          answer:
            "Karena program ini dirancang sebagai ruang belajar terkurasi dan berpendampingan. Biaya digunakan untuk memastikan kualitas materi, pendampingan mentor, validasi sertifikat, serta pengalaman project yang nyata, agar peserta benar-benar belajar, bertumbuh, dan pulang dengan skill serta portofolio yang bernilai.",
        },
        {
          question: "Apakah program ini betul diperuntukkan perempuan?",
          answer:
            "Yes, betul! Program dirancang khusus untuk perempuan, agar setiap perempuan memiliki kesempatan yang sama untuk berdaya melalui karir. ",
        },
        {
          question: "Apakah format Women's Career Lab (WCL) mirip seperti bootcamp? Jika iya, apa perbedaan dengan bootcamp lain?",
          answer:
            "Secara format, WCL mirip seperti bootacmp. Namun perbedaannya terletak pada jumlah peserta per batch yang dibuat intimate, pendekatan women-centric, dari cara mengajar, hingga ritme belajar.  Tujuannya biar kamu belajar di ruang yang lebih nyaman dan suportif, terutama kalau kamu baru mulai dari nol.",
        },
        
        
        {
          question: "Apakah WCL terbuka untuk teman-teman dengan kebutuhan khusus (disabilitas)?",
          answer:
            "Terbuka ya. WCL didesain agar inklusif, termasuk untuk teman-teman dengan kebutuhan khusus. Kalau kamu butuh penyesuaian tertentu silahkan nanti setelah melakukan pendaftaran dapat menghubungi tim Grazedu agar kami dapat menyiapkan yang terbaik untuk kamu.",
        },
        
        {
          question: "Kebetulan aku punya pekerjaan/kuliah lain, kalau jadwalnya bentrok gimana?",
          answer:
            "Program ini full online dan didesain Low Cognitive Load. Kalau kamu ketinggalan kelas, kamu bisa menonton rekaman kelas, lalu bisa bertanya dengan mentor, ataupun kita bisa fasilitasi kalau mau diskusi bareng teman yang lain.",
        },
        {
          question: "Tools apa saja yang perlu aku siapin",
          answer:
            "Cukup laptop/smartphone dan internet yang stabil",
        },
    
        {
          question: "Apakah materinya ramah untuk pemula?",
          answer:
            "Yaps, materinya telah di-desain ramah untuk pemula sehingga tidak menghalangi kamu untuk belajar.",
        },
        
      ]
    
      return (
        <div className="min-h-screen bg-white">
          <Navbar />
    
          {/* Hero Section */}
          <section
            className="relative pt-32 pb-24 bg-gray-900"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1520052205864-92d242b3a76b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed"
            }}
          >
            {/* Soft Sunset Pink Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-200/20 via-pink-700/60 to-gray-900/90"></div>
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-white mb-8 font-medium">
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
                <span>•</span>
                <a href="/wcl-pbi" className="hover:text-white transition">
                  WCL-PBI
                </a>
                <span>•</span>
                <span className="text-white font-extrabold">HR Learning & Development</span>
              </div>
    
              {/* Title & Meta */}
              <div className="mb-10 max-w-3xl">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
                Mau Berkarir Sebagai HR Learning & Development Tapi Belum Punya Skill dan Portfolionya?
                </h1>
                <p className="text-lg text-white mb-8 leading-relaxed">
                Belajar intensif 5 sesi + studi kasus nyata dari industri. Pulang bawa 1 Case Study Report yang siap dipamerin sebagai portfolio pertamamu di bidang HR L&D.
                </p>
                <div className="flex items-center gap-3 sm:gap-6 text-gray-300 font-medium text-xs sm:text-base">
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400 flex-shrink-0" />
                    <span>Intimate session</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400 flex-shrink-0" />
                    <span>5x sesi</span>
                  </div>
                </div>
              </div>
    
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="bg-gradient-to-r from-primary to-pink-600 text-white px-8 py-3.5 rounded-lg font-bold hover:shadow-lg transition-all duration-300">
                  Daftar Sekarang
                </a>
                <a href="#kurikulum" onClick={(e) => handleScroll(e, 'kurikulum')} className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                  <span>▶</span> Lihat Kurikulum
                </a>
              </div>
            </div>
          </section>
    
          {/* Program Overview */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Tentang Program</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
              Kuasai skill dasar HR Learning & Development lewat studi kasus industri nyata melalui Women's Career Lab (WCL).
                </p>
                <p>
                Kamu akan dipandu langsung sama Expert Mentor dengan berpengalaman lebih dari 14 tahun yang sudah melewati ratusan situasi, keputusan, keberhasilan,kegagalan, dan pembelajaran yang akan memberimu perspektif yang kaya untuk memulai merintis karir sebagai Learning & Development dari nol.
                </p>
                <p>
                <span className="font-bold">Dan yang paling penting kamu belajar bareng sesama perempuan lainnya di ruang yang aman dan saling mendukung.</span>
                </p>
              </div>
              
              {/* Community Photo Collage */}
{/* Desainer: ganti src di array COMMUNITY_PHOTOS. Foto 1 & 3 rasio 4:5 (portrait), foto 2 rasio 3:2 (landscape). Frame, shadow, rotate otomatis dari code. */}
                <div className="w-full mt-12">
                  <div className="flex items-end justify-between gap-3 sm:gap-5">
                    {COMMUNITY_PHOTOS.map((photo, i) => (
                      <div
                        key={i}
                        className={`relative bg-white border border-gray-200 rounded-lg shadow-md p-1.5 pb-3.5 ${photo.className}`}
                        style={{ transform: `rotate(${photo.rotate}deg)`, zIndex: photo.z }}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className={`w-full object-cover rounded ${photo.aspect}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </section>
    
          {/* Kurikulum */}
          <section id="kurikulum" className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kurikulum Pembelajaran</h2>
    
              
    
              {/* Curriculum Cards */}
              <div className="space-y-4">
                {curriculum.map((week, index) => {
                  const isLocked = false;
    
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl border-2 border-gray-200 hover:border-primary overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                        className="w-full px-6 py-5 flex items-center justify-between transition-colors hover:bg-gray-50"
                      >
                        <div className="text-left flex items-start gap-3">
                          {(week as any).isPremiumWeek && <span className="h-2 w-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>}
                          <div>
                            <p className="text-sm font-semibold mb-1 text-primary">{week.week}</p>
                            <h3 className="text-lg font-bold text-gray-900">{week.title}</h3>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {(week as any).isPremiumWeek && (
                            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200 uppercase tracking-widest whitespace-nowrap shadow-sm mb-1">
                              ⭐ Include
                            </span>
                          )}
                          <ChevronDown
                            className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${(week as any).isPremiumWeek ? "text-amber-500" : "text-primary"} ${openFaqIndex === index ? "transform rotate-180" : ""}`}
                          />
                        </div>
                      </button>
                      {openFaqIndex === index && (
                        <div className="px-6 py-5 bg-gray-50 border-t-2 border-gray-200">
                          <div className="flex flex-col gap-4">
                            {week.topics.map((topicItem, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${(week as any).isPremiumWeek ? "text-amber-500" : "text-primary"}`} />
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                  <span className={`text-base ${(week as any).isPremiumWeek ? "text-gray-900" : "text-gray-700"}`}>
                                    {topicItem as string}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
    
          {/* Tools */}
          <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tools yang Kamu Pelajari</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-sm hover:border-gray-300 transition-all duration-300 min-h-[100px]"
                  >
                    {tool.justImage ? (
                      <img src={tool.logo} alt={tool.name} className={`${tool.width} h-auto object-contain`} />
                    ) : (
                      <div className="flex items-center justify-center">
                        <img src={tool.logo} alt={tool.name} className={`${tool.width} h-auto object-contain`} />
                        {tool.text && (
                          <span className={`whitespace-pre-line ${tool.fontStyle}`}>{tool.text}</span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Learning Methods */}
          <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Metode Pembelajaran</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {learningMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
                    >
                      <div
                        className={`bg-gradient-to-br ${method.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{method.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
    
          {/* Mentors */}
          <section className="py-16 bg-gray-50">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">The Mentors</h2>
    <p className="text-gray-600 mb-12 text-left">Dibimbing langsung sama praktisi perempuan yang siap bantu kamu grow.</p>
    <div className="grid gap-8">
      {mentors.map((mentor, index) => (
        <div
          key={index}
          className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
        >
          {/* Kolom kiri: foto */}
          <div className="relative w-full md:w-64 h-64 md:h-auto flex-shrink-0 bg-gray-100">
            <img
              src={(mentor as any).image || "/placeholder.svg"}
              alt={(mentor as any).name}
              className="w-full h-full object-cover"
              style={{ objectPosition: (mentor as any).imagePosition || "center" }}
            />
            {(mentor as any).label && (
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                  {(mentor as any).label}
                </span>
              </div>
            )}
          </div>

          {/* Kolom kanan: deskripsi & pencapaian */}
          <div className="p-6 flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
            <p className="text-primary font-semibold mb-3">{mentor.title}</p>

            <p className="text-gray-700 text-sm mb-4">{mentor.bio}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {mentor.specialties.map((spec, idx) => (
                <span
                  key={idx}
                  className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {spec}
                </span>
              ))}
            </div>

            {(mentor as any).achievements && (mentor as any).achievements.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Pencapaian
                </p>
                {(mentor as any).achievements.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {((mentor as any).instagram || (mentor as any).linkedin) && (
              <div className="flex gap-3 mt-4 pt-4">
                {(mentor as any).instagram && (
                  <a
                    href={(mentor as any).instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label={`Instagram ${mentor.name}`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {(mentor as any).linkedin && (
                  <a
                    href={(mentor as any).linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label={`LinkedIn ${mentor.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}          
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    
          {/* Jadwal Pembelajaran */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">Jadwal Pembelajaran</h2>
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-primary text-white p-6 text-center">
                    <h3 className="text-2xl font-bold">HR Learning & Development</h3>
                    <p className="opacity-90">Oktober-November 2026</p>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {scheduleData.map((row, index) => (
                      <div key={index} className="grid grid-cols-3">
                        <div className="col-span-1 p-4 font-semibold text-gray-800 bg-gray-50 ">{row.label}</div>
                        <div className="col-span-2 p-4 text-gray-600">{row.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* Timeline */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Program Phase</h2>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                        {item.week}
                      </div>
                      {index !== timeline.length - 1 && <div className="w-1 h-20 bg-primary/30 mt-2"></div>}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          
    
          {/* Cerita Mereka */}
          {/* <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Cerita Transformasi Mereka</h2>
              <p className="text-gray-600 mb-12 text-center">Dari yang pernah ditolak, sampai bisa dipercaya, dan mampu buktikan multi-peran yang luar biasa. </p>
              <div className="grid md:grid-cols-3 gap-8">
                {ceritaMereka.map((cerita, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                    <div className="relative w-full h-64 bg-gray-100">
                      <img src={cerita.image} alt={cerita.name} className="w-full h-full object-cover" />
                      {cerita.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-white text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                            {cerita.badge}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900">{(cerita as any).name}</h3>
                      <p className="text-sm text-gray-500 mb-4">{(cerita as any).status}</p>
                      <a href={(cerita as any).link} target="_blank" className="text-primary font-semibold hover:underline mt-auto">
                        Lihat Cerita →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section> */}
    
          {/* Portfolio */}
            {/* <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Real Project dengan UMKM</h2>
                    <p className="text-gray-600 mb-12 text-center"> Hasil kerja nyata yang bisa dibawa ke meja recruiter.</p>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full"
                        >
                        <CarouselContent>
                            {portfolio.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                                <div className="p-1">
                                <Card>
                                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                    <div className="relative w-full h-48 bg-gray-100">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 mb-4">{item.description}</p>
                                    </div>
                                    <a href={item.link} target="_blank" className="text-primary font-semibold hover:underline">
                                        Lihat Portofolio →
                                    </a>
                                </div>
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        
                        <CarouselDots />
                        </Carousel>
                </div>
            </section> */}
    
          {/* Learning Story */}
          {/* <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Apa Kata Alumni WCL?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                    <div className="p-6 flex-grow">
                      <div className="flex items-center mb-4">
                        
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{testimonial.content}</p>
                    </div>
                    <div className="bg-gray-100 p-4 flex justify-end items-center">
                        <div className="flex items-center">
                            {[...Array(testimonial.stars)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section> */}

<section className="py-16 sm:py-24 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-left max-w-3xl mb-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">
        Sertifikat yang Bisa Kamu Lampirkan di CV
      </h2>
      <p className="text-gray-600 leading-relaxed">
      Sertifikat dilengkapi final score tiap unit kompetensi yang telah terverifikasi dan valid melalui website Grazedu.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative w-full aspect-[297/210] rounded-lg shadow-2xl overflow-hidden">
        <Image
          src="/ex-sertifwcl-lnd.jpg"
          alt="Contoh Sertifikat - Halaman Depan"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-full aspect-[297/210] rounded-lg shadow-2xl overflow-hidden">
        <Image
          src="/ex-sertifwcl-lnd-competency.jpg"
          alt="Contoh Sertifikat - Transkrip Kompetensi"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</section>
    
          {/* Schedule & Pricing */}
          <section id="pricing" className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Investasi Program</h2>
              <p className="text-gray-600 mb-12 text-center">Investasi sekali untuk jemput peluang berkali-kali.</p>
    
              <div className="grid grid-cols-1 justify-items-center">
                {pricingPackages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`rounded-xl overflow-hidden border-2 transition-all duration-300 relative ${
                      pkg.isPopular
                        ? "border-primary bg-gradient-to-br from-primary/5 to-pink-50 shadow-lg scale-105 md:scale-100"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    {pkg.isPopular && isFlashSaleActive ? (
                        <CountdownTimer 
                            targetDate="2026-09-18T23:59:59"
                            className="bg-primary text-white text-center py-2 text-sm font-semibold"
                        />
                      ) : pkg.isPopular ? (
                        <div className="bg-primary text-white text-center py-2 text-sm font-semibold">
                            LAST CALL UNTUK 1 SEAT TERAKHIR!
                        </div>
                    ) : (
                    <div className="bg-gray-500 text-white text-center py-2 text-sm font-semibold">
                            Opsi belajar kilat & hemat (Terbatas untuk 5 orang)
                        </div>
                    )}
                    <div className="p-8 w-full max-w-md">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                      <div className="mb-1">
                        {(pkg as any).originalPrice && (
                          <p className="text-sm text-gray-400">
                            <span className="line-through">{(pkg as any).originalPrice}</span>
                            {/* <span>(harga normal setelah flash sale)</span> */}
                          </p>
                        )}
                        <div className="flex items-baseline gap-2">
                          <p className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent mb-6">
                            {pkg.price}
                          </p>
                         
                        </div>
                      </div>
                      {/* <p className="text-gray-600 mb-6 text-sm">{pkg.weeklyPrice}</p> */}
                      {/* opacity-50 cursor-not-allowed pointer-events-none */}
                      <a 
                        href={pkg.href}
                        target="_blank"
                        className={`block text-center w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-200   ${
                          pkg.isPopular
                            ? "bg-primary text-white hover:shadow-lg"
                            : "border-2 border-primary text-primary hover:bg-primary hover:text-white "
                        }`}
                      >
                        Amanin Seat Terakhir
                      </a>
                      
    
                      <div className="space-y-4">
                        {pkg.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center space-y-2">
                {/* <p className="text-sm text-gray-500">
                  💳 NOTE: Tersedia skema pembayaran bertahap 2x tanpa bunga untuk Career-Ready. <span className="font-semibold text-gray-700">Pembayaran awal: Rp 300.000.</span> 
                </p> */}
                {/* <p className="text-sm text-primary font-medium">
                  <a href="https://grazedu.myr.id/pl/pembayaran-awal-womens-career-lab-batch-3" target="_blank">[Klik disini]</a>
                </p> */}
              </div>
            </div>
          </section>
    
          {/* Waiting List Section */}
          {/* <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-center gap-6">
          
          
          <div className="flex-shrink-0 bg-white/20 rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
    
          
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white mt-1">Pendaftaran sudah ditutup.</h2>
            <p className="text-white/80 mt-1 text-sm">
              Jangan sampai ketinggalan batch berikutnya! Daftar waiting list sekarang dan kami akan kabari kamu duluan.
            </p>
          </div>
    
         
          <div className="flex-shrink-0">
            
             <a href="https://forms.gle/NqtDi6WBuKEhCRgV7" target="_blank" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold shadow hover:shadow-md hover:scale-105 transition-all duration-200 whitespace-nowrap">
              🔔 Daftar Waiting List
            </a>
          </div>
    
        </div>
      </div>
    </section> */}
    
          {/* FAQ */}
          <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-gray-900 text-left">{faq.question}</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          <Footer />
        </div>
      );
    }
