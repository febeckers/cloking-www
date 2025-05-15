import React from 'react';
import { Bot, DollarSign, TrendingDown, Eye } from 'lucide-react';
import BotCounter from './BotCounter';

const Problem: React.FC = () => {
  return (
    <section id="problema" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
            Você perde dinheiro todos os dias com cliques de bots e concorrentes.
          </h2>
          
          <p className="text-lg text-gray-700 text-center mb-12">
            A verdade é que mais da metade do seu orçamento pode estar indo embora por acessos inválidos que:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Eye className="h-6 w-6 text-[#50086B]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Espionam sua estrutura</h3>
                <p className="text-gray-700">
                  Concorrentes analisam suas páginas, campanhas e copiam suas estratégias vencedoras.
                </p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingDown className="h-6 w-6 text-[#50086B]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Derrubam sua campanha</h3>
                <p className="text-gray-700">
                  Acessos suspeitos levantam bandeiras vermelhas nas plataformas de anúncios.
                </p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-[#50086B]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aumentam seu CPC</h3>
                <p className="text-gray-700">
                  Cada clique inválido drena seu orçamento sem gerar conversões reais.
                </p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Bot className="h-6 w-6 text-[#50086B]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tornam você suspeito</h3>
                <p className="text-gray-700">
                  Plataformas como Meta, TikTok e Google podem bloquear suas contas por atividades suspeitas.
                </p>
              </div>
            </div>
          </div>
          
          <BotCounter />
        </div>
      </div>
    </section>
  );
};

export default Problem;