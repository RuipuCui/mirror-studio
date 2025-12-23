import { motion } from 'motion/react';
import { GraduationCap, Cpu, Hammer } from 'lucide-react';

export function AcademyHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="px-3 py-1 rounded-full bg-black/5 border border-black/10 text-slate-600 text-xs font-mono uppercase tracking-wider flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              Talent Generation System
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tight mb-8">
            Mirror Academy
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-light mb-12">
            不是“课程平台”，而是 WhiteMirror 的<br/>
            <span className="text-black font-medium">「人才生成与能力放大系统」</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm">
              <Cpu className="w-4 h-4" />
              <span>AI-Native</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm">
              <Hammer className="w-4 h-4" />
              <span>Production First</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm">
              <GraduationCap className="w-4 h-4" />
              <span>Verifiable Output</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
    </section>
  );
}
