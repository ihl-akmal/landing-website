'use client';

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createClass, ClassData } from "@/lib/actions/classes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Loader2, ArrowLeft, PlusCircle, XCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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

const generateNumberOptions = (max: number) => {
  return Array.from({ length: max }, (_, i) => String(i).padStart(2, '0'));
};

export default function CreateClassPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

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
      time: "00:00",
    },
  });

  useEffect(() => {
    form.setValue("time", `${hour}:${minute}`, { shouldValidate: true });
  }, [hour, minute, form]);

  useEffect(() => {
    if (closeDate) {
      form.setValue("closeRegistration", `${closeDate}T${closeHour}:${closeMinute}`);
    }
  }, [closeDate, closeHour, closeMinute, form]);

  const { fields: learnFields, append: appendLearn, remove: removeLearn } = useFieldArray({
    control: form.control,
    name: "whatYouWillLearn",
  });

  const { fields: benefitFields, append: appendBenefit, remove: removeBenefit } = useFieldArray({
    control: form.control,
    name: "benefits",
  });

  const onSubmit = async (values: ClassFormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    const classData: Omit<ClassData, "id" | "createdAt"> = {
      ...values,
      whatYouWillLearn: values.whatYouWillLearn?.map(item => item.value).filter(v => v),
      benefits: values.benefits?.map(item => item.value).filter(v => v),
    };

    const result = await createClass(classData);

    if (result.success) {
      toast({ 
        title: "Sukses!",
        description: "Kelas baru berhasil disimpan."
      });
      router.push("/admin/kelas");
    } else {
      setServerError(result.error || "Terjadi kesalahan tidak diketahui");
    } 

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <Link href="/admin/kelas">
          <Button variant="outline" size="icon" className="mr-4">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Buat Kelas Baru</h1>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue="kelas" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="kelas">Pengaturan Kelas</TabsTrigger>
            <TabsTrigger value="website">Pengaturan Website</TabsTrigger>
          </TabsList>

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
        
        {serverError && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Gagal Menyimpan</AlertTitle>
            <AlertDescription>{serverError}</AlertDescription>
          </Alert>
        )}

        <div className="flex justify-end pt-6">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Menyimpan...
              </>
            ) : (
              "Simpan Kelas"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
