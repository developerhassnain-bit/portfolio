"use client";

import { ThemeProvider } from "@/lib/theme";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Services } from "@/components/portfolio/Services";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { TechStack } from "@/components/portfolio/TechStack";
import { Projects } from "@/components/portfolio/Projects";
import { Process } from "@/components/portfolio/Process";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <SmoothScroll />
      <CustomCursor />
      <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Experience />
          <Services />
          <Capabilities />
          <TechStack />
          <Projects />
          <Process />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
