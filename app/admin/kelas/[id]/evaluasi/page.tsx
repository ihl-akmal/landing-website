'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getAdminClassById, ClassData } from "@/lib/actions/classes";
import { generateEvaluationLink, getActiveEvaluationLink, getEvaluationSubmissions, EvaluationSubmission, getFullEvaluationsForExport } from "@/lib/actions/evaluations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, ArrowLeft, Link as LinkIcon, AlertCircle, Copy, Check, Clock, Users } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ExportButton from "@/components/admin/ExportButton";

export default function EvaluationManagementPage() {
  const params = useParams();
  const classId = params.id as string;
  const { toast } = useToast();

  const [classData, setClassData] = useState<ClassData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeLink, setActiveLink] = useState<{ url: string; expiresAt: Date } | null>(null);
  const [submissions, setSubmissions] = useState<EvaluationSubmission[]>([]);
  const [exportData, setExportData] = useState<any[]>([]);
  
  const [isCreating, setIsCreating] = useState(false);
  const [creationError, setCreationError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [expiryHour, setExpiryHour] = useState<string>("23");
  const [expiryMinute, setExpiryMinute] = useState<string>("59");

  useEffect(() => {
    if (!classId) return;

    async function fetchData() {
      setIsLoading(true);
      try {
        const [classInfo, activeLinkData, submissionsData, fullEvaluations] = await Promise.all([
          getAdminClassById(classId),
          getActiveEvaluationLink(classId),
          getEvaluationSubmissions(classId),
          getFullEvaluationsForExport(classId)
        ]);

        if (!classInfo) {
          setError("Kelas tidak ditemukan.");
          setIsLoading(false);
          return;
        }
        
        setClassData(classInfo);
        setSubmissions(submissionsData);
        setExportData(fullEvaluations);

        if (activeLinkData) {
          const fullLink = `${window.location.origin}/evaluasi/${activeLinkData.token}`;
          setActiveLink({ url: fullLink, expiresAt: activeLinkData.expiresAt });
        }

      } catch (e) {
        setError("Gagal memuat data halaman evaluasi.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [classId]);

  const handleCreateLink = async () => {
    setIsCreating(true);
    setCreationError(null);

    if (!expiryDate) {
        setCreationError("Silakan tentukan tanggal dan waktu pengisian evaluasi.");
        setIsCreating(false);
        return;
    }

    const [year, month, day] = expiryDate.split('-').map(Number);
    const expirationDate = new Date(year, month - 1, day, parseInt(expiryHour), parseInt(expiryMinute));

    const result = await generateEvaluationLink(classId, expirationDate);

    if (result.success && result.token) {
      const fullLink = `${window.location.origin}/evaluasi/${result.token}`;
      setActiveLink({ url: fullLink, expiresAt: expirationDate });
      toast({ title: "Sukses", description: "Link evaluasi berhasil dibuat." });
    } else {
      setCreationError(result.error || "Terjadi kesalahan yang tidak diketahui.");
    }

    setIsCreating(false);
  };

  const handleCopyToClipboard = () => {
    if (!activeLink) return;
    navigator.clipboard.writeText(activeLink.url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    toast({ title: "Tersalin!", description: "Link evaluasi telah disalin ke clipboard." });
  }
  
  const isEvaluationExpired = () => {
      if (!activeLink) return false;
      const now = new Date();
      return now > activeLink.expiresAt;
  }
  
  const fileName = `Evaluasi - ${classData?.title.replace(/[^a-zA-Z0-9]/g, '_')}`;


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  if (error) {
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
    <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="flex items-center mb-6">
            <Link href="/admin/kelas">
            <Button variant="outline" size="icon" className="mr-4">
                <ArrowLeft className="h-4 w-4" />
            </Button>
            </Link>
            <div>
                <h1 className="text-2xl font-bold">Manajemen Evaluasi</h1>
                <p className="text-sm text-gray-500">{classData?.title}</p>
            </div>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Link Evaluasi</CardTitle>
                <CardDescription>
                    {activeLink ? 
                    "Link berikut aktif dan dapat dibagikan ke peserta. Link akan kedaluwarsa sesuai waktu yang ditentukan." :
                    "Buat link untuk dibagikan kepada peserta. Tentukan batas waktu pengisian."
                    }
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {creationError && (
                     <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Pembuatan Gagal</AlertTitle>
                        <AlertDescription>{creationError}</AlertDescription>
                    </Alert>
                )}

                {activeLink ? (
                    <div className="space-y-3">
                        <label className="text-sm font-medium">Link Aktif:</label>
                        <div className="flex items-center gap-2">
                            <Input value={activeLink.url} readOnly className="bg-gray-50 text-sm" />
                            <Button variant="outline" size="icon" onClick={handleCopyToClipboard}>
                                {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                            </Button>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center">
                            <Clock className="h-3 w-3 mr-1.5" />
                            Kedaluwarsa pada: {activeLink.expiresAt.toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })} WIB
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-start gap-4">
                        {isEvaluationExpired() ? (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Waktu Evaluasi Telah Lewat</AlertTitle>
                                <AlertDescription>Anda tidak dapat membuat link evaluasi baru karena waktu evaluasi telah lewat.</AlertDescription>
                            </Alert>
                        ) : (
                            <>
                                <div className="w-full space-y-2">
                                    <label className="text-sm font-medium">Batas Waktu Pengisian</label>
                                    <div className="flex items-center gap-2">
                                        <Input id="expiryDate" type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="w-auto"/>
                                        <Select value={expiryHour} onValueChange={setExpiryHour}>
                                            <SelectTrigger className="w-[80px]">
                                                <SelectValue placeholder="Jam" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')).map(hour => (
                                                    <SelectItem key={hour} value={hour}>{hour}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <span>:</span>
                                        <Select value={expiryMinute} onValueChange={setExpiryMinute}>
                                            <SelectTrigger className="w-[80px]">
                                                <SelectValue placeholder="Menit" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map(minute => (
                                                    <SelectItem key={minute} value={minute}>{minute}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <Button onClick={handleCreateLink} disabled={isCreating}>
                                    {isCreating ? (
                                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Membuat...</>
                                    ) : (
                                        <><LinkIcon className="mr-2 h-4 w-4" /> Buat Link Evaluasi</>
                                    )}
                                </Button>
                            </>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                 <div className="space-y-1.5">
                    <CardTitle className="flex items-center">
                        <Users className="h-5 w-5 mr-3 text-purple-600"/>
                        Evaluasi Diterima
                    </CardTitle>
                    <CardDescription>
                        Berikut adalah daftar peserta yang telah berhasil mengirimkan evaluasi.
                    </CardDescription>
                 </div>
                <ExportButton data={exportData} fileName={fileName} />
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nama Peserta</TableHead>
                            <TableHead className="text-right">Waktu Mengisi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {submissions.length > 0 ? (
                            submissions.map(sub => (
                                <TableRow key={sub.id}>
                                    <TableCell className="font-medium">{sub.registrantName}</TableCell>
                                    <TableCell className="text-right text-sm text-gray-500">
                                        {sub.submittedAt.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })} - {sub.submittedAt.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={2} className="text-center h-24 text-gray-500">
                                    Belum ada evaluasi yang diterima.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

    </div>
  );
}
