
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para implementar a solução?",
      answer: "Nossa solução pode ser implementada em apenas 24 horas. Nossa equipe de especialistas fará todo o trabalho técnico para garantir uma integração tranquila com seus sistemas existentes."
    },
    {
      question: "Preciso ter conhecimentos técnicos para usar a plataforma?",
      answer: "Não! Nossa plataforma foi projetada para ser extremamente intuitiva e amigável. Além disso, oferecemos treinamento completo e suporte contínuo para garantir que você aproveite ao máximo todas as funcionalidades."
    },
    {
      question: "Qual é o investimento necessário?",
      answer: "Oferecemos planos flexíveis que se adaptam ao tamanho e às necessidades do seu negócio. Entre em contato conosco para receber uma proposta personalizada que atenda às suas necessidades específicas."
    },
    {
      question: "Vocês oferecem suporte técnico?",
      answer: "Sim! Oferecemos suporte técnico prioritário 24/7 para todos os nossos clientes. Nossa equipe está sempre disponível para responder perguntas e resolver quaisquer problemas que possam surgir."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, nossos planos não possuem fidelidade. Você pode cancelar a qualquer momento sem taxas ou penalidades. Estamos confiantes de que você verá valor em nossa solução e escolherá continuar conosco."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Encontre respostas para as perguntas mais comuns sobre nossa solução
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
