export default function Hero() {
  return (
    <section id="inicio" className="section bg-primary text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Desenvolvimento Web Profissional
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Transforme sua presença digital com soluções web modernas, 
              responsivas e otimizadas para resultados.
            </p>
            <div className="flex gap-4">
              <a href="#contato" className="btn btn-secondary">
                Começar Projeto
              </a>
              <a href="#portfolio" className="btn btn-outline">
                Ver Portfólio
              </a>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {/* Placeholder para imagem ou ilustração */}
              <div className="w-full h-64 bg-gray-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
