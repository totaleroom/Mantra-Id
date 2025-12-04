/* ==========================================================================
   ABOUT SECTION - Tentang MANTRA (tanpa cerita awal karir)
   ==========================================================================
   
   AMAN DIEDIT:
   - Semua teks dan deskripsi
   - Stats dan angka
   - Pain points dan values
   
   ========================================================================== */

"use client"

import { motion } from "framer-motion"
import { Target, Zap, Shield, Users } from "lucide-react"

/* EDIT: Values/Nilai MANTRA */
const values = [
  {
    icon: Zap,
    title: "Speed Over Perfection",
    description:
      "Kami lebih pilih 80% automation yang jalan minggu depan, daripada 100% automation yang jalan tahun depan. Bisnis Anda butuh solusi sekarang, bukan nanti.",
  },
  {
    icon: Shield,
    title: "Transparansi Total",
    description:
      "Harga yang kami quote adalah harga final. Tidak ada biaya tersembunyi, tidak ada upsell aggressive. Anda tahu persis apa yang Anda bayar dan apa yang Anda dapat.",
  },
  {
    icon: Users,
    title: "Partner, Bukan Vendor",
    description:
      "Kami tidak jual software lalu tinggal. Kami partner yang ikut mikirin bisnis Anda. Sukses Anda adalah sukses kami. Karena itu, support kami real dan responsive.",
  },
]

/* EDIT: Stats */
const stats = [
  { value: "30+", label: "UMKM Terautomasi" },
  { value: "15,000+", label: "Jam Dihemat/Bulan" },
  { value: "< 3 detik", label: "Avg Response Time" },
  { value: "97%", label: "Client Retention" },
]

export default function AboutSection() {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="label-industrial bg-[#FF4F00] text-white mb-4">TENTANG KAMI</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Kami Paham <span className="text-[#FF4F00]">Sakitnya</span> Bisnis Anda
          </h2>
          <p className="text-lg text-[#999] max-w-3xl mx-auto leading-relaxed">
            MANTRA lahir dari frustasi yang sama dengan yang Anda rasakan. Melihat pemilik bisnis yang seharusnya fokus
            mengembangkan produk dan customer, malah terjebak mengurusi hal-hal repetitif yang seharusnya bisa
            diotomasi.
          </p>
        </motion.div>

        {/* Pain Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#252525] border-2 border-[#333] p-6 md:p-8 mb-12"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-[#FF4F00]" />
            Pain yang Kami Selesaikan:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Owner yang kerja 14 jam/hari tapi bisnis jalan di tempat",
              "Admin resign, bisnis langsung chaos karena no system",
              "Customer complain slow response, padahal tim sudah kewalahan",
              "Stok tidak sinkron, overselling terus-terusan",
              "Data customer berserakan di mana-mana",
              "Scaling bisnis = scaling headache",
            ].map((pain, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#FF4F00] mt-2 flex-shrink-0" />
                <span className="text-[#CCC]">{pain}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#252525] border-2 border-[#333] p-6 hover:border-[#FF4F00] transition-colors"
            >
              <div className="w-12 h-12 bg-[#FF4F00] flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{value.title}</h3>
              <p className="text-[#999] text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-[#252525] border border-[#333]">
              <div className="text-2xl md:text-3xl font-bold text-[#FF4F00] font-mono">{stat.value}</div>
              <div className="text-xs text-[#666] uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <blockquote className="text-xl md:text-2xl font-bold italic text-[#CCC] max-w-3xl mx-auto">
            "Misi kami sederhana: buat automation accessible untuk UMKM Indonesia. Bukan software mahal yang ribet. Tapi
            solusi simple yang langsung bisa dipakai."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
