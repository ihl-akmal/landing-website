import InternAlumniPageClient from "./page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alumni Intern - Grazedu",
  description: "Dari pengalaman belajar hingga pencapaian nyata. Temui para alumni magang kami yang telah berkembang bersama Grazedu.",
  keywords: "internship, alumni internship",
  openGraph: {
    title: "Alumni Intern - Grazedu",
    description: "Dari pengalaman belajar hingga pencapaian nyata. Temui para alumni magang kami yang telah berkembang bersama Grazedu.",
    type: "website",
    locale: "id_ID",
  },
}

export default function InternAlumniPage() {
  return <InternAlumniPageClient />
}
