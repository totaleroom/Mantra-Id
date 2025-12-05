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
        disallow: ["/api/", "/admin/", "/_next/static/", "/private/"],
      },
      // Googlebot - full access
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      // Bingbot - full access
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // Google AI/Bard crawler
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // ChatGPT/OpenAI crawler
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // Claude/Anthropic crawler
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Common AI crawlers
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Facebook/Meta crawler
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      // Twitter crawler
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      // LinkedIn crawler
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
      // Block aggressive SEO tool bots (optional - can remove if want backlink analysis)
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  }
}
