'use client'
import { getAdminClasses, deleteClass, ClassData } from "@/lib/actions/classes";
import Link from "next/link";
import { PlusCircle, Edit, Trash2, Eye, UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Memastikan route ini selalu dinamis agar data pendaftar & kelas real-time
export const dynamic = "force-dynamic";

export default function AdminKelasPage() {
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [classToDelete, setClassToDelete] = useState<string | null>(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const fetchedClasses = await getAdminClasses();
        setClasses(fetchedClasses);
      } catch (err) {
        setError("Gagal memuat kelas");
      } finally {
        setLoading(false);
      }
    };
    fetchClasses();
  }, []);

  const handleDelete = async () => {
    if (!classToDelete) return;
    try {
      await deleteClass(classToDelete);
      setClasses(classes.filter(c => c.id !== classToDelete));
      setClassToDelete(null);
    } catch (err) {
      setError("Gagal menghapus kelas");
    }
  };

  const formatDate = (dateStr?: string, timeStr?: string) => {
    if (!dateStr) return "-";
    try {
      const date = new Date(dateStr);
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      let formattedDate = new Intl.DateTimeFormat('id-ID', options).format(date);
      
      if (timeStr) {
        formattedDate += `| ${timeStr}`;
      }
      return formattedDate;
    } catch (e) {
      return "Invalid date";
    }
  };

  const formatCloseRegistration = (dateTimeStr?: string) => {
    if (!dateTimeStr) return "-";
    try {
      const date = new Date(dateTimeStr);
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Intl.DateTimeFormat('id-ID', options).format(date).replace(".", ":");
    } catch (e) {
      return "Invalid date";
    }
  }

  if (loading) return <div>Memuat...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="space-y-6">
      <AlertDialog open={!!classToDelete} onOpenChange={() => setClassToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Anda yakin ingin menghapus?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak bisa dibatalkan. Ini akan menghapus kelas secara permanen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">Hapus</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
                <th className="px-6 py-4 font-medium">Tanggal Pelaksanaan</th>
                <th className="px-6 py-4 font-medium">Waktu Penutupan</th>
                <th className="px-6 py-4 font-medium">Peserta</th>
                <th className="px-6 py-4 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {classes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    Belum ada kelas yang dibuat.
                  </td>
                </tr>
              ) : (
                classes.map((cls) => (
                  <tr key={cls.id} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{cls.title}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${{
                        "publish": "bg-green-100 text-green-800",
                        "draft": "bg-gray-100 text-gray-800",
                        "closed": "bg-red-100 text-red-800",
                      }[cls.status]}`}>
                        {cls.status.charAt(0).toUpperCase() + cls.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {formatDate(cls.date, cls.time)}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {formatCloseRegistration(cls.closeRegistration)}
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
                        <Link href={`/admin/kelas/${cls.id}/edit`}>
                          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-blue-600">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-600" onClick={() => setClassToDelete(cls.id!)}>
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
