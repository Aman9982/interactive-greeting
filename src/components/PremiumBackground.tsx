import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const floatingOrbs = [
  { id: 1, className: 'left-[6%] top-[10%] h-56 w-56 bg-fuchsia-400/20', duration: 18, delay: 0 },
  { id: 2, className: 'right-[8%] top-[14%] h-72 w-72 bg-violet-400/15', duration: 22, delay: 2 },
  { id: 3, className: 'bottom-[12%] left-[20%] h-64 w-64 bg-amber-300/15', duration: 20, delay: 4 },
  { id: 4, className: 'bottom-[8%] right-[16%] h-60 w-60 bg-rose-400/18', duration: 24, delay: 6 },
];

const particlePositions = [
  { left: '12%', top: '22%', size: '8px' },
  { left: '24%', top: '70%', size: '10px' },
  { left: '78%', top: '16%', size: '7px' },
  { left: '88%', top: '72%', size: '9px' },
  { left: '42%', top: '16%', size: '6px' },
  { left: '56%', top: '84%', size: '8px' },
  { left: '72%', top: '40%', size: '5px' },
];

const petalPositions = [
  { left: '10%', top: '24%', rotate: '-12deg' },
  { left: '82%', top: '28%', rotate: '18deg' },
  { left: '18%', top: '78%', rotate: '22deg' },
  { left: '80%', top: '72%', rotate: '-8deg' },
];

export function PremiumBackground() {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handlePointerMove = (event: MouseEvent) => {
      setPointer({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1),_transparent_24%)]" />

      {floatingOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          animate={{
            x: [0, 26, -18, 0],
            y: [0, -20, 18, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: orb.duration, delay: orb.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: `translate(${(pointer.x - 0.5) * 16}px, ${(pointer.y - 0.5) * 16}px)`,
          }}
        />
      ))}

      {petalPositions.map((petal, index) => (
        <motion.div
          key={`${petal.left}-${petal.top}`}
          className="absolute h-4 w-4 rounded-full bg-white/60"
          style={{ left: petal.left, top: petal.top, rotate: petal.rotate }}
          animate={{ y: [0, -12, 0], opacity: [0.5, 0.9, 0.5], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {particlePositions.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-white/70"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ opacity: [0.35, 0.9, 0.35], y: [0, -12, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.75), transparent)',
        }}
      />
    </div>
  );
}
