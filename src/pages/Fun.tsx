import { AnimatePresence, motion } from 'motion/react';
import { Heart, Sparkles, Gift, RotateCw, Star, CupSoda, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { PageShell } from '../components/PageShell';

export function FunPage() {
  const [messages, setMessages] = useState<{ id: number; x: number; y: number; text: string }[]>([]);
  const [spinCount, setSpinCount] = useState(0);
  const [giftOpened, setGiftOpened] = useState(false);
  const [pickedChocolate, setPickedChocolate] = useState<string | null>(null);
  const compliments = useMemo(
    () => ['You are my favorite place to come home to.', 'Your smile makes everything softer.', 'You make every ordinary moment feel special.', 'You are my sweetest little miracle.'],
    [],
  );

  const handlePointerDown = (event: ReactPointerEvent) => {
    const text = compliments[Math.floor(Math.random() * compliments.length)];
    const id = Date.now() + Math.random();

    setMessages((current) => [...current, { id, x: event.clientX, y: event.clientY, text }]);
    window.setTimeout(() => setMessages((current) => current.filter((message) => message.id !== id)), 1800);
  };

  const handleSpin = () => {
    setSpinCount((count) => count + 1);
    if (spinCount + 1 >= 3) {
      setGiftOpened(true);
    }
  };

  const handleChocolate = () => {
    const options = ['Rose Velvet', 'Honey Kiss', 'Moonlight Truffle'];
    setPickedChocolate(options[Math.floor(Math.random() * options.length)]);
  };

  return (
    <PageShell className="flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.14),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(167,139,250,0.12),_transparent_24%)]" />

      <AnimatePresence>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, scale: 0.7, x: message.x - 120, y: message.y - 20 }}
            animate={{ opacity: 1, scale: 1, y: message.y - 140 }}
            exit={{ opacity: 0, scale: 1.2, y: message.y - 190 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="fixed z-50 w-56 rounded-full border border-pink-100 bg-white/80 px-4 py-2 text-center text-sm font-medium tracking-[0.2em] text-rose-500 backdrop-blur-xl"
          >
            {message.text}
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="relative z-10 mb-10 max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-rose-400 backdrop-blur-xl">
          <Sparkles size={14} className="text-pink-400" />
          Little surprises, just for you
        </div>
        <h2 className="text-4xl font-semibold tracking-[-0.03em] text-rose-500 sm:text-6xl">A tiny playground of love.</h2>
        <p className="mt-4 text-lg text-slate-600">Tap the screen for sweet compliments, open the gift, and choose a little chocolate treasure.</p>
      </div>

      <div className="relative z-10 grid w-full max-w-6xl gap-6 lg:grid-cols-2">
        <motion.button
          type="button"
          onClick={handlePointerDown}
          whileHover={{ scale: 1.01, y: -3 }}
          className="rounded-[2rem] border border-pink-100 bg-white/70 p-8 text-left shadow-[0_20px_60px_rgba(244,114,182,0.12)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 text-rose-400">
            <Heart size={18} />
            <span className="text-sm uppercase tracking-[0.3em]">Compliment burst</span>
          </div>
          <p className="mt-4 text-lg text-slate-600">Tap here for a little burst of affection.</p>
        </motion.button>

        <motion.button
          type="button"
          onClick={handleSpin}
          whileHover={{ scale: 1.02, y: -3 }}
          className="flex flex-col items-center justify-center rounded-[2rem] border border-pink-100 bg-[linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(255,244,247,0.95))] p-8 text-center shadow-[0_20px_60px_rgba(244,114,182,0.12)] backdrop-blur-xl"
        >
          <div className="flex items-center text-rose-400">
            <Gift size={24} />
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.32em] text-rose-400">Spin the gift</p>
          <motion.div animate={{ rotate: giftOpened ? 0 : 360 }} transition={{ duration: 1.2 }} className="mt-4 rounded-full border border-rose-100 bg-white/80 p-4">
            <RotateCw size={24} className="text-rose-500" />
          </motion.div>
          <p className="mt-4 text-lg text-slate-600">{giftOpened ? 'You found the little secret 💖' : `Spin ${3 - spinCount} more time${3 - spinCount === 1 ? '' : 's'} to unlock it.`}</p>
        </motion.button>
      </div>

      <div className="relative z-10 mt-6 grid w-full max-w-6xl gap-6 md:grid-cols-2">
        <motion.button
          type="button"
          onClick={handleChocolate}
          whileHover={{ y: -3, scale: 1.01 }}
          className="rounded-[2rem] border border-rose-100 bg-white/70 p-7 text-left shadow-[0_20px_60px_rgba(244,114,182,0.1)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 text-rose-400">
            <CupSoda size={18} />
            <span className="text-sm uppercase tracking-[0.3em]">Pick a chocolate</span>
          </div>
          <p className="mt-4 text-lg text-slate-600">{pickedChocolate ? `You picked ${pickedChocolate}.` : 'Choose one and see what sweetness waits for you.'}</p>
        </motion.button>

        <div className="rounded-[2rem] border border-rose-100 bg-white/70 p-7 shadow-[0_20px_60px_rgba(244,114,182,0.1)] backdrop-blur-xl">
          <div className="flex items-center gap-3 text-rose-400">
            <Star size={18} />
            <span className="text-sm uppercase tracking-[0.3em]">Little love meter</span>
          </div>
          <div className="mt-5 flex items-end gap-3">
            <div className="flex-1 rounded-full bg-rose-100 p-2">
              <motion.div animate={{ width: giftOpened ? '100%' : '72%' }} className="h-3 rounded-full bg-gradient-to-r from-rose-400 to-violet-400" />
            </div>
            <span className="text-xl font-semibold text-rose-500">{giftOpened ? '100%' : '72%'}</span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <ChevronRight size={16} className="text-rose-400" />
            You make every moment feel a little brighter.
          </div>
        </div>
      </div>
    </PageShell>
  );
}
