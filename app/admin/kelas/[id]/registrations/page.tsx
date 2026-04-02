import { getRegistrationsByClassId, RegistrationData } from "@/lib/actions/registrations";
import { getAdminClassById } from "@/lib/actions/classes";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ExportButton from "@/components/admin/ExportButton"; // Impor komponen baru

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

  const totalRegistrations = registrations.length;
  
  // Membuat nama file yang deskriptif
  const fileName = `Daftar Peserta - ${classData.title.replace(/[^a-zA-Z0-9]/g, '_')}`;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
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
        <ExportButton data={registrations} fileName={fileName} />
      </div>

      {/* Informasi Jumlah Pendaftar */}
      <div className="bg-white rounded-xl shadow-sm border p-4 flex items-center gap-4">
        <div className="bg-blue-100 p-3 rounded-full">
            <Users className="h-6 w-6 text-blue-600" />
        </div>
        <div>
            <p className="text-gray-500 text-sm">Jumlah Pendaftar</p>
            <p className="text-2xl font-bold">{totalRegistrations} Peserta</p>
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
              {totalRegistrations === 0 ? (
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
