import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3847486/pexels-photo-3847486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-800/90 to-red-700/70 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              ChefComanda O sistema inteligente para comandas e pedidos no seu
              restaurante
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Controle de mesas, pedidos e cozinha de forma simples, rápida e
              integrada com iFood.
            </p>
            <a
              href="#features"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-red-800 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Comece agora
            </a>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="bg-white p-4 rounded-xl shadow-2xl transform rotate-1 transition-transform hover:rotate-0 duration-500">
                <img
                  src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sistema ChefComanda em uso"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-red-800 px-4 py-2 rounded-full shadow-lg font-semibold text-sm">
                Novo!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
