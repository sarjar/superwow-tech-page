"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useIsCentered } from "../../hooks/useIsCentered";

interface CenteredCardProps {
  children: React.ReactNode;
  className?: string;
  baseStyle?: React.CSSProperties;
  delay?: number;
}

export function CenteredCard({ 
  children, 
  className = "", 
  baseStyle = {},
  delay = 0 
}: CenteredCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isCentered = useIsCentered(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={className}
      style={{
        ...baseStyle,
        scale: isCentered ? 1.03 : 1,
        boxShadow: isCentered 
          ? "0 0 40px rgba(138, 43, 226, 0.5), 0 0 80px rgba(0, 255, 255, 0.3)" 
          : baseStyle.boxShadow || "0 0 0 rgba(138, 43, 226, 0)",
        borderColor: isCentered ? "rgba(138, 43, 226, 0.6)" : undefined,
        transition: "all 0.3s ease-out",
      }}
      onMouseEnter={(e) => {
        if (!isCentered) {
          e.currentTarget.style.boxShadow = "0 0 30px rgba(138, 43, 226, 0.3)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isCentered) {
          e.currentTarget.style.boxShadow = "0 0 0 rgba(138, 43, 226, 0)";
        }
      }}
    >
      {children}
    </motion.div>
  );
}
