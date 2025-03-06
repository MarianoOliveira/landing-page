'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { images } from '@/config/images';
import styles from './styles.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo}>
          <Image
            src={images.logoWhite}
            alt="Logo da empresa"
            width={150}
            height={40}
            priority
            quality={100}
          />
        </a>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.menu}>
            <li>
              <a href="#inicio" onClick={toggleMenu}>
                Início
              </a>
            </li>
            <li>
              <a href="#servicos" onClick={toggleMenu}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={toggleMenu}>
                Portfólio
              </a>
            </li>
            <li>
              <a href="#depoimentos" onClick={toggleMenu}>
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contato" className={styles.ctaButton} onClick={toggleMenu}>
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
