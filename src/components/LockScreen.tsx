import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Unlock, Sparkles } from 'lucide-react';
import { surpriseConfig } from '../config/surprise';

interface LockScreenProps {
  onUnlock: () => void;
}

export function LockScreen({ onUnlock }: LockScreenProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isUnlocked, setIsUnlocked] = useState(false);
  const targetDate = new Date(`${surpriseConfig.countdownDate}T${surpriseConfig.countdownTime}`).getTime();

  useEffect(() => {
    const interval = window.setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance <= 0 || isUnlocked) {
        window.clearInterval(interval);
        if (!isUnlocked) {
          setIsUnlocked(true);
          window.setTimeout(onUnlock, 1400);
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

    return () => window.clearInterval(interval);
  }, [isUnlocked, onUnlock, targetDate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.18),_transparent_30%),linear-gradient(135deg,_#fff8fb_0%,_#fdf2f8_45%,_#f5ecff_100%)] text-slate-800">
      <div className="absolute inset-0 opacity-75">
        {[...Array(28)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-2 w-2 rounded-full bg-pink-300/70"
            initial={{ x: `${(index * 37) % 100}%`, y: `${(index * 13) % 100}%`, opacity: 0.25 }}
            animate={{ y: [0, -70, 0], opacity: [0.25, 0.9, 0.25] }}
            transition={{ duration: 4 + index * 0.18, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative z-10 mx-4 w-full max-w-3xl rounded-[2.2rem] border border-white/70 bg-white/70 px-6 py-10 text-center shadow-[0_35px_110px_rgba(244,114,182,0.2)] backdrop-blur-2xl sm:px-10"
      >
        <motion.div
          className="mb-6 flex justify-center text-rose-400"
          animate={isUnlocked ? { scale: 1.08, rotate: [0, -8, 8, -4, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          {isUnlocked ? <Unlock size={56} /> : <Lock size={56} />}
        </motion.div>

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-400">
          <Sparkles size={14} />
          A little surprise for you
        </div>

        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-rose-500 sm:text-5xl">{surpriseConfig.heroTitle}</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">{surpriseConfig.countdownMessage}</p>

        {!isUnlocked ? (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-10 text-xl uppercase tracking-[0.32em] text-rose-500">
            Opening your little world...
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-2xl border border-rose-100 bg-white/85 px-3 py-4 shadow-[0_12px_32px_rgba(244,114,182,0.12)] backdrop-blur-xl">
      <div className="text-3xl font-semibold text-rose-500 sm:text-4xl">{value.toString().padStart(2, '0')}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-slate-500">{label}</div>
    </div>
  );
}
