"use client"

import { useState } from "react"
import NavbarCustom from "@/components/NavbarCustom"
import Hero from "@/components/Hero"
import SocialProof from "@/components/SocialProof"
import Programs from "@/components/Programs"
import UpcomingClass from "@/components/UpcomingClass"
import Mentors from "@/components/Mentors"
import Testimonials from "@/components/Testimonials"
import Partnership from "@/components/Partnership"
import HeroCTA from "@/components/HeroCTA"
import Footer from "@/components/Footer"
import AnnouncementBanner from "@/components/AnnouncementBanner"

export default function HomePage() {
  const [announcementVisible, setAnnouncementVisible] = useState(true)

  const handleAnnouncementDismiss = () => {
    setAnnouncementVisible(false)
  }

  

  return (
    <div className="min-h-screen bg-white">
      {announcementVisible && <AnnouncementBanner onDismiss={handleAnnouncementDismiss} />}
      <NavbarCustom announcementVisible={announcementVisible} />
      {/* Mobile-first responsive padding-top */}
      <div className={announcementVisible ? "pt-24 sm:pt-28 md:pt-32" : "pt-14 sm:pt-16 md:pt-20"}>
        <Hero />
      </div>
      <SocialProof />
      <Programs />
      <UpcomingClass />
      <Mentors />
      <Testimonials />
      <Partnership />
      <HeroCTA />
      <Footer />
    </div>
  )
}
