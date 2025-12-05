# PANDUAN DEVELOPER - MANTRA LANDING PAGE

Dokumentasi teknis untuk developer, vibecoder, dan tim yang akan mengembangkan website MANTRA.

---

## TECH STACK

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.1.9 | React framework |
| React | 19 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 11.x | Animations |
| Lucide React | - | Icons |

---

## ARCHITECTURE OVERVIEW

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                     app/layout.tsx                       │
│  (Metadata, Fonts, GTM, BrandProvider, ErrorBoundary)   │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      app/page.tsx                        │
│           (Section composition & ordering)               │
└─────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│   Navbar      │   │   Hero        │   │   Footer      │
│   (sticky)    │   │   (hero)      │   │   (modals)    │
└───────────────┘   └───────────────┘   └───────────────┘
        │                   │                   │
        └───────────────────┼───────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────┐
│                   lib/brand-context.tsx                  │
│        (Dual-mode state: Juragan/Founder)               │
│        (Centralized copywriting)                        │
└─────────────────────────────────────────────────────────┘
\`\`\`

---

## DESIGN SYSTEM

### Color Tokens (globals.css)

\`\`\`css
:root {
  /* Brand Colors */
  --primary: 18 100% 50%;        /* Safety Orange #FF4F00 */
  --background: 60 10% 96%;      /* Bone White #F5F5F0 */
  --foreground: 0 0% 10%;        /* Deep Slate #1A1A1A */
  
  /* Semantic Colors */
  --muted: 60 5% 90%;
  --muted-foreground: 0 0% 40%;
  --border: 0 0% 85%;
  
  /* Chart Colors (untuk data visualization) */
  --chart-2: 142 76% 36%;        /* Success Green */
  --chart-4: 280 65% 60%;        /* Purple accent */
}
\`\`\`

### Typography

- **Headings**: Space Grotesk (font-sans)
- **Body**: Space Grotesk (font-sans)
- **Mono**: JetBrains Mono (font-mono)

### Spacing Scale

Gunakan Tailwind spacing scale, bukan arbitrary values:
- `p-4` bukan `p-[16px]`
- `gap-6` bukan `gap-[24px]`
- `mt-8` bukan `mt-[32px]`

---

## KEY FEATURES

### 1. Dual-Mode Branding (Juragan/Founder)

**File**: `lib/brand-context.tsx`

\`\`\`typescript
// Context untuk manage mode
export const BrandContext = createContext<BrandContextType>(...)

// Hook untuk akses di component
export function useBrand() {
  const context = useContext(BrandContext)
  return context
}

// Usage in component:
const { mode, copy } = useBrand()
<h1>{copy.hero.headline}</h1>
\`\`\`

### 2. Security (WhatsApp Protection)

**File**: `lib/security.ts`

- WhatsApp number hardcoded sebagai constant
- URL sanitization untuk prevent XSS
- Domain whitelist untuk external links
- Integrity check function

\`\`\`typescript
// Secure way to generate WhatsApp URL
import { getSecureWhatsAppUrl } from "@/lib/security"
const url = getSecureWhatsAppUrl("Hello message")
\`\`\`

### 3. SEO & Structured Data

**File**: `lib/seo.ts`

JSON-LD schemas yang di-generate:
- WebSite schema
- Organization schema
- LocalBusiness schema
- Service schema (3 products)
- FAQ schema

### 4. Analytics Integration

**File**: `lib/analytics.ts`

\`\`\`typescript
// Track events
trackEvent('button_click', { button: 'cta_hero' })

// Track section views
useSectionTracking('pricing')
\`\`\`

**File**: `app/layout.tsx`
- Google Tag Manager sudah terintegrasi
- Meta Pixel placeholder ready

---

## COMPONENT PATTERNS

### Animation Pattern

\`\`\`typescript
import { motion } from "framer-motion"

// Fade in from bottom
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
\`\`\`

### Responsive Pattern

\`\`\`typescript
// Mobile-first approach
<div className="
  px-4 py-8              // Mobile
  md:px-8 md:py-16       // Tablet
  lg:px-16 lg:py-24      // Desktop
">
\`\`\`

### WhatsApp CTA Pattern

\`\`\`typescript
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/utils"

<a 
  href={getWhatsAppUrl(WHATSAPP_MESSAGES.consultation)}
  target="_blank"
  rel="noopener noreferrer"
>
  Konsul Gratis
</a>
\`\`\`

---

## DATA MANAGEMENT

### Testimonials
**File**: `data/testimonials.ts`

\`\`\`typescript
export interface Testimonial {
  id: number
  name: string
  business: string
  location: string
  quote: string
  metric: {
    label: string
    before: string
    after: string
  }
  rating: number
}
\`\`\`

### Salary Data
**File**: `data/admin-salary.ts`

\`\`\`typescript
export interface SalaryData {
  city: string
  province: string
  umk: number  // dalam Rupiah
}
\`\`\`

---

## DEPLOYMENT

### Vercel (Recommended)

1. Connect GitHub repo ke Vercel
2. Set environment variables:
   - `NEXT_PUBLIC_GTM_ID` (optional)
   - `NEXT_PUBLIC_META_PIXEL_ID` (optional)
3. Deploy automatically on push

### Manual Build

\`\`\`bash
npm install
npm run build
npm start
\`\`\`

---

## SECURITY CHECKLIST

- [x] WhatsApp number hardcoded (tidak dari user input)
- [x] URL sanitization untuk external links
- [x] CSP headers di next.config.mjs
- [x] X-Frame-Options untuk prevent clickjacking
- [x] Domain whitelist untuk external links
- [ ] Rate limiting (implement jika ada API)
- [ ] Input validation (implement jika ada form)

---

## PERFORMANCE OPTIMIZATION

### Implemented
- [x] Code splitting per component
- [x] Lazy loading images dengan next/image
- [x] Font optimization dengan next/font
- [x] CSS optimization dengan Tailwind purge

### Recommended Future
- [ ] Dynamic imports untuk below-fold sections
- [ ] Image optimization untuk semua assets
- [ ] Service Worker untuk offline support
- [ ] Bundle analyzer untuk monitoring

---

## TESTING (Future)

### Recommended Stack
- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright atau Cypress
- **Visual Regression**: Percy atau Chromatic

### Critical Paths to Test
1. WhatsApp link generation
2. Mode toggle (Juragan/Founder)
3. ROI Calculator logic
4. Responsive breakpoints
5. Form submissions (jika ada)

---

## EXTENDING THE PROJECT

### Adding New Section

1. Create component di `components/mantra/NewSection.tsx`
2. Import dan tambahkan di `app/page.tsx`
3. Jika perlu dual-mode copy, tambahkan di `lib/brand-context.tsx`

### Adding New Page

1. Create folder di `app/new-page/`
2. Add `page.tsx` di dalam folder
3. Update navigation di `MantraNavbar.tsx`

### Adding API Route

1. Create folder di `app/api/endpoint/`
2. Add `route.ts` dengan handler
3. Implement rate limiting dan validation

---

## CONTACTS

- **WhatsApp**: 0821-2508-6328
- **Email**: hello00mantra@gmail.com
- **Instagram**: @hiimantra
