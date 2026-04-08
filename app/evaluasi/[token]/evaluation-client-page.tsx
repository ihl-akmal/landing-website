'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { validateEvaluationToken, submitEvaluation } from "@/lib/actions/evaluations";

import NavbarCustom from "@/components/NavbarCustom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { StarRating } from "@/components/ui/star-rating";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface EvaluationClientPageProps {
  token: string;
}

interface ClassData {
  id: string;
  title: string;
}

interface RegistrationData {
  id: string;
  name: string;
}

const formSchema = z.object({
  registrationId: z.string().min(1, "Nama harus dipilih."),
  selfChange: z.enum(["Iya", "Tidak", "Mungkin"], { required_error: "Kamu harus memilih salah satu opsi." }),
  changeDescription: z.string().optional(),
  overallRating: z.number().min(1, "Rating harus diisi.").max(5),
  speakerRating: z.number().min(1, "Rating harus diisi.").max(5),
  moderatorRating: z.number().min(1, "Rating harus diisi.").max(5),
  isWorthy: z.enum(["Iya", "Tidak", "Mungkin"], { required_error: "Kamu harus memilih salah satu opsi." }),
  wouldAttendAgain: z.enum(["Tertarik", "Tidak", "Mungkin"], { required_error: "Kamu harus memilih salah satu opsi." }),
  recommendationLikelihood: z.number().min(1, "Rating harus diisi.").max(5),
  improvementSuggestion: z.string().optional(),
}).refine(data => {
  if (data.selfChange === 'Iya') return data.changeDescription && data.changeDescription.trim().length > 0;
  return true;
}, { message: "Cerita perubahan harus diisi.", path: ["changeDescription"] });

export default function EvaluationClientPage({ token }: EvaluationClientPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [classData, setClassData] = useState<ClassData | null>(null);
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  useEffect(() => {
    async function validateAndFetchData() {
      try {
        const result = await validateEvaluationToken(token);
        if (result.isValid && result.classData && result.registrations) {
          setClassData(result.classData);
          setRegistrations(result.registrations);
          document.title = `Form Evaluasi - ${result.classData.title}`;
        } else {
          setValidationError(result.error || "Form evaluasi sudah kedaluwarsa.");
        }
      } catch (error) {
        setValidationError("Terjadi kesalahan saat memvalidasi link.");
      } finally {
        setIsLoading(false);
      }
    }
    validateAndFetchData();
  }, [token]);

  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      registrationId: "",
      selfChange: undefined,
      changeDescription: "",
      overallRating: 0,
      speakerRating: 0,
      moderatorRating: 0,
      isWorthy: undefined,
      wouldAttendAgain: undefined,
      recommendationLikelihood: 0,
      improvementSuggestion: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!classData) return;
    setIsSubmitting(true);
    setSubmissionError(null);
    const result = await submitEvaluation(token, classData.id, values);
    if (result.success) {
      setIsSubmitSuccessful(true);
    } else {
      setSubmissionError(result.error || "Terjadi kesalahan yang tidak diketahui.");
    }
    setIsSubmitting(false);
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen"><Loader2 className="h-12 w-12 animate-spin text-pink-500" /><p className="mt-4 text-lg text-gray-600">Memuat form evaluasi...</p></div>
    );
  }

  const renderContent = () => {
    if (validationError) {
      return (
          <div className="container mx-auto max-w-lg px-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Link Tidak Valid</AlertTitle>
              <AlertDescription>{validationError}</AlertDescription>
            </Alert>
            <div className="text-center mt-6">
              <Link href="/" passHref>
                <Button variant="outline">Kembali ke Homepage</Button>
              </Link>
            </div>
          </div>
      );
    }

    if (isSubmitSuccessful) {
      return (
          <div className="container mx-auto max-w-lg px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <CheckCircle className="h-20 w-20 mx-auto text-green-500" />
              <h1 className="text-3xl md:text-4xl font-bold mt-4">Terima Kasih ya!</h1>
              <p className="text-sm text-gray-600 mt-2">Evaluasi telah berhasil dikirim. Masukan dari kamu sangat berharga. Untuk distribusi sertifikat akan diinformasikan estimasi H+7 melalui WAG</p>
              <Link href="/kelas" passHref>
                <Button className="mt-6 text-white">Lihat Kelas Lainnya</Button>
              </Link>
            </div>
          </div>
      );
    }

    return (
        <div className="container mx-auto max-w-2xl px-4">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-10 relative">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Form Evaluasi & Kehadiran</h1>
                <p className="text-lg text-gray-600 mt-2">Kelas: {classData?.title}</p>
                <div className="absolute -top-12 -left-24 w-32 h-32 bg-pink-100 rounded-full opacity-50 blur-2xl -z-10"></div>
                <div className="absolute -bottom-12 -right-24 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-2xl -z-10"></div>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                <div className="space-y-8">
                    <FormField control={form.control} name="registrationId" render={({ field }) => (<FormItem><FormLabel>Nama Lengkap</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Pilih nama kamu dari daftar" /></SelectTrigger></FormControl><SelectContent>{registrations.map(reg => (<SelectItem key={reg.id} value={reg.id}>{reg.name}</SelectItem>))}</SelectContent></Select><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="selfChange" render={({ field }) => (<FormItem className="space-y-3"><FormLabel>Apakah kamu mengalami perubahan positif setelah kelas ini?</FormLabel><FormControl><RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-wrap items-center gap-x-6 gap-y-3"><FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="Iya" /></FormControl><FormLabel className="font-normal">Iya</FormLabel></FormItem><FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="Tidak" /></FormControl><FormLabel className="font-normal">Tidak</FormLabel></FormItem><FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="Mungkin" /></FormControl><FormLabel className="font-normal">Mungkin</FormLabel></FormItem></RadioGroup></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="changeDescription" render={({ field }) => (<FormItem><FormLabel>Jika Iya, ceritakan perubahan positifnya</FormLabel><FormControl><Textarea placeholder="Contoh: Saya menjadi lebih percaya diri..." {...field} /></FormControl><FormMessage /></FormItem>)} />
                </div>

                <hr className="border-gray-200" />

                <div className="space-y-8">
                    <h3 className="text-lg font-medium text-gray-800 text-center">Beri Rating Pengalaman Kelas</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-8">
                        <FormField control={form.control} name="overallRating" render={({ field }) => (<FormItem className="flex flex-col items-center"><FormLabel>Acara Keseluruhan</FormLabel><FormControl><StarRating {...field} /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="speakerRating" render={({ field }) => (<FormItem className="flex flex-col items-center"><FormLabel>Narasumber</FormLabel><FormControl><StarRating {...field} /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="moderatorRating" render={({ field }) => (<FormItem className="flex flex-col items-center"><FormLabel>Moderator</FormLabel><FormControl><StarRating {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </div>
                    <FormField control={form.control} name="isWorthy" render={({ field }) => (<FormItem className="space-y-3"><FormLabel>Apakah materi sesuai dengan kebutuhanmu?</FormLabel><FormControl><RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-wrap items-center gap-x-6 gap-y-3"><FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="Iya" /></FormControl><FormLabel className="font-normal">Sangat sesuai</FormLabel></FormItem><FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="Tidak" /></FormControl><FormLabel className="font-normal">Kurang</FormLabel></FormItem><FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="Mungkin" /></FormControl><FormLabel className="font-normal">Biasa saja</FormLabel></FormItem></RadioGroup></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="wouldAttendAgain" render={({ field }) => (<FormItem className="space-y-3"><FormLabel>Tertarik untuk ikut kelas serupa lagi?</FormLabel><FormControl><RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-wrap items-center gap-x-6 gap-y-3"><FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="Tertarik" /></FormControl><FormLabel className="font-normal">Sangat Tertarik</FormLabel></FormItem><FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="Tidak" /></FormControl><FormLabel className="font-normal">Tidak</FormLabel></FormItem><FormItem className="flex items-center space-x-2"><FormControl><RadioGroupItem value="Mungkin" /></FormControl><FormLabel className="font-normal">Mungkin</FormLabel></FormItem></RadioGroup></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="recommendationLikelihood" render={({ field }) => (<FormItem><FormLabel>Seberapa besar kemungkinan kamu merekomendasikan acara ini?</FormLabel><FormControl><StarRating {...field} /></FormControl><FormDescription>1 bintang: Sangat tidak mungkin, 5 bintang: Sangat mungkin</FormDescription><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="improvementSuggestion" render={({ field }) => (<FormItem><FormLabel>Saran untuk acara kedepannya?</FormLabel><FormControl><Textarea placeholder="Contoh: Perbanyak sesi tanya jawab." {...field} /></FormControl><FormMessage /></FormItem>)} />
                </div>

                {submissionError && (<Alert variant="destructive" className="mt-6"><AlertCircle className="h-4 w-4" /><AlertTitle>Gagal Mengirim</AlertTitle><AlertDescription>{submissionError}</AlertDescription></Alert>)}

                <div className="pt-2">
                    <Button type="submit" className="text-white w-full" disabled={isSubmitting} size="lg">{isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Mengirim...</>) : "Kirim Evaluasi"}</Button>
                </div>
                </form>
            </Form>
            </div>
        </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <NavbarCustom announcementVisible={false} />
      <section className="bg-gray-50 pt-32 pb-20 relative overflow-hidden">
        {renderContent()}
      </section>
      <Footer />
    </div>
  );
}
