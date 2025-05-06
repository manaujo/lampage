import React from "react";
import { Clock, Check, Smartphone, TrendingUp } from "lucide-react";

interface AdvantageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  reversed?: boolean;
}

const Advantage: React.FC<AdvantageProps> = ({
  icon,
  title,
  description,
  reversed = false
}) => {
  return (
    <div
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center mb-16 last:mb-0`}
    >
      <div
        className={`w-full md:w-1/2 md:px-8 mb-8 md:mb-0 ${
          reversed ? "md:text-right" : "md:text-left"
        } text-center`}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-red-900 rounded-full flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
    </div>
  );
};

const Advantages: React.FC = () => {
  const advantages = [
    {
      icon: <Clock size={64} />,
      title: "Economize tempo no atendimento",
      description:
        "Reduza em até 40% o tempo entre o pedido e a entrega, melhorando a experiência dos seus clientes e a rotatividade das mesas."
    },
    {
      icon: <Check size={64} />,
      title: "Reduza erros entre salão e cozinha",
      description:
        "Elimine falhas de comunicação e erros de anotação com pedidos digitais que vão diretamente para a equipe de preparo."
    },
    {
      icon: <Smartphone size={64} />,
      title: "Controle seu negócio na palma da mão",
      description:
        "Acesse relatórios, monitore vendas e gerencie seu restaurante de qualquer lugar, a qualquer momento, através do seu smartphone."
    },
    {
      icon: <TrendingUp size={64} />,
      title: "Aumente a organização e o faturamento",
      description:
        "Restaurantes que utilizam o Chef Comanda relatam aumento médio de 25% no faturamento mensal e maior satisfação dos clientes."
    }
  ];

  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vantagens do sistema
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforme a experiência do seu restaurante com benefícios reais
            para seu negócio.
          </p>
        </div>

        <div className="mt-12">
          {advantages.map((advantage, index) => (
            <Advantage
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
