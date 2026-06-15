'use client'

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Heart, Briefcase, Users, Award, Shield, FileText, FolderOpen, HelpCircle, RefreshCw } from "lucide-react";

const challenges = [
  {
    icon: <FileText className="w-8 h-8 text-pink-200" />,
    title: "“CV-ku masih kosong”",
    description: "Merasa minder karena belum punya pengalaman kerja untuk dicantumkan di CV.",
  },
  {
    icon: <FolderOpen className="w-8 h-8 text-pink-200" />,
    title: "“Nggak ada portofolio”",
    description: "Kesulitan menunjukkan keahlian karena tidak memiliki hasil kerja nyata untuk ditampilkan.",
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-pink-200" />,
    title: "“Salah jurusan, bisa gak?”",
    description: "Khawatir tidak bisa bersaing karena latar belakang pendidikan yang tidak relevan.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-pink-200" />,
    title: "“Takut memulai dari nol”",
    description: "Ragu untuk beralih karir atau memulai di bidang baru tanpa panduan.",
  },
];

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
    { question: "Apakah ada seleksi untuk masuk?", answer: "Tidak ada seleksi. Namun, untuk menjaga kualitas program, kuota kami terbatas dan berdasarkan siapa cepat dia dapat." },
    { question: "Program ini cocok untuk siapa?", answer: "Mahasiswa, fresh graduate, atau siapa pun yang ingin memulai karir di bidang digital tetapi tidak memiliki pengalaman atau portofolio." },
    { question: "Kalau sibuk kuliah atau kerja, masih bisa ikut?", answer: "Tentu saja! Program ini dirancang fleksibel dengan sesi malam hari dan rekaman yang tersedia, sehingga tidak akan mengganggu jadwal utama Anda." },
    { question: "Apa yang didapat setelah selesai program?", answer: "Anda akan memiliki portofolio nyata, sertifikat yang divalidasi oleh industri, dan keterampilan praktis yang siap digunakan untuk memulai karir Anda." },
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
                Women's <span className="text-primary">Career Lab</span>
              </h1>
              <p className="mt-4 text-gray-600 sm:text-l max-w-lg">
                Progam upskilling yang membantu perempuan membangun real-portfolio pertama dan daya saing karir sejak awal tanpa seleksi💪
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                <a href="#pilih-bidang" className="w-full sm:w-auto bg-gradient-to-r from-primary to-pink-600 text-white px-8 py-3.5 rounded-lg font-bold hover:shadow-lg transition-all duration-300 flex justify-center">
                  Pilih Bidangmu
                </a>
                <a href="#cerita-alumni" className="w-full sm:w-auto bg-white/10 text-primary backdrop-blur-md border border-primary/40 px-8 py-3.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex justify-center gap-2">
                  <span>▶</span> Lihat Cerita Alumni
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
              <div className="relative mx-auto w-full max-w-md lg:max-w-xl">
                <div className="absolute inset-0 bg-pink-50 rounded-3xl transform -rotate-3 scale-105"></div>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Women collaborating in a meeting"
                  className="relative rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-2xl md:text-4xl font-bold text-primary">2 batch</p>
                <p className="text-base md:text-lg text-gray-600 mt-2">sudah berjalan</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-primary">36+</p>
                <p className="text-base md:text-lg text-gray-600 mt-2">alumni perempuan</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-primary">87%</p>
                <p className="text-base md:text-lg text-gray-600 mt-2">completion rate</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-primary">4.6/5</p>
                <p className="text-base md:text-lg text-gray-600 mt-2">rating alumni</p>
              </div>
          </div>
        </div>
      </section>

      {/* Masalah yang diselesaikan Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tantangan <span className="text-primary">Perempuan Hari Ini</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-xl">
                Kamu rajin belajar, aktif di kampus — tapi pas mau apply kerja, tiba-tiba ngerasa nggak cukup. CV kosong, portfolio nol, dan nggak tau harus mulai dari mana. Kalau kamu ngerasa ini, kamu nggak sendirian. WCL ada untuk itu.
              </p>
            </div>

            <div className="relative mt-12 lg:mt-0 h-80 flex items-center justify-center">
              <>
              <style>{`
    @keyframes hint-bounce {
      0%, 100% { transform: rotate(0deg) translateY(0px); }
      50% { transform: rotate(0deg) translateY(-10px); }
    }
  `}</style>
              </>
              {cards.map((card, index) => {
                const isThisAnimating = animatingIndex !== null && index === 0;

                return (
                  <div
                  key={card.title}
                  className="absolute w-full max-w-sm cursor-pointer"
                  style={{
                    zIndex: cards.length - index,
                    transform: isThisAnimating
                      ? 'translateX(105%) translateY(-30%) rotate(25deg) scale(0.8)'
                      : `rotate(${index === 0 ? 0 : index * 4}deg)`,
                    opacity: isThisAnimating ? 0 : 1,
                    transition: 'transform 480ms cubic-bezier(0.4, 0, 1, 1), opacity 380ms ease',
                    animation: index === 0 ? 'hint-bounce 0.6s ease-in-out 1s 2' : 'none', // ← tambah ini
                  }}
                  onClick={handleCardClick}
                  >
                    {/* Card dengan gradient + depth */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-primary rounded-2xl" 
                      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.1)' }} />
                      
                      {/* Subtle texture overlay */}
                      {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" /> */}

                      {/* Highlight rim atas */}
                      {/* <div className="absolute top-0 left-0 right-0 h-px " /> */}

                      {/* Content */}
                      <div className="relative p-6">
                        <div className="flex flex-row items-center gap-3 mb-4">
                          <div className="p-2.5 bg-white/15 rounded-xl shadow-inner">
                            {card.icon}
                          </div>
                          <h3 className="text-lg font-bold text-white leading-snug">
                            {card.title}
                          </h3>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
</section>

      {/* Kenapa WCL beda Section */}
      <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Bukan sekadar kelas — ini yang bikin WCL berbeda</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                          <Heart className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">Women-centric learning</h3>
                          <p className="text-gray-600 mt-2">Dirancang memahami cara belajar dan tantangan perempuan — bukan kurikulum generik.</p>
                      </div>
                  </div>
                </Card>
                <Card className="p-6 bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                          <Briefcase className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">Praktik nyata, bukan simulasi</h3>
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
                          <h3 className="text-xl font-bold">Mentor praktisi industri</h3>
                          <p className="text-gray-600 mt-2">Bukan teori semata — mentor WCL masih aktif bekerja di bidangnya.</p>
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
                          <p className="text-gray-600 mt-2">Platform, industry advisor, dan partner UMKM — bukan sekadar tanda hadir.</p>
                      </div>
                  </div>
                </Card>
            </div>
        </div>
      </section>

      {/* Pilih bidangmu Section */}
      <section id="pilih-bidang" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Pilih bidangmu</h2>
            <p className="text-lg text-gray-600 mt-4 mb-12">Klik untuk lihat kurikulum, jadwal, dan harga lengkap</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-white border-2 border-primary shadow-lg text-left hover:scale-105 transition-transform">
                    <CardHeader>
                        <span className="px-3 py-1 text-sm bg-primary text-white rounded-full font-semibold self-start">Tersedia</span>
                        <CardTitle className="text-2xl font-bold pt-4">Social Media & Content Strategist</CardTitle>
                        <CardDescription className="text-base text-gray-600">2-3 bulan · project-based</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Link href="/wcl-pbi/socmed-strategist" className="flex items-center font-bold text-primary hover:underline">
                            Lihat program <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="bg-gray-100 border-gray-200 text-left opacity-80">
                    <CardHeader>
                        <span className="px-3 py-1 text-sm bg-gray-500 text-white rounded-full font-semibold self-start">Segera hadir</span>
                        <CardTitle className="text-2xl font-bold pt-4 text-gray-500">HR & Talent Acquisition</CardTitle>
                        <CardDescription className="text-base text-gray-500">Coming soon</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <span className="flex items-center font-bold text-gray-400 cursor-not-allowed">
                            Notify me <ArrowRight className="w-5 h-5 ml-2" />
                        </span>
                    </CardFooter>
                </Card>
                <Card className="bg-gray-100 border-gray-200 text-left opacity-80">
                     <CardHeader>
                        <span className="px-3 py-1 text-sm bg-gray-500 text-white rounded-full font-semibold self-start">Segera hadir</span>
                        <CardTitle className="text-2xl font-bold pt-4 text-gray-500">Bidang lainnya</CardTitle>
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

      {/* Cerita mereka — alumni */}
      <section id="cerita-alumni" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Perjalanan nyata dari alumni WCL</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col text-center">
                    <CardContent className="p-6 flex flex-col items-center gap-4 flex-grow">
                        <Avatar className="w-24 h-24 border-4 border-primary">
                            <AvatarImage src="/atania.jpeg" alt="Atania Difany" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                        <p className="text-xl font-bold text-gray-900">Atania Difany</p>
                        <blockquote className="italic text-gray-600 flex-grow">"Dulu ditolak berkali-kali, sekarang akhirnya diterima di brand skincare nasional."</blockquote>
                    </CardContent>
                    <CardFooter className="p-4 bg-gray-50">
                         <a href="#" className="flex items-center font-semibold text-primary hover:underline w-full justify-center">
                            Lihat cerita <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </CardFooter>
                </Card>
                <Card className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col text-center">
                    <CardContent className="p-6 flex flex-col items-center gap-4 flex-grow">
                        <Avatar className="w-24 h-24 border-4 border-primary">
                            <AvatarImage src="/cindy.jpg" alt="Cindy Claudia" />
                            <AvatarFallback>CC</AvatarFallback>
                        </Avatar>
                        <p className="text-xl font-bold text-gray-900">Cindy Claudia</p>
                        <blockquote className="italic text-gray-600 flex-grow">"Ilmunya daging banget! Aku jadi punya bekal portfolio buat apply kerja nanti."</blockquote>
                    </CardContent>
                    <CardFooter className="p-4 bg-gray-50">
                         <a href="#" className="flex items-center font-semibold text-primary hover:underline w-full justify-center">
                            Lihat cerita <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </CardFooter>
                </Card>
                <Card className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col text-center">
                    <CardContent className="p-6 flex flex-col items-center gap-4 flex-grow">
                        <Avatar className="w-24 h-24 border-4 border-primary">
                            <AvatarImage src="/dayinta.jpg" alt="Dayinta" />
                            <AvatarFallback>D</AvatarFallback>
                        </Avatar>
                        <p className="text-xl font-bold text-gray-900">Dayinta</p>
                        <blockquote className="italic text-gray-600 flex-grow">"Nggak cuma teori, tapi beneran praktik langsung di UMKM. Pengalaman yang berharga banget."</blockquote>
                    </CardContent>
                    <CardFooter className="p-4 bg-gray-50">
                         <a href="#" className="flex items-center font-semibold text-primary hover:underline w-full justify-center">
                            Lihat cerita <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Siap memulai perjalananmu?</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Daftar waiting list dan jadilah yang pertama tahu saat batch berikutnya dibuka.</p>
            <Button size="lg" asChild className="bg-primary text-white font-bold text-lg px-8 py-7 mt-8 hover:shadow-xl transition-shadow">
              <a href="#">Daftar waiting list</a>
            </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
