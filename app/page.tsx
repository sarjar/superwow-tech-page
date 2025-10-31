"use client";

import { useState } from "react";
import { Header } from "../components/sections/Header";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { CaseStudies } from "../components/sections/CaseStudies";
import { TechStack } from "../components/sections/TechStack";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  return (
    <div className="min-h-screen text-neutral-100" style={{ background: '#0a0a0a' }}>
      <Header />
      <Hero mousePosition={mousePosition} onMouseMove={handleMouseMove} />
      <Services />
      <CaseStudies />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}