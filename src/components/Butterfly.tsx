import { motion } from 'motion/react';

interface ButterflyProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export function Butterfly({ className, delay = 0, duration = 15 }: ButterflyProps) {
  // Orange and black (Monarch colors)
  return (
    <motion.div
      className={`absolute w-12 h-12 ${className || ''}`}
      initial={{ x: '-10vw', y: '50vh', rotate: 0 }}
      animate={{
        x: ['-10vw', '30vw', '70vw', '110vw'],
        y: ['50vh', '30vh', '60vh', '20vh'],
        rotate: [10, -10, 20, -20],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {/* 3D Flapping Container */}
      <motion.div
        className="relative w-full h-full flex justify-center items-center"
        animate={{ rotateX: [0, 60, 0] }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]">
          {/* Left Wing */}
          <path
            d="M50 50 C20 10, 0 30, 10 50 C0 70, 20 90, 50 50 Z"
            fill="#ea580c"
            stroke="#000"
            strokeWidth="2"
          />
          {/* Right Wing */}
          <path
            d="M50 50 C80 10, 100 30, 90 50 C100 70, 80 90, 50 50 Z"
            fill="#ea580c"
            stroke="#000"
            strokeWidth="2"
          />
          {/* Body */}
          <ellipse cx="50" cy="50" rx="3" ry="20" fill="#000" />
          {/* Left Antenna */}
          <path d="M48 30 Q40 10 35 15" fill="none" stroke="#000" strokeWidth="1.5" />
          {/* Right Antenna */}
          <path d="M52 30 Q60 10 65 15" fill="none" stroke="#000" strokeWidth="1.5" />
          
          {/* Monarch spots (simplified) */}
          <circle cx="15" cy="45" r="2" fill="#fff" />
          <circle cx="20" cy="35" r="1.5" fill="#fff" />
          <circle cx="85" cy="45" r="2" fill="#fff" />
          <circle cx="80" cy="35" r="1.5" fill="#fff" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
