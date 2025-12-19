import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Clock, Zap, Layers, Code2 } from 'lucide-react';

const metrics = [
  { 
    value: 7, 
    suffix: '天', 
    label: '构建周期', 
    sub: '从 0 到 1',
    icon: Clock 
  },
  { 
    value: 24, 
    suffix: 'h', 
    label: '迭代频率', 
    sub: '极速响应',
    icon: Zap 
  },
  { 
    value: 100, 
    suffix: '+', 
    label: '交付质量', 
    sub: '生产级标准',
    icon: Layers 
  },
  { 
    value: 1, 
    suffix: '人', 
    label: '全栈闭环', 
    sub: 'AI 赋能个体',
    icon: Code2 
  }
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000 });
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
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section id="metrics" className="relative flex flex-col justify-center py-24 px-6 bg-black border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-slate-900/50 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>

                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
                
                <div className="text-lg font-medium text-slate-200 mb-1">{metric.label}</div>
                <div className="text-sm text-slate-500">{metric.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
