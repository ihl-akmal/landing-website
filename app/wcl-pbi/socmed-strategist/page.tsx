"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useState } from "react"
import { ChevronDown, Heart, CheckCircle, Users, BookOpen, Zap, MessageSquare, Calendar, Lock } from "lucide-react"

export default function SocialMediaContentStrategistPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [activePackage, setActivePackage] = useState<"fast-track" | "career-ready">("fast-track")

  // Program Overview
  const programHighlights = [
    {
      icon: Users,
      title: "Community-Driven",
      description: "Belajar dan berkembang bersama komunitas perempuan yang supportive dan inspiring",
    },
    {
      icon: BookOpen,
      title: "Hands-On Learning",
      description: "Mendapatkan pengalaman nyata melalui project-based learning dengan UMKM",
    },
    {
      icon: Zap,
      title: "Career Acceleration",
      description: "Dapatkan skills, portfolio, dan networking untuk accelerate karir kamu",
    },
    {
      icon: Heart,
      title: "Mentorship Support",
      description: "Bimbingan langsung dari professional berpengalaman di industri",
    },
  ]

  // Kurikulum by Week
  const curriculum = [
    {
      week: 1,
      title: "The Strategist's Mindset",
      topics: ["Career-Path Social Media", "Peran Social Media untuk Bisnis", "Social Media Marketing Fundamental", "Memahami Target Market & STP (Segmenting, Targeting, Positioning)", "Competitor Benchmarking"],
      hours: 8,
    },
    {
      week: 2,
      title: "Social Media & Content Architecture",
      topics: [
        "Visual Content Design",
        "Copywriting Basics",
        "Content Calendar Planning",
        "Storytelling Techniques",
        "1-on-1 Content Review Session"
      ],
      hours: 8,
    },
    {
      week: 3,
      title: "Content Creation & Management",
      topics: ["Reels & Short-form Video", "Hashtag Strategy", "Engagement Tactics", "Instagram Algorithm"],
      hours: 8,
    },
    {
      week: 4,
      title: "Reporting & Portfolio Building",
      topics: ["Crisis Management", "Community Building", "Comment Strategy", "User-Generated Content"],
      hours: 8,
      isPremiumWeek: true, // Simulasi Week yang digembok untuk Fast-Track
    },
    {
      week: 5,
      title: "Client Project Kickoff",
      topics: [
        "Metrics Overview",
        "Data Interpretation",
        "Report Making",
        "Optimization Strategies",
        "Advanced Analytics Workshop"
      ],
      hours: 8,
    },
    {
      week: 6,
      title: "Project",
      topics: ["Campaign Planning", "Multi-channel Strategy", "Budget Allocation", "Launch & Execution"],
      hours: 8,
    },
    {
      week: 7,
      title: "Project",
      topics: ["UMKM Partner Introduction", "Project Brief Deep Dive", "Strategy Development", "Client Communication"],
      hours: 8,
    },
    {
      week: 8,
      title: "Project",
      topics: [
        "UMKM Partner Introduction",
        "Project Brief Deep Dive",
        "Strategy Development",
        "Client Communication",
        "Exclusive Career Counseling"
      ],
      hours: 8,
    },
    {
      week: 9,
      title: "Project",
      topics: ["Final Presentation", "Results Analysis", "Portfolio Building", "Graduation & Networking"],
      hours: 8,
    },
    {
      week: 10,
      title: "Project Presentation & Celebration",
      topics: ["UMKM Partner Introduction", "Project Brief Deep Dive", "Strategy Development", "Client Communication"],
      hours: 8,
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
      title: "Deep Dive Learning",
      icon: BookOpen,
      description:
        "Interactive workshops dan intensive sessions dengan expert mentor. Setiap sesi dirancang untuk deep understanding dengan Q&A interaktif dan real case studies.",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Fun Bonding Night",
      icon: Users,
      description:
        "Casual hangout untuk build community, share experiences, dan relax dari pembelajaran intense. Networking session yang fun dan supportive!",
      color: "from-pink-400 to-pink-600",
    },
    {
      title: "Weekly Mentoring",
      icon: MessageSquare,
      description:
        "1-on-1 atau small group mentoring sessions untuk discuss progress, challenges, dan career guidance dari mentor berpengalaman.",
      color: "from-purple-400 to-purple-600",
    },
  ]

  // Mentors (2 people)
  const mentors = [
    {
      name: "Rara Setiawan",
      title: "Senior Social Media Manager",
      company: "Tokopedia",
      image:
        "https://images.pexels.com/photos/3183287/pexels-photo-3183287.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "5+ tahun expertise dalam social media strategy dan content creation. Berhasil scale multiple brands dari 0 ke 500k+ followers.",
      specialties: ["Social Strategy", "Content Creation", "Community Management"],
    },
    {
      name: "Dina Wijaya",
      title: "Content Strategist",
      company: "Shopee Indonesia",
      image:
        "https://images.pexels.com/photos/3306009/pexels-photo-3306009.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Spesialis dalam viral content dan engagement strategy. Passionate tentang membantu UMKM berkembang melalui digital marketing.",
      specialties: ["Viral Content", "Analytics", "UMKM Growth"],
    },
  ]

  // Timeline (Week by week)
  const timeline = [
    {
      week: 1,
      title: "Kick Off & Foundation",
      description: "Orientation, meet the mentors, dan deep dive ke fundamentals social media strategy",
    },
    {
      week: 2,
      title: "Content Creation Sprint",
      description: "Intensive training content creation. Setiap participant membuat first content piece",
    },
    {
      week: 3,
      title: "Platform Mastery",
      description: "Deep dive Instagram & TikTok. Ngerti algorithm, best practices, dan viral strategies",
    },
    {
      week: 4,
      title: "Community Building",
      description: "Learn community management, crisis handling, dan build engaged audience",
    },
    {
      week: 5,
      title: "Analytics & Optimization",
      description: "Understand metrics, create reports, dan optimize based on data",
    },
    {
      week: 6,
      title: "Campaign Planning",
      description: "Develop comprehensive marketing campaign untuk real client (UMKM partner)",
    },
    {
      week: 7,
      title: "Project Execution",
      description: "Execute campaign bersama UMKM partner. Real impact, real results!",
    },
    {
      week: 8,
      title: "Showcase & Graduation",
      description: "Present results, celebrate success, networking, dan close dengan kuat",
    },
  ]

  // Schedule & Pricing
  const pricingPackages = [
    {
      name: "Learner",
      price: "Rp 59.000",
      duration: "8 minggu",
      color: "from-pink-400 to-pink-600",
      benefits: [
        "All workshop materials & recordings",
        "Access to learning platform",
        "Weekly mentoring sessions (group)",
        "Community access",
        "Professional certificate",
        "Portfolio project with UMKM",
        "Email support",
        "Alumni community access",
      ],
    },
    {
      name: "Career-Ready",
      price: "Rp 299.000",
      duration: "8 minggu + Extended",
      isPopular: true,
      color: "from-primary to-primary-light",
      benefits: [
        "All Starter benefits +",
        "Priority support (24/7 chat)",
        "1-on-1 mentoring sessions (2x/month)",
        "Resume & LinkedIn optimization",
        "Job preparation coaching",
        "Career counseling (post-program)",
        "Extended mentorship (3 months)",
        "Exclusive networking events",
        "Job board access",
        "Interview prep sessions",
      ],
    },
  ]

  // FAQ
  const faqs = [
    {
      question: "Apakah saya perlu experience sebelumnya untuk mengikuti program ini?",
      answer:
        "Tidak! Program ini dirancang untuk beginner hingga intermediate level. Kami akan teach you dari foundation dan tidak ada pengetahuan sebelumnya yang required. Yang penting adalah keinginan kamu untuk learn dan grow bersama komunitas.",
    },
    {
      question: "Berapa banyak jam per minggu yang harus saya investasikan?",
      answer:
        "Program ini membutuhkan komitmen 8-10 jam per minggu. Ini termasuk workshop (4 jam), mentoring (1-2 jam), bonding activities (1 jam), dan self-paced learning (2-3 jam). Jadwal fleksibel sehingga bisa disesuaikan dengan aktivitas kamu.",
    },
    {
      question: "Apakah saya bisa mengikuti program sambil bekerja full-time?",
      answer:
        "Tentu! Banyak peserta kami yang mengikuti program sambil bekerja. Workshop kami dijadwalkan di malam hari dan weekend untuk accommodate working professionals. Namun, pastikan kamu bisa commit untuk full 8 minggu program.",
    },
    {
      question: "Apakah ada sertifikat yang diakui industri?",
      answer:
        "Ya! Setiap peserta yang menyelesaikan program akan mendapatkan sertifikat WCL-PBI yang diakui oleh industri dan partner kami. Sertifikat ini menunjukkan bahwa kamu telah menyelesaikan intensive training dalam social media strategy dan content creation.",
    },
    {
      question: "Siapa mentor saya dan apa background mereka?",
      answer:
        "Mentor kami adalah professional berpengalaman dari top tech companies seperti Tokopedia, Shopee, dan lainnya. Mereka memiliki 5+ tahun experience dan passionate tentang mentoring. Lihat profil mentor di section di atas untuk informasi lebih detail.",
    },
    {
      question: "Apa saja yang akan saya pelajari tentang tools?",
      answer:
        "Kami akan teach kamu berbagai tools profesional yang digunakan industry: Figma untuk design, Meta Business Suite untuk management, Google Analytics untuk tracking, dan many more. Semua tools ini user-friendly dan kamu akan learn hands-on.",
    },
    {
      question: "Apakah ada job placement setelah program?",
      answer:
        "Kami tidak menjamin job placement, namun kami punya strong track record dalam helping alumni mendapatkan pekerjaan. Kami provide job board akses, resume coaching, interview prep, dan koneksi dengan potential employer. 85% alumni kami working sesuai field mereka dalam 3 bulan.",
    },
    {
      question: "Apakah program ini online atau offline?",
      answer:
        "Program kami hybrid! Mayoritas workshop dilakukan online untuk fleksibilitas. Namun kami juga mengadakan bonding activities dan networking session offline di Jakarta untuk community building yang lebih strong. Kamu bisa pilih format yang suit kamu.",
    },
    {
      question: "Apa yang terjadi jika saya miss beberapa session?",
      answer:
        "Jangan khawatir! Semua workshop sessions direkam dan bisa kamu akses kapan saja. Kami juga provide summary notes untuk setiap session. Namun, cobalah untuk attend live sebanyak mungkin untuk maximize learning dan community interaction.",
    },
    {
      question: "Bagaimana proses pendaftaran dan kapan deadline?",
      answer:
        "Proses pendaftaran sangat simple: 1) Fill application form online, 2) Attend assessment call (15 menit), 3) Finalize enrollment. Deadline untuk batch February 2026 adalah 31 Januari 2026. Spots terbatas jadi jangan delay!",
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
              Mulai karir Social Media & Content Strategist dengan pengalaman nyata bekerja langsung dengan UMKM partner. Dapatkan basic experiences dan portfolio sebelum masuk dunia industri.
            </p>
            <div className="flex items-center gap-3 sm:gap-6 text-gray-300 font-medium text-xs sm:text-base">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400 flex-shrink-0" />
                <span>15 Posisi Tersedia</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400 flex-shrink-0" />
                <span>10 Minggu</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-gradient-to-r from-primary to-pink-600 text-white px-8 py-3.5 rounded-lg font-bold hover:shadow-lg transition-all duration-300">
              Daftar Sekarang
            </button>
            <button className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <span>▶</span> Lihat Kurikulum
            </button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tentang Program</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Women's Career Lab - Project Based Internship Social Media & Content Strategist program dirancang untuk memberdayakan perempuan muda yang ingin
              mengembangkan karir di industri digital marketing. Program ini menggabungkan teori fundamental dengan
              hands-on practical experience bekerja langsung dengan UMKM partner. Cocok untuk kamu yang passionate tentang social media
              tapi belum punya pengalaman dan portfolio.
            </p>

          </div>
        </div>

      </section>

      {/* Kurikulum */}
      <section className="py-16 bg-white">
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
              Fast-Track (2 bulan)
            </button>
            <button
              onClick={() => setActivePackage("career-ready")}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${activePackage === "career-ready"
                ? "bg-primary text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Career-Ready (3 bulan)
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
                        <p className={`text-sm font-semibold mb-1 ${isLocked ? "text-gray-500" : "text-primary"}`}>Week {week.week}</p>
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
                          ⭐ Eksklusif
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
                              <span className={`text-base ${(week as any).isPremiumWeek ? "font-semibold text-gray-900" : "text-gray-700"}`}>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Mentors Kamu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <img src={mentor.image || "/placeholder.svg"} alt={mentor.name} className="w-full h-64 object-cover" />
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

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Program Timeline</h2>
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

      {/* Schedule & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Jadwal & Biaya</h2>
          <p className="text-gray-600 mb-12">Batch Februari 2026 - Limited Spots!</p>

          <div className="grid md:grid-cols-2 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${pkg.isPopular
                  ? "border-primary bg-gradient-to-br from-primary/5 to-pink-50 shadow-lg scale-105 md:scale-100"
                  : "border-gray-200 bg-white"
                  }`}
              >
                {pkg.isPopular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-bold">PALING DIREKOMENDASIKAN</div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent mb-1">
                    {pkg.price}
                  </p>
                  <p className="text-gray-600 mb-6">{pkg.duration}</p>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-200 ${pkg.isPopular
                      ? "bg-primary text-white hover:shadow-lg"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      }`}
                  >
                    Daftar Paket Ini
                  </button>

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
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Frequently Asked Questions</h2>
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
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? "transform rotate-180" : ""
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
  )
}
