'use client';

import Image from 'next/image';
import { images } from '@/config/images';
import styles from './styles.module.css';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaWhatsapp } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Service {
  icon: IconType;
  title: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
}

const services: Service[] = [
  {
    icon: FaLaptopCode,
    title: "Sites Institucionais",
    description: "Tenha um site profissional, moderno e otimizado para destacar sua empresa e atrair cada vez mais clientes.",
    ctaText: "Quero um Site Profissional",
    whatsappMessage: "Olá! Vim pelo site e gostaria de saber mais sobre o desenvolvimento de sites institucionais."
  },
  {
    icon: FaMobileAlt,
    title: "Landing Pages",
    description: "Criamos páginas de alta conversão que transformam visitantes em clientes, aumentando suas oportunidades de negócio.",
    ctaText: "Criar Landing Page",
    whatsappMessage: "Olá! Vim pelo site e gostaria de saber mais sobre o desenvolvimento de landing pages."
  },
  {
    icon: FaSearch,
    title: "Outros Projetos",
    description: "Precisa de um site diferente? Desenvolvemos soluções personalizadas sob medida para sua necessidade. Fale conosco!",
    ctaText: "Discutir Meu Projeto",
    whatsappMessage: "Olá! Vim pelo site e gostaria de discutir um projeto personalizado."
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
            Você foca no seu negócio, nós cuidamos da sua presença online.
          </p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            const whatsappLink = `https://wa.me/5521993937690?text=${encodeURIComponent(service.whatsappMessage)}`;
            
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
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.ctaButton}
                    >
                      <FaWhatsapp className={styles.ctaIcon} />
                      {service.ctaText}
                    </a>
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
