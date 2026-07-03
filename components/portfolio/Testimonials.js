"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { AnimatedHeading } from "./AnimatedHeading";

const testimonials = [
  {
    quote: "Hassnain was incredibly fast and precise. He migrated our dashboard to Next.js App Router and cut codebase complexity. Our site speed and SEO scores shot up almost instantly.",
    name: "Sarah Jenkins",
    role: "CTO, Lumina Systems"
  },
  {
    quote: "Working with Hassnain on our AI chat tool was a breeze. His deep understanding of Node, MongoDB, and WebSockets made the complex real-time messaging pipeline extremely solid.",
    name: "Ahmad Rayan",
    role: "Product Manager, Cipher Labs"
  },
  {
    quote: "The micro-animations and kinetic interfaces Hassnain built for our marketplace are stunning! He has an excellent eye for premium UI details that really elevate the brand.",
    name: "Elena Rostova",
    role: "Creative Director, Nebula"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-32 border-b border-border/60 bg-gradient-to-b from-background via-surface to-background dark:from-[#030303] dark:via-[#08040d] dark:to-[#030303]">
      <div className="absolute inset-0 bg-grid opacity-20" />
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-neon-purple/5 blur-[150px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-neon-cyan">// Reviews</div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            <AnimatedHeading text="Client feedback." highlightWords={["feedback"]} />
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative group rounded-3xl border border-border bg-card/50 p-8 backdrop-blur transition-all duration-300 hover:border-neon-cyan/30 hover:bg-card/75"
              data-cursor="hover"
            >
              <Quote className="absolute right-8 top-8 size-10 text-muted-foreground/10 transition-colors duration-300 group-hover:text-neon-cyan/20" />
              
              <div className="relative">
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground italic">
                  "{t.quote}"
                </p>
                
                <div className="border-t border-border/50 pt-4">
                  <div className="font-display text-sm font-bold text-foreground">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
