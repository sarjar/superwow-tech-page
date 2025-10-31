"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, ExternalLink } from "lucide-react";

interface HeroProps {
  mousePosition: { x: number; y: number };
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

export function Hero({ mousePosition, onMouseMove }: HeroProps) {
  return (
    <section 
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      onMouseMove={onMouseMove}
    >
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none" />
      
      {/* Animated Background Gradient with Mouse Interaction */}
      <motion.div
        className="absolute inset-0 opacity-20 transition-transform duration-300 ease-out"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0, 255, 255, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 30%, rgba(138, 43, 226, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(255, 0, 255, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(0, 255, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(138, 43, 226, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0, 255, 255, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0)`,
        }}
      />

      {/* Secondary gradient layer for depth */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, rgba(138, 43, 226, 0.2) 0%, transparent 60%)`,
          transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -15}px, 0)`,
          transition: "all 0.3s ease-out",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 py-20 flex flex-col items-center text-center">
        {/* Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm mb-8"
        >
          <span className="text-xs uppercase tracking-[2px] font-medium text-gray-300">
            AI-Driven Development Studio
          </span>
        </motion.div>

        {/* Headline with Animated Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight"
        >
          <span className="inline-block text-white">Build with </span>
          <br className="md:hidden" />
          <span className="text-gradient-animated text-glow inline-block">
            Superwow Tech
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 font-normal max-w-[600px] mb-12 leading-relaxed"
        >
          The marketplace where AI-powered creativity meets professional-grade software.
          We design, ship, and maintain secure systems, AI assistants, and automation tools — so you can move faster and focus on your business.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-xl font-medium text-white overflow-hidden w-full sm:w-auto"
            style={{
              background: "linear-gradient(90deg, #8A2BE2 0%, #00FFFF 100%)",
              boxShadow: "0 0 20px rgba(138, 43, 226, 0.3)",
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              Start a Project
            </span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"
            />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-xl font-medium text-white border border-purple-500/30 bg-white/5 backdrop-blur-sm overflow-hidden w-full sm:w-auto"
            style={{
              boxShadow: "0 0 0 rgba(138, 43, 226, 0)",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(138, 43, 226, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 rgba(138, 43, 226, 0)";
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <ExternalLink className="w-5 h-5" />
              View Case Studies
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
