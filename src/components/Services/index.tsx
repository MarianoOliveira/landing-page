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
    description: "Desenvolvimento de sites profissionais para apresentar sua empresa e conquistar mais clientes."
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce",
    description: "Lojas virtuais completas e otimizadas para vender seus produtos online."
  },
  {
    icon: FaMobileAlt,
    title: "Landing Pages",
    description: "Páginas de conversão focadas em transformar visitantes em leads e clientes."
  },
  {
    icon: FaSearch,
    title: "Otimização SEO",
    description: "Estratégias para melhorar seu posicionamento nos mecanismos de busca."
  }
];

export default function Services() {
  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nossos Serviços</h2>
        <p className={styles.subtitle}>
          Soluções completas para sua presença online
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
