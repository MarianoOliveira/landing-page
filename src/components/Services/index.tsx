'use client';

import Image from 'next/image';
import { images } from '@/config/images';
import styles from './styles.module.css';
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaSearch } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Service {
  icon: IconType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: FaLaptopCode,
    title: "Sites Institucionais",
    description: "Tenha um site profissional, moderno e otimizado para destacar sua empresa e atrair mais clientes."
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce",
    description: "Lojas virtuais completas e otimizadas para vender seus produtos online."
  },
  {
    icon: FaMobileAlt,
    title: "Landing Pages",
    description: "Criamos páginas de alta conversão que transformam visitantes em clientes, aumentando suas oportunidades de negócio."
  },
  {
    icon: FaSearch,
    title: "Outros Projetos",
    description: "Precisa de um site diferente? Desenvolvemos soluções personalizadas sob medida para sua necessidade. Fale conosco!"
  }
];

export default function Services() {
  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>O Site Perfeito para Seu Negócio Está Aqui.</h2>
        <p className={styles.subtitle}>
        Criamos sites modernos, rápidos e otimizados para conversões. 
        Você foca no seu negócio, nós cuidamos da sua presença digital.
        </p>
        
        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Icon className="text-4xl text-secondary mx-auto mb-4" />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
