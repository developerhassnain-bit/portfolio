"use client";

const words = ["NEXT.JS", "REACT", "TYPESCRIPT", "NODE.JS", "MONGODB", "TAILWIND", "MERN", "FRAMER MOTION"];

export function Marquee() {
  return (
    <section className="overflow-hidden border-y border-border bg-surface py-8">
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {[...Array(2)].map((_, k) => (
          <div key={k} className="flex shrink-0 items-center gap-16 px-8">
            {words.map((w) => (
              <div key={w} className="flex items-center gap-16">
                <span 
                  className="font-display text-4xl font-extrabold text-foreground/15 transition-colors duration-300 hover:text-neon-cyan md:text-6xl"
                  data-cursor="hover"
                >
                  {w}
                </span>
                <span className="size-2 rounded-full bg-neon-cyan shadow-[0_0_8px_#00f0ff]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
