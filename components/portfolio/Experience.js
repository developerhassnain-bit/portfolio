"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { Octahedron, Float } from "./Scene3D";
import { AnimatedHeading } from "./AnimatedHeading";

const items = [
  {
    type: "work",
    role: "Full Stack Web Developer",
    company: "Freelance / Remote",
    period: "2023 - Present",
    desc: "Developing and deploying multiple full-stack web apps using MERN & Next.js. Designing modern responsive UI/UX and implementing secure authentication, real-time client systems, and payment gateways.",
    accent: "cyan",
    tech: ["MERN & Next.js", "Authentication", "Payment Systems", "Responsive UI"]
  },
  {
    type: "work",
    role: "Full Stack Web Developer",
    company: "Asians Technologies (Software House)",
    period: "2024 - Present",
    desc: "Built full-stack apps using MERN & Next.js. Developed multiple client projects including stock trading, crypto, solar, and business web portals. Integrated real-time API integrations and managed live app deployments.",
    accent: "purple",
    tech: ["MERN Stack", "Real-Time APIs", "Stock & Crypto Portals", "Deployments"]
  },
  {
    type: "edu",
    role: "ADP Computer Science (Ongoing)",
    company: "Riphah International University",
    period: "2026 - Present",
    desc: "Acquiring deep theoretical and practical knowledge in software engineering structures, database management systems, algorithms, and networks.",
    accent: "pink",
    tech: ["Software Engineering", "DBMS", "Algorithms", "Computer Networks"]
  },
  {
    type: "edu",
    role: "Intermediate (ICS)",
    company: "Vital College",
    period: "2023 - 2025",
    desc: "Learned fundamental concepts of computing, mathematical logic design, algorithms, flowchart logic, and baseline coding structures.",
    accent: "cyan",
    tech: ["Computer Science", "Mathematics", "Logic Design", "ICS"]
  }
];

function TimelineCard({ item, index, activeIndex, setActiveIndex }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isActive = activeIndex === index;
  const color = item.accent === "cyan" ? "rgb(0, 240, 255)" : item.accent === "purple" ? "rgb(189, 0, 255)" : "rgb(255, 0, 122)";
  const colorAlpha = item.accent === "cyan" ? "rgba(0, 240, 255, 0.08)" : item.accent === "purple" ? "rgba(189, 0, 255, 0.08)" : "rgba(255, 0, 122, 0.08)";
  const Icon = item.type === "work" ? Briefcase : GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setHovered(true);
        setActiveIndex(index);
      }}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/30 p-6 md:p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-border/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      data-cursor="hover"
    >
      {/* Spotlight cursor tracking */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, ${colorAlpha}, transparent 80%)`,
        }}
      />

      {/* Cyber corners */}
      <div className="absolute left-4 top-4 size-3 border-l border-t transition-colors duration-300" style={{ borderColor: hovered || isActive ? color : "var(--border)" }} />
      <div className="absolute right-4 top-4 size-3 border-r border-t transition-colors duration-300" style={{ borderColor: hovered || isActive ? color : "var(--border)" }} />
      <div className="absolute left-4 bottom-4 size-3 border-l border-b transition-colors duration-300" style={{ borderColor: hovered || isActive ? color : "var(--border)" }} />
      <div className="absolute right-4 bottom-4 size-3 border-r border-b transition-colors duration-300" style={{ borderColor: hovered || isActive ? color : "var(--border)" }} />

      <div className="relative z-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10px] font-bold tracking-wider" style={{ color: hovered || isActive ? color : "var(--muted-foreground)" }}>
                {"// 0" + (index + 1)}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">· {item.type.toUpperCase()}</span>
            </div>
            <h3 className="font-display text-xl font-extrabold text-foreground group-hover:text-foreground">{item.role}</h3>
            <div className="text-sm font-bold mt-0.5" style={{ color: hovered || isActive ? color : "currentColor" }}>{item.company}</div>
          </div>

          <div 
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider bg-background/50 border rounded-full px-3 py-1 self-start sm:self-center transition-all duration-300"
            style={{ borderColor: hovered || isActive ? color : "var(--border)" }}
          >
            <Calendar className="size-3" style={{ color: hovered || isActive ? color : "currentColor" }} />
            {item.period}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground mb-6">{item.desc}</p>

        {/* Tech caps */}
        <div className="flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span 
              key={t}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border bg-background/40 border-border/80 transition-colors duration-300 group-hover:border-border/30 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeColor = items[activeIndex].accent === "cyan" ? "rgb(0, 240, 255)" : items[activeIndex].accent === "purple" ? "rgb(189, 0, 255)" : "rgb(255, 0, 122)";
  const activeGlow = items[activeIndex].accent === "cyan" ? "rgba(0, 240, 255, 0.05)" : items[activeIndex].accent === "purple" ? "rgba(189, 0, 255, 0.05)" : "rgba(255, 0, 122, 0.05)";

  return (
    <section id="experience" className="relative px-6 py-32 border-b border-border/60 overflow-hidden bg-gradient-to-b from-background via-surface to-background dark:from-[#030303] dark:via-[#0a040f] dark:to-[#030303]">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 size-96 rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-neon-cyan">// History</div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            <AnimatedHeading text="My journey." highlightWords={["journey"]} />
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:items-start relative">
          
          {/* Left Column: Interactive Telemetry HUD (Sticky on desktop) */}
          <div className="lg:sticky lg:top-32 relative rounded-[2.5rem] border border-border bg-card/25 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
            {/* Dynamic backdrop glow in HUD card */}
            <div 
              className="absolute -inset-6 rounded-[2.5rem] blur-3xl opacity-50 pointer-events-none transition-all duration-700" 
              style={{ background: `radial-gradient(circle, ${activeGlow} 10%, transparent 60%)` }}
            />

            {/* Floating 3D Octahedron shape behind details */}
            <Float className="absolute right-4 top-4 pointer-events-none hidden sm:block z-0 opacity-40" y={8} duration={5}>
              <Octahedron size={90} />
            </Float>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  // TELEMETRY_STATE_0{activeIndex + 1}
                </div>
                
                {/* Large animated Date HUD */}
                <div className="h-16 flex items-center mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="font-display text-3xl sm:text-4xl font-extrabold text-gradient-neon animate-gradient-x leading-none"
                    >
                      {items[activeIndex].period}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Console Log details */}
                <div className="space-y-4 font-mono text-[11px] border-t border-border/40 pt-6">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-muted-foreground text-[8px] uppercase tracking-wider">active_role</span>
                    <span className="text-foreground font-extrabold text-xs transition-colors duration-300" style={{ color: activeColor }}>
                      {items[activeIndex].role.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-muted-foreground text-[8px] uppercase tracking-wider">organization</span>
                    <span className="text-foreground font-semibold">{items[activeIndex].company.toUpperCase()}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-muted-foreground text-[8px] uppercase tracking-wider">sector_branch</span>
                    <span className="text-foreground/90 font-medium">
                      {items[activeIndex].type === "work" ? "SYS_PRODUCTION" : "SYS_ACADEMICS"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Graphical linear slider gauge */}
              <div className="mt-8 pt-6 border-t border-border/40">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-1 rounded-full bg-border/40">
                    <motion.div 
                      className="absolute left-0 w-full h-6 rounded-full"
                      style={{ backgroundColor: activeColor, boxShadow: `0 0 10px ${activeColor}` }}
                      animate={{ y: activeIndex * 26 }} // dynamic offset
                      transition={{ type: "spring", stiffness: 120, damping: 15 }}
                    />
                  </div>
                  <div className="font-mono text-[10px] space-y-4">
                    {items.map((it, idx) => (
                      <div 
                        key={idx} 
                        className="transition-colors duration-300 font-bold"
                        style={{ color: activeIndex === idx ? activeColor : "var(--muted-foreground)" }}
                      >
                        POINT_0{idx + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Cards Timeline list */}
          <div className="grid gap-8">
            {items.map((item, i) => (
              <TimelineCard 
                key={i} 
                item={item} 
                index={i} 
                activeIndex={activeIndex} 
                setActiveIndex={setActiveIndex} 
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
