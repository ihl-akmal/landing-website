"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createClass, ClassData } from "@/lib/actions/classes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const classSchema = z.object({
  title: z.string().min(5, "Judul minimal 5 karakter"),
  slug: z.string().min(3, "Slug URL minimal 3 karakter (contoh: kelas-marketing-101)"),
  shortDescription: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  instructor: z.string().optional(),
  price: z.string().optional(),
  wagLink: z.string().url("Link WAG tidak valid").optional().or(z.literal("")),
  closeRegistration: z.string().optional(),
  status: z.enum(["draft", "publish"]),
});

type ClassFormValues = z.infer<typeof classSchema>;

export default function CreateClassPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const form = useForm<ClassFormValues>({
    resolver: zodResolver(classSchema),
    defaultValues: {
      status: "draft",
    },
  });

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue("title", e.target.value);
    if (!form.formState.dirtyFields.slug) {
      form.setValue("slug", generateSlug(e.target.value));
    }
  };

  const onSubmit = async (data: ClassFormValues) => {
    setLoading(true);
    setErrorMsg("");
    
    const res = await createClass(data as ClassData);
    
    setLoading(false);
    if (res.success) {
      router.push("/admin/kelas");
    } else {
      setErrorMsg(res.error || "Gagal membuat kelas");
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 bg-white p-6 md:p-8 rounded-xl shadow-sm border">
      <div className="flex items-center gap-4 border-b pb-4">
        <Link href="/admin/kelas">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Buat Kelas Baru</h1>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Judul Kelas *</label>
            <Input {...form.register("title")} onChange={handleTitleChange} placeholder="Contoh: Social Media Strategist Bootcamp" />
            {form.formState.errors.title && <p className="text-xs text-red-500">{form.formState.errors.title.message}</p>}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Slug / URL Kelas *</label>
            <Input {...form.register("slug")} placeholder="contoh: social-media-strategist" />
            <p className="text-xs text-gray-400">kelas akan diakses di: /kelas/slug-anda</p>
            {form.formState.errors.slug && <p className="text-xs text-red-500">{form.formState.errors.slug.message}</p>}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Deskripsi Singkat</label>
            <Textarea {...form.register("shortDescription")} placeholder="Deskripsi pendek untuk card kelas..." rows={2} />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Tanggal Pelaksanaan</label>
            <Input {...form.register("date")} placeholder="Misal: 12-14 Agustus 2026" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Waktu (Jam)</label>
            <Input {...form.register("time")} placeholder="Misal: 19.00 - 21.00 WIB" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Biaya Pendaftaran / Harga</label>
            <Input {...form.register("price")} placeholder="Misal: Rp 150.000 atau Gratis" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Nama Instruktur / Pemateri</label>
            <Input {...form.register("instructor")} placeholder="Nama lengkap instruktur" />
          </div>

          <div className="space-y-2 md:col-span-2 pt-4 border-t">
            <h3 className="font-semibold text-gray-800">Pengaturan Form Pendaftaran</h3>
            <p className="text-xs text-gray-500 mb-2">Pendaftar akan otomatis ditanyakan: Nama, Email, WA, Domisili, Tujuan, dll.</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Link WhatsApp Group (WAG)</label>
            <Input {...form.register("wagLink")} placeholder="https://chat.whatsapp.com/..." />
            {form.formState.errors.wagLink && <p className="text-xs text-red-500">{form.formState.errors.wagLink.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Batas Penutupan (Close Registration)</label>
            <Input type="datetime-local" {...form.register("closeRegistration")} />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Status Publikasi</label>
            <select
              {...form.register("status")}
              className="w-full flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="draft">Sembunyikan sebagai Draft</option>
              <option value="publish">Publish ke Publik</option>
            </select>
          </div>
        </div>

        {errorMsg && <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-md text-sm">{errorMsg}</div>}

        <div className="flex justify-end gap-4 pt-6 border-t font-semibold">
          <Link href="/admin/kelas">
            <Button variant="outline" type="button">Batal</Button>
          </Link>
          <Button type="submit" disabled={loading} className="bg-purple-600 hover:bg-purple-700 w-32">
            {loading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : null}
            {loading ? "Menyimpan" : "Simpan Kelas"}
          </Button>
        </div>
      </form>
    </div>
  );
}
