"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Atom,
  Rocket,
  ShieldCheck,
  Cpu,
  Workflow,
  LineChart,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

// Single-file portfolio/landing page for an IT Solutions company.
// TailwindCSS required. No external UI kit needed. All content is easily editable.

const COMPANY = {
  name: "Superwow Tech",
  tagline: "Practical AI & Cloud solutions across every universe of your business.",
  email: "hello@multiverseit.center",
  phone: "+370 600 00000",
  url: "https://multiverseit.center",
};

const menu = [
  { id: "services", label: "Services" },
  { id: "work", label: "Case Studies" },
  { id: "stack", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];

const services = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Custom Software",
    desc: "Full‑stack web & mobile apps, from idea to production.",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Automation & RPA",
    desc: "Automate operations with robust workflows and bots.",
  },
  {
    icon: <Atom className="w-6 h-6" />,
    title: "AI Engineering",
    desc: "RAG/agents, LLM integrations, data pipelines & evaluation.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Cloud & Security",
    desc: "Secure, scalable infra on AWS/GCP/Azure with best practices.",
  },
];

const caseStudies = [
  {
    logo: "🚚",
    name: "Nordic Logistics",
    role: "AI Dispatch Assistant",
    impact: [
      "-32% manual routing time",
      "+18% on‑time deliveries",
      "24/7 driver support",
    ],
  },
  {
    logo: "🏦",
    name: "GreenBank",
    role: "Payments Micro‑frontends",
    impact: [
      "A11y AA compliant UI",
      "30+ E2E test flows",
      "Seamless release pipeline",
    ],
  },
  {
    logo: "🛒",
    name: "RetailCo EU",
    role: "Recommendations Engine",
    impact: [
      "+12% AOV via RAG",
      "Edge caching <100ms",
      "Privacy‑safe analytics",
    ],
  },
];

const stack = [
  "TypeScript",
  "React/Next.js",
  "Node.js",
  "Python",
  "LangChain/LangGraph",
  "Postgres/Supabase",
  "Redis",
  "Docker/Kubernetes",
  "AWS/GCP/Azure",
  "Playwright/Jest",
];

// Custom hook to detect if element is centered in viewport
function useIsCentered(ref: React.RefObject<HTMLElement | null>) {
  const [isCentered, setIsCentered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !ref.current) return;

    const checkPosition = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      
      // Check if element center is within 20% of viewport center
      const threshold = window.innerHeight * 0.2;
      const isInCenter = Math.abs(elementCenter - viewportCenter) < threshold;
      
      setIsCentered(isInCenter);
    };

    checkPosition();
    window.addEventListener('scroll', checkPosition, { passive: true });
    window.addEventListener('resize', checkPosition);

    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }, [ref, isMobile]);

  return isMobile ? isCentered : false;
}

// Wrapper component for cards with center detection
function CenteredCard({ 
  children, 
  className = "", 
  baseStyle = {},
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  baseStyle?: React.CSSProperties;
  delay?: number;
}) {
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

export default function Home() {
  const [sent, setSent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  return (
    <div className="min-h-screen text-neutral-100" style={{ background: '#050505' }}>
      {/* NAVBAR */}
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

      {/* HERO */}
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        onMouseMove={handleMouseMove}
      >
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none" />
        
        {/* Animated Background Gradient with Mouse Interaction */}
        <motion.div
          className="absolute inset-0 opacity-30 transition-transform duration-300 ease-out"
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
            We design, ship, and maintain secure systems, AI assistants, and automation tools—so your team can move faster.
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

      {/* SERVICES */}
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                {s.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3 text-white">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-transparent to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </CenteredCard>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="work" className="relative py-32 overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Selected work
                </span>
              </h2>
              <p className="text-gray-400">Real results from real projects</p>
          </div>
            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-2 group"
            >
              Need something similar?
              <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </motion.a>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <CenteredCard
                key={c.name}
                delay={i * 0.15}
                className="group relative rounded-2xl p-6 bg-gradient-to-br from-black/60 to-black/30 border border-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-sm overflow-hidden"
                baseStyle={{
                  boxShadow: "0 0 0 rgba(0, 255, 255, 0)",
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-magenta-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{c.logo}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{c.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 font-medium">{c.role}</p>
                  <ul className="space-y-3 text-sm">
                    {c.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CenteredCard>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
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
              Tech stack
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

      {/* CONTACT */}
      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm text-xs uppercase tracking-[2px] font-medium text-gray-300">
                Let's Build Something Amazing
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Let's build your next release
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Tell us about your goals and constraints. We'll reply with a realistic plan, timeline, and cost estimate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${COMPANY.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 grid place-items-center group-hover:border-purple-500/60 transition-colors">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email us</p>
                    <p className="text-white font-medium group-hover:text-purple-400 transition-colors">{COMPANY.email}</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href={`tel:${COMPANY.phone}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 grid place-items-center group-hover:border-cyan-500/60 transition-colors">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call us</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{COMPANY.phone}</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href={COMPANY.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-magenta-500/20 to-purple-500/20 border border-magenta-500/30 grid place-items-center group-hover:border-magenta-500/60 transition-colors">
                    <Globe className="w-5 h-5 text-magenta-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit website</p>
                    <p className="text-white font-medium group-hover:text-magenta-400 transition-colors">{COMPANY.url}</p>
                  </div>
                </motion.a>
          </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
              className="relative rounded-2xl p-8 bg-gradient-to-br from-black/60 to-black/30 border border-purple-500/30 backdrop-blur-xl"
              style={{
                boxShadow: "0 0 60px rgba(138, 43, 226, 0.15)",
              }}
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your name</label>
                  <input
                    required
                    className="w-full rounded-xl border border-purple-500/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Work email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-purple-500/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project brief</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-purple-500/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold py-3.5 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
                >
                  {sent ? "Thanks — we'll reply soon ✓" : "Send message"}
                </motion.button>
                
                <p className="text-xs text-gray-500 text-center">
                  By sending, you agree to be contacted about your inquiry.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
                <span className="font-bold text-white block">{COMPANY.name}</span>
                <span className="text-xs text-gray-500">AI-Driven Development</span>
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
              <div className="h-px w-12 md:h-4 md:w-px bg-purple-500/20" />
              <p className="text-gray-500">
                © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
              </p>
            </div>
          </div>
          
          {/* Subtle gradient line at bottom */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        </div>
      </footer>
    </div>
  );
}
