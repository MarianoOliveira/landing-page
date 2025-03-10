'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="text-2xl font-bold text-primary">
            MarianoOliveira
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-primary hover:text-secondary transition-colors">
              Benefícios
            </a>
            <a href="#servicos" className="text-primary hover:text-secondary transition-colors">
              Serviços
            </a>
            <a href="#portfolio" className="text-primary hover:text-secondary transition-colors">
              Portfólio
            </a>
            <a href="#depoimentos" className="text-primary hover:text-secondary transition-colors">
              Depoimentos
            </a>
            <a
              href="#contato"
              className="btn btn-primary"
            >
              Solicitar Orçamento
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
            <a
              href="#beneficios"
              className="text-primary hover:text-secondary transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Benefícios
            </a>
            <a
              href="#servicos"
              className="text-primary hover:text-secondary transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              className="text-primary hover:text-secondary transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Portfólio
            </a>
            <a
              href="#depoimentos"
              className="text-primary hover:text-secondary transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Depoimentos
            </a>
            <div className="px-4 pt-2">
              <a
                href="#contato"
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
