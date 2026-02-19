"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  variant?: "default" | "mint" | "gold";
  className?: string;
  delay?: number;
}

export default function GlowCard({
  children,
  variant = "default",
  className = "",
  delay = 0,
}: GlowCardProps) {
  const cardClass =
    variant === "mint"
      ? "glass-card-mint"
      : variant === "gold"
        ? "glass-card-gold"
        : "glass-card";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={`${cardClass} p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
