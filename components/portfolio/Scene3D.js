"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe,
  Terminal,
  Cpu,
  Cloud,
} from "lucide-react";

/** Rotating cube whose faces show code / tech glyphs. */
export function TechCube({ className = "", style, size = 140 }) {
  const half = size / 2;
  const faces = [
    { t: "<>", icon: Code2, color: "var(--color-neon-cyan)", transform: `translateZ(${half}px)` },
    { t: "{}", icon: Braces, color: "var(--color-neon-purple)", transform: `rotateY(180deg) translateZ(${half}px)` },
    { t: "DB", icon: Database, color: "var(--color-neon-pink)", transform: `rotateY(90deg) translateZ(${half}px)` },
    { t: "$_", icon: Terminal, color: "var(--color-neon-cyan)", transform: `rotateY(-90deg) translateZ(${half}px)` },
    { t: "01", icon: Cpu, color: "var(--color-neon-purple)", transform: `rotateX(90deg) translateZ(${half}px)` },
    { t: "//", icon: GitBranch, color: "var(--color-neon-pink)", transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ perspective: 800, width: size, height: size, ...style }}
      aria-hidden
    >
      <div className="relative h-full w-full animate-cube-spin" style={{ transformStyle: "preserve-3d" }}>
        {faces.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl border backdrop-blur-sm"
              style={{
                transform: f.transform,
                borderColor: `color-mix(in oklch, ${f.color} 60%, transparent)`,
                background: `color-mix(in oklch, ${f.color} 10%, transparent)`,
                boxShadow: `0 0 40px color-mix(in oklch, ${f.color} 40%, transparent) inset`,
              }}
            >
              <Icon className="size-6" style={{ color: f.color }} />
              <span className="font-mono text-xs font-bold" style={{ color: f.color }}>
                {f.t}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Wireframe sphere built from stacked rings. */
export function WireSphere({ className = "", style, size = 180 }) {
  const rings = 8;
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ perspective: 900, width: size, height: size, ...style }}
      aria-hidden
    >
      <div className="relative h-full w-full animate-sphere-spin" style={{ transformStyle: "preserve-3d" }}>
        {Array.from({ length: rings }).map((_, i) => {
          const rot = (180 / rings) * i;
          return (
            <div
              key={`h-${i}`}
              className="absolute inset-0 rounded-full border"
              style={{
                borderColor: `color-mix(in oklch, var(--color-neon-cyan) ${60 - i * 4}%, transparent)`,
                transform: `rotateY(${rot}deg)`,
              }}
            />
          );
        })}
        {Array.from({ length: rings }).map((_, i) => {
          const rot = (180 / rings) * i;
          return (
            <div
              key={`v-${i}`}
              className="absolute inset-0 rounded-full border"
              style={{
                borderColor: `color-mix(in oklch, var(--color-neon-purple) ${60 - i * 4}%, transparent)`,
                transform: `rotateX(${rot}deg)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

/** Octahedron (dual-pyramid) made from clipped divs. */
export function Octahedron({ className = "", style, size = 120 }) {
  const face = size / 2;
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ perspective: 800, width: size, height: size, ...style }}
      aria-hidden
    >
      <div className="relative h-full w-full animate-octa-spin" style={{ transformStyle: "preserve-3d" }}>
        {[
          { rot: `rotateY(0deg)`, color: "var(--color-neon-cyan)" },
          { rot: `rotateY(90deg)`, color: "var(--color-neon-purple)" },
          { rot: `rotateY(180deg)`, color: "var(--color-neon-pink)" },
          { rot: `rotateY(270deg)`, color: "var(--color-neon-cyan)" },
        ].map((f, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              width: 0,
              height: 0,
              transform: `translate(-50%, -50%) ${f.rot} translateZ(0px)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute"
              style={{
                left: -face,
                top: -face,
                width: 0,
                height: 0,
                borderLeft: `${face}px solid transparent`,
                borderRight: `${face}px solid transparent`,
                borderBottom: `${size}px solid ${f.color}`,
                opacity: 0.25,
                filter: "blur(0.3px)",
                transformOrigin: "50% 100%",
              }}
            />
            <div
              className="absolute"
              style={{
                left: -face,
                top: 0,
                width: 0,
                height: 0,
                borderLeft: `${face}px solid transparent`,
                borderRight: `${face}px solid transparent`,
                borderTop: `${size}px solid ${f.color}`,
                opacity: 0.25,
                transformOrigin: "50% 0%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Ring of tech icons orbiting on a tilted plane. */
export function IconOrbit({ className = "", style, size = 240 }) {
  const icons = [Code2, Database, Globe, Cpu, Cloud, Terminal, Braces, GitBranch];
  const radius = size / 2 - 18;
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ perspective: 900, width: size, height: size, ...style }}
      aria-hidden
    >
      <div
        className="relative h-full w-full animate-orbit-spin"
        style={{ transformStyle: "preserve-3d", transform: "rotateX(65deg)" }}
      >
        {icons.map((Icon, i) => {
          const a = (i / icons.length) * Math.PI * 2;
          const x = Math.cos(a) * radius;
          const y = Math.sin(a) * radius;
          const color =
            i % 3 === 0 ? "var(--color-neon-cyan)" : i % 3 === 1 ? "var(--color-neon-purple)" : "var(--color-neon-pink)";
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 grid size-10 place-items-center rounded-xl border backdrop-blur"
              style={{
                transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotateX(-65deg)`,
                borderColor: `color-mix(in oklch, ${color} 60%, transparent)`,
                background: `color-mix(in oklch, ${color} 12%, transparent)`,
                color,
                boxShadow: `0 0 20px color-mix(in oklch, ${color} 40%, transparent)`,
              }}
            >
              <Icon className="size-4" />
            </div>
          );
        })}
        {/* orbit rings */}
        <div
          className="absolute inset-0 rounded-full border"
          style={{ borderColor: "color-mix(in oklch, var(--color-neon-cyan) 20%, transparent)" }}
        />
      </div>
    </div>
  );
}

/** Floating stack of glass "chip" plates. */
export function ChipStack({ className = "", style, size = 160 }) {
  const layers = 5;
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ perspective: 900, width: size, height: size, ...style }}
      aria-hidden
    >
      <div
        className="relative h-full w-full animate-chip-spin"
        style={{ transformStyle: "preserve-3d", transform: "rotateX(55deg) rotateZ(-15deg)" }}
      >
        {Array.from({ length: layers }).map((_, i) => {
          const z = (i - (layers - 1) / 2) * 18;
          const color =
            i % 3 === 0 ? "var(--color-neon-cyan)" : i % 3 === 1 ? "var(--color-neon-purple)" : "var(--color-neon-pink)";
          return (
            <div
              key={i}
              className="absolute inset-4 rounded-2xl border backdrop-blur"
              style={{
                transform: `translateZ(${z}px)`,
                borderColor: `color-mix(in oklch, ${color} 55%, transparent)`,
                background: `linear-gradient(135deg, color-mix(in oklch, ${color} 18%, transparent), transparent)`,
                boxShadow: `0 10px 30px color-mix(in oklch, ${color} 30%, transparent)`,
              }}
            >
              <div className="absolute left-3 top-3 h-1 w-8 rounded-full" style={{ background: color, opacity: 0.7 }} />
              <div className="absolute right-3 top-3 size-2 rounded-full" style={{ background: color }} />
              <div className="absolute bottom-3 left-3 right-3 flex gap-1">
                {Array.from({ length: 6 }).map((_, k) => (
                  <div key={k} className="h-1 flex-1 rounded-full" style={{ background: color, opacity: 0.35 }} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Tilted floating monitor with a running code snippet. */
export function CodePanel({ className = "", style, size = 260 }) {
  const lines = [
    { c: "var(--color-neon-purple)", t: "const", after: " build = () => {" },
    { c: "var(--color-neon-cyan)", t: "  return", after: " <Future />;" },
    { c: "var(--color-muted-foreground)", t: "}", after: "" },
    { c: "var(--color-neon-pink)", t: "export", after: " default build;" },
  ];
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ perspective: 1000, width: size, height: size * 0.7, ...style }}
      aria-hidden
    >
      <motion.div
        className="relative h-full w-full rounded-2xl border border-neon-cyan/40 bg-background/70 p-4 backdrop-blur-xl"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-18deg) rotateX(10deg)",
          boxShadow: "0 30px 60px -20px color-mix(in oklch, var(--color-neon-purple) 40%, transparent)",
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-3 flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-neon-pink" />
          <span className="size-2 rounded-full bg-neon-purple" />
          <span className="size-2 rounded-full bg-neon-cyan" />
          <span className="ml-2 font-mono text-[10px] text-muted-foreground">build.tsx</span>
        </div>
        <div className="space-y-2 font-mono text-[11px]">
          {lines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
            >
              <span style={{ color: l.c }}>{l.t}</span>
              <span className="text-foreground/80">{l.after}</span>
            </motion.div>
          ))}
          <motion.span
            className="inline-block h-3 w-1.5 bg-neon-cyan"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}

/** Utility wrapper adding a gentle bob to any 3D element. */
export function Float({
  children,
  className = "",
  y = 12,
  duration = 6,
  delay = 0,
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -y, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
