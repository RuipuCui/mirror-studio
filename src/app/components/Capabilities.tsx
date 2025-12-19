import { motion } from 'motion/react';
import { 
  Layout, Smartphone, Database, Server, 
  Bot, Search, Wand2, Cpu,
  Box, Layers, Terminal, Code2, Brain
} from 'lucide-react';

const techStack = [
  {
    category: "Delivery",
    title: "全平台交付",
    description: "构建完整的数字产品生态",
    items: [
      { icon: Layout, label: "Web App", sub: "Next.js / React" },
      { icon: Smartphone, label: "Mobile", sub: "Responsive / PWA" },
      { icon: Database, label: "Backend", sub: "Supabase / Postgres" },
      { icon: Server, label: "Infra", sub: "Vercel / Edge" }
    ]
  },
  {
    category: "Intelligence",
    title: "AI 核心集成",
    description: "赋予产品智能与推理能力",
    items: [
      { icon: Bot, label: "LLM", sub: "GPT-4 / Claude 3" },
      { icon: Search, label: "RAG", sub: "Vector DB / Embeddings" },
      { icon: Wand2, label: "GenUI", sub: "Generative Interface" },
      { icon: Cpu, label: "Agents", sub: "LangChain / AutoGPT" }
    ]
  }
];

const modules = [
  { label: "Auth & Security", icon: Terminal },
  { label: "Payments", icon: Layers },
  { label: "Analytics", icon: Box },
  { label: "CMS", icon: Code2 },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-32 px-6 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Left Aligned */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400 mb-6"
          >
            <Box className="w-4 h-4" />
            <span>Tech Stack & Modules</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            全栈技术能力
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            从底层架构到顶层交互，我们提供完整的技术积木，
            <br className="hidden md:block" />
            像搭乐高一样构建你的商业系统。
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-slate-900/20 border border-white/10 hover:border-white/20 transition-colors duration-500"
            >
              <div className="relative z-10 p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-2">{stack.category}</div>
                    <h3 className="text-3xl font-bold text-white">{stack.title}</h3>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    {index === 0 ? <Layers className="w-6 h-6 text-white" /> : <Brain className="w-6 h-6 text-white" />}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-10">{stack.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {stack.items.map((item, i) => (
                    <div key={i} className="group/item flex flex-col p-4 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-all duration-300">
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: i * 0.2 
                        }}
                      >
                        <item.icon className="w-6 h-6 text-slate-400 group-hover/item:text-white mb-3 transition-colors" />
                      </motion.div>
                      <div className="font-medium text-slate-200">{item.label}</div>
                      <div className="text-xs text-slate-500 font-mono mt-1">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Strip - Common Modules */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {modules.map((mod, i) => (
            <div key={i} className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300">
              <mod.icon className="w-5 h-5" />
              <span className="font-medium">{mod.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
