import { motion } from 'motion/react';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageShell } from '../components/PageShell';
import { GlassButton } from '../components/GlassButton';
import { surpriseConfig } from '../config/surprise';

export function Home() {
  return (
    <PageShell className="flex items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.18),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(167,139,250,0.14),_transparent_28%)]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-400 shadow-[0_12px_35px_rgba(244,114,182,0.12)] backdrop-blur-xl"
        >
          <Sparkles size={14} className="text-pink-400" />
          A little love, made just for you
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[2.1rem] border border-white/70 bg-white/60 px-6 py-10 shadow-[0_30px_100px_rgba(244,114,182,0.16)] backdrop-blur-2xl sm:px-10 lg:px-16 lg:py-14"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
        >
          <img src={surpriseConfig.heroImage} alt="Romantic soft glow" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.75),_rgba(255,244,247,0.4))]" />

          <div className="relative z-10">
            <motion.h1
              className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-rose-500 sm:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
            >
              {surpriseConfig.heroTitle}
            </motion.h1>

            <motion.div
              className="mt-4 space-y-2 text-2xl font-medium text-rose-400 sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
            >
              <p>{surpriseConfig.heroSubtitle}</p>
              <p>{surpriseConfig.heroSubtitle2}</p>
            </motion.div>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
            >
              {surpriseConfig.heroBody}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
            >
              <GlassButton>
                <Link to="/message" className="flex items-center gap-2">
                  Open the letter <ArrowRight size={16} />
                </Link>
              </GlassButton>
              <GlassButton>
                <Link to="/gallery">See the memories</Link>
              </GlassButton>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex items-center gap-3 rounded-full border border-white/70 bg-white/70 px-5 py-3 text-sm uppercase tracking-[0.32em] text-rose-400 shadow-[0_12px_35px_rgba(244,114,182,0.12)] backdrop-blur-xl"
        >
          <Heart size={14} className="text-pink-400" />
          Stay a while
        </motion.div>
      </motion.div>
    </PageShell>
  );
}
