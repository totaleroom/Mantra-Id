/* ==========================================================================
   FAQ SECTION - Pertanyaan yang membuka pikiran
   ==========================================================================
   
   AMAN DIEDIT:
   - faqCategories array: Semua pertanyaan dan jawaban
   - Section title dan description
   
   JANGAN DIEDIT (akan merusak tampilan):
   - Struktur JSX dan class names
   - Animation dan interaction logic
   
   ========================================================================== */

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, Settings, Wallet, Users } from "lucide-react"

/* EDIT: Kategori dan pertanyaan FAQ */
const faqCategories = [
  {
    id: "keraguan",
    icon: HelpCircle,
    title: "Keraguan Umum",
    questions: [
      {
        q: "Bisnis saya masih kecil, apa perlu automation?",
        a: "Justru ini waktu terbaik. Semakin dini Anda setup automation, semakin cepat bisnis Anda bisa scale tanpa nambah cost operasional. UMKM yang automate dari awal bisa grow 3x lebih cepat karena tidak terjebak bottleneck admin.",
      },
      {
        q: "Saya takut bot terasa tidak personal, customer kabur",
        a: "MANTRA bukan chatbot kaku. AI kami ditraining dengan bahasa natural Indonesia, bisa pakai bahasa gaul, emoji, bahkan nyesuaiin tone setiap customer. 87% customer tidak sadar sedang chat dengan AI karena responsnya sangat manusiawi.",
      },
      {
        q: "Bagaimana kalau ada komplain atau case rumit?",
        a: "MANTRA otomatis detect sentiment negatif dan case kompleks. Langsung escalate ke WhatsApp Anda dengan context lengkap. Jadi Anda hanya handle yang benar-benar butuh human touch, sisanya biar AI yang kerja.",
      },
      {
        q: "Kompetitor saya belum pakai AI, ngapain saya duluan?",
        a: "Exactly. First mover advantage. Saat kompetitor Anda masih manually reply 3-4 jam, Anda sudah response dalam 3 detik. Customer mana yang dipilih? Yang fast response. Ini bukan tentang teknologi, ini tentang customer experience.",
      },
    ],
  },
  {
    id: "teknis",
    icon: Settings,
    title: "Teknis & Setup",
    questions: [
      {
        q: "Saya gaptek, apa bisa pakai MANTRA?",
        a: "100% bisa. Anda tidak perlu ngerti teknisnya sama sekali. Tim kami yang handle semua setup. Anda cukup kasih akses ke WhatsApp/Tokopedia/Shopee, sisanya kami yang kerjain. Anda tinggal terima beres.",
      },
      {
        q: "Berapa lama proses setupnya?",
        a: "Paket Starter: 5-7 hari. Paket Growth: 7-14 hari. Paket Enterprise: 14-21 hari. Selama setup, bisnis Anda tetap jalan normal. Kami tidak ganggu operasional existing Anda.",
      },
      {
        q: "Apakah data customer saya aman?",
        a: "Kami tidak pernah menyimpan atau mengakses data customer Anda secara langsung. Semua proses berjalan di infrastruktur Anda sendiri (WhatsApp Business API, Tokopedia, Shopee). Kami hanya setup automationnya, data tetap milik Anda 100%.",
      },
      {
        q: "Bisa integrasi ke marketplace selain Tokped & Shopee?",
        a: "Saat ini kami fokus di WhatsApp, Tokopedia, Shopee, Instagram, dan Facebook. Untuk marketplace lain seperti Lazada, Bukalapak, atau Blibli bisa custom development. Konsultasi dulu untuk timeline dan pricing.",
      },
    ],
  },
  {
    id: "investasi",
    icon: Wallet,
    title: "Investasi & ROI",
    questions: [
      {
        q: "Mahal gak? Bisnis kecil mampu bayar?",
        a: "Paket Starter mulai dari Rp 2.5 juta setup + Rp 500rb/bulan. Bandingkan dengan gaji admin minimum Rp 3-5 juta/bulan. Dalam 3 bulan, Anda sudah hemat. Plus, AI bekerja 24/7 tanpa cuti, sakit, atau resign.",
      },
      {
        q: "Kalau tidak cocok, uang saya bagaimana?",
        a: "Deposit awal tidak bisa dikembalikan karena sudah digunakan untuk setup, training AI, dan integrasi. Namun, 97% client kami puas dan lanjut berlangganan. Kami yakin dengan kualitas kerja kami.",
      },
      {
        q: "Kapan saya mulai lihat hasilnya?",
        a: "Minggu pertama setelah go live, Anda sudah bisa lihat berapa chat yang di-handle AI, berapa jam yang dihemat. Dalam 30 hari, Anda sudah punya data konkret untuk hitung ROI. Rata-rata client kami achieve ROI 3-5x dalam bulan pertama.",
      },
      {
        q: "Ada biaya tersembunyi?",
        a: "Tidak ada. Harga yang kami quote adalah total yang Anda bayar. Tidak ada fee per message, fee per order, atau surcharge apapun. Transparansi adalah core value kami.",
      },
    ],
  },
  {
    id: "cocok",
    icon: Users,
    title: "Cocok Untuk Siapa?",
    questions: [
      {
        q: "Bisnis seperti apa yang cocok pakai MANTRA?",
        a: "Anda cocok jika: (1) Dapat 20+ chat/hari dari customer, (2) Jualan di 2+ platform marketplace, (3) Punya 50+ SKU produk, (4) Merasa kewalahan dengan admin. Semakin banyak yang centang, semakin cocok.",
      },
      {
        q: "Industri apa saja yang bisa pakai?",
        a: "Fashion, F&B, kosmetik, elektronik, perlengkapan rumah, baby & kids, otomotif parts, dan hampir semua retail/e-commerce. Kami juga sudah handle jasa seperti laundry, salon booking, dan service center.",
      },
      {
        q: "Minimal omzet berapa untuk pakai MANTRA?",
        a: "Tidak ada minimal omzet. Tapi secara ROI, biasanya optimal untuk bisnis dengan omzet minimal Rp 30 juta/bulan. Dibawah itu, mungkin belum urgent butuh automation. Diatas itu, automation is a must.",
      },
    ],
  },
]

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("keraguan")
  const [openQuestions, setOpenQuestions] = useState<string[]>([])

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions((prev) =>
      prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId],
    )
  }

  const currentCategory = faqCategories.find((c) => c.id === activeCategory)

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="label-industrial bg-[#1A1A1A] text-white mb-4">FAQ</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 px-2">
            Pertanyaan yang <span className="text-[#FF4F00]">Sering Ditanyakan</span>
          </h2>
          <p className="text-base sm:text-lg text-[#666] max-w-2xl mx-auto px-4">
            Jawaban jujur untuk keraguan Anda. No BS.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 px-2">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm transition-all ${
                activeCategory === category.id
                  ? "bg-[#1A1A1A] text-white shadow-industrial"
                  : "bg-[#F5F5F0] text-[#1A1A1A] hover:bg-[#E8E8E8]"
              }`}
            >
              <category.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="max-w-3xl mx-auto px-2 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              {currentCategory?.questions.map((item, index) => {
                const questionId = `${activeCategory}-${index}`
                const isOpen = openQuestions.includes(questionId)

                return (
                  <div key={questionId} className="border-2 border-[#1A1A1A] bg-white">
                    <button
                      onClick={() => toggleQuestion(questionId)}
                      className="w-full flex items-start sm:items-center justify-between p-3 sm:p-4 md:p-5 text-left hover:bg-[#F5F5F0] transition-colors gap-3"
                    >
                      <span className="font-medium sm:font-semibold text-sm sm:text-base text-[#1A1A1A] leading-snug">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-[#FF4F00] flex-shrink-0 transition-transform mt-0.5 sm:mt-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 border-t-2 border-[#E8E8E8]">
                            <p className="text-sm sm:text-base text-[#666] leading-relaxed pt-3 sm:pt-4">{item.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#666] mb-4">Masih ada pertanyaan lain?</p>
          <a
            href="https://wa.me/6281311099023?text=Halo%20MANTRA,%20saya%20punya%20pertanyaan%20tentang..."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-industrial-primary inline-flex items-center gap-2"
          >
            Tanya Langsung via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
