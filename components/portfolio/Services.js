"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Layers, Rocket, Zap } from "lucide-react";
import { WireSphere } from "./Scene3D";
import { AnimatedHeading } from "./AnimatedHeading";

const services = [
  { n: "01", icon: Code2, title: "Full-stack Development", desc: "End-to-end MERN & Next.js applications with clean architecture, custom hooks, and scalable REST/GraphQL APIs.", accent: "cyan", tags: ["Next.js", "React", "Node.js", "MongoDB", "REST/GraphQL"] },
  { n: "02", icon: Layers, title: "Interactive UI/UX", desc: "High-fidelity kinetic interfaces powered by Framer Motion, customized shaders, and modern responsive layouts.", accent: "purple", tags: ["Framer Motion", "Tailwind CSS", "GSAP", "Micro-Interactions"] },
  { n: "03", icon: Rocket, title: "Performance Tuning", desc: "Core Web Vitals optimization, lazy loading systems, Edge runtime deployments, and search engine optimization (SEO).", accent: "pink", tags: ["Web Vitals", "Lighthouse 100", "SEO Audit", "Vercel Edge"] },
  { n: "04", icon: Zap, title: "API & Integrations", desc: "Robust Express/Node backends, MongoDB aggregation pipelines, authentication flows, and payment gateway connectors.", accent: "cyan", tags: ["Express.js", "Aggregation", "JWT/Auth", "Stripe API"] },
];

function ServiceCard({ s, i }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Define accent colors matching our design system
  const color = s.accent === "cyan" ? "rgb(0, 240, 255)" : s.accent === "purple" ? "rgb(189, 0, 255)" : "rgb(255, 0, 122)";
  const colorAlpha = s.accent === "cyan" ? "rgba(0, 240, 255, 0.08)" : s.accent === "purple" ? "rgba(189, 0, 255, 0.08)" : "rgba(255, 0, 122, 0.08)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/30 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-border/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      data-cursor="hover"
    >
      {/* Spotlight Radial Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${colorAlpha}, transparent 80%)`,
        }}
      />

      {/* Cyber Corner HUD Brackets */}
      <div className="absolute left-4 top-4 size-3 border-l border-t transition-colors duration-300" style={{ borderColor: hovered ? color : "var(--border)" }} />
      <div className="absolute right-4 top-4 size-3 border-r border-t transition-colors duration-300" style={{ borderColor: hovered ? color : "var(--border)" }} />
      <div className="absolute left-4 bottom-4 size-3 border-l border-b transition-colors duration-300" style={{ borderColor: hovered ? color : "var(--border)" }} />
      <div className="absolute right-4 bottom-4 size-3 border-r border-b transition-colors duration-300" style={{ borderColor: hovered ? color : "var(--border)" }} />

      <div className="relative z-10">
        {/* Top bar info */}
        <div className="flex items-center justify-between mb-8">
          <div className="font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-300" style={{ color: hovered ? color : "var(--muted-foreground)" }}>
            {"// " + s.n}
          </div>
          
          {/* Glowing Icon holder */}
          <div 
            className="size-12 rounded-xl border flex items-center justify-center transition-all duration-500"
            style={{
              borderColor: hovered ? color : "var(--border)",
              background: hovered ? colorAlpha : "rgba(255, 255, 255, 0.02)",
              boxShadow: hovered ? `0 0 15px ${colorAlpha}` : "none",
            }}
          >
            <s.icon className="size-5 transition-transform duration-500 group-hover:scale-110" style={{ color: hovered ? color : "currentColor" }} />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl font-bold mb-4 tracking-tight text-foreground transition-colors duration-300 group-hover:text-foreground">
          {s.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground mb-8">
          {s.desc}
        </p>

        {/* Capsule Deliverables */}
        <div className="flex flex-wrap gap-2">
          {s.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 rounded-full text-[10px] font-mono border bg-background/50 border-border/80 transition-colors duration-300 group-hover:border-border/40 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative px-6 py-32 border-b border-border/60 bg-gradient-to-b from-background via-surface to-background dark:from-[#030303] dark:via-[#02080a] dark:to-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-neon-cyan/5 blur-[150px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row relative">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-neon-cyan">// Services</div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              <AnimatedHeading text="What I deliver." highlightWords={["deliver"]} />
            </h2>
            <p className="mt-4 max-w-sm text-muted-foreground">Four focused practices for shipping products that push the modern web forward.</p>
          </div>
          
          {/* 3D WireSphere floating on the right of the header */}
          <div className="relative size-60 hidden md:flex items-center justify-center shrink-0">
            <WireSphere size={180} />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
