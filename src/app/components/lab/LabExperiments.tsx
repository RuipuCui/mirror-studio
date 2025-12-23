import { motion } from 'motion/react';
import { FlaskConical, Bot, Code2, Cpu, Sparkles, ArrowRight } from 'lucide-react';

const experiments = [
  {
    id: "EXP-001",
    title: "Generative UI Engine",
    status: "Prototype",
    tech: ["React", "GPT-4", "Tailwind"],
    desc: "Can we generate production-ready UI components from a single prompt?",
    icon: Code2
  },
  {
    id: "EXP-002",
    title: "Autonomous Research Agent",
    status: "Testing",
    tech: ["LangChain", "Pinecone"],
    desc: "An agent that reads papers and summarizes key findings automatically.",
    icon: Bot
  },
  {
    id: "EXP-003",
    title: "Voice-to-Code Interface",
    status: "Concept",
    tech: ["Whisper", "Codex"],
    desc: "Coding without a keyboard. Pure voice control for rapid prototyping.",
    icon: Cpu
  },
  {
    id: "EXP-004",
    title: "Dynamic Knowledge Graph",
    status: "Live",
    tech: ["Neo4j", "LLM"],
    desc: "Visualizing the connections between thousands of research papers.",
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 text-xs font-mono uppercase tracking-wider mb-4"
            >
              <Sparkles className="w-3 h-3" />
              Active Experiments
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">正在进行的实验</h2>
          </div>
          <div className="hidden md:block">
            <a href="#" className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-black transition-colors">
              View Archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
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
              className="group relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/5 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-xs font-mono text-slate-400 group-hover:text-purple-500 transition-colors">
                {exp.id}
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-purple-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <exp.icon className="w-6 h-6 text-purple-600" />
              </div>

              <h3 className="text-lg font-bold text-black mb-2 group-hover:text-purple-700 transition-colors">{exp.title}</h3>
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
