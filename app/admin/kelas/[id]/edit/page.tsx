'use client';

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { updateClass, getAdminClassById, ClassData } from "@/lib/actions/classes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Loader2, ArrowLeft, PlusCircle, XCircle } from "lucide-react";
import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const classSchema = z.object({
  // SEO
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  keywords: z.string().optional(),
  slug: z
    .string()
    .min(3, "Slug URL minimal 3 karakter (contoh: kelas-marketing-101)"),

  // Detail Kelas
  title: z.string().min(5, "Judul minimal 5 karakter"),
  subtitle: z.string().optional(),
  flyerUrl: z.string().url("URL flyer tidak valid").optional().or(z.literal("")),
  shortDescription: z.string().optional(),
  instructor: z.string().optional(),
  date: z.string().optional(),
  time: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Waktu harus valid").optional().or(z.literal("")),
  location: z.string().optional(),
  closeRegistration: z.string().optional(),

  // List Dinamis
  whatYouWillLearn: z.array(z.object({ value: z.string() })).optional(),
  benefits: z.array(z.object({ value: z.string() })).optional(),

  // Pendaftaran & Harga
  price: z.string().optional(),
  wagLink: z.string().url("Link WAG tidak valid").optional().or(z.literal("")),
  status: z.enum(["draft", "publish", "closed"]),
});

type ClassFormValues = z.infer<typeof classSchema>;

// Helper to generate number range with leading zeros
const generateNumberOptions = (max: number) => {
  return Array.from({ length: max }, (_, i) => String(i).padStart(2, '0'));
};

export default function EditClassPage() {
  const router = useRouter();
  const params = useParams();
  const classId = params.id as string;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for time dropdowns
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [closeDate, setCloseDate] = useState("");
  const [closeHour, setCloseHour] = useState("23");
  const [closeMinute, setCloseMinute] = useState("59");

  const hours = generateNumberOptions(24);
  const minutes = generateNumberOptions(60);

  const form = useForm<ClassFormValues>({
    resolver: zodResolver(classSchema),
    defaultValues: {
      status: "draft",
      flyerUrl: "",
      whatYouWillLearn: [{ value: "" }],
      benefits: [{ value: "" }],
    },
  });

  // Sync dropdown state with react-hook-form
  useEffect(() => {
    form.setValue("time", `${hour}:${minute}`, { shouldValidate: true });
  }, [hour, minute, form]);

    useEffect(() => {
    if (closeDate) {
      form.setValue("closeRegistration", `${closeDate}T${closeHour}:${closeMinute}`);
    }
  }, [closeDate, closeHour, closeMinute, form]);

  useEffect(() => {
    if (!classId) return;
    const fetchClass = async () => {
      try {
        const classData = await getAdminClassById(classId);
        if (classData) {
          form.reset({
            ...classData,
            whatYouWillLearn: classData.whatYouWillLearn?.map(value => ({ value })) ?? [],
            benefits: classData.benefits?.map(value => ({ value })) ?? [],
          });
           // Set initial time dropdown values
          if (classData.time && classData.time.includes(':')) {
            const [initialHour, initialMinute] = classData.time.split(':');
            setHour(initialHour);
            setMinute(initialMinute);
          }
          if (classData.closeRegistration && classData.closeRegistration.includes('T')) {
            const [datePart, timePart] = classData.closeRegistration.split('T');
            setCloseDate(datePart);
            if (timePart.includes(':')) {
                const [initialCloseHour, initialCloseMinute] = timePart.split(':');
                setCloseHour(initialCloseHour);
                setCloseMinute(initialCloseMinute);
            }
          }
        }
      } catch (err) {
        setError("Gagal memuat data kelas");
        toast({
          title: "Gagal Memuat Data",
          description: "Terjadi kesalahan saat memuat data kelas. Silakan coba lagi.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchClass();
  }, [classId, form, toast]);

  const {
    fields: learnFields,
    append: appendLearn,
    remove: removeLearn,
  } = useFieldArray({
    control: form.control,
    name: "whatYouWillLearn",
  });

  const {
    fields: benefitFields,
    append: appendBenefit,
    remove: removeBenefit,
  } = useFieldArray({
    control: form.control,
    name: "benefits",
  });

  const onSubmit = async (values: ClassFormValues) => {
    setIsSubmitting(true);
    setError(null);
    try {
       const classData: Partial<ClassData> = {
        ...values,
        whatYouWillLearn: values.whatYouWillLearn?.map(item => item.value).filter(v => v),
        benefits: values.benefits?.map(item => item.value).filter(v => v),
      };
      await updateClass(classId, classData);
      toast({
        title: "Sukses!",
        description: "Perubahan kelas berhasil disimpan.",
      });
      router.push("/admin/kelas");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Terjadi kesalahan tidak diketahui";
      toast({
        title: "Gagal!",
        description: `Terjadi kesalahan: ${errorMessage}`,
        variant: "destructive",
      });
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

   if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  if (error && !isLoading) {
     return (
      <div className="max-w-4xl mx-auto p-6 text-center">
         <p className="text-red-500">{error}</p>
         <Link href="/admin/kelas">
          <Button variant="outline" className="mt-4">Kembali ke Daftar Kelas</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <Link href="/admin/kelas">
          <Button variant="outline" size="icon" className="mr-4">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Edit Kelas</h1>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue="kelas" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="kelas">Pengaturan Kelas</TabsTrigger>
            <TabsTrigger value="website">Pengaturan Website</TabsTrigger>
          </TabsList>

          {/* TAB PENGATURAN KELAS */}
          <TabsContent value="kelas" className="mt-6 space-y-6">
             <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">Judul Kelas</label>
              <Input id="title" {...form.register("title")} />
              {form.formState.errors.title && <p className="text-red-500 text-xs mt-1">{form.formState.errors.title.message}</p>}
            </div>

            <div>
              <label htmlFor="subtitle" className="block text-sm font-medium mb-1">Sub Judul Kelas</label>
              <Input id="subtitle" {...form.register("subtitle")} />
            </div>

            <div>
              <label htmlFor="flyerUrl" className="block text-sm font-medium mb-1">URL Flyer</label>
              <Input id="flyerUrl" {...form.register("flyerUrl")} />
               {form.formState.errors.flyerUrl && <p className="text-red-500 text-xs mt-1">{form.formState.errors.flyerUrl.message}</p>}
            </div>

            <div>
                <label htmlFor="shortDescription" className="block text-sm font-medium mb-1">Deskripsi Singkat</label>
                <Textarea id="shortDescription" {...form.register("shortDescription")} />
            </div>

             <div>
                <label htmlFor="instructor" className="block text-sm font-medium mb-1">Nama Instruktur</label>
                <Input id="instructor" {...form.register("instructor")} />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-1">Lokasi</label>
                    <Input id="location" {...form.register("location")} />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">Tanggal Pelaksanaan</label>
                    <Input id="date" type="date" {...form.register("date")} />
                </div>
                 <div>
                  <label className="block text-sm font-medium mb-1">Waktu Pelaksanaan</label>
                  <div className="flex items-center gap-2">
                    <Select value={hour} onValueChange={setHour}>
                        <SelectTrigger><SelectValue/></SelectTrigger>
                        <SelectContent>
                            {hours.map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}
                        </SelectContent>
                    </Select>
                     <span>:</span>
                    <Select value={minute} onValueChange={setMinute}>
                        <SelectTrigger><SelectValue/></SelectTrigger>
                        <SelectContent>
                            {minutes.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                        </SelectContent>
                    </Select>
                  </div>
                  {form.formState.errors.time && <p className="text-red-500 text-xs mt-1">{form.formState.errors.time.message}</p>}
              </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Batas Waktu Pendaftaran</label>
                 <div className="grid grid-cols-2 gap-4">
                  <Input id="closeDate" type="date" value={closeDate} onChange={e => setCloseDate(e.target.value)} />
                   <div className="flex items-center gap-2">
                    <Select value={closeHour} onValueChange={setCloseHour}>
                        <SelectTrigger><SelectValue/></SelectTrigger>
                        <SelectContent>
                            {hours.map(h => <SelectItem key={`close-${h}`} value={h}>{h}</SelectItem>)}
                        </SelectContent>
                    </Select>
                     <span>:</span>
                    <Select value={closeMinute} onValueChange={setCloseMinute}>
                        <SelectTrigger><SelectValue/></SelectTrigger>
                        <SelectContent>
                            {minutes.map(m => <SelectItem key={`close-${m}`} value={m}>{m}</SelectItem>)}
                        </SelectContent>
                    </Select>
                  </div>
                </div>
                 {form.formState.errors.closeRegistration && <p className="text-red-500 text-xs mt-1">{form.formState.errors.closeRegistration.message}</p>}
            </div>

            {/* Dynamic Input: Apa yang dipelajari */}
            <div>
              <label className="block text-sm font-medium mb-2">Apa yang akan dipelajari</label>
              {learnFields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2 mb-2">
                  <Input {...form.register(`whatYouWillLearn.${index}.value`)} placeholder={`Poin ${index + 1}`}/>
                  <Button type="button" variant="ghost" size="icon" onClick={() => removeLearn(index)} disabled={learnFields.length <= 1}>
                    <XCircle className="h-5 w-5 text-red-500" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={() => appendLearn({ value: "" })}>
                <PlusCircle className="h-4 w-4 mr-2" /> Tambah Poin
              </Button>
            </div>

             {/* Dynamic Input: Benefit */}
            <div>
              <label className="block text-sm font-medium mb-2">Benefit yang didapatkan</label>
              {benefitFields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2 mb-2">
                  <Input {...form.register(`benefits.${index}.value`)} placeholder={`Benefit ${index + 1}`}/>
                  <Button type="button" variant="ghost" size="icon" onClick={() => removeBenefit(index)} disabled={benefitFields.length <= 1}>
                    <XCircle className="h-5 w-5 text-red-500" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={() => appendBenefit({ value: "" })}>
                <PlusCircle className="h-4 w-4 mr-2" /> Tambah Benefit
              </Button>
            </div>

            <div>
                <label htmlFor="price" className="block text-sm font-medium mb-1">Harga</label>
                <Input id="price" type="number" {...form.register("price")} placeholder="Kosongkan jika gratis"/>
            </div>

            <div>
                <label htmlFor="wagLink" className="block text-sm font-medium mb-1">Link Grup WhatsApp</label>
                <Input id="wagLink" {...form.register("wagLink")} />
                {form.formState.errors.wagLink && <p className="text-red-500 text-xs mt-1">{form.formState.errors.wagLink.message}</p>}
            </div>
             <div>
                <label htmlFor="status" className="block text-sm font-medium mb-1">Status</label>
                <select id="status" {...form.register("status")} className="w-full p-2 border rounded-md bg-white">
                    <option value="draft">Draft</option>
                    <option value="publish">Publish</option>
                    <option value="closed">Closed</option>
                </select>
            </div>
          </TabsContent>

          {/* TAB PENGATURAN WEBSITE */}
          <TabsContent value="website" className="mt-6 space-y-6">
            <div>
              <label htmlFor="slug" className="block text-sm font-medium mb-1">Slug URL</label>
              <Input id="slug" {...form.register("slug")} />
              {form.formState.errors.slug && <p className="text-red-500 text-xs mt-1">{form.formState.errors.slug.message}</p>}
            </div>
            <div>
              <label htmlFor="metaTitle" className="block text-sm font-medium mb-1">Meta Title</label>
              <Input id="metaTitle" {...form.register("metaTitle")} />
            </div>
            <div>
              <label htmlFor="metaDescription" className="block text-sm font-medium mb-1">Meta Description</label>
              <Textarea id="metaDescription" {...form.register("metaDescription")} />
            </div>
            <div>
              <label htmlFor="keywords" className="block text-sm font-medium mb-1">Keywords</label>
              <Input id="keywords" {...form.register("keywords")} placeholder="kelas online, public speaking, ..." />
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end pt-6">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Menyimpan...
              </>
            ) : (
              "Simpan Perubahan"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
