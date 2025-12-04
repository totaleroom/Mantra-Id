/* ==========================================================================
   BENTO FEATURES - 3 Produk utama MANTRA dengan dual-mode copy
   ========================================================================== */

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Database, Mic, Check, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useBrandMode, COPY } from "@/lib/brand-context"

export default function BentoFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
  const { mode } = useBrandMode()
  const featureCopy = COPY.features

  const features = [
    {
      id: "penjaga",
      name: "PENJAGA",
      tagline: featureCopy.penjaga.tagline[mode],
      icon: Bot,
      color: "#FF4F00",
      description: featureCopy.penjaga.desc[mode],
      longDescription:
        mode === "juragan"
          ? "PENJAGA adalah robot cerdas yang dilatih khusus untuk usaha Anda. Dia paham semua tentang produk, bisa jawab pertanyaan umum, cek ongkir, bahkan bantu tutup transaksi."
          : "PENJAGA adalah AI chatbot yang ditraining khusus untuk bisnis Anda. Dia tau semua tentang produk, bisa jawab FAQ, cek ongkir, bahkan bantu closing.",
      features:
        mode === "juragan"
          ? [
              "Balas otomatis WhatsApp, Instagram, Tokopedia, Shopee",
              "Dilatih sesuai produk & cara kerja Anda",
              "Bisa serah ke manusia untuk kasus sulit",
              "Laporan: waktu respons, kepuasan pelanggan",
              "Bisa bahasa Indonesia, Inggris, Sunda",
            ]
          : [
              "Auto-reply WhatsApp, Instagram, Tokopedia, Shopee",
              "Custom training sesuai produk & SOP Anda",
              "Handover ke human untuk case kompleks",
              "Analytics: response time, satisfaction rate",
              "Multi-bahasa (Indonesia, English, Sundanese)",
            ],
      useCases:
        mode === "juragan"
          ? [
              'Jawab "Ready kak?", "Ongkir berapa?", "Ada warna lain?"',
              "Info promo dan rekomendasi produk",
              "Ingatkan pelanggan yang belum bayar",
              "Pengingat pembayaran",
            ]
          : [
              'Jawab "Ready kak?", "Ongkir berapa?", "Ada warna lain?"',
              "Info promo dan rekomendasi produk",
              "Follow-up customer yang belum checkout",
              "Reminder pembayaran",
            ],
      metrics: {
        before: mode === "juragan" ? "4 jam/hari bales chat" : "4 jam/hari bales chat",
        after: mode === "juragan" ? "30 menit/hari periksa chat" : "30 menit/hari review chat",
      },
    },
    {
      id: "ingatan",
      name: "INGATAN",
      tagline: featureCopy.ingatan.tagline[mode],
      icon: Database,
      color: "#22C55E",
      description: featureCopy.ingatan.desc[mode],
      longDescription:
        mode === "juragan"
          ? "INGATAN menyatukan semua data usaha Anda - pelanggan, pesanan, stok - ke satu tempat. Tersambung langsung ke semua toko online."
          : "INGATAN mengintegrasikan semua data bisnis Anda - customer, order, inventory - ke satu dashboard. Sync real-time ke semua marketplace.",
      features:
        mode === "juragan"
          ? [
              "Data pelanggan dengan riwayat pembelian",
              "Stok tersambung: Tokopedia, Shopee, TikTok Shop",
              "Pengelolaan pesanan otomatis",
              "Laporan penjualan langsung",
              "Pengelompokan pelanggan untuk promosi",
            ]
          : [
              "Customer database dengan history pembelian",
              "Inventory sync: Tokopedia, Shopee, TikTok Shop",
              "Order management otomatis",
              "Laporan penjualan real-time",
              "Segmentasi customer untuk targeting",
            ],
      useCases:
        mode === "juragan"
          ? [
              "Update stok sekali, tersambung ke semua toko",
              "Tau pelanggan mana yang sering beli lagi",
              "Pemberitahuan stok menipis otomatis",
              "Ekspor data untuk pembukuan",
            ]
          : [
              "Update stok sekali, sync ke semua platform",
              "Tau customer mana yang sering repeat order",
              "Alert stok menipis otomatis",
              "Export data untuk accounting",
            ],
      metrics: {
        before: mode === "juragan" ? "2 jam/hari update stok manual" : "2 jam/hari update stok manual",
        after: mode === "juragan" ? "Tersambung otomatis langsung" : "Auto-sync real-time",
      },
    },
    {
      id: "suara",
      name: "SUARA",
      tagline: featureCopy.suara.tagline[mode],
      icon: Mic,
      color: "#8B5CF6",
      description: featureCopy.suara.desc[mode],
      longDescription:
        mode === "juragan"
          ? "SUARA adalah asisten konten yang paham gaya bahasa usaha Anda. Dia bisa bikin tulisan sosmed, deskripsi marketplace, bahkan naskah untuk video."
          : "SUARA adalah asisten konten yang paham brand voice Anda. Dia bisa generate caption sosmed, deskripsi marketplace, bahkan script untuk Reels/TikTok.",
      features:
        mode === "juragan"
          ? [
              "Tulisan Instagram & TikTok yang menarik",
              "Deskripsi produk yang mudah dicari",
              "Naskah video pendek (15-60 detik)",
              "Riset hashtag otomatis",
              "Kalender konten & penjadwalan",
            ]
          : [
              "Caption Instagram & TikTok dengan hooks",
              "Deskripsi produk SEO-friendly",
              "Script video pendek (15-60 detik)",
              "Hashtag research otomatis",
              "Content calendar & scheduling",
            ],
      useCases:
        mode === "juragan"
          ? [
              "Bikin 30 tulisan dalam 10 menit",
              "Coba beberapa tulisan untuk lihat mana yang bagus",
              "Ubah 1 konten jadi 5 untuk beda platform",
              "Pantau tren untuk ide konten",
            ]
          : [
              "Generate 30 caption dalam 10 menit",
              "A/B test caption untuk engagement",
              "Repurpose 1 konten ke 5 platform",
              "Trend monitoring untuk ide konten",
            ],
      metrics: {
        before: mode === "juragan" ? "2 jam/hari bikin konten" : "2 jam/hari bikin konten",
        after: mode === "juragan" ? "20 menit/hari periksa & posting" : "20 menit/hari review & post",
      },
    },
  ]

  const selectedFeatureData = features.find((f) => f.id === selectedFeature)

  return (
    <section id="solusi" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === SECTION HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="label-industrial bg-foreground text-background mb-4">{featureCopy.sectionLabel[mode]}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {featureCopy.sectionTitle[mode].split(" ").slice(0, 3).join(" ")}{" "}
            <span className="text-primary">{featureCopy.sectionTitle[mode].split(" ").slice(3).join(" ")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{featureCopy.sectionDesc[mode]}</p>
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
              className="group bg-card border-2 border-foreground shadow-industrial hover-lift cursor-pointer"
              onClick={() => setSelectedFeature(feature.id)}
            >
              {/* Card Header */}
              <div className="p-6 border-b-2 border-border" style={{ backgroundColor: `${feature.color}10` }}>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-mono text-xs px-2 py-1 border border-current" style={{ color: feature.color }}>
                    {mode === "juragan" ? "PERALATAN" : "ECOSYSTEM"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{feature.name}</h3>
                <p className="text-sm font-medium" style={{ color: feature.color }}>
                  {feature.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{feature.description}</p>

                {/* Quick Features */}
                <ul className="space-y-2 mb-6">
                  {feature.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: feature.color }} />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-xs text-muted-foreground">
                      {mode === "juragan" ? "Tersedia di paket" : "Included dalam paket"}
                    </span>
                    <div className="font-mono font-bold text-sm text-foreground">
                      <a href="#harga" className="text-primary hover:underline">
                        {mode === "juragan" ? "Lihat Harga →" : "Lihat Pricing →"}
                      </a>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground hover:text-primary group-hover:translate-x-1 transition-transform"
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
          {selectedFeatureData && (
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
                className="bg-card border-2 border-foreground shadow-industrial-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div
                  className="p-6 border-b-2 border-border sticky top-0 bg-card"
                  style={{ backgroundColor: `${selectedFeatureData.color}10` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 flex items-center justify-center"
                        style={{ backgroundColor: selectedFeatureData.color }}
                      >
                        <selectedFeatureData.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{selectedFeatureData.name}</h3>
                        <p className="text-sm" style={{ color: selectedFeatureData.color }}>
                          {selectedFeatureData.tagline}
                        </p>
                      </div>
                    </div>
                    <button onClick={() => setSelectedFeature(null)} className="p-2 hover:bg-border transition-colors">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6">
                  <p className="text-foreground/80 text-lg">{selectedFeatureData.longDescription}</p>

                  {/* Before/After */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-destructive/10 border-l-4 border-destructive">
                      <div className="text-xs font-mono text-destructive mb-1">SEBELUM</div>
                      <div className="font-medium text-foreground">{selectedFeatureData.metrics.before}</div>
                    </div>
                    <div className="p-4 bg-chart-2/10 border-l-4 border-chart-2">
                      <div className="text-xs font-mono text-chart-2 mb-1">SESUDAH</div>
                      <div className="font-medium text-foreground">{selectedFeatureData.metrics.after}</div>
                    </div>
                  </div>

                  {/* All Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {mode === "juragan" ? "Fitur Lengkap" : "Fitur Lengkap"}
                    </h4>
                    <ul className="space-y-2">
                      {selectedFeatureData.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            style={{ color: selectedFeatureData.color }}
                          />
                          <span className="text-foreground/80">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {mode === "juragan" ? "Contoh Penggunaan" : "Contoh Penggunaan"}
                    </h4>
                    <ul className="space-y-2">
                      {selectedFeatureData.useCases.map((uc) => (
                        <li key={uc} className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                          <span className="text-muted-foreground">{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">
                        {mode === "juragan" ? "Tersedia di paket" : "Tersedia di paket"}
                      </span>
                      <div className="font-mono font-bold text-lg text-foreground">
                        <a
                          href="#harga"
                          onClick={() => setSelectedFeature(null)}
                          className="text-primary hover:underline"
                        >
                          {mode === "juragan" ? "Lihat Harga Paket →" : "Lihat Harga Paket →"}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/6281311099023?text=${encodeURIComponent(
                        mode === "juragan"
                          ? `Selamat siang, saya tertarik dengan ${selectedFeatureData.name}. Bisa konsultasi?`
                          : `Halo, saya tertarik dengan ${selectedFeatureData.name}. Bisa konsultasi?`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="text-white font-semibold px-6 py-3 shadow-industrial"
                        style={{ backgroundColor: selectedFeatureData.color }}
                      >
                        {mode === "juragan"
                          ? `Konsultasi ${selectedFeatureData.name}`
                          : `Konsultasi ${selectedFeatureData.name}`}
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
