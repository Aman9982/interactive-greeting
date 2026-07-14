import { motion } from 'motion/react';
import { useState } from 'react';
import type { ReactNode } from 'react';

interface FlipCardProps {
  front: ReactNode;
  message: string;
  delay?: number;
}

export function FlipCard({ front, message, delay = 0 }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={() => setFlipped((current) => !current)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative aspect-square cursor-pointer [perspective:1200px]"
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.25 }}
      >
        <div className="absolute inset-0 flex items-center justify-center rounded-[1.6rem] border border-white/10 bg-slate-950/60 p-4 shadow-[0_24px_60px_rgba(2,6,23,0.5)] backdrop-blur-2xl [backface-visibility:hidden]">
          <div className="absolute inset-0 rounded-[1.6rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_55%)]" />
          <div className="relative z-10">{front}</div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center rounded-[1.6rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/20 via-slate-900/80 to-rose-400/20 p-4 text-center shadow-[0_24px_60px_rgba(2,6,23,0.5)] backdrop-blur-2xl [backface-visibility:hidden]" style={{ transform: 'rotateY(180deg)' }}>
          <p className="text-sm font-medium leading-7 text-slate-200 sm:text-base">{message}</p>
        </div>
      </motion.div>
    </motion.button>
  );
}
