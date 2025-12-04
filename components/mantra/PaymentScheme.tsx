/* ==========================================================================
   PAYMENT SCHEME - Skema pembayaran dan deposit
   ==========================================================================
   
   AMAN DIEDIT:
   - paymentSteps array: Tahapan pembayaran
   - paymentMethods array: Metode pembayaran yang diterima
   - Section title dan description
   
   CATATAN:
   - Deposit tidak bisa dikembalikan
   - Jelaskan dengan transparan
   
   ========================================================================== */

"use client"

import { motion } from "framer-motion"
import { CreditCard, Building2, Wallet, AlertCircle, CheckCircle } from "lucide-react"

/* EDIT: Tahapan pembayaran */
const paymentSteps = [
  {
    step: 1,
    title: "Deposit 50%",
    timing: "Setelah deal",
    description:
      "Pembayaran deposit untuk memulai proses setup. Deposit digunakan untuk resource dan development awal.",
    note: "Deposit tidak dapat dikembalikan jika pembatalan dari sisi klien",
  },
  {
    step: 2,
    title: "Pelunasan 50%",
    timing: "Sebelum go-live",
    description: "Sisa pembayaran dilunasi setelah sistem selesai disetup dan siap digunakan.",
    note: "Termasuk training dan handover",
  },
  {
    step: 3,
    title: "Biaya Bulanan",
    timing: "Setiap bulan",
    description: "Pembayaran subscription bulanan untuk maintenance, support, dan penggunaan sistem.",
    note: "Dibayar di awal bulan",
  },
]

/* EDIT: Metode pembayaran yang diterima */
const paymentMethods = [
  { icon: Building2, name: "Transfer Bank", details: ["BCA", "Mandiri", "BNI", "BRI"] },
  { icon: Wallet, name: "E-Wallet", details: ["GoPay", "OVO", "Dana"] },
  { icon: CreditCard, name: "Virtual Account", details: ["Semua bank supported"] },
]

export default function PaymentScheme() {
  return (
    <section id="pembayaran" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === SECTION HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="label-industrial bg-[#1A1A1A] text-white mb-4">PEMBAYARAN</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Skema <span className="text-[#FF4F00]">Pembayaran</span>
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">Transparan dan mudah dipahami</p>
        </motion.div>

        {/* === PAYMENT STEPS === */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {paymentSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F5F5F0] border-2 border-[#1A1A1A] shadow-industrial p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FF4F00] flex items-center justify-center">
                  <span className="font-mono font-bold text-white">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A]">{item.title}</h3>
                  <span className="text-xs text-[#666]">{item.timing}</span>
                </div>
              </div>

              <p className="text-sm text-[#404040] mb-3">{item.description}</p>

              <div className="flex items-start gap-2 text-xs text-[#666] bg-white p-2 border border-[#E8E8E8]">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {item.note}
              </div>
            </motion.div>
          ))}
        </div>

        {/* === IMPORTANT NOTICE === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FEF2F2] border-2 border-[#EF4444] p-6 mb-12"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-[#EF4444] flex-shrink-0" />
            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-2">Penting: Kebijakan Deposit</h4>
              <ul className="space-y-2 text-sm text-[#404040]">
                <li className="flex items-start gap-2">
                  <span className="text-[#EF4444]">•</span>
                  Deposit yang sudah dibayarkan <strong>tidak dapat dikembalikan</strong> jika pembatalan dari sisi
                  klien
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EF4444]">•</span>
                  Deposit digunakan untuk alokasi resource, development, dan persiapan sistem
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EF4444]">•</span>
                  Jika MANTRA gagal deliver sesuai scope yang disepakati, deposit akan dikembalikan 100%
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* === PAYMENT METHODS === */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 text-center">Metode Pembayaran</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {paymentMethods.map((method) => (
              <div key={method.name} className="bg-[#F5F5F0] border-2 border-[#E8E8E8] p-4 text-center">
                <method.icon className="w-8 h-8 mx-auto mb-2 text-[#1A1A1A]" />
                <h4 className="font-semibold text-[#1A1A1A] mb-2">{method.name}</h4>
                <div className="flex flex-wrap justify-center gap-1">
                  {method.details.map((detail) => (
                    <span key={detail} className="text-xs bg-white px-2 py-1 text-[#666]">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* === GUARANTEE === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#F0FDF4] border-2 border-[#22C55E] p-6"
        >
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-[#22C55E] flex-shrink-0" />
            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-2">Komitmen MANTRA</h4>
              <ul className="space-y-2 text-sm text-[#404040]">
                <li className="flex items-start gap-2">
                  <span className="text-[#22C55E]">✓</span>
                  Kami berkomitmen deliver sesuai timeline yang disepakati
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#22C55E]">✓</span>
                  Support responsive via WhatsApp selama jam kerja
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#22C55E]">✓</span>
                  Training lengkap sampai tim Anda bisa operasikan sendiri
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
