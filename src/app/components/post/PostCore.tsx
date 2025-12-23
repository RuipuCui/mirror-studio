import { motion } from 'motion/react';
import { FileText, ShieldCheck, Users, XCircle, AlertTriangle } from 'lucide-react';

const NOT_ITEMS = ["简单的公众号运营", "帮忙写点宣传文案", "流量导向/标题党", "外包式 Marketing", "短期热点追逐", "无脑搬运工"];

export function PostCore() {
  return (
    <section className="py-32 px-6 relative bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        
        {/* What it is NOT - Marquee */}
        <div className="mb-24 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h2 className="text-2xl font-bold text-black">先排雷：MirrorPost 不是什么</h2>
          </div>

          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex gap-4 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...NOT_ITEMS, ...NOT_ITEMS, ...NOT_ITEMS].map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-500 shrink-0">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Core Tasks - Bento Grid */}
        <div>
          <h2 className="text-5xl font-bold text-black mb-16 tracking-tight">真正要做的三件事</h2>
          <div className="grid md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            
            {/* Task 1 - Large Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 p-10 rounded-[2.5rem] bg-black text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 backdrop-blur-sm">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">1. 把「真实过程」变成「可信内容」</h3>
                  <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                    WhiteMirror 的最大优势是真实发生的事情很多。MirrorPost 的工作是把这些真实过程结构化，让外部人看得懂。
                  </p>
                </div>
                <div className="mt-8">
                  <span className="px-4 py-2 rounded-full bg-white/10 text-sm font-mono text-white/80 border border-white/10">
                    不是编故事，是翻译现实
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Task 2 - Tall Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:row-span-2 p-10 rounded-[2.5rem] bg-slate-50 border border-black/5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00000008_0%,transparent_40%)]" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center mb-8 shadow-sm">
                  <ShieldCheck className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-3xl font-bold mb-6">2. 建立 WhiteMirror 的「长期信用」</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow">
                  让外界看到我们的连续性和可追溯性。让每一次新合作、招生、科研，都“站在过去的积累上”。
                </p>
                <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Asset Value</div>
                  <div className="text-2xl font-bold text-black">Long-term Trust</div>
                </div>
              </div>
            </motion.div>

            {/* Task 3 - Standard Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-sm relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center h-full">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">3. 服务「招生 / 合作 / 招人」的底层支撑</h3>
                  <p className="text-slate-600 leading-relaxed">
                    学生、老师、合作方为什么信你？答案不是一句 pitch，而是他们在你过往内容中已经看懂你是谁了。
                  </p>
                </div>
                <div className="shrink-0">
                   <span className="px-4 py-2 rounded-full bg-slate-100 text-sm font-mono text-slate-600 border border-black/5">
                    转化的信任基石
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
