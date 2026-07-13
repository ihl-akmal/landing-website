import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Certificate() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Sertifikat yang Tervalidasi
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Sertifikat yang ditandatangani oleh Grazedu, mitra UMKM, dan Career Mentor sebagai bukti bahwa kamu telah benar-benar terverifikasi menyelesaikan program.
            </p>
            {/* Badge trust signals */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                Ditandatangani 3 pihak
              </div>
              <div className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                Bisa diverifikasi online
              </div>
              <div className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                Diakui mitra UMKM
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full aspect-[297/210] max-h-[380px] mx-auto rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/contoh-sertifikat.jpg"
                alt="Contoh Sertifikat"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
