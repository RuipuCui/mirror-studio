import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const logo = new URL('../../../assets/logo.png', import.meta.url).href;

export function ResearchHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white">
      {/* Background effects (Matched to Studio Hero) */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-black/5 rounded-full blur-[100px]"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-black/5 rounded-full blur-[80px]"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
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
            Cognitive Engine
          </div>

          <h1 className="mb-8">
            <span className="block text-5xl md:text-7xl font-bold text-black tracking-tight leading-tight">
              Mirror Research
            </span>
            <span className="block text-2xl md:text-3xl font-light text-slate-500 mt-4">
              WhiteMirror 的认知引擎
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
            "Where we turn vague questions into validated directions."
            <br />
            <span className="text-sm mt-2 block opacity-60">它解决的不是“做什么”，而是“值不值得做”</span>
          </p>

          {/* Spacer to match Studio Hero alignment (compensating for missing tags) */}
          <div className="h-[32px] mb-10" aria-hidden="true" />

          <div className="flex flex-col sm:flex-row gap-4">
             <button 
              onClick={() => scrollTo('core-questions')}
              className="px-8 py-4 rounded-full bg-black text-white font-bold hover:bg-slate-800 transition-all duration-300"
            >
              核心命题
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
                {/* Using brightness-0 to make it black on white background */}
                <img src={logo} alt="Mirror Research" className="relative h-64 md:h-80 drop-shadow-[0_0_35px_rgba(0,0,0,0.1)] brightness-0 object-contain" />
              </motion.div>
            </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-black/30 cursor-pointer"
        onClick={() => scrollTo('core-questions')}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
