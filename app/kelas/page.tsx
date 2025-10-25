import { getAllClasses } from '@/app/data/google-sheets';
import { Clock, Users, DollarSign, ArrowRight, Star, Filter, Search, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const revalidate=60;



export const metadata: Metadata = {
  title: "Daftar Kelas | Grazedu - Platform Pengembangan Diri & Karir untuk Perempuan",
  description: "Daftar lengkap kelas pengembangan diri dan soft skills untuk perempuan. Temukan kelas yang paling relevan dengan perjalanan dirimu. Mentor inspiratif dan pembelajaran langsung.",
  keywords: "kelas pengembangan diri, soft skills, wanita, mentoring, pendidikan, grazedu, daftar kelas",
  openGraph: {
    title: "Daftar Kelas | GrazEdu",
    description: "Daftar lengkap kelas pengembangan diri dan soft skills untuk perempuan. Pilih kelas yang sesuai dengan kebutuhan dan jadwal Anda.",
    type: "website",
    locale: "id_ID",
  },
};



export default async function ClassesPage() {
  // const classes = getAllClasses();
  const classes = await getAllClasses();
   // Jika tidak ada kelas
   if (!classes || classes.length === 0) {
    return <p className="text-center py-16">Belum ada kelas yang tersedia saat ini.</p>;
  }
  // const categories = Array.from(new Set(classes.map(cls => cls.category).filter(Boolean)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Hero Section */}
      <div className="py-16 bg-gradient-to-br from-primary via-primary-dark to-pink-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.1%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Daftar Kelas <span className="text-yellow-300">Grazedu</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
            Temukan kelas yang paling relevan dengan perjalanan dirimu.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-purple-100">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{classes.length} Kelas Tersedia</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>Mentor Inspiratif</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Fleksibel & Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section hidden */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <div key={classItem.slug} className="group">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Class Image */}
{classItem.image && classItem.image.trim() !== '' ? (
  <div className="relative h-48 overflow-hidden">
    <Image
      src={
        classItem.image?.startsWith('http')
          ? classItem.image
          : classItem.image.startsWith('/')
            ? classItem.image
            : `/${classItem.image}`
      }      
      alt={classItem.title || 'Kelas Grazedu'}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
    />
    {/* Status Badge */}
    {classItem.level && (
      <div className="absolute top-4 right-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-900 border border-white/60 shadow ${
            classItem.level === 'Beginner' ? 'hidden' : ''
          }`}
        >
          {classItem.level}
        </span>
      </div>
    )}
  </div>
) : (
  // ✅ Fallback: kalau image kosong, tampilkan placeholder aman
  <div className="relative h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm italic">
    Tidak ada gambar
  </div>
)}


                {/* Class Content */}
                <div className="p-6">
                  {/* Category hidden */}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 flex items-center gap-2">
                    {classItem.title}
                    {/* New/Favorit/Close badges */}
                    {classItem.status === 'new' && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 border border-green-200">New</span>
                    )}
                    {classItem.status === 'favorit' && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">Favorit</span>
                    )}
                    {classItem.status === 'close' && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-700 border border-red-200">Close</span>
                    )}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {classItem.shortDescription}
                  </p>

                  {/* Class Details */}
                  <div className="space-y-2 mb-6">
                    {classItem.date && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4 text-purple-500" />
                        <span>{classItem.date}</span>
                      </div>
                    )}
                    {classItem.time && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4 text-purple-500" />
                        <span>{classItem.time}</span>
                      </div>
                    )}
                    {classItem.instructor && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="h-4 w-4 text-purple-500" />
                        <span>{classItem.instructor}</span>
                      </div>
                    )}
                    {classItem.price && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <DollarSign className="h-4 w-4 text-purple-500" />
                        <span className="font-semibold text-purple-600">{classItem.price}</span>
                      </div>
                    )}
                    {classItem.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4 text-purple-500" />
                        <span>{classItem.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Register Button */}
                  {classItem.status === 'close' ? (
                    <button
                      disabled
                      className="w-full bg-gray-200 text-gray-500 px-6 py-3 rounded-full font-semibold cursor-not-allowed"
                    >
                      Pendaftaran Ditutup
                    </button>
                  ) : (
                    <Link 
                      href={`/kelas/${classItem.slug}`} prefetch={true}
                      className="w-full bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group-hover:gap-3 block text-center shadow-md"
                    >
                      Daftar Sekarang
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 text-white bg-gradient-to-br from-primary via-primary-dark to-pink-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.08%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Tidak Menemukan Kelas yang Sesuai?
            </h2>
            <p className="mb-6 max-w-2xl mx-auto text-pink-100">
              Hubungi kami untuk konsultasi personal dan rekomendasi kelas yang tepat untuk kebutuhan kamu✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md"
              >
                Konsultasi Gratis
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="/"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-200"
              >
                Kembali ke Beranda
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
