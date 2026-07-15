'use client'

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Heart, Briefcase, Users, Award, Shield, FileText, FolderOpen, HeartCrack, Star, HelpCircle } from "lucide-react";

const challenges = [
  {
    icon: <Briefcase className="w-8 h-8 text-pink-200" />,
    title: "“Sulitnya dapat magang dan peluang kerja”",
    description: "Persaingan yang semakin ketat, sedangkan perusahaan mencari kandidat yang cukup matang.",
  },
  {
    icon: <FolderOpen className="w-8 h-8 text-pink-200" />,
    title: "“Belum punya portfolio”",
    description: "Pingin punya portfolio pertama, tapi balik lagi ke persaingan yang ketat buat dapetin itu.",
  },
  {
    icon: <Award className="w-8 h-8 text-pink-200" />,
    title: "“Degree inflation”",
    description: "IPK bagus, gelar S1, tapi recruiter tetap nanya portfolio lagi.",
  },
  {
    icon: <Users className="w-8 h-8 text-pink-200" />,
    title: "“Ngga tau mulai darimana”",
    description: "Pingin mulai tapi bingung dari mana, sama siapa, dan takut salah jalan. Sampe akhirnya nggak jalan-jalan.",
  },
  {
    icon: <HeartCrack className="w-8 h-8 text-pink-200" />,
    title: "“Ngerasa tertinggal dari teman”",
    description: "Lihat teman sudah dapat internship/kerja, tiba-tiba muncul rasa minder dan mulai mempertanyakan kemampuan diri sendiri.",
  },
];

const alumni = [
  {
    name: "Sri Mulya Ningsih",
    socialMedia: "@nininghae",
    role: "Fresh Graduate",
    platform: "instagram" as const,
    imageUrl: "/alumni-nining.jpg",
  },
  {
    name: "Mutiara Mathari",
    socialMedia: "@matharimut",
    role: "IRT & Worker Mom",
    platform: "instagram" as const,
    imageUrl: "/alumni-mutiara.jpg",
  },
  {
    name: "Clarissa Noviana",
    socialMedia: "@clarissanoviana",
    role: "Mahasiswa",
    platform: "instagram" as const,
    imageUrl: "/alumni-clarissa.jpg",
  },
  {
    name: "Naufa Zelda Aurelia",
    socialMedia: "@zewffa.a",
    role: "Mahasiswa",
    platform: "instagram" as const,
    imageUrl: "/alumni-naufa.jpg",
  },
  {
    name: "Atania Difany",
    socialMedia: "@ataania",
    role: "Mahasiswa",
    platform: "instagram" as const,
    imageUrl: "/alumni-atania.jpg",
  },
];

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

const ceritaMereka = [
  {
    name: "Atania Difany",
    status: "Dulu Ditolak Berkali-kali, Akhirnya Sekarang Keterima Freelance Content Creator di Brand Skincare Nasional",
    image: "/atania.jpeg",
    link: "https://www.instagram.com/p/DZhdTcIERY7/?igsh=MXBpcHV0MDJuemw4NQ==",
    badge: "Alumni WCL Batch 1"
},
  {
    name: "Naufa Zelda Aurelia",
    status: "After Lulus WCL, Langsung Dipercaya Jadi Salah Satu PIC Sosmed Event Kampus dan Berhasil Raih 250+ Peserta",
    image: "/naufazelda.jpeg",
    link: "https://www.instagram.com/p/DZ9y2RrEQZB/?igsh=MTU1eWNiM2V6ejFscg==",
    badge: "Alumni WCL Batch 1"
},
{
  name: "Mutiara Mathari",
  status: "Dari IRT Penuh Waktu, Sekarang Dipercaya Pegang 2 Remote Jobs",
  image: "/mutiara-mathari.jpeg",
  link: "https://www.instagram.com/p/DaAXLl8EeJ6/?igsh=MWJvejZleGwyZzdiaA==",
  badge: "Alumni WCL Batch 1"
},
  
  
];

// Ukuran card per jarak dari center (index 0 = center, 1 = sebelah, dst)
// const SIZE_BY_ABS = [
//   { w: 260, h: 550 },  // center — lebih lebar
//   { w: 200, h: 470 },  // sebelah 1
//   { w: 180, h: 400 },  // sebelah 2
//   { w: 160, h: 340 },
// ] as const;

// const OPACITY_BY_ABS = [1, 0.72, 0.5];
// const STAGE_W = 680;
// const STAGE_H = 560;
// const CX = STAGE_W / 2;
// const STEP = 180;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}


function InstagramIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AlumniCarousel() {
  const isMobile = useIsMobile();
  const SIZE_BY_ABS = isMobile
    ? [
        { w: 150, h: 420 },
        { w: 120, h: 360 },
        { w: 105, h: 300 },
        { w: 90,  h: 250 },
      ]
    : [
        { w: 260, h: 550 },
        { w: 200, h: 470 },
        { w: 180, h: 400 },
        { w: 160, h: 340 },
      ];

  const OPACITY_BY_ABS = [1, 0.88, 0.72, 0.5];
  const STAGE_W = 680;
  const CX = STAGE_W / 2;
  const STEP = isMobile ? 80 : 140;
  const stageH = isMobile ? 440 : 560;
  const total = alumni.length;
  const [active, setActive] = useState(Math.floor(total / 2));
  const startXRef = useRef<number | null>(null);
  const draggingRef = useRef(false);

  const getRel = useCallback((idx: number) => {
    let r = idx - active;
    if (r > total / 2) r -= total;
    if (r < -total / 2) r += total;
    return r;
  }, [active, total]);

  const navigate = useCallback((dir: 1 | -1) => {
    setActive((prev) => (prev + dir + total) % total);
  }, [total]);

  const handlePointerDown = (x: number) => {
    startXRef.current = x;
    draggingRef.current = true;
  };

  const handlePointerMove = (x: number) => {
    if (!draggingRef.current || startXRef.current === null) return;
    const diff = x - startXRef.current;
    if (Math.abs(diff) > 45) {
      navigate(diff < 0 ? 1 : -1);
      startXRef.current = null;
      draggingRef.current = false;
    }
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <div>
      {/* Stage */}
      <div
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ height: stageH }}
        onMouseDown={(e) => handlePointerDown(e.clientX)}
        onMouseMove={(e) => handlePointerMove(e.clientX)}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={handlePointerUp}
      >
        {/* Inner container di-center secara horizontal */}
        <div
          className="absolute inset-y-0"
          style={{ left: "50%", transform: "translateX(-50%)", width: STAGE_W }}
        >
          {alumni.map((person, i) => {
            const rel = getRel(i);
            const absRel = Math.abs(rel);

            if (absRel > 3) return null;

            const { w, h } = SIZE_BY_ABS[absRel];
            const xPos = CX + rel * STEP - w / 2;
            const yPos = stageH / 2 - h / 2;
            const opacity = OPACITY_BY_ABS[absRel];
            const zIndex = 10 - absRel;
            const isCenter = rel === 0;

            return (
              <div
                key={person.name}
                className="absolute rounded-2xl overflow-hidden "
                style={{
                  width: w,
                  height: h,
                  transform: `translate(${xPos}px, ${yPos}px)`,
                  // opacity,
                  zIndex,
                  boxShadow: isCenter ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                  transition: "transform 0.45s cubic-bezier(0.34,1.05,0.64,1), opacity 0.45s ease, width 0.45s ease, height 0.45s ease",
                  
                  pointerEvents: "none",
                }}
              >
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  fill
                  className="object-cover object-top"
                  draggable={false}
                />
                {/* Overlay info */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-3 pb-4"
                  style={{
                    paddingTop: 40,
                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                  }}
                >
                  <p className="text-white font-medium leading-tight mb-0.5" style={{ fontSize: isMobile ? 11 : 13 }}>{person.name}</p>
                  <p className="text-white/75 mb-1.5" style={{ fontSize: isMobile ? 10 : 11 }}>{person.role}</p>
                  <div className="flex items-center gap-1 text-white/70 text-xs">
                    {/* <InstagramIcon size={13} />
                    <span>{person.socialMedia}</span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {alumni.map((person, i) => (
          <button
            key={person.name}
            onClick={() => setActive(i)}
            aria-label={`Lihat alumni ${person.name}`}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === active ? 16 : 6,
              background: i === active ? "#cb3689" : "rgb(209 213 219)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function WCLPBIPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [cards, setCards] = useState(challenges);
  // State & handler — ganti isAnimating dengan animatingIndex
const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);

const handleCardClick = () => {
  if (animatingIndex !== null) return;
  setAnimatingIndex(0);
  setTimeout(() => {
    setCards(prevCards => {
      const newCards = [...prevCards];
      const first = newCards.shift();
      if (first) newCards.push(first);
      return newCards;
    });
    setAnimatingIndex(null);
  }, 480);
};

  const faqs = [
    { question: "Apakah ada seleksi untuk ikut program?", answer: "Tidak ada seleksi. Namun, untuk menjaga kualitas program, kuota kami terbatas dan berdasarkan siapa cepat dia dapat." },
    {
      question: "Kenapa program ini berbayar?",
      answer:
        "Karena program ini dirancang sebagai ruang belajar terkurasi dan berpendampingan, bukan magang massal. Biaya digunakan untuk memastikan kualitas materi, pendampingan mentor, kurasi UMKM, validasi sertifikat, serta pengalaman praktik yang nyata, agar peserta benar-benar belajar, bertumbuh, dan pulang dengan skill serta portofolio yang bernilai.",
    },
    {
      question: "Apa yang membedakan Women's Career Lab (WCL) dengan program upskilling atau bootcamp lain?",
      answer:
        "WCL dirancang dengan pendekatan women-centric, dari cara mengajar, ritme, sampai dukungan solid sesama perempuan didalamnya. Kamu juga mendapatkan pembekalan materi dasar + internship placement untuk implementasi, sehingga menghemat waktu dan energi kamu dalam membangun portfolio pertama.",
    },
    { question: "Program ini cocok untuk siapa?", answer: "Mahasiswa, fresh graduate, IRT atau siapa pun yang ingin memulai karir di bidang digital tetapi tidak memiliki pengalaman atau portofolio." },
    { question: "Apa yang didapat setelah selesai program?", answer: "Kamu akan memiliki portofolio nyata, sertifikat yang divalidasi oleh industri, dan keterampilan praktis yang siap digunakan untuk memulai karirmu." },
    { question: "Bagaimana aku dapat melihat informasi lanjutan seperti mentor, jadwal dan kurikulum?", answer: "Kamu bisa klik role/bidang WCL untuk informasi lebih lengkapnya," },
    
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gray-90 text-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 text-left">
              <h1 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Semua lowongan minta experience. <span className="text-primary">Tapi kalau portfolio pertama aja belum punya, gimana mau mulai?</span>
              </h1>
              <p className="mt-4 text-gray-600 sm:text-l max-w-lg">
              Women's Career Lab hadir untuk perempuan yang mau mulai dari titik 0: belajar langsung, praktik nyata, dan pulang bawa portfolio pertama💪. Tanpa Seleksi!
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 bg-pink-50 border border-pink-100 rounded-full px-3 py-1">
                  <span className="text-primary font-bold text-sm">2 batch</span>
                  <span className="text-gray-600 text-xs">berjalan</span>
                </div>
                <div className="flex items-center gap-1.5 bg-pink-50 border border-pink-100 rounded-full px-3 py-1">
                  <span className="text-primary font-bold text-sm">35+</span>
                  <span className="text-gray-600 text-xs">perempuan bergabung</span>
                </div>
                <div className="flex items-center gap-1.5 bg-pink-50 border border-pink-100 rounded-full px-3 py-1">
                  <span className="text-primary font-bold text-sm">87%</span>
                  <span className="text-gray-600 text-xs">completion rate</span>
                </div>
                
              </div>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                <a href="#pilih-bidang" className="w-full sm:w-auto bg-gradient-to-r from-primary to-pink-600 text-white px-8 py-3.5 rounded-lg font-bold hover:shadow-lg transition-all duration-300 flex justify-center">
                  Pilih Bidangmu
                </a>
                <a href="#cerita-alumni" className="w-full sm:w-auto bg-white/10 text-primary backdrop-blur-md border border-primary/40 px-8 py-3.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex justify-center gap-2">
                  <span>▶</span> Lihat Alumni
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
              <div className="relative mx-auto w-full max-w-md lg:max-w-xl">
                <div className="absolute inset-0 bg-pink-100 rounded-3xl transform -rotate-3 scale-105"></div>
                <img
                  src="/hero-wcl.png"
                  alt="Women's Career Lab"
                  className="relative rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kenapa WCL beda Section */}
      <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Pendekatan <span className="text-primary">Women-Centric + Praktik Nyata</span></h2> 
            <p className="text-base text-gray-600 mt-4 mb-12 text-center">Mulai dari cara mengajar, ritme, hingga lingkungan yang saling supportif no judgement.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                          <Heart className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">Small-Cohort learning</h3>
                          <p className="text-gray-600 mt-2">Belajar dalam kelompok kecil agar setiap perempuan mendapat ruang untuk bertanya, berdiskusi, dan berkembang.</p>
                      </div>
                  </div>
                </Card>
                <Card className="p-6 bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                          <Briefcase className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">Praktik nyata, bukan dummy</h3>
                          <p className="text-gray-600 mt-2">Kerja langsung di UMKM dan agensi sungguhan. Portfolio yang dibawa pulang itu asli.</p>
                      </div>
                  </div>
                </Card>
                <Card className="p-6 bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                          <Users className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">Komunitas perempuan yang saling support</h3>
                          <p className="text-gray-600 mt-2">Belajar bareng perempuan yang ada di titik yang sama, nggak lagi ngerasa jalan sendiri atau tertinggal.</p>
                      </div>
                  </div>
                </Card>
                <Card className="p-6 bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                          <Award className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">Sertifikat divalidasi 3 pihak</h3>
                          <p className="text-gray-600 mt-2">Sertifikat yang ditandatangani oleh Platform, industry advisor, dan partner UMKM sebagai bukti bahwa kamu benar-benar sudah menyelesaikan program dengan nyata.</p>
                      </div>
                  </div>
                </Card>
            </div>
        </div>
      </section>

      {/* Pilih bidangmu Section */}
      <section id="pilih-bidang" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h2 className="text-3xl font-bold text-gray-900">Pilih bidangmu</h2>
            <p className="text-base text-gray-600 mt-4 mb-12">Klik untuk lihat kurikulum, mentor, jadwal, dan learning journey.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-white border-2 border-primary shadow-lg text-left hover:scale-105 transition-transform flex flex-col">
                    <CardHeader>
                        <span className="px-3 py-1 text-sm bg-primary text-white rounded-full font-semibold self-start">Tersedia</span>
                        <span className="px-3 py-1 text-sm bg-pink-50 text-primary border border-primary/30 rounded-full font-medium self-start">Batch 3 - Juli 2026</span>
                        <CardTitle className="text-2xl font-bold pt-4">Social Media Specialist</CardTitle>
                        <CardDescription className="text-base text-gray-600">3 bulan · Full Online </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                    <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-primary text-white rounded-full mb-2">
                          🔥 Flash Sale · Berakhir 20 Juli
                      </span>

                      <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400 line-through">Rp 699.000</span>
                          <span className="text-lg font-bold text-primary">Rp 549.000</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">*Berakhir 20 Juli atau seat penuh.</p>
                  </CardContent>
                    {/* <CardContent className="flex-grow">
                      <p className="text-sm font-medium text-gray-500">Kuota terbatas · 20 peserta/batch</p>
                    </CardContent> */}
                    <CardFooter>
                        <Link href="/wcl-pbi/socmed-specialist" className="flex items-center font-bold text-primary hover:underline">
                            Lihat Detail <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </CardFooter>
                </Card>

                <Card className="bg-white border-2 border-primary shadow-lg text-left hover:scale-105 transition-transform flex flex-col">
                    <CardHeader>
                        <span className="px-3 py-1 text-sm bg-primary text-white rounded-full font-semibold self-start">Tersedia</span>
                        <span className="px-3 py-1 text-sm bg-pink-50 text-primary border border-primary/30 rounded-full font-medium self-start">Batch 3 - Juli 2026</span>
                        <CardTitle className="text-2xl font-bold pt-4">Content Creator</CardTitle>
                        <CardDescription className="text-base text-gray-600">3 bulan · Full Online</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                    <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-primary text-white rounded-full mb-2">
                          🔥 Flash Sale · Berakhir 20 Juli
                      </span>

                      <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400 line-through">Rp 699.000</span>
                          <span className="text-lg font-bold text-primary">Rp 549.000</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">*Berakhir 20 Juli atau seat penuh.</p>
                  </CardContent>
                    {/* <CardContent className="mt-auto">
                      <p className="text-sm font-medium text-gray-500">Kuota terbatas · 20 peserta/batch</p>
                    </CardContent> */}
                    <CardFooter className="mt-auto">
                        <Link href="/wcl-pbi/content-creator" className="flex items-center font-bold text-primary hover:underline">
                            Lihat Detail <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </CardFooter>
                </Card>

                {/* <Card className="bg-white border-2 border-primary shadow-lg text-left hover:scale-105 transition-transform flex flex-col">
                    <CardHeader>
                        <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full font-semibold self-start">New</span>
                        <span className="px-3 py-1 text-sm bg-pink-50 text-primary border border-primary/30 rounded-full font-medium self-start">Batch 1 - Juli 2026</span>
                        <CardTitle className="text-2xl font-bold pt-4">HR Learning & Development</CardTitle>
                        <CardDescription className="text-base text-gray-600">3 bulan · Full Online</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <p className="text-sm font-medium text-gray-500">Kuota terbatas · 5 peserta/batch</p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                        <Link href="/wcl-pbi/socmed-strategist" className="flex items-center font-bold text-primary hover:underline">
                            Lihat program <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </CardFooter>
                </Card> */}
                
                  {/* Card Coming Soon */}
                <Card className="bg-gray-100 border-gray-200 text-left opacity-80">
                     <CardHeader>
                        <span className="px-3 py-1 text-sm bg-gray-500 text-white rounded-full font-semibold self-start">Segera hadir</span>
                        <CardTitle className="text-2xl font-bold pt-4 text-gray-500">HR Learning & Development</CardTitle>
                        <CardDescription className="text-base text-gray-500">Coming soon</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <span className="flex items-center font-bold text-gray-400 cursor-not-allowed">
                            Notify me <ArrowRight className="w-5 h-5 ml-2" />
                        </span>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </section>

      {/* Cerita Mereka */}
      <section className="py-16 bg-gray-50">
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
      </section>
      
      {/* Learning Story */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Apa Kata Mereka?</h2>
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

            

      {/* Social Proof Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-2xl md:text-4xl font-bold text-primary">2 batch</p>
                <p className="text-base md:text-lg text-gray-600 mt-2">sudah berjalan</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-primary">35+</p>
                <p className="text-base md:text-lg text-gray-600 mt-2">perempuan bergabung</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-primary">87%</p>
                <p className="text-base md:text-lg text-gray-600 mt-2">completion rate</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-primary">5/5</p>
                <p className="text-base md:text-lg text-gray-600 mt-2">rating materi</p>
              </div>
          </div>
        </div>
      </section> */}

      

      
       {/* Cerita Alumni — carousel tumpukan */}
       {/* <section id="cerita-alumni" className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-pink-50 to-rose-50 select-none">
         
              <div
                className="
                  absolute
                  -left-32
                  top-20
                  w-[400px]
                  h-[400px]
                  rounded-full
                  bg-[#CB3689]/10
                  blur-[120px]
                  pointer-events-none
                "
              />
              
            <div
              className="
                absolute
                -right-32
                bottom-20
                w-[400px]
                h-[400px]
                rounded-full
                bg-[#CB3689]/10
                blur-[120px]
                pointer-events-none
              "
            />
            
            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[700px]
                h-[500px]
                rounded-full
                bg-[#CB3689]/15
                blur-[50px]
                pointer-events-none
              "
            />
            
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#CB3689 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-4">
                      <h2 className="text-3xl font-bold text-gray-900">Meet <span className="text-primary">WCL Sisters👑</span></h2>
                      <p className="text-base text-gray-600 mt-2 mb-12 max-w-2xl mx-auto">Barisan perempuan yang dulunya ragu dan belum punya apa-apa. Sekarang punya portfolio nyata dan siap melangkah.</p>
                    </div>
                    <AlumniCarousel />
                  </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion type="single" collapsible key={index} className="w-full">
                <AccordionItem value={`item-${index}`} className="border-2 border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <AccordionTrigger className="px-6 py-4 text-lg font-bold text-gray-900 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* Waiting List Section */}
      <section className="bg-gray-100 py-12">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-primary rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-center gap-6">
      
      
      <div className="flex-shrink-0 bg-white/20 rounded-full p-4">
        <HelpCircle className="h-10 w-10 text-white" />

      </div>

      
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-xl font-bold text-white mt-1">Belum Cukup Yakin Ingin Memilih Bidang yang Mana?</h2>
        <p className="text-white mt-1 text-sm">
          Konsultasi GRATIS sekarang dengan tim Grazedu 🤍
        </p>
      </div>

     
      <div className="flex-shrink-0">
        
         <a href="https://api.whatsapp.com/send?phone=6282340622274&text=Halo%20kak%2C%20saya%20mau%20konsultasi%20untuk%20program%20Women's%20Career%20Lab" target="_blank" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold shadow hover:shadow-md hover:scale-105 transition-all duration-200 whitespace-nowrap">
          Konsultasi Sekarang
        </a>
      </div>

    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}
