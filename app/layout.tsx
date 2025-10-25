import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { GA_ID } from "@/lib/gtag"
import { Providers } from "./providers"
import { generateStructuredData } from "@/lib/structured-data"




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
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Structured Data for GEO */}
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
        <Providers>{children}</Providers>
        
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });

                // Track route changes (tanpa AnalyticsTracker)
                if (typeof window !== 'undefined') {
                  window.addEventListener('popstate', function() {
                    gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                  });

                  const pushState = history.pushState;
                  history.pushState = function() {
                    pushState.apply(this, arguments);
                    gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                  };
                }
                
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
