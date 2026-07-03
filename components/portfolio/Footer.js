"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-border bg-background/50 py-12 px-6 backdrop-blur">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Brand */}
        <div className="font-display text-lg font-bold tracking-tighter text-foreground">
          HASSNAIN<span className="text-neon-cyan">.</span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-muted-foreground text-center md:text-left">
          &copy; {currentYear} Ali Hassnain. All rights reserved. Crafting the future web.
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-full border border-border bg-card/30 text-muted-foreground transition-all duration-200 hover:border-neon-cyan hover:text-neon-cyan hover:scale-105"
            data-cursor="hover"
          >
            <Github className="size-4" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-full border border-border bg-card/30 text-muted-foreground transition-all duration-200 hover:border-neon-cyan hover:text-neon-cyan hover:scale-105"
            data-cursor="hover"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="grid size-9 place-items-center rounded-full border border-border bg-card/30 text-muted-foreground transition-all duration-200 hover:border-neon-cyan hover:text-neon-cyan hover:scale-105"
            data-cursor="hover"
          >
            <Twitter className="size-4" />
          </a>
          <a
            href="mailto:ah0540232@gmail.com"
            aria-label="Email"
            className="grid size-9 place-items-center rounded-full border border-border bg-card/30 text-muted-foreground transition-all duration-200 hover:border-neon-cyan hover:text-neon-cyan hover:scale-105"
            data-cursor="hover"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
