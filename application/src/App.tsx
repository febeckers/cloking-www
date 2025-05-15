import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import ComparisonTable from './components/ComparisonTable';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { Testimonial, PricingPlan } from './types';

function App() {
  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      text: "Com o Cloking, meus anúncios duram 5x mais rodando. Parei de tomar bloqueio toda semana.",
      author: "André M., gestor de tráfego"
    },
    {
      text: "Eu estava perdendo dinheiro e nem sabia. Hoje, cada clique que entra é validado e seguro.",
      author: "Priscila G., afiliada PLR"
    }
  ];

  // Sample pricing plans data
  const plans: PricingPlan[] = [
    {
      name: "Plano Iniciante",
      price: "R$129,90/mês",
      highlights: [
        "Até 10.000 análises/mês",
        "Campanhas ilimitadas",
        "1 domínio",
        "10 filtros por campanha",
        "7 dias de registros",
        "Filtro para Facebook",
        "Suporte via e-mail"
      ],
      href: "https://checkout.payt.com.br/42a94c56a7e5497fd487ed1818a6f0df"
    },
    {
      name: "Plano Profissional",
      price: "R$269,90/mês",
      highlights: [
        "Até 50.000 análises/mês",
        "Campanhas ilimitadas",
        "3 domínios",
        "20 filtros por campanha", 
        "45 dias de histórico",
        "Suporte via WhatsApp",
        "Filtros para Facebook e Google"
      ],
       href: "https://checkout.payt.com.br/334a5b95aaf949554331f0e05ee2d498"
    },
    {
      name: "Plano Expert",
      price: "R$449,90/mês",
      highlights: [
        "Até 250.000 análises/mês",
        "Campanhas ilimitadas",
        "5 domínios",
        "Todos os Filtros",
        "90 dias de histórico",
        "Suporte via call",
        "Suporte prioritário",
        "Integração via API",
        "Filtros para Facebook, Google, Kwai, TikTok, Taboola e Outbrain"
      ],
       href: "https://checkout.payt.com.br/2bed1f116459e39a4b4a1ed8593133a8"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <ComparisonTable />
      <Testimonials testimonials={testimonials} />
      <Pricing plans={plans} />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;