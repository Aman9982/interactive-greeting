import { motion } from 'motion/react';
import { PageShell } from '../components/PageShell';
import { surpriseConfig } from '../config/surprise';

export function Message() {
  return (
    <PageShell className="flex items-center justify-center px-3 py-24 sm:px-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.16),_transparent_24%),radial-gradient(circle_at_bottom,_rgba(167,139,250,0.12),_transparent_24%)]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
          className="overflow-hidden rounded-[2.2rem] border border-white/70 bg-[linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(255,244,247,0.9))] p-5 shadow-[0_30px_95px_rgba(244,114,182,0.16)] md:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.5),_transparent_40%)]" />
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="relative mb-6 flex items-center justify-between border-b border-rose-100 pb-4 text-sm uppercase tracking-[0.3em] text-rose-400"
          >
            <span>My love letter</span>
            <span>for you</span>
          </motion.div>

          <div className="relative grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="rounded-[1.5rem] border border-rose-100 bg-white/80 p-6 text-left shadow-inner"
            >
              <div className="mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-rose-300 to-violet-300" />
              <p className="text-sm uppercase tracking-[0.35em] text-rose-400">Dear {surpriseConfig.recipientName}</p>
              <h2 className="mt-3 text-3xl font-semibold text-rose-500">My {surpriseConfig.recipientNickname},</h2>
              <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
                <p>You are the softest kind of magic in my life.</p>
                <p>I wanted to make something that feels like a warm hand on your shoulder, a quiet smile, and a little sparkle in the evening.</p>
                <p>Thank you for being the kind of person who makes ordinary days feel tender, beautiful, and wholly unforgettable.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 22, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="relative overflow-hidden rounded-[1.6rem] border border-rose-100 bg-white/80 p-3 shadow-[0_20px_45px_rgba(244,114,182,0.12)]"
            >
              <img src={surpriseConfig.letterImage} alt="A romantic letter scene" className="h-full min-h-[280px] w-full rounded-[1.25rem] object-cover" />
              <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-t from-rose-500/20 via-transparent to-transparent" />
              <div className="absolute left-6 top-6 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-rose-500 backdrop-blur-xl">
                Handwritten with love
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="relative mt-6 border-t border-rose-100 pt-6 text-center text-lg text-rose-400"
          >
            With all my heart, always yours.
          </motion.div>
        </motion.div>
      </div>
    </PageShell>
  );
}
