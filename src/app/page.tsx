'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
// import Testimonials from "@/components/Testimonials";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Portfolio />
        {/* <Testimonials /> */}
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
