/* ==========================================================================
   SOCIAL PROOF - Testimonials dengan carousel
   ==========================================================================
   
   AMAN DIEDIT:
   - testimonials array: Data testimonial (12 total)
   - Nama, bisnis, lokasi, quote, metrics
   
   CARA TAMBAH TESTIMONIAL:
   - Copy salah satu object di array
   - Ganti data sesuai testimonial baru
   - Pastikan ada 4 testimonial per "slide"
   
   ========================================================================== */

"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Star, MapPin, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { testimonials, type Testimonial } from "@/data/testimonials"

/* EDIT: Data testimonial - 12 testimonial untuk 3 slides */
// const testimonials = [
//   // Slide 1
//   {
//     id: 1,
//     name: "Rina Susanti",
//     business: "Owner Hijab Cantika",
//     location: "Bandung",
//     quote:
//       "Dulu tiap hari bales chat sampai tengah malam. Sekarang PENJAGA yang handle, saya tinggal cek yang butuh follow-up aja. Omzet naik 40% karena gak ada chat yang kelewat.",
//     metric: { label: "Chat Response", before: "4 jam", after: "30 menit" },
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Budi Hartono",
//     business: "Toko Elektronik Jaya",
//     location: "Surabaya",
//     quote:
//       "Stok di Tokopedia, Shopee, sama toko fisik dulu sering gak sync. Pernah overselling sampai kena penalti. Sekarang INGATAN sync semuanya real-time. Zero masalah.",
//     metric: { label: "Overselling", before: "5-10x/bulan", after: "0" },
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Dewi Kusuma",
//     business: "Dapur Dewi Catering",
//     location: "Jakarta",
//     quote:
//       "Order catering itu kompleks - tanggal, menu, jumlah porsi, alamat. Dulu sering salah input. MANTRA sekarang capture semua otomatis dari WhatsApp ke sistem.",
//     metric: { label: "Error Rate", before: "15%", after: "< 1%" },
//     rating: 5,
//   },
//   {
//     id: 4,
//     name: "Ahmad Fauzi",
//     business: "Distro Urban Style",
//     location: "Yogyakarta",
//     quote:
//       "Gak nyangka AI bisa jawab pertanyaan customer senatural itu. Mereka gak sadar lagi chat sama bot. Conversion rate naik karena response cepat 24 jam.",
//     metric: { label: "Conversion", before: "12%", after: "28%" },
//     rating: 5,
//   },
//   // Slide 2
//   {
//     id: 5,
//     name: "Siti Nurhaliza",
//     business: "Skincare Glow.id",
//     location: "Medan",
//     quote:
//       "Customer skincare banyak tanya detail - ingredients, cara pakai, cocok untuk kulit apa. PENJAGA jawab semua dengan akurat. Saya tinggal handle yang mau konsul khusus.",
//     metric: { label: "Time Saved", before: "5 jam/hari", after: "1 jam/hari" },
//     rating: 5,
//   },
//   {
//     id: 6,
//     name: "Hendra Wijaya",
//     business: "Furniture Kayu Jati",
//     location: "Jepara",
//     quote:
//       "Bisnis furniture itu ordernya custom - ukuran, finishing, kirim luar kota. MANTRA bantu organize semua order dengan detail. Gak pernah lagi salah spesifikasi.",
//     metric: { label: "Order Accuracy", before: "85%", after: "99%" },
//     rating: 5,
//   },
//   {
//     id: 7,
//     name: "Lisa Permata",
//     business: "Bakery Sweet Dreams",
//     location: "Semarang",
//     quote:
//       "Cake custom itu harus booking H-3. Dulu sering kelewat deadline. Sekarang sistem otomatis reminder customer dan saya. Gak ada lagi order mendadak yang bikin stress.",
//     metric: { label: "On-time Delivery", before: "80%", after: "98%" },
//     rating: 5,
//   },
//   {
//     id: 8,
//     name: "Rudi Prasetyo",
//     business: "Bengkel Motor Cepat",
//     location: "Bekasi",
//     quote:
//       "Customer sering tanya 'motor saya udah selesai belum?'. MANTRA auto-update status servis ke WhatsApp mereka. Telepon berkurang drastis, kerjaan lebih fokus.",
//     metric: { label: "Customer Calls", before: "30+/hari", after: "5/hari" },
//     rating: 5,
//   },
//   // Slide 3
//   {
//     id: 9,
//     name: "Maya Indah",
//     business: "Florist Bunga Indah",
//     location: "Malang",
//     quote:
//       "Peak season kayak Valentine sama anniversary, dulu kewalahan. Sekarang MANTRA handle booking, confirm payment, sampai schedule delivery. Saya fokus arrange bunga aja.",
//     metric: { label: "Orders Handled", before: "20/hari max", after: "50+/hari" },
//     rating: 5,
//   },
//   {
//     id: 10,
//     name: "Irfan Hakim",
//     business: "Seafood Pak Irfan",
//     location: "Makassar",
//     quote:
//       "Restoran rame, HP bunyi terus buat order delivery. Sekarang semua order masuk otomatis ke sistem, langsung print di dapur. Gak perlu pegawai khusus terima order.",
//     metric: { label: "Staff Needed", before: "1 dedicated", after: "0" },
//     rating: 5,
//   },
//   {
//     id: 11,
//     name: "Anita Sari",
//     business: "Pet Shop Meong",
//     location: "Tangerang",
//     quote:
//       "Stok makanan hewan itu banyak varian. Dulu sering kehabisan yang best seller. INGATAN sekarang auto-alert kalau stok mau habis. Gak pernah lagi lost sales.",
//     metric: { label: "Stock-outs", before: "10x/bulan", after: "0" },
//     rating: 5,
//   },
//   {
//     id: 12,
//     name: "Denny Kurniawan",
//     business: "Gadget Store DK",
//     location: "Denpasar",
//     quote:
//       "Jualan gadget banyak pertanyaan teknis. PENJAGA di-training dengan semua spec produk. Customer puas karena jawaban akurat dan cepet. Rating toko naik ke 4.9.",
//     metric: { label: "Store Rating", before: "4.5", after: "4.9" },
//     rating: 5,
//   },
// ]

const TestimonialCard = memo(function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-background border-2 border-foreground shadow-industrial p-5 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-12 h-12 bg-border border-2 border-foreground flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span className="text-lg font-bold text-foreground">{testimonial.name.charAt(0)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground truncate">{testimonial.name}</h4>
          <p className="text-xs text-muted-foreground truncate">{testimonial.business}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
            <MapPin className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
            <span>{testimonial.location}</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-0.5 mb-3" role="img" aria-label={`Rating: ${testimonial.rating} dari 5 bintang`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />
        ))}
      </div>

      {/* Quote */}
      <div className="flex-1 mb-4 min-h-[120px]">
        <Quote className="w-5 h-5 text-border mb-2" aria-hidden="true" />
        <blockquote className="text-sm text-muted-foreground leading-relaxed">{testimonial.quote}</blockquote>
      </div>

      {/* Metric */}
      <div className="pt-3 border-t border-border mt-auto">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
          <TrendingUp className="w-3 h-3 text-chart-2" aria-hidden="true" />
          {testimonial.metric.label}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-destructive line-through">{testimonial.metric.before}</span>
          <span className="text-primary" aria-hidden="true">
            →
          </span>
          <span className="font-mono text-sm font-bold text-chart-2">{testimonial.metric.after}</span>
        </div>
      </div>
    </div>
  )
})

export default function SocialProof() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const testimonialsPerSlide = 4
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  // Auto-slide with cleanup
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const getCurrentTestimonials = () => {
    const start = currentSlide * testimonialsPerSlide
    return testimonials.slice(start, start + testimonialsPerSlide)
  }

  return (
    <section id="testimoni" className="py-16 md:py-24 bg-card" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="label-industrial bg-primary text-primary-foreground mb-4">TESTIMONI</div>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            30+ UMKM Sudah <span className="text-primary">Buktikan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Dari berbagai industri di seluruh Indonesia</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative" role="region" aria-label="Testimonial carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {getCurrentTestimonials().map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8" role="group" aria-label="Carousel navigation">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-2 border-foreground hover:bg-foreground hover:text-background bg-card"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </Button>

            <div className="flex gap-2" role="tablist" aria-label="Slide indicators">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 transition-colors ${currentSlide === i ? "bg-primary" : "bg-border"}`}
                  role="tab"
                  aria-selected={currentSlide === i}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-2 border-foreground hover:bg-foreground hover:text-background bg-card"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8"
          role="list"
          aria-label="Trust statistics"
        >
          {[
            { value: "30+", label: "UMKM Terlayani" },
            { value: "500+", label: "Jam Dihemat/Bulan" },
            { value: "4.9", label: "Rating Kepuasan" },
            { value: "< 24jam", label: "Response Support" },
          ].map((badge) => (
            <div key={badge.label} className="text-center" role="listitem">
              <div className="font-mono text-2xl md:text-3xl font-bold text-primary">{badge.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{badge.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
