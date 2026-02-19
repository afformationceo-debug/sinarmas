"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import SectionLabel from "@/components/ui/SectionLabel";
import { useTranslation } from "@/i18n";

const statColors = ["#00D4AA", "#6366F1", "#C8A84E", "#00D4AA"];

export default function TrackRecord() {
  const { t, tObj, tArray } = useTranslation();
  const stats = tObj<Array<{ value: string; unit: string; label: string }>>(
    "track.stats"
  );
  const partners = tArray("track.partners");
  const milestones = tObj<Array<{ year: string; event: string }>>(
    "track.milestones"
  );

  return (
    <section id="track" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(0,212,170,0.03)_0%,_transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <SectionLabel text={t("track.label")} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl md:text-5xl lg:text-6xl mb-3"
          >
            {t("track.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            {t("track.subtitle")}
          </motion.p>
        </div>

        {/* Stats - Enhanced with color coding */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="stat-card hover-glow glass-card p-6 md:p-8 text-center relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${statColors[i]}, transparent)`,
                }}
              />
              <div className="text-3xl md:text-5xl font-black mb-2" style={{ color: statColors[i] }}>
                {stat.value === "2021" ? (
                  <span className="font-[var(--font-jetbrains)] tabular-nums">
                    {stat.value}
                    {stat.unit}
                  </span>
                ) : (
                  <CountUp
                    end={parseInt(stat.value)}
                    suffix={stat.unit}
                  />
                )}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Partners marquee - Enhanced */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-bold tracking-[0.2em] text-slate-600 uppercase mb-6"
          >
            Partners & Investors
          </motion.p>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-950 to-transparent z-10" />
            <div
              className="flex gap-16 items-center"
              style={{
                animation: "marquee 25s linear infinite",
                width: "max-content",
              }}
            >
              {[...partners, ...partners, ...partners].map((name, i) => (
                <span
                  key={i}
                  className="text-lg font-bold text-slate-700 hover:text-mint-400 transition-colors duration-300 whitespace-nowrap cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones - Enhanced with better cards */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(0,212,170,0.2), rgba(99,102,241,0.2), rgba(200,168,78,0.2), transparent)",
            }}
          />
          <div className="space-y-6">
            {milestones.map((ms, i) => {
              const isHighlight = ms.year === "2026";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <div
                      className={`inline-block p-5 rounded-xl border transition-all duration-300 hover:border-white/10 ${
                        isHighlight
                          ? "border-gold-500/20 bg-gold-500/[0.03]"
                          : "border-white/5 bg-white/[0.02]"
                      } ${i % 2 === 0 ? "md:ml-auto" : ""}`}
                    >
                      <span
                        className={`font-[var(--font-jetbrains)] text-xl font-bold block mb-1.5 ${
                          isHighlight ? "text-gold-400" : "text-mint-400"
                        }`}
                      >
                        {ms.year}
                        {isHighlight && (
                          <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-400 font-bold align-middle">
                            NOW
                          </span>
                        )}
                      </span>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {ms.event}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`hidden md:flex w-4 h-4 rounded-full shrink-0 border-2 ${
                      isHighlight
                        ? "bg-gold-500/20 border-gold-500/60 shadow-[0_0_12px_rgba(200,168,78,0.3)]"
                        : "bg-mint-500/20 border-mint-500/40"
                    }`}
                  />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
