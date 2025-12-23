import { motion } from 'motion/react';
import { Lightbulb, Zap, Filter, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: "1. 想法收集",
    subtitle: "Idea Intake",
    desc: "Lab 接收的不是“宏大愿景”，而是具体问题。",
    details: ["真实痛点", "AI 场景", "模糊价值"],
    color: "bg-blue-500"
  },
  {
    icon: Zap,
    title: "2. 快速 MVP",
    subtitle: "Rapid Prototyping",
    desc: "Lab 的核心能力不是“想”，而是极快地把东西做出来。",
    details: ["最小验证物", "Demo / 原型", "速度优先"],
    color: "bg-yellow-500"
  },
  {
    icon: Filter,
    title: "3. 验证与筛选",
    subtitle: "Kill or Promote",
    desc: "这是 Mirror Lab 最重要、也最残酷的一步。",
    details: ["Kill: 直接停", "Hold: 冻结", "Promote: 送往 Studio"],
    color: "bg-red-500"
  }
];

export function LabProcess() {
  return (
    <section className="py-24 px-6 relative bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">核心职责</h2>
          <p className="text-slate-500">从想法到验证的标准流水线</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              <div className="relative z-10 bg-white p-8 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl ${step.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-${step.color}/20`}>
                  <step.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-black mb-1">{step.title}</h3>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">{step.subtitle}</p>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{step.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {step.details.map((d, j) => (
                    <span key={j} className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
