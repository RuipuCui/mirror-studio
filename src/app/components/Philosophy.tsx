import { motion } from 'motion/react';
import { Users, Network, Sparkles } from 'lucide-react';

export function Philosophy() {
  return (
    <section id="philosophy" className="relative flex flex-col justify-center py-24 px-6 bg-black border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[800px] h-[800px] bg-slate-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-64 w-[800px] h-[800px] bg-slate-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16 max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              存在的根本原因
            </span>
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            <p>
              在 AI 之前，做系统必须靠“组织”。PRD、设计稿、前后端拆分、项目管理……组织本身成了生产的必要条件。
            </p>
            <p className="text-white font-normal">
              但 AI 改变了一件事：生产的最小单位，从“团队”变成了“人”。
            </p>
            <p className="text-lg text-slate-500 border-l-2 border-white/20 pl-4">
              当一个人 + AI 就能完成设计、开发、部署的全流程，问题就变成了：<br/>
              <span className="text-slate-300">谁来把「想法 → 系统」这件事，做得快、稳、可复制？</span>
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {[
            {
              icon: Network,
              title: "最小商业单元",
              desc: "在这里，人不是螺丝钉，而是闭环单元。每个人都要学会从问题出发，到系统交付，对结果负责。"
            },
            {
              icon: Users,
              title: "超级个体联盟",
              desc: "我们不是一家传统公司，而是一个由超级个体组成的联盟。我们共享知识、工具和最佳实践。"
            },
            {
              icon: Sparkles,
              title: "AI Native",
              desc: "我们不只是使用 AI，我们是 AI 原生。我们的工作流、工具链和思维方式，都是基于 AI 重构的。"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
              className="group relative p-8 rounded-2xl bg-black border border-white/10 hover:border-white/30 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
