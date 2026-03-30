import { getClassBySlug } from "@/lib/actions/classes";
import { notFound } from "next/navigation";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, ExternalLink } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ name?: string | string[] }>;
};

export default async function RegistrationSuccessPage(props: Props) {
  const { slug } = await props.params;
  const  searchParams  = await props.searchParams;

  const nameParam = searchParams?.name;
  
  const classData = await getClassBySlug(slug);
  const name = Array.isArray(nameParam) ? nameParam[0] : nameParam || 'Peserta';

  if (!classData) {
    notFound();
  }

  return (
    <main className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Pendaftaran Berhasil!</h1>
          <p className="text-gray-600 mb-6">
            Terima kasih, <span className="font-semibold">{name}</span>! Kamu telah terdaftar untuk kelas ini.
          </p>

          {classData.wagLink ? (
            <>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                <h2 className="font-semibold text-green-800">Langkah Selanjutnya</h2>
                <p className="text-sm text-green-700 mt-2">
                  Silakan bergabung ke grup WhatsApp untuk mendapatkan informasi lebih lanjut mengenai kelas.
                </p>
              </div>
              <Button asChild className="w-full text-white">
                <a href={classData.wagLink} target="_blank" rel="noopener noreferrer">
                  Gabung Grup WhatsApp
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </>
          ) : (
             <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                <p className="text-sm text-yellow-700 mt-2">
                  Link grup WhatsApp akan segera diinformasikan. Pantau terus email Anda.
                </p>
              </div>
          )}

           <div className="mt-8">
                <Link href="/kelas" className="text-sm text-gray-500 hover:underline">
                    Lihat kelas lainnya
                </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
