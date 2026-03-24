import { Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif italic font-bold">Portfolio.</Link>
            <p className="text-sm text-black/60 leading-relaxed max-w-xs">
              Designing and building digital products with a focus on aesthetics and performance.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-black/40">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <a href="/#about" className="text-sm hover:opacity-60 transition-opacity">About</a>
              <a href="/#stack" className="text-sm hover:opacity-60 transition-opacity">Stack</a>
              <a href="/#blog" className="text-sm hover:opacity-60 transition-opacity">Blog</a>
              <a href="/#photography" className="text-sm hover:opacity-60 transition-opacity">Photography</a>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-black/40">Social</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity">
                <Github size={16} /> GitHub
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity">
                <Twitter size={16} /> Twitter
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity">
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-black/40">Contact</h4>
            <a href="mailto:hello@example.com" className="text-xl font-serif italic hover:underline underline-offset-8">
              hello@example.com
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-black/5">
          <p className="text-xs font-mono text-black/40">
            © 2024 Personal Portfolio. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:opacity-60 transition-opacity"
          >
            Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
