import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { About } from '@/components/About';
import { YogaOfferings } from '@/components/YogaOfferings';
import { Workshops } from '@/components/Workshops';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <YogaOfferings />
        <Workshops />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}