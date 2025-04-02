
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, company, rating, image }) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={18} 
              fill={i < rating ? "#FF9800" : "none"} 
              stroke={i < rating ? "#FF9800" : "#D1D5DB"}
              className="mr-1" 
            />
          ))}
        </div>

        <blockquote className="text-gray-700 mb-6">"{content}"</blockquote>
        
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={image} alt={author} />
            <AvatarFallback>{author[0]}{author.split(' ')[1]?.[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-gray-900">{author}</p>
            <p className="text-gray-600 text-sm">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content: "Implementar esta solução foi uma decisão transformadora para nosso negócio. Vimos um aumento de 73% nas conversões no primeiro mês.",
      author: "Ana Silva",
      role: "Diretora de Marketing",
      company: "TechFusion",
      rating: 5,
    },
    {
      content: "A facilidade de uso e os resultados imediatos nos surpreenderam. O ROI foi positivo já nas primeiras semanas após a implementação.",
      author: "Carlos Mendes",
      role: "CEO",
      company: "Inovativa",
      rating: 4,
    },
    {
      content: "Revolucionou nossa forma de captar e nutrir leads. A integração com nossas ferramentas existentes foi incrivelmente fácil.",
      author: "Fernanda Rocha",
      role: "Gerente de Vendas",
      company: "GrowthMaster",
      rating: 5,
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          O que nossos clientes dizem
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Centenas de empresas já transformaram seus resultados com nossa solução
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
