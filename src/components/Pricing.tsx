import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const plans = {
    monthly: [
      {
        name: 'Básico',
        price: 'R$ 60,90',
        period: '/mês',
        highlight: 'Ideal para começar',
        features: [
          'Acesso completo às comandas e mesas',
          'Gerenciamento para garçons e cozinha',
          'Acesso ao dashboard',
          'Suporte padrão',
          'Cancelamento a qualquer momento',
          'Teste grátis de 7 dias'
        ]
      },
      {
        name: 'Profissional',
        price: 'R$ 85,90',
        period: '/mês',
        highlight: 'Mais completo',
        features: [
          'Todas as funcionalidades do plano Básico',
          'Sistema de PDV completo',
          'Controle de estoque avançado',
          'Relatórios detalhados',
          'Suporte prioritário',
          'Teste grátis de 7 dias'
        ]
      }
    ],
    yearly: [
      {
        name: 'Básico Anual',
        price: 'R$ 599,88',
        installments: '12x de R$ 49,99',
        period: '/ano',
        highlight: 'Economia garantida',
        savings: 'Economize R$ 130,92 ao ano',
        features: [
          'Acesso completo às comandas e mesas',
          'Gerenciamento para garçons e cozinha',
          'Acesso ao dashboard',
          'Suporte padrão',
          'Cancelamento a qualquer momento',
          'Teste grátis de 7 dias'
        ]
      },
      {
        name: 'Profissional Anual',
        price: 'R$ 790,80',
        installments: '12x de R$ 65,90',
        period: '/ano',
        highlight: 'Mais econômico',
        savings: 'Economize R$ 240 ao ano',
        features: [
          'Todas as funcionalidades do plano Básico',
          'Sistema de PDV completo',
          'Controle de estoque avançado',
          'Relatórios detalhados',
          'Suporte prioritário 24/7',
          'Acesso antecipado a novidades',
          'Teste grátis de 7 dias'
        ]
      }
    ]
  };

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planos e Preços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Mensal
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Anual
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans[billingCycle].map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all transform ${
                index === 1 ? 'md:scale-105 border-2 border-red-500' : ''
              }`}
            >
              {index === 1 && (
                <div className="bg-red-500 text-white text-center py-2 px-4">
                  <Star className="inline-block mr-2" size={16} />
                  <span className="text-sm font-medium">Melhor escolha</span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.highlight}</p>
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-600">{plan.period}</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <>
                      <div className="text-sm text-gray-600 mb-2">ou {plan.installments}</div>
                      <div className="text-sm font-medium text-green-600">{plan.savings}</div>
                    </>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-3" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://minhaappcomandas.com/login"
                  className={`block w-full text-white text-center py-3 rounded-lg font-medium transition-colors ${
                    index === 1 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-gray-600 hover:bg-gray-700'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {billingCycle === 'yearly' ? 'Assinar Plano Anual' : 'Comece agora'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;