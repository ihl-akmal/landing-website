import type { Metadata } from 'next'
import LnDPage from './page-client'

export const metadata: Metadata = {
  title: "HR Learning & Development - Grazedu",
  description: "Women's Career Lab  yaitu program yang dirancang untuk memberdayakan perempuan muda yang ingin mengembangkan karir di industri digital",
  keywords: "womens career lab, upskilling, project based internship khusus perempuan, virtual internship, bootcamp perempuan digital, bootcamp social media, ",
  openGraph: {
    title: "HR Learning & Development - Grazedu",
    description: "Women's Career Lab Project Based Internship Social Media Specialist yaitu program yang dirancang untuk memberdayakan perempuan muda yang ingin mengembangkan karir di industri digital",
    type: "website",
    locale: "id_ID",
  },
};

export default function Page() {
  return <LnDPage />
}
