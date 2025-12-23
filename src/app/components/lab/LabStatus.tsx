import { motion } from 'motion/react';
import { Terminal, Cpu, GitCommit, Clock } from 'lucide-react';

const logs = [
  { time: "09:41:22", type: "INFO", msg: "Initializing environment..." },
  { time: "09:41:24", type: "SUCCESS", msg: "Connected to MirrorNet" },
  { time: "09:41:25", type: "WARN", msg: "High latency detected in node-04" },
  { time: "09:41:28", type: "INFO", msg: "Pulling latest models (v2.4.0)..." },
  { time: "09:41:32", type: "SUCCESS", msg: "Model weights loaded" },
  { time: "09:41:35", type: "INFO", msg: "Starting training sequence..." },
  { time: "09:41:45", type: "INFO", msg: "Optimizing hyperparameters..." },
];

export function LabStatus() {
  return (
    <section className="py-24 px-6 relative border-y border-black/5 bg-slate-50/50 overflow-hidden">
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
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
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
                      ${log.type === 'INFO' ? 'text-blue-400' : ''}
                      ${log.type === 'SUCCESS' ? 'text-green-400' : ''}
                      ${log.type === 'WARN' ? 'text-yellow-400' : ''}
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
          <div className="flex items-center gap-2 text-purple-600 mb-6">
            <Terminal className="w-5 h-5" />
            <span className="font-mono text-xs uppercase tracking-wider">System Status</span>
          </div>
          <h2 className="text-4xl font-bold text-black mb-6">Always Building</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            The Lab is never idle. We are constantly spinning up new environments, testing fresh models, and breaking things in the pursuit of what works.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-black/5">
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Active Sprints</div>
              <div className="text-2xl font-bold text-black flex items-center gap-2">
                3 <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-black/5">
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Deployments</div>
              <div className="text-2xl font-bold text-black">Daily</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
