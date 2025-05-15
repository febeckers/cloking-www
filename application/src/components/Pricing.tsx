import React from 'react';
import { Check, Star } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  plans: PricingPlan[];
}

const Pricing: React.FC<PricingProps> = ({ plans }) => {

  console.log('plans', plans)

  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Planos e Preços
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const isPopular = index === 1;
              
              return (
                <div 
                  key={index} 
                  className={`
                    relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2
                    ${isPopular ? 'border-2 border-purple-500 shadow-xl' : 'border border-gray-200 shadow-lg'}
                  `}
                >
                  {isPopular && (
                    <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 flex items-center gap-1 rounded-bl-lg">
                      <Star className="h-4 w-4 fill-white" />
                      <span className="text-sm font-medium">Mais Popular</span>
                    </div>
                  )}
                  
                  <div className={`
                    p-6 
                    ${isPopular ? 'bg-gradient-to-br from-purple-700 to-indigo-800 text-white' : 'bg-white'}
                  `}>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-3xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white">
                    <ul className="space-y-3">
                      {plan.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className={`h-5 w-5 mt-0.5 ${isPopular ? 'text-purple-500' : 'text-green-500'}`} />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => window.open(plan.href, '_blank')}
                      className={`
                      w-full mt-8 py-3 rounded-lg font-semibold transition-all 
                      ${isPopular ? 
                        'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-300/50' : 
                        'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }
                    `}>
                      Escolher Plano
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <p className="text-center text-gray-700 mb-4">
              Todos os planos incluem redirecionamento inteligente, painel em tempo real, proteção contra bots e espionagem. Ativação em minutos.
            </p>
            
            <div className="flex justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                <span>🔘 Quero Escolher Meu Plano Agora</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;