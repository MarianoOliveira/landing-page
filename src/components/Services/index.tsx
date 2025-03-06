'use client';

import Image from 'next/image';
import { images } from '@/config/images';
import styles from './styles.module.css';

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

const services: ServiceCardProps[] = [
  {
    title: 'Web Design',
    description: 'Designs modernos e responsivos que se adaptam a qualquer dispositivo.',
    image: images.services.design,
  },
  {
    title: 'Site Institucional',
    description: 'Apresente sua empresa de forma profissional e conquiste mais clientes.',
    image: images.services.institucional,
  },
  {
    title: 'Landing Page',
    description: 'Páginas otimizadas para converter visitantes em leads e clientes.',
    image: images.services.landingPage,
  },
  {
    title: 'Integrações',
    description: 'Conecte seu site com outras ferramentas e automatize processos.',
    image: images.services.integracoes,
  },
];

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className={styles.image}
        />
      </div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export const Services = () => {
  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nossos Serviços</h2>
        <p className={styles.subtitle}>
          Soluções completas para sua presença online
        </p>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
