'use client';

import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "E-commerce de Moda",
    description: "Loja virtual completa com integração de pagamentos e gestão de estoque",
    tags: ["Next.js", "Stripe", "MongoDB"]
  },
  {
    title: "Blog Corporativo",
    description: "Blog responsivo com sistema de gestão de conteúdo",
    tags: ["React", "Tailwind", "Headless CMS"]
  },
  {
    title: "Landing Page SaaS",
    description: "Página de conversão para produto SaaS com alta taxa de conversão",
    tags: ["Next.js", "Tailwind", "Analytics"]
  },
  {
    title: "Portal Educacional",
    description: "Plataforma de cursos online com área do aluno",
    tags: ["React", "Node.js", "PostgreSQL"]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Portfólio</h2>
        <p className="section-subtitle">
          Conheça alguns dos projetos que desenvolvi
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                <div className="text-4xl font-bold text-gray-300">
                  {project.title.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
