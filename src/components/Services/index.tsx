'use client';

import Image from 'next/image';
import { images } from '@/config/images';
import styles from './styles.module.css';
import { FaLaptopCode, FaMobileAlt, FaSearch } from 'react-icons/fa';
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
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>O Site Perfeito para Seu Negócio Está Aqui</h2>
          <p className={styles.sectionSubtitle}>
            Criamos sites modernos, rápidos e otimizados para conversões. 
            Você foca no seu negócio, nós cuidamos da sua presença digital.
          </p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.content}>
                  <div className={styles.iconTitle}>
                    <Icon className={styles.icon} />
                    <h3 className={styles.title}>{service.title}</h3>
                  </div>
                  <p className={styles.description}>{service.description}</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.line} />
                    <button className={styles.learnMore}>Saiba Mais</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
