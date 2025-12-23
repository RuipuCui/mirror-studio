import { motion } from 'motion/react';
import { Users, Network, Sparkles, Zap, Layers } from 'lucide-react';

export function Philosophy() {
  return (
    <section id="philosophy" className="relative flex flex-col justify-center py-24 px-6 bg-transparent border-t border-black/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[800px] h-[800px] bg-slate-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-64 w-[800px] h-[800px] bg-slate-100 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-slate-500">
              生产范式的变革
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            AI 让生产的最小单位从“团队”回归到“人”
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Traditional Model */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group p-8 rounded-3xl bg-slate-50 border border-black/10 overflow-hidden min-h-[400px] flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-200/50" />
            
            <div className="relative z-10 mb-auto">
              <div className="flex items-center gap-3 mb-4 opacity-50">
                <Layers className="w-6 h-6 text-black" />
                <span className="text-sm font-mono uppercase tracking-wider text-black">The Old Way</span>
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">Organization</h3>
              <p className="text-slate-500">依赖分工、流程与管理</p>
            </div>

            {/* Visual: Pyramid / Hierarchy */}
            <div className="relative z-10 flex-1 flex items-center justify-center py-8">
              <div className="relative w-48 h-48 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
                 {/* Abstract Hierarchy Nodes */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-400 rounded-full" />
                 
                 <div className="absolute top-12 left-1/3 w-4 h-4 bg-slate-500 rounded-full" />
                 <div className="absolute top-12 right-1/3 w-4 h-4 bg-slate-500 rounded-full" />
                 
                 <div className="absolute top-24 left-1/4 w-4 h-4 bg-slate-600 rounded-full" />
                 <div className="absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full" />
                 <div className="absolute top-24 right-1/4 w-4 h-4 bg-slate-600 rounded-full" />

                 {/* Connecting Lines */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-400" strokeWidth="1">
                    <line x1="50%" y1="8" x2="33%" y2="56" />
                    <line x1="50%" y1="8" x2="67%" y2="56" />
                    <line x1="33%" y1="56" x2="25%" y2="104" />
                    <line x1="33%" y1="56" x2="50%" y2="104" />
                    <line x1="67%" y1="56" x2="50%" y2="104" />
                    <line x1="67%" y1="56" x2="75%" y2="104" />
                 </svg>
              </div>
            </div>
          </motion.div>

          {/* New Model */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group p-8 rounded-3xl bg-black border border-black/10 overflow-hidden min-h-[400px] flex flex-col shadow-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 mb-auto">
              <div className="flex items-center gap-3 mb-4 text-white">
                <Sparkles className="w-6 h-6" />
                <span className="text-sm font-mono uppercase tracking-wider">The New Way</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Individual + AI</h3>
              <p className="text-slate-400">个体闭环，极速交付</p>
            </div>

            {/* Visual: Central Core */}
            <div className="relative z-10 flex-1 flex items-center justify-center py-8">
              <div className="relative w-48 h-48">
                {/* Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.4)] flex items-center justify-center z-20">
                  <Zap className="w-8 h-8 text-black fill-black" />
                </div>

                {/* Orbit 1 */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-white/20"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-slate-300 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </motion.div>

                {/* Orbit 2 */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-white/20"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-slate-400 rounded-full" />
                </motion.div>

                {/* Connecting Beams */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                   <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-white/10 rounded-full blur-xl"
                   />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Cards - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Network,
              title: "最小商业单元",
              desc: "人不是螺丝钉，而是闭环单元。"
            },
            {
              icon: Users,
              title: "超级个体联盟",
              desc: "共享知识、工具和最佳实践的网络。"
            },
            {
              icon: Sparkles,
              title: "AI Native",
              desc: "工作流、工具链基于 AI 重构。"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-black/10 hover:border-black/20 transition-colors shadow-sm"
            >
                <item.icon className="w-8 h-8 text-black mb-4" />
                <h4 className="text-lg font-bold text-black mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
