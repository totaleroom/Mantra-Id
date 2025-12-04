/* ==========================================================================
   ADMIN COST SECTION - Survey gaji admin & perbandingan biaya (Optimized)
   ========================================================================== */

"use client"

import type React from "react"

import { useState, useCallback, memo } from "react"
import { motion } from "framer-motion"
import { MapPin, Users, Calculator, CheckCircle, XCircle, TrendingDown } from "lucide-react"
import { formatRupiah } from "@/lib/utils"
import { salaryData, adminTasks, type SalaryData } from "@/data/admin-salary"

const CityButton = memo(function CityButton({
  data,
  isSelected,
  onClick,
}: {
  data: SalaryData
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`p-4 border-2 text-left transition-all ${
        isSelected ? "border-primary bg-primary/10" : "border-muted hover:border-muted-foreground"
      }`}
      aria-pressed={isSelected}
    >
      <div className="font-semibold text-sm md:text-base text-primary-foreground">{data.city}</div>
      <div className="font-mono text-primary text-sm md:text-lg">{formatRupiah(data.salary)}</div>
      <div className="text-xs text-muted-foreground mt-1">UMK: {formatRupiah(data.umk)}</div>
    </button>
  )
})

export default function AdminCostSection() {
  const [selectedCity, setSelectedCity] = useState(salaryData[0])
  const [adminCount, setAdminCount] = useState(2)

  const monthlyAdminCost = selectedCity.salary * adminCount
  const yearlyAdminCost = monthlyAdminCost * 12
  const mantraYearlyCost = 30000000
  const yearlySavings = yearlyAdminCost - mantraYearlyCost

  const handleCitySelect = useCallback((city: SalaryData) => {
    setSelectedCity(city)
  }, [])

  const handleAdminCountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminCount(Number.parseInt(e.target.value))
  }, [])

  return (
    <section className="py-16 md:py-24 bg-foreground text-background" aria-labelledby="admin-cost-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="label-industrial bg-primary text-primary-foreground mb-4">HITUNG SENDIRI</div>
          <h2 id="admin-cost-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Berapa <span className="text-primary">Biaya Admin</span> Anda?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Survey gaji admin olshop di berbagai kota Indonesia (data UMK 2025)
          </p>
        </motion.div>

        {/* Salary Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
            Gaji Admin per Kota
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" role="listbox" aria-label="Pilih kota">
            {salaryData.map((data) => (
              <CityButton
                key={data.city}
                data={data}
                isSelected={selectedCity.city === data.city}
                onClick={() => handleCitySelect(data)}
              />
            ))}
          </div>
        </motion.div>

        {/* Cost Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Calculator Input */}
          <div className="bg-card/5 border-2 border-muted p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" aria-hidden="true" />
              Kalkulator Biaya Admin
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Kota: <span className="text-background font-semibold">{selectedCity.city}</span>
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Gaji per admin: <span className="text-primary font-mono">{formatRupiah(selectedCity.salary)}</span>
                </p>
              </div>

              <div>
                <label htmlFor="admin-count" className="block text-sm text-muted-foreground mb-2">
                  Jumlah Admin
                </label>
                <div className="flex items-center gap-4">
                  <input
                    id="admin-count"
                    type="range"
                    min="1"
                    max="10"
                    value={adminCount}
                    onChange={handleAdminCountChange}
                    className="flex-1 accent-primary"
                    aria-valuenow={adminCount}
                    aria-valuemin={1}
                    aria-valuemax={10}
                  />
                  <span className="font-mono text-2xl text-primary w-12 text-center" aria-live="polite">
                    {adminCount}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Results */}
          <div className="bg-primary/10 border-2 border-primary p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-primary" aria-hidden="true" />
              Perbandingan Biaya
            </h3>

            <dl className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-muted">
                <dt className="text-muted-foreground">Biaya {adminCount} Admin/bulan</dt>
                <dd className="font-mono text-xl">{formatRupiah(monthlyAdminCost)}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-muted">
                <dt className="text-muted-foreground">Biaya {adminCount} Admin/tahun</dt>
                <dd className="font-mono text-xl text-destructive">{formatRupiah(yearlyAdminCost)}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-muted">
                <dt className="text-muted-foreground">MANTRA/tahun</dt>
                <dd className="font-mono text-xl text-chart-2">{formatRupiah(mantraYearlyCost)}</dd>
              </div>
              <div className="flex justify-between items-center py-3 bg-chart-2/20 px-3 -mx-3">
                <dt className="font-semibold">Potensi Hemat/tahun</dt>
                <dd className="font-mono text-2xl text-chart-2 font-bold">
                  {yearlySavings > 0 ? formatRupiah(yearlySavings) : "-"}
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>

        {/* Admin Tasks Table */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" aria-hidden="true" />
            Jobdesk Admin yang Bisa Digantikan MANTRA
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full" role="table">
              <thead>
                <tr className="border-b-2 border-muted">
                  <th scope="col" className="text-left py-3 px-4 text-sm text-muted-foreground">
                    Tugas
                  </th>
                  <th scope="col" className="text-center py-3 px-4 text-sm text-muted-foreground hidden sm:table-cell">
                    Waktu/Hari
                  </th>
                  <th scope="col" className="text-center py-3 px-4 text-sm text-muted-foreground">
                    Bisa Diganti?
                  </th>
                  <th scope="col" className="text-left py-3 px-4 text-sm text-muted-foreground hidden md:table-cell">
                    Cara MANTRA
                  </th>
                </tr>
              </thead>
              <tbody>
                {adminTasks.map((task) => (
                  <tr key={task.task} className="border-b border-muted/50">
                    <td className="py-4 px-4">
                      <div className="font-medium">{task.task}</div>
                      <div className="text-sm text-muted-foreground md:hidden">{task.timePerDay}</div>
                    </td>
                    <td className="text-center py-4 px-4 font-mono text-sm hidden sm:table-cell">{task.timePerDay}</td>
                    <td className="text-center py-4 px-4">
                      {task.canReplace ? (
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-5 h-5 text-chart-2" aria-hidden="true" />
                          <span className="font-mono text-chart-2 text-sm">{task.replacePercent}%</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <XCircle className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                          <span className="font-mono text-muted-foreground text-sm">{task.replacePercent}%</span>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground hidden md:table-cell">{task.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="mt-6 p-4 bg-chart-2/10 border border-chart-2" role="status">
            <p className="text-center">
              <span className="text-chart-2 font-bold">85%+ tugas admin</span> bisa diotomasi MANTRA. Sisanya tetap
              butuh human - tapi workloadnya jauh lebih ringan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
