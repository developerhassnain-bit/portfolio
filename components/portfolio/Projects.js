"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedHeading } from "./AnimatedHeading";
import Image from "next/image";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  { img: p2, title: "Lumina AI Dashboard", tags: ["Next.js", "Tailwind CSS", "Stripe"], year: "2025", cat: "SaaS" },
  { img: p3, title: "Nebula Marketplace", tags: ["MERN Stack", "Framer", "MongoDB"], year: "2025", cat: "Commerce" },
  { img: p4, title: "Cipher Chat AI", tags: ["Next.js", "OpenAI", "WebSockets"], year: "2024", cat: "AI" },
  { img: p1, title: "Vertex 3D Studio", tags: ["Three.js", "React", "GSAP"], year: "2024", cat: "Creative" },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 border-b border-border/60 bg-gradient-to-b from-background via-surface to-background dark:from-[#030303] dark:via-[#090308] dark:to-[#030303]">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 size-[500px] rounded-full bg-neon-cyan/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 size-[500px] rounded-full bg-neon-pink/5 blur-[130px] pointer-events-none" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-neon-cyan">// Selected Works</div>
            <h2 className="font-display text-4xl font-bold leading-none tracking-tighter md:text-7xl">
              <AnimatedHeading text="Unique" className="block" />
              <AnimatedHeading text="engineering." highlightWords={["engineering"]} className="block" />
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A curated selection of products where design meets deep technical craft.
          </p>
        </div>

        {/* Asymmetric staggered grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
              className={`group relative block ${i % 2 === 1 ? "md:mt-24" : ""}`}
              data-cursor="hover"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+FDPQAIkQL7k42m4wAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Outer circle indicator link */}
                  <div className="absolute right-4 top-4 grid size-12 place-items-center rounded-full border border-border bg-background/60 backdrop-blur transition-all group-hover:rotate-45 group-hover:border-neon-cyan group-hover:text-neon-cyan">
                    <ArrowUpRight className="size-5" />
                  </div>

                  <div className="absolute left-4 top-4 rounded-full bg-background/60 px-3 py-1 text-[10px] font-mono uppercase tracking-widest backdrop-blur border border-border/40">
                    {p.cat} · {p.year}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="mb-4 font-display text-2xl font-bold transition-colors group-hover:text-neon-cyan md:text-3xl">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
