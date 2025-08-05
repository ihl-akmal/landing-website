"use client"

import { Clock, User, Calendar, Video, Heart, Sparkles } from "lucide-react"

const UpcomingClass = () => {
  const classes = [
    {
      title: "Leadership Vol 1 💪",
      subtitle: null, // No subtitle for this class
      instructor: "Michael Chen",
      date: "28 Feb 2024",
      time: "09:00 AM",
      zoomMeeting: "Meeting ID: 123 456 789",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      badge: "BEST SELLER",
      badgeColor: "bg-primary text-white",
      link: "https://grazedu.myr.id",
    },
    {
      title: "Entrepreneurship Journey ✨",
      subtitle: "Menjadi perempuan yang mandiri berbisnis",
      instructor: "Lisa Anderson",
      date: "05 Mar 2024",
      time: "14:00 PM",
      zoomMeeting: "Meeting ID: 987 654 321",
      image:
        "/class/workplace.png?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      badge: "TRENDING",
      badgeColor: "bg-orange-500 text-white",
      link: "https://grazedu.myr.id",
    },
    {
      title: "Workplace Communication for Women",
      subtitle: "Membangun Komunikasi Professional di Dunia Kerja",
      instructor: "Ajeng Kusumaning Ratri (AVP-CSR Education & Community Development at Indosat)",
      date: "2 Agustus 2025",
      time: "09.00-11.15 WIB",
      zoomMeeting: "Zoom Meeting",
      image:
        "/class/workplace.png?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      badge: "CLOSED",
      badgeColor: "bg-primary text-white",
      link: "https://s.id/KelasKomunikasiGrazedu",
    },
    {
      title: "Intensive Class Public Speaking [BASIC]",
      subtitle: null,
      instructor: "Aliffa Milanisty (CEO Grazedu & Public Speaker 150+ events)",
      date: "12 Juli 2025",
      time: "15.30 WIB",
      zoomMeeting: "Zoom Meeting",
      image: "/class/publicspeaking.png?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      badge: "CLOSED",
      badgeColor: "bg-primary text-white",
      link: "https://grazedu.myr.id",
    },
  ]

  // Filter dua kelas aktif
  const activeClasses = classes.filter(c => ["Workplace Communication for Women", "Intensive Class Public Speaking [BASIC]"].includes(c.title))

  return (
    <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-rose-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-pink-100 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Kelas Terbatas & Eksklusif</span>
            <Heart className="h-4 w-4 text-primary" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Jangan Ketinggalan Sebelum <span className="text-primary">Pendaftaran Ditutup!</span> ⏰
          </h2>
          <p className="text-lg text-gray-600">
            {"Kelas terbatas dengan kualitas terbaik. Daftar sekarang sebelum terlambat, beautiful! 💕"}
          </p>
        </div>

        {/* Render dua kelas aktif di grid */}
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {activeClasses.map((activeClass, idx) => (
            <div key={activeClass.title} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-pink-100 flex flex-col max-w-2xl mx-auto">
                <div className="relative">
                <img
                  src={activeClass.image || "/placeholder.svg"}
                  alt={activeClass.title}
                  className={`w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300${activeClass.badge === 'CLOSED' ? ' grayscale' : ''}`}
                />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${activeClass.badgeColor} shadow-md`}>
                      {activeClass.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">{activeClass.title}</h3>
                    {/* Conditional rendering for subtitle - maintains consistent height */}
                    <div className="min-h-[1.5rem]">
                      {activeClass.subtitle && (
                        <p className="text-gray-600 text-sm font-medium italic">{activeClass.subtitle}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="bg-primary/10 p-1 rounded-lg">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <span>{activeClass.date}</span>
                      <div className="bg-primary/10 p-1 rounded-lg ml-2">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <span>{activeClass.time}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="bg-primary/10 p-1 rounded-lg">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <span>Pemateri: {activeClass.instructor}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="bg-primary/10 p-1 rounded-lg">
                        <Video className="h-4 w-4 text-primary" />
                      </div>
                      <span>{activeClass.zoomMeeting}</span>
                    </div>
                  </div>

                <a
                  href={activeClass.badge === 'CLOSED' ? undefined : activeClass.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r from-primary to-primary-light text-white py-3 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md mt-auto flex justify-center items-center${activeClass.badge === 'CLOSED' ? ' grayscale opacity-60 cursor-not-allowed pointer-events-none' : ''}`}
                  aria-disabled={activeClass.badge === 'CLOSED' ? 'true' : undefined}
                  tabIndex={activeClass.badge === 'CLOSED' ? -1 : 0}
                >
                  {activeClass.badge === 'CLOSED' ? 'Pendaftaran Ditutup' : 'Daftar Sekarang! 🚀'}
                </a>
              </div>
          </div>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">{"Masih ragu? Yuk konsultasi gratis dulu dengan tim kami! 💬"}</p>
          <a
            href="https://wa.me/6282340622274"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md"
          >
            {"Konsultasi Gratis! 💕"}
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default UpcomingClass
