import { motion } from 'motion/react';
import { ArrowRight, RefreshCw } from 'lucide-react';

const FlowArrow = () => (
  <div className="relative flex items-center justify-center py-4 lg:py-0 lg:px-4">
    {/* Desktop Line */}
    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-black/10" />
    {/* Mobile Line */}
    <div className="lg:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px h-full bg-black/10" />

    {/* Moving Dot - Desktop */}
    <motion.div
      className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full z-10"
      animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Moving Dot - Mobile */}
    <motion.div
      className="lg:hidden absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full z-10"
      animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />

    <div className="relative z-20 bg-white p-2 rounded-full border border-black/5">
      <ArrowRight className="text-black/40 w-4 h-4 rotate-90 lg:rotate-0" />
    </div>
  </div>
);

export function ResearchRelations() {
  return (
    <section className="py-32 px-6 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">协同关系</h2>
          <p className="text-black/50 text-xl font-light">Research 如何驱动整个生态</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* vs Labs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2rem] bg-white border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-bold text-black mb-8">vs MirrorLabs</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-5 rounded-xl bg-black/5">
                <span className="text-black font-bold">Research</span>
                <span className="text-black/60 text-sm">定方向</span>
              </div>
              
              <FlowArrow />

              <div className="flex items-center justify-between p-5 rounded-xl bg-black text-white">
                <span className="font-bold">Labs</span>
                <span className="text-white/70 text-sm">选方向 + MVP</span>
              </div>
            </div>
            <p className="mt-8 text-black/60 text-sm leading-relaxed font-light">
              Research 给 Labs 的不是“idea”，而是“哪类 idea 值得被尝试”以及“哪些方向风险更低”。
            </p>
          </motion.div>

          {/* vs Studio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-[2rem] bg-white border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-bold text-black mb-8">vs MirrorStudio</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-5 rounded-xl bg-black/5">
                <span className="text-black font-bold">Research</span>
                <span className="text-black/60 text-sm">做不做</span>
              </div>
              
              <FlowArrow />

              <div className="flex items-center justify-between p-5 rounded-xl bg-black text-white">
                <span className="font-bold">Studio</span>
                <span className="text-white/70 text-sm">怎么做最快</span>
              </div>
            </div>
            <p className="mt-8 text-black/60 text-sm leading-relaxed font-light">
              Research 不碰实现，Studio 不质疑方向（除非数据打脸）。
            </p>
          </motion.div>

          {/* vs LearningOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-10 rounded-[2rem] bg-white border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-bold text-black mb-8">vs LearningOS</h3>
            <div className="relative py-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <RefreshCw className="w-40 h-40 text-black/[0.03]" />
                </motion.div>
              </div>
              <div className="relative z-10 space-y-6 text-center">
                <div className="text-black font-bold bg-white/80 backdrop-blur inline-block px-4 py-1 rounded-full shadow-sm border border-black/5">Research 提出假设</div>
                <div className="flex justify-center">
                  <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="w-4 h-4 text-black/40 rotate-90" />
                  </motion.div>
                </div>
                <div className="text-black font-bold bg-white/80 backdrop-blur inline-block px-4 py-1 rounded-full shadow-sm border border-black/5">LearningOS 验证</div>
                <div className="flex justify-center">
                  <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}>
                    <ArrowRight className="w-4 h-4 text-black/40 rotate-90" />
                  </motion.div>
                </div>
                <div className="text-black/50 text-sm">数据反哺 Research</div>
              </div>
            </div>
            <p className="mt-8 text-black/60 text-sm leading-relaxed font-light">
              LearningOS 是 Research 的长期实验场，形成闭环。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
