"use client"

import { motion } from "framer-motion"
import { X, Check, Clock, AlertTriangle, Zap, Bot } from "lucide-react"
import { useBrandMode, COPY } from "@/lib/brand-context"

const icons = [Clock, AlertTriangle, Clock, AlertTriangle]
const solutionIcons = [Bot, Zap, Zap, Bot]

export default function ProblemSolution() {
  const { mode } = useBrandMode()
  const copy = COPY.problem

  return (
    <section id="masalah" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === SECTION HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 px-2"
        >
          <div className="label-industrial bg-primary text-primary-foreground mb-4">{copy.sectionLabel[mode]}</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {copy.sectionTitle[mode]}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{copy.sectionDesc[mode]}</p>
        </motion.div>

        {/* === COMPARISON GRID === */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* PROBLEM COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{copy.beforeTitle[mode]}</h3>
            </div>

            {copy.problems.map((problem, index) => {
              const Icon = icons[index]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 md:p-5 bg-destructive/5 border-l-4 border-destructive hover-lift cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{problem[mode].title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{problem[mode].desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* SOLUTION COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-chart-2/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-chart-2" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{copy.afterTitle[mode]}</h3>
            </div>

            {copy.solutions.map((solution, index) => {
              const Icon = solutionIcons[index]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 md:p-5 bg-chart-2/5 border-l-4 border-chart-2 hover-lift cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-chart-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        {solution[mode].title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{solution[mode].desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
