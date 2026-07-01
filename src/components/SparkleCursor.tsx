import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export function SparkleCursor() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let idCounter = 0;
    const colors = ['#fecdd3', '#ffe4e6', '#fda4af', '#fef08a']; // Rose & gold tones

    const handleMouseMove = (e: MouseEvent) => {
      // Limit sparkle creation rate
      if (Math.random() > 0.4) return;

      const newSparkle: Sparkle = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setSparkles((prev) => [...prev, newSparkle].slice(-30)); // Keep max 30 sparkles

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 800);
    };

    // Also support touch
    const handleTouchMove = (e: TouchEvent) => {
      if (Math.random() > 0.4) return;
      const touch = e.touches[0];
      const newSparkle: Sparkle = {
        id: idCounter++,
        x: touch.clientX,
        y: touch.clientY,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
      setSparkles((prev) => [...prev, newSparkle].slice(-30));
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 800);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0, x: sparkle.x, y: sparkle.y, rotate: 0 }}
            animate={{
              opacity: 0,
              scale: 1.5,
              x: sparkle.x + (Math.random() * 40 - 20),
              y: sparkle.y + (Math.random() * 40 + 20), // Fall down a bit
              rotate: Math.random() * 180,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute rounded-full"
            style={{
              width: sparkle.size,
              height: sparkle.size,
              backgroundColor: sparkle.color,
              boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
