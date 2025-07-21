import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import SocialProof from "@/components/SocialProof"
import Programs from "@/components/Programs"
import UpcomingClass from "@/components/UpcomingClass"
import Mentors from "@/components/Mentors"
import Testimonials from "@/components/Testimonials"
import Partnership from "@/components/Partnership"
import HeroCTA from "@/components/HeroCTA"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <Programs />
      {/* <UpcomingClass /> */}
      <Mentors />
      <Testimonials />
      <Partnership />
      <HeroCTA />
      <Footer />
    </div>
  )
}
