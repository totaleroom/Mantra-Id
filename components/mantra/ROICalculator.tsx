/* ==========================================================================
   ROI CALCULATOR - Kalkulator interaktif penghematan
   ==========================================================================
   
   AMAN DIEDIT:
   - hourlyRate: Nilai per jam kerja (default Rp 50.000)
   - mantraCost: Biaya MANTRA per bulan
   - Slider ranges dan defaults
   
   ========================================================================== */

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, Clock, Wallet, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

/* EDIT: Konfigurasi kalkulator */
const HOURLY_RATE = 50000 // Nilai waktu per jam dalam Rupiah
const MANTRA_MONTHLY_COST = 2500000 // Rata-rata biaya MANTRA per bulan

export default function ROICalculator() {
  const [chatHours, setChatHours] = useState(3)
  const [stockHours, setStockHours] = useState(1.5)
  const [orderHours, setOrderHours] = useState(1)
  const [otherHours, setOtherHours] = useState(0.5)

  const [results, setResults] = useState({
    totalHoursPerDay: 0,
    totalHoursPerMonth: 0,
    moneySavedPerMonth: 0,
    netSavings: 0,
    roiPercentage: 0,
  })

  useEffect(() => {
    const totalHoursPerDay = chatHours + stockHours + orderHours + otherHours
    const totalHoursPerMonth = totalHoursPerDay * 26 // 26 hari kerja
    const moneySavedPerMonth = totalHoursPerMonth * HOURLY_RATE
    const netSavings = moneySavedPerMonth - MANTRA_MONTHLY_COST
    const roiPercentage = (netSavings / MANTRA_MONTHLY_COST) * 100

    setResults({
      totalHoursPerDay,
      totalHoursPerMonth,
      moneySavedPerMonth,
      netSavings,
      roiPercentage,
    })
  }, [chatHours, stockHours, orderHours, otherHours])

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  const SliderInput = ({
    label,
    value,
    onChange,
    max = 8,
    emoji,
  }: {
    label: string
    value: number
    onChange: (v: number) => void
    max?: number
    emoji: string
  }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-[#404040]">
          {emoji} {label}
        </span>
        <span className="font-mono font-bold text-[#FF4F00]">{value} jam</span>
      </div>
      <input
        type="range"
        min="0"
        max={max}
        step="0.5"
        value={value}
        onChange={(e) => onChange(Number.parseFloat(e.target.value))}
        className="w-full accent-[#FF4F00] h-2 bg-[#E8E8E8] cursor-pointer"
      />
    </div>
  )

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === SECTION HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="label-industrial bg-[#FF4F00] text-white mb-4">HITUNG ROI ANDA</div>
          {/* EDIT: Judul section */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Berapa Waktu yang <span className="text-[#FF4F00]">Terbuang?</span>
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">Geser slider untuk lihat potensi penghematan Anda</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* === INPUT SECTION === */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F5F0] border-2 border-[#1A1A1A] shadow-industrial p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-6 h-6 text-[#FF4F00]" />
              <h3 className="text-xl font-bold text-[#1A1A1A]">Waktu Harian Anda</h3>
            </div>

            <div className="space-y-6">
              <SliderInput label="Bales chat customer" value={chatHours} onChange={setChatHours} emoji="💬" />
              <SliderInput
                label="Update stok & marketplace"
                value={stockHours}
                onChange={setStockHours}
                max={4}
                emoji="📦"
              />
              <SliderInput
                label="Input & proses order"
                value={orderHours}
                onChange={setOrderHours}
                max={4}
                emoji="📝"
              />
              <SliderInput label="Tugas admin lainnya" value={otherHours} onChange={setOtherHours} max={4} emoji="📊" />
            </div>

            <div className="mt-8 pt-6 border-t-2 border-[#E8E8E8]">
              <div className="flex justify-between items-center">
                <span className="text-[#666]">Total waktu/hari:</span>
                <span className="font-mono text-2xl font-bold text-[#1A1A1A]">{results.totalHoursPerDay} jam</span>
              </div>
            </div>
          </motion.div>

          {/* === RESULTS SECTION === */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] shadow-industrial p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-[#FF4F00]" />
              <h3 className="text-xl font-bold">Hasil Perhitungan</h3>
            </div>

            <div className="space-y-4">
              {/* Time Saved */}
              <div className="p-4 bg-white/5 border border-gray-700">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Waktu dihemat/bulan</span>
                </div>
                <div className="font-mono text-3xl font-bold text-[#FF4F00]">
                  {Math.round(results.totalHoursPerMonth)} jam
                </div>
              </div>

              {/* Money Saved */}
              <div className="p-4 bg-white/5 border border-gray-700">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Wallet className="w-4 h-4" />
                  <span className="text-sm">Nilai waktu (@ {formatRupiah(HOURLY_RATE)}/jam)</span>
                </div>
                <div className="font-mono text-3xl font-bold text-white">
                  {formatRupiah(results.moneySavedPerMonth)}
                </div>
              </div>

              {/* Net Savings */}
              <div className="p-4 bg-[#22C55E]/20 border border-[#22C55E]">
                <div className="flex items-center gap-2 text-[#22C55E] mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">Net savings/bulan (setelah biaya MANTRA)</span>
                </div>
                <div className="font-mono text-3xl font-bold text-[#22C55E]">
                  {results.netSavings > 0 ? formatRupiah(results.netSavings) : "Rp 0"}
                </div>
              </div>

              {/* ROI */}
              <div className="text-center py-4">
                <span className="text-gray-400 text-sm">ROI</span>
                <div className="font-mono text-5xl font-bold text-[#FF4F00]">
                  {results.roiPercentage > 0 ? `${Math.round(results.roiPercentage)}%` : "-"}
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/6281311099023?text=Halo, saya sudah hitung ROI di website. Mau konsultasi lebih lanjut."
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6"
            >
              <Button className="w-full bg-[#FF4F00] hover:bg-[#E64500] text-white font-bold py-4 shadow-industrial">
                Konsultasi untuk ROI Lebih Detail
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
