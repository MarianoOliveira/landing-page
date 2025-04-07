
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
  technologies: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Site Corporativo",
    description: "Desenvolvimento de site institucional responsivo com painel administrativo personalizado.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    siteUrl: "https://exemplo1.com",
    technologies: ["React", "Tailwind CSS", "Node.js"]
  },
  {
    title: "E-commerce",
    description: "Plataforma completa de comércio eletrônico com sistema de pagamentos integrado.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    siteUrl: "https://exemplo2.com",
    technologies: ["Next.js", "Stripe", "MongoDB"]
  },
  {
    title: "Aplicativo Web",
    description: "Sistema de gestão de tarefas com autenticação e permissões por usuário.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    siteUrl: "https://exemplo3.com",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"]
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nosso Portfólio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência e dedicação
          </p>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={item.siteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <span className="mr-1">Visitar site</span>
                  <ExternalLink size={14} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {portfolioItems.map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={item.siteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-1">Visitar site</span>
                        <ExternalLink size={14} />
                      </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static translate-y-0 -left-0 mr-2" />
              <CarouselNext className="relative static translate-y-0 -right-0" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-brand-blue hover:bg-blue-700 inline-flex items-center">
            Ver todos os projetos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
