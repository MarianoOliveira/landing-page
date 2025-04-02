
import React from "react";
import { CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="text-brand-blue mr-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp size={28} />,
      title: "Aumento de Conversão",
      description: "Nossa solução comprovadamente aumenta suas taxas de conversão em até 120% em apenas 30 dias."
    },
    {
      icon: <Shield size={28} />,
      title: "Confiabilidade Total",
      description: "Segurança em primeiro lugar com proteção de dados avançada e conformidade com LGPD."
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Fácil Implementação",
      description: "Integre facilmente com suas ferramentas existentes sem interrupção nos processos atuais."
    },
    {
      icon: <Clock size={28} />,
      title: "Economia de Tempo",
      description: "Automatize processos manuais e economize até 15 horas por semana para sua equipe."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Por que escolher nossa solução?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <Benefit {...benefit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
