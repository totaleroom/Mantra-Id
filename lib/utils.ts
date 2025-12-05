/* ==========================================================================
   UTILS.TS - Utility functions untuk MANTRA
   
   FILE INI BERISI KONFIGURASI UTAMA WEBSITE
   Edit bagian CONTACT untuk mengubah nomor/email/social media
   ========================================================================== */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// =============================================================================
// CONTACT INFORMATION - EDIT DI SINI UNTUK UBAH KONTAK
// =============================================================================
export const CONTACT = {
  whatsapp: "6282125086328", // Format: 62 + nomor tanpa 0 di depan
  email: "hello00mantra@gmail.com", // Updated email
  phoneDisplay: "0821-2508-6328", // Format tampilan untuk user
} as const

// =============================================================================
// SOCIAL MEDIA - EDIT DI SINI UNTUK UBAH SOCIAL MEDIA
// =============================================================================
export const SOCIAL = {
  instagram: "https://instagram.com/hiimantra",
  linkedin: "https://linkedin.com/company/mantra-id",
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
