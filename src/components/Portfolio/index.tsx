'use client';

import Image from 'next/image';
import { images } from '@/config/images';
import styles from './styles.module.css';

type Project = {
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    title: 'Psicóloga',
    description: 'Site profissional para consultório de psicologia',
    image: images.portfolio.psicologa,
  },
  {
    title: 'Nutricionista',
    description: 'Landing page para captação de pacientes',
    image: images.portfolio.nutricionista,
  },
  {
    title: 'Dentista',
    description: 'Site institucional para clínica odontológica',
    image: images.portfolio.dentista,
  },
  {
    title: 'Advogado',
    description: 'Site profissional para escritório de advocacia',
    image: images.portfolio.advogado,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nosso Portfólio</h2>
        <p className={styles.subtitle}>
          Conheça alguns dos nossos trabalhos realizados
        </p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <a href="#contato" className={styles.button}>
                    Quero um site assim
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
