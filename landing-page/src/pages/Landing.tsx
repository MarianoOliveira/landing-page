import React, { useRef } from "react";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import LeadForm from "@/components/landing/LeadForm";
import CTASection from "@/components/landing/CTASection";
import StatsSection from "@/components/landing/StatsSection";
import FAQSection from "@/components/landing/FAQSection";
import PortfolioSection from "@/components/landing/PortfolioSection";

const Landing = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection onScrollToForm={scrollToForm} />

      {/* Stats Section */}
      <StatsSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* CTA Section */}
      <CTASection onScrollToForm={scrollToForm} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Form Section */}
      <section className="py-16 bg-gray-50" ref={formRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Solicite uma demonstração gratuita
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nossa equipe entrará em contato para agendar uma demonstração personalizada para seu negócio
          </p>
          
          <LeadForm id="lead-form" />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default Landing;
