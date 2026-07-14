import { motion } from 'motion/react';
import { Heart, Sparkles, Gift, Lock, Star } from 'lucide-react';
import { useState } from 'react';
import { PageShell } from '../components/PageShell';

export function More() {
  const [revealed, setRevealed] = useState(false);
  const reasons = [
    'You make my world softer.',
    'You are the calm in my chaos.',
    'You bring light to quiet places.',
    'You are the reason I smile for no reason.',
  ];

  return (
    <PageShell className="flex flex-col items-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.12),_transparent_24%),radial-gradient(circle_at_bottom,_rgba(167,139,250,0.1),_transparent_24%)]" />

      <div className="relative z-10 mb-10 w-full max-w-5xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-rose-400">Little memories</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-rose-500 sm:text-5xl">Why you are so special to me.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">A few reasons your smile means so much.</p>
      </div>

      <div className="relative z-10 mb-10 grid w-full max-w-5xl gap-4 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <motion.div key={reason} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[1.4rem] border border-pink-100 bg-white/70 p-5 text-left shadow-[0_16px_45px_rgba(244,114,182,0.1)] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-rose-400">
              <Heart size={16} />
              <span className="text-sm uppercase tracking-[0.3em]">Memory {index + 1}</span>
            </div>
            <p className="mt-3 text-lg text-slate-600">{reason}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 grid w-full max-w-5xl gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div whileHover={{ y: -4, scale: 1.01 }} className="rounded-[1.6rem] border border-rose-100 bg-white/70 p-6 shadow-[0_20px_60px_rgba(244,114,182,0.11)] backdrop-blur-xl">
          <div className="flex items-center gap-2 text-rose-400">
            <Gift size={16} />
            <span className="text-sm uppercase tracking-[0.3em]">Open when...</span>
          </div>
          <p className="mt-4 text-lg leading-8 text-slate-600">Open when you need a reminder that you are loved, cherished, and adored beyond words.</p>
        </motion.div>

        <motion.button type="button" whileHover={{ scale: 1.02 }} onClick={() => setRevealed((current) => !current)} className="rounded-[1.6rem] border border-rose-100 bg-[linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(255,244,247,0.9))] p-6 text-left shadow-[0_20px_60px_rgba(244,114,182,0.11)] backdrop-blur-xl">
          <div className="flex items-center gap-2 text-rose-400">
            <Lock size={16} />
            <span className="text-sm uppercase tracking-[0.3em]">Secret button</span>
          </div>
          <p className="mt-4 text-lg text-slate-600">{revealed ? 'You found the secret' : 'Tap for a secret'}</p>
        </motion.button>
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 16 }} className="relative z-10 mt-6 rounded-[1.4rem] border border-pink-100 bg-white/70 px-6 py-5 text-center text-lg text-slate-600 shadow-[0_16px_45px_rgba(244,114,182,0.1)] backdrop-blur-xl">
        <div className="flex items-center justify-center gap-2 text-rose-400">
          <Sparkles size={16} />
          <span>And I would choose you again, every single time.</span>
        </div>
      </motion.div>

      <div className="relative z-10 mt-6 flex items-center gap-2 rounded-full border border-rose-100 bg-white/70 px-4 py-2 text-sm uppercase tracking-[0.32em] text-rose-400 shadow-[0_12px_35px_rgba(244,114,182,0.1)] backdrop-blur-xl">
        <Star size={16} />
        Keep this close
      </div>
    </PageShell>
  );
}
