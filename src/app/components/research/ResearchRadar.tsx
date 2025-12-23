import { motion } from 'motion/react';
import { Radio, Activity, Wifi } from 'lucide-react';

const signals = [
  { id: 1, label: "Agentic 模式", status: "已检测", angle: 45, delay: 0 },
  { id: 2, label: "多模态交互", status: "追踪中", angle: 120, delay: 1 },
  { id: 3, label: "空间计算", status: "分析中", angle: 200, delay: 2 },
  { id: 4, label: "生成式 UI", status: "已锁定", angle: 300, delay: 3 },
];

export function ResearchRadar() {
  return (
    <section className="py-24 px-6 relative border-y border-black/5 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-blue-600 mb-6">
            <Activity className="w-5 h-5 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider">实时信号监测</span>
          </div>
          <h2 className="text-4xl font-bold text-black mb-6">扫描前沿</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            我们不只是阅读论文，我们主动扫描涌现的模式。<br/>
            我们的研究引擎时刻调整频率，捕捉那些预示行业巨变的微弱信号。
          </p>
          
          <div className="space-y-4">
            {signals.map((signal) => (
              <div key={signal.id} className="flex items-center justify-between p-4 bg-white rounded-xl border border-black/5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="font-medium text-black">{signal.label}</span>
                </div>
                <span className="text-xs font-mono text-slate-400 uppercase">{signal.status}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Radar Visual */}
        <div className="relative flex items-center justify-center h-[400px] lg:h-[500px]">
          {/* Concentric Circles */}
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="absolute rounded-full border border-black/5"
              style={{ width: `${i * 30}%`, height: `${i * 30}%` }}
            />
          ))}
          <div className="absolute w-[90%] h-[90%] rounded-full border border-black/5" />

          {/* Scanning Line */}
          <motion.div
            className="absolute w-[45%] h-[45%] origin-bottom-right bg-gradient-to-tl from-blue-500/20 to-transparent rounded-tl-full"
            style={{ top: '5%', left: '5%' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Center Point */}
          <div className="absolute w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] z-10" />

          {/* Blips */}
          {signals.map((signal, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: signal.delay,
                repeatDelay: 2 
              }}
              style={{
                top: `${50 - 35 * Math.sin(signal.angle * Math.PI / 180)}%`,
                left: `${50 + 35 * Math.cos(signal.angle * Math.PI / 180)}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
