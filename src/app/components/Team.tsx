import { motion } from 'motion/react';
import { Building2, FlaskConical, Lightbulb, Package, Rocket } from 'lucide-react';

const orgs = [
  {
    icon: FlaskConical,
    name: 'MirrorLabs',
    role: '0 到 1 (MVP 验证)',
    description: '将想法转化为最小可行性产品 (MVP)，快速验证核心价值，解决“做不做”的问题。'
  },
  {
    icon: Building2,
    name: 'MirrorStudio',
    role: '1 到 100 (系统交付)',
    description: '将已验证的 MVP 转化为成熟的生产级系统，解决“如何规模化与落地”的问题。'
  }
];

const MovingIcon = ({ icon: Icon, delay }: { icon: any, delay: number }) => (
  <div className="relative w-full h-12 flex items-center justify-center overflow-visible">
    <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200" />
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 20, opacity: [0, 1, 1, 0] }}
      transition={{ 
        duration: 1.5, 
        repeat: Infinity, 
        delay: delay,
        ease: "linear",
        repeatDelay: 0.2
      }}
      className="relative z-10 p-3 rounded-full bg-white border border-black/10 text-black shadow-[0_0_15px_rgba(0,0,0,0.1)]"
    >
      <Icon className="w-5 h-5" />
    </motion.div>
  </div>
);

export function Team() {
  return (
    <section id="team" className="relative flex flex-col justify-center py-24 px-6 bg-white border-t border-black/5">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">生态定位</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
            WhiteMirror 不是一个“单点产品”，而是一个完整链路。
            <br />
            <span className="text-slate-400">想法与问题 (0-1) → 系统实现 (1-100) → 放大、教学、传播</span>
          </p>
        </motion.div>

        {/* Assembly Line Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
          
          {/* Start Node */}
          <div className="hidden lg:flex flex-col items-center justify-center w-24 shrink-0">
            <div className="w-4 h-4 rounded-full bg-slate-300 border border-slate-400" />
            <div className="mt-3 text-xs font-mono text-slate-400">IDEA</div>
          </div>

          {/* Path 1: Idea -> Labs */}
          <div className="hidden lg:block w-24 shrink-0">
            <MovingIcon icon={Lightbulb} delay={0} />
          </div>

          {/* Card 1: MirrorLabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[400px] group relative p-8 rounded-2xl bg-slate-50 border border-black/10 hover:border-black/20 transition-colors duration-300 text-center"
          >
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-black/10 mb-6 group-hover:scale-110 group-hover:border-black/20 transition-all duration-300 shadow-sm">
              <FlaskConical className="w-10 h-10 text-slate-600 group-hover:text-black transition-colors" />
            </div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-2 text-black">MirrorLabs</h3>
              <div className="text-sm font-bold mb-4 px-3 py-1 rounded-full inline-block border bg-black/5 border-black/10 text-black">
                0 到 1 (MVP 验证)
              </div>
              <div className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-800 transition-colors space-y-2 text-left pl-4 border-l border-black/10">
                <p>• 收集真实问题与探索方向</p>
                <p>• 快速做 MVP 验证</p>
                <p>• 判断「值不值得做」</p>
              </div>
            </div>
          </motion.div>

          {/* Path 2: Labs -> Studio */}
          <div className="hidden lg:block w-24 shrink-0">
            <MovingIcon icon={Package} delay={0.75} />
          </div>

          {/* Card 2: MirrorStudio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              scale: { duration: 0.3, delay: 0 }
            }}
            className="w-full lg:w-[400px] group relative p-8 rounded-2xl bg-black text-white border border-black/10 text-center shadow-xl"
          >
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white text-black mb-6 shadow-xl">
              <Building2 className="w-10 h-10" />
            </div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-2">MirrorStudio</h3>
              <div className="text-sm font-bold mb-4 px-3 py-1 rounded-full inline-block bg-white text-black">
                1 到 100 (系统交付)
              </div>
              <div className="text-slate-300 text-sm leading-relaxed space-y-2 text-left pl-4 border-l border-white/20">
                <p>• 接手已经被验证的方向</p>
                <p>• 用 AI 变成网站/系统/工具</p>
                <p>• 快速上线、快速迭代</p>
              </div>
            </div>
          </motion.div>


          {/* Path 3: Studio -> Product */}
          <div className="hidden lg:block w-24 shrink-0">
            <MovingIcon icon={Rocket} delay={1.5} />
          </div>

          {/* End Node */}
          <div className="hidden lg:flex flex-col items-center justify-center w-24 shrink-0">
            <div className="w-4 h-4 rounded-full bg-black border border-black shadow-[0_0_15px_rgba(0,0,0,0.2)]" />
            <div className="mt-3 text-xs font-mono text-black">PRODUCT</div>
          </div>

        </div>
      </div>
    </section>
  );
}
