import React from 'react';
import { ArrowRight, Link, Settings, BarChart3 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Link className="h-8 w-8 text-purple-500" />,
      title: "Cole seu link na plataforma Cloking",
      description: "Adicione a URL do seu site, página de vendas ou destino de tráfego."
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Defina quem pode ou não ver sua página",
      description: "Configure filtros inteligentes para proteger contra bots, VPNs, concorrentes e mais."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      title: "Integre ao seu anúncio e monitore em tempo real",
      description: "Use o link gerado em suas campanhas no Meta, TikTok, Google e observe os resultados no dashboard."
    }
  ];

  return (
    <section id="como_funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Como Funciona
          </h2>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-24 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Number Circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-lg hidden md:flex">
                      {index + 1}
                    </div>
                    
                    {/* Step Content - Left or Right */}
                    <div className="md:w-1/2 relative">
                      <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition-all">
                        <div className="flex md:hidden items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        </div>
                        
                        <div className="hidden md:block mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        </div>
                        
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Icon Container */}
                    <div className="md:w-1/2 flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center shadow-md">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-purple-50 p-6 rounded-xl border border-purple-100">
            <p className="text-center text-gray-700 flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>Você ainda escolhe se quer redirecionar os "curiosos" para uma página neutra</span>
              <ArrowRight className="h-4 w-4 text-purple-500 hidden sm:block" />
              <span>ou bloquear o acesso imediatamente.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;