"use client";

import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";
import CountUp from "@/components/ui/CountUp";
import SectionLabel from "@/components/ui/SectionLabel";
import { useTranslation } from "@/i18n";

const stepColors = ["#00D4AA", "#6366F1", "#C8A84E"];

export default function Strategy() {
  const { t, tObj } = useTranslation();
  const steps = tObj<
    Array<{
      step: string;
      title: string;
      pain: string;
      solution: string;
      proposal: string;
    }>
  >("strategy.steps");
  const stats = tObj<Array<{ value: string; unit: string; label: string }>>(
    "strategy.stats"
  );

  return (
    <section id="strategy" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,_rgba(0,212,170,0.03)_0%,_transparent_50%)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <SectionLabel text={t("strategy.label")} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            {t("strategy.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-mono tracking-wider"
          >
            {t("strategy.subtitle")}
          </motion.p>
        </div>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Step header with number */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black shrink-0"
                  style={{
                    background: `${stepColors[i]}10`,
                    border: `2px solid ${stepColors[i]}30`,
                    color: stepColors[i],
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <span
                    className="text-xs font-bold tracking-[0.2em] block mb-1"
                    style={{ color: `${stepColors[i]}80` }}
                  >
                    {step.step}
                  </span>
                  <h3 className="section-title text-2xl md:text-3xl">
                    {step.title}
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Pain */}
                <div className="p-6 rounded-xl border border-red-500/10 bg-red-500/[0.03]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <span className="text-xs font-bold tracking-wider text-red-400/60 uppercase">
                      Pain Point
                    </span>
                  </div>
                  <p className="text-slate-400 italic leading-relaxed">
                    &ldquo;{step.pain}&rdquo;
                  </p>
                </div>

                {/* Solution */}
                <div
                  className="p-6 rounded-xl border"
                  style={{
                    borderColor: `${stepColors[i]}20`,
                    background: `${stepColors[i]}05`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: stepColors[i],
                        boxShadow: `0 0 8px ${stepColors[i]}50`,
                      }}
                    />
                    <span
                      className="text-xs font-bold tracking-wider uppercase"
                      style={{ color: stepColors[i] }}
                    >
                      Solution
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {step.solution}
                  </p>
                </div>
              </div>

              <div
                className="p-4 rounded-xl text-center font-medium border"
                style={{
                  background: `${stepColors[i]}05`,
                  borderColor: `${stepColors[i]}15`,
                  color: stepColors[i],
                }}
              >
                {step.proposal}
              </div>

              {/* Stats row for step 2 */}
              {i === 1 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {stats.map((stat, si) => (
                    <GlowCard
                      key={si}
                      variant="mint"
                      delay={si * 0.1}
                      className="text-center !p-5"
                    >
                      <div className="text-3xl md:text-4xl font-black text-mint-400 mb-1">
                        <CountUp
                          end={parseInt(
                            String(stat.value).replace(",", "")
                          )}
                          suffix={stat.unit}
                        />
                      </div>
                      <div className="text-[10px] md:text-xs text-slate-500 font-medium">
                        {stat.label}
                      </div>
                    </GlowCard>
                  ))}
                </div>
              )}

              {/* Visual separator between steps */}
              {i < steps.length - 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-8 bg-gradient-to-b from-transparent" style={{ background: `linear-gradient(to bottom, ${stepColors[i]}30, ${stepColors[i + 1]}30)` }} />
                    <div className="w-2 h-2 rotate-45 border-b border-r" style={{ borderColor: `${stepColors[i + 1]}40` }} />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
