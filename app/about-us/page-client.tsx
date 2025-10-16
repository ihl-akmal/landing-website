"use client";

import React, { useEffect, useState } from 'react';
import { Target, Eye, Heart, Users, Sparkles, Star, ArrowRight, BookOpen, Award, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const visionMission = [
    {
      icon: Eye,
      title: 'Visi',
      description: 'Menjadi platform pembelajaran terdepan yang memberdayakan perempuan muda Indonesia untuk mencapai potensi terbaik mereka dalam karir dan kehidupan personal. ✨',
      gradient: 'from-primary to-primary-light',
      bgPattern: 'from-pink-50 to-rose-50'
    },
    {
      icon: Target,
      title: 'Misi',
      description: 'Menyediakan pendidikan berkualitas tinggi, mentoring inspiratif, dan komunitas supportif yang membantu perempuan muda berkembang dengan percaya diri dan mencapai impian mereka. 💕',
      gradient: 'from-primary-light to-pink-400',
      bgPattern: 'from-rose-50 to-pink-50'
    }
  ];

  const cultures = [
    {
      icon: Heart,
      title: 'Empowerment First',
      description: 'Kami percaya setiap perempuan memiliki kekuatan luar biasa. Tugas kami adalah membantu mereka menemukan dan mengembangkan potensi tersebut dengan penuh kasih sayang. 💪✨'
    },
    {
      icon: Users,
      title: 'Sisterhood Community',
      description: 'Membangun komunitas yang saling mendukung, berbagi pengalaman, dan tumbuh bersama. Karena bersama kita lebih kuat dan bisa mencapai lebih banyak hal amazing! 👭💕'
    },
    {
      icon: Sparkles,
      title: 'Innovation & Growth',
      description: 'Selalu berinovasi dalam metode pembelajaran dan terus berkembang mengikuti perkembangan zaman untuk memberikan pengalaman terbaik bagi learners kami. 🚀🌟'
    }
  ];

  const teamMembers = [
    {
      name: 'Alifa Milanisty',
      role: 'Chief Executive Officer',
      image: '/aliffa.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievements: [
        'Awardee LPDP RI',
        'Master of Art Clinical Psychology Universitas Gadjah Mada',
        'Karate Athlete',
        'Content Creator & Public Speaker'
      ],
      description: 'Speaker 150+ events on women empowerment, mentor ratusan perempuan muda, dan passionate dalam mengembangkan potensi generasi muda Indonesia. 💫',
      social: {
        instagram: 'https://instagram.com/aliffamilanisty',
        linkedin: 'https://linkedin.com/in/alifamilanisty'
      }
    },
    {
      name: "Ihlasul A'mal",
      role: 'Program Lead',
      image: '/akmal.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievements: [
        'Startup Founder',
        'Ex MSIB Mentor',
        'Bachelor of Informatics Engineering INSTIKI',
        'Certified Public Speaking',
      ],
      description: 'Passionate educator dengan 8+ tahun pengalaman dalam pengembangan kurikulum dan metodologi pembelajaran yang engaging untuk perempuan muda. ✨',
      social: {
        instagram: 'https://instagram.com/ihl.akmal',
        linkedin: 'https://linkedin.com/in/ihlasulamal98'
      }
    },
    {
      name: 'Dayinta Lalita Kisin',
      role: 'Operational Lead',
      image: '/dayinta.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievements: [
        'Bachelor of Financial Management Universitas Dian Nuswantoro',
      ],
      description: 'Expert dalam membangun komunitas yang kuat dan menjalin partnership strategis untuk mendukung pertumbuhan karir perempuan muda Indonesia. 🌟',
      social: {
        instagram: 'https://instagram.com/dayintalalita',
        linkedin: 'https://www.linkedin.com/in/dayinta-lalita-kisin-659b62260/'
      }
    },
    {
      name: 'Cindy Mutiara Hapsari',
      role: 'Learning Development Lead',
      image: '/cindy.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      achievements: [
        'Bachelor of Anthropology Universitas Gadjah Mada',
      ],
      description: 'Expert dalam membangun komunitas yang kuat dan menjalin partnership strategis untuk mendukung pertumbuhan karir perempuan muda Indonesia. 🌟',
      social: {
        instagram: 'https://instagram.com/cindymutiaraah',
        linkedin: 'https://www.linkedin.com/in/cindymutiarahapsari/'
      }
    }
  ];

  const ctaCards = [
    {
      icon: BookOpen,
      title: 'Explore Kelas Pengembangan Diri di Grazedu!',
      description: 'Skill Up, Level Up. Temukan kelas-kelas seru & interaktif yang bikin kamu makin #Grow! 🚀',
      buttonText: 'Lihat Kelas',
      buttonColor: 'bg-gradient-to-r from-primary to-primary-light',
      bgGradient: 'from-pink-50 to-rose-50',
      link: 'https://grazedu.myr.id'
    },
    {
      icon: Award,
      title: 'Explore Kesempatan Magang di Grazedu!',
      description: 'Belajar sambil praktik nyata! Ikuti program magang di Grazedu dan dapatkan pengalaman berharga dalam mengembangkan generasi muda yang berdaya. 💼✨',
      buttonText: 'Gabung Sekarang',
      buttonColor: 'bg-gradient-to-r from-orange-400 to-pink-400',
      bgGradient: 'from-orange-50 to-pink-50',
      link: ''
    },
    {
      icon: Globe,
      title: 'Explore Kolaborasi dengan Grazedu!',
      description: 'Kami terbuka untuk berkolaborasi dengan komunitas, kampus, hingga brand yang punya visi sejalan dalam mengembangkan perempuan muda Indonesia. 🤝💕',
      buttonText: 'Ajukan Kolaborasi',
      buttonColor: 'bg-gradient-to-r from-purple-500 to-primary',
      bgGradient: 'from-purple-50 to-pink-50',
      link: 'https://wa.me/6285256886581'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Company Description Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-pink-400/20 rounded-3xl blur-2xl opacity-60"></div>
                <img
                  src="/dokumentasi1.jpg"
                  alt="Grazedu Team"
                  className="relative w-full h-96 object-cover bg-white rounded-3xl shadow-2xl border border-white/50"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-pink-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-primary/10 to-pink-100 p-2 rounded-xl">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Ruang aman untuk tumbuh</p>
                      <p className="text-xs text-gray-600">Sukses karir, tumbuh secara pribadi 💕</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-pink-100 px-4 py-2 rounded-full border border-primary/20">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">About Grazedu</span>
                  <Heart className="h-4 w-4 text-primary" />
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold leading-tight font-poppins">
                  <span className="text-gray-800">Bangkit, Berkembang,</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                    Berdaya ✨
                  </span>
                </h1>

                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Hampir 50% perempuan di Asia termasuk Indonesia tidak cukup percaya diri dan puas akan kemajuan karir mereka. Dampaknya masih sedikit perempuan yang berada di level kepemimpinan. Sedangkan beberapa tahun kedepan, jumlah populasi perempuan
                    Indonesia akan lebih besar daripada pria. Kegagalan perempuan untuk berkembang secara pribadi dan profesional akan berpotensi menjadi beban, bukan lagi kekuatan.
                  </p>
                  <p>
                    Untuk itu kami hadir sebagai safe space growing partner. Melalui kelas, komunitas, dan program mentoring, kami bantu kamu jadi pribadi yang lebih percaya diri, tangguh, dan berdaya. 🌟
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-rose-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-pink-100 px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Visi & Misi Kami</span>
              <Heart className="h-4 w-4 text-primary" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="h-full rounded-3xl p-8 text-white bg-gradient-to-br from-primary/90 to-pink-400/80 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4"><Star className="h-6 w-6" /></div>
                <div className="absolute bottom-4 left-4"><Heart className="h-4 w-4" /></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><Sparkles className="h-8 w-8" /></div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 w-fit border border-white/30 mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold font-poppins mb-4 text-left">Visi</h2>
              <p className="text-white/90 leading-relaxed text-left">Tempat ternyaman untuk perempuan bertumbuh. Setiap perempuan berhak mendapatkan kesempatan berkembang, tidak mengintimidasi dan ramah bagi siapapun✨</p>
            </div>
            {/* Misi - orange gradient */}
            <div className="h-full rounded-3xl p-8 text-white bg-gradient-to-br from-orange-400 to-pink-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4"><Star className="h-6 w-6" /></div>
                <div className="absolute bottom-4 left-4"><Heart className="h-4 w-4" /></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><Sparkles className="h-8 w-8" /></div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 w-fit border border-white/30 mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold font-poppins mb-4 text-left">Misi</h2>
              <p className="text-white/90 leading-relaxed text-left">Menyediakan kelas pembelajaran yang hangat, supportif, dan inspiratif yang membantu perempuan muda berkembang dengan percaya diri dan mencapai impian mereka. 💕</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-pink-100 px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nilai dan Kultur Perusahaan</span>
              <Heart className="h-4 w-4 text-primary" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
              Kultur yang <span className="text-primary">Menginspirasi</span> ✨
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap interaksi dan program yang kami jalankan 💕
            </p>
          </div>

          <div className="space-y-12">
            {cultures.map((culture, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-primary/10 to-pink-100 rounded-3xl p-8 border border-primary/20 relative overflow-hidden">
                    <div className="absolute top-2 right-2">
                      <Star className="h-4 w-4 text-primary/30" />
                    </div>
                    <div className="text-center">
                      <div className="bg-white rounded-2xl p-4 w-fit mx-auto mb-4 shadow-md">
                        <culture.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary font-poppins">{culture.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100 relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-primary/20">
                      <Heart className="h-6 w-6" />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">{culture.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-pink-50 to-rose-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-pink-100 px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Tim Inspiratif</span>
              <Heart className="h-4 w-4 text-primary" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
              <span className="text-primary">Our Team</span> ✨
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bertemu dengan tim amazing yang berdedikasi untuk memberdayakan perempuan muda Indonesia! 💕
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-pink-100 relative overflow-hidden">
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-pink-100 rounded-full blur-2xl"></div>
                  <div className="absolute top-2 right-2">
                    <Star className="h-4 w-4 text-primary/30" />
                  </div>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="text-center">
                      <div className="relative mx-auto w-24 h-24 mb-4">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                          <Heart className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 font-poppins">{member.name}</h3>
                      <p className="text-primary font-semibold">{member.role}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-2">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* <p className="text-sm text-gray-700 leading-relaxed">{member.description}</p> */}
                      
                      <div className="flex justify-center gap-3 pt-2">
                        <a href={member.social.instagram} className="p-2 bg-gradient-to-br from-primary/10 to-pink-100 rounded-xl hover:bg-primary hover:text-white transition-colors duration-200 border border-primary/20">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                        <a href={member.social.linkedin} className="p-2 bg-gradient-to-br from-primary/10 to-pink-100 rounded-xl hover:bg-primary hover:text-white transition-colors duration-200 border border-primary/20">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-pink-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.1%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Siap Bergabung?</span>
              <Heart className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins">
              Mulai <span className="text-pink-200">Journey</span> Bersama Kami! ✨
            </h2>
            <p className="text-lg text-pink-100 max-w-2xl mx-auto">
              Pilih cara terbaik untuk bergabung dengan komunitas amazing Grazedu dan kembangkan potensi terbaikmu! 💕
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ctaCards.map((card, idx) => (
              <div key={idx} className={`rounded-3xl p-8 shadow-lg bg-white/10 backdrop-blur-sm`}> 
                <div className="bg-white/20 rounded-full p-4 w-fit mb-4">
                  <card.icon className="w-8 h-8 text-white drop-shadow-md" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-poppins text-white drop-shadow-md">{card.title}</h3>
                <p className="text-white/90 mb-6 drop-shadow-md">{card.description}</p>
                <button
                  className="bg-white text-primary px-5 py-2 rounded-full font-semibold hover:scale-105 transition flex items-center gap-2 shadow-md"
                  onClick={() => card.link && card.link !== '' ? window.open(card.link, '_blank', 'noopener,noreferrer') : undefined}
                >
                  {card.buttonText}
                  <ArrowRight className="w-4 h-4 text-primary" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;