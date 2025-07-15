"use client"

import { useState } from "react"
import { Linkedin, Twitter, Instagram, Globe, Heart, Star, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

const Mentors = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const mentors = [
    {
      name: "Ahmad Rizal",
      title: "Senior UI/UX Designer",
      company: "Google Indonesia",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["UI/UX Design", "Product Strategy", "Design Systems"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
      quote: "Design with empathy! 💕",
    },
    {
      name: "Sasha Safira",
      title: "Data Scientist",
      company: "Tokopedia",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Machine Learning", "Data Analysis", "Python"],
      social: {
        linkedin: "#",
        twitter: "#",
        globe: "#",
      },
      quote: "Data tells beautiful stories! ✨",
    },
    {
      name: "Hasan Parhabi",
      title: "Full Stack Developer",
      company: "Gojek",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["React", "Node.js", "DevOps"],
      social: {
        linkedin: "#",
        instagram: "#",
        globe: "#",
      },
      quote: "Code with passion! 🚀",
    },
    {
      name: "Mutia Sari",
      title: "Product Manager",
      company: "Shopee",
      image:
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Product Strategy", "Agile", "Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
      quote: "Lead with heart! 💪",
    },
    {
      name: "Diana Putri",
      title: "Digital Marketing Specialist",
      company: "Bukalapak",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Social Media", "Content Strategy", "SEO"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
      quote: "Marketing is storytelling! 📱",
    },
    {
      name: "Rina Maharani",
      title: "Business Analyst",
      company: "Traveloka",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Business Intelligence", "Analytics", "Strategy"],
      social: {
        linkedin: "#",
        globe: "#",
        instagram: "#",
      },
      quote: "Data drives decisions! 📊",
    },
  ]

  // Responsive slides configuration
  const getMentorsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1 // Mobile: 1 mentor per slide
      if (window.innerWidth < 1024) return 2 // Tablet: 2 mentors per slide
      return 4 // Desktop: 4 mentors per slide
    }
    return 4
  }

  const [mentorsPerSlide, setMentorsPerSlide] = useState(getMentorsPerSlide())
  const totalSlides = Math.ceil(mentors.length / mentorsPerSlide)

  // Update mentors per slide on window resize
  useState(() => {
    const handleResize = () => {
      setMentorsPerSlide(getMentorsPerSlide())
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  })

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentMentors = () => {
    const start = currentSlide * mentorsPerSlide
    return mentors.slice(start, start + mentorsPerSlide)
  }

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
            <span className="text-sm font-medium text-primary">Mentor Inspiratif</span>
            <Heart className="h-4 w-4 text-primary" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Mentor & <span className="text-primary">Speaker</span> ✨
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {
              "Bergabunglah dengan mentor-mentor inspiratif dari berbagai perusahaan teknologi terkemuka yang siap membimbingmu! 💕"
            }
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile, positioned better on larger screens */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 border border-pink-100 hidden md:flex items-center justify-center"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 border border-pink-100 hidden md:flex items-center justify-center"
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>

          {/* Mentors Grid - Responsive */}
          <div className="px-0 md:px-12">
            <div
              className={`grid gap-8 transition-all duration-500 ease-in-out ${
                mentorsPerSlide === 1
                  ? "grid-cols-1"
                  : mentorsPerSlide === 2
                    ? "grid-cols-2"
                    : "md:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {getCurrentMentors().map((mentor, index) => (
                <div key={`${currentSlide}-${index}`} className="group">
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-pink-100 relative overflow-hidden">
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-pink-100 rounded-full blur-2xl"></div>
                    <div className="absolute top-2 right-2">
                      <Star className="h-4 w-4 text-primary/30" />
                    </div>

                    <div className="text-center space-y-4 relative z-10">
                      <div className="relative mx-auto w-24 h-24">
                        <img
                          src={mentor.image || "/placeholder.svg"}
                          alt={mentor.name}
                          className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                          <Heart className="h-3 w-3 text-white" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900 font-poppins">{mentor.name}</h3>
                        <p className="text-primary font-semibold">{mentor.title}</p>
                        <p className="text-gray-600 text-sm">{mentor.company}</p>
                        <p className="text-xs text-gray-500 italic">{mentor.quote}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {mentor.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-primary/10 to-pink-100 text-primary text-xs rounded-full border border-primary/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-center gap-3 pt-2">
                          {mentor.social.linkedin && (
                            <a
                              href={mentor.social.linkedin}
                              className="p-2 bg-gradient-to-br from-primary/10 to-pink-100 rounded-xl hover:bg-primary hover:text-white transition-colors duration-200 border border-primary/20"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          )}
                          {mentor.social.twitter && (
                            <a
                              href={mentor.social.twitter}
                              className="p-2 bg-gradient-to-br from-primary/10 to-pink-100 rounded-xl hover:bg-primary hover:text-white transition-colors duration-200 border border-primary/20"
                            >
                              <Twitter className="h-4 w-4" />
                            </a>
                          )}
                          {mentor.social.instagram && (
                            <a
                              href={mentor.social.instagram}
                              className="p-2 bg-gradient-to-br from-primary/10 to-pink-100 rounded-xl hover:bg-primary hover:text-white transition-colors duration-200 border border-primary/20"
                            >
                              <Instagram className="h-4 w-4" />
                            </a>
                          )}
                          {mentor.social.globe && (
                            <a
                              href={mentor.social.globe}
                              className="p-2 bg-gradient-to-br from-primary/10 to-pink-100 rounded-xl hover:bg-primary hover:text-white transition-colors duration-200 border border-primary/20"
                            >
                              <Globe className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons - Below the cards */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 border border-pink-100 flex items-center justify-center"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 border border-pink-100 flex items-center justify-center"
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-primary" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">{"Ingin bertemu langsung dengan mentor inspiratif? 🌟"}</p>
          <button className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
            {"Book Mentoring Session! 💕"}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Mentors
