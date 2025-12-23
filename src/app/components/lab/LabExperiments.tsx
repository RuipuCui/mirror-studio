import { motion } from 'motion/react';
import { FlaskConical, Bot, Code2, Cpu, Sparkles, ArrowRight } from 'lucide-react';

const experiments = [
  {
    id: "EXP-001",
    title: "生成式 UI 引擎",
    status: "原型",
    tech: ["React", "GPT-4", "Tailwind"],
    desc: "能否通过单个提示词生成生产级 UI 组件？",
    icon: Code2
  },
  {
    id: "EXP-002",
    title: "自主研究 Agent",
    status: "测试中",
    tech: ["LangChain", "Pinecone"],
    desc: "自动阅读论文并总结关键发现的智能体。",
    icon: Bot
  },
  {
    id: "EXP-003",
    title: "语音转代码接口",
    status: "概念",
    tech: ["Whisper", "Codex"],
    desc: "无需键盘编程。纯语音控制实现快速原型开发。",
    icon: Cpu
  },
  {
    id: "EXP-004",
    title: "动态知识图谱",
    status: "已上线",
    tech: ["Neo4j", "LLM"],
    desc: "可视化数千篇研究论文之间的关联。",
    icon: FlaskConical
  }
];

export function LabExperiments() {
  return (
    <section className="py-24 px-6 relative border-t border-black/5 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-slate-600 text-xs font-mono uppercase tracking-wider mb-4"
            >
              <Sparkles className="w-3 h-3" />
              进行中的实验
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">正在进行的实验</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/5 hover:border-black/20 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-xs font-mono text-slate-400 group-hover:text-black transition-colors">
                {exp.id}
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <exp.icon className="w-6 h-6 text-black" />
              </div>

              <h3 className="text-lg font-bold text-black mb-2 group-hover:text-black transition-colors">{exp.title}</h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">{exp.desc}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.tech.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md bg-black/5 text-[10px] font-medium text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
