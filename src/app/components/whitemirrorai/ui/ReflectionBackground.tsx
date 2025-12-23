import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export function ReflectionBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Dark reflective base */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated gradient mesh simulating light reflection */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Moving "light beams" */}
      <motion.div
        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-10"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.3) 60deg, transparent 120deg)",
        }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* SVG Turbulence Filter for "Water/Glass" distortion effect - applied via backdrop-filter if supported, or just as an overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <svg className="w-full h-full">
            <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

       {/* Subtle noise grain */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} />
    </div>
  );
}
