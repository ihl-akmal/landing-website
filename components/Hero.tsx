"use client"

import { useEffect, useState } from "react"
import { Play, Award, Users, BookOpen, Heart, Sparkles, Shield, Gift } from "lucide-react"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToPrograms = () => {
    const programSection = document.getElementById("programs")
    if (programSection) {
      programSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white relative overflow-hidden pt-4 sm:pt-8"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23CB3689%22 fillOpacity=%220.05%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300/20 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-rose-300/15 rounded-full blur-xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 sm:py-20">
          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Cute badge - responsive */}
              <div
                className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-pink-100 px-3 sm:px-4 py-2 rounded-full border border-primary/20 transition-all duration-1000 delay-200 mt-4 sm:mt-8 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">Platform Khusus Perempuan Hebat</span>
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              </div>

              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-poppins transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <span className="text-gray-800">Wujudkan</span>
                <br />
                <span className="text-gray-800">Impianmu,</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {"Karena Kamu Istimewa! ✨"}
                </span>
              </h1>

              <p
                className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                Platform pengembangan diri untuk perempuan muda yang ingin mengembangkan potensi terbaiknya dalam karir
                professional maupun pertumbuhan pribadi <b>#KarenaPerempuanJugaBisa</b> 💪
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <button
                onClick={scrollToPrograms}
                className="bg-gradient-to-r from-primary to-primary-light text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-md text-sm sm:text-base"
              >
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                {"Mulai Journey-ku! 🚀"}
              </button>
            </div>

            <div
              className={`flex items-center gap-4 sm:gap-8 pt-6 sm:pt-8 transition-all duration-1000 delay-900 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-gradient-to-br from-primary/10 to-pink-100 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-primary/20">
                  <Award className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 font-medium">Mentor Inspiratif</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-gradient-to-br from-primary/10 to-pink-100 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-primary/20">
                  <Users className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 font-medium">Komunitas Supportif</span>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-pink-400/20 rounded-3xl blur-2xl opacity-60"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-pink-300/30 rounded-full blur-lg"></div>

              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-8 shadow-2xl border border-white/50">
                {/* Placeholder for new hero image - replace with your uploaded image */}
                <img
                  src="/hero.jpg?height=384&width=500"
                  alt="Grazedu Hero Image"
                  className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-lg"
                />

                {/* Floating bubble 1: Mentor Inspiratif - responsive positioning */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-pink-100">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-gradient-to-br from-primary/10 to-pink-100 p-1 sm:p-2 rounded-lg sm:rounded-xl">
                      <BookOpen className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm">Mentor Inspiratif</p>
                      <p className="text-xs text-gray-600">{"Siap Membimbingmu! 💕"}</p>
                    </div>
                  </div>
                </div>

                {/* Floating bubble 2: Safe Space - responsive positioning */}
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-green-100">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-1 sm:p-2 rounded-lg sm:rounded-xl">
                      <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm">Safe Space</p>
                      <p className="text-xs text-gray-600">{"Ruang aman untuk tumbuh 🌱"}</p>
                    </div>
                  </div>
                </div>

                {/* Floating bubble 3: Hadiah Spesial - responsive positioning */}
                <div className="absolute top-1/2 -left-3 sm:-left-6 transform -translate-y-1/2 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-yellow-100">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-1 sm:p-2 rounded-lg sm:rounded-xl">
                      <Gift className="h-4 w-4 sm:h-6 sm:w-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm">Hadiah Spesial</p>
                      <p className="text-xs text-gray-600">{"Apresiasi setiap langkahmu 🎁"}</p>
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

export default Hero
