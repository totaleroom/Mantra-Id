/* ==========================================================================
   HOW IT WORKS - 3 Langkah proses kerja MANTRA
   ==========================================================================
   
   AMAN DIEDIT:
   - steps array: Langkah-langkah proses
   - Section title dan description
   
   ========================================================================== */

"use client"

import { motion } from "framer-motion"
import { MessageSquare, Settings, Rocket, ArrowRight } from "lucide-react"

/* EDIT: Langkah-langkah proses */
const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Konsultasi Gratis",
    duration: "15 menit",
    description:
      "Kita ngobrol tentang bisnis Anda. Pain points apa, proses mana yang paling makan waktu, goal Anda apa.",
    details: [
      "Video call atau WhatsApp",
      "Analisis workflow bisnis Anda",
      "Rekomendasi solusi yang cocok",
      "Estimasi ROI & timeline",
    ],
  },
  {
    number: "02",
    icon: Settings,
    title: "Setup & Training",
    duration: "1-2 minggu",
    description:
      "Tim MANTRA setup semuanya. Anda tinggal kasih akses, kami yang kerjain. Training AI sesuai bisnis Anda.",
    details: [
      "Integrasi ke platform Anda",
      "Training AI dengan data produk",
      "Setup workflow automation",
      "Testing & quality check",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go Live & Support",
    duration: "Ongoing",
    description: "Sistem jalan, Anda mulai hemat waktu. Kami tetap standby untuk support dan optimasi.",
    details: ["Monitoring performa 24/7", "Support via WhatsApp", "Optimasi berkala", "Update fitur baru"],
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === SECTION HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="label-industrial bg-[#1A1A1A] text-white mb-4">PROSES KERJA</div>
          {/* EDIT: Judul section */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Semudah <span className="text-[#FF4F00]">1-2-3</span>
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            Anda gak perlu ngerti teknisnya. Kami yang handle semuanya.
          </p>
        </motion.div>

        {/* === STEPS === */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line - Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-[#E8E8E8] -translate-x-1/2 z-0">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#E8E8E8]" />
                </div>
              )}

              <div className="relative z-10 bg-white border-2 border-[#1A1A1A] shadow-industrial hover-lift p-6">
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#FF4F00] flex items-center justify-center">
                    <span className="font-mono text-xl font-bold text-white">{step.number}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#666] uppercase">{step.duration}</span>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">{step.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#666] mb-4">{step.description}</p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-[#404040]">
                      <div className="w-1.5 h-1.5 bg-[#FF4F00]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
