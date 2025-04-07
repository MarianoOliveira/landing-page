
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToForm }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-16 sm:py-24">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            <span className="text-brand-blue">Transforme</span> seu Negócio com Nossa Solução
          </h1>
          
          <p className="animate-fade-in delay-200 max-w-2xl text-xl text-gray-600 mb-10">
            Descubra como nossa plataforma pode ajudar você a aumentar suas vendas, 
            reduzir custos e melhorar a satisfação dos seus clientes.
          </p>
          
          <div className="animate-fade-in delay-300 space-x-4 flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-full px-8"
              onClick={onScrollToForm}
            >
              Comece Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-8"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
