'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    title: "Site Institucional para Psicóloga",
    description: "Desenvolvemos um site moderno e profissional para destacar os serviços e especialidades dessa psicóloga, proporcionando uma presença digital forte e confiável.",
    imageUrl: "/images/portfolio/psicologa-preview.jpg",
    projectUrl: "https://institutional-site.vercel.app/"
  },
  {
    title: "Presença Online",
    description: "Este site que você está navegando foi criado por nós! Um exemplo de design otimizado, responsivo e focado em conversão.",
    imageUrl: "/images/portfolio/presenca-online-preview.jpg",
    projectUrl: "/"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Resultados Reais, Projetos de Sucesso.</h2>
        <p className={styles.sectionSubtitle}>
          Conheça alguns dos sites e landing pages que ajudamos a transformar em verdadeiras máquinas de conversão.
        </p>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Link href={project.projectUrl} key={index} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.imageUrl}
                    alt={`Preview do projeto ${project.title}`}
                    fill
                    priority={index === 0}
                    quality={95}
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
