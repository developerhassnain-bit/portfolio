"use client";

import { motion } from "framer-motion";
import { Float, TechCube, Octahedron } from "./Scene3D";
import { AnimatedHeading } from "./AnimatedHeading";

const steps = [
  { n: "01", title: "Discovery", desc: "Deep-dive workshops to map user flows, technical goals, database design, and edge cases." },
  { n: "02", title: "Architecture", desc: "System architecture, folder structures, framework choices, and concrete API schemas." },
  { n: "03", title: "Build", desc: "Rapid iterative sprints with weekly deployment demos, code reviews, and unit test logs." },
  { n: "04", title: "Launch", desc: "Deploying to serverless edge platforms, tuning Core Web Vitals, SEO audits, and shipping." },
];

export function Process() {
  return (
    <section id="process" className="relative px-6 py-32 border-b border-border/60 overflow-hidden bg-gradient-to-b from-background via-surface to-background dark:from-[#030303] dark:via-[#02080a] dark:to-[#030303]">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-neon-cyan/5 blur-[150px] pointer-events-none" />
      
      {/* Floating 3D shapes in background */}
      <Float className="pointer-events-none absolute left-12 top-24 hidden xl:block" y={15} duration={5}>
        <TechCube size={90} />
      </Float>
      <Float className="pointer-events-none absolute right-12 bottom-24 hidden xl:block" y={12} duration={6} delay={1.5}>
        <Octahedron size={80} />
      </Float>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-neon-cyan">// Process</div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            <AnimatedHeading text="From idea to shipped." highlightWords={["shipped"]} />
          </h2>
        </div>

        {/* Desktop Layout: Animated SVG Map path */}
        <div className="relative hidden lg:block h-[420px] w-full mt-12">
          {/* animated winding path svg */}
          <svg 
            className="absolute inset-x-0 top-0 h-full w-full pointer-events-none" 
            viewBox="0 0 1000 420" 
            preserveAspectRatio="none"
          >
            {/* Background Path */}
            <path 
              d="M 50 150 C 200 40, 300 380, 500 210 C 700 40, 800 380, 950 210" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.06)" 
              strokeWidth="4" 
            />
            {/* Animated Path Overlay */}
            <path 
              d="M 50 150 C 200 40, 300 380, 500 210 C 700 40, 800 380, 950 210" 
              fill="none" 
              stroke="url(#process-path-grad)" 
              strokeWidth="4" 
              strokeDasharray="20, 20" 
              className="animate-dash" 
            />
            <defs>
              <linearGradient id="process-path-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-neon-cyan)" />
                <stop offset="50%" stopColor="var(--color-neon-purple)" />
                <stop offset="100%" stopColor="var(--color-neon-pink)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Staggered process cards on the path */}
          <div className="relative flex justify-between w-full h-full items-center px-12 z-10">
            {steps.map((s, i) => {
              const isUp = i % 2 === 0;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: isUp ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`relative w-[210px] group ${isUp ? "-translate-y-24" : "translate-y-24"}`}
                  data-cursor="hover"
                >
                  {/* Card Container */}
                  <div className="rounded-2xl border border-border bg-card/65 p-5 backdrop-blur transition-all duration-300 hover:border-neon-cyan/40 hover:shadow-[0_10px_30px_rgba(0,240,255,0.08)]">
                    <div className="mb-2 font-display text-4xl font-extrabold text-gradient-neon">{s.n}</div>
                    <h3 className="mb-1 font-display text-lg font-bold text-foreground transition-colors group-hover:text-neon-cyan">
                      {s.title}
                    </h3>
                    <p className="text-[11px] leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>

                  {/* Connected Node Dot */}
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 size-4 rounded-full border-4 border-background transition-all duration-300 ${
                      isUp 
                        ? "-bottom-12 bg-neon-cyan shadow-[0_0_10px_#00f0ff] group-hover:scale-125 group-hover:shadow-[0_0_15px_#00f0ff]" 
                        : "-top-12 bg-neon-purple shadow-[0_0_10px_#bd00ff] group-hover:scale-125 group-hover:shadow-[0_0_15px_#bd00ff]"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout: Animated Vertical Timeline */}
        <div className="relative lg:hidden pl-12 md:pl-20 mt-12 py-4">
          {/* Animated vertical track */}
          <div className="absolute left-6 md:left-10 top-0 h-full w-[2px] bg-border/40" />
          <svg 
            className="absolute left-6 md:left-10 top-0 h-full w-2 pointer-events-none" 
            viewBox="0 0 10 500" 
            preserveAspectRatio="none"
          >
            <line 
              x1="5" 
              y1="0" 
              x2="5" 
              y2="500" 
              stroke="var(--color-neon-cyan)" 
              strokeWidth="3" 
              strokeDasharray="10, 10" 
              className="animate-dash" 
            />
          </svg>

          {/* Cards vertical mapping */}
          <div className="grid gap-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
                data-cursor="hover"
              >
                {/* Node dot on vertical path */}
                <div className="absolute -left-12 md:-left-20 top-8 -translate-x-1/2 size-4 rounded-full bg-neon-cyan border-4 border-background shadow-[0_0_10px_#00f0ff] transition-transform duration-300 group-hover:scale-125" />
                
                {/* Info Card */}
                <div className="rounded-2xl border border-border bg-card/65 p-6 backdrop-blur transition-all duration-300 hover:border-neon-cyan/40">
                  <div className="mb-3 font-display text-4xl font-extrabold text-gradient-neon">{s.n}</div>
                  <h3 className="mb-2 font-display text-xl font-bold text-foreground transition-colors group-hover:text-neon-cyan">
                    {s.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
