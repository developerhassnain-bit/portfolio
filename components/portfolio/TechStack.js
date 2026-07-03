"use client";

import { motion } from "framer-motion";
import { IconOrbit } from "./Scene3D";
import { AnimatedHeading } from "./AnimatedHeading";

const tech = [
  { 
    name: "Next.js", 
    cat: "Framework",
    icon: (
      <svg className="size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" />
        <path d="M16 16L9.5 8M15 8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  { 
    name: "React", 
    cat: "Library",
    icon: (
      <svg className="size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse rx="10" ry="3.8" cx="12" cy="12" transform="rotate(30 12 12)" />
        <ellipse rx="10" ry="3.8" cx="12" cy="12" transform="rotate(90 12 12)" />
        <ellipse rx="10" ry="3.8" cx="12" cy="12" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </svg>
    )
  },
  { 
    name: "TypeScript", 
    cat: "Language",
    icon: (
      <svg className="size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 8h4M11 8v8M15 11h2v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  { 
    name: "Node.js", 
    cat: "Runtime",
    icon: (
      <svg className="size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" strokeLinejoin="round" />
        <path d="M12 22V12M12 12L4 7.5M12 12l8-4.5" strokeLinejoin="round" />
      </svg>
    )
  },
  { 
    name: "Express", 
    cat: "Backend",
    icon: (
      <svg className="size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8.5 11L15.5 7M8.5 13L15.5 17" strokeLinecap="round" />
      </svg>
    )
  },
  { 
    name: "MongoDB", 
    cat: "Database",
    icon: (
      <svg className="size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="12" cy="5" rx="7" ry="2.2" />
        <path d="M5 5v5c0 1.2 3 2.2 7 2.2s7-.8 7-2.2V5" />
        <path d="M5 10v5c0 1.2 3 2.2 7 2.2s7-.8 7-2.2v-5" />
        <path d="M5 15v4c0 1.2 3 1.8 7 1.8s7-.4 7-1.8v-4" />
      </svg>
    )
  },
  { 
    name: "PostgreSQL", 
    cat: "Database",
    icon: (
      <svg className="size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" strokeLinecap="round" />
      </svg>
    )
  },
  { 
    name: "Tailwind", 
    cat: "Styling",
    icon: (
      <svg className="size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 3c-1.2 0-2.4.6-3.6 1.8L4.8 8.4C3.6 9.6 3 10.8 3 12s.6 2.4 1.8 3.6l3.6 3.6c1.2 1.2 2.4 1.8 3.6 1.8s2.4-.6 3.6-1.8l3.6-3.6c1.2-1.2 1.8-2.4 1.8-3.6s-.6-2.4-1.8-3.6L15.6 4.8C14.4 3.6 13.2 3 12 3z" strokeLinejoin="round" />
        <path d="M12 7.5a4.5 4.5 0 00-4.5 4.5M16.5 12a4.5 4.5 0 01-4.5 4.5" strokeLinecap="round" />
      </svg>
    )
  },
  { 
    name: "Framer", 
    cat: "Motion",
    icon: (
      <svg className="size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 4h16L12 12z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12l8 8H4z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  { 
    name: "GSAP", 
    cat: "Motion",
    icon: (
      <svg className="size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  { 
    name: "Three.js", 
    cat: "3D",
    icon: (
      <svg className="size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeLinejoin="round" />
        <path d="M3.27 6.96L12 12l8.73-5.04M12 22v-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  { 
    name: "Docker", 
    cat: "DevOps",
    icon: (
      <svg className="size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="5" y="7" width="3.5" height="3.5" rx="0.5" />
        <rect x="10" y="7" width="3.5" height="3.5" rx="0.5" />
        <rect x="15" y="7" width="3.5" height="3.5" rx="0.5" />
        <rect x="5" y="12" width="3.5" height="3.5" rx="0.5" />
        <rect x="10" y="12" width="3.5" height="3.5" rx="0.5" />
        <rect x="15" y="12" width="3.5" height="3.5" rx="0.5" />
        <rect x="10" y="2" width="3.5" height="3.5" rx="0.5" />
        <path d="M2 18h20v1.5H2z" strokeLinecap="round" />
      </svg>
    )
  },
];

export function TechStack() {
  return (
    <section id="stack" className="relative px-6 py-32 border-b border-border/60 bg-gradient-to-b from-background via-surface to-background dark:from-[#030303] dark:via-[#05040a] dark:to-[#030303]">
      <div className="absolute inset-0 bg-grid opacity-20" />
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-neon-purple/5 blur-[130px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center gap-10 md:flex-row md:justify-between md:text-left">
          <div className="text-center md:text-left">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-neon-cyan">// Tech Stack</div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              <AnimatedHeading text="Integrated technologies." highlightWords={["technologies"]} />
            </h2>
          </div>
          <IconOrbit size={260} />
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4 shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
          {tech.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative flex aspect-square flex-col items-center justify-center gap-3 bg-background p-6 transition-all duration-300 hover:bg-card"
              data-cursor="hover"
            >
              {/* Vibrant radial backglow trails */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 via-neon-purple/0 to-neon-pink/0 opacity-0 transition-all duration-500 group-hover:from-neon-cyan/6 group-hover:via-neon-purple/6 group-hover:to-neon-pink/6 group-hover:opacity-100" />
              
              {/* Scaled and highlighted custom SVG vector icon */}
              <div className="relative text-muted-foreground transition-all duration-300 group-hover:text-neon-cyan group-hover:scale-110 mb-2">
                {t.icon}
              </div>
              
              {/* Title Text */}
              <div className="relative font-display text-lg font-bold text-foreground transition-all duration-300 group-hover:text-gradient-neon md:text-xl">
                {t.name}
              </div>
              
              {/* Category Subtitle */}
              <div className="relative text-[9px] font-mono uppercase tracking-widest text-muted-foreground">{t.cat}</div>
              
              {/* Glowing landing indicator dot at bottom */}
              <div className="relative mt-1.5 size-1.5 rounded-full bg-neon-cyan opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 shadow-[0_0_8px_#00f0ff]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
