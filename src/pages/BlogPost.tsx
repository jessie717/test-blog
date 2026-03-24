import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import Markdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-serif italic mb-4">Post Not Found</h1>
          <Link to="/" className="text-sm font-mono uppercase tracking-widest hover:opacity-60 transition-opacity">
            Return Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6 max-w-3xl mx-auto w-full">
        <Link 
          to="/#blog" 
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:opacity-60 transition-opacity mb-12"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <article>
          <header className="mb-12 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 border border-black/10 text-[10px] font-mono uppercase tracking-tighter rounded">
                {post.category}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest opacity-40">
                {post.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif italic leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-black/60 leading-relaxed">
              {post.excerpt}
            </p>
          </header>
          
          <div className="prose prose-lg prose-neutral max-w-none font-sans prose-headings:font-serif prose-headings:italic prose-a:text-black hover:prose-a:opacity-60 prose-img:rounded-xl">
            <Markdown>{post.content}</Markdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
