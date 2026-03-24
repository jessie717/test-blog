import { motion } from 'motion/react';
import { PHOTOS } from '../constants';
import { MapPin } from 'lucide-react';

export default function Photography() {
  return (
    <section id="photography" className="py-20 px-6 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter">
            Visual <br />
            <span className="text-white/20">Journal</span>
          </h2>
          <p className="max-w-md text-sm text-white/40 font-mono uppercase tracking-widest leading-relaxed">
            Capturing light and moments through the lens.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group break-inside-avoid rounded-xl overflow-hidden bg-white/5"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-serif italic mb-2">{photo.title}</h3>
                <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                  <MapPin size={12} />
                  {photo.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
