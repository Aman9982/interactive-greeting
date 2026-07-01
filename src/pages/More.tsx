import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Flower } from '../components/Flower';
import { Chocolate } from '../components/Chocolate';
import { Butterfly } from '../components/Butterfly';
import { Teddy } from '../components/Teddy';

function FlipCard({ item, delay }: { item: any, delay: number, key?: React.Key }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="aspect-square relative cursor-pointer [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-zinc-900/60 border border-zinc-800 rounded-3xl backdrop-blur-sm flex items-center justify-center group shadow-xl">
          {item.front}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 rounded-3xl">
            <span className="text-rose-200 text-[10px] md:text-xs tracking-widest uppercase font-medium">Tap to Flip</span>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-rose-900/40 border border-rose-800/50 rounded-3xl backdrop-blur-sm flex items-center justify-center text-center p-4 shadow-xl" style={{ transform: 'rotateY(180deg)' }}>
          <p className="text-rose-100 font-serif italic text-sm md:text-base leading-snug">{item.message}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function More() {
  const cards = [
    { id: 0, front: <Flower type="tulip" className="static w-16 h-16 md:w-24 md:h-24" />, message: 'You are blooming beautiful!' },
    { id: 1, front: <Chocolate className="static w-16 h-16 md:w-24 md:h-24" />, message: 'Sweetest Malkin ever!' },
    { id: 2, front: <Flower type="lily" className="static w-16 h-16 md:w-24 md:h-24" />, message: 'Pure elegance!' },
    { id: 3, front: <Teddy className="static w-16 h-16 md:w-24 md:h-24" />, message: 'Sending warm hugs!' },
    { id: 4, front: <Flower type="tulip" className="static w-16 h-16 md:w-24 md:h-24" />, message: 'Just for Devi ji!' },
    { id: 5, front: <Chocolate className="static w-16 h-16 md:w-24 md:h-24" />, message: 'A treat for my bestie!' },
    { id: 6, front: <Teddy className="static w-16 h-16 md:w-24 md:h-24" />, message: 'So cute!' },
    { id: 7, front: <Flower type="lily" className="static w-16 h-16 md:w-24 md:h-24" />, message: 'Sparkling always ✨' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative py-20 px-4 overflow-hidden flex flex-col items-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-rose-900/20 via-zinc-950 to-zinc-950"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 to-rose-300 text-transparent bg-clip-text mb-4">
          More Magic
        </h2>
        <p className="text-zinc-400 font-light">Tap the cards to reveal secret messages!</p>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-4 mb-20">
        {cards.map((card, i) => (
          <FlipCard key={card.id} item={card} delay={i * 0.1} />
        ))}
      </div>

      <Butterfly className="top-[40%] right-[-10%] pointer-events-none" duration={10} />
      <Butterfly className="bottom-[20%] left-[-10%] pointer-events-none" duration={14} delay={2} />
    </motion.div>
  );
}
