import { motion } from 'motion/react';
import { Search, Cpu, Network } from 'lucide-react';

const areas = [
  {
    title: "真实世界的问题",
    subtitle: "Problem Research",
    icon: Search,
    desc: "不是“我们能不能做 X”，而是“用户到底卡在哪里？”",
    points: [
      "对真实用户行为的拆解",
      "对学习路径失败原因的归因",
      "对“为什么学不会”的系统性分析"
    ],
    output: "输出不是功能，而是 问题定义本身"
  },
  {
    title: "AI 能力边界与可行性",
    subtitle: "Capability Research",
    icon: Cpu,
    desc: "回答现实问题：“AI 到底能替代哪一段？哪一段还必须是人？”",
    points: [
      "AI 能不能承担完整学习闭环？",
      "哪些决策必须由人来做？",
      "AI 在学习场景中的失败模式是什么？"
    ],
    output: "LearningOS 的核心输入层"
  },
  {
    title: "路径与范式验证",
    subtitle: "Paradigm Research",
    icon: Network,
    desc: "不是做功能，而是验证 “模式”。",
    points: [
      "课程驱动 vs 任务驱动？",
      "教学是否应拆解成 Agent？",
      "反馈即时性 vs 延迟性？"
    ],
    output: "避免 Studio 的方向性浪费"
  }
];

export function ResearchFocus() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-12"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-tighter">研究范畴</h2>
            <p className="text-black/50 text-xl font-light">MirrorResearch ≠ 写论文，我们只研究三类问题</p>
          </div>
          <div className="text-right hidden md:block">
             <span className="text-xs font-mono uppercase tracking-widest text-black/30">Focus Areas</span>
          </div>
        </motion.div>

        <div className="space-y-12">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative p-8 md:p-12 rounded-[2rem] bg-white border border-black/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700"
            >
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:items-start">
                <div className="shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6 relative">
                <motion.div
                  className="absolute -inset-2 border border-black/10 rounded-3xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <area.icon className="w-8 h-8 relative z-10" />
              </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-6">
                    <h3 className="text-3xl font-bold text-black tracking-tight">{area.title}</h3>
                    <span className="text-sm font-mono text-black/40 uppercase tracking-widest border-l border-black/10 pl-4">{area.subtitle}</span>
                  </div>
                  
                  <p className="text-black/70 text-xl mb-10 font-light leading-relaxed max-w-3xl">{area.desc}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {area.points.map((point, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="flex items-center gap-4 text-black/60 group-hover:text-black transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-black transition-colors" />
                        <span className="font-light">{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium shadow-lg shadow-black/20">
                    <span className="opacity-50">OUTPUT</span>
                    <span className="w-px h-3 bg-white/20 mx-1" />
                    <span>{area.output}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
