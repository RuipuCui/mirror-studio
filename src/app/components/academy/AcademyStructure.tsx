import { motion } from 'motion/react';
import { Target, Users, Brain, ArrowRight } from 'lucide-react';
import type { Language } from '@/app/types/whitemirrorai';

export function AcademyStructure({ language }: { language: Language }) {
  const content = {
    zh: {
      studentTitle: "学员做什么？",
      mentorTitle: "导师做什么？",
      mentorDesc: <>Mirror Academy 的导师，更像 <span className="font-bold text-white">CTO / Tech Lead / PM</span>，而不是讲课的老师。</>,
      tasks: [
        {
          icon: Target,
          title: "能力型任务",
          sub: "Core",
          items: ["做 MVP", "做 Demo", "做系统子模块", "做工具 / Agent"]
        },
        {
          icon: Users,
          title: "协作型任务",
          sub: "Advanced",
          items: ["辅助 Lab/Studio 项目", "拆解需求", "跑实验", "修 Bug"]
        },
        {
          icon: Brain,
          title: "认知型训练",
          sub: "Meta",
          items: ["方案 Trade-off 分析", "AI 边界复盘", "决策逻辑审核"]
        }
      ],
      mentorTasks: [
        "给方向 (Direction)",
        "拆复杂问题 (Decomposition)",
        "审核决策 (Review)",
        "承担最终兜底 (Responsibility)"
      ]
    },
    en: {
      studentTitle: "What Students Do?",
      mentorTitle: "What Mentors Do?",
      mentorDesc: <>Mirror Academy mentors are more like <span className="font-bold text-white">CTO / Tech Lead / PM</span>, not lecturers.</>,
      tasks: [
        {
          icon: Target,
          title: "Capability Tasks",
          sub: "Core",
          items: ["Build MVP", "Build Demo", "Build Sub-modules", "Build Tools / Agents"]
        },
        {
          icon: Users,
          title: "Collaboration Tasks",
          sub: "Advanced",
          items: ["Assist Lab/Studio Projects", "Decompose Requirements", "Run Experiments", "Fix Bugs"]
        },
        {
          icon: Brain,
          title: "Cognitive Training",
          sub: "Meta",
          items: ["Trade-off Analysis", "AI Boundary Review", "Decision Logic Audit"]
        }
      ],
      mentorTasks: [
        "Give Direction",
        "Decompose Complex Problems",
        "Review Decisions",
        "Take Final Responsibility"
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-24 px-6 relative border-t border-black/5 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Tasks */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">{t.studentTitle}</h2>
            <div className="space-y-6">
              {t.tasks.map((task, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 rounded-xl bg-white border border-black/5"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <task.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-black">{task.title}</h3>
                      <span className="px-2 py-0.5 rounded text-xs font-mono bg-black/5 text-black/60">{task.sub}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {task.items.map((item, j) => (
                        <span key={j} className="text-sm text-slate-500 bg-slate-50 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mentors */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">{t.mentorTitle}</h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-black text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Not "Teachers"</h3>
                <p className="text-white/80 text-lg mb-8">
                  {t.mentorDesc}
                </p>
                
                <ul className="space-y-4">
                  {t.mentorTasks.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
