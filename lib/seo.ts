/* ==========================================================================
   SEO.TS - Search Engine Optimization utilities
   
   FILE INI MENGATUR SEO DAN STRUCTURED DATA
   Edit BRAND, CONTACT, SOCIAL untuk mengubah info bisnis
   ========================================================================== */

const BRAND = {
  name: "MANTRA",
  tagline: "Otomasi Bisnis Indonesia",
  domain: "mantra.id",
  url: "https://mantra.id",
  foundingYear: "2024",
} as const

const CONTACT = {
  whatsapp: "6282125086328",
  email: "hello00mantra@gmail.com",
  phoneDisplay: "0821-2508-6328",
} as const

const SOCIAL = {
  instagram: "https://instagram.com/hiimantra",
  linkedin: "https://linkedin.com/company/mantra-id",
} as const

const LOCATION = {
  city: "Jakarta",
  country: "Indonesia",
  address: {
    streetAddress: "Indonesia",
    addressLocality: "Jakarta",
    addressRegion: "DKI Jakarta",
    postalCode: "10000",
    addressCountry: "ID",
  },
} as const

const SEO_CONFIG = {
  title: "MANTRA - Otomasi Bisnis Indonesia | AI untuk UMKM",
  description:
    "Solusi otomasi bisnis untuk UMKM Indonesia. Hemat 3-4 jam kerja per hari dengan AI chatbot, CRM otomatis, dan content generator.",
  keywords: [
    "automation bisnis",
    "otomasi UMKM",
    "AI chatbot Indonesia",
    "WhatsApp automation",
    "CRM UMKM",
    "chatbot toko online",
    "automation Tokopedia Shopee",
    "robot admin online shop",
  ],
  priceRange: "Rp 2.500.000 - Rp 25.000.000",
} as const

// Export SITE_CONFIG for components that need it
export const SITE_CONFIG = {
  name: BRAND.name,
  tagline: BRAND.tagline,
  url: BRAND.url,
  description: SEO_CONFIG.description,
  phone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  address: LOCATION.address,
  social: SOCIAL,
  foundingDate: BRAND.foundingYear,
  priceRange: SEO_CONFIG.priceRange,
} as const

/**
 * Generate LocalBusiness JSON-LD schema
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BRAND.url}/#business`,
    name: BRAND.name,
    description: SEO_CONFIG.description,
    url: BRAND.url,
    telephone: `+${CONTACT.whatsapp}`,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      ...LOCATION.address,
    },
    priceRange: SEO_CONFIG.priceRange,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [SOCIAL.instagram, SOCIAL.linkedin],
    foundingDate: BRAND.foundingYear,
    areaServed: { "@type": "Country", name: "Indonesia" },
  }
}

/**
 * Generate Organization JSON-LD schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BRAND.url}/#organization`,
    name: BRAND.name,
    url: BRAND.url,
    logo: `${BRAND.url}/logo.png`,
    description: SEO_CONFIG.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${CONTACT.whatsapp}`,
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: [SOCIAL.instagram, SOCIAL.linkedin],
  }
}

/**
 * Generate Service JSON-LD schema
 */
export function generateServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "PENJAGA - AI Customer Service",
        description: "Bot WhatsApp & chat AI yang menjawab customer 24/7 dengan bahasa natural Indonesia",
        provider: { "@type": "Organization", name: BRAND.name },
        areaServed: "Indonesia",
        serviceType: "AI Chatbot",
      },
      {
        "@type": "Service",
        position: 2,
        name: "INGATAN - AI CRM System",
        description: "Sistem CRM otomatis yang mengingat semua customer, order history, dan preferensi",
        provider: { "@type": "Organization", name: BRAND.name },
        areaServed: "Indonesia",
        serviceType: "CRM Automation",
      },
      {
        "@type": "Service",
        position: 3,
        name: "SUARA - AI Content Generator",
        description: "Generator konten otomatis untuk caption, reply, dan marketing copy",
        provider: { "@type": "Organization", name: BRAND.name },
        areaServed: "Indonesia",
        serviceType: "Content Automation",
      },
    ],
  }
}

/**
 * Generate FAQ JSON-LD schema
 */
export function generateFAQSchema() {
  const faqs = [
    {
      question: "Bisnis saya masih kecil, apa perlu automation?",
      answer:
        "Justru ini waktu terbaik. Semakin dini Anda setup automation, semakin cepat bisnis Anda bisa scale tanpa nambah cost operasional. UMKM yang automate dari awal bisa grow 3x lebih cepat.",
    },
    {
      question: "Saya gaptek, apa bisa pakai MANTRA?",
      answer:
        "100% bisa. Anda tidak perlu ngerti teknisnya sama sekali. Tim kami yang handle semua setup. Anda cukup kasih akses ke WhatsApp/Tokopedia/Shopee, sisanya kami yang kerjain.",
    },
    {
      question: "Berapa lama proses setupnya?",
      answer:
        "Paket Starter: 5-7 hari. Paket Growth: 7-14 hari. Paket Enterprise: 14-21 hari. Selama setup, bisnis Anda tetap jalan normal.",
    },
    {
      question: "Mahal gak? Bisnis kecil mampu bayar?",
      answer:
        "Paket Starter mulai dari Rp 2.5 juta setup + Rp 500rb/bulan. Bandingkan dengan gaji admin minimum Rp 3-5 juta/bulan. Dalam 3 bulan, Anda sudah hemat.",
    },
    {
      question: "Kapan saya mulai lihat hasilnya?",
      answer:
        "Minggu pertama setelah go live, Anda sudah bisa lihat berapa chat yang di-handle AI, berapa jam yang dihemat. Rata-rata client kami achieve ROI 3-5x dalam bulan pertama.",
    },
  ]

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}

/**
 * Generate WebSite JSON-LD schema
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BRAND.url}/#website`,
    name: BRAND.name,
    url: BRAND.url,
    description: SEO_CONFIG.description,
    inLanguage: "id-ID",
    publisher: { "@id": `${BRAND.url}/#organization` },
  }
}

/**
 * Generate all structured data
 */
export function generateAllStructuredData() {
  return [
    generateWebSiteSchema(),
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateServicesSchema(),
    generateFAQSchema(),
  ]
}
