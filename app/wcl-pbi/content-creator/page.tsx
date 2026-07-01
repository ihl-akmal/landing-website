import type { Metadata } from 'next'
import ContentCreatorPage from './page-client'

export const metadata: Metadata = {
  title: "WCL-PBI | Content Creator - Grazedu",
  description: "Women's Career Lab Project Based Internship Content Creator yaitu program yang dirancang untuk memberdayakan perempuan muda yang ingin mengembangkan karir di industri digital",
  keywords: "womens career lab, upskilling, project based internship khusus perempuan, virtual internship, bootcamp perempuan digital, bootcamp social media, ",
  openGraph: {
    title: "WCL-PBI | Content Creator - Grazedu",
    description: "Women's Career Lab Project Based Internship Content Creator yaitu program yang dirancang untuk memberdayakan perempuan muda yang ingin mengembangkan karir di industri digital",
    type: "website",
    locale: "id_ID",
  },
};

export default function Page() {
  return <ContentCreatorPage />
}
