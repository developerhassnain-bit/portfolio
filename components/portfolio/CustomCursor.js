"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;
    
    document.documentElement.classList.add("no-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
    };

    const onOver = (e) => {
      const target = e.target;
      if (!target) return;
      const interactive = target.closest("a, button, input, textarea, select, [data-cursor='hover']");
      if (ringRef.current) {
        ringRef.current.setAttribute("data-hover", interactive ? "true" : "false");
      }
    };

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("no-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden size-2 rounded-full bg-neon-cyan md:block"
        style={{ boxShadow: "0 0 12px #00f0ff" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden size-10 rounded-full border border-neon-cyan/60 transition-[width,height,border-color,background-color] duration-200 data-[hover=true]:size-16 data-[hover=true]:border-neon-purple data-[hover=true]:bg-neon-purple/10 md:block"
      />
    </>
  );
}
