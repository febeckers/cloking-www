import React from 'react';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://corposaude.news/logocloking.png" 
                alt="Cloking Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            <p className="text-gray-400 mb-6">
              A melhor ferramenta de cloaking do Brasil para proteger suas campanhas e tráfego pago.
            </p>
            
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg 
                    className="h-5 w-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Empresa</h3>
            <ul className="space-y-4">
              {['Sobre nós', 'Blog', 'Termos de Uso', 'Política de Privacidade'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Recursos</h3>
            <ul className="space-y-4">
              {['FAQ', 'Tutoriais', 'Suporte', 'API Docs', 'Integrações'].map(item => (
                <li key={item}>
                  <a 
                    href={item === 'Suporte' ? 'https://api.whatsapp.com/send/?phone=556181718998&text=Suporte' : '#'} 
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                    target={item === 'Suporte' ? '_blank' : undefined}
                    rel={item === 'Suporte' ? 'noopener noreferrer' : undefined}
                  >
                    <ChevronRight className="h-4 w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-purple-400 mt-0.5" />
                <span>contato@cloking.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-purple-400 mt-0.5" />
                <span>+55 (61) 8171-8998</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5" />
                <span>Brasília, DF - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cloking. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;