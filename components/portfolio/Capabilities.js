"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { AnimatedHeading } from "./AnimatedHeading";

const websites = [
  "Wedding", "Travel", "Pet / Zoo", "Forum",
  "Gallery", "Photographer", "Entertainment", "Sales Funnel",
  "Click Funnel", "Agency", "Landing Page", "Doctors",
  "News / Blog", "Magazine", "School", "University",
  "Startup", "NFT / Crypto", "Interactive", "Kid-Friendly",
  "Membership", "Subscription", "Gaming", "Polling",
  "Consulting", "Real Estate", "Portfolio", "Ecommerce",
  "Job Board", "Brochure", "Government",
];

const palette = ["neon-cyan", "neon-purple", "neon-pink"];

const ROW_HEIGHT_PCT = 8; // Percentage of mug height per row
const PER_ROW = 4;

export function Capabilities() {
  const drops = useMemo(() => {
    return websites.map((label, i) => {
      // Deterministic pseudo-random seed generator
      const seed = (i * 9301 + 49297) % 233280;
      const rand = (n) => ((seed * (n + 1)) % 1000) / 1000;

      const row = Math.floor(i / PER_ROW); // Stacks upward from row 0
      const col = i % PER_ROW;
      
      // Calculate stacking resting positions within the jar borders (12% to 88% width)
      const bottomPct = 8 + row * ROW_HEIGHT_PCT;
      const spacing = 76 / (PER_ROW + 1);
      const leftPct = 12 + spacing * (col + 1) + (rand(1) - 0.5) * 4;

      // Badges enter strictly from the top mouth of the jar (42% to 58% width)
      const startLeftPct = 42 + rand(2) * 16;
      const delay = i * 0.22; // Sequential drop delay
      const rotate = (rand(3) - 0.5) * 20;

      return {
        label,
        color: palette[i % palette.length],
        startLeftPct,
        leftPct,
        bottomPct,
        delay,
        rotate,
      };
    });
  }, []);

  const totalCycle = drops.length * 0.22 + 4.0;

  return (
    <section id="capabilities" className="relative overflow-hidden border-b border-border/60 px-6 py-32 bg-gradient-to-b from-background via-surface to-background dark:from-[#030303] dark:via-[#08040d] dark:to-[#030303]">
      <div className="absolute inset-0 bg-grid opacity-20" />
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 size-[400px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 size-[400px] rounded-full bg-neon-pink/5 blur-[120px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-neon-cyan">// What I Can Build</div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            <AnimatedHeading text="Endless possibilities," highlightWords={["possibilities"]} className="block" />
            <AnimatedHeading text="served hot." className="block" />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Every idea drops into the mug and stacks up. Pick one and let's brew it into a high-performing product.
          </p>
        </div>

        {/* Mug Container */}
        <div className="relative mx-auto flex w-full max-w-2xl justify-center">
          {/* Steam Elements */}
          <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 z-20">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute h-20 w-1.5 rounded-full bg-gradient-to-t from-neon-cyan/0 via-neon-cyan/30 to-transparent blur-[2px]"
                style={{ left: (i - 1) * 24 }}
                animate={{ 
                  y: [10, -60, 10], 
                  opacity: [0.1, 0.5, 0.1],
                  scaleX: [1, 1.5, 1] 
                }}
                transition={{ 
                  duration: 4 + i * 0.6, 
                  repeat: Infinity, 
                  delay: i * 0.5,
                  ease: "easeInOut" 
                }}
              />
            ))}
          </div>

          <div className="relative flex w-full items-end justify-center gap-2">
            {/* Mug Handle */}
            <div className="mb-12 hidden h-44 w-20 shrink-0 rounded-l-[2.5rem] border-4 border-r-0 border-neon-cyan/40 sm:block shadow-[0_0_15px_rgba(0,240,255,0.05)]" />

            {/* Mug Body Frame */}
            <div className="relative aspect-[4/5] w-full max-w-md">
              {/* Backglow element */}
              <div className="absolute inset-4 rounded-b-[3rem] rounded-t-3xl bg-gradient-to-b from-neon-purple/20 to-neon-cyan/20 blur-3xl" />

              {/* Jar border structure */}
              <div className="relative h-full w-full overflow-hidden rounded-b-[2.8rem] rounded-t-3xl border-4 border-neon-cyan/50 bg-background/50 backdrop-blur-xl">
                {/* Lip shine overlay */}
                <div className="absolute inset-x-4 top-3 h-4 rounded-full bg-gradient-to-b from-white/10 to-transparent" />

                {/* Stacking elements mapping */}
                {drops.map((d, i) => {
                  const fallDuration = 0.9;
                  const settleDuration = 0.45;
                  const holdDuration = totalCycle - d.delay - fallDuration - settleDuration - 0.4;
                  
                  return (
                    <motion.div
                      key={d.label + i}
                      className="absolute"
                      style={{ top: 0, left: 0 }}
                      initial={{
                        x: `calc(${d.startLeftPct}*1% - 50%)`,
                        y: -30,
                        opacity: 0,
                        rotate: d.rotate,
                      }}
                      animate={{
                        // 1. Spawns and enters at top center
                        // 2. Falls with gravity down into the mug
                        // 3. Slides/settles horizontally into its resting stack position
                        // 4. Sits in place (hold)
                        // 5. Fades out, ready to loop
                        left: [
                          `${d.startLeftPct}%`, 
                          `${d.startLeftPct}%`, 
                          `${d.startLeftPct}%`, 
                          `${d.leftPct}%`, 
                          `${d.leftPct}%`, 
                          `${d.startLeftPct}%`
                        ],
                        top: [
                          "-10%", 
                          "0%", 
                          `${100 - d.bottomPct}%`, 
                          `${100 - d.bottomPct}%`, 
                          `${100 - d.bottomPct}%`, 
                          "-10%"
                        ],
                        opacity: [0, 1, 1, 1, 1, 0],
                        rotate: [d.rotate, d.rotate, d.rotate / 2, 0, 0, d.rotate],
                      }}
                      transition={{
                        duration: totalCycle,
                        times: [
                          0,
                          d.delay / totalCycle,
                          (d.delay + fallDuration) / totalCycle,
                          (d.delay + fallDuration + settleDuration) / totalCycle,
                          (d.delay + fallDuration + settleDuration + Math.max(holdDuration, 0.1)) / totalCycle,
                          1,
                        ],
                        ease: ["linear", "easeIn", "easeInOut", "linear", "easeOut"],
                        repeat: Infinity,
                      }}
                    >
                      <span
                        className="-translate-x-1/2 whitespace-nowrap rounded-full border px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider font-semibold"
                        style={{
                          borderColor: `var(--color-${d.color})`,
                          color: `var(--color-${d.color})`,
                          backgroundColor: `color-mix(in oklch, var(--color-${d.color}) 8%, transparent)`,
                          display: "inline-block",
                          boxShadow: `0 0 10px color-mix(in oklch, var(--color-${d.color}) 15%, transparent)`,
                        }}
                      >
                        {d.label}
                      </span>
                    </motion.div>
                  );
                })}

                {/* Bottom glass reflection gradient */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/90 via-background/40 to-transparent pointer-events-none" />
              </div>

              {/* Mug bottom base coaster glow */}
              <div className="mx-auto h-3 w-4/5 rounded-b-3xl bg-neon-cyan/35 blur-sm" />
            </div>
          </div>
        </div>

        {/* Full Menu grid list */}
        <div className="mt-24">
          <div className="mb-8 text-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            [ Full Website Menu ]
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {websites.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 12) * 0.03 }}
                className="cursor-default rounded-full border border-border bg-card/45 px-4.5 py-2 text-xs font-medium text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_12px_rgba(0,240,255,0.2)]"
              >
                {w} Website
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
