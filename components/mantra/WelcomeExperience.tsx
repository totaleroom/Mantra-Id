"use client"

import { useEffect, useState, useRef } from "react"

/**
 * WelcomeExperience - Handles vibration and welcome sound on first user interaction
 *
 * Browser Security Limitations:
 * - Vibration API requires user gesture (click, touch, scroll)
 * - Audio autoplay blocked without user interaction
 *
 * Solution: Trigger on first scroll/click within 10 seconds of page load
 */
export default function WelcomeExperience() {
  const [hasTriggered, setHasTriggered] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    // Check if already welcomed in this session
    const hasWelcomed = sessionStorage.getItem("mantra-welcomed")
    if (hasWelcomed) return

    // Preload audio
    audioRef.current = new Audio("/sounds/welcome.mp3")
    audioRef.current.volume = 0.3 // 30% volume - not too loud
    audioRef.current.preload = "auto"

    // Set ready after small delay to ensure page is loaded
    const readyTimeout = setTimeout(() => setIsReady(true), 500)

    // Auto-disable after 10 seconds if no interaction
    timeoutRef.current = setTimeout(() => {
      setIsReady(false)
    }, 10000)

    return () => {
      clearTimeout(readyTimeout)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  useEffect(() => {
    if (!isReady || hasTriggered) return

    const triggerWelcome = () => {
      if (hasTriggered) return
      setHasTriggered(true)

      // Mark as welcomed in session
      sessionStorage.setItem("mantra-welcomed", "true")

      // Trigger vibration if supported (mobile)
      if ("vibrate" in navigator) {
        // Pattern: vibrate 100ms, pause 50ms, vibrate 100ms
        navigator.vibrate([100, 50, 100])
      }

      // Play welcome sound
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Silently fail if browser blocks audio
          console.log("[v0] Audio autoplay blocked by browser")
        })
      }

      // Cleanup
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }

    // Listen for first user interaction
    const events = ["scroll", "click", "touchstart"]
    events.forEach((event) => {
      window.addEventListener(event, triggerWelcome, { once: true, passive: true })
    })

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, triggerWelcome)
      })
    }
  }, [isReady, hasTriggered])

  // This component doesn't render anything visible
  return null
}
