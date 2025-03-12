import { getWhatsAppLink } from '@/config/contact';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Círculos decorativos */}
      <div className="decorative-circle-1"></div>
      <div className="decorative-circle-2"></div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Tenha um Site Profissional que Atraia e Converta Clientes.
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-12">
          Desenvolvemos sites e landing pages que destacam sua marca, conquistam novos clientes e impulsionam seu negócio. Soluções personalizadas para psicólogos, nutricionistas, dentistas, advogados e qualquer profissional que busca presença online de impacto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={getWhatsAppLink('start')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary group"
            >
              🚀 Iniciar Meu Projeto
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href={getWhatsAppLink('info')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-white border-white hover:bg-white hover:text-primary"
            >
              Saber Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
