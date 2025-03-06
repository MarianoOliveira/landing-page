'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import styles from './styles.module.css';

const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

const socialLinks = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
];

export const Footer = () => {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo e Descrição */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image src="/images/logo-white.png" alt="Logo" width={150} height={40} />
            </Link>
            <p className={styles.description}>
              Entre em contato e vamos criar um site que realmente gere resultados para o seu negócio.
            </p>
            <Link
              href="#contato"
              className={styles.ctaButton}
            >
              Comece Agora
            </Link>
          </div>

          {/* Links Rápidos */}
          <div className={styles.links}>
            <h3 className={styles.title}>Links Rápidos</h3>
            <ul className={styles.menu}>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.link}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className={styles.contact}>
            <h3 className={styles.title}>Vamos Conversar?</h3>
            <ul className={styles.contactInfo}>
              <li>
                <a
                  href="mailto:contato@exemplo.com"
                  className={styles.link}
                >
                  contato@exemplo.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5511999999999"
                  className={styles.link}
                >
                  (11) 99999-9999
                </a>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className={styles.social}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
