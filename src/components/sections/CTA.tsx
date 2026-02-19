"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects - multiple layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(0,212,170,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,_rgba(200,168,78,0.04)_0%,_transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(99,102,241,0.04)_0%,_transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_rgba(0,212,170,0.03)_0%,_transparent_30%)]" />

      {/* Decorative large quote marks */}
      <div className="absolute top-16 left-[8%] text-[250px] font-black text-white/[0.015] leading-none select-none pointer-events-none">
        &ldquo;
      </div>
      <div className="absolute bottom-32 right-[8%] text-[250px] font-black text-white/[0.015] leading-none select-none pointer-events-none">
        &rdquo;
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-200 leading-relaxed mb-12"
        >
          {t("cta.quote")
            .split("\n")
            .map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
        </motion.blockquote>

        {/* Animated Divider - multi-color */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-40 h-px mx-auto mb-12"
          style={{
            background: "linear-gradient(90deg, transparent, #00D4AA, #6366F1, #C8A84E, transparent)",
          }}
        />

        {/* Answer - Maximum impact */}
        <motion.p
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-16 shimmer-text"
        >
          {t("cta.answer")}
        </motion.p>

        {/* CTA Buttons - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <a
            href="#"
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-mint-500 to-mint-600 text-dark-950 font-black text-lg hover:shadow-[0_0_50px_rgba(0,212,170,0.4)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">{t("cta.btn_proposal")}</span>
          </a>
          <a
            href="#"
            className="px-10 py-5 rounded-full border-2 border-gold-500/30 text-gold-400 font-bold text-lg hover:bg-gold-500/10 hover:border-gold-500/50 hover:shadow-[0_0_30px_rgba(200,168,78,0.15)] transition-all duration-500"
          >
            {t("cta.btn_meeting")}
          </a>
        </motion.div>

        {/* Footer info - Enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="border-t border-white/5 pt-10"
        >
          <p className="text-xl font-black tracking-[0.3em] text-slate-300 mb-6">
            {t("cta.company")}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-sm text-slate-500">
            <span>{t("cta.address")}</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-700" />
            <span className="hover:text-mint-400 transition-colors">{t("cta.email")}</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-700" />
            <span className="hover:text-mint-400 transition-colors">{t("cta.website")}</span>
          </div>
          <p className="text-xs text-slate-600 mt-6">{t("cta.copyright")}</p>
        </motion.div>
      </div>
    </section>
  );
}
