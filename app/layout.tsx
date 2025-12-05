import type React from "react"
/* ==========================================================================
   LAYOUT.TSX - Konfigurasi utama aplikasi
   ========================================================================== */

import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import StructuredData from "@/components/seo/StructuredData"
import AnalyticsScripts from "@/components/seo/AnalyticsScripts"
import { ErrorBoundary } from "@/components/error-boundary"
import { BrandProvider } from "@/lib/brand-context"
import { SITE_CONFIG } from "@/lib/seo"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "MANTRA - Otomasi Bisnis Indonesia | Pecat Adminmu, Rekrut AI",
    template: "%s | MANTRA",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "otomasi bisnis",
    "AI untuk UMKM",
    "chatbot Indonesia",
    "chatbot WhatsApp",
    "CRM otomatis",
    "n8n Indonesia",
    "bisnis automation",
    "hemat waktu kerja",
    "admin virtual",
    "AI assistant bisnis",
    "otomasi tokopedia",
    "otomasi shopee",
    "bot jualan online",
    "AI UMKM Indonesia",
  ],
  authors: [{ name: "MANTRA", url: SITE_CONFIG.url }],
  creator: "MANTRA",
  publisher: "MANTRA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "MANTRA - Otomasi Bisnis Indonesia",
    description: "Hemat 3-4 jam kerja per hari dengan AI. Solusi otomasi untuk UMKM Indonesia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MANTRA - Otomasi Bisnis Indonesia",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MANTRA - Otomasi Bisnis Indonesia",
    description: "Hemat 3-4 jam kerja per hari dengan AI.",
    images: ["/og-image.png"],
    creator: "@mantra_id",
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      "id-ID": SITE_CONFIG.url,
    },
  },
  category: "technology",
  classification: "Business",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.jpg",
    shortcut: "/favicon-16x16.jpg",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K6CCP3FD');`}
        </Script>
        <StructuredData />
        <AnalyticsScripts />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6CCP3FD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Skip to main content - Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground"
        >
          Langsung ke konten utama
        </a>
        <BrandProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </BrandProvider>
        <Analytics />
      </body>
    </html>
  )
}
