import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { LockScreen } from './components/LockScreen';
import { Home } from './pages/Home';
import { Message } from './pages/Message';
import { More } from './pages/More';
import { FunPage } from './pages/Fun';
import { Gallery } from './pages/Gallery';
import { SparkleCursor } from './components/SparkleCursor';
import { PremiumBackground } from './components/PremiumBackground';
import { appRoutes } from './config/routes';
import { surpriseConfig } from './config/surprise';
import { Volume2, VolumeX } from 'lucide-react';

const unlockTimestamp = new Date(`${surpriseConfig.countdownDate}T${surpriseConfig.countdownTime}`).getTime();

function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 gap-2 rounded-full border border-white/40 bg-white/70 px-2.5 py-2.5 shadow-[0_20px_80px_rgba(244,114,182,0.2)] backdrop-blur-2xl md:gap-4 md:px-4">
      {appRoutes.map(({ path, label, icon: Icon }) => {
        const active = location.pathname === path;

        return (
          <Link
            key={path}
            to={path}
            aria-label={label}
            className={`flex flex-col items-center gap-1 rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition-all ${
              active ? 'bg-rose-500/10 text-rose-600' : 'text-slate-500 hover:bg-white/70 hover:text-rose-500'
            }`}
          >
            <Icon size={17} className={active ? 'text-rose-500' : ''} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/fun" element={<FunPage />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMusicMuted, setIsMusicMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!surpriseConfig.enableCountdown) {
      setIsUnlocked(true);
      return;
    }

    if (Date.now() >= unlockTimestamp) {
      setIsUnlocked(true);
    }
  }, []);

  useEffect(() => {
    const audio = new Audio(surpriseConfig.musicFile);
    audio.loop = true;
    audio.volume = 0.25;
    audio.preload = 'auto';
    audio.muted = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isUnlocked) {
      return;
    }

    audio.muted = isMusicMuted;

    if (!isMusicMuted) {
      void audio.play().catch(() => undefined);
    } else {
      audio.pause();
    }
  }, [isUnlocked, isMusicMuted]);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden bg-[#fffaf8] text-slate-700 selection:bg-pink-200/40">
        <PremiumBackground />
        <SparkleCursor />

        <AnimatePresence>
          {!isUnlocked && (
            <motion.div
              key="lockscreen"
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="absolute inset-0 z-50"
            >
              <LockScreen onUnlock={() => setIsUnlocked(true)} />
            </motion.div>
          )}
        </AnimatePresence>

        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative min-h-screen"
          >
            <AnimatedRoutes />
            <Navigation />
            <button
              type="button"
              onClick={() => setIsMusicMuted((current: boolean) => !current)}
              className="fixed right-4 top-4 z-40 rounded-full border border-white/70 bg-white/75 p-3 text-rose-500 shadow-[0_18px_50px_rgba(244,114,182,0.16)] backdrop-blur-xl transition hover:scale-105"
              aria-label={isMusicMuted ? 'Enable music' : 'Mute music'}
            >
              {isMusicMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </motion.div>
        )}
      </div>
    </BrowserRouter>
  );
}
