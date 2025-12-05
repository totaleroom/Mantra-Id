# PANDUAN EDIT LANDING PAGE MANTRA

Dokumen ini dibuat untuk membantu Anda melakukan edit mandiri pada landing page MANTRA tanpa merusak struktur website.

---

## DAFTAR ISI

1. [Software yang Bisa Digunakan](#1-software-yang-bisa-digunakan)
2. [Cara Download & Edit](#2-cara-download--edit)
3. [Struktur Folder](#3-struktur-folder)
4. [Quick Start - Yang Paling Sering Diedit](#4-quick-start---yang-paling-sering-diedit)
5. [Panduan Edit Per Komponen](#5-panduan-edit-per-komponen)
6. [Mengubah Logo & Favicon](#6-mengubah-logo--favicon)
7. [Mengubah Copywriting](#7-mengubah-copywriting)
8. [Checklist Sebelum Deploy](#8-checklist-sebelum-deploy)
9. [Hal yang Tidak Boleh Diubah](#9-hal-yang-tidak-boleh-diubah)
10. [Tips Aman Edit](#10-tips-aman-edit)
11. [Troubleshooting](#11-troubleshooting)

---

## 1. SOFTWARE YANG BISA DIGUNAKAN

### Untuk Pemula (Dengan AI Assistant)
| Software | Keterangan | Link |
|----------|------------|------|
| **Cursor AI** | Editor code + AI assistant. Bisa tanya "ubah warna ini jadi biru" | cursor.com |
| **Windsurf** | Mirip Cursor, AI-first editor | codeium.com/windsurf |
| **v0.dev** | Platform ini. Lanjut chat untuk perubahan | v0.dev |

### Untuk yang Sudah Familiar
| Software | Keterangan | Link |
|----------|------------|------|
| **VS Code** | Editor paling populer, gratis | code.visualstudio.com |
| **Bolt.new** | Import project, edit via AI | bolt.new |
| **Lovable.dev** | Visual editor + AI | lovable.dev |

---

## 2. CARA DOWNLOAD & EDIT

1. Di v0.dev, klik **"..."** (titik tiga) di pojok kanan atas preview
2. Pilih **"Download ZIP"**
3. Extract file ZIP
4. Buka folder dengan Cursor/VS Code
5. Edit file sesuai panduan di bawah
6. Deploy ke Vercel

---

## 3. STRUKTUR FOLDER

\`\`\`
mantra-landing/
├── app/
│   ├── page.tsx          ← Halaman utama (urutan section)
│   ├── layout.tsx        ← Metadata, SEO, Google Tag Manager
│   └── globals.css       ← Warna & styling global
│
├── lib/
│   ├── utils.ts          ← ⭐ KONTAK UTAMA (WhatsApp, Email, Social Media)
│   ├── security.ts       ← ⚠️ Keamanan WhatsApp (hati-hati edit)
│   ├── seo.ts            ← SEO structured data
│   ├── analytics.ts      ← Analytics tracking
│   └── brand-context.tsx ← Sistem dual-mode Juragan/Founder
│
├── data/
│   ├── testimonials.ts   ← Data 12 testimonial
│   └── admin-salary.ts   ← Data gaji admin per kota
│
├── components/mantra/
│   ├── MantraNavbar.tsx     ← Navigasi + Toggle Juragan/Founder
│   ├── MantraHero.tsx       ← Hero section utama
│   ├── ProblemSolution.tsx  ← Perbandingan cara lama vs baru
│   ├── AdminCostSection.tsx ← Survey gaji admin
│   ├── BentoFeatures.tsx    ← 3 produk (PENJAGA, INGATAN, SUARA)
│   ├── ROICalculator.tsx    ← Kalkulator penghematan
│   ├── HowItWorks.tsx       ← 3 langkah proses
│   ├── SocialProof.tsx      ← 12 testimonial carousel
│   ├── PricingSection.tsx   ← Paket harga
│   ├── PaymentScheme.tsx    ← Skema pembayaran
│   ├── AboutSection.tsx     ← Tentang MANTRA
│   ├── FAQSection.tsx       ← FAQ
│   ├── FinalCTA.tsx         ← CTA terakhir
│   └── MantraFooter.tsx     ← Footer + Terms of Service modal
│
└── public/
    ├── icon.svg          ← Logo untuk tab browser
    ├── favicon.ico       ← Favicon
    └── sounds/
        └── welcome.mp3   ← Sound effect welcome
\`\`\`

---

## 4. QUICK START - YANG PALING SERING DIEDIT

### ⭐ MENGUBAH KONTAK (WhatsApp, Email, Instagram)

**Perlu edit 4 file** agar konsisten di seluruh website:

#### File 1: `lib/utils.ts` (UTAMA)
\`\`\`typescript
// Cari bagian ini di awal file:
export const CONTACT = {
  whatsapp: "6282125086328",        // ← Ganti nomor WhatsApp
  email: "hello00mantra@gmail.com", // ← Ganti email
  phoneDisplay: "0821-2508-6328",   // ← Format tampilan
} as const

export const SOCIAL = {
  instagram: "https://instagram.com/hiimantra",  // ← Ganti Instagram
  linkedin: "https://linkedin.com/company/mantra-id",
} as const
\`\`\`

#### File 2: `lib/security.ts` (KEAMANAN)
\`\`\`typescript
// Cari di baris paling atas:
const WHATSAPP_NUMBER = "6282125086328" as const  // ← Samakan dengan utils.ts
\`\`\`

#### File 3: `lib/seo.ts` (SEO)
\`\`\`typescript
// Cari bagian CONTACT dan SOCIAL:
const CONTACT = {
  whatsapp: "6282125086328",        // ← Samakan
  email: "hello00mantra@gmail.com",
  phoneDisplay: "0821-2508-6328",
}

const SOCIAL = {
  instagram: "https://instagram.com/hiimantra",  // ← Samakan
  linkedin: "https://linkedin.com/company/mantra-id",
}
\`\`\`

#### File 4: `components/mantra/MantraFooter.tsx`
\`\`\`typescript
// Cari di bagian atas file:
const CONTACT = {
  whatsapp: "6282125086328",        // ← Samakan
  email: "hello00mantra@gmail.com",
  phoneDisplay: "0821-2508-6328",
}

const SOCIAL = {
  instagram: "https://instagram.com/hiimantra",  // ← Samakan
  linkedin: "https://linkedin.com/company/mantra-id",
}
\`\`\`

> ⚠️ **PENTING**: Pastikan nomor WhatsApp **SAMA PERSIS** di keempat file!
> Format: `62` + nomor tanpa 0 di depan. Contoh: 0821-2508-6328 → `6282125086328`

---

## 5. PANDUAN EDIT PER KOMPONEN

### 🔵 Mengubah Warna Utama
**File:** `app/globals.css`
\`\`\`css
/* Cari bagian :root */
:root {
  --primary: 18 100% 50%;     /* Safety Orange - Aksen/CTA */
  --background: 60 10% 96%;   /* Bone White - Background */
  --foreground: 0 0% 10%;     /* Deep Slate - Text */
}
/* Ubah nilai HSL untuk ganti warna */
\`\`\`

### 🔵 Mengubah Harga Paket
**File:** `components/mantra/PricingSection.tsx`
\`\`\`typescript
// Cari array 'plans' sekitar baris 30-an
const plans = [
  {
    id: "starter",
    name: "STARTER",
    setupFee: 3000000,      // ← Ubah harga setup (dalam Rupiah)
    monthlyFee: 500000,     // ← Ubah harga bulanan
    features: [...]
  },
  // ... paket lain
]
\`\`\`

### 🔵 Menambah/Edit Testimonial
**File:** `data/testimonials.ts`
\`\`\`typescript
export const testimonials = [
  {
    id: 1,
    name: "Nama Customer",           // ← Ganti nama
    business: "Nama Bisnis",         // ← Ganti bisnis
    location: "Kota",                // ← Ganti lokasi
    quote: "Testimonial mereka...",  // ← Ganti quote
    metric: { 
      label: "Response Time", 
      before: "2 jam", 
      after: "2 menit" 
    },
    rating: 5
  },
  // Tambah testimonial baru dengan copy-paste format di atas
]
\`\`\`

### 🔵 Mengubah FAQ
**File:** `components/mantra/FAQSection.tsx`
\`\`\`typescript
// Cari array 'faqCategories'
const faqCategories = [
  {
    id: "keraguan",
    title: "Keraguan Umum",
    questions: [
      {
        q: "Pertanyaan?",    // ← Ganti pertanyaan
        a: "Jawaban..."      // ← Ganti jawaban
      }
    ]
  }
]
\`\`\`

### 🔵 Mengubah Data Gaji Admin
**File:** `data/admin-salary.ts`
\`\`\`typescript
export const salaryData = [
  { city: "Jakarta", province: "DKI Jakarta", umk: 5396760 },
  { city: "Surabaya", province: "Jawa Timur", umk: 4725479 },
  // Tambah atau edit data kota
]
\`\`\`

---

## 6. MENGUBAH LOGO & FAVICON

### Logo di Tab Browser (Favicon)
**File:** `public/icon.svg`

Ganti file ini dengan logo SVG baru. Ukuran ideal: 32x32 atau 64x64 pixel.

\`\`\`svg
<!-- Contoh format SVG sederhana -->
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="#FF4F00"/>
  <text x="16" y="22" text-anchor="middle" fill="white" font-size="18" font-weight="bold">M</text>
</svg>
\`\`\`

### Logo di Navbar
**File:** `components/mantra/MantraNavbar.tsx`

Cari bagian logo (sekitar baris 50-an):
\`\`\`tsx
{/* Logo */}
<Link href="/" className="flex items-center gap-2">
  <div className="w-8 h-8 bg-primary flex items-center justify-center">
    <span className="text-primary-foreground font-bold text-lg">M</span>
  </div>
  <span className="font-bold text-xl">MANTRA</span>
</Link>
\`\`\`

Untuk ganti dengan gambar logo:
\`\`\`tsx
<Link href="/" className="flex items-center gap-2">
  <img src="/logo.png" alt="MANTRA" className="h-8 w-auto" />
</Link>
\`\`\`

---

## 7. MENGUBAH COPYWRITING

### Hero Section (Headline Utama)
**File:** `components/mantra/MantraHero.tsx`

Cari bagian headline:
\`\`\`tsx
<h1>
  <span className="text-primary">Pecat Adminmu.</span>
  <br />
  Rekrut Mantra.
</h1>
\`\`\`

### Dual-Mode Copywriting (Juragan/Founder)
**File:** `lib/brand-context.tsx`

Website ini memiliki 2 mode bahasa yang bisa di-toggle user:
- **Mode Juragan**: Bahasa sopan, analogi fisik
- **Mode Founder**: Bahasa Jaksel, direct

Cari bagian `COPY`:
\`\`\`typescript
const COPY = {
  hero: {
    juragan: {
      headline: "Pecat Adminmu.\nRekrut Mantra.",
      subheadline: "Biarkan AI yang menjawab chat...",
    },
    founder: {
      headline: "Stop Hire Admin.\nStart Automate.",
      subheadline: "AI handles your customer chat...",
    },
  },
  // ... section lain
}
\`\`\`

---

## 8. CHECKLIST SEBELUM DEPLOY

- [ ] **Kontak sudah benar** di 4 file (utils, security, seo, MantraFooter)
- [ ] **Domain sudah diganti** di `lib/seo.ts` (BRAND.domain dan BRAND.url)
- [ ] **Logo sudah diganti** jika perlu
- [ ] **Harga sudah sesuai** di PricingSection.tsx
- [ ] **Testimonial sudah update** di data/testimonials.ts
- [ ] **Test WhatsApp link** - pastikan mengarah ke nomor yang benar
- [ ] **Test di mobile** - cek tampilan responsive

### Environment Variables (Opsional)
Jika pakai analytics, set di Vercel dashboard:
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID
- `NEXT_PUBLIC_META_PIXEL_ID` - Facebook Pixel ID

---

## 9. HAL YANG TIDAK BOLEH DIUBAH

| ⛔ Jangan Ubah | Alasan |
|----------------|--------|
| Struktur JSX (`<div>`, `<section>`) | Website bisa rusak |
| `className` yang sudah ada | Styling bisa hilang |
| Nama function component | Import akan error |
| Import statements di atas file | Module tidak terbaca |
| Folder `/components/ui/` | shadcn system components |
| Logika di `lib/security.ts` | Proteksi WhatsApp |
| Format nomor WhatsApp | Harus `62xxx` tanpa + atau spasi |

---

## 10. TIPS AMAN EDIT

1. **Selalu backup** - Copy file sebelum edit
2. **Edit sedikit-sedikit** - Jangan edit banyak sekaligus
3. **Test setelah edit** - Refresh browser untuk lihat hasil
4. **Pakai Ctrl+Z** - Untuk undo jika ada error
5. **Cek console** - F12 > Console untuk lihat error
6. **Commit sering** - Jika pakai Git, commit setiap perubahan berhasil

---

## 11. TROUBLESHOOTING

### Website blank/error setelah edit
1. Buka browser console (F12 > Console)
2. Lihat error message merah
3. Error biasanya menunjukkan file dan baris yang bermasalah
4. Undo perubahan terakhir (Ctrl+Z)
5. Pastikan tidak ada typo di code

### Warna tidak berubah
1. Pastikan format warna benar (HSL): `18 100% 50%`
2. Clear cache browser: Ctrl+Shift+R
3. Restart development server jika pakai local

### WhatsApp link tidak jalan
1. Cek format nomor: harus `62xxx` (tanpa +, tanpa spasi, tanpa 0 di depan)
2. Contoh benar: `6282125086328`
3. Contoh salah: `+6282125086328`, `082125086328`, `62 821 2508 6328`

### Build error saat deploy
1. Cek terminal/log untuk error message
2. Biasanya karena typo atau syntax error
3. Pastikan semua tanda kurung `{}`, `[]`, `()` berpasangan
4. Pastikan semua string dalam quotes `""` atau `''`

---

## BUTUH BANTUAN?

- **Chat di v0.dev** - Lanjutkan conversation untuk perubahan
- **WhatsApp**: 0821-2508-6328
- **Email**: hello00mantra@gmail.com
- **Instagram**: @hiimantra
