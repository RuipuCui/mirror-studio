import { motion } from 'motion/react';
import { Bot, Hammer, Award } from 'lucide-react';

const principles = [
  {
    icon: Bot,
    title: "AI-Native",
    subtitle: "Collaborator, Not Tool",
    desc: "我们不教“不用 AI 怎么写代码”，而是教“如何设计一个人 + AI 的最小生产闭环”。AI 是默认存在的协作者。",
  },
  {
    icon: Hammer,
    title: "Production First",
    subtitle: "Reverse Learning",
    desc: "先给任务 → 再补知识 → 再复盘能力。项目是真实的，需求是变化的，结果是会被评估的。",
  },
  {
    icon: Award,
    title: "Verifiable Output",
    subtitle: "Capability > Hours",
    desc: "不看学了多久，只看你交付过什么。你的成长定义于你在真实系统里承担过的责任。",
  }
];

export function AcademyPrinciples() {
  return (
    <section className="py-24 px-6 relative border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">核心设计原则</h2>
          <p className="text-slate-500">Mirror Academy 的灵魂</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative p-8 rounded-2xl bg-white border border-black/5 hover:border-black/20 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6 shadow-lg shadow-black/5 group-hover:bg-slate-800 transition-colors duration-300`}>
                <item.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-1">{item.title}</h3>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">{item.subtitle}</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
