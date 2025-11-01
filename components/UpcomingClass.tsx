import { Clock, User, Calendar, Video, Heart, Sparkles, ArrowRight } from "lucide-react"
import { generateStructuredData } from "@/lib/structured-data"
import { getAllClasses } from "@/app/data/google-sheets";

//delay untuk merubah data terbaru
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const UpcomingClass = async () => {
  const allClasses = await getAllClasses();

  // Filter hanya kelas yang bukan draft
  const filteredClasses = allClasses.filter(
  (cls) => cls.status !== "draft"
);

  //  ambil 3 kelas teratas (terbaru)
  const upcomingClasses = filteredClasses.slice(0, 3);

  // Helper untuk menentukan warna badge berdasarkan status
  const getBadgeProps = (status?: 'new' | 'favorit' | 'close') => {
    switch (status) {
      case 'new':
        return { text: 'NEW', color: 'bg-green-500 text-white' };
      case 'favorit':
        return { text: 'FAVORIT', color: 'bg-yellow-400 text-gray-900' };
      case 'close':
        return { text: 'CLOSED', color: 'bg-primary text-white' };
      default:
        return { text: 'LIMITED', color: 'bg-primary text-white' };
    }
  };

  return (
    <>
      {/* Structured Data for Courses */}
      {upcomingClasses.map((course, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData('course', course))
          }}
        />
      ))}
      
      <section id="upcoming-class" className="py-20 bg-gradient-to-br from-white via-pink-50 to-rose-50 relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {upcomingClasses.map((course, idx) => {
            const badge = getBadgeProps(course.status as any);
            const isClosed = course.status === 'close';
            return (
            <div key={course.slug} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-pink-100 flex flex-col w-full max-w-sm lg:max-w-none mx-auto">
                <div className="relative">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className={`w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ${isClosed ? 'grayscale' : ''}`}
                />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${badge.color} shadow-md`}>
                      {badge.text}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                </div>

                <div className="p-4 lg:p-6 space-y-3 lg:space-y-4 flex-1 flex flex-col">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 font-poppins">{course.title}</h3>
                    {/* Conditional rendering for subtitle - maintains consistent height */}
                    <div className="min-h-[1.5rem]">
                      {course.shortDescription && (
                        <p className="text-gray-600 text-sm font-medium italic">{course.shortDescription}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{course.date}</span>
                      <Clock className="h-4 w-4 text-primary flex-shrink-0 ml-2" />
                      <span>{course.time}</span>
                    </div>

                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <User className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{course.instructor}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Video className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{course.location}</span>
                    </div>
                  </div>

                <a
                  href={isClosed ? undefined : `/kelas/${course.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r from-primary to-primary-light text-white py-3 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md mt-auto flex justify-center items-center ${isClosed ? 'grayscale opacity-60 cursor-not-allowed pointer-events-none' : ''}`}
                  aria-disabled={isClosed ? 'true' : undefined}
                  tabIndex={isClosed ? -1 : 0}
                >
                  {isClosed ? 'Pendaftaran Ditutup' : <>Daftar Sekarang! <ArrowRight className="w-4 h-4 ml-1" /></>}
                </a>
              </div>
          </div>
          )})}
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
    </>
  )
}
