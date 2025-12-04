/* ==========================================================================
   USE-SECTION-TRACKING HOOK
   ==========================================================================
   
   Custom hook untuk track section views saat scroll
   Menggunakan Intersection Observer untuk performa optimal
   
   ========================================================================== */

"use client"

import { useEffect, useRef, useState } from "react"
import { trackSectionView } from "@/lib/analytics"

interface UseSectionTrackingOptions {
  sectionName: string
  threshold?: number
  triggerOnce?: boolean
}

export function useSectionTracking({ sectionName, threshold = 0.5, triggerOnce = true }: UseSectionTrackingOptions) {
  const ref = useRef<HTMLElement>(null)
  const [hasTracked, setHasTracked] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!triggerOnce || !hasTracked)) {
            trackSectionView(sectionName)
            setHasTracked(true)

            if (triggerOnce) {
              observer.unobserve(element)
            }
          }
        })
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [sectionName, threshold, triggerOnce, hasTracked])

  return ref
}
