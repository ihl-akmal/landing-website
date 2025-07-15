"use client"

import { useState, useEffect } from "react"
import { Menu, X, Heart } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-pink-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent font-poppins">
              grazedu
            </div>
            <Heart className="h-5 w-5 text-primary" />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                Home
              </a>
              <a
                href="#program"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                Program
              </a>
              <a
                href="#sertifikat"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                Cek Sertifikat
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                About Us
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#program"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Program
            </a>
            <a
              href="#sertifikat"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Cek Sertifikat
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
