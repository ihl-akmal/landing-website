"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

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
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-pink-100' : 'bg-transparent" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fixed height - consistent across all screen sizes */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo-grazedu-website.svg" alt="Grazedu Logo" className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
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
                href="/kelas"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                Kelas
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
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
              href="/kelas"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-pink-50 transition-colors duration-200 font-medium rounded-lg"
            >
              Kelas
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

export default Navbar
