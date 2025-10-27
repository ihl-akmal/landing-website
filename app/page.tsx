import type { Metadata } from "next"
import HomePageClient from './page-client';
import { UpcomingClass } from '@/components/UpcomingClass';

export const metadata: Metadata = {
  title: "Grazedu - Platform Pengembangan Diri & Karir untuk Perempuan",
  description: "Platform pengembangan diri & karir untuk perempuan muda untuk mencapai potensi maksimal dalam karir profesional maupun pertumbuhan pribadi",
  keywords: "pengembangan diri, karir perempuan, mentoring, pendidikan, grazedu",
  openGraph: {
    title: "Grazedu - Platform Pengembangan Diri & Karir untuk Perempuan",
    description: "Platform pengembangan diri & karir untuk perempuan muda untuk mencapai potensi maksimal dalam karir profesional maupun pertumbuhan pribadi",
    type: "website",
    locale: "id_ID",
  },
}

export default function Page() {
  return (
    <HomePageClient>
      {/* UpcomingClass dirender di server dan dilewatkan sebagai children */}
      <UpcomingClass />
    </HomePageClient>
  );
}
