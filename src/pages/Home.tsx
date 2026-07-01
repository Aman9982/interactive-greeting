import { motion } from 'motion/react';
import { Flower } from '../components/Flower';
import { Chocolate } from '../components/Chocolate';
import { Butterfly } from '../components/Butterfly';
import { Teddy } from '../components/Teddy';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/40 via-zinc-950 to-zinc-950"></div>
      
      {/* Decorative Butterflies */}
      <Butterfly className="top-[20%] left-[-10%]" duration={12} delay={0} />
      <Butterfly className="top-[60%] left-[-20%]" duration={18} delay={4} />
      <Butterfly className="bottom-[10%] right-[-10%]" duration={15} delay={2} />

      {/* Decorative Flowers */}
      <Flower type="tulip" className="top-[10%] left-[10%]" delay={0.2} />
      <Flower type="lily" className="bottom-[20%] left-[15%]" delay={0.4} />
      <Flower type="tulip" className="top-[15%] right-[15%]" delay={0.6} />
      <Flower type="lily" className="bottom-[15%] right-[10%]" delay={0.8} />
      
      {/* Decorative Chocolates */}
      <Chocolate className="top-[30%] left-[20%]" delay={1} />
      <Chocolate className="bottom-[30%] right-[25%]" delay={1.2} />
      <Chocolate className="top-[40%] right-[15%]" delay={1.4} />

      {/* Taddy! */}
      <Teddy className="absolute bottom-[5%] left-[50%] -translate-x-1/2 md:left-[30%] opacity-80" delay={2} />
      <Teddy className="absolute top-[10%] left-[50%] -translate-x-1/2 md:left-[70%] opacity-80 scale-75" delay={2.5} />

      <div className="relative z-10 text-center max-w-2xl mx-auto p-8 rounded-3xl backdrop-blur-sm bg-zinc-900/30 border border-rose-900/30 shadow-2xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-rose-300 via-rose-100 to-amber-200 text-transparent bg-clip-text tracking-tighter"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Devi ji
        </motion.h1>
        
        <motion.h2
          className="text-2xl md:text-3xl text-rose-300/80 mb-8 font-light italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          (aka Malkin)
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Welcome to your magical surprise. A world of dark chocolate, blooming lilies, tulips, and monarch butterflies, crafted just for you.
        </motion.p>
      </div>
    </motion.div>
  );
}
