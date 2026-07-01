import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { LockScreen } from './components/LockScreen';
import { Home } from './pages/Home';
import { Message } from './pages/Message';
import { More } from './pages/More';
import { FunPage } from './pages/Fun';
import { Gallery } from './pages/Gallery';
import { SparkleCursor } from './components/SparkleCursor';
import { Heart, Sparkles, Gift, Camera, Star } from 'lucide-react';

function Navigation() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home', icon: Heart },
    { path: '/message', label: 'Message', icon: Sparkles },
    { path: '/gallery', label: 'Gallery', icon: Camera },
    { path: '/fun', label: 'Fun', icon: Star },
    { path: '/more', label: 'More', icon: Gift },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full px-6 py-3 flex gap-4 md:gap-8 shadow-2xl">
      {links.map(({ path, label, icon: Icon }) => (
        <Link
          key={path}
          to={path}
          className={`flex flex-col items-center gap-1 transition-colors ${
            location.pathname === path ? 'text-rose-400' : 'text-zinc-500 hover:text-rose-300'
          }`}
        >
          <Icon size={20} className={location.pathname === path ? 'drop-shadow-[0_0_8px_rgba(251,113,133,0.8)]' : ''} />
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest">{label}</span>
        </Link>
      ))}
    </nav>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error - React Router v6 Routes type doesn't officially support key, but it's needed for AnimatePresence */}
      <Routes location={location} key={location.pathname}>
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

  useEffect(() => {
    // Target: July 6th, 2026, 00:00:00 IST (UTC+5:30)
    const targetDate = new Date('2026-07-05T18:30:00Z').getTime();
    if (Date.now() >= targetDate) {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  return (
    <BrowserRouter>
      <div className="bg-zinc-950 min-h-screen text-rose-50 overflow-hidden font-sans selection:bg-rose-900/50">
        <SparkleCursor />
        
        <AnimatePresence>
          {!isUnlocked && (
            <motion.div
              key="lockscreen"
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0 z-50"
            >
              <LockScreen onUnlock={handleUnlock} />
            </motion.div>
          )}
        </AnimatePresence>

        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative min-h-screen"
          >
            <AnimatedRoutes />
            <Navigation />
          </motion.div>
        )}
      </div>
    </BrowserRouter>
  );
}
