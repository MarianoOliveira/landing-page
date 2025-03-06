'use client';

import Image from 'next/image';
import { images } from '@/config/images';
import styles from './styles.module.css';

export function HeroSection() {
  return (
    <section id="inicio" className={styles.hero}>
      {/* Background com efeito de gradiente */}
      <div className={styles.overlay} />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Websites Profissionais para Impulsionar seu Negócio
          </h1>
          
          <p className={styles.subtitle}>
            Criamos sites modernos e responsivos que convertem visitantes em clientes
          </p>

          <div className={styles.buttonGroup}>
            <a
              href="#contato"
              className={styles.primaryButton}
            >
              Solicitar Orçamento
            </a>
            
            <a
              href="#portfolio"
              className={styles.secondaryButton}
            >
              Ver Portfólio
            </a>
          </div>
        </div>
      </div>
      
      {/* Imagem de fundo */}
      <Image
        src={images.hero.background}
        alt="Background"
        fill
        priority
        className={styles.image}
      />
    </section>
  );
}
