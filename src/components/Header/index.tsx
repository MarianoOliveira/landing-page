'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { getWhatsAppLink } from '@/config/contact';
import Logo from '../Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#portfolio', label: 'Portfólio' },
    // { href: '#depoimentos', label: 'Depoimentos' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-primary hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={getWhatsAppLink('budget')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Solicite um Orçamento Grátis
            </a>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden p-2 text-primary hover:text-secondary transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-white py-4 border-t border-gray-100`}
        >
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-primary hover:text-secondary transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href={getWhatsAppLink('budget')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-center"
                onClick={toggleMenu}
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
