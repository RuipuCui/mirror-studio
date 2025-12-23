import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function ResearchHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-white overflow-hidden">
      {/* Background Elements - Water Ripple / Reflection Vibe */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#f8f8f8_0%,_#ffffff_100%)]" />
      
      {/* Subtle animated mesh gradient for "reflection" */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,_#ffffff_0deg,_#e0e0e0_180deg,_#ffffff_360deg)] animate-[spin_20s_linear_infinite]" />
      </div>
      
      {/* Orbiting Rings */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black/5 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/10 rounded-full blur-[1px]" />
        </motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-black/5 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/10 rounded-full blur-[1px]" />
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-black/5 bg-black/[0.02] backdrop-blur-sm text-xs md:text-sm text-black/60 mb-12 tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          Cognitive Engine
        </motion.div>

        <h1 className="text-7xl md:text-9xl font-bold text-black tracking-tighter mb-8 leading-[0.9]">
          Mirror<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-black/40">Research</span>
        </h1>

        <div className="h-px w-24 bg-black/20 mx-auto mb-12" />

        <p className="text-2xl md:text-4xl text-black/80 font-light mb-6 tracking-tight">
          WhiteMirror 的认知引擎
        </p>
        
        <p className="text-lg md:text-xl text-black/50 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
          "Where we turn vague questions into validated directions."
          <br />
          <span className="text-sm mt-4 block opacity-60 tracking-wide">它解决的不是“做什么”，而是“值不值得做”</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-black/30"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
