import { getRegistrationsByClassId, RegistrationData } from "@/lib/actions/registrations";
import { getAdminClassById } from "@/lib/actions/classes";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface RegistrationsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RegistrationsPage({ params }: RegistrationsPageProps) {
  const { id: classId } = await params;
  const [classData, registrations] = await Promise.all([
    getAdminClassById(classId),
    getRegistrationsByClassId(classId),
  ]);

  if (!classData) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/kelas">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Daftar Peserta</h1>
          <p className="text-gray-500">Kelas: {classData.title}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 border-b">
              <tr>
                <th className="px-6 py-4 font-medium">Nama</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Whatsapp</th>
                <th className="px-6 py-4 font-medium">Domisili</th>
                <th className="px-6 py-4 font-medium">Tanggal Daftar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {registrations.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    Belum ada peserta yang mendaftar.
                  </td>
                </tr>
              ) : (
                registrations.map((reg) => (
                  <tr key={reg.id} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 font-medium text-gray-900">{reg.name}</td>
                    <td className="px-6 py-4 text-gray-600">{reg.email}</td>
                    <td className="px-6 py-4 text-gray-600">{reg.whatsapp}</td>
                    <td className="px-6 py-4 text-gray-600">{reg.domicile}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {reg.createdAt ? new Date(reg.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : '-'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
