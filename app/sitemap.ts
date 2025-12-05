/* ==========================================================================
   SITEMAP.TS - Auto-generated sitemap untuk SEO
   ==========================================================================
   
   File ini akan generate sitemap.xml secara otomatis
   Membantu search engine menemukan semua halaman
   
   ========================================================================== */

import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url
  const currentDate = new Date()

  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Important sections as virtual pages (helps with deep linking)
    {
      url: `${baseUrl}/#masalah`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#solusi`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#harga`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#testimoni`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#tentang`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
