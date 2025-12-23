import { motion } from 'motion/react';

export function PageBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      
      {/* Moving Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-60">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        
        {/* Animated Paths */}
        <motion.path
          d="M0,100 Q400,300 800,100 T1600,100"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeDasharray="10 10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        
        <motion.path
          d="M0,600 Q600,400 1200,600 T2400,600"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeDasharray="20 20"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 7, ease: "linear", repeat: Infinity }}
        />
      </svg>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 border border-black/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-10 w-96 h-96 border border-black/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
