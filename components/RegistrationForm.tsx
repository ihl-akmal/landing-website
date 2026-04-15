'use client';

import * as z from 'zod';
import { createRegistration, checkEmailExists } from '@/lib/actions/registrations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent } from 'react';
import { Loader2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

// Skema validasi dasar untuk setiap field
const registrationSchema = z.object({
  name: z.string().min(3, 'Nama lengkap diperlukan'),
  email: z.string().email('Format email tidak valid'),
  whatsapp: z.string().min(10, 'Nomor WhatsApp minimal 10 digit'),
  domicile: z.string().min(3, 'Domisili diperlukan'),
  usia: z.coerce.number().min(1, 'Usia diperlukan'),
  status: z.string().min(1, 'Status diperlukan'),
  infoSource: z.string().min(1, 'Sumber informasi diperlukan'),
  challenge: z.string().min(1, 'Mohon diisi'),
  hope: z.string().min(1, 'Harapan diperlukan'),
});

// Skema untuk validasi Langkah 1
const step1Schema = registrationSchema.pick({
    name: true,
    email: true,
    whatsapp: true,
    domicile: true,
    usia: true,
    status: true,
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;
type FormErrors = { [key in keyof Partial<RegistrationFormValues>]?: string };

interface RegistrationFormProps {
  classId: string;
  closeDate?: string;
}

export default function RegistrationForm({ classId, closeDate }: RegistrationFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      whatsapp: '',
      domicile: '',
      usia: '',
      status: '',
      infoSource: '',
      challenge: '',
      hope: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const provinces = [
    "Aceh", "Bali", "Banten", "Bengkulu", "DI Yogyakarta", "DKI Jakarta", "Gorontalo", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur", 
    "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kalimantan Utara", "Kepulauan Bangka Belitung", 
    "Kepulauan Riau", "Lampung", "Maluku", "Maluku Utara", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Papua", "Papua Barat", 
    "Papua Barat Daya", "Papua Pegunungan", "Papua Selatan", "Papua Tengah", "Riau", "Sulawesi Barat", "Sulawesi Selatan", 
    "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat", "Sumatera Selatan", "Sumatera Utara"
  ];

  const sources = ["Instagram Grazedu", "Whatsapp Grup", "Instagram Info Event", "Teman", "Lainnya"];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      // Hapus error spesifik untuk field email saat pengguna mulai mengetik lagi
      if (name === 'email' && errors.email) {
        const newErrors = { ...errors };
        delete newErrors.email;
        setErrors(newErrors);
      }
  };
  
  const isRegistrationClosed = closeDate ? new Date() > new Date(closeDate) : false;

  const handleNext = async () => {
    // 1. Validasi field di Langkah 1
    const result = step1Schema.safeParse(formData);
    if (!result.success) {
        const newErrors: FormErrors = {};
        result.error.issues.forEach(issue => {
            newErrors[issue.path[0] as keyof RegistrationFormValues] = issue.message;
        });
        setErrors(newErrors);
        return;
    }

    // 2. Cek email ke database
    setIsCheckingEmail(true);
    setErrors({}); // Hapus error lama sebelum cek
    const emailCheck = await checkEmailExists(classId, formData.email);
    setIsCheckingEmail(false);

    if (emailCheck.error) {
        // Tampilkan error server jika ada masalah saat cek email
        setErrors({ email: emailCheck.error });
        return;
    }

    if (emailCheck.exists) {
        // Jika email sudah ada, tampilkan error
        setErrors({ email: 'Email ini sudah terdaftar di kelas ini. Gunakan email lain.' });
        return;
    }

    // 3. Jika semua aman, lanjutkan ke Langkah 2
    setStep(2);
  };

  const handleFormSubmit = async () => {
    if (step === 1) {
        await handleNext(); // Jalankan validasi dan cek email untuk Langkah 1
        return;
    }

    // Validasi semua field sebelum submit
    const result = registrationSchema.safeParse(formData);
    
    if (!result.success) {
        const newErrors: FormErrors = {};
        result.error.issues.forEach(issue => {
            newErrors[issue.path[0] as keyof RegistrationFormValues] = issue.message;
        });
        setErrors(newErrors);

        // Jika ada error di Langkah 1, kembali ke Langkah 1
        if (Object.keys(step1Schema.shape).some(key => newErrors[key as keyof FormErrors])) {
            setStep(1);
        }
        return;
    }

    setIsSubmitting(true);
    setError(null);
    setErrors({});

    try {
      // Pengecekan email terakhir sebelum submit (pengamanan tambahan)
      const emailCheck = await checkEmailExists(classId, formData.email);
      if (emailCheck.exists) {
          setErrors({ email: 'Email ini sudah terdaftar di kelas ini. Gunakan email lain.' });
          setStep(1); // Kembali ke langkah 1 untuk perbaikan
          throw new Error('Pendaftaran gagal karena email sudah terdaftar.');
      }

      const actionResult = await createRegistration({ ...(result.data as RegistrationFormValues), classId });
      if (actionResult.success) {
        const query = new URLSearchParams({ name: result.data.name }).toString();
        router.push(`${window.location.pathname}/success?${query}`);
      } else {
        throw new Error(actionResult.error || 'Terjadi kesalahan saat pendaftaran.');
      }
    } catch (err) {
      setError(err instanceof Error && err.message.includes('Pendaftaran gagal') ? null : (err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isRegistrationClosed) {
      return (
        <div className="p-4 text-center bg-red-100 text-red-700 rounded-lg">
            <p className="font-semibold">Pendaftaran untuk kelas ini telah ditutup.</p>
        </div>
      )
  }
  
  return (
    <div className="space-y-4">
        <h3 className="text-xl font-bold text-center mb-2">Daftar Kelas Gratis</h3>
        <p className="text-center text-sm text-gray-500 mb-6">Langkah {step} dari 2</p>
        <Progress value={step * 50} className="mb-6" />

        <div style={{ display: step === 1 ? 'block' : 'none' }}>
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <p className="text-sm text-gray-400">Pastikan penulisan nama sudah benar</p>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">No. WhatsApp</label>
                    <Input type="number" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} />
                    {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
                </div>
                <div>
                    <label htmlFor="domicile" className="block text-sm font-medium text-gray-700 mb-1">Domisili</label>
                    <select id="domicile" name="domicile" value={formData.domicile} onChange={handleInputChange} className="w-full p-2 border rounded-md bg-white text-gray-500">
                        <option value="" disabled>Pilih Provinsi</option>
                        {provinces.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {errors.domicile && <p className="text-red-500 text-xs mt-1">{errors.domicile}</p>}
                </div>
                <div>
                    <label htmlFor="usia" className="block text-sm font-medium text-gray-700 mb-1">Usia (angka)</label>
                    <Input id="usia" name="usia" type="number" value={formData.usia} onChange={handleInputChange} />
                    {errors.usia && <p className="text-red-500 text-xs mt-1">{errors.usia as string}</p>}
                </div>
                <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status Saat Ini</label>
                    <select id="status" name="status" value={formData.status} onChange={handleInputChange} className="w-full p-2 border rounded-md bg-white text-gray-500">
                        <option value="" disabled>Pilih Status</option>
                        <option value="Pelajar">Pelajar</option>
                        <option value="Mahasiswa">Mahasiswa</option>
                        <option value="Fresh Graduate">Fresh Graduate</option>
                        <option value="Karyawan">Karyawan</option>
                        <option value="Wirausaha">Wirausaha</option>
                        <option value="IRT">IRT</option>
                        <option value="Lainnya">Lainnya</option>
                    </select>
                    {errors.status && <p className="text-red-500 text-xs mt-1">{errors.status}</p>}
                </div>
            </div>
        </div>
        

        <div style={{ display: step === 2 ? 'block' : 'none' }}>
            <div className="space-y-4">
                 <div>
                    <label htmlFor="infoSource" className="block text-sm font-medium text-gray-700 mb-1">Dari mana mengetahui acara ini?</label>
                    <select id="infoSource" name="infoSource" value={formData.infoSource} onChange={handleInputChange} className="w-full p-2 border rounded-md bg-white text-gray-500">
                        <option value="" disabled>Pilih Sumber</option>
                        {sources.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.infoSource && <p className="text-red-500 text-xs mt-1">{errors.infoSource}</p>}
                </div>
                <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1">Apa tantangan yang kamu rasakan saat ini?</label>
                    <Textarea id="challenge" name="challenge" value={formData.challenge} onChange={handleInputChange} />
                    {errors.challenge && <p className="text-red-500 text-xs mt-1">{errors.challenge}</p>}
                </div>
                <div>
                    <label htmlFor="hope" className="block text-sm font-medium text-gray-700 mb-1">Apa harapan kamu setelah mengikuti kelas ini?</label>
                    <Textarea id="hope" name="hope" value={formData.hope} onChange={handleInputChange} />
                    {errors.hope && <p className="text-red-500 text-xs mt-1">{errors.hope}</p>}
                </div>
            </div>
        </div>
        
        {error && <p className="text-red-500 text-center text-sm">{error}</p>}
        
        <div className="mt-6 flex justify-end gap-4">
            {step === 2 && (
                <Button type="button" variant="outline" onClick={() => { setStep(1); setErrors({}); }}>
                Kembali
            </Button>
            )}
            
            {step === 1 ? (
                <Button type="button" onClick={handleNext} disabled={isCheckingEmail} className="bg-gradient-to-r from-primary to-primary-light text-white font-semibold hover:shadow-lg transition-all duration-200 shadow-md">
                    {isCheckingEmail ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Memeriksa...</> : 'Lanjut'}
                </Button>
            ) : (
                <Button type="button" onClick={handleFormSubmit} disabled={isSubmitting} className="bg-gradient-to-r from-primary to-primary-light text-white font-semibold hover:shadow-lg transition-all duration-200 shadow-md">
                    {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Mendaftar...</> : 'Daftar Sekarang'}
                </Button>
            )}
        </div>
    </div>
  );
}
