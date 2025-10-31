"use client";

import { motion } from "framer-motion";
import { Atom } from "lucide-react";
import { COMPANY, menu } from "../../lib/constants/company";

export function Footer() {
  return (
    <footer className="relative border-t border-purple-500/10 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 grid place-items-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/60 transition-shadow">
              <Atom className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block text-gradient-animated">{COMPANY.name}</span>
              <span className="text-xs text-gray-500 block">AI-Driven Development</span>
            </div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
            <div className="flex items-center gap-6">
              {menu.map((m) => (
                <a
                  key={m.id}
                  href={`#${m.id}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {m.label}
                </a>
              ))}
            </div>
            <div className="h-px w-12 md:h-4 md:w-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            <p className="text-gray-500">
              © {new Date().getFullYear()} {COMPANY.name}, MB. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
