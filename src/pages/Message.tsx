import { motion } from 'motion/react';
import { Butterfly } from '../components/Butterfly';

export function Message() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-amber-900/20 via-zinc-950 to-zinc-950"></div>
      
      <Butterfly className="top-[30%] left-[-15%]" duration={15} delay={1} />
      
      <div className="relative z-10 max-w-lg mx-auto w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="bg-zinc-900/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-amber-900/30 shadow-2xl relative overflow-hidden"
        >
          {/* Internal decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-200 mb-8 italic">
              Dearest Malkin,
            </h2>
            
            <div className="space-y-6 text-zinc-300 font-light text-lg md:text-xl leading-relaxed">
              <p>
                You are more than just a bestie; you are truly Devi ji. 
              </p>
              <p>
                May your days be as sweet as dark chocolate and as beautiful as blooming tulips and lilies.
              </p>
              <p>
                Just like monarch butterflies, may you always fly high and spread magic wherever you go.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-800">
              <p className="text-rose-400 font-medium tracking-widest uppercase text-sm">
                Forever Yours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
