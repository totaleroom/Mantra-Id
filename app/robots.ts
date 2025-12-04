/* ==========================================================================
   ROBOTS.TS - Crawling directives untuk search engines
   ==========================================================================
   
   File ini mengatur halaman mana yang boleh di-crawl oleh search engine
   
   ========================================================================== */

import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
      // Block bad bots
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  }
}
