import { getClassBySlug } from "@/lib/actions/classes";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Calendar, User, Tag, MapPin, ChevronRight } from 'lucide-react';
import RegistrationForm from "@/components/RegistrationForm";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/date";

interface ClassPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ClassPageProps): Promise<Metadata>  {
  const {slug} = await params;
  const classData = await getClassBySlug(slug);

  if (!classData) {
    return { title: "Kelas tidak ditemukan" };
  }

  return {
    title: classData.metaTitle || classData.title,
    description: classData.metaDescription || classData.shortDescription,
    keywords: classData.keywords,
  };
}

function InfoDetail({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string | undefined }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-sm font-semibold text-gray-500 mb-1">{label}</p>
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-pink-500" />
        <p className="text-gray-800">{value}</p>
      </div>
    </div>
  );
}

function ListItem({ text, className }: { text: string, className?: string }) {
    return (
        <div className={`flex items-start gap-3 ${className}`}>
            <CheckCircle className="h-5 w-5 text-white mt-1 flex-shrink-0" />
            <p className="text-white">{text}</p>
        </div>
    );
}

export default async function ClassPage({ params }: ClassPageProps) {
  const {slug} = await params;
  const classData = await getClassBySlug(slug);

  if (!classData) {
    notFound();
  }

  const flyerUrl = classData.flyerUrl ? classData.flyerUrl.trimEnd() : null;

  return (
     <main className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl p-4">

        {/* --- BREADCRUMB --- */}
        <div className="mb-6 flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-pink-600">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/kelas" className="hover:text-pink-600">Kelas</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-gray-700 truncate">{classData.title}</span>
        </div>

        {/* --- HERO SECTION --- */}
        <div className="bg-white p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column: Flyer */}
          <div>
            {flyerUrl && (
              <div className="overflow-hidden rounded-xl shadow-md aspect-square">
                <Image
                  src={flyerUrl}
                  alt={classData.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {classData.title}
            </h1>
            {classData.subtitle && (
                <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
                    {classData.subtitle}
                </h2>
            )}
            <p className="text-gray-600 mb-6">
              {classData.shortDescription}
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8">
              <InfoDetail icon={Calendar} label="Waktu" value={[classData.date && formatDate(classData.date), classData.time].filter(Boolean).join(' | ')} />
              <InfoDetail icon={User} label="Pemateri" value={classData.instructor} />
              <InfoDetail icon={Tag} label="Harga" value={classData.price ? `Rp ${classData.price}` : 'Gratis'} />
              <InfoDetail icon={MapPin} label="Lokasi" value={classData.location} />
            </div>

            <a href="#registration-form" className="w-full">
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-primary-light text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-md text-sm sm:text-base">
                    Daftar Sekarang
                </Button>
            </a>
          </div>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Left Column: Learn & Benefits (40%) */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary via-primary-dark to-pink-800 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                    {classData.whatYouWillLearn && classData.whatYouWillLearn.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-white mb-5">Apa yang akan kamu pelajari?</h2>
                            <div className="space-y-4">
                            {classData.whatYouWillLearn.map((item, index) => <ListItem key={index} text={item} />)}
                            </div>
                        </div>
                    )}

                    {classData.benefits && classData.benefits.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-5">Benefit yang didapat</h2>
                            <div className="space-y-4">
                                {classData.benefits.map((item, index) => <ListItem key={index} text={item} />)}
                            </div>
                        </div>
                    )}
                </div>
                 {/* Decorative circles */}
                <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute -bottom-10 -right-32 w-48 h-48 bg-white bg-opacity-10 rounded-full"></div>
            </div>

            {/* Right Column: Registration Form (60%) */}
            <div id="registration-form" className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-lg h-fit sticky top-8">
                <RegistrationForm 
                    classId={classData.id!} 
                    closeDate={classData.closeRegistration}
                />
            </div>
        </div>
      </div>
    </main>
  );
}
