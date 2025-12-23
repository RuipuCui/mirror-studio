import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { FlaskConical, Rocket, XCircle, Timer } from 'lucide-react';

const metrics = [
  { 
    value: 100, 
    suffix: '+', 
    label: 'Ideas Tested', 
    sub: 'Funnel Top',
    icon: FlaskConical,
    trend: 'High Volume'
  },
  { 
    value: 20, 
    suffix: '+', 
    label: 'MVPs Launched', 
    sub: 'Validated',
    icon: Rocket,
    trend: 'Production Ready'
  },
  { 
    value: 80, 
    suffix: '%', 
    label: 'Kill Rate', 
    sub: 'Fast Failures',
    icon: XCircle,
    trend: 'Cost Saving'
  },
  { 
    value: 3, 
    suffix: 'Days', 
    label: 'Avg Cycle', 
    sub: 'Idea to Data',
    icon: Timer,
    trend: 'Hyper Speed'
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
      {displayValue}<span className="text-lg md:text-2xl ml-1 text-slate-400 font-normal">{suffix}</span>
    </span>
  );
}

export function LabMetrics() {
  return (
    <section className="relative py-20 px-6 bg-transparent border-y border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Live Indicator */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 text-xs font-mono uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Lab Activity
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-white p-8 md:p-10 hover:bg-slate-50 transition-colors duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex flex-col h-full justify-between">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-500 group-hover:text-purple-600 transition-colors">
                    <metric.icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-purple-600 bg-purple-500/10 px-2 py-1 rounded">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {metric.trend}
                    </motion.div>
                  </div>
                </div>

                <div>
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                    <Counter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="font-medium text-black mb-1">{metric.label}</div>
                  <div className="text-sm text-slate-400">{metric.sub}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
