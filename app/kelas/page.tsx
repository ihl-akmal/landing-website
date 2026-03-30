import { getAdminClasses, ClassData } from '@/lib/actions/classes';
import { Clock, Users, DollarSign, ArrowRight, Star, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { formatDate } from '@/lib/date';

export const revalidate = 5;

export const metadata: Metadata = {
  title: "Daftar Kelas | Grazedu - Platform Pengembangan Diri & Karir untuk Perempuan",
  description: "Daftar lengkap kelas pengembangan diri dan soft skills untuk perempuan. Temukan kelas yang paling relevan dengan perjalanan dirimu. Mentor inspiratif dan pembelajaran langsung.",
  keywords: "kelas pengembangan diri, soft skills, wanita, mentoring, pendidikan, grazedu, daftar kelas",
  openGraph: {
    title: "Daftar Kelas | Grazedu",
    description: "Daftar lengkap kelas pengembangan diri dan soft skills untuk perempuan. Pilih kelas yang sesuai dengan kebutuhan dan jadwal Anda.",
    type: "website",
    locale: "id_ID",
  },
};

export default async function ClassesPage() {
  const classes: ClassData[] = await getAdminClasses();

  if (!classes || classes.length === 0) {
    return <p className="text-center py-16">Belum ada kelas yang tersedia saat ini.</p>;
  }

  const visibleClasses = classes.filter(cls => cls.status === 'publish' || cls.status === 'closed');
  const availableClassCount = classes.filter(cls => cls.status === 'publish').length;

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
                <span>{availableClassCount} Kelas Tersedia</span>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleClasses.map((classItem) => (
            <div key={classItem.slug} className={`group ${classItem.status === 'closed' ? 'opacity-70 cursor-not-allowed' : ''}`}>
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {classItem.flyerUrl && classItem.flyerUrl.trim() !== '' ? (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={classItem.flyerUrl}
                      alt={classItem.title || 'Kelas Grazedu'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm italic">
                    Tidak ada gambar
                  </div>
                )}

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                      {classItem.title}
                    </h3>
                    <div className="flex-shrink-0 ml-2">
                      {classItem.status === 'publish' && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-800 border border-green-200">New</span>
                      )}
                      {classItem.status === 'closed' && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-red-100 text-red-800 border border-red-200">Closed</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {classItem.subtitle}
                  </p>

                  <div className="space-y-2 mb-6">
                    {classItem.date && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4 text-purple-500" />
                        <span>{formatDate(classItem.date)}</span>
                      </div>
                    )}
                    {classItem.time && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4 text-purple-500" />
                        <span>{classItem.time} WIB</span>
                      </div>
                    )}
                    {classItem.instructor && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="h-4 w-4 text-purple-500" />
                        <span>{classItem.instructor}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <DollarSign className="h-4 w-4 text-purple-500" />
                      <span className="font-semibold text-purple-600">{classItem.price || 'Gratis'}</span>
                    </div>
                    {classItem.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4 text-purple-500" />
                        <span>{classItem.location}</span>
                      </div>
                    )}
                  </div>

                  {classItem.status === 'closed' ? (
                    <button
                      disabled
                      className="w-full bg-gray-200 text-gray-500 px-6 py-3 rounded-full font-semibold cursor-not-allowed"
                    >
                      Pendaftaran Ditutup
                    </button>
                  ) : (
                    <Link 
                      href={`/kelas/${classItem.slug}`}
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
