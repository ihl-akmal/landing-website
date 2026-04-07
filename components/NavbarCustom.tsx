"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            <img src="/logo-grazedu-website.svg" alt="Grazedu Logo" className="h-8 w-auto" />
          </a>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                Home
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200 font-medium focus:outline-none">
                  Program <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/kelas">Short Class</Link>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem asChild>
                    <Link href="/wcl-pbi/socmed-strategist">Women's Career Lab</Link>
                  </DropdownMenuItem> */}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/about-us" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                About Us
              </Link>
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

            <Collapsible>
              <CollapsibleTrigger className="flex justify-between items-center w-full px-4 py-3 text-gray-700 hover:text-primary hover:bg-pink-50 transition-colors duration-200 font-medium rounded-lg">
                <span>Program</span>
                <ChevronDown className="h-5 w-5" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4">
                <a
                  href="/kelas"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-pink-50 transition-colors duration-200 font-medium rounded-lg"
                >
                  Short Class
                </a>
                {/* <a
                  href="/wcl-pbi/socmed-strategist"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-pink-50 transition-colors duration-200 font-medium rounded-lg"
                >
                  Women's Career Lab
                </a> */}
              </CollapsibleContent>
            </Collapsible>
            
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
