'use client';

import Link from 'next/link';
import styles from './styles.module.css';

export const CallToAction = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Pronto para Transformar Sua Presença Online?
          </h2>
          
          <p className={styles.subtitle}>
            Entre em contato agora e vamos criar o site dos seus sonhos!
          </p>

          <Link
            href="#contato"
            className={styles.button}
          >
            Quero Meu Site Agora
          </Link>
        </div>
      </div>
    </section>
  );
};
