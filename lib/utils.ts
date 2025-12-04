/* ==========================================================================
   UTILS.TS - Utility functions untuk MANTRA
   ========================================================================== */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// =============================================================================
// CONTACT INFORMATION
// =============================================================================
export const CONTACT = {
  whatsapp: "6281311099023",
  email: "halo@mantra.id",
  phoneDisplay: "0813-1109-9023",
} as const

// =============================================================================
// WHATSAPP MESSAGES
// =============================================================================
export const WHATSAPP_MESSAGES = {
  consultation: "Halo MANTRA, saya tertarik untuk konsultasi gratis tentang otomasi bisnis saya.",
  pricing: "Halo MANTRA, saya ingin tahu lebih lanjut tentang paket harga.",
  demo: "Halo MANTRA, saya ingin melihat demo produk.",
  roi: (savedHours: number, savedMoney: string) =>
    `Halo MANTRA, saya sudah hitung dan bisa hemat ${savedHours} jam/bulan (${savedMoney}). Saya tertarik untuk konsultasi.`,
  starter: "Halo MANTRA, saya tertarik dengan Paket Starter. Bisa jelaskan lebih detail?",
  growth: "Halo MANTRA, saya tertarik dengan Paket Growth. Bisa jelaskan lebih detail?",
  enterprise:
    "Halo MANTRA, saya tertarik dengan Paket Enterprise. Bisa jadwalkan meeting untuk diskusi kebutuhan custom?",
} as const

/**
 * Menggabungkan class names dengan tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format angka ke format Rupiah
 */
export function formatRupiah(num: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num)
}

/**
 * Generate URL WhatsApp yang aman
 */
export function getWhatsAppUrl(message: string): string {
  const sanitizedMessage = message
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/data:/gi, "")
    .trim()
    .slice(0, 500)

  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(sanitizedMessage)}`
}
