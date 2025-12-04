/* ==========================================================================
   BRAND CONTEXT - Mode Juragan (UMKM) vs Founder (Gen Z)
   
   Fitur viral marketing: Toggle bahasa yang mengubah semua copy di website
   - Mode Juragan: Bahasa sopan, analogi fisik, tanpa istilah Inggris
   - Mode Founder: Bahasa Jaksel, direct, meme culture
   ========================================================================== */

"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type BrandMode = "juragan" | "founder"

interface BrandContextType {
  mode: BrandMode
  setMode: (mode: BrandMode) => void
  toggleMode: () => void
}

const BrandContext = createContext<BrandContextType | undefined>(undefined)

export function BrandProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<BrandMode>("juragan")

  // Persist mode to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("mantra-brand-mode") as BrandMode
    if (saved) setMode(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("mantra-brand-mode", mode)
  }, [mode])

  const toggleMode = () => {
    setMode((prev) => (prev === "juragan" ? "founder" : "juragan"))
  }

  return <BrandContext.Provider value={{ mode, setMode, toggleMode }}>{children}</BrandContext.Provider>
}

export function useBrandMode() {
  const context = useContext(BrandContext)
  if (!context) {
    throw new Error("useBrandMode must be used within BrandProvider")
  }
  return context
}

/* ==========================================================================
   KAMUS MANTRA - Brand Vocabulary
   ========================================================================== */

export const MANTRA_VOCAB = {
  coding: { juragan: "Meracik", founder: "Coding" },
  error: { juragan: "Meleset/Kusut", founder: "Bug" },
  integration: { juragan: "Sambungan", founder: "Integration" },
  database: { juragan: "Lumbung Ingatan", founder: "Database" },
  deploy: { juragan: "Lepas Landas", founder: "Deploy" },
  maintenance: { juragan: "Servis Rutin", founder: "Maintenance" },
  dashboard: { juragan: "Ruang Kendali", founder: "Dashboard" },
  aiAgent: { juragan: "Pasukan Bayangan", founder: "AI Agent" },
  subscription: { juragan: "Uang Bensin", founder: "Subscription" },
  setup: { juragan: "Pemasangan", founder: "Setup" },
  training: { juragan: "Pelatihan Sistem", founder: "AI Training" },
  support: { juragan: "Bantuan", founder: "Support" },
}

/* ==========================================================================
   COPY CONTENT - Dual-mode copywriting
   ========================================================================== */

export const COPY = {
  // === HERO SECTION ===
  hero: {
    label: {
      juragan: "ASISTEN DIGITAL UNTUK USAHA ANDA",
      founder: "AI AUTOMATION UNTUK BISNIS LO",
    },
    headline: {
      juragan: "Pasang Karyawan Gaib.",
      founder: "Pecat Adminmu.",
    },
    headlineSub: {
      juragan: "Kerja 24 Jam, Tanpa THR.",
      founder: "Rekrut Mantra.",
    },
    description: {
      juragan:
        "Sering pusing karena admin salah balas chat atau lupa catat stok? Bocor alus tuh Pak/Bu, sebulan bisa jutaan ruginya. MANTRA pasangkan 'Karyawan Gaib' - tidak makan tempat, tidak minta THR, tapi kerjanya seteliti robot.",
      founder:
        "Masih jaman lembur rekap data sampe jam 2 pagi? Itu hustle culture apa penyiksaan diri? MANTRA install 'Otak Tambahan' buat bisnis lo. Lo tidur, AI yang jaga lilin.",
    },
    cta: {
      juragan: "Konsultasi Gratis 15 Menit",
      founder: "Gas, Konsul Sekarang",
    },
    stats: {
      timeSaved: {
        juragan: "Waktu dihemat per hari",
        founder: "Jam kerja di-skip",
      },
      roi: {
        juragan: "Rata-rata keuntungan",
        founder: "ROI rata-rata",
      },
      clients: {
        juragan: "Usaha sudah pakai",
        founder: "UMKM udah gas",
      },
    },
  },

  // === PROBLEM/SOLUTION ===
  problem: {
    sectionLabel: {
      juragan: "MASALAH UMUM PENGUSAHA",
      founder: "KENAPA UMKM STUCK",
    },
    sectionTitle: {
      juragan: "Apakah Ini yang Bapak/Ibu Rasakan?",
      founder: "Sound Familiar?",
    },
    sectionDesc: {
      juragan: "80% waktu habis untuk pekerjaan berulang. Padahal bisa dibantu mesin.",
      founder: "80% waktu habis untuk kerjaan repetitif. Padahal bisa diotomasi.",
    },
    beforeTitle: {
      juragan: "Cara Lama",
      founder: "Cara Lama",
    },
    afterTitle: {
      juragan: "Cara MANTRA",
      founder: "Cara MANTRA",
    },
    problems: [
      {
        juragan: {
          title: "Capek bales chat terus",
          desc: 'Pertanyaan sama berulang-ulang. "Ready kak?", "Ongkir berapa?", "Ada warna lain?" Melelahkan.',
        },
        founder: {
          title: "4 jam/hari bales chat",
          desc: 'Pertanyaan yang sama berulang-ulang. "Ready kak?", "Ongkir berapa?", "Ada warna lain?"',
        },
      },
      {
        juragan: {
          title: "Stok sering tidak cocok",
          desc: "Jual di banyak tempat, stok tidak sync. Sering kejual padahal barang habis.",
        },
        founder: {
          title: "Stok berantakan",
          desc: "Jual di Tokopedia, Shopee, Instagram. Stok gak sync. Overselling terus.",
        },
      },
      {
        juragan: {
          title: "Catat order manual",
          desc: "Salin dari chat ke buku/Excel. Salah nomor HP, salah alamat. Pelanggan komplain.",
        },
        founder: {
          title: "Input order manual",
          desc: "Copy paste dari chat ke Excel. Salah nomor HP, salah alamat. Customer komplain.",
        },
      },
      {
        juragan: {
          title: "Kerja keras tapi tidak berkembang",
          desc: "Kerja 12 jam lebih tapi usaha jalan di tempat. Tidak ada waktu mikir strategi.",
        },
        founder: {
          title: "Lembur tapi gak scale",
          desc: "Kerja 12+ jam tapi bisnis jalan di tempat. Gak ada waktu mikir strategi.",
        },
      },
    ],
    solutions: [
      {
        juragan: {
          title: "Asisten jawab 24 jam",
          desc: "Robot cerdas yang bales chat pelanggan. Jawab pertanyaan, kasih info produk, bahkan bantu tutup transaksi.",
        },
        founder: {
          title: "Bot jawab 24/7",
          desc: "AI bales chat customer otomatis. Jawab FAQ, kasih info produk, bahkan closing.",
        },
      },
      {
        juragan: {
          title: "Stok tersambung otomatis",
          desc: "Update sekali, tersambung ke semua toko. Langsung. Tidak ada lagi salah stok.",
        },
        founder: {
          title: "Stok auto-sync",
          desc: "Update 1 tempat, sync ke semua marketplace. Real-time. Zero overselling.",
        },
      },
      {
        juragan: {
          title: "Order tercatat sendiri",
          desc: "Pesanan masuk → data tersimpan → pemberitahuan WhatsApp → label siap cetak. Tanpa disentuh.",
        },
        founder: {
          title: "Order otomatis",
          desc: "Order masuk → data tersimpan → notif WhatsApp → label siap print. Tanpa sentuh.",
        },
      },
      {
        juragan: {
          title: "3 jam kembali setiap hari",
          desc: "Fokus ke pengembangan produk, pemasaran, atau istirahat. Usaha tetap berjalan lancar.",
        },
        founder: {
          title: "3 jam kembali/hari",
          desc: "Fokus ke product development, marketing, atau istirahat. Bisnis tetap jalan.",
        },
      },
    ],
  },

  // === FEATURES/ECOSYSTEM ===
  features: {
    sectionLabel: {
      juragan: "PERALATAN MANTRA",
      founder: "ECOSYSTEM MANTRA",
    },
    sectionTitle: {
      juragan: "3 Alat Bantu untuk Kembangkan Usaha",
      founder: "3 Senjata untuk Scale Bisnis",
    },
    sectionDesc: {
      juragan: "Pilih satu, atau gabungkan ketiganya untuk otomasi maksimal.",
      founder: "Pilih satu, atau gabungkan ketiganya untuk automation maksimal.",
    },
    penjaga: {
      tagline: {
        juragan: "Asisten Pelayanan Pelanggan",
        founder: "AI Customer Service",
      },
      desc: {
        juragan: "Robot cerdas yang bales chat 24 jam. Lebih cepat dari admin, tidak pernah capek.",
        founder: "Bot yang bales chat 24/7. Lebih cepat dari admin, gak pernah capek.",
      },
    },
    ingatan: {
      tagline: {
        juragan: "Lumbung Data & Stok",
        founder: "Smart CRM & Inventory",
      },
      desc: {
        juragan: "Semua data pelanggan dan stok di satu tempat. Tersambung otomatis, tidak ada salah.",
        founder: "Semua data customer & stok di satu tempat. Auto-sync, zero error.",
      },
    },
    suara: {
      tagline: {
        juragan: "Pembuat Konten Otomatis",
        founder: "AI Content Generator",
      },
      desc: {
        juragan: "Robot yang bikin tulisan promosi, deskripsi produk, bahkan naskah video.",
        founder: "AI yang bikin caption, deskripsi produk, bahkan script video.",
      },
    },
  },

  // === CTA ===
  cta: {
    headline: {
      juragan: "Masih Mau Balas Chat Sampai Tengah Malam?",
      founder: "Masih Mau Balas Chat Sampai Jam 12 Malam?",
    },
    desc: {
      juragan: "Atau mau mulai tidur tenang karena ada yang bantu jaga? Keputusan ada di tangan Bapak/Ibu.",
      founder: "Atau mau mulai tidur tenang karena AI yang handle? Keputusan ada di tangan lo.",
    },
    button: {
      juragan: "Jadwalkan Konsultasi Gratis",
      founder: "Gas, Setup Sekarang",
    },
    note: {
      juragan: "Slot konsultasi terbatas 5 usaha per minggu. Siapa cepat dia dapat.",
      founder: "Slot konsultasi terbatas 5 bisnis per minggu. First come, first served.",
    },
  },

  // === PRICING ===
  pricing: {
    sectionTitle: {
      juragan: "Pilih Paket Sesuai Kebutuhan Usaha",
      founder: "Pilih Paket Sesuai Bisnis",
    },
    setupFee: {
      juragan: "Biaya pemasangan (sekali bayar)",
      founder: "Setup fee (sekali bayar)",
    },
    monthlyFee: {
      juragan: "Uang bensin bulanan",
      founder: "Biaya bulanan",
    },
    ctaButton: {
      juragan: "Pilih Paket Ini",
      founder: "Pilih",
    },
  },

  // === NAVBAR ===
  nav: {
    consultation: {
      juragan: "Konsultasi Gratis",
      founder: "Konsul Gratis",
    },
  },

  // === WHATSAPP MESSAGES ===
  whatsapp: {
    general: {
      juragan: "Selamat siang, saya ingin konsultasi tentang MANTRA untuk usaha saya.",
      founder: "Halo, saya mau konsultasi gratis untuk otomasi bisnis saya.",
    },
    closing: {
      juragan: "Gas, setup sekarang. Biar Bapak/Ibu bisa fokus, usaha tetap cuan.",
      founder: "Gas, setup sekarang. Biar lo bisa fokus main, bisnis tetep cuan.",
    },
  },
}
