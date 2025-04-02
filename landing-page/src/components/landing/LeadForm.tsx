
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const LeadForm: React.FC<{id?: string}> = ({id}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio de dados
    setTimeout(() => {
      console.log("Form data submitted:", formData);
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em breve.",
        duration: 5000,
      });
      
      // Reset do formulário
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        acceptTerms: false
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto" id={id}>
      <Card className="border-2 border-gray-100 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-brand-blue to-blue-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Comece agora mesmo</CardTitle>
          <CardDescription className="text-blue-50">
            Preencha o formulário para receber uma demonstração gratuita
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                name="name"
                placeholder="Seu nome"
                required
                value={formData.name}
                onChange={handleChange}
                className="border-gray-300 focus:border-brand-blue focus:ring-brand-blue"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email profissional</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-gray-300 focus:border-brand-blue focus:ring-brand-blue"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                name="company"
                placeholder="Nome da sua empresa"
                required
                value={formData.company}
                onChange={handleChange}
                className="border-gray-300 focus:border-brand-blue focus:ring-brand-blue"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="(00) 00000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="border-gray-300 focus:border-brand-blue focus:ring-brand-blue"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, acceptTerms: checked }))}
              />
              <Label htmlFor="acceptTerms" className="text-sm text-gray-600">
                Concordo em receber comunicações e aceito os termos de uso
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-brand-orange hover:bg-orange-600 text-white font-medium py-3 rounded-md transition-colors"
              disabled={isSubmitting || !formData.acceptTerms}
            >
              {isSubmitting ? "Enviando..." : "Solicitar Demonstração"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadForm;
