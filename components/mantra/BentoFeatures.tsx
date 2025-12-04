/* ==========================================================================
   BENTO FEATURES - 3 Produk utama MANTRA
   ==========================================================================
   
   AMAN DIEDIT:
   - features array: Data produk (nama, deskripsi, fitur, harga)
   - Section title dan description
   
   PRODUK:
   - PENJAGA: AI Chatbot & Customer Service
   - INGATAN: CRM & Data Management
   - SUARA: Content Generation
   
   ========================================================================== */

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Database, Mic, Check, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

/* EDIT: Data produk MANTRA */
const features = [
  {
    id: "penjaga",
    name: "PENJAGA",
    tagline: "AI Customer Service",
    icon: Bot,
    color: "#FF4F00",
    description: "Bot yang bales chat 24/7. Lebih cepat dari admin, gak pernah capek.",
    longDescription:
      "PENJAGA adalah AI chatbot yang ditraining khusus untuk bisnis Anda. Dia tau semua tentang produk, bisa jawab FAQ, cek ongkir, bahkan bantu closing.",
    features: [
      "Auto-reply WhatsApp, Instagram, Tokopedia, Shopee",
      "Custom training sesuai produk & SOP Anda",
      "Handover ke human untuk case kompleks",
      "Analytics: response time, satisfaction rate",
      "Multi-bahasa (Indonesia, English, Sundanese)",
    ],
    useCases: [
      'Jawab "Ready kak?", "Ongkir berapa?", "Ada warna lain?"',
      "Info promo dan rekomendasi produk",
      "Follow-up customer yang belum checkout",
      "Reminder pembayaran",
    ],
    metrics: {
      before: "4 jam/hari bales chat",
      after: "30 menit/hari review chat",
    },
  },
  {
    id: "ingatan",
    name: "INGATAN",
    tagline: "Smart CRM & Inventory",
    icon: Database,
    color: "#22C55E",
    description: "Semua data customer & stok di satu tempat. Auto-sync, zero error.",
    longDescription:
      "INGATAN mengintegrasikan semua data bisnis Anda - customer, order, inventory - ke satu dashboard. Sync real-time ke semua marketplace.",
    features: [
      "Customer database dengan history pembelian",
      "Inventory sync: Tokopedia, Shopee, TikTok Shop",
      "Order management otomatis",
      "Laporan penjualan real-time",
      "Segmentasi customer untuk targeting",
    ],
    useCases: [
      "Update stok sekali, sync ke semua platform",
      "Tau customer mana yang sering repeat order",
      "Alert stok menipis otomatis",
      "Export data untuk accounting",
    ],
    metrics: {
      before: "2 jam/hari update stok manual",
      after: "Auto-sync real-time",
    },
  },
  {
    id: "suara",
    name: "SUARA",
    tagline: "AI Content Generator",
    icon: Mic,
    color: "#8B5CF6",
    description: "AI yang bikin caption, deskripsi produk, bahkan script video.",
    longDescription:
      "SUARA adalah asisten konten yang paham brand voice Anda. Dia bisa generate caption sosmed, deskripsi marketplace, bahkan script untuk Reels/TikTok.",
    features: [
      "Caption Instagram & TikTok dengan hooks",
      "Deskripsi produk SEO-friendly",
      "Script video pendek (15-60 detik)",
      "Hashtag research otomatis",
      "Content calendar & scheduling",
    ],
    useCases: [
      "Generate 30 caption dalam 10 menit",
      "A/B test caption untuk engagement",
      "Repurpose 1 konten ke 5 platform",
      "Trend monitoring untuk ide konten",
    ],
    metrics: {
      before: "2 jam/hari bikin konten",
      after: "20 menit/hari review & post",
    },
  },
]

export default function BentoFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<(typeof features)[0] | null>(null)

  return (
    <section id="solusi" className="py-16 md:py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === SECTION HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="label-industrial bg-[#1A1A1A] text-white mb-4">ECOSYSTEM MANTRA</div>
          {/* EDIT: Judul section */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            3 Senjata untuk <span className="text-[#FF4F00]">Scale Bisnis</span>
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            Pilih satu, atau gabungkan ketiganya untuk automation maksimal.
          </p>
        </motion.div>

        {/* === BENTO GRID === */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border-2 border-[#1A1A1A] shadow-industrial hover-lift cursor-pointer"
              onClick={() => setSelectedFeature(feature)}
            >
              {/* Card Header */}
              <div className="p-6 border-b-2 border-[#E8E8E8]" style={{ backgroundColor: `${feature.color}10` }}>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-mono text-xs px-2 py-1 border border-current" style={{ color: feature.color }}>
                    ECOSYSTEM
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">{feature.name}</h3>
                <p className="text-sm font-medium" style={{ color: feature.color }}>
                  {feature.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-[#666] mb-4">{feature.description}</p>

                {/* Quick Features */}
                <ul className="space-y-2 mb-6">
                  {feature.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: feature.color }} />
                      <span className="text-[#404040]">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8]">
                  <div>
                    <span className="text-xs text-[#666]">Included dalam paket</span>
                    <div className="font-mono font-bold text-sm text-[#1A1A1A]">
                      <a href="#harga" className="text-[#FF4F00] hover:underline">
                        Lihat Pricing →
                      </a>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#1A1A1A] hover:text-[#FF4F00] group-hover:translate-x-1 transition-transform"
                  >
                    Detail <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === DETAIL MODAL === */}
        <AnimatePresence>
          {selectedFeature && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedFeature(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white border-2 border-[#1A1A1A] shadow-industrial-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div
                  className="p-6 border-b-2 border-[#E8E8E8] sticky top-0 bg-white"
                  style={{ backgroundColor: `${selectedFeature.color}10` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 flex items-center justify-center"
                        style={{ backgroundColor: selectedFeature.color }}
                      >
                        <selectedFeature.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1A1A1A]">{selectedFeature.name}</h3>
                        <p className="text-sm" style={{ color: selectedFeature.color }}>
                          {selectedFeature.tagline}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedFeature(null)}
                      className="p-2 hover:bg-[#E8E8E8] transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6">
                  <p className="text-[#404040] text-lg">{selectedFeature.longDescription}</p>

                  {/* Before/After */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-[#FEF2F2] border-l-4 border-[#EF4444]">
                      <div className="text-xs font-mono text-[#991B1B] mb-1">SEBELUM</div>
                      <div className="font-medium text-[#1A1A1A]">{selectedFeature.metrics.before}</div>
                    </div>
                    <div className="p-4 bg-[#F0FDF4] border-l-4 border-[#22C55E]">
                      <div className="text-xs font-mono text-[#166534] mb-1">SESUDAH</div>
                      <div className="font-medium text-[#1A1A1A]">{selectedFeature.metrics.after}</div>
                    </div>
                  </div>

                  {/* All Features */}
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-3">Fitur Lengkap</h4>
                    <ul className="space-y-2">
                      {selectedFeature.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: selectedFeature.color }} />
                          <span className="text-[#404040]">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-3">Contoh Penggunaan</h4>
                    <ul className="space-y-2">
                      {selectedFeature.useCases.map((uc) => (
                        <li key={uc} className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-[#FF4F00]" />
                          <span className="text-[#666]">{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#E8E8E8] flex items-center justify-between">
                    <div>
                      <span className="text-sm text-[#666]">Tersedia di paket</span>
                      <div className="font-mono font-bold text-lg text-[#1A1A1A]">
                        <a
                          href="#harga"
                          onClick={() => setSelectedFeature(null)}
                          className="text-[#FF4F00] hover:underline"
                        >
                          Lihat Harga Paket →
                        </a>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/6281311099023?text=${encodeURIComponent(`Halo, saya tertarik dengan ${selectedFeature.name}. Bisa konsultasi?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="text-white font-semibold px-6 py-3 shadow-industrial"
                        style={{ backgroundColor: selectedFeature.color }}
                      >
                        Konsultasi {selectedFeature.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
