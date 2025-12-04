/* ==========================================================================
   FINAL CTA - Call to action dengan dual-mode copy
   ========================================================================== */

"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Zap, Shield, MessageSquare } from "lucide-react"
import { useBrandMode, COPY } from "@/lib/brand-context"

export default function FinalCTA() {
  const { mode } = useBrandMode()
  const copy = COPY.cta

  const benefits = [
    {
      icon: Clock,
      text: mode === "juragan" ? "Pemasangan dalam 1-2 minggu" : "Setup dalam 1-2 minggu",
    },
    {
      icon: Zap,
      text: mode === "juragan" ? "Balik modal 3-5x dalam 30 hari" : "ROI 3-5x dalam 30 hari",
    },
    {
      icon: Shield,
      text: mode === "juragan" ? "Bantuan cepat via WhatsApp" : "Support responsive via WA",
    },
    {
      icon: MessageSquare,
      text: mode === "juragan" ? "Konsultasi gratis 15 menit" : "Konsultasi gratis 15 menit",
    },
  ]

  const whatsappMessage = COPY.whatsapp.general[mode]

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {copy.headline[mode].split(" ").slice(0, 4).join(" ")} <br className="hidden sm:block" />
            {copy.headline[mode].split(" ").slice(4).join(" ")}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 px-2">
            {copy.desc[mode]}
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 max-w-3xl mx-auto mb-10">
            {benefits.map((benefit) => (
              <div key={benefit.text} className="flex flex-col items-center gap-2 text-primary-foreground/90 p-2">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm font-medium text-center leading-tight">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 px-2">
            <a
              href={`https://wa.me/6281311099023?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-card text-foreground px-6 sm:px-8 py-4 font-bold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-background transition-colors shadow-industrial-lg"
            >
              {copy.button[mode]}
              <ArrowRight className="w-5 h-5" />
            </a>
            <span className="text-primary-foreground/80 text-sm">atau</span>
            <a
              href="https://wa.me/6281311099023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground font-mono text-sm sm:text-base underline hover:no-underline"
            >
              Chat langsung: 0813-1109-9023
            </a>
          </div>

          <p className="mt-8 text-primary-foreground/70 text-xs sm:text-sm px-4">{copy.note[mode]}</p>
        </motion.div>
      </div>
    </section>
  )
}
