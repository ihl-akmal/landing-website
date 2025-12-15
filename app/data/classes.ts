import {
  fetchClassesFromGoogleSheets,
  GOOGLE_SHEETS_CONFIG,
  isGoogleSheetsConfigured,
  GoogleSheetsClass
} from './google-sheets';


export interface ClassData {
  // Basic Information
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  status?: 'new' | 'favorit' | 'close';
  
  // SEO & Meta
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  
  // Visual
  image?: string;
  thumbnail?: string;
  
  // Class Details
  duration?: string;
  price?: string;
  instructor?: string;
  date?: string;      // e.g. "Sabtu, 23 Mei 2025"
  time?: string;      // e.g. "19.00 WIB"
  location?: string;  // e.g. "Zoom Meeting"
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  category?: string;
  
  // Registration
  formUrl: string;
  isActive: string;
  
  // Schedule & Capacity
  startDate?: string;
  endDate?: string;
  maxParticipants?: number;
  currentParticipants?: number;
  expirationDate: string; // <-- Tambahkan ini untuk kolom "Tanggal Kadaluarsa"
  
  // Additional Info
  requirements: string[];
  benefits: string[];
  testimonials?: {
    name: string;
    text: string;
    rating: number;
  }[];
}



// export const classes: ClassData[] = [
 
  
  
//   {
//     slug: "komunikasi-asertif",
//     title: "Assertive Communication for Women in Workplace",
//     shortDescription: "Berani Berpendapat Tanpa Takut Rasa Bersalah",
//     description: "Pelajari cara berkomunikasi asertif yang efektif tanpa terkesan agresif. Kembangkan kemampuan menyampaikan pendapat dengan tegas namun tetap menghormati orang lain.",
//     status: 'close',
//     metaTitle: "Soft Skill: Asertif - Komunikasi Tegas dan Hormat | Grazedu",
//     metaDescription: "Kelas komunikasi asertif untuk mengembangkan kemampuan menyampaikan pendapat dengan tegas namun tetap menghormati orang lain. Cocok untuk pengembangan soft skills.",
//     keywords: ["komunikasi asertif", "soft skills", "kepercayaan diri", "komunikasi", "interpersonal"],
//     image: "/class/sc-asertif.png",
//     thumbnail: "/class/sc-asertif.png",
//     duration: "1 sesi (2 jam/sesi)",
//     date: "Sabtu, 27 September 2025",
//     time: "9.00 WIB",
//     location: "Zoom Meeting",
//     price: "FREE",
//     instructor: "Helen Patricia (Corporate Branding FKS Group)",
//     level: "Beginner",
//     category: "Soft Skills",
//     formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdExample7/viewform?embedded=true",
//     isActive: true,
//     startDate: "2024-03-20",
//     endDate: "2024-03-27",
//     maxParticipants: 22,
//     currentParticipants: 18,
//     requirements: [
//       "Minimal usia 18 tahun",
//       "Koneksi internet stabil",
//       "Siap untuk praktik komunikasi"
//     ],
//     benefits: [
//       "Menguasai teknik komunikasi asertif",
//       "Meningkatkan kepercayaan diri",
//       "Mengembangkan kemampuan negosiasi",
//       "Membuat hubungan interpersonal yang sehat"
//     ]
//   },
//   {
//     slug: "soft-skill-personal-branding",
//     title: "Personal Branding Perempuan untuk Membangun Kredibilitas Professional",
//     shortDescription: "Membangun Citra Diri dan Narasi Otentik yang Kuat",
//     status: 'close',
//     description: "Versi lengkap dari personal branding dengan fokus pada pengembangan soft skills. Pelajari cara membangun brand diri yang mencerminkan kemampuan dan nilai-nilai Anda.",
//     metaTitle: "Soft Skill: Personal Branding - Bangun Brand Diri | Grazedu",
//     metaDescription: "Kelas personal branding lengkap dengan fokus soft skills. Pelajari cara membangun brand diri yang mencerminkan kemampuan dan nilai-nilai personal Anda.",
//     keywords: ["personal branding", "soft skills", "brand diri", "identitas", "pengembangan diri"],
//     image: "/class/sc-personalbranding.png",
//     thumbnail: "/class/sc-personalbranding.png",
//     duration: "3 sesi (2 jam/sesi)",
//     date: "Sabtu, 20 September 2025",
//     time: "09.00 WIB",
//     location: "Zoom Meeting",
//     price: "FREE",
//     instructor: "Retno Pratiwi, S.Psi., M.H., CHRP., CHRM., CMT",
//     level: "Intermediate",
//     category: "Personal Development",
//     formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdExample8/viewform?embedded=true",
//     isActive: true,
//     startDate: "2024-03-25",
//     endDate: "2024-04-01",
//     maxParticipants: 18,
//     currentParticipants: 14,
//     requirements: [
//       "Minimal usia 18 tahun",
//       "Memiliki akun media sosial",
//       "Koneksi internet stabil"
//     ],
//     benefits: [
//       "Mengembangkan identitas personal yang kuat",
//       "Meningkatkan soft skills",
//       "Membangun network profesional",
//       "Meningkatkan visibilitas online"
//     ]
//   },
//   {
//     slug: "art-of-storytelling",
//     title: "Strategic Storytelling for Impactful Presentations",
//     shortDescription: "Membangun Presentasi yang Professional dengan Teknik Storytelling",
//     description: "Pelajari seni storytelling yang powerful untuk berbagai keperluan. Dari presentasi bisnis hingga konten media sosial, kuasai teknik bercerita yang engaging dan memorable.",
//     status: 'close',
//     metaTitle: "The Art of Storytelling - Seni Bercerita yang Memukau | GrazEdu",
//     metaDescription: "Kelas storytelling untuk menguasai seni bercerita yang engaging. Pelajari teknik storytelling untuk presentasi, konten, dan komunikasi yang lebih efektif.",
//     keywords: ["storytelling", "bercerita", "presentasi", "komunikasi", "konten"],
//     image: "/class/storytelling.png",
//     thumbnail: "/class/storytelling.png",
//     duration: "1 sesi (2 jam/sesi)",
//     date: "Sabtu, 13 September 2025",
//     time: "9.00 WIB",
//     location: "Zoom Meeting",
//     price: "FREE",
//     instructor: "Rachel Septiana Chandra (Founder & CEO CGI Creative Lab)",
//     level: "Intermediate",
//     category: "Communication",
//     formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdExample3/viewform?embedded=true",
//     isActive: true,
//     startDate: "2024-03-01",
//     endDate: "2024-03-08",
//     maxParticipants: 18,
//     currentParticipants: 15,
//     requirements: [
//       "Minimal usia 18 tahun",
//       "Memiliki laptop/komputer",
//       "Koneksi internet stabil"
//     ],
//     benefits: [
//       "Menguasai struktur storytelling yang efektif",
//       "Membuat presentasi yang lebih engaging",
//       "Mengembangkan konten yang memorable",
//       "Meningkatkan kemampuan komunikasi"
//     ]
//   },
//   {
//     slug: "intensive-personal-branding",
//     title: "Intensive Class Personal Branding for Women",
//     shortDescription: "Temukan nilai unikmu dan tampil autentik",
//     description: "Pelajari cara membangun personal brand yang kuat dan autentik. Temukan nilai unik Anda, kembangkan identitas profesional, dan buat strategi untuk meningkatkan visibilitas di dunia kerja dan bisnis.",
//     status: 'close',
//     metaTitle: "Personal Branding for Women - Bangun Brand Diri yang Kuat | Grazedu",
//     metaDescription: "Kelas Personal Branding untuk membangun identitas profesional yang kuat. Temukan nilai unik, kembangkan strategi branding, dan tingkatkan visibilitas karir Anda.",
//     keywords: ["personal branding", "brand diri", "identitas profesional", "karir", "networking"],
//     image: "/class/personalbranding.png",
//     thumbnail: "/class/personalbranding.png",
//     duration: "3 sesi (2 jam/sesi)",
//     date: "3 sesi (Intake 14 September 2025)",
//     time: "19.15 WIB",
//     location: "Zoom Meeting",
//     price: "Rp 99.000",
//     instructor: "Nurrotul Ilma (Content Creator TIktok with 700k+ Followers",
//     level: "Beginner",
//     category: "Career Development",
//     formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdExample2/viewform?embedded=true",
//     isActive: true,
//     startDate: "2024-02-20",
//     endDate: "2024-02-27",
//     maxParticipants: 15,
//     currentParticipants: 8,
//     requirements: [
//       "Minimal usia 18 tahun",
//       "Memiliki akun LinkedIn",
//       "Koneksi internet stabil"
//     ],
//     benefits: [
//       "Menemukan nilai unik dan kelebihan diri",
//       "Membangun identitas profesional yang konsisten",
//       "Mengembangkan strategi networking",
//       "Meningkatkan visibilitas online"
//     ]
//   },
//   {
//     slug: "women-in-fmcg",
//     title: "Career Ready Women in FMCG",
//     shortDescription: "Strategi Tembus Dunia Kerja dengan AI Tools",
//     description: "Kelas khusus untuk wanita yang berkecimpung di industri FMCG (Fast Moving Consumer Goods). Pelajari strategi sukses, networking, dan pengembangan karir di industri ini.",
//     status: 'close',
//     metaTitle: "Women in FMCG - Strategi Sukses di Industri FMCG | Grazedu",
//     metaDescription: "Kelas khusus wanita di industri FMCG. Pelajari strategi sukses, networking, dan pengembangan karir di industri Fast Moving Consumer Goods.",
//     keywords: ["FMCG", "industri", "wanita", "karir", "networking", "strategi bisnis"],
//     image: "/class/womenfmcg.png",
//     thumbnail: "/class/womenfmcg.png",
//     duration: "1 sesi (2 jam/sesi)",
//     date: "Sabtu, 30 Agustus 2025",
//     time: "9.00 WIB",
//     location: "Zoom Meeting",
//     price: "FREE",
//     instructor: "Hesti Wijayanti (People Operations Manager ata AVO Group)",
//     level: "Advanced",
//     category: "Industry Specific",
//     formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdExample6/viewform?embedded=true",
//     isActive: true,
//     startDate: "2024-03-15",
//     endDate: "2024-03-22",
//     maxParticipants: 15,
//     currentParticipants: 12,
//     requirements: [
//       "Minimal usia 21 tahun",
//       "Pengalaman kerja di FMCG minimal 2 tahun",
//       "Koneksi internet stabil"
//     ],
//     benefits: [
//       "Memahami dinamika industri FMCG",
//       "Mengembangkan strategi karir",
//       "Membangun network profesional",
//       "Meningkatkan leadership skills"
//     ]
//   },
//   {
//     slug: "workplace-communication",
//     title: "Workplace Communication",
//     shortDescription: "Membangun Komunikasi Professional di Dunia Kerja",
//     description: "Kembangkan kemampuan komunikasi profesional di tempat kerja. Pelajari cara berkomunikasi efektif dengan rekan kerja, atasan, dan klien untuk meningkatkan performa kerja.",
//     status: 'close',
//     metaTitle: "Workplace Communication - Komunikasi Profesional | GrazEdu",
//     metaDescription: "Kelas komunikasi profesional untuk meningkatkan kemampuan berkomunikasi di tempat kerja. Pelajari teknik komunikasi dengan rekan kerja, atasan, dan klien.",
//     keywords: ["komunikasi profesional", "workplace", "teamwork", "leadership", "karir"],
//     image: "/class/workplace.png",
//     thumbnail: "/class/workplace.png",
//     duration: "1 sesi (2 jam/sesi)",
//     date: "Sabtu, 2 Agustus 2025",
//     time: "9.00 WIB",
//     location: "Zoom Meeting",
//     price: "FREE",
//     instructor: "Ajeng Kusumaning R. (AVP-CSR Education & Community Development at Indosat",
//     level: "Intermediate",
//     category: "Communication Skills",
//     formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdExample5/viewform?embedded=true",
//     isActive: true,
//     startDate: "2024-03-10",
//     endDate: "2024-03-17",
//     maxParticipants: 20,
//     currentParticipants: 16,
//     requirements: [
//       "Minimal usia 18 tahun",
//       "Pengalaman kerja minimal 1 tahun",
//       "Koneksi internet stabil"
//     ],
//     benefits: [
//       "Meningkatkan komunikasi dengan tim",
//       "Menguasai teknik presentasi bisnis",
//       "Mengembangkan leadership skills",
//       "Meningkatkan performa kerja"
//     ]
//   },
//   {
//     slug: "intensive-public-speaking-for-women",
//     title: "Intensive Class Public Speaking for Women",
//     shortDescription: "Bangun kepercayaan diri bicara di depan umum",
//     description: "Kelas Public Speaking khusus untuk wanita yang ingin mengembangkan kemampuan berbicara di depan umum. Pelajari teknik presentasi yang efektif, cara mengatasi nervous, dan membangun kepercayaan diri untuk tampil percaya diri di berbagai kesempatan.",
//     status: 'new',
//     metaTitle: "Public Speaking for Women - Kelas Bicara di Depan Umum | GrazEdu",
//     metaDescription: "Kelas Public Speaking khusus wanita. Pelajari teknik presentasi efektif, atasi nervous, dan bangun kepercayaan diri bicara di depan umum. Mentor berpengalaman, materi terstruktur.",
//     keywords: ["public speaking", "presentasi", "kepercayaan diri", "wanita", "soft skill"],
//     image: "/class/publicspeaking.png",
//     thumbnail: "/class/publicspeaking.png",
//     duration: "4 sesi (2 jam/sesi)",
//     date: "3 Sesi (Intake  12 Juli 2025)",
//     time: "15.30 WIB",
//     location: "Zoom Meeting",
//     price: "Rp 99.000",
//     instructor: "Aliffa Milanisty (CEO Grazedu & Awardee LPDP RI)",
//     level: "Beginner",
//     category: "Communication Skills",
//     formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScnRTtqPUyS9pjt3Aw5pdY34sgPqvuyqOPTAtDII7PvWGicMw/viewform?embedded=true",
//     isActive: true,
//     startDate: "2024-02-15",
//     endDate: "2024-02-22",
//     maxParticipants: 20,
//     currentParticipants: 12,
//     requirements: [
//       "Minimal usia 18 tahun",
//       "Memiliki laptop/komputer",
//       "Koneksi internet stabil"
//     ],
//     benefits: [
//       "Mengatasi rasa takut bicara di depan umum",
//       "Menguasai teknik presentasi yang menarik",
//       "Membangun kepercayaan diri",
//       "Mendapatkan feedback langsung dari mentor"
//     ],
//     testimonials: [
//       {
//         name: "Sarah",
//         text: "Kelas ini sangat membantu! Sekarang saya lebih percaya diri saat presentasi di kantor.",
//         rating: 5
//       }
//     ]
//   },
  
// ];

// Helper functions data dummy
// export function getClassBySlug(slug: string): ClassData | undefined {
//   return classes.find(cls => cls.slug === slug);
// }

// export function getAllClasses(): ClassData[] {
//   return classes.filter(cls => cls.isActive);
// }

// export function getClassesByCategory(category: string): ClassData[] {
//   return classes.filter(cls => cls.category === category && cls.isActive);
// }

// export function getClassesByLevel(level: string): ClassData[] {
//   return classes.filter(cls => cls.level === level && cls.isActive);
// }

// export function getUpcomingClasses(): ClassData[] {
//   const today = new Date();
//   return classes.filter(cls => {
//     if (!cls.startDate || !cls.isActive) return false;
//     const startDate = new Date(cls.startDate);
//     return startDate >= today;
//   });
// }


let cache: ClassData[] | null = null;
let cacheTime = 0;

export async function getAllClasses(): Promise<ClassData[]> {
  if (!isGoogleSheetsConfigured()) return [];

  const data: GoogleSheetsClass[] = await fetchClassesFromGoogleSheets(GOOGLE_SHEETS_CONFIG);


  // Mapping GoogleSheetsClass → ClassData
  const mapped: ClassData[] = data.map((cls: GoogleSheetsClass) => ({
    
    slug: cls.slug,
    title: cls.title,
    description: cls.description || '',
    shortDescription: cls.shortDescription || '',
    status: cls.status as 'new' | 'favorit' | 'close' | undefined,
    metaTitle: cls.metaTitle,
    metaDescription: cls.metaDescription,
    keywords: cls.keywords
      ? cls.keywords.toString().split(',').map((k) => k.trim())
      : [],
    image: cls.image,
    thumbnail: cls.thumbnail,
    duration: cls.duration,
    price: cls.price,
    instructor: cls.instructor,
    date: cls.date,
    time: cls.time,
    location: cls.location,
    expirationDate: cls.expirationDate,
    level: cls.level as 'Beginner' | 'Intermediate' | 'Advanced' | undefined,
    category: cls.category,
    formUrl: cls.formUrl,
    isActive: cls.isActive,
    requirements:
      Array.isArray(cls.requirements) && cls.requirements.length > 0
        ? cls.requirements
        : typeof cls.requirements === 'string' && cls.requirements.trim() !== ''
        ? cls.requirements.split(/[;,]/).map((r) => r.trim())
        : [],

    benefits:
      Array.isArray(cls.benefits) && cls.benefits.length > 0
        ? cls.benefits
        : typeof cls.benefits === 'string' && cls.benefits.trim() !== ''
        ? cls.benefits.split(/[;,]/).map((b) => b.trim())
        : [],
    testimonials: [],
    
  }));
  


  return mapped.filter(cls => cls.isActive);
}

export async function getClassBySlug(slug: string): Promise<ClassData | null> {
  const classes = await getAllClasses();
  return classes.find(cls => cls.slug === slug) || null;
}

export async function getClassesByCategory(category: string): Promise<ClassData[]> {
  const classes = await getAllClasses();
  return classes.filter(cls => cls.category === category);
}

export async function getClassesByLevel(level: string): Promise<ClassData[]> {
  const classes = await getAllClasses();
  return classes.filter(cls => cls.level === level);
}

export async function getUpcomingClasses(): Promise<ClassData[]> {
  const today = new Date();
  const classes = await getAllClasses();
  return classes.filter(cls => cls.startDate && cls.isActive && new Date(cls.startDate) >= today);
}  
