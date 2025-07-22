"use client"

import { Clock, GraduationCap, Monitor, ArrowRight, Sparkles, Heart, Star } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const Programs = () => {
  const programs = [
    {
      icon: Clock,
      title: "Short Class",
      description:
        "Kelas singkat untuk memberi wawasan praktis secara efisien dengan topik self improvement & soft skills 🧠✨",
      color: "bg-blue-500",
      gradient: "from-blue-400 to-blue-500",
      bgPattern: "from-blue-50 to-indigo-50",
      link: "https://grazedu.myr.id/"
    },
    {
      icon: GraduationCap,
      title: "Intensive Class",
      description:
        "Kelas mendalam untuk kamu yang serius mau berkembang dibimbing step-by-step dengan materi terstruktur, mentor supportif, dan sesi interaktif💼💫",
      color: "bg-primary",
      gradient: "from-primary to-primary-light",
      bgPattern: "from-pink-50 to-rose-50",
      link: "https://grazedu.myr.id/"
    },
    {
      icon: Heart,
      title: "Magang Mandiri",
      description:
        "Program magang untuk mendapatkan pengalaman praktis, mengembangkan skill, atau memenuhi syarat akademik seperti konversi SKS.  💻🌟",
      color: "bg-orange-500",
      gradient: "from-orange-400 to-pink-400",
      bgPattern: "from-orange-50 to-pink-50",
      link: ""
    },
  ]

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-rose-300/15 rounded-full blur-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-pink-100 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Program Pilihan Terbaik</span>
            <Heart className="h-4 w-4 text-primary" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Explore Program <span className="text-primary">Pilihanmu</span> ✨
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {
              "Skill up, level up: Pilih program yang bikin kamu makin #grow💕"
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group">
              <div
                className={`h-full rounded-3xl p-8 text-white bg-gradient-to-br ${program.gradient} hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden`}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4">
                    <Star className="h-6 w-6" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Heart className="h-4 w-4" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Sparkles className="h-8 w-8" />
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 w-fit border border-white/30">
                    <program.icon className="h-8 w-8" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-poppins">{program.title}</h3>
                    <p className="text-white/90 leading-relaxed">{program.description}</p>
                  </div>

                  {/* Button logic: if Magang Mandiri, show Dialog; else, open link */}
                  {program.title === "Magang Mandiri" ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all duration-200 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30"
                        >
                          Lihat Detail
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Informasi Magang Mandiri:</DialogTitle>
                        </DialogHeader>
                        <div className="text-center py-4 text-base">
                          Magang Mandiri Batch 4 sedang berlangsung, ditunggu pembukaan batch 5 yaa ✨
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <button
                      type="button"
                      onClick={() => program.link && program.link !== '' ? window.open(program.link, '_blank', 'noopener,noreferrer') : undefined}
                      className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all duration-200 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30"
                    >
                      Lihat Detail
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">{"Siap memulai perjalanan menuju versi terbaikmu? 🌟"}</p>
          <button className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
            {"Mulai Sekarang! 🚀"}
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default Programs
