import { motion } from 'motion/react';
import { HelpCircle, Scale, GitMerge } from 'lucide-react';
import type { Language } from '@/app/types/whitemirrorai';

const content = {
  zh: {
    title: "核心定位",
    subtitle: "在 AI 时代，系统性地回答三个问题",
    questions: [
      {
        icon: HelpCircle,
        question: "这个问题真实吗？",
        sub: "真伪辨别",
        desc: "不仅仅是“痛点”，而是结构性的阻碍。"
      },
      {
        icon: Scale,
        question: "值得被解决吗？",
        sub: "价值评估",
        desc: "评估投入产出比与战略价值。"
      },
      {
        icon: GitMerge,
        question: "哪条路径最有性价比？",
        sub: "路径优选",
        desc: "在多种技术方案中找到最优解。"
      }
    ]
  },
  en: {
    title: "Core Positioning",
    subtitle: "In the AI era, we systemically answer three questions",
    questions: [
      {
        icon: HelpCircle,
        question: "Is the problem real?",
        sub: "Authenticity",
        desc: "Not just a pain point, but a structural blocker."
      },
      {
        icon: Scale,
        question: "Is it worth solving?",
        sub: "Value Assessment",
        desc: "Evaluate ROI and strategic value."
      },
      {
        icon: GitMerge,
        question: "Which path is most cost-effective?",
        sub: "Path Selection",
        desc: "Find the best route among multiple technical options."
      }
    ]
  }
};

export function CoreQuestions({ language }: { language: Language }) {
  const t = content[language];
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">{t.title}</h2>
          <p className="text-black/50 text-lg font-light">{t.subtitle}</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {t.questions.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="group relative p-8 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div 
                className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center mb-8 bg-white shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-500"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-6 h-6" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">{item.question}</h3>
              <p className="text-xs font-mono text-black/40 uppercase tracking-widest mb-6">{item.sub}</p>
              <p className="text-black/60 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
