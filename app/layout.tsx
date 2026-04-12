import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { GTM_ID } from "@/lib/gtag"
import { Providers } from "./providers"
import { generateStructuredData } from "@/lib/structured-data"
import { Toaster } from "@/components/ui/toaster"
import AnalyticsTracker from "@/components/AnalyticsTracker"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Grazedu - Platform Pengembangan Diri & Karir untuk Perempuan",
  description: "Platform pengembangan diri & karir untuk perempuan muda untuk mencapai potensi maksimal dalam karir profesional maupun pertumbuhan pribadi",
  keywords: [
    "pengembangan diri perempuan",
    "karir perempuan muda", 
    "mentoring perempuan",
    "soft skills training",
    "personal branding",
    "leadership training",
    "career development",
    "women empowerment",
    "professional development",
    "self improvement"
  ],
  authors: [{ name: "Grazedu Team" }],
  creator: "Grazedu",
  publisher: "Grazedu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://grazedu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Grazedu - Platform Pengembangan Diri & Karir untuk Perempuan",
    description: "Platform pengembangan diri & karir untuk perempuan muda untuk mencapai potensi maksimal dalam karir profesional maupun pertumbuhan pribadi",
    url: 'https://grazedu.com',
    siteName: 'Grazedu',
    images: [
      {
        url: '/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Grazedu - Platform Pengembangan Diri & Karir untuk Perempuan',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Grazedu - Platform Pengembangan Diri & Karir untuk Perempuan",
    description: "Platform pengembangan diri & karir untuk perempuan muda untuk mencapai potensi maksimal dalam karir profesional maupun pertumbuhan pribadi",
    images: ['/hero-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData('organization'))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData('program'))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData('faq'))
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Providers>{children}</Providers>
        <Toaster />
        <AnalyticsTracker />
      </body>
    </html>
  )
}
