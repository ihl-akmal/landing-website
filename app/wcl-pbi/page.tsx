import type { Metadata } from 'next'
import WCLPBIPage from './page-client'

export const metadata: Metadata = {
  title: "Women's Career Lab - Grazedu",
  description: "Program upskilling berbasis proyek nyata untuk perempuan yang ingin memulai karir pertamanya dengan percaya diri.",
  keywords: "womens career lab, upskilling, project based internship khusus perempuan, virtual internship, bootcamp perempuan digital",
  openGraph: {
    title: "Women's Career Lab - Grazedu",
    description: "Program upskilling berbasis proyek nyata untuk perempuan yang ingin memulai karir pertamanya dengan percaya diri.",
    type: "website",
    locale: "id_ID",
  },
};

export default function Page() {
  return <WCLPBIPage />
}
