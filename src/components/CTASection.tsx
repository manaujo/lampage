import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-red-800 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para revolucionar seu restaurante?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de restaurantes que já elevaram seu padrão de atendimento com o ChefComanda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://minhaappcomandas.com/login" 
              className="bg-white text-red-800 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 hover:bg-yellow-500 transform hover:scale-105"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Comece seu teste grátis
            </a>
            <a 
              href="#features" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 hover:bg-white/10 transform hover:scale-105"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;