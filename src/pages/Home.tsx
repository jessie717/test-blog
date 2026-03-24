import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Blog from '../components/Blog';
import Photography from '../components/Photography';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Blog />
        <Photography />
      </main>
      <Footer />
    </div>
  );
}
