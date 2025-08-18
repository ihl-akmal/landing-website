import type { Metadata } from "next"
import AboutUsClient from "./page-client"

export const metadata: Metadata = {
  title: "Tentang Kami - Grazedu",
  description: "Kenali tim Grazedu yang berdedikasi untuk memberdayakan perempuan muda Indonesia melalui melalui kelas-kelas pembelajaran yang hangat dan aman.",
  keywords: "tentang grazedu, tim grazedu, visi misi, tentang kami",
  openGraph: {
    title: "Tentang Kami - Grazedu",
    description: "Kenali tim Grazedu yang berdedikasi untuk memberdayakan perempuan muda Indonesia melalui kelas-kelas pembelajaran yang hangat dan aman.",
    type: "website",
    locale: "id_ID",
  },
}

export default function AboutUsPage() {
  return <AboutUsClient />
}
