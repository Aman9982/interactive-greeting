import { motion } from 'motion/react';
import { FlowerType } from '../types';

interface FlowerProps {
  type: FlowerType;
  className?: string;
  delay?: number;
}

export function Flower({ type, className, delay = 0 }: FlowerProps) {
  // Simple elegant SVGs for flowers
  const renderTulip = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
      {/* Stem */}
      <path d="M50 70 Q45 85 50 100" fill="none" stroke="#22c55e" strokeWidth="3" />
      {/* Leaf */}
      <path d="M50 90 Q30 80 40 60 Q45 70 50 90" fill="#22c55e" />
      {/* Flower */}
      <path
        d="M50 70 Q20 50 30 20 Q40 40 50 25 Q60 40 70 20 Q80 50 50 70 Z"
        fill="url(#tulip-grad)"
      />
      <defs>
        <linearGradient id="tulip-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" /> {/* rose-500 */}
          <stop offset="100%" stopColor="#881337" /> {/* rose-900 */}
        </linearGradient>
      </defs>
    </svg>
  );

  const renderLily = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
      {/* Stem */}
      <path d="M50 60 Q55 80 50 100" fill="none" stroke="#22c55e" strokeWidth="3" />
      {/* Leaves */}
      <path d="M50 85 Q70 75 60 55 Q55 70 50 85" fill="#22c55e" />
      <path d="M50 75 Q30 65 40 45 Q45 60 50 75" fill="#22c55e" />
      {/* Flower Petals */}
      <path d="M50 60 Q20 50 10 20 Q35 35 50 60" fill="#fdf2f8" /> {/* pink-50 */}
      <path d="M50 60 Q80 50 90 20 Q65 35 50 60" fill="#fdf2f8" />
      <path d="M50 60 Q30 30 50 5 Q70 30 50 60" fill="#fff" />
      {/* Stamen */}
      <path d="M50 60 Q45 40 40 30" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
      <circle cx="40" cy="30" r="1.5" fill="#d97706" />
      <path d="M50 60 Q55 40 60 30" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
      <circle cx="60" cy="30" r="1.5" fill="#d97706" />
      <path d="M50 60 Q50 35 50 25" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
      <circle cx="50" cy="25" r="1.5" fill="#d97706" />
    </svg>
  );

  return (
    <motion.div
      className={`absolute w-16 h-16 md:w-24 md:h-24 ${className || ''}`}
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 1.5,
        delay,
        type: 'spring',
        bounce: 0.4,
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: Math.random() * 2,
        }}
        className="w-full h-full"
      >
        {type === 'tulip' ? renderTulip() : renderLily()}
      </motion.div>
    </motion.div>
  );
}
