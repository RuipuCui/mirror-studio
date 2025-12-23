import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const logo = new URL('../../../assets/logo.png', import.meta.url).href;

const NOT_TAGS = [
  "Not Marketing Agency",
  "Not Just Copywriting",
  "Not Traffic Driven",
  "Not Outsourced PR"
];

export function PostHero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  const [activeTagIndex, setActiveTagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTagIndex((prev) => (prev + 1) % NOT_TAGS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />
      
      <motion.div 
        style={{ y: y1, opacity: 0.5 }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-slate-200/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2, opacity: 0.3 }}
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-black/5 to-transparent rounded-full blur-3xl"
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-4 py-1.5 rounded-full bg-white border border-black/5 shadow-sm text-slate-600 text-xs font-mono uppercase tracking-wider flex items-center gap-2 overflow-hidden whitespace-nowrap"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              Content & Narrative Engine
            </motion.div>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold text-black tracking-tighter mb-8 leading-[0.9]">
            Mirror<br/>Post
          </h1>
          
          <div className="h-24 mb-8 relative">
             <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed font-light absolute top-0 left-0">
              WhiteMirror 的内容与传播引擎<br/>
              <span className="text-black font-medium">把内部真实发生的事，转化为对外可理解、可传播、可建立信任的叙事。</span>
            </p>
          </div>

          {/* Dynamic Not Tags */}
          <div className="flex items-center gap-4 mb-12 h-10">
            <div className="text-sm font-mono text-slate-400">We are:</div>
            <div className="relative overflow-hidden h-8 w-64">
              <motion.div
                key={activeTagIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center gap-2 text-red-500/80 font-mono text-sm bg-red-50/50 px-3 rounded border border-red-100 w-fit"
              >
                <X size={14} />
                {NOT_TAGS[activeTagIndex]}
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
             <button 
              onClick={() => scrollTo('core')}
              className="group px-8 py-4 rounded-full bg-black text-white font-bold hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
            >
              核心任务
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('modules')}
              className="px-8 py-4 rounded-full border border-black/10 hover:border-black/30 hover:bg-white transition-all duration-300 text-black bg-white/50 backdrop-blur-sm"
            >
              工作模块
            </button>
          </div>
        </motion.div>

        {/* Right side - 3D Logo visual with Parallax */}
        <div className="hidden lg:flex items-center justify-center min-h-[600px] relative perspective-[1000px]">
            <motion.div
              style={{ y: y2, rotateX: 5, rotateY: -5 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent blur-[100px] rounded-full scale-150" />
              <motion.img 
                src={logo} 
                alt="Mirror Post" 
                className="relative w-[400px] h-[400px] object-contain drop-shadow-2xl brightness-0"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Orbiting Elements */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-black/5 rounded-full"
                  style={{ x: '-50%', y: '-50%' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear", delay: i * 2 }}
                >
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg" />
                </motion.div>
              ))}
            </motion.div>
        </div>
      </div>
      
    </section>
  );
}
