'use client';

import { IconType } from 'react-icons';
import { FaPaintBrush, FaMobile, FaChartLine, FaHeadset } from 'react-icons/fa';
import styles from './styles.module.css';

type BenefitCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

const benefits = [
  {
    icon: FaPaintBrush,
    title: "Design Profissional e Personalizado",
    description: "Sites e landing pages criados sob medida para refletir a identidade da sua marca."
  },
  {
    icon: FaMobile,
    title: "Responsividade Total",
    description: "Seu site perfeito em qualquer dispositivo: celular, tablet ou desktop."
  },
  {
    icon: FaChartLine,
    title: "Otimização para Resultados",
    description: "Pronto para SEO, redes sociais e conversão de clientes."
  },
  {
    icon: FaHeadset,
    title: "Suporte Contínuo",
    description: "Ajudamos você a manter seu site sempre atualizado e funcionando perfeitamente."
  }
];

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export const Benefits = () => {
  return (
    <section id="beneficios" className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Por Que Escolher Nossos Serviços?
          </h2>
          <p className={styles.subtitle}>
            Oferecemos soluções completas para você se destacar online, com designs modernos, 
            funcionalidades avançadas e suporte contínuo.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};
