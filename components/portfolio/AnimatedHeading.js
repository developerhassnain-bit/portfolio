"use client";

import { motion } from "framer-motion";

export function AnimatedHeading({ 
  text, 
  className = "", 
  highlightWords = [], 
  highlightClass = "text-gradient-neon animate-gradient-x" 
}) {
  const words = text.split(" ");

  const containerVar = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
      }
    }
  };

  const charVar = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }
    }
  };

  return (
    <motion.span
      variants={containerVar}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      className={`inline-block ${className}`}
    >
      {words.map((word, wordIdx) => {
        // Clean punctuation to check highlight matching
        const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        const isHighlighted = highlightWords.some(
          (hw) => cleanWord.toLowerCase() === hw.toLowerCase()
        );
        
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden py-1 -my-1">
            {word.split("").map((char, charIdx) => (
              <span key={charIdx} className="inline-block overflow-hidden align-bottom pb-[0.05em] -mb-[0.05em]">
                <motion.span
                  variants={charVar}
                  className={`inline-block ${isHighlighted ? highlightClass : "text-foreground"}`}
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </span>
        );
      })}
    </motion.span>
  );
}
