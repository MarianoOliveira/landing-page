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
            Transforme sua Presença Digital com Soluções Web Modernas
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-12">
            Desenvolvimento de sites e aplicações web responsivas, 
            otimizadas para resultados e focadas na experiência do usuário.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={getWhatsAppLink('start')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary group"
            >
              Começar Projeto
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
