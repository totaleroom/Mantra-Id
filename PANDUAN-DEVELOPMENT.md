# PANDUAN DEVELOPMENT MANTRA

Dokumentasi teknis untuk developer yang ingin mengembangkan atau memodifikasi landing page MANTRA.

---

## 1. TECH STACK

| Technology | Version | Keterangan |
|------------|---------|------------|
| Next.js | 14.x | App Router |
| React | 18.x | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 3.x | Styling |
| Framer Motion | 11.x | Animations |
| shadcn/ui | Latest | UI Components |
| Lucide React | Latest | Icons |

---

## 2. GETTING STARTED

### Prerequisites
- Node.js 18.x atau lebih baru
- npm atau pnpm

### Installation
\`\`\`bash
# Clone atau extract project
cd mantra-landing

# Install dependencies
npm install

# Run development server
npm run dev

# Buka http://localhost:3000
\`\`\`

### Build untuk Production
\`\`\`bash
npm run build
npm run start
\`\`\`

---

## 3. DESIGN SYSTEM

### Color Palette
\`\`\`css
/* Primary Colors */
--mantra-bone: #F5F5F0      /* Background utama */
--mantra-orange: #FF4F00    /* Aksen, CTA, highlight */
--mantra-slate: #1A1A1A     /* Text utama */
--mantra-titanium: #E8E8E8  /* Border, divider */

/* Semantic Colors */
--mantra-success: #22C55E   /* Success states */
--mantra-warning: #F59E0B   /* Warning states */
--mantra-error: #EF4444     /* Error states */
\`\`\`

### Typography
\`\`\`css
/* Font Families */
--font-sans: Space Grotesk  /* Headlines, body */
--font-mono: JetBrains Mono /* Code, stats, labels */

/* Font Sizes */
text-xs: 12px
text-sm: 14px
text-base: 16px
text-lg: 18px
text-xl: 20px
text-2xl: 24px
text-3xl: 30px
text-4xl: 36px
text-5xl: 48px
\`\`\`

### Spacing System
\`\`\`css
/* Menggunakan Tailwind default spacing */
p-4: 16px
p-6: 24px
p-8: 32px
py-16: 64px (section padding mobile)
py-24: 96px (section padding desktop)
\`\`\`

### Industrial Design Utilities
\`\`\`css
/* Shadow */
.shadow-industrial     /* 4px 4px offset */
.shadow-industrial-sm  /* 2px 2px offset */
.shadow-industrial-lg  /* 6px 6px offset */

/* Hover Effect */
.hover-lift           /* Lift on hover with shadow */

/* Labels */
.label-industrial     /* Industrial style label */

/* Patterns */
.bg-grid-pattern      /* Grid background */
.bg-dot-pattern       /* Dot pattern background */
\`\`\`

---

## 4. COMPONENT ARCHITECTURE

### Page Structure
\`\`\`
<main>
  <MantraNavbar />      ← Sticky navigation
  <MantraHero />        ← Hero dengan headline utama
  <ProblemSolution />   ← Before/After comparison
  <AdminCostSection />  ← Data gaji admin
  <BentoFeatures />     ← 3 produk dengan modal detail
  <ROICalculator />     ← Interactive calculator
  <HowItWorks />        ← 3-step process
  <SocialProof />       ← 12 testimonials carousel
  <PricingSection />    ← 3 pricing tiers
  <PaymentScheme />     ← Payment flow
  <AboutSection />      ← About MANTRA
  <FAQSection />        ← Accordion FAQ
  <FinalCTA />          ← Final call to action
  <MantraFooter />      ← Footer
</main>
\`\`\`

### Component Pattern
Setiap komponen mengikuti pattern yang sama:
\`\`\`tsx
/* ==========================================================================
   COMPONENT NAME - Deskripsi singkat
   ========================================================================== */

"use client" // Jika menggunakan hooks/interactivity

import { ... } from "..."

/* EDIT: Data yang aman dimodifikasi */
const data = [...]

export default function ComponentName() {
  // State & logic
  
  return (
    <section id="section-id" className="py-16 md:py-24 bg-[#COLOR]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div>
          <div className="label-industrial">LABEL</div>
          <h2>Heading</h2>
          <p>Description</p>
        </motion.div>
        
        {/* Content */}
        ...
      </div>
    </section>
  )
}
\`\`\`

---

## 5. STATE MANAGEMENT

Tidak menggunakan global state management. State dikelola per-komponen:

\`\`\`tsx
// Local state untuk UI
const [isOpen, setIsOpen] = useState(false)

// Carousel state
const [currentSlide, setCurrentSlide] = useState(0)

// Form state
const [formData, setFormData] = useState({...})
\`\`\`

---

## 6. ANIMATIONS

Menggunakan Framer Motion untuk semua animasi:

\`\`\`tsx
// Scroll reveal
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
>

// Hover effects (CSS)
.hover-lift:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px 0px #1a1a1a;
}
\`\`\`

---

## 7. RESPONSIVE DESIGN

Mobile-first approach dengan breakpoints:

\`\`\`css
/* Mobile first (default) */
.text-3xl

/* Tablet (md: 768px) */
md:text-4xl

/* Desktop (lg: 1024px) */
lg:text-5xl
\`\`\`

### Common Responsive Patterns
\`\`\`tsx
// Grid columns
className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"

// Padding
className="py-16 md:py-24"

// Hide/show
className="hidden md:block"  // Hide on mobile
className="md:hidden"        // Show only on mobile
\`\`\`

---

## 8. SEO & METADATA

Konfigurasi di `/app/layout.tsx`:

\`\`\`tsx
export const metadata: Metadata = {
  title: "MANTRA - AI Automation untuk UMKM Indonesia",
  description: "...",
  keywords: ["automation", "AI", "UMKM", ...],
  openGraph: { ... },
  twitter: { ... },
}
\`\`\`

---

## 9. DEPLOYMENT

### Vercel (Recommended)
1. Push ke GitHub
2. Connect repository di Vercel
3. Deploy otomatis

### Manual Build
\`\`\`bash
npm run build
# Output di folder .next/
\`\`\`

---

## 10. PERFORMANCE TIPS

1. **Images**: Gunakan next/image dengan proper sizing
2. **Fonts**: Preload font dengan next/font
3. **Code splitting**: Automatic dengan Next.js
4. **Animations**: Gunakan `viewport={{ once: true }}` untuk scroll animations

---

## 11. ADDING NEW SECTIONS

1. Buat file baru di `/components/mantra/NewSection.tsx`
2. Follow component pattern yang ada
3. Import di `/app/page.tsx`
4. Tambahkan di posisi yang diinginkan

\`\`\`tsx
// page.tsx
import NewSection from "@/components/mantra/NewSection"

// Di dalam <main>
<NewSection />
\`\`\`

---

## 12. CUSTOMIZATION GUIDE

### Mengubah Brand
1. Edit warna di `globals.css` (CSS variables)
2. Ganti logo di `MantraNavbar.tsx`
3. Update metadata di `layout.tsx`

### Mengubah Layout Section
1. Edit grid/flex di komponen terkait
2. Adjust padding/margin sesuai kebutuhan
3. Test di berbagai breakpoints

### Menambah Integrasi
1. Install package yang diperlukan
2. Buat API route di `/app/api/`
3. Connect ke komponen terkait

---

## 13. TROUBLESHOOTING

### Build Error
\`\`\`bash
# Clear cache
rm -rf .next
npm run build
\`\`\`

### Type Error
- Pastikan semua props typed dengan benar
- Check import statements

### Styling tidak apply
- Check className conflicts
- Pastikan Tailwind config benar
- Clear browser cache

---

## 14. RESOURCES

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
