import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Grazedu - Platform Khusus Perempuan Hebat",
  description: "Platform pengembangan diri untuk perempuan muda yang ingin mengembangkan potensi terbaiknya",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
