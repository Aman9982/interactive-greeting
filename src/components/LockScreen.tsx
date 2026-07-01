import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lock, Unlock } from 'lucide-react';
import { cn } from '../lib/utils';

interface LockScreenProps {
  onUnlock: () => void;
}

export function LockScreen({ onUnlock }: LockScreenProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Target: July 6th, 2026, 00:00:00 IST (UTC+5:30)
  const targetDate = new Date('2026-07-05T18:30:00Z').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0 || isUnlocked) {
        clearInterval(interval);
        if (!isUnlocked) {
          setIsUnlocked(true);
          setTimeout(onUnlock, 1500); // Wait a bit before fully opening
        }
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, isUnlocked, onUnlock]);

  return (
    <div className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center text-rose-100 z-50 overflow-hidden font-sans">
      {/* Sparkles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-rose-300 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          className="mb-8 text-rose-400"
          animate={isUnlocked ? { scale: 1.2, rotate: [0, -10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {isUnlocked ? <Unlock size={64} /> : <Lock size={64} />}
        </motion.div>

        <h1 
          className="text-3xl md:text-5xl mb-2 tracking-wide text-center"
          style={{ fontFamily: 'Georgia', fontWeight: 'bold' }}
        >
          For Malkin / Devi ji
        </h1>
        <p className="text-rose-300/80 mb-12 text-sm md:text-base uppercase tracking-widest text-center">
          A magical surprise awaits
        </p>

        {!isUnlocked ? (
          <div className="flex gap-4 md:gap-8 text-center">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Mins" />
            <TimeUnit value={timeLeft.seconds} label="Secs" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl text-rose-300 tracking-widest"
          >
            UNLOCKING...
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-mono font-light text-rose-200 mb-2 w-16 md:w-20 lg:w-24 bg-rose-950/50 rounded-xl py-4 border border-rose-900/50 backdrop-blur-md shadow-lg flex items-center justify-center">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-rose-400/90 font-semibold">
        {label}
      </div>
    </div>
  );
}
