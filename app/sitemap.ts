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

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Tambahkan halaman lain di sini jika ada
    // {
    //   url: `${baseUrl}/pricing`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ]
}
