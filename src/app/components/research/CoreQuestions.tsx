import { motion } from 'motion/react';
import { HelpCircle, Scale, GitMerge } from 'lucide-react';

const questions = [
  {
    icon: HelpCircle,
    question: "这个问题真实吗？",
    sub: "Is this problem real?",
    desc: "不仅仅是“痛点”，而是结构性的阻碍。"
  },
  {
    icon: Scale,
    question: "值得被解决吗？",
    sub: "Is it worth solving?",
    desc: "评估投入产出比与战略价值。"
  },
  {
    icon: GitMerge,
    question: "哪条路径最有性价比？",
    sub: "Most cost-effective path?",
    desc: "在多种技术方案中找到最优解。"
  }
];

export function CoreQuestions() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">核心定位</h2>
          <p className="text-black/50 text-lg font-light">在 AI 时代，系统性地回答三个问题</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5 overflow-hidden rounded-3xl"
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
          {questions.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="p-12 bg-white hover:bg-black/5 transition-colors duration-500 group flex flex-col items-center text-center"
            >
              <motion.div 
                className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center mb-8 bg-white shadow-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-6 h-6 text-black" />
              </motion.div>
              <h3 className="text-2xl font-bold text-black mb-3">{item.question}</h3>
              <p className="text-xs font-mono text-black/40 uppercase tracking-widest mb-6">{item.sub}</p>
              <p className="text-black/60 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
