/* ==========================================================================
   PAGE.TSX - Halaman utama landing page MANTRA
   ==========================================================================
   
   FILE INI ADALAH:
   - Entry point halaman utama
   - Mengatur urutan section yang ditampilkan
   
   CARA MENGUBAH URUTAN SECTION:
   - Pindahkan komponen <NamaSection /> ke posisi yang diinginkan
   - Pastikan tetap di dalam <main>
   
   CARA MENGHAPUS SECTION:
   - Hapus baris <NamaSection /> yang tidak diinginkan
   - Hapus juga import-nya di bagian atas
   
   CARA MENAMBAH SECTION:
   - Buat file baru di /components/mantra/
   - Import di bagian atas file ini
   - Tambahkan <NamaSection /> di posisi yang diinginkan
   
   ========================================================================== */

import MantraNavbar from "@/components/mantra/MantraNavbar"
import MantraHero from "@/components/mantra/MantraHero"
import ProblemSolution from "@/components/mantra/ProblemSolution"
import AdminCostSection from "@/components/mantra/AdminCostSection"
import BentoFeatures from "@/components/mantra/BentoFeatures"
import ROICalculator from "@/components/mantra/ROICalculator"
import HowItWorks from "@/components/mantra/HowItWorks"
import SocialProof from "@/components/mantra/SocialProof"
import PricingSection from "@/components/mantra/PricingSection"
import PaymentScheme from "@/components/mantra/PaymentScheme"
import AboutSection from "@/components/mantra/AboutSection"
import FAQSection from "@/components/mantra/FAQSection"
import FinalCTA from "@/components/mantra/FinalCTA"
import MantraFooter from "@/components/mantra/MantraFooter"
import WelcomeExperience from "@/components/mantra/WelcomeExperience"

export default function Home() {
  return (
    <>
      {/* === WELCOME EXPERIENCE === */}
      <WelcomeExperience />

      {/* === NAVIGASI === */}
      <header role="banner">
        <MantraNavbar />
      </header>

      {/* === HERO SECTION === */}
      <main id="main-content" role="main" className="min-h-screen bg-background">
        <article>
          {/* Headline utama dan CTA pertama */}
          <MantraHero />

          {/* Perbandingan cara lama vs cara MANTRA */}
          <ProblemSolution />

          {/* Survey gaji admin dan perbandingan biaya */}
          <AdminCostSection />

          {/* 3 produk utama: PENJAGA, INGATAN, SUARA */}
          <BentoFeatures />

          {/* Kalkulator interaktif penghematan waktu */}
          <ROICalculator />

          {/* 3 langkah proses kerja */}
          <HowItWorks />

          {/* 12 testimonial dengan carousel */}
          <SocialProof />

          {/* 3 paket harga */}
          <PricingSection />

          {/* Skema pembayaran dan deposit */}
          <PaymentScheme />

          {/* Tentang MANTRA */}
          <AboutSection />

          {/* Pertanyaan yang sering diajukan */}
          <FAQSection />

          {/* Call to action terakhir sebelum footer */}
          <FinalCTA />
        </article>
      </main>

      {/* === FOOTER === */}
      <footer role="contentinfo">
        <MantraFooter />
      </footer>
    </>
  )
}
