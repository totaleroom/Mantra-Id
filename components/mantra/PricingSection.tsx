/* ==========================================================================
   PRICING SECTION - Paket harga MANTRA
   ==========================================================================
   
   AMAN DIEDIT:
   - plans array: Data paket (nama, harga, fitur)
   - Harga setup dan bulanan
   - Fitur yang included/excluded
   
   CATATAN:
   - Tidak ada garansi uang kembali (sistem deposit)
   - Lihat PaymentScheme untuk detail pembayaran
   - ENTERPRISE: Harga custom berdasarkan kebutuhan klien
   
   ========================================================================== */

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, Zap, ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

/* EDIT: Data paket harga */
const plans = [
  {
    id: "starter",
    name: "STARTER",
    tagline: "Mulai Otomasi",
    description: "Cocok untuk yang baru mau coba automation",
    setupFee: 3000000,
    monthlyFee: 500000,
    yearlyFee: 400000, // per bulan jika bayar tahunan
    popular: false,
    isCustomPricing: false,
    features: [
      { name: "PENJAGA - AI Chatbot Basic", included: true },
      { name: "1 Platform (WhatsApp/Instagram/Tokped/Shopee)", included: true },
      { name: "Auto-reply FAQ & Info Produk", included: true },
      { name: "Order Notification", included: true },
      { name: "Basic Analytics Dashboard", included: true },
      { name: "Email Support", included: true },
      { name: "INGATAN - CRM & Inventory", included: false },
      { name: "SUARA - Content Generator", included: false },
      { name: "Multi-platform Sync", included: false },
      { name: "Priority Support", included: false },
    ],
    idealFor: "Omzet < 50 juta/bulan",
  },
  {
    id: "growth",
    name: "GROWTH",
    tagline: "Scale Bisnis",
    description: "Paket terlaris untuk bisnis yang mau grow",
    setupFee: 8000000,
    monthlyFee: 1500000,
    yearlyFee: 1250000,
    popular: true,
    isCustomPricing: false,
    features: [
      { name: "PENJAGA - AI Chatbot Advanced", included: true },
      { name: "4 Platform (WA + IG + 2 Marketplace)", included: true },
      { name: "Auto-reply + Closing Assistant", included: true },
      { name: "INGATAN - CRM Basic (1.000 kontak)", included: true },
      { name: "Inventory Sync 2 Marketplace", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "WhatsApp Support", included: true },
      { name: "SUARA - Content Generator", included: false },
      { name: "Custom Integration", included: false },
      { name: "Dedicated Account Manager", included: false },
    ],
    idealFor: "Omzet 50-500 juta/bulan",
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    tagline: "Full Automation",
    description: "Solusi custom untuk korporat & bisnis besar",
    setupFee: 0, // Not displayed
    monthlyFee: 0, // Not displayed
    yearlyFee: 0, // Not displayed
    popular: false,
    isCustomPricing: true, // Flag for custom pricing
    features: [
      { name: "Semua Fitur GROWTH", included: true },
      { name: "SUARA - AI Content Generator", included: true },
      { name: "Unlimited Platform", included: true },
      { name: "INGATAN - Full CRM + Analytics", included: true },
      { name: "Custom Workflow Automation", included: true },
      { name: "API Integration", included: true },
      { name: "Dedicated Account Manager", included: true },
      { name: "Priority 24/7 Support", included: true },
      { name: "Monthly Strategy Review", included: true },
      { name: "Custom Development", included: true },
    ],
    idealFor: "Omzet > 500 juta/bulan",
  },
]

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  return (
    <section id="harga" className="py-16 md:py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === SECTION HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="label-industrial bg-[#1A1A1A] text-white mb-4">INVESTASI</div>
          {/* EDIT: Judul section */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Pilih Paket <span className="text-[#FF4F00]">Sesuai Bisnis</span>
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto mb-8">
            Semua paket include setup, training, dan support. Tanpa biaya tersembunyi.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? "text-[#1A1A1A]" : "text-[#666]"}`}>Bulanan</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? "bg-[#FF4F00]" : "bg-[#E8E8E8]"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white transition-transform rounded-full ${isYearly ? "left-8" : "left-1"}`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-[#1A1A1A]" : "text-[#666]"}`}>Tahunan</span>
            {isYearly && <span className="bg-[#22C55E] text-white text-xs font-bold px-2 py-1">HEMAT 20%</span>}
          </div>
        </motion.div>

        {/* === PRICING CARDS === */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white border-2 shadow-industrial hover-lift flex flex-col ${
                plan.popular ? "border-[#FF4F00]" : "border-[#1A1A1A]"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF4F00] text-white text-xs font-bold px-4 py-1 flex items-center gap-1">
                  <Zap className="w-3 h-3" /> PALING POPULER
                </div>
              )}

              {/* Header */}
              <div className={`p-6 border-b-2 ${plan.popular ? "border-[#FF4F00]" : "border-[#E8E8E8]"}`}>
                <div className="font-mono text-xs text-[#666] mb-1">{plan.tagline}</div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{plan.name}</h3>
                <p className="text-sm text-[#666]">{plan.description}</p>
              </div>

              {/* Pricing - Conditional rendering for custom pricing */}
              <div className="p-6 border-b-2 border-[#E8E8E8]">
                {plan.isCustomPricing ? (
                  // Enterprise custom pricing display
                  <div className="text-center py-4">
                    <div className="font-mono text-2xl font-bold text-[#1A1A1A] mb-2">Custom Pricing</div>
                    <p className="text-sm text-[#666]">Harga disesuaikan dengan kebutuhan dan skala bisnis Anda</p>
                    <div className="mt-3 inline-flex items-center gap-2 bg-[#F5F5F0] px-3 py-1.5 text-xs text-[#666]">
                      <MessageSquare className="w-3 h-3" />
                      Konsultasi gratis untuk penawaran
                    </div>
                  </div>
                ) : (
                  // Regular pricing display
                  <>
                    <div className="mb-4">
                      <span className="text-xs text-[#666]">Setup fee (sekali bayar)</span>
                      <div className="font-mono text-xl font-bold text-[#1A1A1A]">{formatRupiah(plan.setupFee)}</div>
                    </div>
                    <div>
                      <span className="text-xs text-[#666]">Biaya bulanan</span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-3xl font-bold text-[#FF4F00]">
                          {formatRupiah(isYearly ? plan.yearlyFee : plan.monthlyFee)}
                        </span>
                        <span className="text-sm text-[#666]">/bulan</span>
                      </div>
                      {isYearly && (
                        <div className="text-xs text-[#22C55E] mt-1">
                          Hemat {formatRupiah((plan.monthlyFee - plan.yearlyFee) * 12)}/tahun
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Features */}
              <div className="p-6 flex-1">
                <div className="text-xs font-mono text-[#666] mb-3">TERMASUK:</div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-[#E8E8E8] flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-[#404040]" : "text-[#999]"}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA - Different CTA for Enterprise */}
              <div className="p-6 pt-0">
                <div className="text-xs text-[#666] mb-3 text-center">
                  Cocok untuk: <span className="font-medium text-[#1A1A1A]">{plan.idealFor}</span>
                </div>
                <a
                  href={`https://wa.me/6281311099023?text=${encodeURIComponent(
                    plan.isCustomPricing
                      ? `Halo, saya tertarik dengan paket ENTERPRISE untuk bisnis saya. Bisa jadwalkan konsultasi?`
                      : `Halo, saya tertarik dengan paket ${plan.name}. Bisa info lebih lanjut?`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full font-semibold py-3 ${
                      plan.popular
                        ? "bg-[#FF4F00] hover:bg-[#E64500] text-white shadow-industrial"
                        : plan.isCustomPricing
                          ? "bg-[#1A1A1A] hover:bg-[#333] text-white border-2 border-[#FF4F00]"
                          : "bg-[#1A1A1A] hover:bg-[#333] text-white"
                    }`}
                  >
                    {plan.isCustomPricing ? "Hubungi Kami" : `Pilih ${plan.name}`}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-[#666]">
            * Harga belum termasuk PPN 11%. Pembayaran menggunakan sistem deposit.{" "}
            <a href="#pembayaran" className="text-[#FF4F00] underline">
              Lihat skema pembayaran
            </a>
            {" | "}
            <span className="text-[#999]">Detail lengkap di Terms of Service (footer)</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
