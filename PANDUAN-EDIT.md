# PANDUAN EDIT LANDING PAGE MANTRA

Dokumen ini dibuat untuk membantu Anda melakukan edit mandiri pada landing page MANTRA tanpa merusak struktur website.

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
/app
  ├── page.tsx          ← Halaman utama (urutan section)
  ├── layout.tsx        ← Metadata & SEO
  └── globals.css       ← Warna & styling global

/lib
  ├── constants.ts      ← ⭐ SINGLE SOURCE OF TRUTH (edit di sini!)
  ├── utils.ts          ← Fungsi utility
  ├── security.ts       ← Keamanan WhatsApp
  ├── seo.ts            ← SEO structured data
  └── analytics.ts      ← Analytics tracking

/data
  ├── testimonials.ts   ← Data 12 testimonial
  └── admin-salary.ts   ← Data gaji admin per kota

/components/mantra
  ├── MantraNavbar.tsx     ← Navigasi atas
  ├── MantraHero.tsx       ← Hero section
  ├── ProblemSolution.tsx  ← Perbandingan cara lama vs baru
  ├── AdminCostSection.tsx ← Survey gaji admin
  ├── BentoFeatures.tsx    ← 3 produk (PENJAGA, INGATAN, SUARA)
  ├── ROICalculator.tsx    ← Kalkulator penghematan
  ├── HowItWorks.tsx       ← 3 langkah proses
  ├── SocialProof.tsx      ← 12 testimonial
  ├── PricingSection.tsx   ← Paket harga
  ├── PaymentScheme.tsx    ← Skema pembayaran
  ├── AboutSection.tsx     ← Tentang MANTRA
  ├── FAQSection.tsx       ← FAQ
  ├── FinalCTA.tsx         ← CTA terakhir
  └── MantraFooter.tsx     ← Footer
\`\`\`

---

## 4. QUICK START - YANG PALING SERING DIEDIT

### ⭐ PENTING: Edit di `lib/constants.ts`

Semua konfigurasi utama ada di satu file ini. Edit di sini untuk update SELURUH website sekaligus.

\`\`\`typescript
// lib/constants.ts

// 1. MENGUBAH NOMOR WHATSAPP & KONTAK
export const CONTACT = {
  whatsapp: "6281311099023",      // ← Ganti nomor di sini
  email: "halo@mantra.id",        // ← Ganti email di sini
  phoneDisplay: "0813-1109-9023", // ← Format tampilan
}

// 2. MENGUBAH BRAND & DOMAIN
export const BRAND = {
  name: "MANTRA",
  domain: "mantra.id",            // ← Ganti domain asli
  url: "https://mantra.id",       // ← Ganti URL lengkap
}

// 3. MENGUBAH SOCIAL MEDIA
export const SOCIAL = {
  instagram: "https://instagram.com/mantra.id",
  linkedin: "https://linkedin.com/company/mantra-id",
}
\`\`\`

---

## 5. PANDUAN EDIT PER KOMPONEN

### 🔵 Mengubah Warna Utama
**File:** `/app/globals.css`
\`\`\`css
/* Cari bagian :root */
--primary: 18 100% 50%;     /* Safety Orange - Aksen/CTA */
--background: 60 10% 96%;   /* Bone White - Background */
--foreground: 0 0% 10%;     /* Deep Slate - Text */

/* Untuk ubah ke warna lain, ganti nilai HSL nya */
\`\`\`

### 🔵 Mengubah Teks Hero
**File:** `/components/mantra/MantraHero.tsx`
\`\`\`tsx
/* Cari bagian headline */
<span className="text-primary">Pecat Adminmu.</span>
<br />
Rekrut Mantra.
\`\`\`

### 🔵 Mengubah Harga Paket
**File:** `/components/mantra/PricingSection.tsx`
\`\`\`tsx
/* Cari array 'plans' */
const plans = [
  {
    id: "starter",
    name: "STARTER",
    setupFee: 3000000,      // ← Ubah harga setup
    monthlyFee: 500000,     // ← Ubah harga bulanan
    // ...
  }
]
\`\`\`

### 🔵 Menambah/Edit Testimonial
**File:** `/data/testimonials.ts`
\`\`\`tsx
export const testimonials = [
  {
    id: 1,
    name: "Nama Customer",           // ← Ganti nama
    business: "Nama Bisnis",         // ← Ganti bisnis
    location: "Kota",                // ← Ganti lokasi
    quote: "Testimonial mereka...",  // ← Ganti quote
    metric: { 
      label: "Metric", 
      before: "Sebelum", 
      after: "Sesudah" 
    },
    rating: 5
  },
  // Tambah testimonial baru dengan copy-paste format di atas
]
\`\`\`

### 🔵 Mengubah FAQ
**File:** `/components/mantra/FAQSection.tsx`
\`\`\`tsx
/* Cari array 'faqCategories' */
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
**File:** `/data/admin-salary.ts`
\`\`\`tsx
export const salaryData = [
  { city: "Jakarta", province: "DKI Jakarta", umk: 5396760 },
  // Ubah atau tambah data kota lain
]
\`\`\`

---

## 6. CHECKLIST SEBELUM DEPLOY

- [ ] Ganti domain di `lib/constants.ts` (BRAND.domain dan BRAND.url)
- [ ] Ganti nomor WhatsApp di `lib/constants.ts` (CONTACT.whatsapp)
- [ ] Ganti email di `lib/constants.ts` (CONTACT.email)
- [ ] Ganti social media links di `lib/constants.ts`
- [ ] Set environment variables jika pakai analytics:
  - `NEXT_PUBLIC_GTM_ID` untuk Google Tag Manager
  - `NEXT_PUBLIC_META_PIXEL_ID` untuk Facebook Pixel

---

## 7. HAL YANG TIDAK BOLEH DIUBAH

⛔ **JANGAN** ubah struktur JSX (tag HTML seperti `<div>`, `<section>`)
⛔ **JANGAN** hapus `className` yang sudah ada
⛔ **JANGAN** ubah nama function component (contoh: `export default function MantraHero()`)
⛔ **JANGAN** hapus import statements di bagian atas file
⛔ **JANGAN** ubah file di folder `/components/ui/` (shadcn components)
⛔ **JANGAN** ubah logika di `lib/security.ts` (proteksi WhatsApp)

---

## 8. TIPS AMAN EDIT

1. **Selalu backup** - Copy file sebelum edit
2. **Edit sedikit-sedikit** - Jangan edit banyak sekaligus
3. **Test setelah edit** - Refresh browser untuk lihat hasil
4. **Pakai Ctrl+Z** - Untuk undo jika ada error
5. **Edit di constants.ts dulu** - Untuk kontak, domain, social media

---

## 9. TROUBLESHOOTING

### Website blank/error setelah edit
1. Cek console browser (F12 > Console)
2. Lihat error message
3. Undo perubahan terakhir (Ctrl+Z)
4. Pastikan tidak ada typo

### Warna tidak berubah
1. Pastikan format warna benar (HSL)
2. Clear cache browser (Ctrl+Shift+R)
3. Restart development server

### WhatsApp link tidak jalan
1. Pastikan format nomor benar: `62xxx` (tanpa + atau spasi)
2. Cek di `lib/constants.ts` bagian CONTACT.whatsapp

---

## 10. BUTUH BANTUAN?

- Lanjut chat di v0.dev untuk perubahan
- Atau hubungi: 0813-1109-9023 (WhatsApp)
