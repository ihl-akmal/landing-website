'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getAdminClassById, ClassData } from "@/lib/actions/classes";
import { generateEvaluationLink, getActiveEvaluationLink, getEvaluationSubmissions, EvaluationSubmission } from "@/lib/actions/evaluations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, ArrowLeft, Link as LinkIcon, AlertCircle, Copy, Check, Clock, Users } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

export default function EvaluationManagementPage() {
  const params = useParams();
  const classId = params.id as string;
  const { toast } = useToast();

  const [classData, setClassData] = useState<ClassData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeLink, setActiveLink] = useState<{ url: string; expiresAt: Date } | null>(null);
  const [submissions, setSubmissions] = useState<EvaluationSubmission[]>([]);
  
  const [isActivating, setIsActivating] = useState(false);
  const [activationError, setActivationError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!classId) return;

    async function fetchData() {
      setIsLoading(true);
      try {
        const [classInfo, activeLinkData, submissionsData] = await Promise.all([
          getAdminClassById(classId),
          getActiveEvaluationLink(classId),
          getEvaluationSubmissions(classId)
        ]);

        if (!classInfo) {
          setError("Kelas tidak ditemukan.");
          setIsLoading(false);
          return;
        }
        
        setClassData(classInfo);
        setSubmissions(submissionsData);

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

  const handleActivateLink = async () => {
    setIsActivating(true);
    setActivationError(null);

    const result = await generateEvaluationLink(classId);

    if (result.success && result.token) {
      const fullLink = `${window.location.origin}/evaluasi/${result.token}`;
      // Manually set the new active link info instead of re-fetching
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
      setActiveLink({ url: fullLink, expiresAt });
      toast({ title: "Sukses", description: "Link evaluasi berhasil diaktifkan." });
    } else {
      setActivationError(result.error || "Terjadi kesalahan yang tidak diketahui.");
    }

    setIsActivating(false);
  };

  const handleCopyToClipboard = () => {
    if (!activeLink) return;
    navigator.clipboard.writeText(activeLink.url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    toast({ title: "Tersalin!", description: "Link evaluasi telah disalin ke clipboard." });
  }

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
                    "Link berikut aktif dan dapat dibagikan ke peserta. Link akan kedaluwarsa secara otomatis." :
                    "Aktifkan link untuk dibagikan kepada peserta. Link bersifat unik dan hanya aktif selama 1 jam."}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {activationError && (
                     <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Aktivasi Gagal</AlertTitle>
                        <AlertDescription>{activationError}</AlertDescription>
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
                            Kedaluwarsa pada: {activeLink.expiresAt.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-start gap-4">
                         <p className="text-sm text-gray-600 p-4 bg-gray-50 rounded-md border">
                            Status form evaluasi saat ini <span className="font-semibold text-red-600">tidak aktif</span>. 
                        </p>
                        <Button onClick={handleActivateLink} disabled={isActivating}>
                            {isActivating ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Mengaktifkan...</>
                            ) : (
                                <><LinkIcon className="mr-2 h-4 w-4" /> Aktifkan Link Evaluasi</>
                            )}
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-purple-600"/>
                    Evaluasi Diterima
                </CardTitle>
                <CardDescription>
                    Berikut adalah daftar peserta yang telah berhasil mengirimkan evaluasi.
                </CardDescription>
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
