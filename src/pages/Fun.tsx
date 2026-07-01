import { motion, AnimatePresence } from 'motion/react';
import { Teddy } from '../components/Teddy';
import { Flower } from '../components/Flower';
import { Butterfly } from '../components/Butterfly';
import React, { useState } from 'react';

export function FunPage() {
  const [messages, setMessages] = useState<{id: number, x: number, y: number, text: string}[]>([]);

  const sweetMessages = [
    "You're the best!",
    "Happy Birthday Malkin!",
    "Devi ji ✨",
    "I love you ❤️",
    "My favorite person",
    "Smile!",
    "Lots of chocolate for you 🍫",
    "Stay magical 🦋",
    "Happy Birthday in advance!",
    "Big hug! 🧸"
  ];

  const handlePointerDown = (e: React.PointerEvent) => {
    const text = sweetMessages[Math.floor(Math.random() * sweetMessages.length)];
    const id = Date.now() + Math.random();
    
    setMessages(prev => [...prev, {id, x: e.clientX, y: e.clientY, text}]);
    
    setTimeout(() => {
      setMessages(prev => prev.filter(m => m.id !== id));
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onPointerDown={handlePointerDown}
      className="min-h-screen relative py-20 px-4 overflow-hidden flex flex-col items-center justify-center cursor-pointer"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-900/30 via-zinc-950 to-zinc-950 pointer-events-none"></div>

      <AnimatePresence>
        {messages.map(m => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, scale: 0.5, x: m.x - 100, y: m.y - 20 }}
            animate={{ opacity: 1, scale: 1, y: m.y - 150 }}
            exit={{ opacity: 0, scale: 1.2, y: m.y - 200 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="fixed z-50 text-rose-300 font-bold text-xl md:text-3xl whitespace-nowrap pointer-events-none drop-shadow-2xl text-center w-[200px]"
          >
            {m.text}
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center mb-12 pointer-events-none">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-amber-200 mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          Tap & Drag!
        </motion.h2>
        <p className="text-zinc-300 text-lg">Tap the screen for messages. Drag the Teddies around!</p>
      </div>

      <div className="relative z-20 flex flex-wrap justify-center gap-6 md:gap-12 items-center p-4 md:p-8 w-full max-w-6xl mb-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
            whileDrag={{ scale: 1.2, cursor: "grabbing" }}
            whileHover={{ scale: 1.1 }}
            className="cursor-grab p-2 md:p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 shadow-xl"
            onPointerDown={(e) => e.stopPropagation()} 
          >
            <Teddy delay={i * 0.1} className="w-16 h-16 md:w-28 md:h-28" />
          </motion.div>
        ))}
      </div>

      <Butterfly className="top-[20%] right-[10%] pointer-events-none" duration={8} />
      <Butterfly className="bottom-[30%] left-[5%] pointer-events-none" duration={12} delay={1} />
    </motion.div>
  );
}
