import { motion } from 'motion/react';
import { TrendingUp, Target, AlertTriangle, Zap } from 'lucide-react';

export function ResearchFuture() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Why Important */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight">Why Research Matters?</h2>
            <div className="p-8 rounded-[2rem] bg-black text-white relative overflow-hidden">
              {/* Background Animation */}
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Without Research</h3>
                <div className="space-y-4 mb-12">
                  <div className="flex items-center justify-between text-white/70">
                    <span>试错成本</span>
                    <motion.div 
                      className="flex items-center gap-2 text-red-400"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TrendingUp className="w-4 h-4" /> High
                    </motion.div>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-red-500" 
                      initial={{ width: "80%" }}
                      animate={{ width: ["80%", "85%", "80%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-white/70 mt-6">
                    <span>方向偏差风险</span>
                    <motion.div 
                      className="flex items-center gap-2 text-red-400"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      <AlertTriangle className="w-4 h-4" /> Critical
                    </motion.div>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-red-500" 
                      initial={{ width: "90%" }}
                      animate={{ width: ["90%", "95%", "90%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6">With Research</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-white/70">
                    <span>决策信心</span>
                    <motion.div 
                      className="flex items-center gap-2 text-green-400"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Zap className="w-4 h-4" /> High
                    </motion.div>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-green-500" 
                      initial={{ width: "95%" }}
                      animate={{ width: ["95%", "100%", "95%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Future Evolution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <motion.div
                  className="absolute inset-0 bg-black/5 rounded-full"
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Target className="w-16 h-16 mx-auto lg:mx-0 mb-6 text-black relative z-10" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">Future Evolution</h3>
              <p className="text-black/60 text-lg font-light">
                Research 本身也在进化，从单纯的“信息收集”向“智能决策辅助”转变。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "AI-Driven", desc: "利用 LLM 自动化处理海量信息" },
                { title: "Real-time", desc: "从静态报告转向实时情报流" },
                { title: "Actionable", desc: "直接生成可执行的策略建议" },
                { title: "Integrated", desc: "深度嵌入业务工作流" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-black/[0.02] border border-black/5 hover:bg-black/[0.04] transition-colors relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                  <h4 className="font-bold text-black mb-2">{item.title}</h4>
                  <p className="text-sm text-black/60">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
