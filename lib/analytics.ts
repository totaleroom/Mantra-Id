/* ==========================================================================
   ANALYTICS.TS - Event tracking dan analytics utilities
   ==========================================================================
   
   File ini berisi:
   - Event tracking functions
   - Web Vitals reporting
   - Conversion tracking helpers
   
   CARA SETUP:
   1. Tambahkan Google Tag Manager ID di NEXT_PUBLIC_GTM_ID
   2. Tambahkan Meta Pixel ID di NEXT_PUBLIC_META_PIXEL_ID
   
   ========================================================================== */

// Event types untuk type safety
export type EventCategory = "engagement" | "conversion" | "navigation" | "calculator" | "cta"

export type EventAction = "click" | "scroll" | "calculate" | "submit" | "view" | "copy"

export interface TrackEventParams {
  category: EventCategory
  action: EventAction
  label: string
  value?: number
}

/**
 * Track custom event
 * Akan dikirim ke Google Analytics dan Meta Pixel jika tersedia
 */
export function trackEvent({ category, action, label, value }: TrackEventParams): void {
  // Google Analytics 4 (via gtag)
  if (typeof window !== "undefined" && "gtag" in window) {
    ;(window as Window & { gtag: Function }).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }

  // Meta Pixel
  if (typeof window !== "undefined" && "fbq" in window) {
    ;(window as Window & { fbq: Function }).fbq("trackCustom", `${category}_${action}`, {
      label,
      value,
    })
  }

  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${category}/${action}: ${label}`, value ? `(${value})` : "")
  }
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(buttonName: string, location: string): void {
  trackEvent({
    category: "cta",
    action: "click",
    label: `${buttonName}_${location}`,
  })
}

/**
 * Track WhatsApp clicks
 */
export function trackWhatsAppClick(source: string): void {
  trackEvent({
    category: "conversion",
    action: "click",
    label: `whatsapp_${source}`,
  })
}

/**
 * Track ROI Calculator usage
 */
export function trackROICalculation(totalSavings: number): void {
  trackEvent({
    category: "calculator",
    action: "calculate",
    label: "roi_calculator",
    value: totalSavings,
  })
}

/**
 * Track section views (untuk scroll tracking)
 */
export function trackSectionView(sectionName: string): void {
  trackEvent({
    category: "engagement",
    action: "view",
    label: `section_${sectionName}`,
  })
}

/**
 * Track pricing package interest
 */
export function trackPricingClick(packageName: string): void {
  trackEvent({
    category: "conversion",
    action: "click",
    label: `pricing_${packageName}`,
  })
}

/**
 * Web Vitals reporting
 * Mengirim Core Web Vitals ke analytics
 */
export function reportWebVitals(metric: {
  id: string
  name: string
  value: number
  label: string
}): void {
  // Send to Google Analytics
  if (typeof window !== "undefined" && "gtag" in window) {
    ;(window as Window & { gtag: Function }).gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }
}
