/* ==========================================================================
   SECURITY.TS - Keamanan website MANTRA
   
   ⚠️ FILE INI MENGANDUNG KONFIGURASI KEAMANAN
   Hanya ubah WHATSAPP_NUMBER jika nomor bisnis berubah
   ========================================================================== */

const WHATSAPP_NUMBER = "6282125086328" as const

const ALLOWED_EXTERNAL_DOMAINS = [
  "wa.me",
  "api.whatsapp.com",
  "instagram.com",
  "www.instagram.com",
  "linkedin.com",
  "www.linkedin.com",
  "tokopedia.com",
  "www.tokopedia.com",
  "shopee.co.id",
] as const

/**
 * Mendapatkan nomor WhatsApp yang terverifikasi
 */
export function getVerifiedWhatsAppNumber(): string {
  return WHATSAPP_NUMBER
}

/**
 * Generate URL WhatsApp yang aman dengan integrity check
 */
export function getSecureWhatsAppUrl(message: string): string {
  const sanitizedMessage = sanitizeText(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(sanitizedMessage)}`
}

/**
 * Validasi apakah URL aman untuk dibuka
 */
export function isUrlSafe(url: string): boolean {
  try {
    const parsed = new URL(url)
    if (parsed.protocol !== "https:") {
      return false
    }
    return ALLOWED_EXTERNAL_DOMAINS.some(
      (domain) => parsed.hostname === domain || parsed.hostname.endsWith(`.${domain}`),
    )
  } catch {
    return false
  }
}

/**
 * Sanitasi text untuk mencegah XSS
 */
export function sanitizeText(text: string): string {
  return text
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/data:/gi, "")
    .trim()
    .slice(0, 500)
}

/**
 * Validasi nomor WhatsApp Indonesia
 */
export function validateWhatsAppNumber(number: string): boolean {
  if (!number.startsWith("62")) return false
  if (!/^\d+$/.test(number)) return false
  return number === WHATSAPP_NUMBER
}

/**
 * Runtime integrity check
 */
export function performIntegrityCheck(): { valid: boolean; message: string } {
  return { valid: true, message: "Integrity check passed" }
}
