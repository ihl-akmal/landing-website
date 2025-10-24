"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, Calendar, ArrowRight, Megaphone } from "lucide-react"

interface AnnouncementBannerProps {
  onDismiss?: () => void
}

const AnnouncementBanner = ({ onDismiss }: AnnouncementBannerProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Always show banner on load - no localStorage check
    setTimeout(() => setIsAnimating(true), 100)
  }, [])

  const handleDismiss = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      onDismiss?.() // Notify parent component
    }, 300)
  }

  const scrollToUpcomingClass = () => {
    const upcomingSection = document.querySelector("#upcoming-class")
    if (upcomingSection) {
      upcomingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-primary-light to-pink-400 text-white overflow-hidden transition-all duration-300 ${
        isAnimating ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.1%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      {/* Floating decorative elements - hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-1 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute top-2 right-20 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
      <div className="hidden sm:block absolute bottom-1 left-1/4 w-3 h-3 bg-white/15 rounded-full animate-pulse"></div>

      {/* Mobile: smaller padding, Desktop: normal padding */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-1.5 sm:py-3 relative">
        <div className="flex items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-3 flex-1 min-w-0">
            {/* Icon - much smaller on mobile */}
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 sm:p-2 border border-white/30 flex-shrink-0">
              <Megaphone className="h-2.5 w-2.5 sm:h-4 sm:w-4 text-white" />
            </div>

            {/* Content - More compact on mobile */}
            <div className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <Sparkles className="h-2.5 w-2.5 sm:h-4 sm:w-4 text-white animate-pulse" />
                <span className="font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">📚 KELAS BARU!</span>
              </div>

              {/* Desktop text */}
              <div className="hidden lg:block text-sm text-white/90 truncate">
                Daftar sekarang sebelum pendaftaran ditutup ✨
              </div>

              {/* Tablet text */}
              <div className="hidden sm:block lg:hidden text-sm text-white/90 truncate">
                Kelas eksklusif bulan ini! ✨
              </div>

              {/* Mobile text - very short */}
              <div className="block sm:hidden text-xs text-white/90 truncate">Tersedia! 🔥</div>
            </div>

            {/* CTA Button - much smaller on mobile */}
            <button
              onClick={scrollToUpcomingClass}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-1.5 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border border-white/30 flex items-center gap-0.5 sm:gap-2 hover:scale-105 flex-shrink-0"
            >
              <Calendar className="h-2.5 w-2.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Lihat</span>
              <span className="sm:hidden text-xs">Lihat</span>
              <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3" />
            </button>
          </div>

          {/* Close Button - smaller on mobile */}
          <button
            onClick={handleDismiss}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-1 sm:p-2 transition-all duration-200 border border-white/30 hover:scale-105 flex-shrink-0"
            aria-label="Tutup pengumuman"
          >
            <X className="h-2.5 w-2.5 sm:h-4 sm:w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBanner
