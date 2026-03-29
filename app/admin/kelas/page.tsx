import { getAdminClasses } from "@/lib/actions/classes";
import Link from "next/link";
import { PlusCircle, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

// Memastikan route ini selalu dinamis agar data pendaftar & kelas real-time
export const dynamic = "force-dynamic";

export default async function AdminKelasPage() {
  const classes = await getAdminClasses();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Kelas</h1>
          <p className="text-gray-500">Kelola kelas, pendaftaran, dan informasi lainnya.</p>
        </div>
        <Link href="/admin/kelas/create">
          <Button className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />
            Buat Kelas Baru
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 border-b">
              <tr>
                <th className="px-6 py-4 font-medium">Judul Kelas</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Tanggal</th>
                <th className="px-6 py-4 font-medium">Peserta</th>
                <th className="px-6 py-4 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {classes.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    Belum ada kelas yang dibuat.
                  </td>
                </tr>
              ) : (
                classes.map((cls) => (
                  <tr key={cls.id} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{cls.title}</div>
                      <div className="text-xs text-gray-500 truncate max-w-[200px]">/{cls.slug}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        cls.status === "publish" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {cls.status === "publish" ? "Publish" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {cls.date || "-"}
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/admin/kelas/${cls.id}/registrations`} className="text-purple-600 hover:underline font-medium flex items-center gap-1">
                        <UsersIcon className="w-4 h-4" /> Lihat Peserta
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/kelas/${cls.slug}`} target="_blank">
                          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-purple-600">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        {/* Tombol edit/hapus bisa diimplementasikan ke depannya */}
                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-blue-600 disabled:opacity-50" disabled>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-600 disabled:opacity-50" disabled>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
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

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
