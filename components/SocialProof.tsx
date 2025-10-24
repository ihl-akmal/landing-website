"use client"

import { useState, useEffect, useRef } from "react"
import { Users, Award, BookOpen, Star } from "lucide-react"

const scrollToPrograms = () => {
  const programSection = document.getElementById("programs")
  if (programSection) {
    programSection.scrollIntoView({ behavior: "smooth" })
  }
}

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    mentors: 0,
    students: 0,
    rating: 0,
    komunitas: 0,
  })

  const sectionRef = useRef<HTMLDivElement>(null)

  const finalCounts = {
    mentors: 15,
    students: 3000,
    rating: 92,
    komunitas: 1000,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateCounters = () => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        mentors: Math.floor(finalCounts.mentors * progress),
        students: Math.floor(finalCounts.students * progress),
        rating: Math.floor(finalCounts.rating * progress),
        komunitas: Math.floor(finalCounts.komunitas * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(finalCounts)
      }
    }, stepDuration)
  }

  const stats = [
    {
      icon: Users,
      number: `${counts.mentors}+`,
      label: "Mentor Muda yang Inspiring",
      color: "bg-pink-100 text-primary",
      bgGradient: "from-pink-100 to-rose-100",
    },
    {
      icon: Award,
      number: `${counts.students.toLocaleString()}+`,
      label: "Perempuan Bergabung",
      color: "bg-purple-100 text-purple-600",
      bgGradient: "from-purple-100 to-pink-100",
    },
    {
      icon: BookOpen,
      number: `${counts.rating}%`,
      label: "Mereka Excited Belajar",
      color: "bg-yellow-100 text-yellow-600",
      bgGradient: "from-yellow-100 to-orange-100",
    },
    {
      icon: Star,
      number: `${counts.komunitas}+`,
      label: "Anggota Komunitas",
      color: "bg-rose-100 text-rose-600",
      bgGradient: "from-rose-100 to-pink-100",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-300/15 rounded-full blur-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Pencapaian <span className="text-primary">Luar Biasa</span> Bersama Kami ✨
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          🌱 Bukan soal menjadi sempurna, tapi tentang berani memulai.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className={`relative bg-gradient-to-br ${stat.bgGradient} rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50`}
              >
                {/* Sparkle decoration */}
                <div className="absolute top-2 right-2 text-primary/30">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <div
                  className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-200 shadow-md`}
                >
                  <stat.icon className="h-6 w-6 lg:h-8 lg:w-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl lg:text-4xl font-bold text-gray-800 font-poppins">{stat.number}</h3>
                  <p className="text-xs lg:text-sm text-gray-600 font-medium leading-relaxed">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">{"Siap jadi bagian dari komunitas perempuan hebat? 💪"}</p>
          <button onClick={scrollToPrograms} className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
            {"Gabung Sekarang! 🚀"}
          </button>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
