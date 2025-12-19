import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Clock, Zap, Layers, Code2, Activity } from 'lucide-react';

const metrics = [
  { 
    value: 7, 
    suffix: 'Days', 
    label: '构建周期', 
    sub: 'From 0 to 1',
    icon: Clock,
    trend: '+120% Speed'
  },
  { 
    value: 24, 
    suffix: 'Hours', 
    label: '迭代频率', 
    sub: 'Rapid Response',
    icon: Zap,
    trend: 'Real-time'
  },
  { 
    value: 100, 
    suffix: '%', 
    label: '交付质量', 
    sub: 'Production Ready',
    icon: Layers,
    trend: '0 Critical Bugs'
  },
  { 
    value: 1, 
    suffix: 'Man', 
    label: '全栈闭环', 
    sub: 'AI Empowered',
    icon: Code2,
    trend: '10x Efficiency'
  }
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.round(current));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  useEffect(() => {
    return display.on("change", (latest) => setDisplayValue(latest));
  }, [display]);

  return (
    <span ref={ref} className="tabular-nums tracking-tight">
      {displayValue}<span className="text-lg md:text-2xl ml-1 text-slate-500 font-normal">{suffix}</span>
    </span>
  );
}

export function Metrics() {
  return (
    <section id="metrics" className="relative py-20 px-6 bg-black border-y border-white/5 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Live Indicator */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System Metrics
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-black p-8 md:p-10 hover:bg-slate-900/40 transition-colors duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex flex-col h-full justify-between">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-2 rounded-lg bg-white/5 text-slate-400 group-hover:text-white transition-colors">
                    <metric.icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                    <Activity className="w-3 h-3" />
                    {metric.trend}
                  </div>
                </div>

                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <Counter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="text-sm font-medium text-slate-200 uppercase tracking-wider mb-1">{metric.label}</div>
                  <div className="text-xs text-slate-500 font-mono">{metric.sub}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
