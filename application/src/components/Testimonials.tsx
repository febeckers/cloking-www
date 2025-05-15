import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="provas_sociais" className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            +3.000 afiliados e gestores de tráfego confiam no Cloking
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-purple-800/50 p-6 rounded-xl border border-purple-700/50 hover:bg-purple-800/70 transition-all"
              >
                <Quote className="h-10 w-10 text-purple-400 mb-4" />
                <p className="text-lg mb-6 text-purple-100">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-xl font-bold">
                    {testimonial.author.split(' ')[0][0]}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="bg-purple-800/30 px-8 py-4 rounded-full flex items-center gap-3 border border-purple-700/30">
              <span className="text-3xl font-bold">+3.000</span>
              <span className="text-purple-200">clientes satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;