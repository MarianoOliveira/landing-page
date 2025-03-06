'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { Benefits } from '@/components/Benefits';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr,auto]">
      <Header />
      <main>
        <HeroSection />
        <Benefits />
        <Services />
        <Portfolio />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
