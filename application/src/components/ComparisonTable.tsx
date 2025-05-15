import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const features = [
    {
      name: "Filtros por IP e região",
      cloking: true,
      concorrentes: true,
      vpn: false
    },
    {
      name: "Bloqueio de AdSpy",
      cloking: true,
      concorrentes: true,
      vpn: false
    },
    {
      name: "Configuração fácil e visual",
      cloking: true,
      concorrentes: false,
      vpn: false
    },
    {
      name: "Dashboard em português",
      cloking: true,
      concorrentes: false,
      vpn: false
    },
    {
      name: "Suporte humanizado em 1h",
      cloking: true,
      concorrentes: false,
      vpn: false
    },
    {
      name: "Integração com Meta, TikTok",
      cloking: true,
      concorrentes: true,
      vpn: false
    }
  ];

  const renderIcon = (value: boolean) => {
    if (value) {
      return <Check className="h-6 w-6 text-green-500" />;
    }
    return <X className="h-6 w-6 text-red-500" />;
  };

  return (
    <section id="comparativo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Por que o Cloking é melhor?
          </h2>

          {/* Desktop Table View */}
          <div className="hidden md:block">
            <div className="overflow-hidden rounded-xl shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="bg-gray-100 py-4 px-6 text-left text-lg font-semibold rounded-tl-xl">
                      Recurso
                    </th>
                    <th className="bg-[#50086B] py-4 px-6 text-left text-lg font-semibold text-white">
                      Cloking
                    </th>
                    <th className="bg-gray-600 py-4 px-6 text-left text-lg font-semibold text-white">
                      Concorrentes
                    </th>
                    <th className="bg-gray-800 py-4 px-6 text-left text-lg font-semibold text-white rounded-tr-xl">
                      VPN Tradicional
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {features.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 text-base font-medium text-gray-900">
                        {feature.name}
                      </td>
                      <td className="py-4 px-6 bg-purple-50">
                        <div className="flex justify-center">
                          {renderIcon(feature.cloking)}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex justify-center">
                          {renderIcon(feature.concorrentes)}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex justify-center">
                          {renderIcon(feature.vpn)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gray-100 p-4">
                  <h3 className="font-medium text-gray-900">{feature.name}</h3>
                </div>
                <div className="grid grid-cols-3 divide-x divide-gray-200">
                  <div className="p-4 bg-purple-50">
                    <p className="text-sm text-center font-medium text-[#50086B] mb-2">Cloking</p>
                    <div className="flex justify-center">
                      {renderIcon(feature.cloking)}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-center font-medium text-gray-600 mb-2">Concorrentes</p>
                    <div className="flex justify-center">
                      {renderIcon(feature.concorrentes)}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-center font-medium text-gray-600 mb-2">VPN</p>
                    <div className="flex justify-center">
                      {renderIcon(feature.vpn)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-100 p-6 rounded-xl border border-purple-200">
            <p className="text-center font-medium text-[#50086B] text-lg">
              O Cloking é o único pensado para quem faz gestão de tráfego de alta performance e que quer segurança com simplicidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;