import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export default function TechStack() {
  const categories = ['Frontend', 'Backend', 'Tools', 'Design'];

  return (
    <section id="stack" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter">
            Technical <br />
            <span className="text-white/30">Stack</span>
          </h2>
          <p className="max-w-md text-sm text-white/50 font-mono uppercase tracking-widest leading-relaxed">
            A curated selection of technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {categories.map((category) => (
            <div key={category} className="bg-black p-8 space-y-8">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 border-b border-white/10 pb-4">
                {category}
              </h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-lg font-medium group-hover:text-white/70 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-white/30">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-px w-full bg-white/10 relative overflow-hidden">
                      <motion.div
                        initial={{ x: '-100%' }}
                        whileInView={{ x: `${skill.level - 100}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="absolute inset-0 bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
