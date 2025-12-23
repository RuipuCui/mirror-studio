import { motion } from 'motion/react';
import { Terminal, Cpu, GitCommit, Clock } from 'lucide-react';

const logs = [
  { time: "09:41:22", type: "INFO", msg: "正在初始化环境..." },
  { time: "09:41:24", type: "SUCCESS", msg: "已连接至 MirrorNet" },
  { time: "09:41:25", type: "WARN", msg: "检测到节点-04 高延迟" },
  { time: "09:41:28", type: "INFO", msg: "正在拉取最新模型 (v2.4.0)..." },
  { time: "09:41:32", type: "SUCCESS", msg: "模型权重已加载" },
  { time: "09:41:35", type: "INFO", msg: "开始训练序列..." },
  { time: "09:41:45", type: "INFO", msg: "正在优化超参数..." },
];

export function LabStatus() {
  return (
    <section className="py-24 px-6 relative border-y border-black/5 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Terminal Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="bg-black rounded-xl overflow-hidden shadow-2xl border border-black/10 font-mono text-sm">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/10 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="text-white/30 text-xs">lab-terminal — zsh</div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 text-white/80 h-[300px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none z-10" />
              
              <div className="space-y-2">
                {logs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.5 }}
                    className="flex gap-3"
                  >
                    <span className="text-white/30 select-none">{log.time}</span>
                    <span className={`
                      ${log.type === 'INFO' ? 'text-white/60' : ''}
                      ${log.type === 'SUCCESS' ? 'text-white' : ''}
                      ${log.type === 'WARN' ? 'text-white/40' : ''}
                    `}>[{log.type}]</span>
                    <span>{log.msg}</span>
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-white/50 align-middle ml-1"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="flex items-center gap-2 text-slate-600 mb-6">
            <Terminal className="w-5 h-5" />
            <span className="font-mono text-xs uppercase tracking-wider">系统状态</span>
          </div>
          <h2 className="text-4xl font-bold text-black mb-6">持续构建</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            实验室从不停歇。我们不断启动新环境，测试新模型，在追求可行的道路上不断试错。
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-black/5">
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">活跃冲刺</div>
              <div className="text-2xl font-bold text-black flex items-center gap-2">
                3 <span className="flex h-2 w-2 rounded-full bg-black animate-pulse" />
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-black/5">
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">部署频率</div>
              <div className="text-2xl font-bold text-black">每日</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
