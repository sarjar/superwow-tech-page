"use client";

import { motion } from "framer-motion";
import { stack } from "../../lib/constants/tech-stack";

export function TechStack() {
  return (
    <section id="stack" className="relative mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Tech expertise & skills
          </span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          We pick boring‑reliable tools first, then sprinkle novelty where it matters.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.05 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {stack.map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.4 }}
            whileHover={{ scale: 1.1, y: -3 }}
            className="group relative px-5 py-2.5 rounded-full border border-purple-500/30 text-sm font-medium text-gray-300 bg-black/40 backdrop-blur-sm hover:bg-black/60 hover:border-purple-500/60 hover:text-white transition-all duration-300 cursor-pointer"
            style={{
              boxShadow: "0 0 0 rgba(138, 43, 226, 0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(138, 43, 226, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 rgba(138, 43, 226, 0)";
            }}
          >
            {t}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
