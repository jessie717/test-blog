import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter">
          Latest <br />
          <span className="text-black/20">Writings</span>
        </h2>
        <a href="/#blog" className="group flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:opacity-60 transition-opacity">
          View all posts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="space-y-px bg-black/5 border border-black/5">
        {BLOG_POSTS.map((post, i) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="block">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#fafafa] p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-center hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
            >
              <div className="md:w-32 shrink-0">
                <p className="text-xs font-mono uppercase tracking-widest opacity-40 group-hover:opacity-60">
                  {post.date}
                </p>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 border border-black/10 group-hover:border-white/20 text-[10px] font-mono uppercase tracking-tighter rounded">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif italic leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm opacity-60 max-w-2xl line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              <div className="md:w-12 flex justify-end">
                <ArrowRight size={32} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </section>
  );
}
