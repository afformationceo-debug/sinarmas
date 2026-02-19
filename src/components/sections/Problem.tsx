"use client";

import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { useTranslation } from "@/i18n";

const hwIcons = ["🏢", "🚛", "🏪", "💰", "🌏"];
const swIcons = ["🔗", "🤖", "📊", "👥", "🎬"];

export default function Problem() {
  const { t, tArray, tObj } = useTranslation();
  const marketData = tObj<Record<string, string>>("problem.market_data");

  return (
    <section id="problem" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(0,212,170,0.04)_0%,_transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <SectionLabel text={t("problem.label")} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-4xl md:text-5xl lg:text-6xl mb-8"
          >
            {t("problem.title").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.h2>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 italic max-w-3xl mx-auto leading-relaxed border-l-2 border-red-500/40 pl-6 text-left"
          >
            {t("problem.quote").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.blockquote>
        </div>

        {/* Indonesia Market Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16"
        >
          {[
            { value: marketData.population, label: marketData.population_label, color: "#00D4AA" },
            { value: marketData.ecommerce, label: marketData.ecommerce_label, color: "#6366F1" },
            { value: marketData.kbeauty, label: marketData.kbeauty_label, color: "#E8C84E" },
            { value: marketData.social, label: marketData.social_label, color: "#00D4AA" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="p-4 md:p-5 rounded-xl border border-white/5 bg-white/[0.02] text-center"
            >
              <div
                className="text-2xl md:text-3xl font-black mb-1"
                style={{ color: item.color }}
              >
                {item.value}
              </div>
              <div className="text-[10px] md:text-xs text-slate-500 font-medium leading-tight">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Hardware */}
          <GlowCard variant="default" delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-xs font-bold tracking-[0.15em] text-blue-400">
                {t("problem.hw_label")}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-6">
              {t("problem.hw_title")}
            </h3>
            <div className="space-y-4">
              {tArray("problem.hw_items").map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <span className="text-xl shrink-0">{hwIcons[i]}</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </GlowCard>

          {/* Software */}
          <GlowCard variant="mint" delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-mint-500 shadow-[0_0_10px_rgba(0,212,170,0.5)]" />
              <span className="text-xs font-bold tracking-[0.15em] text-mint-400">
                {t("problem.sw_label")}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-6">
              {t("problem.sw_title")}
            </h3>
            <div className="space-y-4">
              {tArray("problem.sw_items").map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 text-mint-300"
                >
                  <span className="text-xl shrink-0">{swIcons[i]}</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </GlowCard>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-mint-500/10 to-indigo-500/10 border border-mint-500/20">
            <div className="w-2 h-2 rounded-full bg-mint-500 animate-pulse" />
            <p className="text-xl md:text-2xl font-bold gradient-text-mint">
              {t("problem.conclusion")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
