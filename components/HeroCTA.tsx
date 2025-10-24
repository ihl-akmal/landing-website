"use client"

import { ArrowRight, CheckCircle, Heart, Sparkles } from "lucide-react"

const HeroCTA = () => {
  const benefits = [
    "Materi kelas up to date ✨",
    "Ruang belajar yang hangat, aman dan inklusif. No judgement💕",
    "Sertifikat resmi yang bisa dipakai untuk karier 🏆",
    "Merchandise eksklusif sebagai reward untuk kamu yang semangat belajar 👭",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-pink-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.1%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Cute badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Saatnya Shine, Beautiful!</span>
                <Heart className="h-4 w-4 text-white" />
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight font-poppins">
                Siap jadi versi <span className="text-pink-200">terbaikmu?</span> ✨
              </h2>

              <p className="text-xl text-pink-100">
                {
                  "Yuk, upgrade skills di Grazedu sekarang! Dapatkan akses ke program terlengkap dengan mentor inspiratif yang siap membimbingmu! 💕"
                }
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 border border-white/30">
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                  </div>
                  <span className="text-pink-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-md">
                {"Mulai Journey-ku! 🚀"}
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="https://wa.me/6282340622274"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center"
              >
                {"Konsultasi Gratis 💬"}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-white/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <img
                  src="/dokumentasi2.jpg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                  alt="Success Story"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />

                {/* Floating success badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl border border-pink-100">
                  <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-br from-primary/10 to-pink-100 p-2 rounded-xl">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">#KarenaPerempuanJugaBisa</p>
                      <p className="text-xs text-gray-600">{"Yuk melangkah bersama 💫"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCTA
