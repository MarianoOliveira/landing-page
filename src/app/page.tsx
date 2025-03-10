'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
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
        <Testimonials />
        <section id="contato" className="section bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Entre em contato agora e vamos transformar sua ideia em realidade
            </p>
            <a 
              href={`https://wa.me/5511999999999`}
              target="_blank"
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Solicitar Orçamento
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
