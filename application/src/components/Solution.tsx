import React from 'react';
import { Shield, Check, Server, Eye, Lock } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section 
      id="solucao" 
      className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-purple-300" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Apresentamos o Cloking: mais do que cloaking — é blindagem total para suas campanhas.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              {
                icon: <Eye className="h-6 w-6 text-purple-200" />,
                title: "Filtra IPs de bots e concorrentes",
                description: "Bloqueio automático de ferramentas como AdSpy, SpyFu e similares que espionam suas campanhas."
              },
              {
                icon: <Lock className="h-6 w-6 text-purple-200" />,
                title: "Impede acessos por VPN e Proxy",
                description: "Detecção avançada de navegadores anônimos e conexões de risco."
              },
              {
                icon: <Shield className="h-6 w-6 text-purple-200" />,
                title: "Bloqueia visitas indesejadas",
                description: "Filtragem de crawlers, acessos duplicados e domínios espiões que comprometem suas campanhas."
              },
              {
                icon: <Server className="h-6 w-6 text-purple-200" />,
                title: "Métricas em tempo real",
                description: "Dashboard completo para monitorar todos os acessos, bloqueios e dados importantes da sua campanha."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:bg-white/15 transition-all"
              >
                <div className="bg-purple-800/50 p-3 inline-block rounded-lg mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-purple-100">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="bg-purple-800/40 p-6 rounded-xl border border-purple-600/30">
              <h3 className="text-xl font-semibold mb-4 text-white">Configure tudo com facilidade — sem precisar programar</h3>
              
              <ul className="space-y-3">
                {[
                  "Filtra IPs de bots, concorrentes e ferramentas como AdSpy, SpyFu e similares",
                  "Impede acessos por VPN, Proxy ou navegador anônimo",
                  "Bloqueia visitas duplicadas, crawlers e domínios espiões",
                  "Recebe métricas em tempo real",
                  "Configura tudo com facilidade — sem precisar programar"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-purple-600/30">
                <div className="flex items-center gap-3">
                  <Server className="h-5 w-5 text-purple-300" />
                  <p className="text-purple-100 italic">
                    Tudo isso hospedado com infraestrutura segura da AWS + Cloudflare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;