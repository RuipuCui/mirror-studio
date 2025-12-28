import { motion } from 'motion/react';
import { X, Check, AlertTriangle } from 'lucide-react';
import type { Language } from '@/app/types/whitemirrorai';

export function AcademyManifesto({ language }: { language: Language }) {
  const content = {
    zh: {
      title: "The Structural Failure",
      desc: "传统教育有三个结构性失败点，导致了“学”与“用”的巨大断层。Mirror Academy 的存在，就是为了彻底解决这三件事。",
      problems: [
        { problem: "学的东西不等于能用", solution: "生产优先，任务驱动" },
        { problem: "毕业 ≠ 能参与真实项目", solution: "预备役体系，真实交付" },
        { problem: "无“可被信任的交付记录”", solution: "基于 Output 的能力认证" }
      ],
      philosophy: {
        title: "Not Just \"Skills\"",
        desc: <>在 AI 时代，真正稀缺的不是“会用工具的人”，而是<span className="text-white font-bold border-b border-white/50">能为结果负责的人</span>。</>,
        dontTeach: "We Don't Teach",
        train: "We Train"
      }
    },
    en: {
      title: "The Structural Failure",
      desc: "Traditional education has three structural failure points, leading to a huge gap between 'learning' and 'using'. Mirror Academy exists to completely solve these three things.",
      problems: [
        { problem: "What you learn ≠ What is usable", solution: "Production First, Task Driven" },
        { problem: "Graduation ≠ Ready for real projects", solution: "Reserve System, Real Delivery" },
        { problem: "No 'Trusted Delivery Record'", solution: "Output-based Certification" }
      ],
      philosophy: {
        title: "Not Just \"Skills\"",
        desc: <>In the AI era, what is scarce is not "tool users", but <span className="text-white font-bold border-b border-white/50">people who own the outcome</span>.</>,
        dontTeach: "We Don't Teach",
        train: "We Train"
      }
    }
  };

  const t = content[language];

  return (
    <section className="py-24 px-6 relative border-t border-black/5 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">{t.title}</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {t.desc}
            </p>

            <div className="space-y-4">
              {t.problems.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-black/5">
                  <div className="flex items-center gap-3 text-slate-400 line-through decoration-slate-300">
                    <X className="w-4 h-4 text-slate-300" />
                    {item.problem}
                  </div>
                  <div className="flex items-center gap-3 text-black font-medium">
                    <Check className="w-4 h-4 text-black" />
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-8 rounded-[2rem] bg-black text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-white/60 mb-6">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-wider">Core Philosophy</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-6">{t.philosophy.title}</h3>
                <p className="text-white/70 leading-relaxed mb-8 text-lg">
                  {t.philosophy.desc}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/10 border border-white/10">
                    <div className="text-xs text-white/40 uppercase mb-1">{t.philosophy.dontTeach}</div>
                    <div className="text-white/60 line-through">Python Syntax</div>
                    <div className="text-white/60 line-through">React Hooks</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/20 border border-white/30">
                    <div className="text-xs text-white/80 uppercase mb-1">{t.philosophy.train}</div>
                    <div className="text-white font-bold">Problem Solving</div>
                    <div className="text-white font-bold">System Design</div>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
