import { motion } from 'motion/react';

interface ChocolateProps {
  className?: string;
  delay?: number;
}

export function Chocolate({ className, delay = 0 }: ChocolateProps) {
  return (
    <motion.div
      className={`absolute w-12 h-12 md:w-16 md:h-16 ${className || ''}`}
      initial={{ opacity: 0, y: -50, rotate: -30 }}
      animate={{ opacity: 1, y: 0, rotate: 10 }}
      transition={{ duration: 1, delay, type: 'spring' }}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [10, -5, 10],
        }}
        transition={{
          duration: 3 + Math.random(),
          repeat: Infinity,
          ease: 'easeInOut',
          delay: Math.random() * 2,
        }}
        className="w-full h-full relative"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
          {/* Base Chocolate Block */}
          <rect x="10" y="10" width="80" height="80" rx="10" fill="#3f271d" />
          <rect x="15" y="15" width="70" height="70" rx="8" fill="#4a3024" />
          
          {/* Chocolate Segments */}
          <rect x="20" y="20" width="25" height="25" rx="4" fill="#362118" />
          <rect x="55" y="20" width="25" height="25" rx="4" fill="#362118" />
          <rect x="20" y="55" width="25" height="25" rx="4" fill="#362118" />
          <rect x="55" y="55" width="25" height="25" rx="4" fill="#362118" />
          
          {/* Highlights */}
          <path d="M22 22 L43 22 L43 25 L22 25 Z" fill="#5c3f32" />
          <path d="M57 22 L78 22 L78 25 L57 25 Z" fill="#5c3f32" />
          <path d="M22 57 L43 57 L43 60 L22 60 Z" fill="#5c3f32" />
          <path d="M57 57 L78 57 L78 60 L57 60 Z" fill="#5c3f32" />
        </svg>

        {/* Small floating sparkles around chocolate */}
        <motion.div 
          className="absolute -top-2 -right-2 w-2 h-2 bg-amber-200 rounded-full blur-[1px]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-rose-200 rounded-full blur-[1px]"
          animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}
