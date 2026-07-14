import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { PageShell } from '../components/PageShell';
import { surpriseConfig } from '../config/surprise';

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const items = surpriseConfig.galleryImages;

  return (
    <PageShell className="overflow-hidden px-4 py-24 sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.12),_transparent_24%),radial-gradient(circle_at_bottom,_rgba(167,139,250,0.1),_transparent_24%)]" />

      <div className="relative z-10 mx-auto mb-16 max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-400">Our scrapbook</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-rose-500 sm:text-5xl">A little album of beautiful moments.</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.button
              type="button"
              layoutId={`gallery-item-${index}`}
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -2 : 2, scale: 1.03 }}
              onClick={() => setSelectedId(index)}
              className="group relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/70 p-3 text-left shadow-[0_18px_45px_rgba(244,114,182,0.14)] backdrop-blur-xl"
            >
              <div className="absolute left-3 top-3 h-8 w-8 rotate-[-8deg] rounded-full border border-rose-100 bg-white/70" />
              <div className="aspect-[3/4] overflow-hidden rounded-[1.2rem]">
                <img src={item.src} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-rose-500">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.note}</p>
              </div>
            </motion.button>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-rose-950/70 p-4 backdrop-blur-xl"
          >
            <motion.div
              layoutId={`gallery-item-${selectedId}`}
              className="w-full max-w-lg rounded-[2rem] border border-white/20 bg-white/90 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.25)]"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={items[selectedId].src} alt={items[selectedId].title} className="h-80 w-full rounded-[1.4rem] object-cover" />
              <div className="mt-6 text-center">
                <p className="text-sm uppercase tracking-[0.32em] text-rose-400">Featured memory</p>
                <h3 className="mt-2 text-2xl font-semibold text-rose-500">{items[selectedId].title}</h3>
                <p className="mt-3 text-slate-500">{items[selectedId].note}</p>
              </div>
              <button type="button" onClick={() => setSelectedId(null)} className="mt-6 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-500 transition hover:bg-rose-100">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
