import React from 'react';
import { Shield, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-28 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-purple-300" />
              <span className="text-purple-300 font-medium">Segurança Total para Seu Tráfego</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Proteja Suas Campanhas e Escale Sem Medo com a Melhor Ferramenta de Cloaking do Brasil
            </h1>
            
            <p className="text-lg text-purple-100 md:pr-12">
              Filtramos em tempo real bots, espiões de concorrência e acessos suspeitos para você rodar tráfego com segurança, estabilidade e mais ROI.
            </p>
            
            <a 
              href="#planos" 
              className="group bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-purple-glow flex items-center gap-2"
            >
              <Shield className="h-5 w-5 group-hover:animate-pulse" />
              <span>Quero Proteger meu tráfego agora</span>
            </a>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-purple-900/50 backdrop-blur-sm p-8 rounded-xl border border-purple-700/50 shadow-xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Lock className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 ml-10">Seu tráfego protegido em tempo real</h3>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-purple-400 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Filtragem Inteligente</h4>
                    <p className="text-purple-200 text-sm">Identifica e bloqueia bots, espiões e concorrentes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-purple-400 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Dashboard em Tempo Real</h4>
                    <p className="text-purple-200 text-sm">Acompanhe métricas e acessos em um painel intuitivo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-purple-400 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Redirecionamentos Inteligentes</h4>
                    <p className="text-purple-200 text-sm">Controle quem vê o quê, protegendo seu negócio</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-purple-800/50 rounded-lg border border-purple-600/30">
                  <div className="flex items-center gap-4">
                    <div className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">+50%</div>
                    <p className="text-purple-100 text-sm">Aumento médio na duração das campanhas após implementação</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;