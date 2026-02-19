"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { useTranslation } from "@/i18n";

const hwIcons = ["🚛", "🏪", "📦", "💰", "🌏", "📋"];
const swIcons = ["🤖", "🔗", "👥", "💻", "🎬", "📊"];

export default function Synergy() {
  const { t, tArray } = useTranslation();
  const hwItems = tArray("synergy.hw");
  const swItems = tArray("synergy.sw");

  return (
    <section id="synergy" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(200,168,78,0.03)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(0,212,170,0.03)_0%,_transparent_40%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <SectionLabel text={t("synergy.label")} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-3xl md:text-5xl lg:text-6xl mb-4"
          >
            <span>{t("synergy.title")}</span>
            <br className="md:hidden" />
            <span className="text-slate-500 mx-3">&times;</span>
            <br className="md:hidden" />
            <span className="gradient-text-mint">{t("synergy.title2")}</span>
          </motion.h2>
        </div>

        {/* Formula bar - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/5 bg-white/[0.02]">
            <span className="w-3 h-3 rounded-full bg-gold-500/30 border border-gold-500/50" />
            <span className="text-sm md:text-base font-mono font-bold tracking-[0.3em] text-slate-400">
              {t("synergy.formula")}
            </span>
            <span className="w-3 h-3 rounded-full bg-mint-500/30 border border-mint-500/50" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 items-stretch mb-12">
          {/* HW Column - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 glass-card-gold p-6 md:p-8 relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, #C8A84E, transparent)" }}
            />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />
              </div>
              <div>
                <span className="text-xs font-black tracking-[0.15em] text-gold-400 block">
                  SINAR MAS
                </span>
                <span className="text-[9px] text-slate-600 tracking-wider">HARDWARE</span>
              </div>
            </div>
            <div className="space-y-3">
              {hwItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="flex items-start gap-3 text-sm text-slate-300 group"
                >
                  <span className="text-base shrink-0 group-hover:scale-110 transition-transform">{hwIcons[i]}</span>
                  <span className="leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center merge - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer rings */}
              <div
                className="absolute -inset-6 rounded-full border border-gold-500/10"
                style={{ animation: "breathing 4s ease-in-out infinite" }}
              />
              <div
                className="absolute -inset-3 rounded-full border border-mint-500/10"
                style={{ animation: "breathing 4s ease-in-out infinite 1s" }}
              />
              <div className="w-20 h-20 rounded-full flex items-center justify-center relative"
                style={{
                  background: "linear-gradient(135deg, rgba(200,168,78,0.15), rgba(0,212,170,0.15), rgba(99,102,241,0.15))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 0 40px rgba(0,212,170,0.1), 0 0 40px rgba(200,168,78,0.1)",
                }}
              >
                <span className="text-3xl font-black text-white/80">=</span>
              </div>
            </div>
          </motion.div>

          {/* SW Column - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 glass-card-mint p-6 md:p-8 relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, #00D4AA, transparent)" }}
            />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-mint-500/10 border border-mint-500/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-mint-500 shadow-[0_0_8px_rgba(0,212,170,0.5)]" />
              </div>
              <div>
                <span className="text-xs font-black tracking-[0.15em] text-mint-400 block">
                  AFFORMATION
                </span>
                <span className="text-[9px] text-slate-600 tracking-wider">SOFTWARE</span>
              </div>
            </div>
            <div className="space-y-3">
              {swItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="flex items-start gap-3 text-sm text-mint-300 group"
                >
                  <span className="text-base shrink-0 group-hover:scale-110 transition-transform">{swIcons[i]}</span>
                  <span className="leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Result - More dramatic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block px-12 py-6 rounded-2xl relative overflow-hidden glow-gold"
            style={{
              background: "linear-gradient(135deg, rgba(200,168,78,0.08), rgba(0,212,170,0.08), rgba(99,102,241,0.08))",
              border: "1px solid rgba(200,168,78,0.2)",
            }}
          >
            <div className="absolute inset-0 gradient-border rounded-2xl" />
            <p className="text-2xl md:text-3xl font-black relative z-10">
              <span className="gradient-text-gold">{t("synergy.result")}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
