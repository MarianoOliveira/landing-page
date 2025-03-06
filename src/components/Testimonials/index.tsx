'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './styles.module.css';

type TestimonialProps = {
  name: string;
  role: string;
  image: string;
  text: string;
};

const testimonials: TestimonialProps[] = [
  {
    name: "João Silva",
    role: "Psicólogo",
    image: "/images/testimonials/joao.jpg",
    text: "O site criado superou todas as minhas expectativas. Minha presença online melhorou significativamente e tenho recebido muito mais pacientes através da internet."
  },
  {
    name: "Maria Santos",
    role: "Dentista",
    image: "/images/testimonials/maria.jpg",
    text: "Profissionalismo e qualidade excepcionais. O design do site é moderno e transmite exatamente a confiança que eu queria passar para meus pacientes."
  },
  {
    name: "Pedro Costa",
    role: "Advogado",
    image: "/images/testimonials/pedro.jpg",
    text: "Excelente trabalho! O site ficou muito profissional e tem me ajudado a conquistar novos clientes. O investimento valeu muito a pena."
  }
];

export function Testimonials() {
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
    <section id="depoimentos" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            O que nossos clientes dizem
          </h2>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.testimonialContainer}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <div className={styles.content}>
              <p className={styles.text}>{testimonials[currentIndex].text}</p>
              <div className={styles.author}>
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={60}
                  height={60}
                  className={styles.authorImage}
                />
                <div className={styles.authorInfo}>
                  <strong className={styles.name}>{testimonials[currentIndex].name}</strong>
                  <span className={styles.role}>{testimonials[currentIndex].role}</span>
                </div>
              </div>
            </div>
            <div className={styles.navigation}>
              <button 
                onClick={prevTestimonial}
                className={styles.navButton}
                aria-label="Depoimento anterior"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={nextTestimonial}
                className={styles.navButton}
                aria-label="Próximo depoimento"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
