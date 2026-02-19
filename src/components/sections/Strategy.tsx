"use client";

import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";
import CountUp from "@/components/ui/CountUp";
import SectionLabel from "@/components/ui/SectionLabel";
import { useTranslation } from "@/i18n";

const stepColors = ["#00D4AA", "#6366F1", "#C8A84E"];
const stepIcons = ["🛒", "🤖", "🤝"];

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_30%,_rgba(99,102,241,0.03)_0%,_transparent_40%)]" />

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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-3 text-sm text-slate-500 font-mono tracking-wider"
          >
            {t("strategy.subtitle").split("→").map((part, i, arr) => (
              <span key={i} className="flex items-center gap-3">
                <span className="hover:text-slate-300 transition-colors">{part.trim()}</span>
                {i < arr.length - 1 && (
                  <span style={{ color: stepColors[i] }}>→</span>
                )}
              </span>
            ))}
          </motion.div>
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
              {/* Step header with number and icon */}
              <div className="flex items-center gap-5 mb-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 relative"
                  style={{
                    background: `${stepColors[i]}08`,
                    border: `2px solid ${stepColors[i]}25`,
                  }}
                >
                  {stepIcons[i]}
                  <div
                    className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black"
                    style={{
                      background: `${stepColors[i]}15`,
                      border: `1.5px solid ${stepColors[i]}40`,
                      color: stepColors[i],
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
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
                {/* Pain - enhanced */}
                <div className="p-6 rounded-xl border border-red-500/10 bg-red-500/[0.03] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500/40 via-red-500/20 to-transparent" />
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

                {/* Solution - enhanced */}
                <div
                  className="p-6 rounded-xl border relative overflow-hidden"
                  style={{
                    borderColor: `${stepColors[i]}20`,
                    background: `${stepColors[i]}05`,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{ background: `linear-gradient(to bottom, ${stepColors[i]}60, ${stepColors[i]}10)` }}
                  />
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

              {/* Proposal - enhanced */}
              <div
                className="p-5 rounded-xl text-center font-bold border relative overflow-hidden"
                style={{
                  background: `${stepColors[i]}05`,
                  borderColor: `${stepColors[i]}15`,
                  color: stepColors[i],
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    background: `linear-gradient(135deg, ${stepColors[i]}, transparent)`,
                  }}
                />
                <span className="relative z-10">{step.proposal}</span>
              </div>

              {/* Stats row for step 2 */}
              {i === 1 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {stats.map((stat, si) => (
                    <GlowCard
                      key={si}
                      variant="mint"
                      delay={si * 0.1}
                      className="text-center !p-5 stat-card"
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

              {/* Visual separator between steps - enhanced */}
              {i < steps.length - 1 && (
                <div className="flex justify-center mt-16">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="w-px h-12"
                      style={{
                        background: `linear-gradient(to bottom, ${stepColors[i]}30, ${stepColors[i + 1]}30)`,
                      }}
                    />
                    <div
                      className="w-3 h-3 rotate-45 border-b-2 border-r-2"
                      style={{ borderColor: `${stepColors[i + 1]}40` }}
                    />
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
