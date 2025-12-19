import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Maximize2, Globe, ArrowUpRight } from 'lucide-react';

const demos = [
  {
    title: 'AI 文档助手',
    description: '基于 RAG 的文档问答系统，支持实时对话',
    tags: ['Web', 'AI', 'RAG'],
    image: 'ai document workspace',
    color: 'from-white/10 to-slate-500/10'
  },
  {
    title: 'SaaS 仪表盘',
    description: '包含支付与用户管理的数据分析平台',
    tags: ['SaaS', 'Deploy', 'Web'],
    image: 'modern dashboard analytics',
    color: 'from-white/10 to-slate-500/10'
  }
];

export function DemoShowcase() {
  return (
    <section id="demo-showcase" className="relative flex flex-col justify-center py-24 px-6 bg-black border-t border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              案例展示
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            看看我们构建了什么——真实项目，真实结果
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Browser Frame */}
              <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]">
                {/* Browser Header */}
                <div className="h-8 bg-slate-950 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="ml-4 flex-1 h-4 bg-white/5 rounded-full max-w-[200px]" />
                </div>

                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay`} />
                  
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800`}
                    alt={demo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <button className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md border border-white/20">
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Below */}
              <div className="mt-6 px-2">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                    {demo.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {demo.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {demo.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-slate-300 border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {tag}
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
