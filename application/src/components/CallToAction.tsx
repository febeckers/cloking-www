import React from 'react';
import { Shield, Lock } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="cta_final" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center justify-center gap-3 px-4 py-2 bg-purple-800/50 backdrop-blur-sm rounded-full border border-purple-700/30">
            <Shield className="h-5 w-5 text-purple-300" />
            <span className="text-purple-300 font-medium">Proteja-se agora</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sua campanha está sendo espionada enquanto você lê isso.
          </h2>
          
          <p className="text-xl text-purple-100 mb-10">
            Não espere tomar mais um bloqueio ou perder mais verba.
          </p>
          
          <div className="space-y-6">
            <a 
              href="#planos"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-xl transition-all transform hover:scale-105 hover:shadow-purple-glow w-full md:w-auto"
            >
              🚀 Ative o Cloking agora e proteja cada clique da sua campanha
            </a>
            
            <p className="flex items-center justify-center gap-2 text-purple-200">
              <Lock className="h-4 w-4" />
              <span>Comece em menos de 2 minutos</span>
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "3000+", label: "Clientes Satisfeitos" },
              { number: "21M+", label: "Acessos Protegidos" },
              { number: "99.9%", label: "Uptime Garantido" },
              { number: "24/7", label: "Suporte Especializado" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-purple-500/30">
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;