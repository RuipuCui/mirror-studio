import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import soundtrack from "@/assets/SatpakiRap.mp3";

const STORAGE_KEY = "ambientSoundState";

// Particle type for the "visual notes"
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Restore playback position/state on refresh and persist updates.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

    let savedState: { position?: number; isPlaying?: boolean } | null = null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) savedState = JSON.parse(stored);
    } catch {
      // Ignore invalid storage content
    }

    const persistState = () => {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ position: audio.currentTime, isPlaying: !audio.paused })
      );
    };

    const restoreAndPlay = () => {
      if (savedState?.position !== undefined) {
        const duration = audio.duration;
        const target = Number.isFinite(duration)
          ? Math.min(savedState.position, Math.max(duration - 0.25, 0))
          : savedState.position;
        audio.currentTime = target;
      }

      const shouldPlay = savedState?.isPlaying ?? true;
      if (!shouldPlay) {
        setIsPlaying(false);
        return;
      }

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      } else {
        setIsPlaying(true);
      }
    };

    if (audio.readyState >= 1) {
      restoreAndPlay();
    } else {
      audio.addEventListener("loadedmetadata", restoreAndPlay, { once: true });
    }

    const handlePlay = () => {
      setIsPlaying(true);
      persistState();
    };

    const handlePause = () => {
      setIsPlaying(false);
      persistState();
    };

    const handleTimeUpdate = () => {
      if (!audio.paused) persistState();
    };

    const beforeUnload = () => persistState();

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    window.addEventListener("beforeunload", beforeUnload);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", restoreAndPlay);
      window.removeEventListener("beforeunload", beforeUnload);
      persistState();
    };
  }, []);

  // Particle Generator System
  useEffect(() => {
    if (!isPlaying) {
      setParticles([]);
      return;
    }

    const interval = setInterval(() => {
      // Add a new particle ("note") occasionally
      const id = Date.now();
      const newParticle: Particle = {
        id,
        x: (Math.random() - 0.5) * 60, // Spread horizontally
        y: 0,
        size: Math.random() * 2 + 1, // Tiny specks
        duration: Math.random() * 2 + 2, // Float duration
        delay: 0,
      };

      setParticles(prev => [...prev, newParticle].slice(-20)); // Keep max 20 particles
    }, 400); // Frequency of particles

    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src={soundtrack}
        preload="auto"
        autoPlay
        playsInline
      />

      {/* Container: Fixed Bottom Right, blends into the mirror world */}
      <motion.div
        className="fixed bottom-10 right-10 z-50 flex items-center justify-center pointer-events-auto cursor-pointer mix-blend-difference"
        onClick={toggleSound}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        {/* The Core: A Singularity / Star */}
        <div className="relative flex items-center justify-center">
            
            {/* Core Glow */}
            <motion.div 
                className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                animate={{
                    scale: isPlaying ? [1, 1.5, 1] : 1,
                    opacity: isPlaying ? [0.5, 1, 0.5] : 0.3
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Orbiting Rings (The "Atom") */}
            <motion.div
                className="absolute w-8 h-8 border-[0.5px] border-white/20 rounded-full"
                animate={{
                    rotate: isPlaying ? 360 : 0,
                    scale: isPlaying ? [1, 1.1, 1] : 1
                }}
                transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
            />
             <motion.div
                className="absolute w-12 h-12 border-[0.5px] border-white/10 rounded-full"
                animate={{
                    rotate: isPlaying ? -360 : 0,
                    scale: isPlaying ? [1, 1.2, 1] : 1
                }}
                transition={{
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
            />

            {/* The "Sound Ripples" - Expanding Shockwaves */}
            <AnimatePresence>
                {isPlaying && (
                    <>
                         {[...Array(3)].map((_, i) => (
                             <motion.div
                                key={i}
                                className="absolute border border-white/30 rounded-full"
                                initial={{ width: 0, height: 0, opacity: 0.8 }}
                                animate={{ width: 100, height: 100, opacity: 0 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 1,
                                    ease: "easeOut"
                                }}
                             />
                         ))}
                    </>
                )}
            </AnimatePresence>

            {/* The "Notes" - Floating Shards/Dust */}
            <AnimatePresence>
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: p.x,
                            top: p.y,
                        }}
                        initial={{ opacity: 0, y: 0, scale: 0 }}
                        animate={{ 
                            opacity: [0, 1, 0], 
                            y: -60 - Math.random() * 40, // Float up
                            x: p.x + (Math.random() - 0.5) * 20, // Drift sideways
                            scale: [0, 1, 0]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: p.duration, ease: "easeOut" }}
                    />
                ))}
            </AnimatePresence>

            {/* Hover Text Label - Very Subtle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <span className="text-[8px] tracking-[0.3em] font-light text-white uppercase rotate-90 transform translate-x-10">
                    {isPlaying ? "Active" : "Muted"}
                 </span>
            </div>

        </div>
      </motion.div>
    </>
  );
}
