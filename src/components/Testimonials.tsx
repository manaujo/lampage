import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, rating, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < rating ? "#FFD700" : "none"}
            className={i < rating ? "text-yellow-500" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-700 italic">{content}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ana Oliveira",
      role: "Proprietária, Cantina Bella Napoli",
      content: "O ChefComanda transformou a operação do meu restaurante. Reduzimos o tempo de atendimento, eliminamos erros nos pedidos e conseguimos atender mais clientes. O retorno sobre o investimento foi quase imediato!",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Carlos Mendes",
      role: "Chef e Proprietário, Bistrot du Chef",
      content: "Como chef, sempre me preocupei com a qualidade da comida. Com o ChefComanda, posso focar na cozinha enquanto o sistema cuida da organização dos pedidos. A integração com o iFood também facilitou muito nossa operação.",
      rating: 5,
      image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Pedro Alves",
      role: "Gerente, Restaurante Sabor & Arte",
      content: "Implementamos o ChefComanda há 6 meses e já vimos um aumento de 30% nas vendas. O controle de estoque nos ajudou a reduzir desperdícios e a gestão de mesas melhorou o fluxo de clientes.",
      rating: 4,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Restaurantes de todo o país já estão transformando seus negócios com o ChefComanda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;