import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function GlassButton({ children, href, onClick, className = '' }: GlassButtonProps) {
  const classes = `group relative inline-flex items-center justify-center rounded-full border border-white/70 bg-white/70 px-6 py-3 text-sm font-semibold tracking-[0.24em] uppercase text-rose-600 shadow-[0_20px_60px_rgba(244,114,182,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_30px_80px_rgba(236,72,153,0.2)] ${className}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        onClick={onClick}
        className={classes}
      >
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),_transparent_70%)] opacity-80" />
        <span className="relative">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={classes}
    >
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),_transparent_70%)] opacity-80" />
      <span className="relative">{children}</span>
    </motion.button>
  );
}
