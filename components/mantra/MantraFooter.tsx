/* ==========================================================================
   MANTRA FOOTER - Footer dengan info kontak dan links
   ========================================================================== */

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Mail, MapPin, Instagram, Linkedin, X, FileText, Shield } from "lucide-react"

const CONTACT = {
  whatsapp: "6281311099023",
  email: "halo@mantra.id",
  phoneDisplay: "0813-1109-9023",
} as const

const BRAND = {
  name: "MANTRA",
} as const

const SOCIAL = {
  instagram: "https://instagram.com/mantra.id",
  linkedin: "https://linkedin.com/company/mantra-id",
} as const

const LOCATION = {
  city: "Jakarta",
  country: "Indonesia",
} as const

function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
}

const PRICING_MATRIX = {
  packages: [
    { name: "STARTER", setup: 3000000, monthly: 500000, yearly: 400000, isCustom: false },
    { name: "GROWTH", setup: 8000000, monthly: 1500000, yearly: 1250000, isCustom: false },
    { name: "ENTERPRISE", setup: null, monthly: null, yearly: null, isCustom: true },
  ],
  platformExplanation: {
    title: "Apa itu Platform?",
    description: "Platform adalah channel/aplikasi messaging yang diintegrasikan dengan chatbot:",
    examples: [
      "1 Platform = Pilih salah satu: WhatsApp ATAU Instagram ATAU Tokopedia ATAU Shopee",
      "4 Platform = Contoh: WhatsApp + Instagram + Tokopedia + Shopee",
      "Unlimited = Semua platform termasuk Telegram, LINE, Facebook Messenger, Website Widget, dll.",
    ],
  },
  features: {
    penjaga: {
      name: "PENJAGA (AI Chatbot)",
      starter: { platform: "1 platform", training: "1x setup", responses: "5.000/bulan" },
      growth: { platform: "4 platform", training: "3x/tahun", responses: "20.000/bulan" },
      enterprise: { platform: "Unlimited", training: "Unlimited", responses: "Unlimited" },
    },
    ingatan: {
      name: "INGATAN (CRM)",
      starter: { included: false },
      growth: { contacts: "1.000 kontak", sync: "2 marketplace" },
      enterprise: { contacts: "Unlimited", sync: "Unlimited" },
    },
    suara: {
      name: "SUARA (Content)",
      starter: { included: false },
      growth: { included: false },
      enterprise: { content: "100 konten/bulan" },
    },
  },
  addons: [
    { name: "Extra Platform", starter: 200000, growth: 150000, enterprise: "Included" },
    { name: "Extra 5.000 Response", starter: 300000, growth: 250000, enterprise: "Included" },
    { name: "Extra Training Session", starter: 500000, growth: 400000, enterprise: "Included" },
    { name: "Custom Integration", starter: "2-5 juta", growth: "1.5-4 juta", enterprise: "Included" },
  ],
}

const formatRupiah = (num: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num)
}

function TermsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-background border-2 border-foreground shadow-industrial-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Modal Header */}
          <div className="p-6 border-b-2 border-border sticky top-0 bg-background z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Terms of Service</h3>
                  <p className="text-sm text-muted-foreground">Detail Harga & Ketentuan Layanan MANTRA</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-muted transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-8">
            {/* Section 1: Package Pricing - Updated for custom enterprise pricing */}
            <div>
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-foreground text-background text-sm flex items-center justify-center font-mono">
                  1
                </span>
                Harga Paket
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-2 border-foreground">
                  <thead>
                    <tr className="bg-foreground text-background">
                      <th className="p-3 text-left font-mono">PAKET</th>
                      <th className="p-3 text-right font-mono">SETUP FEE</th>
                      <th className="p-3 text-right font-mono">BULANAN</th>
                      <th className="p-3 text-right font-mono">TAHUNAN /bln</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_MATRIX.packages.map((pkg, i) => (
                      <tr key={pkg.name} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                        <td className="p-3 font-bold">{pkg.name}</td>
                        {pkg.isCustom ? (
                          <>
                            <td colSpan={3} className="p-3 text-center font-medium text-primary">
                              Hubungi kami untuk penawaran custom
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="p-3 text-right font-mono">{formatRupiah(pkg.setup!)}</td>
                            <td className="p-3 text-right font-mono">{formatRupiah(pkg.monthly!)}</td>
                            <td className="p-3 text-right font-mono text-chart-2">{formatRupiah(pkg.yearly!)}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">* Tahunan = bayar 12 bulan dimuka, hemat 20%</p>
            </div>

            {/* Section 1.5: Platform Explanation - New section */}
            <div className="bg-muted/50 p-4 border-l-4 border-chart-2">
              <h5 className="font-bold text-foreground mb-2">{PRICING_MATRIX.platformExplanation.title}</h5>
              <p className="text-sm text-muted-foreground mb-3">{PRICING_MATRIX.platformExplanation.description}</p>
              <ul className="space-y-1">
                {PRICING_MATRIX.platformExplanation.examples.map((example, i) => (
                  <li key={i} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2: Feature Breakdown */}
            <div>
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-foreground text-background text-sm flex items-center justify-center font-mono">
                  2
                </span>
                Detail Fitur per Paket
              </h4>

              {/* PENJAGA */}
              <div className="mb-4">
                <div className="bg-primary/10 p-3 border-l-4 border-primary mb-2">
                  <span className="font-bold text-foreground">PENJAGA</span>
                  <span className="text-muted-foreground text-sm ml-2">AI Chatbot & Customer Service</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="p-2 text-left">Fitur</th>
                        <th className="p-2 text-center">STARTER</th>
                        <th className="p-2 text-center">GROWTH</th>
                        <th className="p-2 text-center">ENTERPRISE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border-t border-border">Platform</td>
                        <td className="p-2 border-t border-border text-center">1</td>
                        <td className="p-2 border-t border-border text-center">4</td>
                        <td className="p-2 border-t border-border text-center text-chart-2 font-medium">Unlimited</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-t border-border">Custom Training</td>
                        <td className="p-2 border-t border-border text-center">1x setup</td>
                        <td className="p-2 border-t border-border text-center">3x/tahun</td>
                        <td className="p-2 border-t border-border text-center text-chart-2 font-medium">Unlimited</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-t border-border">Response/bulan</td>
                        <td className="p-2 border-t border-border text-center">5.000</td>
                        <td className="p-2 border-t border-border text-center">20.000</td>
                        <td className="p-2 border-t border-border text-center text-chart-2 font-medium">Unlimited</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* INGATAN */}
              <div className="mb-4">
                <div className="bg-chart-2/10 p-3 border-l-4 border-chart-2 mb-2">
                  <span className="font-bold text-foreground">INGATAN</span>
                  <span className="text-muted-foreground text-sm ml-2">CRM & Inventory Management</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="p-2 text-left">Fitur</th>
                        <th className="p-2 text-center">STARTER</th>
                        <th className="p-2 text-center">GROWTH</th>
                        <th className="p-2 text-center">ENTERPRISE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border-t border-border">Status</td>
                        <td className="p-2 border-t border-border text-center text-muted-foreground">-</td>
                        <td className="p-2 border-t border-border text-center text-chart-2">Included</td>
                        <td className="p-2 border-t border-border text-center text-chart-2 font-medium">Full Access</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-t border-border">Contacts</td>
                        <td className="p-2 border-t border-border text-center text-muted-foreground">-</td>
                        <td className="p-2 border-t border-border text-center">1.000</td>
                        <td className="p-2 border-t border-border text-center text-chart-2 font-medium">Unlimited</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-t border-border">Marketplace Sync</td>
                        <td className="p-2 border-t border-border text-center text-muted-foreground">-</td>
                        <td className="p-2 border-t border-border text-center">2</td>
                        <td className="p-2 border-t border-border text-center text-chart-2 font-medium">Unlimited</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SUARA */}
              <div>
                <div className="bg-chart-4/10 p-3 border-l-4 border-chart-4 mb-2">
                  <span className="font-bold text-foreground">SUARA</span>
                  <span className="text-muted-foreground text-sm ml-2">AI Content Generator</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="p-2 text-left">Fitur</th>
                        <th className="p-2 text-center">STARTER</th>
                        <th className="p-2 text-center">GROWTH</th>
                        <th className="p-2 text-center">ENTERPRISE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border-t border-border">Status</td>
                        <td className="p-2 border-t border-border text-center text-muted-foreground">-</td>
                        <td className="p-2 border-t border-border text-center text-muted-foreground">-</td>
                        <td className="p-2 border-t border-border text-center text-chart-2 font-medium">Included</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-t border-border">Content/bulan</td>
                        <td className="p-2 border-t border-border text-center text-muted-foreground">-</td>
                        <td className="p-2 border-t border-border text-center text-muted-foreground">-</td>
                        <td className="p-2 border-t border-border text-center">100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 3: Add-ons - Note that enterprise is custom */}
            <div>
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-foreground text-background text-sm flex items-center justify-center font-mono">
                  3
                </span>
                Biaya Tambahan (Add-ons)
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Untuk paket STARTER dan GROWTH. Enterprise sudah include semua fitur.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-2 border-foreground">
                  <thead>
                    <tr className="bg-foreground text-background">
                      <th className="p-3 text-left font-mono">ADD-ON</th>
                      <th className="p-3 text-right font-mono">STARTER</th>
                      <th className="p-3 text-right font-mono">GROWTH</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_MATRIX.addons.map((addon, i) => (
                      <tr key={addon.name} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                        <td className="p-3">{addon.name}</td>
                        <td className="p-3 text-right font-mono">
                          {typeof addon.starter === "number" ? `+${formatRupiah(addon.starter)}/bln` : addon.starter}
                        </td>
                        <td className="p-3 text-right font-mono">
                          {typeof addon.growth === "number" ? `+${formatRupiah(addon.growth)}/bln` : addon.growth}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4: Terms */}
            <div>
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-foreground text-background text-sm flex items-center justify-center font-mono">
                  4
                </span>
                Ketentuan Umum
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  Harga belum termasuk PPN 11%
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  Pembayaran menggunakan sistem deposit (bayar dimuka)
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  Setup fee dibayar sekali di awal, tidak termasuk biaya bulanan
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  Minimum kontrak 3 bulan untuk paket bulanan
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  Pembatalan sebelum 14 hari: refund 50% setup fee (biaya admin)
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  Pembatalan setelah 14 hari: tidak ada refund
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  Harga dapat berubah sewaktu-waktu tanpa pemberitahuan
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  Enterprise: Harga disesuaikan berdasarkan skala dan kebutuhan bisnis
                </li>
              </ul>
            </div>

            {/* Section 5: Contact */}
            <div className="bg-muted p-4 border-l-4 border-primary">
              <p className="text-sm text-foreground">
                <strong>Ada pertanyaan?</strong> Hubungi kami via{" "}
                <a href={getWhatsAppUrl("Halo, saya mau tanya soal pricing MANTRA")} className="text-primary underline">
                  WhatsApp
                </a>{" "}
                atau email ke{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-primary underline">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function PrivacyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-background border-2 border-foreground shadow-industrial-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Modal Header */}
          <div className="p-6 border-b-2 border-border sticky top-0 bg-background z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-foreground flex items-center justify-center">
                  <Shield className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Privacy Policy</h3>
                  <p className="text-sm text-muted-foreground">Kebijakan Privasi MANTRA</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-muted transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6 text-sm">
            <div>
              <h4 className="font-bold text-foreground mb-2">1. Data yang Kami Kumpulkan</h4>
              <p className="text-muted-foreground">
                Kami mengumpulkan data yang Anda berikan secara langsung (nama, email, nomor WhatsApp) dan data
                penggunaan layanan (log aktivitas, preferensi).
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">2. Penggunaan Data</h4>
              <p className="text-muted-foreground">
                Data digunakan untuk menyediakan layanan, meningkatkan kualitas produk, dan berkomunikasi dengan Anda
                terkait layanan MANTRA.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">3. Keamanan Data</h4>
              <p className="text-muted-foreground">
                Kami menerapkan langkah-langkah keamanan teknis dan organisasional untuk melindungi data Anda dari akses
                tidak sah, perubahan, atau penghapusan.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">4. Berbagi Data</h4>
              <p className="text-muted-foreground">
                Kami tidak menjual data Anda. Data hanya dibagikan dengan pihak ketiga yang diperlukan untuk menyediakan
                layanan (seperti penyedia cloud).
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">5. Hak Anda</h4>
              <p className="text-muted-foreground">
                Anda berhak mengakses, memperbaiki, atau menghapus data pribadi Anda. Hubungi kami untuk permintaan
                terkait data.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">6. Kontak</h4>
              <p className="text-muted-foreground">
                Untuk pertanyaan tentang privasi, hubungi:{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-primary underline">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function MantraFooter() {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="font-mono text-2xl font-bold mb-4">
                <span className="text-primary">{BRAND.name}</span>
              </div>
              <p className="text-background/70 mb-4 max-w-md">
                AI Automation Partner untuk UMKM Indonesia. Kami membantu bisnis Anda bekerja lebih cerdas dengan
                teknologi AI yang terjangkau.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={getWhatsAppUrl("Halo, saya ingin bertanya tentang MANTRA")}
                    className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-background/70">
                  <MapPin className="w-4 h-4" />
                  {LOCATION.city}, {LOCATION.country}
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setShowTerms(true)}
                    className="text-background/70 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowPrivacy(true)}
                    className="text-background/70 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-background/10 text-center text-background/50 text-sm">
            <p>
              &copy; {currentYear} {BRAND.name}. All rights reserved.
            </p>
            <p className="mt-1">Made with AI for Indonesian SMEs</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </>
  )
}
