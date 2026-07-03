"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { IconOrbit, Float } from "./Scene3D";
import { AnimatedHeading } from "./AnimatedHeading";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", details: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="relative px-6 py-32 border-b border-border/60 overflow-hidden bg-gradient-to-b from-background via-surface to-background dark:from-[#030303] dark:via-[#03080d] dark:to-[#020202]">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      
      {/* Floating 3D IconOrbit in the background left side */}
      <Float className="pointer-events-none absolute -left-20 top-24 hidden lg:block opacity-60 z-0" y={12}>
        <IconOrbit size={240} />
      </Float>

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          {/* Glowing backdrops */}
          <div className="absolute -right-24 -top-24 size-64 rounded-full bg-neon-cyan/15 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-neon-purple/15 blur-[100px] pointer-events-none" />

          <div className="relative grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            {/* Left Column: Form Content */}
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-neon-cyan">// Contact</div>
              
              <h2 className="mb-4 font-display text-4xl font-bold leading-none tracking-tighter md:text-7xl">
                <AnimatedHeading text="Let's build" className="block" />
                <AnimatedHeading text="something big." highlightWords={["big"]} className="block" />
              </h2>
              
              <p className="mb-12 max-w-lg text-sm md:text-base text-muted-foreground">
                Have a project in mind? Drop the details below and I'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 px-6 rounded-2xl border border-neon-cyan/30 bg-neon-cyan/5 text-center"
                >
                  <div className="size-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan mb-4 animate-bounce">
                    <Send className="size-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Thanks for reaching out! Ali Hassnain will review your project details and email you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="rounded-xl border border-border bg-background/50 px-4 py-4 text-sm text-foreground outline-none transition-all focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
                      data-cursor="hover"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="rounded-xl border border-border bg-background/50 px-4 py-4 text-sm text-foreground outline-none transition-all focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
                      data-cursor="hover"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Project Details</label>
                    <textarea
                      required
                      rows={5}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="resize-none rounded-xl border border-border bg-background/50 px-4 py-4 text-sm text-foreground outline-none transition-all focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
                      data-cursor="hover"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="group relative overflow-hidden rounded-xl p-[1px] md:col-span-2"
                    data-cursor="hover"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-gradient-x" />
                    <span className="relative flex items-center justify-center gap-2 rounded-xl bg-background px-8 py-4 text-xs font-bold uppercase tracking-widest text-foreground transition-colors group-hover:bg-transparent group-hover:text-background">
                      Send Message <Send className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: AI Robot Assistant Visual */}
            <div className="relative flex justify-center items-center min-h-[320px]">
              {/* Behind-glow blur */}
              <div className="absolute inset-0 m-auto size-64 rounded-full bg-gradient-to-tr from-neon-cyan/15 to-neon-purple/20 blur-3xl animate-pulse pointer-events-none" />
              
              <motion.div
                className="relative z-10 w-full max-w-[280px] aspect-square flex justify-center items-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/robot1.png"
                  alt="AI Assistant Agent"
                  width={280}
                  height={280}
                  className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,240,255,0.35)]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
