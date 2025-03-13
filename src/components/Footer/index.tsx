'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { contact, getWhatsAppLink } from '@/config/contact';
import Logo from '../Logo';

const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  // { label: 'Depoimentos', href: '#depoimentos' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Informações sobre o desenvolvedor */}
          <div>
            <Logo variant="light" className="mb-4" />
            <p className="text-gray-400 mb-4">
              Desenvolvimento web profissional com foco em resultados para seu negócio.
            </p>
            <div className="flex gap-4">
              <a
                href={contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              {/* Instagram icon hidden
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              */}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${contact.email}`}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaEnvelope />
                {contact.email}
              </a>
              <a
                href={getWhatsAppLink('info')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaWhatsapp />
                {contact.phone}
              </a>
              <p className="text-gray-400">
                {contact.address.city}, {contact.address.state}
                <br />
                {contact.address.country}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Mariano Oliveira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
