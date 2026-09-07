"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Waterline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background color changes as hydration drops
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    ["#0047FF", "#0A1128", "#FF5C00", "#FF003D"]
  );

  // Water level goes down
  const waterHeight = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  
  // Percentage text
  const percentage = useTransform(scrollYProgress, (val) => {
    if (val < 0.25) return "100%";
    if (val < 0.5) return "75%";
    if (val < 0.75) return "50%";
    return "25%";
  });

  // Text fragmentation effects (cleaner)
  const textY1 = useTransform(scrollYProgress, [0, 0.8, 1], ["0%", "0%", "-50%"]);
  const textY2 = useTransform(scrollYProgress, [0, 0.8, 1], ["0%", "0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.4]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-deep-navy">
      <motion.div 
        className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center border-b-8 border-black"
        style={{ backgroundColor }}
      >
        {/* Subtle grid background instead of heavy polka dots */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} 
        />

        {/* The actual water line overlay */}
        <motion.div 
          className="absolute bottom-0 w-full bg-electric-blue/20 border-t-8 border-white/50 z-10"
          style={{ height: waterHeight }}
        />

        {/* Dynamic Percentage - Moved to top corner to avoid overlap */}
        <div className="absolute right-8 top-8 z-20">
          <motion.h2 className="text-6xl md:text-9xl font-anton text-white opacity-80">
            {percentage}
          </motion.h2>
        </div>

        {/* Central Concept Text - Clean, stacked, centered */}
        <div className="z-20 flex flex-col items-center justify-center pointer-events-none relative w-full px-4">
          <motion.h1 
            className="text-[12vw] md:text-[8vw] font-anton uppercase text-white leading-none tracking-tight text-center"
            style={{ y: textY1, opacity: textOpacity }}
          >
            PERFORMANCE
          </motion.h1>
          <motion.h1 
            className="text-[12vw] md:text-[8vw] font-anton uppercase text-lime-green leading-none tracking-tight text-center mt-2"
            style={{ y: textY2, opacity: textOpacity }}
          >
            HAS A WATERLINE.
          </motion.h1>
        </div>

      </motion.div>
    </section>
  );
}
