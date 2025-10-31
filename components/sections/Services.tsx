"use client";

import { motion } from "framer-motion";
import { CenteredCard } from "../ui/CenteredCard";
import { services } from "../../lib/constants/services";

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            What we do
          </span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          From proof‑of‑concepts to production platforms. Modular delivery, rigorous testing, and clean hand‑offs.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <CenteredCard
            key={s.title}
            delay={i * 0.1}
            className="group relative rounded-2xl p-6 bg-gradient-to-br from-black/40 to-black/20 border border-purple-500/20 hover:border-purple-500/50 backdrop-blur-sm"
            baseStyle={{
              boxShadow: "0 0 0 rgba(138, 43, 226, 0)",
            }}
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 grid place-items-center mb-6 group-hover:scale-110 transition-transform text-purple-400">
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-white">{s.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-transparent to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </CenteredCard>
        ))}
      </div>
    </section>
  );
}
