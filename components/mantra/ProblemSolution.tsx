"use client"

import { motion } from "framer-motion"
import { X, Check, Clock, AlertTriangle, Zap, Bot } from "lucide-react"

/* EDIT: Daftar masalah - tambah/hapus sesuai kebutuhan */
const problems = [
  {
    icon: Clock,
    title: "4 jam/hari bales chat",
    description: 'Pertanyaan yang sama berulang-ulang. "Ready kak?", "Ongkir berapa?", "Ada warna lain?"',
  },
  {
    icon: AlertTriangle,
    title: "Stok berantakan",
    description: "Jual di Tokopedia, Shopee, Instagram. Stok gak sync. Overselling terus.",
  },
  {
    icon: Clock,
    title: "Input order manual",
    description: "Copy paste dari chat ke Excel. Salah nomor HP, salah alamat. Customer komplain.",
  },
  {
    icon: AlertTriangle,
    title: "Lembur tapi gak scale",
    description: "Kerja 12+ jam tapi bisnis jalan di tempat. Gak ada waktu mikir strategi.",
  },
]

/* EDIT: Daftar solusi - sesuaikan dengan layanan Anda */
const solutions = [
  {
    icon: Bot,
    title: "Bot jawab 24/7",
    description: "AI bales chat customer otomatis. Jawab FAQ, kasih info produk, bahkan closing.",
  },
  {
    icon: Zap,
    title: "Stok auto-sync",
    description: "Update 1 tempat, sync ke semua marketplace. Real-time. Zero overselling.",
  },
  {
    icon: Zap,
    title: "Order otomatis",
    description: "Order masuk → data tersimpan → notif WhatsApp → label siap print. Tanpa sentuh.",
  },
  {
    icon: Bot,
    title: "3 jam kembali/hari",
    description: "Fokus ke product development, marketing, atau istirahat. Bisnis tetap jalan.",
  },
]

export default function ProblemSolution() {
  return (
    <section id="masalah" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === SECTION HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 px-2"
        >
          <div className="label-industrial bg-primary text-primary-foreground mb-4">KENAPA UMKM STUCK</div>
          {/* EDIT: Judul section */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sound Familiar?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            80% waktu habis untuk kerjaan repetitif. Padahal bisa diotomasi.
          </p>
        </motion.div>

        {/* === COMPARISON GRID === */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* PROBLEM COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Cara Lama</h3>
            </div>

            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 md:p-5 bg-destructive/5 border-l-4 border-destructive hover-lift cursor-default"
              >
                <div className="flex items-start gap-3">
                  <problem.icon className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{problem.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* SOLUTION COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-chart-2/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-chart-2" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Cara MANTRA</h3>
            </div>

            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 md:p-5 bg-chart-2/5 border-l-4 border-chart-2 hover-lift cursor-default"
              >
                <div className="flex items-start gap-3">
                  <solution.icon className="w-5 h-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{solution.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
