import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface PageShellProps {
  className?: string;
  children: ReactNode;
}

export function PageShell({ className = '', children }: PageShellProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </motion.main>
  );
}
