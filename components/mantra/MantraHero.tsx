/* ==========================================================================
   MANTRA HERO - Section pembuka dengan dual-mode copy
   ========================================================================== */

"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useBrandMode, COPY } from "@/lib/brand-context"

const WHATSAPP_NUMBER = "6282125086328"

export default function MantraHero() {
  const { mode } = useBrandMode()
  const copy = COPY.hero

  const whatsappMessage = COPY.whatsapp.general[mode]
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

  const stats = [
    {
      icon: Clock,
      value: "3-4 jam",
      label: copy.stats.timeSaved[mode],
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: copy.stats.roi[mode],
    },
    {
      icon: Users,
      value: "30+",
      label: copy.stats.clients[mode],
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* === LEFT CONTENT === */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="label-industrial bg-foreground text-background mb-6">{copy.label[mode]}</div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              <span className="underline-orange">{copy.headline[mode]}</span>
              <br />
              {copy.headlineSub[mode]}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl text-center sm:text-left">
              {copy.description[mode]}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center sm:items-start">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-industrial hover:shadow-industrial-lg transition-all"
                >
                  {copy.cta[mode]}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2 mx-auto" />
                  <div className="font-mono font-bold text-xl sm:text-2xl text-foreground">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* === RIGHT VISUAL === */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 bg-primary/5 -rotate-3 scale-105" />

            <div className="relative bg-card border-2 border-foreground shadow-industrial-lg p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-border">
                <div className="w-3 h-3 bg-primary" />
                <div className="w-3 h-3 bg-foreground" />
                <div className="w-3 h-3 bg-border" />
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  {mode === "juragan" ? "MANTRA.RUANG-KENDALI" : "MANTRA.DASHBOARD"}
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-destructive/10 border-l-4 border-destructive">
                  <div className="text-xs font-mono text-destructive mb-1">SEBELUM</div>
                  <div className="text-sm text-foreground">
                    {mode === "juragan" ? (
                      <>
                        ❌ 4 jam/hari bales chat
                        <br />❌ Stok tidak cocok
                        <br />❌ Order sering salah
                      </>
                    ) : (
                      <>
                        ❌ 4 jam/hari bales chat manual
                        <br />❌ Stok tidak sync
                        <br />❌ Order sering salah
                      </>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-chart-2/10 border-l-4 border-chart-2">
                  <div className="text-xs font-mono text-chart-2 mb-1">SESUDAH</div>
                  <div className="text-sm text-foreground">
                    {mode === "juragan" ? (
                      <>
                        ✅ Robot jawab 24 jam otomatis
                        <br />✅ Stok tersambung langsung
                        <br />✅ Tidak ada salah lagi
                      </>
                    ) : (
                      <>
                        ✅ Bot jawab 24/7 otomatis
                        <br />✅ Stok real-time sync
                        <br />✅ Zero human error
                      </>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-background border border-border">
                    <div className="font-mono text-2xl font-bold text-primary">87%</div>
                    <div className="text-xs text-muted-foreground">
                      {mode === "juragan" ? "Chat dijawab robot" : "Chat dijawab AI"}
                    </div>
                  </div>
                  <div className="p-3 bg-background border border-border">
                    <div className="font-mono text-2xl font-bold text-chart-2">3.2jam</div>
                    <div className="text-xs text-muted-foreground">
                      {mode === "juragan" ? "Waktu dihemat/hari" : "Waktu dihemat/hari"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-foreground flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
