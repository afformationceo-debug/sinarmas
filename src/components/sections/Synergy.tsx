"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { useTranslation } from "@/i18n";

export default function Synergy() {
  const { t, tArray } = useTranslation();
  const hwItems = tArray("synergy.hw");
  const swItems = tArray("synergy.sw");

  return (
    <section id="synergy" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(200,168,78,0.03)_0%,_transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <SectionLabel text={t("synergy.label")} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-3xl md:text-5xl lg:text-6xl"
          >
            <span>{t("synergy.title")}</span>
            <span className="text-slate-500 mx-3">&times;</span>
            <span className="gradient-text-mint">{t("synergy.title2")}</span>
          </motion.h2>
        </div>

        {/* Formula bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <span className="text-sm md:text-base font-mono font-bold tracking-[0.3em] text-slate-500">
            {t("synergy.formula")}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 items-stretch mb-12">
          {/* HW Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 glass-card-gold p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-gold-500" />
              <span className="text-xs font-bold tracking-[0.15em] text-gold-400">
                SINAR MAS
              </span>
            </div>
            <div className="space-y-3">
              {hwItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500/50 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center merge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-500/20 via-mint-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center">
                <span className="text-3xl font-black text-white/80">=</span>
              </div>
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-20 bg-mint-500"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </motion.div>

          {/* SW Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 glass-card-mint p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-mint-500 shadow-[0_0_8px_rgba(0,212,170,0.5)]" />
              <span className="text-xs font-bold tracking-[0.15em] text-mint-400">
                AFFORMATION
              </span>
            </div>
            <div className="space-y-3">
              {swItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="flex items-start gap-3 text-sm text-mint-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-mint-500 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-500/10 via-mint-500/10 to-indigo-500/10 border border-gold-500/20 glow-gold">
            <p className="text-2xl md:text-3xl font-black">
              <span className="gradient-text-gold">{t("synergy.result")}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
