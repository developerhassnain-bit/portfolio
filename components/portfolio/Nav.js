"use client";

import { useState } from "react";
import { useTheme } from "@/lib/theme";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-300">
      <div
        className={`w-full rounded-[2rem] border border-border/80 bg-white/10 backdrop-blur-md px-6 py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 ${menuOpen ? "rounded-[2rem]" : "rounded-full"
          }`}
      >
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <a href="#home" className="font-display text-lg font-bold tracking-tighter" data-cursor="hover">
            HASSNAIN<span className="text-neon-cyan">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden gap-8 text-[10px] font-bold uppercase tracking-[0.25em] md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-neon-cyan text-foreground/80 hover:text-foreground"
                data-cursor="hover"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA & Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid size-9 place-items-center rounded-full border border-border bg-card/40 transition-colors hover:border-neon-cyan hover:text-neon-cyan"
              data-cursor="hover"
            >
              {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </button>

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="hidden rounded-full bg-foreground px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-background transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.35)] md:inline-block"
              data-cursor="hover"
            >
              Hire Me
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              className="grid size-9 place-items-center rounded-full border border-border bg-card/45 hover:border-neon-cyan hover:text-neon-cyan md:hidden"
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Accordion Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden mt-4 border-t border-border/20 pt-4"
            >
              <div className="flex flex-col gap-3 pb-2 text-center font-mono text-xs uppercase tracking-widest">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="py-2.5 rounded-xl border border-transparent hover:border-border/40 hover:bg-card/20 transition-all hover:text-neon-cyan"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: links.length * 0.05 }}
                  className="mt-2 py-3 rounded-full bg-foreground text-[10px] font-bold text-background transition-all hover:bg-neon-cyan hover:text-background"
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
