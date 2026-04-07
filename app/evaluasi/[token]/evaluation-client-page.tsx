'use client';

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { validateEvaluationToken, submitEvaluation } from "@/lib/actions/evaluations";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { StarRating } from "@/components/ui/star-rating";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Props now only contain the token
interface EvaluationClientPageProps {
  token: string;
}

// Define the types for the data we will fetch
interface ClassData {
  id: string;
  title: string;
}

interface RegistrationData {
  id: string;
  name: string;
}

const formSchema = z.object({
  registrationId: z.string().min(1, "Nama Anda harus dipilih."),
  selfChange: z.enum(["Iya", "Tidak", "Mungkin"], { required_error: "Anda harus memilih salah satu opsi." }),
  changeDescription: z.string().optional(),
  overallRating: z.number().min(1, "Rating harus diisi.").max(5),
  speakerRating: z.number().min(1, "Rating harus diisi.").max(5),
  moderatorRating: z.number().min(1, "Rating harus diisi.").max(5),
  isWorthy: z.enum(["Iya", "Tidak", "Mungkin"], { required_error: "Anda harus memilih salah satu opsi." }),
  wouldAttendAgain: z.enum(["Tertarik", "Tidak", "Mungkin"], { required_error: "Anda harus memilih salah satu opsi." }),
  recommendationLikelihood: z.number().min(1, "Rating harus diisi.").max(5),
  improvementSuggestion: z.string().optional(),
}).refine(data => {
  if (data.selfChange === 'Iya') return data.changeDescription && data.changeDescription.trim().length > 0;
  return true;
}, { message: "Cerita perubahan harus diisi jika Anda merasakan perubahan.", path: ["changeDescription"] });

// This component is now self-contained. It handles its own data fetching and state.
export default function EvaluationClientPage({ token }: EvaluationClientPageProps) {
  // State for the entire page lifecycle
  const [isLoading, setIsLoading] = useState(true);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [classData, setClassData] = useState<ClassData | null>(null);
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  // Use useEffect to fetch data on the client side
  useEffect(() => {
    async function validateAndFetchData() {
      try {
        const result = await validateEvaluationToken(token);
        if (result.isValid && result.classData && result.registrations) {
          setClassData(result.classData);
          setRegistrations(result.registrations);
        } else {
          setValidationError(result.error || "Link tidak valid atau kedaluwarsa.");
        }
      } catch (error) {
        setValidationError("Terjadi kesalahan saat memvalidasi link Anda.");
      } finally {
        setIsLoading(false);
      }
    }
    validateAndFetchData();
  }, [token]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selfChange: undefined,
      isWorthy: undefined,
      wouldAttendAgain: undefined,
      overallRating: 0,
      speakerRating: 0,
      moderatorRating: 0,
      recommendationLikelihood: 0,
      changeDescription: "",
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

  // 1. Loading State
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-purple-600" />
        <p className="mt-4 text-lg">Sedang memuat halaman...</p>
      </div>
    );
  }

  // 2. Validation Error State
  if (validationError) {
    return (
      <main className="flex items-center justify-center h-screen p-4">
        <Alert variant="destructive" className="max-w-lg">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error Validasi Link</AlertTitle>
          <AlertDescription>{validationError}</AlertDescription>
        </Alert>
      </main>
    );
  }

  // 3. Submission Successful State
  if (isSubmitSuccessful) {
    return (
      <>
        <Navbar />
        <main className="container mx-auto px-4 py-20 flex items-center justify-center text-center">
          <div className="space-y-4">
            <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
            <h1 className="text-3xl font-bold">Terima Kasih!</h1>
            <p className="text-lg text-gray-600">Evaluasi Anda telah berhasil dikirim. Masukan Anda sangat berharga bagi kami.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // 4. Main Form Content State
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl">Form Evaluasi & Kehadiran</CardTitle>
            <CardDescription className="mt-2 text-lg">Kelas: {classData?.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Tabs defaultValue="kehadiran" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="kehadiran">Kehadiran & Dampak</TabsTrigger>
                    <TabsTrigger value="rating">Rating Acara</TabsTrigger>
                  </TabsList>
                  <Separator className="my-6" />

                  <TabsContent value="kehadiran" className="space-y-6">
                    <FormField
                      control={form.control}
                      name="registrationId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold">Nama Lengkap Anda</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="Pilih nama Anda dari daftar" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {registrations.map(reg => (
                                <SelectItem key={reg.id} value={reg.id}>{reg.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="selfChange"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="font-bold">Apakah kamu mengalami perubahan positif pada diri setelah mengikuti kelas ini?</FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                              <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="Iya" /></FormControl><FormLabel className="font-normal">Iya</FormLabel></FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="Tidak" /></FormControl><FormLabel className="font-normal">Tidak</FormLabel></FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="Mungkin" /></FormControl><FormLabel className="font-normal">Mungkin</FormLabel></FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="changeDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold">Jika Iya, ceritakan perubahan positif apa yang kamu rasakan?</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Contoh: Saya menjadi lebih percaya diri untuk berbicara di depan umum." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>

                  <TabsContent value="rating" className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormField control={form.control} name="overallRating" render={({ field }) => (<FormItem><FormLabel className="font-bold">Acara Keseluruhan</FormLabel><FormControl><StarRating {...field} /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="speakerRating" render={({ field }) => (<FormItem><FormLabel className="font-bold">Narasumber</FormLabel><FormControl><StarRating {...field} /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="moderatorRating" render={({ field }) => (<FormItem><FormLabel className="font-bold">Moderator</FormLabel><FormControl><StarRating {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </div>
                    <FormField control={form.control} name="isWorthy" render={({ field }) => (<FormItem className="space-y-3"><FormLabel className="font-bold">Apakah materi yang disampaikan sesuai dengan harga yang dibayarkan?</FormLabel><FormControl><RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                  <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="Iya" /></FormControl><FormLabel className="font-normal">Iya, sangat sesuai</FormLabel></FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="Tidak" /></FormControl><FormLabel className="font-normal">Tidak, saya merasa kurang</FormLabel></FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="Mungkin" /></FormControl><FormLabel className="font-normal">Biasa saja</FormLabel></FormItem>
                              </RadioGroup></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="wouldAttendAgain" render={({ field }) => (<FormItem className="space-y-3"><FormLabel className="font-bold">Jika Growfa mengadakan kelas serupa, apakah kamu akan tertarik untuk ikut lagi?</FormLabel><FormControl><RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                  <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="Tertarik" /></FormControl><FormLabel className="font-normal">Sangat Tertarik</FormLabel></FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="Tidak" /></FormControl><FormLabel className="font-normal">Tidak</FormLabel></FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="Mungkin" /></FormControl><FormLabel className="font-normal">Mungkin</FormLabel></FormItem>
                              </RadioGroup></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="recommendationLikelihood" render={({ field }) => (<FormItem><FormLabel className="font-bold">Seberapa besar kemungkinan kamu akan merekomendasikan acara Growfa ke teman?</FormLabel><FormControl><StarRating {...field} /></FormControl><FormDescription>1 bintang: Sangat tidak mungkin, 5 bintang: Sangat mungkin</FormDescription><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="improvementSuggestion" render={({ field }) => (<FormItem><FormLabel className="font-bold">Saran untuk acara Growfa kedepannya?</FormLabel><FormControl><Textarea placeholder="Contoh: Perbanyak sesi tanya jawab." {...field} /></FormControl><FormMessage /></FormItem>)} />
                  </TabsContent>
                </Tabs>

                {submissionError && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Gagal Mengirim</AlertTitle>
                        <AlertDescription>{submissionError}</AlertDescription>
                    </Alert>
                )}

                <div className="flex justify-end pt-6 border-t">
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Mengirim...</>) : "Kirim Evaluasi"}
                    </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
