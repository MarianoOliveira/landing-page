'use client';

import { IconType } from 'react-icons';
import { FaPaintBrush, FaMobile, FaChartLine, FaHeadset, FaMobileAlt, FaBolt, FaSearch, FaWhatsapp } from 'react-icons/fa';
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

export default function Benefits() {
  const benefits = [
    {
      icon: FaMobileAlt,
      title: "Design Responsivo",
      description: "Sites que se adaptam perfeitamente a qualquer dispositivo, de smartphones a desktops."
    },
    {
      icon: FaBolt,
      title: "Alta Performance",
      description: "Páginas otimizadas para carregamento rápido e melhor experiência do usuário."
    },
    {
      icon: FaSearch,
      title: "SEO Otimizado",
      description: "Código limpo e estruturado para melhor posicionamento nos mecanismos de busca."
    },
    {
      icon: FaHeadset,
      title: "Suporte Contínuo",
      description: "Acompanhamento e manutenção para manter seu site sempre atualizado e seguro."
    }
  ];

  const whatsappMessage = encodeURIComponent("Olá! Vim pelo site e gostaria de solicitar um orçamento.");
  const whatsappLink = `https://wa.me/5521993937690?text=${whatsappMessage}`;

  return (
    <section id="beneficios" className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Por Que Escolher Nossos Serviços?
          </h2>
          <p className={styles.subtitle}>
            Criamos sites que não apenas impressionam, 
            mas que realmente geram negócios. 
            Com design moderno, tecnologia avançada e suporte contínuo, 
            sua presença online estará sempre um passo à frente da concorrência.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                <p className={styles.cardDescription}>{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.ctaContainer}>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            <FaWhatsapp className={styles.ctaIcon} />
            Quero Esses Benefícios
          </a>
        </div>
      </div>
    </section>
  );
};
