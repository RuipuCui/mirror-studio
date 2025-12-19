import { motion } from 'motion/react';
import { Code2, Database, Globe, Layout, Server, Sparkles, Workflow, Zap } from 'lucide-react';

const delivery = [
  { icon: Globe, text: 'Landing / 营销站点' },
  { icon: Layout, text: 'SaaS 仪表盘' },
  { icon: Database, text: '管理后台' },
  { icon: Server, text: '支付 / 鉴权 / CRM 集成' },
  { icon: Zap, text: '部署与监控' }
];

const ai = [
  { icon: Database, text: 'RAG (文档问答)' },
  { icon: Workflow, text: 'Agent 工作流' },
  { icon: Sparkles, text: '工具调用 / 自动化' },
  { icon: Code2, text: 'Prompt 调优 / 评测' }
];

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
  'Supabase', 'PostgreSQL', 'Vercel', 'OpenAI'
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative flex flex-col justify-center py-24 px-6 bg-black border-t border-white/5 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              核心能力
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            全栈交付 + AI 集成，构建下一代智能应用
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {/* Delivery Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }
              }
            }}
            className="group relative p-10 rounded-2xl bg-black border border-white/10 hover:border-white/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-white">
                  <Layout className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white">系统交付</h3>
              </div>
              
              <div className="grid gap-4">
                {delivery.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group/item"
                  >
                    <item.icon className="w-5 h-5 text-slate-500 group-hover/item:text-white transition-colors" />
                    <span className="text-gray-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }
              }
            }}
            className="group relative p-10 rounded-2xl bg-black border border-white/10 hover:border-white/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-white">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white">AI 能力</h3>
              </div>
              
              <div className="grid gap-4">
                {ai.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group/item"
                  >
                    <item.icon className="w-5 h-5 text-slate-500 group-hover/item:text-white transition-colors" />
                    <span className="text-gray-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">Powered By Modern Tech Stack</div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-6 py-3 rounded-full bg-slate-900/50 border border-white/10 text-sm md:text-base text-slate-300 font-medium backdrop-blur-sm transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
