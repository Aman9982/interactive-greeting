import { motion } from 'motion/react';
import React from 'react';

interface TeddyProps {
  className?: string;
  delay?: number;
  key?: React.Key;
}

export function Teddy({ className = "", delay = 0 }: TeddyProps) {
  return (
    <motion.div
      className={`relative w-24 h-24 md:w-32 md:h-32 ${className}`}
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", bounce: 0.6, duration: 1 }}
      whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
          {/* Teddy Bear SVG */}
          {/* Ears */}
          <circle cx="25" cy="25" r="12" fill="#8B4513" />
          <circle cx="25" cy="25" r="6" fill="#D2B48C" />
          <circle cx="75" cy="25" r="12" fill="#8B4513" />
          <circle cx="75" cy="25" r="6" fill="#D2B48C" />
          
          {/* Arms */}
          <ellipse cx="20" cy="65" rx="10" ry="20" fill="#8B4513" transform="rotate(30 20 65)" />
          <ellipse cx="80" cy="65" rx="10" ry="20" fill="#8B4513" transform="rotate(-30 80 65)" />

          {/* Legs */}
          <ellipse cx="35" cy="85" rx="12" ry="15" fill="#8B4513" />
          <circle cx="35" cy="88" r="6" fill="#D2B48C" />
          <ellipse cx="65" cy="85" rx="12" ry="15" fill="#8B4513" />
          <circle cx="65" cy="88" r="6" fill="#D2B48C" />

          {/* Body */}
          <ellipse cx="50" cy="65" rx="25" ry="30" fill="#A0522D" />
          <ellipse cx="50" cy="70" rx="15" ry="18" fill="#D2B48C" />
          
          {/* Head */}
          <circle cx="50" cy="40" r="22" fill="#A0522D" />
          
          {/* Snout */}
          <ellipse cx="50" cy="45" rx="10" ry="8" fill="#D2B48C" />
          <ellipse cx="50" cy="42" rx="4" ry="3" fill="#000000" />
          <path d="M50 45 Q50 50 45 50 M50 45 Q50 50 55 50" fill="none" stroke="#000000" strokeWidth="1.5" />
          
          {/* Eyes */}
          <circle cx="42" cy="35" r="3" fill="#000000" />
          <circle cx="41" cy="34" r="1" fill="#FFFFFF" />
          <circle cx="58" cy="35" r="3" fill="#000000" />
          <circle cx="57" cy="34" r="1" fill="#FFFFFF" />
          
          {/* Bow tie */}
          <path d="M50 55 L40 50 L40 60 Z" fill="#DC143C" />
          <path d="M50 55 L60 50 L60 60 Z" fill="#DC143C" />
          <circle cx="50" cy="55" r="3" fill="#8B0000" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
