"use client";

import { motion } from "framer-motion";
import { Atom } from "lucide-react";
import { COMPANY, menu } from "../../lib/constants/company";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-purple-500/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <motion.a 
          href="#" 
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 grid place-items-center shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/80 transition-shadow">
            <Atom className="w-5 h-5" />
          </div>
          <span className="font-semibold tracking-tight text-white">{COMPANY.name}</span>
        </motion.a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {menu.map((m) => (
            <motion.a
              key={m.id}
              href={`#${m.id}`}
              className="relative text-gray-300 hover:text-white transition-colors group"
              whileHover={{ y: -2 }}
            >
              {m.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow"
          >
            Get a quote
          </motion.a>
        </nav>
      </div>
    </header>
  );
}
