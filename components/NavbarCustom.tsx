"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  announcementVisible?: boolean
}

const NavbarCustom = ({ announcementVisible = true }: NavbarProps) => {
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
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        announcementVisible ? "top-8 sm:top-12" : "top-0"
      } bg-white/95 backdrop-blur-md ${isScrolled ? "shadow-lg border-b border-pink-100" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fixed height - exactly the same always */}
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            <img src="/logo-grazedu-website.svg" alt="Grazedu Logo" className="h-8 w-auto" />
          </a>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                Home
              </a>
              <a
                href="#programs"
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
              <a href="/about-us" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
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
              className="text-gray-700 hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with better styling and positioning */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-pink-100 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-pink-50 transition-colors duration-200 font-medium rounded-lg"
            >
              Home
            </a>
            <a
              href="#programs"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-pink-50 transition-colors duration-200 font-medium rounded-lg"
            >
              Program
            </a>
            <a
              href="#sertifikat"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-pink-50 transition-colors duration-200 font-medium rounded-lg"
            >
              Cek Sertifikat
            </a>
            <a
              href="/about-us"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-pink-50 transition-colors duration-200 font-medium rounded-lg"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-pink-50 transition-colors duration-200 font-medium rounded-lg"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavbarCustom
