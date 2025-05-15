import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-purple-900/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center md:justify-between">
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <a href="#" className="flex items-center">
              <img 
                src="https://corposaude.news/logocloking.png" 
                alt="Cloking Logo" 
                className="h-14 md:h-16 w-auto object-contain"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <a href="#problema" className="text-white hover:text-purple-300 transition-colors">
                Problema
              </a>
              <a href="#solucao" className="text-white hover:text-purple-300 transition-colors">
                Solução
              </a>
              <a href="#como_funciona" className="text-white hover:text-purple-300 transition-colors">
                Como Funciona
              </a>
              <a href="#planos" className="text-white hover:text-purple-300 transition-colors">
                Planos
              </a>
            </nav>
            
            <a 
              href="#planos" 
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-semibold transition-all transform hover:scale-105 hover:shadow-purple-glow"
            >
              Começar agora
            </a>
          </div>

          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;