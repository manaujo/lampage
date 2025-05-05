import React, { useState, useEffect } from "react";
import { Menu, X, ChefHat } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-red-500 shadow-md py-3" : "bg-red-400   py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <ChefHat className="text-white mr-2" size={28} />
            <span className="font-bold text-xl text-white">ChefComanda</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#features"
              className="text-sm font-medium text-white hover:text-yellow-500 transition-colors"
            >
              Funcionalidades
            </a>
            <a
              href="#advantages"
              className="text-sm font-medium text-white hover:text-yellow-500 transition-colors"
            >
              Vantagens
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-white hover:text-yellow-500 transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="https://minhaappcomandas.com/login"
              className="text-sm font-medium bg-white text-red-800 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-red-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
            <a
              href="https://minhaappcomandas.com/login"
              className="text-sm font-medium bg-yellow-500 text-red-800 px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cadastrar-se
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-500 hover:bg-red-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Funcionalidades
            </a>
            <a
              href="#advantages"
              className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-500 hover:bg-red-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Vantagens
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-500 hover:bg-red-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="https://minhaappcomandas.com/login"
              className="block px-3 py-2 text-base font-medium bg-white text-red-800 hover:bg-yellow-500 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
            <a
              href="https://minhaappcomandas.com/login"
              className="block px-3 py-2 mt-2 text-base font-medium bg-yellow-500 text-red-800 hover:bg-yellow-400 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Cadastrar-se
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
