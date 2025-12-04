/* ==========================================================================
   SERVICE DETAIL MODAL - Penjelasan lengkap setiap layanan
   ==========================================================================
   
   AMAN DIEDIT:
   - services object: Detail setiap layanan
   - Semua teks dan deskripsi
   
   ========================================================================== */

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Check, ArrowRight, MessageSquare, Database, Megaphone } from "lucide-react"

/* EDIT: Detail setiap layanan */
const services = {
  penjaga: {
    icon: MessageSquare,
    title: "PENJAGA",
    subtitle: "AI Customer Service 24/7",
    color: "#FF4F00",
    description:
      "Asisten virtual yang menjaga toko Anda saat Anda tidur, makan, atau liburan. Response dalam hitungan detik, bukan jam.",
    howItWorks: [
      "AI ditraining dengan data produk, FAQ, dan SOP bisnis Anda",
      "Terintegrasi ke WhatsApp, Instagram DM, dan chat marketplace",
      "Jawab pertanyaan produk, cek stok, proses order - otomatis",
      "Case kompleks auto-escalate ke WhatsApp Anda dengan context lengkap",
    ],
    features: [
      "Multi-platform (WA, IG, Tokped, Shopee)",
      "Bahasa natural Indonesia (bisa gaul)",
      "Personalized response per customer",
      "Smart escalation untuk case rumit",
      "24/7 tanpa libur, tanpa lembur",
      "Analytics & conversation insights",
    ],
    useCases: [
      {
        industry: "Fashion",
        example: "Jawab pertanyaan size, bahan, ready stock. Recommend produk berdasarkan preference.",
      },
      { industry: "F&B", example: "Handle order, tanya varian rasa, promo hari ini. Upselling otomatis." },
      { industry: "Elektronik", example: "Spesifikasi produk, kompatibilitas, garansi. Technical support level 1." },
    ],
    metrics: {
      before: "Response time 3-4 jam, miss chat saat malam",
      after: "Response time < 5 detik, 24/7 coverage",
    },
    startingPrice: "Rp 500.000/bulan",
  },
  ingatan: {
    icon: Database,
    title: "INGATAN",
    subtitle: "Smart CRM & Inventory Sync",
    color: "#C0C0C0",
    description:
      "Otak digital yang mengingat semua customer dan stok Anda. Tidak ada lagi overselling atau customer yang terlupakan.",
    howItWorks: [
      "Sinkronisasi real-time stok antar platform (Tokped, Shopee, WA)",
      "Database customer terpusat dengan riwayat transaksi",
      "Auto-update stok saat ada penjualan di platform manapun",
      "Alert otomatis saat stok menipis",
    ],
    features: [
      "Real-time inventory sync",
      "Customer database terpusat",
      "Purchase history tracking",
      "Low stock alerts",
      "Sales analytics per platform",
      "Customer segmentation",
    ],
    useCases: [
      {
        industry: "Multi-marketplace seller",
        example: "Stok sync Tokped-Shopee. Tidak ada lagi cancel order karena overselling.",
      },
      {
        industry: "Reseller dengan banyak SKU",
        example: "Track 500+ produk dari berbagai supplier. Know exactly what's available.",
      },
      {
        industry: "Brand dengan repeat customers",
        example: "Tau siapa customer loyal, kapan terakhir beli, apa favorit mereka.",
      },
    ],
    metrics: {
      before: "Overselling 5-10x/minggu, data customer di 5 spreadsheet berbeda",
      after: "Zero overselling, single source of truth untuk semua data",
    },
    startingPrice: "Rp 750.000/bulan",
  },
  suara: {
    icon: Megaphone,
    title: "SUARA",
    subtitle: "AI Content & Marketing Assistant",
    color: "#FFB800",
    description:
      "Tim marketing virtual yang tidak pernah kehabisan ide. Generate content, caption, dan copywriting dalam hitungan detik.",
    howItWorks: [
      "AI mempelajari brand voice dan style bisnis Anda",
      "Generate content ideas based on trending topics & produk Anda",
      "Auto-create captions, hashtags, dan copywriting",
      "Schedule dan analytics terintegrasi",
    ],
    features: [
      "AI content generation",
      "Brand voice consistency",
      "Trending topic suggestions",
      "Multi-format (caption, story, carousel)",
      "Hashtag optimization",
      "Performance analytics",
    ],
    useCases: [
      {
        industry: "Fashion brand",
        example: "Generate 30 caption untuk 1 bulan dalam 10 menit. Consistent brand voice.",
      },
      { industry: "F&B business", example: "Auto-create promo content untuk tanggal kembar, hari libur, menu baru." },
      { industry: "Service business", example: "Testimonial formatting, before-after content, educational posts." },
    ],
    metrics: {
      before: "3-4 jam/minggu bikin content, sering stuck no idea",
      after: "30 menit untuk 1 bulan content, unlimited ideas",
    },
    startingPrice: "Rp 500.000/bulan",
  },
}

type ServiceKey = keyof typeof services

interface ServiceDetailModalProps {
  serviceKey: ServiceKey | null
  onClose: () => void
}

export default function ServiceDetailModal({ serviceKey, onClose }: ServiceDetailModalProps) {
  if (!serviceKey) return null

  const service = services[serviceKey]
  const Icon = service.icon

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#F5F5F0] max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#1A1A1A] shadow-industrial-lg"
        >
          {/* Header */}
          <div className="sticky top-0 bg-[#1A1A1A] text-white p-4 md:p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: service.color }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-[#999] text-sm">{service.subtitle}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-[#333] transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 space-y-6">
            {/* Description */}
            <p className="text-lg text-[#404040] leading-relaxed">{service.description}</p>

            {/* How It Works */}
            <div className="bg-white border-2 border-[#1A1A1A] p-4 md:p-6">
              <h3 className="font-bold text-lg mb-4">Cara Kerja:</h3>
              <ol className="space-y-3">
                {service.howItWorks.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#FF4F00] text-white font-mono text-sm flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-[#666]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-bold text-lg mb-4">Fitur Lengkap:</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-[#404040]">
                    <Check className="w-4 h-4 text-[#FF4F00] flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contoh Penggunaan:</h3>
              <div className="space-y-3">
                {service.useCases.map((useCase) => (
                  <div key={useCase.industry} className="bg-[#E8E8E8] p-4">
                    <span className="font-mono text-xs text-[#FF4F00] uppercase">{useCase.industry}</span>
                    <p className="text-[#404040] mt-1">{useCase.example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Before/After */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#FFF0F0] border-2 border-red-200 p-4">
                <span className="font-mono text-xs text-red-600 uppercase">Sebelum MANTRA</span>
                <p className="text-[#666] mt-2">{service.metrics.before}</p>
              </div>
              <div className="bg-[#F0FFF4] border-2 border-green-200 p-4">
                <span className="font-mono text-xs text-green-600 uppercase">Sesudah MANTRA</span>
                <p className="text-[#666] mt-2">{service.metrics.after}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#1A1A1A] text-white p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[#999] text-sm">Mulai dari</span>
                <p className="text-2xl font-bold text-[#FF4F00]">{service.startingPrice}</p>
              </div>
              <a
                href="https://wa.me/6281311099023?text=Halo%20MANTRA,%20saya%20tertarik%20dengan%20layanan%20${service.title}"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-industrial-primary flex items-center gap-2"
              >
                Konsultasi Gratis
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
