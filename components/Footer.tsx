"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, Sparkles } from "lucide-react"

const Footer = () => {
  const footerLinks = {
    Company: ["About Us", "Our Team", "Careers", "Contact"],
    Programs: ["Web Development", "Data Science", "UI/UX Design", "Digital Marketing"],
    Resources: ["Blog", "Documentation", "Help Center", "Community"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://instagram.com/grazedu_id",
      label: "Instagram",
    },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-gradient-to-br from-white via-pink-50 to-rose-50 text-gray-800 relative overflow-hidden border-t border-pink-100">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-rose-300/15 rounded-full blur-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent font-poppins">
                grazedu
              </div>
              <Heart className="h-6 w-6 text-primary" />
            </div>

            <p className="text-gray-600 leading-relaxed">
              {
                "Platform pembelajaran online yang membantu perempuan muda mengembangkan potensi terbaik dengan dukungan mentor inspiratif dan komunitas yang supportif. ✨💕"
              }
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span>grazeduindonesia@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span>+62823 4062 2274 (WA Only)</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span>Bali, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 font-poppins flex items-center gap-2">
                {title}
                <Sparkles className="h-4 w-4 text-primary" />
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-pink-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              {"© 2024 Grazedu. All rights reserved. Made with 💕 for amazing women!"}
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-primary hover:text-white transition-colors duration-200 border border-pink-200 hover:border-primary shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
