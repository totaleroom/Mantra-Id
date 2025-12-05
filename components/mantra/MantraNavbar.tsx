/* ==========================================================================
   MANTRA NAVBAR - Navigasi utama website dengan Mode Toggle
   ========================================================================== */

"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Users, Rocket, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useBrandMode, COPY } from "@/lib/brand-context"

const WHATSAPP_NUMBER = "6282125086328"

const navLinks = [
  { href: "#masalah", label: "Masalah" },
  { href: "#solusi", label: "Solusi" },
  { href: "#harga", label: "Harga" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
]

export default function MantraNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const { mode, toggleMode } = useBrandMode()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 30000)
    return () => clearTimeout(timer)
  }, [])

  const handleToggle = () => {
    toggleMode()
    setShowHint(false)
    setHasInteracted(true)
  }

  const whatsappMessage = COPY.whatsapp.general[mode]
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

  const ModeToggleButton = ({ className = "", isMobile = false }: { className?: string; isMobile?: boolean }) => (
    <div className={`relative ${className}`}>
      {showHint && !hasInteracted && (
        <>
          {/* Floating label - positioned better, with glow effect */}
          <div
            className={`absolute ${isMobile ? "-top-14 -left-2" : "-top-16 left-1/2 -translate-x-1/2"} whitespace-nowrap z-50`}
          >
            <div className="relative bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-sm shadow-lg animate-bounce">
              <Sparkles className="inline w-3 h-3 mr-1.5 animate-pulse" />
              Pilih Gaya Bahasa
              {/* Arrow pointing down */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-primary" />
            </div>
          </div>
          {/* Pulse ring - only when hint is showing */}
          <span
            className="absolute -inset-2 animate-ping bg-primary/30 rounded-sm"
            style={{ animationDuration: "1.5s" }}
          />
        </>
      )}

      <button
        onClick={handleToggle}
        className={`relative flex items-center gap-2 px-3 py-1.5 border-2 transition-all text-xs font-bold ${
          mode === "juragan"
            ? "border-foreground bg-foreground text-background hover:bg-foreground/90"
            : "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
        title={mode === "juragan" ? "Ganti ke Mode Founder" : "Ganti ke Mode Juragan"}
      >
        {mode === "juragan" ? (
          <>
            <Users className="w-3.5 h-3.5" />
            <span>Juragan</span>
          </>
        ) : (
          <>
            <Rocket className="w-3.5 h-3.5" />
            <span>Founder</span>
          </>
        )}
      </button>
    </div>
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b-2 border-foreground" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">M</span>
            </div>
            <span className="font-bold text-xl md:text-2xl tracking-tight text-foreground">MANTRA</span>
          </a>

          <div className="md:hidden flex items-center gap-3">
            <ModeToggleButton isMobile={true} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ModeToggleButton />
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 shadow-industrial-sm hover:shadow-industrial transition-all">
                <Phone className="w-4 h-4 mr-2" />
                {COPY.nav.consultation[mode]}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b-2 border-foreground">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-foreground hover:text-primary py-2"
              >
                {link.label}
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block pt-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-industrial-sm">
                <Phone className="w-4 h-4 mr-2" />
                {COPY.nav.consultation[mode]}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
