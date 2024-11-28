import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: "BMW Série 3 320d",
      description: "Profitez d'une remise exceptionnelle de 2000€ sur ce véhicule",
      originalPrice: 31900,
      promoPrice: 29900,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
    },
    {
      id: 2,
      title: "Audi A4 Avant",
      description: "Offre limitée : -10% sur ce modèle premium",
      originalPrice: 35500,
      promoPrice: 32500,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Nos promotions en cours</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promo) => (
            <Card key={promo.id}>
              <CardHeader>
                <img src={promo.image} alt={promo.title} className="w-full h-48 object-cover rounded-t-lg" />
                <CardTitle className="mt-4">{promo.title}</CardTitle>
                <CardDescription>{promo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm line-through text-gray-500">
                      {promo.originalPrice.toLocaleString()}€
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {promo.promoPrice.toLocaleString()}€
                    </p>
                  </div>
                  <Button>En savoir plus</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotions;