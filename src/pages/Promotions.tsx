import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: "BMW Série 3",
      subtitle: "Performance. Style. Innovation.",
      description: "Une berline d'exception à prix exceptionnel",
      price: "29 900€",
      originalPrice: "31 900€",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2000",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-900",
      link: "/vehicle/1"
    },
    {
      id: 2,
      title: "Audi A4 Avant",
      subtitle: "Élégance. Polyvalence. Confort.",
      description: "Le break premium par excellence",
      price: "32 500€",
      originalPrice: "35 500€",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=2000",
      bgColor: "bg-gradient-to-br from-neutral-900 to-neutral-800",
      textColor: "text-white",
      link: "/vehicle/2"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="w-full">
        {promotions.map((promo) => (
          <section 
            key={promo.id}
            className={`${promo.bgColor} ${promo.textColor} min-h-screen flex items-center justify-center relative overflow-hidden`}
          >
            <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center space-y-4">
              <h2 className="text-5xl font-semibold tracking-tight mb-2">
                {promo.title}
              </h2>
              <h3 className="text-2xl font-medium mb-2">
                {promo.subtitle}
              </h3>
              <p className="text-xl mb-4">
                {promo.description}
              </p>
              <div className="space-y-2">
                <p className="text-3xl font-semibold">
                  {promo.price}
                </p>
                <p className="text-lg line-through opacity-75">
                  {promo.originalPrice}
                </p>
              </div>
              <div className="flex space-x-4 mt-6">
                <Link to={promo.link}>
                  <Button 
                    variant="default" 
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                  >
                    En savoir plus
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="border-2 rounded-full px-8 hover:bg-white/10"
                  >
                    Nous contacter
                  </Button>
                </Link>
              </div>
              <div className="mt-8 w-full max-w-4xl">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-auto object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Promotions;