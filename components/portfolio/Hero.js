"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import portrait from "@/assets/hero.png";
import { CodePanel, WireSphere } from "./Scene3D";
import { AnimatedHeading } from "./AnimatedHeading";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-36 pb-24 md:pt-40 md:pb-28 bg-gradient-to-b from-background via-surface to-background dark:from-[#020202] dark:via-[#06040a] dark:to-[#030303]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -left-40 top-1/4 size-[500px] rounded-full bg-neon-purple/20 animate-pulse-glow" />
      <div className="absolute -right-40 bottom-1/4 size-[500px] rounded-full bg-neon-cyan/15 animate-pulse-glow [animation-delay:1.5s]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-neon-cyan"
          >
            <Sparkles className="size-3 animate-spin" style={{ animationDuration: '3s' }} />
            Next.js & MERN Specialist
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[0.9] tracking-tighter sm:text-7xl lg:text-[104px] lg:leading-[94px]">
            <AnimatedHeading text="BUILDING" className="block" />
            <AnimatedHeading text="THE FUTURE" highlightWords={["FUTURE"]} className="block" />
            <AnimatedHeading text="WEB." className="block" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            Full-stack engineer crafting scalable, high-performance digital experiences with Next.js, React, and the modern MERN stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="group relative overflow-hidden rounded-full p-[1px]" data-cursor="hover">
              <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-gradient-x" />
              <span className="relative flex items-center gap-2 rounded-full bg-background px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors group-hover:bg-transparent group-hover:text-background">
                View Projects
              </span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-border px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:border-neon-cyan hover:text-neon-cyan"
              data-cursor="hover"
            >
              Let's Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground"
          >
            <ArrowDown className="size-4 animate-bounce" />
            Scroll to explore
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Glow ring */}
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink opacity-60 blur-2xl animate-pulse-glow" />

          {/* Floating 3D Robot side-profile head (depth overlay) */}
          <motion.div
            className="absolute -top-14 -left-14 size-44 z-20 pointer-events-none hidden md:block"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/robot2.png"
              alt="AI Robot Profile"
              width={176}
              height={176}
              className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,240,255,0.3)]"
            />
          </motion.div>

          {/* 3D wire sphere floating in background top-right */}
          <WireSphere className="absolute -right-20 -top-16 z-0 hidden md:block" size={150} />

          {/* 3D code panel floating foreground bottom-left */}
          <CodePanel className="absolute -left-24 -bottom-10 z-30 hidden md:block" size={230} />

          {/* Frame */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border glass">
            <div className="absolute inset-0 rounded-[2rem] p-[1.5px]">
              <div className="h-full w-full rounded-[2rem] bg-gradient-to-br from-neon-cyan/40 via-transparent to-neon-purple/40" />
            </div>

            <motion.div
              className="relative h-full w-full rounded-[2rem] overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={portrait}
                alt="Hassnain - Portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover rounded-[2rem]"
              />
            </motion.div>

            {/* HUD overlays */}
            <div className="pointer-events-none absolute inset-0 rounded-[2rem]">
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-[10px] font-mono backdrop-blur">
                <span className="size-1.5 animate-pulse rounded-full bg-neon-cyan" /> ONLINE
              </div>
              <div className="absolute bottom-4 right-4 rounded-full bg-background/60 px-3 py-1 text-[10px] font-mono backdrop-blur">
                v4.02 · 2026
              </div>
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/60 px-3 py-2 text-[10px] font-mono backdrop-blur">
                <div className="text-muted-foreground text-[8px] uppercase tracking-wider">location</div>
                <div className="font-semibold text-foreground">REMOTE_01</div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-1/4 hidden rounded-2xl glass p-4 shadow-2xl md:block border border-border"
          >
            <div className="text-2xl font-display font-bold text-neon-cyan">50+</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Projects</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 bottom-1/4 hidden rounded-2xl glass p-4 shadow-2xl md:block border border-border"
          >
            <div className="text-2xl font-display font-bold text-neon-purple">4y+</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Experience</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
