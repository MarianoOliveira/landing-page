
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => {
  return (
    <Card className="border-none shadow-md bg-white">
      <CardContent className="p-6 text-center">
        <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">{value}</div>
        <div className="text-gray-600">{label}</div>
      </CardContent>
    </Card>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { value: "+120%", label: "Aumento médio em conversões" },
    { value: "+500", label: "Empresas atendidas" },
    { value: "98%", label: "Taxa de satisfação" },
    { value: "-40%", label: "Redução no custo por aquisição" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Resultados que transformam negócios
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <Stat {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
