"use client"

import { Heart, Sparkles, Star } from "lucide-react"

const Partnership = () => {
  const partners = [
    { name: "Indigo Telkom", logo: "/mitra/indigo.png" },
    { name: "Dibimbing.id", logo: "/mitra/dibimbing.png" },
    { name: "HearMe", logo: "/mitra/hearme.png" },
    { name: "Kitalulus", logo: "/mitra/kitalulus.png", customClass: "h-16 md:h-20 w-auto" },
    { name: "itb stikom", logo: "/mitra/stikom.png" },
    { name: "growthskill", logo: "/mitra/growthskill.png" },
    { name: "aiesec usu", logo: "/mitra/aiesecusu.png"},
    { name: "temanbicaraku", logo: "/mitra/temanbicaraku.png", customClass: "h-16 md:h-20 w-auto" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-300/15 rounded-full blur-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-pink-100 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Partnership Goals</span>
            <Heart className="h-4 w-4 text-primary" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Mitra <span className="text-primary">Kolaborasi</span> ✨
          </h2>
          <p className="text-lg text-gray-600">
            {"Telah berkolaborasi dengan berbagai perusahaan, kampus hingga local community💕"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-pink-100 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-1 right-1">
                  <Star className="h-3 w-3 text-primary/20" />
                </div>
                <div className="absolute bottom-1 left-1">
                  <Heart className="h-2 w-2 text-primary/20" />
                </div>

                <img
                  src={partner.logo || "/placeholder.svg?height=48&width=150"}
                  alt={partner.name}
                  className={`w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 ${
                    partner.customClass || "h-16 md:h-20"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 text-lg">
            {"Ingin berkolaborasi menciptakan dampak yang positif & memberdayakan perempuan? 🌟"}
          </p>
          <a
            href="https://wa.me/6282358712443"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md"
          >
            {"Ajukan Kerjasama 💕"}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Partnership
