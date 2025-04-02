
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onScrollToForm: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-blue to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Pronto para transformar seus resultados?
        </h2>
        
        <p className="max-w-2xl mx-auto text-xl mb-8 text-blue-100 animate-fade-in">
          Junte-se a centenas de empresas que já estão alcançando resultados extraordinários com nossa solução.
        </p>
        
        <div className="animate-fade-in">
          <Button 
            size="lg" 
            className="bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-full px-8 py-6 text-lg"
            onClick={onScrollToForm}
          >
            Começar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
