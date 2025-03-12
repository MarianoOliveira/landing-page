import { getWhatsAppLink } from '@/config/contact';
import { FaArrowRight } from 'react-icons/fa';

export default function CTAFinal() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Círculos decorativos */}
      <div className="decorative-circle-1"></div>
      <div className="decorative-circle-2"></div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Seu Site Profissional Está a Um Clique de Distância!
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
        Vamos criar juntos um site que vai impulsionar seu negócio. 
        Entre em contato e dê o primeiro passo para sua presença online de sucesso.
        </p>

        <a
          href={getWhatsAppLink('budget')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary group inline-flex items-center text-lg"
        >
          Solicitar Orçamento Grátis
          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
