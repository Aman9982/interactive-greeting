import { motion, AnimatePresence } from 'motion/react';
import { Chocolate } from '../components/Chocolate';
import { Flower } from '../components/Flower';
import { Teddy } from '../components/Teddy';
import { useState } from 'react';

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    { type: 'chocolate', title: 'Sweetness' },
    { type: 'tulip', title: 'Beauty' },
    { type: 'lily', title: 'Elegance' },
    { type: 'teddy', title: 'Cuteness' },
    { type: 'lily', title: 'Grace' },
    { type: 'teddy', title: 'Hugs' },
    { type: 'tulip', title: 'Charm' },
    { type: 'chocolate', title: 'Joy' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-rose-950/20"></div>

      <div className="relative z-10 max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-rose-200 mb-16 italic">
          Gallery of Magic
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              layoutId={`gallery-item-${i}`}
              key={i}
              initial={{ opacity: 0, y: 50, rotate: (i % 2 === 0 ? -5 : 5) }}
              whileInView={{ opacity: 1, y: 0, rotate: (i % 2 === 0 ? -2 : 2) }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -10, rotate: 0, scale: 1.05 }}
              onClick={() => setSelectedId(i)}
              className="bg-white p-3 md:p-4 rounded-sm shadow-2xl pb-12 md:pb-16 relative cursor-pointer group"
            >
              <div className="aspect-square bg-zinc-100 border border-zinc-200 overflow-hidden flex items-center justify-center relative">
                {/* Vintage photo effect */}
                <div className="absolute inset-0 bg-amber-900/5 mix-blend-multiply pointer-events-none"></div>
                
                {item.type === 'chocolate' && <Chocolate className="w-16 h-16 md:w-24 md:h-24 static" />}
                {item.type === 'tulip' && <Flower type="tulip" className="w-16 h-16 md:w-24 md:h-24 static" />}
                {item.type === 'lily' && <Flower type="lily" className="w-16 h-16 md:w-24 md:h-24 static" />}
                {item.type === 'teddy' && <Teddy className="w-16 h-16 md:w-24 md:h-24 static" />}

                <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white font-medium tracking-widest uppercase text-xs">Tap to view</span>
                </div>
              </div>
              <div className="absolute bottom-3 md:bottom-4 left-0 right-0 text-center">
                <span className="font-serif text-sm md:text-xl text-zinc-800 tracking-widest">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              layoutId={`gallery-item-${selectedId}`}
              className="bg-white p-4 md:p-8 rounded-sm shadow-2xl pb-24 md:pb-32 relative max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-square bg-zinc-100 border border-zinc-200 overflow-hidden flex items-center justify-center relative shadow-inner">
                <div className="absolute inset-0 bg-amber-900/5 mix-blend-multiply pointer-events-none"></div>
                {items[selectedId].type === 'chocolate' && <Chocolate className="w-32 h-32 md:w-48 md:h-48 static" />}
                {items[selectedId].type === 'tulip' && <Flower type="tulip" className="w-32 h-32 md:w-48 md:h-48 static" />}
                {items[selectedId].type === 'lily' && <Flower type="lily" className="w-32 h-32 md:w-48 md:h-48 static" />}
                {items[selectedId].type === 'teddy' && <Teddy className="w-32 h-32 md:w-48 md:h-48 static" />}
              </div>
              <div className="absolute bottom-6 md:bottom-8 left-0 right-0 text-center px-4">
                <span className="font-serif text-2xl md:text-4xl text-zinc-800 tracking-widest block mb-2">{items[selectedId].title}</span>
                <p className="text-zinc-500 font-light text-sm md:text-base">A little moment of magic for Malkin ✨</p>
              </div>
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
