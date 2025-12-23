import { motion } from 'motion/react';
import { Radio, Activity, Wifi } from 'lucide-react';

const signals = [
  { id: 1, label: "Agentic Patterns", status: "Detected", angle: 45, delay: 0 },
  { id: 2, label: "Multimodal UX", status: "Tracking", angle: 120, delay: 1 },
  { id: 3, label: "Spatial Computing", status: "Analyzing", angle: 200, delay: 2 },
  { id: 4, label: "Generative UI", status: "Locked", angle: 300, delay: 3 },
];

export function ResearchRadar() {
  return (
    <section className="py-24 px-6 relative border-y border-black/5 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-blue-600 mb-6">
            <Activity className="w-5 h-5 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider">Live Signal Detection</span>
          </div>
          <h2 className="text-4xl font-bold text-black mb-6">Scanning the Horizon</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            We don't just read papers; we actively scan for emerging patterns. 
            Our research engine is constantly tuned to the faint signals that precede major industry shifts.
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
