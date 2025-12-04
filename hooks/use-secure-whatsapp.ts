/* ==========================================================================
   USE-SECURE-WHATSAPP HOOK
   ==========================================================================
   
   Custom hook untuk menggunakan WhatsApp dengan keamanan
   Memastikan nomor WhatsApp tidak bisa di-hijack
   
   ========================================================================== */

"use client"

import { useCallback, useEffect, useState } from "react"
import { getSecureWhatsAppUrl, getVerifiedWhatsAppNumber, performIntegrityCheck } from "@/lib/security"
import { trackWhatsAppClick } from "@/lib/analytics"

interface UseSecureWhatsAppOptions {
  message?: string
  source?: string
}

export function useSecureWhatsApp(options: UseSecureWhatsAppOptions = {}) {
  const [isVerified, setIsVerified] = useState(true)
  const { message = "Halo MANTRA, saya tertarik untuk konsultasi.", source = "unknown" } = options

  // Perform integrity check on mount
  useEffect(() => {
    const check = performIntegrityCheck()
    setIsVerified(check.valid)

    if (!check.valid) {
      console.error("[Security]", check.message)
    }
  }, [])

  const openWhatsApp = useCallback(() => {
    if (!isVerified) {
      alert("Terjadi masalah keamanan. Silakan refresh halaman.")
      return
    }

    // Track the click
    trackWhatsAppClick(source)

    // Open WhatsApp with secure URL
    const url = getSecureWhatsAppUrl(message)
    window.open(url, "_blank", "noopener,noreferrer")
  }, [isVerified, message, source])

  const getUrl = useCallback(() => {
    if (!isVerified) return "#"
    return getSecureWhatsAppUrl(message)
  }, [isVerified, message])

  return {
    openWhatsApp,
    getUrl,
    phoneNumber: getVerifiedWhatsAppNumber(),
    isVerified,
  }
}
