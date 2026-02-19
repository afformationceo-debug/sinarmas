"use client";

import { motion } from "framer-motion";

export default function SectionLabel({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 mb-6"
    >
      <div className="h-px w-8 bg-mint-500" />
      <span className="text-xs font-semibold tracking-[0.2em] text-mint-500 uppercase">
        {text}
      </span>
      <div className="h-px w-8 bg-mint-500" />
    </motion.div>
  );
}
