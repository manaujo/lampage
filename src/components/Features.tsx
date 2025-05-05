import React from 'react';
import { 
  LayoutGrid, 
  ShoppingBag, 
  Printer, 
  Package, 
  ClipboardCheck, 
  Users, 
  CreditCard
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-50 text-red-900 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <LayoutGrid size={32} />,
      title: "Gestão de mesas e comandas",
      description: "Controle mesas e comandas em tempo real, priorizando atendimento e otimizando o fluxo do seu restaurante."
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Integração com iFood",
      description: "Sincronize pedidos do iFood automaticamente com seu sistema de comandas interno."
    },
    {
      icon: <Printer size={32} />,
      title: "Impressão na cozinha",
      description: "Envie pedidos diretamente para impressoras na cozinha, agilizando o preparo."
    },
    {
      icon: <Package size={32} />,
      title: "Controle de estoque",
      description: "Gerencie seu estoque automaticamente a cada pedido, com alertas de itens em baixa."
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Acompanhamento de pedidos",
      description: "Visualize status dos pedidos: Em preparo ou Pronto, com notificações automáticas."
    },
    {
      icon: <Users size={32} />,
      title: "Multiacesso",
      description: "Perfis para Garçom, Cozinha e Administrador, cada um com permissões específicas."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Assinatura mensal",
      description: "Acesse todas as funcionalidades com uma assinatura acessível e painel de usuário completo."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Funcionalidades</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça os recursos que tornam o Mesa 04 a solução completa para o seu restaurante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;