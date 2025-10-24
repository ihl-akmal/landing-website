import type { Metadata } from "next";
import NavbarCustom from "@/components/NavbarCustom";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daftar Kelas | Grazedu - Platform Pengembangan Diri & Karir untuk Perempuan",
  description: "Daftar kelas pengembangan diri dan soft skills untuk perempuan. Pilih kelas yang sesuai dengan kebutuhan dan jadwal Anda. Mentor berpengalaman, materi terstruktur.",
  keywords: "kelas pengembangan diri, soft skills, wanita, mentoring, pendidikan, grazedu",
  openGraph: {
    title: "Daftar Kelas | GrazEdu",
    description: "Daftar kelas pengembangan diri dan soft skills untuk perempuan. Pilih kelas yang sesuai dengan kebutuhan dan jadwal Anda.",
    type: "website",
    locale: "id_ID",
  },
};

export default function ClassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <NavbarCustom announcementVisible={false} />
      {/* Add top padding to account for fixed navbar */}
      <div className="pt-14 sm:pt-16 md:pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}
