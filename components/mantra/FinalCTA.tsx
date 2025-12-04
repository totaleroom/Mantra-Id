/* ==========================================================================
   FINAL CTA - Call to action kuat sebelum footer
   ========================================================================== */

"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Zap, Shield, MessageSquare } from "lucide-react"

const benefits = [
  { icon: Clock, text: "Setup dalam 1-2 minggu" },
  { icon: Zap, text: "ROI 3-5x dalam 30 hari" },
  { icon: Shield, text: "Support responsive via WA" },
  { icon: MessageSquare, text: "Konsultasi gratis 15 menit" },
]

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Masih Mau Balas Chat <br className="hidden sm:block" />
            Sampai Jam 12 Malam?
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Atau mau mulai tidur tenang karena AI yang handle?
            <br />
            Keputusan ada di tangan Anda.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {benefits.map((benefit) => (
              <div key={benefit.text} className="flex flex-col items-center gap-2 text-primary-foreground/90">
                <benefit.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/6281311099023?text=Halo%20MANTRA,%20saya%20mau%20konsultasi%20gratis%20untuk%20bisnis%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card text-foreground px-8 py-4 font-bold text-lg flex items-center gap-2 hover:bg-background transition-colors shadow-industrial-lg"
            >
              Jadwalkan Konsultasi Gratis
              <ArrowRight className="w-5 h-5" />
            </a>
            <span className="text-primary-foreground/80 text-sm">atau</span>
            <a
              href="https://wa.me/6281311099023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground font-mono underline hover:no-underline"
            >
              Chat langsung: 0813-1109-9023
            </a>
          </div>

          <p className="mt-8 text-primary-foreground/70 text-sm">
            Slot konsultasi terbatas 5 bisnis per minggu. First come, first served.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
