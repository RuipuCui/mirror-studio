import { motion } from 'motion/react';
import { Search, Cpu, Network } from 'lucide-react';
import type { Language } from '@/app/types/whitemirrorai';

const content = {
  zh: {
    title: "研究范畴",
    subtitle: "MirrorResearch ≠ 写论文，我们只研究三类问题",
    label: "Focus Areas",
    areas: [
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
    ]
  },
  en: {
    title: "Research Focus",
    subtitle: "MirrorResearch isn't about papers. We study three types of problems.",
    label: "Focus Areas",
    areas: [
      {
        title: "Real-world problems",
        subtitle: "Problem Research",
        icon: Search,
        desc: "Not “can we build X,” but “where exactly are users stuck?”",
        points: [
          "Break down real user behavior",
          "Explain why learning paths fail",
          "Systematic analysis of why people can't learn"
        ],
        output: "The output isn't features, but the problem definition itself"
      },
      {
        title: "AI capability boundaries",
        subtitle: "Capability Research",
        icon: Cpu,
        desc: "Answer practical questions: Which parts can AI replace, and which still require humans?",
        points: [
          "Can AI handle a full learning loop?",
          "Which decisions must be made by humans?",
          "What are AI failure modes in learning contexts?"
        ],
        output: "A core input layer for LearningOS"
      },
      {
        title: "Path & paradigm validation",
        subtitle: "Paradigm Research",
        icon: Network,
        desc: "Not building features, but validating patterns.",
        points: [
          "Course-driven vs task-driven?",
          "Should teaching be decomposed into agents?",
          "Instant feedback vs delayed feedback?"
        ],
        output: "Avoid directional waste in Studio"
      }
    ]
  }
};

export function ResearchFocus({ language }: { language: Language }) {
  const t = content[language];
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-tighter">{t.title}</h2>
            <p className="text-black/50 text-xl font-light">{t.subtitle}</p>
          </div>
          <div className="text-right hidden md:block">
             <span className="text-xs font-mono uppercase tracking-widest text-black/30">{t.label}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white border border-black/5 hover:border-black/20 transition-all duration-500 hover:shadow-2xl flex flex-col"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <area.icon className="w-7 h-7 relative z-10" />
                </div>
                <span className="text-xs font-mono text-black/30 uppercase tracking-widest">{area.subtitle}</span>
              </div>

              <h3 className="text-2xl font-bold text-black tracking-tight mb-4 group-hover:text-black/80 transition-colors">{area.title}</h3>
              
              <p className="text-black/60 text-base mb-8 font-light leading-relaxed flex-grow">{area.desc}</p>

              <div className="space-y-3 mb-8">
                {area.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-black/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/20 mt-1.5 shrink-0 group-hover:bg-black transition-colors" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-black/5 mt-auto">
                <p className="text-xs font-bold text-black/40 uppercase tracking-wider mb-2">Output</p>
                <p className="text-sm font-medium text-black">{area.output}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
