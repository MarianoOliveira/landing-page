'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import styles from './styles.module.css';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Ana Silva",
    role: "CEO",
    company: "Silva Advocacia",
    content: "O Mariano desenvolveu um site incrível para nosso escritório. O design moderno e profissional ajudou a atrair mais clientes.",
    rating: 5
  },
  {
    name: "Pedro Santos",
    role: "Proprietário",
    company: "Café Gourmet",
    content: "Nossa presença online melhorou significativamente após o lançamento do site. O processo foi simples e o resultado superou as expectativas.",
    rating: 5
  },
  {
    name: "Carla Oliveira",
    role: "Diretora",
    company: "Instituto Educacional",
    content: "O portal que o Mariano desenvolveu revolucionou nossa forma de interagir com os alunos. Excelente trabalho!",
    rating: 5
  },
  {
    name: "Lucas Mendes",
    role: "Fundador",
    company: "Tech Solutions",
    content: "A landing page criada pelo Mariano tem uma taxa de conversão impressionante. Recomendo fortemente seus serviços.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="depoimentos" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Depoimentos</h2>
        <p className="section-subtitle">
          O que meus clientes dizem sobre meu trabalho
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
