import type React from "react"
/* ==========================================================================
   LAYOUT.TSX - Konfigurasi utama aplikasi
   
   SEO VERIFICATION CODES:
   - Google Search Console: Ganti GOOGLE_SITE_VERIFICATION dengan kode Anda
   - Bing Webmaster: Ganti BING_SITE_VERIFICATION dengan kode Anda
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
    default: "MANTRA - Jasa Otomasi Bisnis & AI Automation Indonesia | Chatbot WhatsApp UMKM",
    template: "%s | MANTRA - Otomasi Bisnis Indonesia",
  },
  description:
    "Jasa otomasi bisnis #1 Indonesia. AI chatbot WhatsApp, CRM otomatis, content generator untuk UMKM. Hemat 3-4 jam kerja per hari. Setup cepat 1-2 minggu. Mulai Rp 2.5 juta.",
  keywords: [
    // Primary keywords
    "jasa otomasi bisnis",
    "jasa automation Indonesia",
    "AI automation UMKM",
    "chatbot WhatsApp bisnis",
    "chatbot jualan online",
    // Brand keywords
    "MANTRA automation",
    "MANTRA AI",
    "hello mantra",
    "hiimantra",
    // Service keywords
    "bot WhatsApp Tokopedia",
    "bot WhatsApp Shopee",
    "CRM UMKM Indonesia",
    "auto reply WhatsApp bisnis",
    "otomasi marketplace Indonesia",
    // Problem keywords
    "solusi admin online shop",
    "hemat waktu jualan online",
    "automation toko online",
    // Location keywords
    "jasa IT Jakarta",
    "automation bisnis Jakarta",
    "AI consultant Indonesia",
    // Long-tail keywords
    "cara otomasi WhatsApp untuk jualan",
    "chatbot untuk UMKM Indonesia",
    "software automation bisnis kecil",
    "jasa pembuatan bot WhatsApp",
  ],
  authors: [{ name: "MANTRA", url: SITE_CONFIG.url }],
  creator: "MANTRA",
  publisher: "MANTRA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE", // Replace after Google Search Console setup
    yandex: "YANDEX_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "A6F0E93C359BCC02A63C6C8823DC5CAF", // Added actual Bing verification code
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
    title: "MANTRA - Jasa Otomasi Bisnis & AI Automation Indonesia",
    description:
      "Jasa otomasi bisnis #1 Indonesia. AI chatbot WhatsApp, CRM otomatis untuk UMKM. Hemat 3-4 jam kerja per hari.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MANTRA - Jasa Otomasi Bisnis Indonesia - AI Chatbot WhatsApp untuk UMKM",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MANTRA - Jasa Otomasi Bisnis Indonesia",
    description: "AI chatbot WhatsApp & CRM otomatis untuk UMKM. Hemat 3-4 jam kerja per hari.",
    images: ["/og-image.png"],
    creator: "@hiimantra",
    site: "@hiimantra",
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      "id-ID": SITE_CONFIG.url,
      id: SITE_CONFIG.url,
    },
  },
  category: "technology",
  classification: "Business Services",
  other: {
    "revisit-after": "7 days",
    rating: "general",
    distribution: "global",
    "geo.region": "ID",
    "geo.placename": "Jakarta, Indonesia",
    ICBM: "-6.2088, 106.8456",
    // AI Search Engine hints
    "ai-content-declaration": "This website provides AI automation services for Indonesian SMEs",
  },
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
        <meta name="language" content="Indonesian" />
        <meta name="audience" content="Business Owners, UMKM, Entrepreneurs" />
        <meta name="topic" content="Business Automation, AI Services, Chatbot" />
        <meta
          name="summary"
          content="MANTRA menyediakan jasa otomasi bisnis dan AI automation untuk UMKM Indonesia. Layanan meliputi chatbot WhatsApp, CRM otomatis, dan content generator."
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch for third parties */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />

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
