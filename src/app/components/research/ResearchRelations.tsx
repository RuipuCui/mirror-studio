import { motion } from 'motion/react';
import { ArrowRight, RefreshCw } from 'lucide-react';

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
              <div className="flex justify-center">
                <ArrowRight className="text-black/20 rotate-90 lg:rotate-0" />
              </div>
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
              <div className="flex justify-center">
                <ArrowRight className="text-black/20 rotate-90 lg:rotate-0" />
              </div>
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
                <RefreshCw className="w-40 h-40 text-black/[0.03]" />
              </div>
              <div className="relative z-10 space-y-6 text-center">
                <div className="text-black font-bold bg-white/80 backdrop-blur inline-block px-4 py-1 rounded-full shadow-sm">Research 提出假设</div>
                <ArrowRight className="w-4 h-4 mx-auto text-black/20 rotate-90" />
                <div className="text-black font-bold bg-white/80 backdrop-blur inline-block px-4 py-1 rounded-full shadow-sm">LearningOS 验证</div>
                <ArrowRight className="w-4 h-4 mx-auto text-black/20 rotate-90" />
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
