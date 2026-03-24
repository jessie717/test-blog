import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-mono uppercase tracking-widest text-black/40 mb-6"
          >
            Full-Stack Developer & Photographer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif italic leading-[0.9] tracking-tighter mb-8"
          >
            Crafting digital <br />
            <span className="text-black/20">experiences</span> with <br />
            precision.
          </motion.h1>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-[4/5] lg:aspect-square bg-black/5 rounded-2xl overflow-hidden group"
        >
          <img
            src="https://picsum.photos/seed/me/1200/1200"
            alt="Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
            <div className="bg-black/20 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <p className="text-xs font-mono uppercase tracking-tighter opacity-70">Based in</p>
              <p className="text-lg font-serif italic">Shanghai, China</p>
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-3 bg-white text-black rounded-full"
            >
              <ArrowDownRight size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/10 pt-12"
      >
        <div className="space-y-4">
          <h3 className="font-serif italic text-xl">The Vision</h3>
          <p className="text-sm text-black/60 leading-relaxed">
            I believe in minimal, functional design that puts content first. 
            Every pixel should serve a purpose, and every interaction should feel natural.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-serif italic text-xl">The Process</h3>
          <p className="text-sm text-black/60 leading-relaxed">
            From concept to deployment, I focus on clean code and scalable architecture. 
            I love exploring new technologies and pushing the boundaries of what's possible.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-serif italic text-xl">The Passion</h3>
          <p className="text-sm text-black/60 leading-relaxed">
            When I'm not coding, you'll find me with a camera in hand, 
            capturing the quiet moments of urban life and the vast beauty of nature.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
