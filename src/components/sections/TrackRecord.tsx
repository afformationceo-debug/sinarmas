"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import SectionLabel from "@/components/ui/SectionLabel";
import { useTranslation } from "@/i18n";

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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl md:text-5xl font-black text-slate-100 mb-2">
                {stat.value === "2021" ? (
                  <span className="font-[var(--font-jetbrains)] tabular-nums">
                    {stat.value}
                    {stat.unit}
                  </span>
                ) : (
                  <CountUp
                    end={parseInt(stat.value)}
                    suffix={stat.unit}
                    className="text-slate-100"
                  />
                )}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Partners marquee */}
        <div className="mb-20">
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-950 to-transparent z-10" />
            <div
              className="flex gap-12 items-center"
              style={{
                animation: "marquee 30s linear infinite",
                width: "max-content",
              }}
            >
              {[...partners, ...partners, ...partners].map((name, i) => (
                <span
                  key={i}
                  className="text-lg font-bold text-slate-600 hover:text-slate-300 transition-colors whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-mint-500/20 to-transparent hidden md:block" />
          <div className="space-y-6">
            {milestones.map((ms, i) => (
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
                  <div className={`inline-block p-4 rounded-xl border border-white/5 bg-white/[0.02] ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <span className="font-[var(--font-jetbrains)] text-xl font-bold text-mint-400 block mb-1">
                      {ms.year}
                    </span>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {ms.event}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full bg-mint-500/20 border-2 border-mint-500/40 shrink-0" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
