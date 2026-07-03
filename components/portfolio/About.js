"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ChipStack } from "./Scene3D";
import { AnimatedHeading } from "./AnimatedHeading";

const skills = [
  { name: "React / Frontend", level: 95, desc: "Interactive client states, virtual DOM, custom hooks", accent: "cyan" },
  { name: "Next.js / SSR", level: 90, desc: "SEO routers, static builds, API routers optimization", accent: "purple" },
  { name: "Node.js / Express", level: 92, desc: "REST/GraphQL server channels, middleware pipelines", accent: "pink" },
  { name: "MongoDB / DBs", level: 88, desc: "Aggregation pipelines, indexing, relational scaling", accent: "cyan" }
];

function TypewriterText({ text, speed = 10, delay = 0, trigger = false }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!trigger) return;

    let index = 0;
    let timer;

    const startTimeout = setTimeout(() => {
      setStarted(true);
      timer = setInterval(() => {
        if (index < text.length) {
          const char = text[index];
          setDisplayedText((prev) => prev + char);
          index++;
        } else {
          clearInterval(timer);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(timer);
    };
  }, [trigger, text, speed, delay]);

  return (
    <span>
      {displayedText}
      {started && displayedText.length < text.length && (
        <span className="inline-block h-3.5 w-1.5 bg-neon-cyan animate-pulse ml-0.5 align-middle" />
      )}
    </span>
  );
}

function SkillMeterCard({ s, i }) {
  const [hovered, setHovered] = useState(false);
  
  const color = s.accent === "cyan" ? "rgb(0, 240, 255)" : s.accent === "purple" ? "rgb(189, 0, 255)" : "rgb(255, 0, 122)";
  const segmentsCount = 10;
  const filledSegments = Math.round(s.level / 10);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/25 p-5 backdrop-blur transition-all duration-500 hover:border-border/80 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
      data-cursor="hover"
    >
      {/* Corner HUD Brackets */}
      <div className="absolute left-3 top-3 size-2 border-l border-t transition-colors duration-300" style={{ borderColor: hovered ? color : "var(--border)" }} />
      <div className="absolute right-3 top-3 size-2 border-r border-t transition-colors duration-300" style={{ borderColor: hovered ? color : "var(--border)" }} />
      <div className="absolute left-3 bottom-3 size-2 border-l border-b transition-colors duration-300" style={{ borderColor: hovered ? color : "var(--border)" }} />
      <div className="absolute right-3 bottom-3 size-2 border-r border-b transition-colors duration-300" style={{ borderColor: hovered ? color : "var(--border)" }} />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-display text-sm font-bold text-foreground transition-colors duration-300" style={{ color: hovered ? color : "currentColor" }}>
            {s.name}
          </h4>
          <span className="font-mono text-[10px] font-bold text-muted-foreground" style={{ color: hovered ? color : "var(--muted-foreground)" }}>
            {s.level}%
          </span>
        </div>
        <p className="text-[10px] leading-relaxed text-muted-foreground mb-4 h-8 overflow-hidden">{s.desc}</p>
        
        {/* Animated Segment Progress Bar */}
        <div className="flex gap-0.5">
          {Array.from({ length: segmentsCount }).map((_, idx) => {
            const isFilled = idx < filledSegments;
            const delayTime = idx * 25;
            return (
              <div
                key={idx}
                className="h-1.5 w-full rounded-[1px] transition-all duration-300"
                style={{
                  backgroundColor: hovered && isFilled
                    ? color
                    : isFilled
                      ? "rgba(255, 255, 255, 0.22)"
                      : "rgba(255, 255, 255, 0.04)",
                  boxShadow: hovered && isFilled ? `0 0 8px ${color}` : "none",
                  transitionDelay: hovered ? `${delayTime}ms` : "0ms",
                }}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export function About() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const p1 = "I am a passionate and results-driven Full Stack Web Developer with 3+ years of hands-on experience and 1+ year of professional client work. I specialize in building scalable, high-performance web applications with modern UI/UX.";
  const p2 = "I possess a strong problem-solving mindset with a focus on clean, efficient code, modern architectural patterns, and responsive details.";

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative px-6 py-32 overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-surface to-background dark:from-[#030303] dark:via-[#03060d] dark:to-[#030303]"
    >
      {/* Floating 3D stack of glass microchip plates (section background decoration) */}
      <ChipStack className="absolute -right-8 top-12 z-0 opacity-20 pointer-events-none hidden lg:block" size={180} />

      <div className="mx-auto max-w-4xl relative z-10 text-center">
        {/* About Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-neon-cyan font-mono">
          <Sparkles className="size-3" /> About Me
        </div>
        
        {/* Title */}
        <h2 className="mb-10 font-display text-4xl font-bold leading-tight tracking-tighter sm:text-6xl lg:text-[72px]">
          <AnimatedHeading text="Hi, I'm Ali Hassnain." highlightWords={["Ali", "Hassnain"]} />
        </h2>

        {/* Typewriter Paragraphs block */}
        <div className="mb-16 min-h-[160px] text-sm leading-relaxed text-muted-foreground text-left max-w-2xl mx-auto space-y-6 border-l-2 border-neon-cyan/30 pl-6 py-1 font-mono">
          <p>
            <TypewriterText text={p1} speed={10} delay={400} trigger={inView} />
          </p>
          <p>
            <TypewriterText text={p2} speed={10} delay={2800} trigger={inView} />
          </p>
        </div>

        {/* Skills Grid - 4 columns at the bottom */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {skills.map((s, i) => (
            <SkillMeterCard key={s.name} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
