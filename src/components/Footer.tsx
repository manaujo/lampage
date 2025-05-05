import React from 'react';
import { ChefHat, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <ChefHat size={24} className="text-yellow-500 mr-2" />
              <span className="font-bold text-xl text-white">ChefComanda</span>
            </div>
            <p className="text-gray-400 mb-4">
              Sistema de Comandas Inteligente para restaurantes que buscam eficiência, controle e aumento de faturamento.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Funcionalidades</a>
              </li>
              <li>
                <a href="#advantages" className="text-gray-400 hover:text-white transition-colors">Vantagens</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Acesso</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://minhaappcomandas.com/login" className="text-gray-400 hover:text-white transition-colors">Login</a>
              </li>
              <li>
                <a href="https://minhaappcomandas.com/login" className="text-gray-400 hover:text-white transition-colors">Cadastrar-se</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="mr-2" />
                <span>contato@chefcomanda.com.br</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="mr-2" />
                <span>(11) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} ChefComanda - Sistema de Comandas Inteligente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;