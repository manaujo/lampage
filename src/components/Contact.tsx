import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nossa equipe está pronta para ajudar você a escolher a melhor solução para o seu restaurante.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="mr-2" size={24} />
            Falar com um consultor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;