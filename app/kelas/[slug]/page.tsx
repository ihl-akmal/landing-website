import { notFound } from 'next/navigation';
import { getClassBySlug, getAllClasses } from '@/app/data/classes';
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, DollarSign, Star, CheckCircle, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';

//delay perubahan data gsheet
export const revalidate = 5;

interface ClassPageProps {
  params: {
    slug: string;
  };
}



export async function generateStaticParams() {
  const classes = await getAllClasses();
  return classes.map((cls) => ({
    slug: cls.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; // ✅ WAJIB pakai await
  const classData = await getClassBySlug(slug);
  
  if (!classData) {
    return {
      title: 'Kelas Tidak Ditemukan | GrazEdu',
      description: 'Kelas yang Anda cari tidak ditemukan. Silakan periksa kembali atau kunjungi halaman daftar kelas kami.',
    };
  }

  return {
    title: classData.metaTitle || `${classData.title} | GrazEdu`,
    description: classData.metaDescription || classData.description,
    keywords: classData.keywords?.join(', ') || '',
    openGraph: {
      title: classData.metaTitle || `${classData.title} | GrazEdu`,
      description: classData.metaDescription || classData.description,
      images: classData.image ? [classData.image] : [],
      type: 'website',
      locale: 'id_ID',
    },
    twitter: {
      card: 'summary_large_image',
      title: classData.metaTitle || `${classData.title} | Grazedu`,
      description: classData.metaDescription || classData.description,
      images: classData.image ? [classData.image] : [],
    },
  };
}

export default async function ClassPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ WAJIB pakai await
  const classData = await getClassBySlug(slug);

  if (!classData || !classData.isActive || classData.status === 'close') {
    notFound();
  }

  const availableSpots =
    classData.maxParticipants && classData.currentParticipants
      ? classData.maxParticipants - classData.currentParticipants
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb & Back Button */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-purple-600 transition-colors">Beranda</Link>
              <span>/</span>
              <Link href="/kelas" className="hover:text-purple-600 transition-colors">Daftar Kelas</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{classData.title}</span>
            </div>
            <Link href="/kelas">
              <Button variant="ghost" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Daftar Kelas
              </Button>
            </Link>
          </div>
        </div>

        {/* Class Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Class Image */}
            <div className="relative">
              {classData.image && (
                <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                  <Image
                    src={classData.image}
                    alt={classData.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Class Info */}
            <div className="space-y-6">
              <div>
                {classData.category && (
                  <span className="text-sm text-purple-600 font-medium mb-2 block">
                    {classData.category}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {classData.title}
                </h1>
                <p className="text-xl text-gray-500 font-medium leading-relaxed mb-6">
                  {classData.shortDescription}
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  {classData.description}
                </p>
              </div>

              {/* Class Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {classData.duration && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-5 w-5 text-purple-500" />
                    <div>
                      <span className="text-sm text-gray-500">Waktu</span>
                      <p className="font-medium">{classData.date} | {classData.time}</p>
                    </div>
                  </div>
                )}
                
                {classData.instructor && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="h-5 w-5 text-purple-500" />
                    <div>
                      <span className="text-sm text-gray-500">Pemateri</span>
                      <p className="font-medium">{classData.instructor}</p>
                    </div>
                  </div>
                )}
                
                {classData.price && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <DollarSign className="h-5 w-5 text-purple-500" />
                    <div>
                      <span className="text-sm text-gray-500">Harga</span>
                      <p className="font-medium text-purple-600">{classData.price}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="h-5 w-5 text-purple-500" />
                  <div>
                    <span className="text-sm text-gray-500">Lokasi</span>
                    <p className="font-medium">Zoom Meeting</p>
                  </div>
                </div>
              </div>

              {/* Quick Register Button */}
              <div className="pt-4">
                <Link 
                  href="#registration-form"
                  className="w-full bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 text-center shadow-md"
                >
                  Daftar Sekarang
                  <ArrowLeft className="h-5 w-5 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Class Details Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Apa yang Akan Anda Pelajari */}
          {classData.requirements && classData.requirements.length > 0 && (
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-purple-500" />
                Apa yang Akan Kamu Pelajari
              </h2>
              <ul className="space-y-3">
                {classData.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefit */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-purple-500" />
              Benefit yang Kamu Dapatkan
            </h2>
            <ul className="space-y-3">
              {classData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Registration Form */}
        {/* Registration Form */}
<section id="registration-form" className="mt-16">
  <div className="text-center mb-6 px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
      Isi Formulir Pendaftaran
    </h2>
    <p className="text-gray-600 text-base">
      Lengkapi data kamu untuk bergabung di kelas <strong>{classData.title}</strong>
    </p>
  </div>

  <div className="w-full">
    <iframe
      src={classData.formUrl}
      className="w-full min-h-[1400px] md:min-h-[1600px] border-0"
      title={`Form Pendaftaran ${classData.title}`}
      allowFullScreen
    ></iframe>
  </div>
</section>

      </div>
    </div>
  );
}
