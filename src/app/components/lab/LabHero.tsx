import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const logo = new URL('../../../assets/logo.png', import.meta.url).href;

export function LabHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating orbs - Green/Blue tint for "Experiment/Lab" feel? Or keep neutral? Keeping neutral for consistency. */}
      <motion.div
        className="absolute top-20 left-1/2 w-96 h-96 bg-black/5 rounded-full blur-[100px]"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs md:text-sm text-slate-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            Validation Engine
          </div>

          <h1 className="mb-8">
            <span className="block text-5xl md:text-7xl font-bold text-black tracking-tight leading-tight">
              Mirror Lab
            </span>
            <motion.span 
              className="block text-2xl md:text-3xl font-light text-slate-500 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              想法—验证—孵化引擎
            </motion.span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
            Mirror Lab 不负责成功，它负责“尽快知道什么不值得继续做”。
            <br />
            <span className="text-sm mt-2 block opacity-60">The "Idea-Validation-Incubation" Engine.</span>
          </p>

          {/* Spacer for alignment */}
          <div className="h-[32px] mb-10" aria-hidden="true" />

          <div className="flex flex-col sm:flex-row gap-4">
             <button 
              onClick={() => scrollTo('mission')}
              className="px-8 py-4 rounded-full bg-black text-white font-bold hover:bg-slate-800 transition-all duration-300"
            >
              了解机制
            </button>
            <button 
              onClick={() => scrollTo('process')}
              className="px-8 py-4 rounded-full border border-black/20 hover:border-black/40 hover:bg-black/5 transition-all duration-300 text-black"
            >
              孵化流程
            </button>
          </div>
        </motion.div>

        {/* Right side - Logo visual */}
        <div className="hidden lg:flex items-center justify-end min-h-[400px] pr-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-150" />
                <img src={logo} alt="Mirror Lab" className="relative h-64 md:h-80 drop-shadow-[0_0_35px_rgba(0,0,0,0.1)] brightness-0 object-contain" />
              </motion.div>
            </motion.div>
        </div>
      </div>
      
    </section>
  );
}
