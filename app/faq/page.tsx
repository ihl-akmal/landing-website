import type { Metadata } from "next"
import FAQPageClient from "./page-client"

export const metadata: Metadata = {
  title: "FAQ - Grazedu | Pertanyaan yang Sering Diajukan",
  description: "Temukan jawaban untuk pertanyaan umum tentang Grazedu, program pengembangan diri dan karir untuk perempuan muda di Indonesia",
  keywords: [
    "FAQ Grazedu",
    "pertanyaan Grazedu", 
    "bantuan Grazedu",
    "informasi program Grazedu",
    "cara daftar Grazedu"
  ],
  openGraph: {
    title: "FAQ - Grazedu | Pertanyaan yang Sering Diajukan",
    description: "Temukan jawaban untuk pertanyaan umum tentang Grazedu, program pengembangan diri dan karir untuk perempuan muda di Indonesia",
    type: "website",
    locale: "id_ID",
  },
}

export default function FAQPage() {
  return <FAQPageClient />
}
