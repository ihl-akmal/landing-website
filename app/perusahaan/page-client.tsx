'use client'


import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Mail,
  MessageCircle,
  School,
  Send,
  Settings2,
  Users,
} from "lucide-react";

// ====== Kontak & gambar: ubah di sini ======
const CONTACT_EMAIL = "grazeduindonesia@gmail.com"
const MAIL_LINK = `mailto:${CONTACT_EMAIL}?subject=Kolaborasi%20Learning%20Partner`
const WA_LINK = "https://wa.me/6282340622274"

// Isi dengan path file di /public, contoh: "/learning-partner/hero.jpg"
// Kalau dikosongkan, hero tampil dengan latar gelap + overlay.
const HERO_IMG = "/partnership/career-mental-wellness.webp"
// ===========================================

const heroChips = ["Curriculum Development", "Women-Centric Approach", "End-to-end Support"] 

const pillars = [
  {
    icon: BookOpen,
    title: "Perancangan Kurikulum dan Materi Pembelajaran",
    desc: "Penyusunan kurikulum dan materi pembelajaran yang mencakup struktur sesi, aktivitas belajar, serta metode pembelajaran.",
    tag: "Bespoke Modules",
  },
  {
    icon: Users,
    title: "Dukungan Fasilitator Ahli",
    desc: "Praktisi perempuan berpengalaman dengan pendekatan mentoring yang empatik, terstruktur, dan aplikatif.",
    tag: "Industry Leaders",
  },
  {
    icon: Settings2,
    title: "Manajemen Program End-to-End",
    desc: "Dari registrasi, seleksi, onboarding, pelaksanaan sesi interaktif, sampai evaluasi berkala yang teratur.", // TODO: tidak berlaku untuk model Modul & Instruktur
    tag: "Zero Operational Burden",
  },
]

const partners = [
  {
    icon: Building2,
    label: "Corporate CSR",
    title: "Corporate CSR",
    desc: "Program ESG & CSR pemberdayaan perempuan berkelanjutan dengan metrik dampak yang akuntabel untuk pelaporan keberlanjutan.", // TODO: verifikasi klaim ESG/metrik
    footer: "Sesuai Standar ESG", // TODO: verifikasi
    blob: "bg-primary/10",
    iconBg: "bg-primary",
    pill: "bg-primary-fixed text-primary",
    footerColor: "text-primary",
  },
  {
    icon: HeartHandshake,
    label: "Lembaga & NGO",
    title: "Lembaga & NGO",
    desc: "Pelatihan upskilling & kemandirian ekonomi penerima manfaat dengan kurikulum inklusif yang mudah dipahami dan dipraktikkan.",
    footer: "Inklusif & Terarah",
    blob: "bg-primary-dark/10",
    iconBg: "bg-primary-dark",
    pill: "bg-secondary-fixed text-primary-dark",
    footerColor: "text-primary-dark",
  },
  {
    icon: School,
    label: "Universitas & Kampus",
    title: "Universitas & Kampus",
    desc: "Program persiapan karier alumni & mahasiswi siap kerja, mencakup career readiness, interview coaching, dan personal branding.", // TODO: belum dikonfirmasi sebagai target
    footer: "Career Accelerator",
    blob: "bg-primary/10",
    iconBg: "bg-primary",
    pill: "bg-primary-fixed text-primary",
    footerColor: "text-primary",
  },
  {
    icon: Users,
    label: "Komunitas Perempuan",
    title: "Women Community",
    desc: "Workshop intensif, bootcamp karier, & community learning labs yang mempererat kolaborasi dan kapasitas member aktif.",
    footer: "Community Labs",
    blob: "bg-primary-dark/10",
    iconBg: "bg-primary-dark",
    pill: "bg-secondary-fixed text-primary-dark",
    footerColor: "text-primary-dark",
  },
]

const portfolio = [
  {
    img: "/partnership/teensclub-doc.webp",
    org: "Teens Club by Pigeon Teens",
    alt: "Program Corporate CSR Partnership",
    badge: "Corporate CSR Partnership",
    stat: "👥 25 Anggota Perempuan Terlatih", // TODO: verifikasi angka
    title: "Build Your Confidence & Creative Skills",
    desc: "Program intensif persiapan kepemimpinan dan kapabilitas digital bagi talenta perempuan muda.",
  },
  {
    img: "/partnership/iampowered-polimedia.webp",
    org:"Polimedia Kreatif Jakarta",
    alt: "Program Community & NGO Alliance",
    badge: "Community & NGO Alliance",
    stat: "👥 850+ Pengusaha Perempuan Daerah", // TODO: verifikasi angka
    title: "From Campus to Career",
    desc: "Akselerasi kapasitas bisnis mandiri dan pendampingan mentor 1-on-1 bagi komunitas wirausaha perempuan.",
  },
  {
    img: "",
    org:"Perempuan Inovasi",
    alt: "Program Community & NGO Alliance",
    badge: "Community & NGO Alliance",
    stat: "👥 850+ Pengusaha Perempuan Daerah", // TODO: verifikasi angka
    title: "Beasiswa Career Development",
    desc: "Akselerasi kapasitas bisnis mandiri dan pendampingan mentor 1-on-1 bagi komunitas wirausaha perempuan.",
  },
]

function Sparkle({ className = "w-3.5 h-3.5 text-primary fill-current" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}

const SECTION_PILL =
  "inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary-fixed/60 text-primary font-label-md text-label-md font-semibold tracking-wide"
const H2 =
  "font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-on-surface"
const SECTION = "relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-space-xl"

export default function LayananPerusahaan() {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
  
        <main className="w-full bg-gray-50 flex-1">
          <div className="flex flex-col w-full">
            {/* 1. HERO SECTION WITH IMAGE OVERLAY */}
            <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-6">
              <div className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl bg-slate-950 ring-1 ring-black/5 shadow-[0_20px_50px_-12px_rgba(33,2,20,0.35)]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  {HERO_IMG && (
                    <Image
                      src={HERO_IMG}
                      alt="Suasana sesi pembelajaran Grazedu"
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                  )}
                  {/* 1. Scrim rata: jaminan kontras minimum untuk foto apa pun */}
                  <div className="absolute inset-0 bg-slate-950/55"></div>
                  {/* 2. Tint brand */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/40 via-transparent to-slate-950/30"></div>
                  {/* 3. Gelap di tepi atas dan bawah */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30"></div>
                  {/* 4. Sorotan gelap di belakang teks */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,2,8,0.45)_0%,transparent_70%)]"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex min-h-[32rem] lg:min-h-[36rem] items-center justify-center px-6 py-20 lg:px-12 lg:py-32">
                  <div className="max-w-5xl mx-auto text-center">
                    {/* Sparkle Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 border border-white/25 text-white text-sm font-semibold tracking-wide backdrop-blur-md">
                      <svg aria-hidden="true" className="w-4 h-4 text-pink-300 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
                      </svg>
                      <span>B2B Learning Partner • Grazedu for Organization</span>
                    </div>

                    {/* Hero Headline */}
                    <h1 className="mt-6  text-3xl sm:text-5xl lg:text-[3.25rem] leading-tight lg:leading-[1.15] font-bold text-white tracking-tight text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                      Mitra Strategis dalam Pengembangan Talenta Perempuan
                    </h1>

                    {/* Hero Subheadline */}
                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/90 max-w-2xl mx-auto drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
                      Wujudkan inisiatif pengembangan kapasitas perempuan tanpa terbebani kompleksitas perencanaan dan pelaksanaan pembelajaran.
                    </p>

                    {/* Primary CTA Button */}
                    <div className="mt-8 flex justify-center">
                      <a
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white bg-primary shadow-[0_8px_28px_rgba(203,54,137,0.5)] hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-0.5"
                        href="#hubungi-kami"
                      >
                        <span>Diskusikan Kolaborasi</span>
                        <ArrowRight className="h-[18px] w-[18px]" />
                      </a>
                    </div>

                    {/* Value Checklist / Stats Chips */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                      {heroChips.map((chip) => (
                        <div
                          key={chip}
                          className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/25 text-white text-sm font-medium"
                        >
                          <CheckCircle2 className="h-[18px] w-[18px] text-pink-300" />
                          <span>{chip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            {/* 2. SECTION: APA ITU LEARNING PARTNER */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-14">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-100/60 text-primary text-sm font-semibold tracking-wide">
                  <svg aria-hidden="true" className="w-3.5 h-3.5 text-primary fill-current" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
                  </svg>
                  <span>✦ Tentang Layanan</span>
                </div>
                <h2 className="text-[1.75rem] leading-9 lg:text-[2.5rem] lg:leading-[3rem] font-bold tracking-tight text-gray-900">
                  Apa itu Learning Partner?
                </h2>
                <p className="text-lg leading-relaxed text-gray-900 text-center">
                Kemitraan pembelajaran yang membantu organisasi menjalankan inisiatif program melalui dukungan yang menyeluruh.
                </p>
              </div>
  
              {/* Value Pillars Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  {pillars.map((p) => (
                    <div
                      key={p.title}
                      className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-2px_rgba(203,54,137,0.06)] hover:shadow-[0_12px_32px_-4px_rgba(203,54,137,0.12)] transition-all duration-300 flex flex-col group"
                    >
                      <div className="w-12 h-12 shrink-0 rounded-[3rem] bg-[#FFF5F8] text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                        <p.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl leading-7 font-bold tracking-tight text-gray-900 mb-2 md:min-h-[5.25rem] lg:min-h-[3.5rem]">
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 flex-1">
                        {p.desc}
                      </p>
                      <div className="pt-6 mt-4 flex items-center text-primary text-xs font-semibold">
                        <span>{p.tag}</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  ))}
                </div>
            </section>
  
            {/* 3. TARGET PARTNERS SECTION */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-14">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-100/60 text-primary text-sm font-semibold tracking-wide">
                  <svg aria-hidden="true" className="w-3.5 h-3.5 text-primary fill-current" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
                  </svg>
                  <span>✦ Kolaborator Kami</span>
                </div>
                <h2 className="text-[1.75rem] leading-9 lg:text-[2.5rem] lg:leading-[3rem] font-bold tracking-tight text-gray-900">
                  Dirancang Khusus untuk Berbagai Organisasi
                </h2>
                <p className="text-base text-gray-600">
                  Fleksibel diintegrasikan ke dalam inisiatif sosial, pemberdayaan komunitas, dan agenda strategis institusi.
                </p>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((p) => (
  <div
    key={p.title}
    className="relative bg-[#FFF4F7] rounded-3xl p-7 border border-[#FFD5E2] hover:border-primary/40 shadow-[0_6px_24px_-4px_rgba(203,54,137,0.08)] hover:shadow-[0_16px_36px_-6px_rgba(203,54,137,0.16)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
  >
    <div
      className={`absolute -top-10 -right-10 w-28 h-28 ${p.blob} rounded-full blur-xl group-hover:scale-125 transition-transform duration-500`}
    ></div>
    <div className="relative z-10">
      <div className="flex items-center justify-between gap-3 mb-5">
        <div
          className={`w-12 h-12 shrink-0 rounded-2xl ${p.iconBg} text-white flex items-center justify-center shadow-md`}
        >
          <p.icon className="h-[26px] w-[26px]" />
        </div>
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full ${p.pill} text-xs font-bold tracking-wide uppercase text-left`}
        >
          {p.label}
        </span>
      </div>
      <h3 className="text-xl leading-7 font-semibold tracking-tight text-gray-900 mb-2 lg:min-h-[3 rem]">
        {p.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600">
        {p.desc}
      </p>
    </div>
    <div
      className={`relative z-10 mt-6 pt-4 border-t border-[#FFD9E6] flex items-center justify-between ${p.footerColor} text-xs font-semibold`}
    >
      <span>{p.footer}</span>
      <BadgeCheck className="h-[18px] w-[18px]" />
    </div>
  </div>
))}
              </div>
            </section>
  
            {/* 4. SECTION PORTFOLIO PROGRAM */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-14">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-100/60 text-primary text-sm font-semibold tracking-wide">
                  <svg aria-hidden="true" className="w-3.5 h-3.5 text-primary fill-current" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
                  </svg>
                  <span>✦ Jejak Dampak & Kolaborasi</span>
                </div>
                <h2 className="text-[1.75rem] leading-9 lg:text-[2.5rem] lg:leading-[3rem] font-bold tracking-tight text-gray-900">
                  Program Pembelajaran yang Telah Terlaksana
                </h2>
                <p className="text-base text-gray-600">
                  Lihat bagaimana Grazedu bermitra menyelenggarakan program peningkatan kapasitas perempuan secara nyata.
                </p>
              </div>
  
             {/* Portfolio Grid 3 Kolom */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {portfolio.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-3xl overflow-hidden border border-[#ddbfc9]/30 shadow-[0_8px_24px_-4px_rgba(203,54,137,0.08)] hover:shadow-[0_16px_36px_-6px_rgba(203,54,137,0.14)] transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                      {item.img ? (
                        <Image
                          src={item.img}
                          alt={item.alt}
                          fill
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-primary text-xs font-bold shadow-sm">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-7 sm:p-8 flex-1 flex flex-col">
                      {/* Nama organisasi */}
                      <div className="flex items-center gap-1.5 min-w-0 text-gray-500 text-xs font-medium mb-2">
                        <Building2 className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{item.org}</span>
                      </div>

                      {/* Judul */}
                      <h3 className="text-xl leading-7 font-semibold tracking-tight text-gray-900 group-hover:text-primary transition-colors mb-2">
                        {item.title}
                      </h3>

                      {/* Deskripsi */}
                      <p className="text-sm leading-relaxed text-gray-600 flex-1">
                        {item.desc}
                      </p>

                      {/* Statistik */}
                      <div className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold mt-4">
                        <span>{item.stat}</span>
                      </div>

                      {/* Tombol */}
                      <div className="pt-4 mt-4 border-t border-gray-100">
                        <a
                          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-primary border border-primary/40 hover:bg-pink-100/40 transition-all"
                          href="#hubungi-kami"
                        >
                          <span>Lihat Detail</span>
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
  
            {/* 5. CALL TO ACTION / CONTACT BANNER */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-14" id="hubungi-kami">
              <div className="relative overflow-hidden bg-gradient-to-r from-[#FFF0F5] to-[#FFE4EC] rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-[0_12px_36px_-4px_rgba(203,54,137,0.1)]">
                {/* Decorative Ambient Light Circles inside CTA Box */}
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-primary/15 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-pink-200/50 rounded-full blur-2xl pointer-events-none"></div>
  
                <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                  {/* Sparkle Tag */}
                  <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/90 text-primary text-sm font-bold shadow-sm">
                    <svg aria-hidden="true" className="w-3.5 h-3.5 text-primary fill-current" viewBox="0 0 24 24">
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
                    </svg>
                    <span>Mulai Langkah Kemitraan</span>
                  </div>
  
                  {/* Headline */}
                  <h2 className="text-[1.75rem] leading-9 lg:text-[2.5rem] lg:leading-[3rem] font-semibold tracking-tight text-gray-900">
                    Siap Meluncurkan Program Pembelajaran Perempuan yang Berdampak?
                  </h2>
  
                  {/* Subtext */}
                  <p className="text-lg leading-7 text-gray-600 max-w-xl mx-auto">
                    Konsultasikan kebutuhan program organisasi Anda bersama tim Grazedu hari ini.
                  </p>
  
                  {/* Action Button */}
                  <div className="pt-2">
                    <a
                      className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full text-sm font-semibold text-white bg-primary shadow-[0_8px_24px_-2px_rgba(203,54,137,0.35)] hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-0.5"
                      href={MAIL_LINK}
                    >
                      <span>Diskusikan Kolaborasi Sekarang</span>
                      <Send className="h-[18px] w-[18px]" />
                    </a>
                  </div>
  
                  {/* Contact Badges */}
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-gray-600 text-sm font-semibold">
                    <a
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-sm"
                      href={MAIL_LINK}
                    >
                      <Mail className="h-[18px] w-[18px] text-primary" />
                      <span>{CONTACT_EMAIL}</span>
                    </a>
                    <span className="hidden sm:inline-block text-gray-400">•</span>
                    <a
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-sm"
                      href={WA_LINK}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <MessageCircle className="h-[18px] w-[18px] text-primary" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
  
        <Footer />
      </div>
    )
  }