"use client"

import Navbar from "@/components/Navbar"

import Footer from "@/components/Footer"
import { useState } from "react"
import { ChevronDown, Heart, Gamepad2, CheckCircle, Users, BookOpen, Zap, MessageSquare, Calendar, Lock, Star } from "lucide-react"



export default function SocialMediaContentStrategistPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [activePackage, setActivePackage] = useState<"fast-track" | "career-ready">("fast-track")

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  // Kurikulum by Week
  const curriculum = [
    {
      week: 1,
      title: "The Strategist's Mindset",
      topics: ["Career-Path Social Media","Fundamental Berpikir Strategis", "Peran Social Media untuk Bisnis", "Social Media Marketing Fundamental", "Memahami Target Market & STP (Segmenting, Targeting, Positioning)", "Competitor Benchmarking"],
      hours: 8,
    },
    {
      week: 2,
      title: "Social Media & Content Architecture",
      topics: [
        "Content Pillar & Categories",
        "Content Management: Content Brief, Content Calendar",
        "Project Management Tools",
      ],
      hours: 8,
    },
    {
      week: 3,
      title: "Content Creation",
      topics: [
        "Content Production Workflow",
        "The Hook & Copywriting Formula",
        "Visual Branding with Canva", 
        "AI Assistance: Text & Image Generation"],
      hours: 8,
    },
    {
      week: 4,
      title: "Social Media Reporting",
      topics: [
        "Social Media Metric",
        "Analisis Data & Pembuatan Reporting with AI",
        "Communication with Stakeholders: Strategi menyajikan laporan performa (insight) kepada atasan atau klien secara meyakinkan",
        ],
      hours: 8,
      // Simulasi Week yang digembok untuk Fast-Track
    },
    {
      week: 5,
      title: "Meta Business Ecosystem",
      topics: [
        "Mengenal Dapur Meta: Meta Business Suite vs Meta Business Portfolio",
        "Integrasi Ekosistem Bisnis: ",
        "Manajemen Tim & Keamanan Aset",
        "Fitur Unified Inbox & Komunikasi",

      ],
      hours: 8,
      isPremiumWeek: true, 
    },
    {
      week: 6,
      title: "Social Media Advertising & Campaign Architecture",
      topics: [
        "Pengenalan Social Media Advertising",
        "Menentukan Campaign Objective",
        "Targeting Audience",
        "Ad Placement",
      ],
      hours: 8,
      isPremiumWeek: true, 
    },
    {
      week: 7,
      title: "Creative Strategy & Growth Performance",
      topics: [
        "Membuat Materi Iklan Kreatif dengan AI",
        "Benchmarking dengan Meta Ads Library",
        "Cara Membaca Data di Ads Manager",
        "Evaluasi & Scaling Sederhana", 
      ],
      hours: 8,
      isPremiumWeek: true,
    },
    
  ]

  // Tools
  const tools = [
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      width: "w-28",
      justImage: true
    },
    {
      name: "Instagram",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
      width: "w-14",
      justImage: true
    },
    {
      name: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
      width: "w-14",
      justImage: true
    },
    {
      name: "Canva",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Canva_logo.svg/3840px-Canva_logo.svg.png",
      width: "w-20",
      justImage: true
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
    {
      name: "NotebookLM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/NotebookLM_logo.svg/960px-NotebookLM_logo.svg.png?_=20241229091149",
      width: "w-21",
      justImage: false,
      // text: "NotebookLM",
      fontStyle: "font-medium text-[16px] ml-2 text-[#5f6368]"
    },
    {
      name: "Google Workspace",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Google_Workspace_Logo.svg/960px-Google_Workspace_Logo.svg.png",
      width: "w-21",
      justImage: false,
      // text: "Google\nWorkspace",
      fontStyle: "font-normal text-[15px] leading-tight ml-2 text-[#5f6368] text-left"
    },
    {
      name: "Notion",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
      width: "w-8",
      justImage: false,
      text: "Notion",
      fontStyle: "font-bold text-[18px] ml-2 text-black"
    },
    {
      name: "Trello",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/250px-Trello_logo.svg.png?_=20210216184934",
      width: "w-21",
      justImage: false,
      // text: "Trello",
      fontStyle: "font-bold text-[20px] ml-2 text-[#0052CC]"
    },
  ]

  // Learning Methods
  const learningMethods = [
    {
      title: "Intimate Learning",
      icon: BookOpen,
      description:
        "Pendekatan pembelajaran dengan jumlah peserta yang terbatas untuk menciptakan suasana lebih akrab dan memungkinkan diskusi lebih intensif.",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Low Cognitive Load",
      icon: Gamepad2,
      description:
        "Menyeimbangkan sesi belajar dengan melalui sesi fun games untuk menjaga kesehatan mental dan membangun engagement satu sama lain.",
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
      name: "Rachel Septiana Chandra",
      title: "Founder & CEO",
      company: "CGI Creative Lab",
      image:
        "/rachel-cgi.jpg",
      bio: "9+ tahun pengalaman di industri kreatif yang akan membimbing peserta menguasai strategi sosial media dan konten dari sudut pandang praktisi agensi.",
      specialties: ["Social Media Strategy", "Meta Business Suite","Content Creation"],
      label: "Expert mentor"
    },
    {
      name: "Novilia Ayu Kusuma,S.Psi., CHRP.",
      title: "HR Practitioner",
      // company: "Shopee Indonesia",
      image:
        "/novilia-ayu.jpg",
      bio: "14+ tahun berpengalaman dalam talent management yang berperan dalam pengembangan potensi serta kesiapan karir profesional peserta.",
      specialties: ["Career Counseling & Coaching", "Linkedin & Resume Optimization","Interview Strategy"],
      label: "Career Mentor"
    },
    {
      name: "Retno Pratiwi,S.Psi.,M.H.,CHRP.",
      title: "HR Practitioner",
      // company: "Manufacture Industry",
      image:
        "/retno-pratiwi.jpg",
      bio: "8+ tahun berpengalaman di bidang rekrutmen yang berperan dalam memvalidasi kurikulum program agar tetap relevan dan sesuai dengan standar kebutuhan industri terkini.",
      specialties: ["Career Counseling & Coaching", "Career Strategy", "Konsultan SDM"],
      label: "Industry Advisor"
    },
  ]

  // Jadwal Pembelajaran
  const scheduleData = [
    { label: "Durasi", value: "2-3 bulan" },
    { label: "Frekuensi belajar", value: "1x per minggu" },
    { label: "Waktu kelas", value: "Setiap Jumat malam 19.30-21.30 WIB" },
    { label: "Mulai belajar", value: "Jumat, 24 Apil 2026" },
    { label: "Periode belajar", 
      value: (
        <ul className="list-disc list-inside">
          <li>Fast track: April-Juni 2026</li>
          <li>Career-Ready: April-Juli 2026</li>
        </ul>
      ),
     },
  ];

  // Timeline (Week by week)
  const timeline = [
    {
      week: 1,
      title: "Registration",
      description: "Periode pendaftaran untuk mengamankan seat batch 2.",
    },
    {
      week: 2,
      title: "On-Boarding",
      description: "Sesi pengenalan ekosistem belajar, serta penyelarasan ekspektasi antara peserta dan mentor.",
    },
   
    {
      week: 3,
      title: "Sesi Pembelajaran Intensif",
      description: "Rangkaian kelas interaktif yang berfokus pada pendalaman materi teknis social media.",
    },
    
    {
      week: 4,
      title: "Initial Placement",
      description: "Fase persiapan administratif dan pembekalan khusus sebelum peserta diterjunkan untuk menangani proyek nyata di Mitra Magang.",
    },
    
    {
      week: 5,
      title: "Hands-on Practical Experience",
      description: "Sesi mengimplementasikan materi yang telah dipelajari melalui praktik nyata di Mitra Magang.",
    },
    {
      week: 6,
      title: "Final Presentation & Graduation",
      description: "Pemaparan hasil kerja akhir sebagai bentuk validasi kompetensi, dilanjutkan dengan seremoni kelulusan dan pemberian sertifikat resmi.",
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


  // Schedule & Pricing
  const pricingPackages = [
    {
      name: "Fast-track",
      price: "Rp 299.000",
      weeklyPrice: "Sekitar 46rb/minggu",
      duration: "2 bulan pembelajaran",
      href: "https://grazedu.myr.id/pl/fast-track-womens-career-lab-socmed-strategist/",
      color: "from-pink-400 to-pink-600",
      benefits: [
        "4x sesi intensif",
        "Magang 1 bulan di agensi kreatif/UMKM",
        
        "Akses kelas & recording material",
        "Materi pre-learning",
        "Feedback tugas",
        "Community group (fun games)",
        "Sertifikat Penyelesaian berbasis 3 Pilar (Platform + Industry Advisor + Partner UMKM)",
        "Sesi 1-on-1 dengan Career Mentor",
        
      ],
    },
    {
      name: "Career-Ready",
      price: "Rp 459.000",
      originalPrice: "Rp 579.000",
      weeklyPrice: "Sekitar 38rb/minggu",
      duration: "3 bulan pembelajaran",
      href: "https://grazedu.myr.id/pl/career-ready-womens-career-lab-socmed-strategist/",
      isPopular: true,
      color: "from-primary to-primary-light",
      benefits: [
        "7x sesi intensif",
        "Magang 2 bulan di agensi kreatif/UMKM",
        
        "Akses kelas & recording",
        "Materi pre-learning",
        "Feedback tugas",
        "Community group (fun games)",
        
        "Sertifikat Penyelesaian berbasis 3 Pilar (Platform + Industry Advisor + Partner UMKM)",
        "Sesi 1-on-1 dengan Career Mentor",
        <>
          +450 kredit{" "}
              <a href="https://prompthink.vercel.app" className="underline" target="_blank">
                AI Smart Prompt Premium
              </a>
        </>,
        "+Career Class: CV, Interview Strategy, Linkedin Optimization",
        "+Sweet merchandise",
        "+Recommendation Letter"
      ],
    },
  ]

  // FAQ
  const faqs = [
    {
      question: "Kenapa program ini berbayar?",
      answer:
        "Karena program ini dirancang sebagai ruang belajar terkurasi dan berpendampingan, bukan magang massal. Biaya digunakan untuk memastikan kualitas materi, pendampingan mentor, kurasi UMKM, validasi sertifikat, serta pengalaman praktik yang nyata, agar peserta benar-benar belajar, bertumbuh, dan pulang dengan skill serta portofolio yang bernilai.",
    },
    {
      question: "Apa outcome dari program ini?",
      answer:
        "Membantu kamu untuk punya portfolio pertama di bidang social media. Dari portfolio pertama ini, akan sangat berguna untuk kamu menjemput opportunity baru setelahnya.",
    },
    {
      question: "Siapa yang layak untuk ikut program ini?",
      answer:
        "Fresh graduate maupun mahasiswa yang masih kesulitan dapatin portfolio pertamanya, serta IRT yang telah lama jeda karir yang ingin reskilling.",
    },
    {
      question: "Apakah untuk mengikuti program ini benar tanpa seleksi?",
      answer:
        "Iya betul, namun untuk menjaga kualitas program, kuota yang disediakan terbatas.",
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
      question: "Apakah materinya ramah untuk yang baru mengenal sosial media",
      answer:
        "Yaps, materinya telah di-desain ramah untuk pemula sehingga tidak menghalangi kamu untuk belajar.",
    },
    {
      question: "Apakah saat sesi praktik magang juga dilakukan secara online?",
      answer:
        "Betul banget! Semua sesi pembelajaran termasuk magang di mitra akan dilaksanakan secara online.",
    },
    {
      question: "Sesi praktik magangnya ini nanti dipilihin atau bagaimana?",
      answer:
        "Kamu dapat menentukan sendiri sesuai minatmu berdasarkan mitra magang yang tersedia. Kamu tidak perlu repot apply CV berkali-kali dan menunggu lamaranmu diterima, karena di program ini kamu sudah pasti diterima.",
    },
    {
      question: "Sertifikat penyelesaian berbasis 3 pilar itu maksudnya gimana kak?",
      answer:
        "Apabila kamu dinyatakan lulus pada program ini dengan standar yang telah ditetapkan, maka sertifikat penyelesaian yang akan kamu terima akan ditandatangani oleh platform (Grazedu), Industry Advisor, dan Mitra Magang. Tanda-tangan ketiganya menjadi validitas bahwa kamu benar-benar telah menyelesaikan program ini dan memiliki hasil kerja yang terbukti.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-24 bg-gray-900"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1716277522326-9d9f154c63bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
            <span className="text-white font-extrabold">Social Media & Content Strategist</span>
          </div>

          {/* Title & Meta */}
          <div className="mb-10 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
              Bangun Real-Portfolio Pertamamu Tanpa Seleksi!
            </h1>
            <p className="text-lg text-white mb-8 leading-relaxed">
              Mulai karir Social Media & Content Strategist dengan pengalaman nyata bekerja langsung dengan UMKM partner. Dapatkan basic experiences dan portfolio sebagai bekal masuk dunia industri.
            </p>
            <div className="flex items-center gap-3 sm:gap-6 text-gray-300 font-medium text-xs sm:text-base">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400 flex-shrink-0" />
                <span>25 Posisi Tersedia</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400 flex-shrink-0" />
                <span>2-3 Bulan</span>
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
              Women's Career Lab - Project Based Internship Social Media & Content Strategist adalah program yang dirancang untuk memberdayakan perempuan muda yang ingin
              mengembangkan karir di industri digital marketing. 
            </p>
            <p>
            Program ini mengkombinasikan pendekatan belajar women-centric dan teori fundamental dengan hands-on practical experience bekerja langsung dengan Mitra Magang (Agensi Kreatif dan UMKM/Startup). Cocok untuk kamu yang passionate tentang social media
            tapi belum punya pengalaman dan portfolio.
            </p>
            <p>Terdapat 2 tipe pembelajaran yang bisa kamu pilih:</p>
            <ul className="list-disc list-inside pl-5">
              <li>Fast-track (2 bulan): 4 sesi pembelajaran intensif + 1 bulan praktik.</li>
              <li>Career Ready (3 bulan): 7 sesi pembelajaran intensif + 2 bulan praktik.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Kurikulum */}
      <section id="kurikulum" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kurikulum Pembelajaran</h2>

          {/* Package Selector */}
          <div className="flex bg-gray-100 p-1 rounded-xl w-fit mb-8 border border-gray-200">
            <button
              onClick={() => setActivePackage("fast-track")}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${activePackage === "fast-track"
                ? "bg-primary text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Fast-Track
            </button>
            <button
              onClick={() => setActivePackage("career-ready")}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${activePackage === "career-ready"
                ? "bg-primary text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Career-Ready
            </button>
          </div>

          {/* Curriculum Cards */}
          <div className="space-y-4">
            {curriculum.map((week, index) => {
              const isLocked = (week as any).isPremiumWeek && activePackage === "fast-track";

              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl border-2 overflow-hidden transition-all duration-300 ${isLocked ? "border-gray-200 opacity-60 bg-gray-50" : "border-gray-200 hover:border-primary"}`}
                >
                  <button
                    onClick={() => !isLocked && setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className={`w-full px-6 py-5 flex items-center justify-between transition-colors ${isLocked ? "cursor-not-allowed" : "hover:bg-gray-50"}`}
                  >
                    <div className="text-left flex items-start gap-3">
                      {isLocked && <Lock className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />}{!isLocked && (week as any).isPremiumWeek && <span className="h-2 w-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>}
                      <div>
                        <p className={`text-sm font-semibold mb-1 ${isLocked ? "text-gray-500" : "text-primary"}`}>Sesi {week.week}</p>
                        <h3 className={`text-lg font-bold ${isLocked ? "text-gray-500" : "text-gray-900"}`}>{week.title}</h3>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {isLocked && (
                        <span className="inline-flex items-center text-[10px] font-bold text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                          Khusus Career-Ready
                        </span>
                      )}
                      {!isLocked && (week as any).isPremiumWeek && (
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200 uppercase tracking-widest whitespace-nowrap shadow-sm mb-1">
                          ⭐ Include
                        </span>
                      )}
                      {!isLocked && (
                        <ChevronDown
                          className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${(week as any).isPremiumWeek ? "text-amber-500" : "text-primary"} ${openFaqIndex === index ? "transform rotate-180" : ""}`}
                        />
                      )}
                    </div>
                  </button>
                  {!isLocked && openFaqIndex === index && (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12">The Mentors & Advisor</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-64 bg-gray-100">
                  <img src={(mentor as any).image || "/placeholder.svg"} alt={(mentor as any).name} className="w-full h-full object-cover" />
                  {(mentor as any).label && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                        {(mentor as any).label}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                  <p className="text-primary font-semibold mb-3">{mentor.title}</p>
                  <p className="text-sm text-gray-600 mb-4">{mentor.company}</p>
                  <p className="text-gray-700 text-sm mb-4">{mentor.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jadwal Pembelajaran */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">Jadwal Pembelajaran</h2>
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-primary text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Social Media & Content Strategist</h3>
                <p className="opacity-90">Jadwal Batch 2 Tahun 2026</p>
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
      <section className="py-16 bg-white">
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

      {/* Learning Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Learning Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    {/* <img className="h-12 w-12 rounded-full object-cover mr-4" src={testimonial.avatar} alt={testimonial.name} /> */}
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
      </section>

      {/* Schedule & Pricing */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Biaya Program</h2>
          <p className="text-gray-600 mb-12">Batch 2 - April 2026 | Limited Spots!</p>

          <div className="grid md:grid-cols-2 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden border-2 transition-all duration-300 relative ${
                  pkg.isPopular
                    ? "border-primary bg-gradient-to-br from-primary/5 to-pink-50 shadow-lg scale-105 md:scale-100"
                    : "border-gray-200 bg-white"
                }`}
              >
                {pkg.isPopular && (
                  <>
                    <div className="bg-primary text-white text-center py-2 text-sm font-bold">
                      EDISI FLASH SALE SAMPAI 13 APRIL 2026!
                    </div>
                    
                  </>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-1">
                    {(pkg as any).originalPrice && (
                      <p className="text-base text-gray-400 line-through">
                        {(pkg as any).originalPrice}
                      </p>
                    )}
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
                        {pkg.price}
                      </p>
                     
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm">{pkg.duration}</p>

                  <a
                    href={pkg.href}
                    target="_blank"
                    className={`block text-center w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-200 ${
                      pkg.isPopular
                        ? "bg-primary text-white hover:shadow-lg"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    Daftar Paket Ini
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
        </div>
      </section>

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
