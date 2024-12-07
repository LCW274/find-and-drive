import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Check } from "lucide-react";
import { toast } from "sonner";

const vehicles = {
  "1": {
    id: "1",
    title: "BMW Série 3 320d",
    subtitle: "La berline sportive par excellence",
    price: 29900,
    year: 2020,
    mileage: 45000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2000",
    description: "Découvrez l'alliance parfaite entre performance et élégance. Cette BMW Série 3 320d offre une expérience de conduite incomparable avec son moteur puissant et efficient.",
    features: [
      "Boîte automatique 8 rapports",
      "GPS Professional",
      "Sièges cuir Dakota",
      "Climatisation automatique bi-zone",
      "Caméra de recul"
    ]
  },
  "2": {
    id: "2",
    title: "Audi A4 Avant",
    subtitle: "L'élégance à l'état pur",
    price: 32500,
    year: 2021,
    mileage: 35000,
    image: "/lovable-uploads/59d8ac8a-b2bd-4f4a-9e5b-7bc0a5d8e5e7.png",
    description: "L'Audi A4 Avant incarne la sophistication et la polyvalence. Avec sa finition S-Line et ses technologies de pointe, elle répond aux attentes les plus exigeantes.",
    features: [
      "Finition S-Line exclusive",
      "Toit ouvrant panoramique",
      "Système audio Bang & Olufsen",
      "Sièges avant chauffants",
      "Audi Parking System Plus"
    ]
  },
  "3": {
    id: "3",
    title: "Mercedes Classe C",
    subtitle: "Le luxe à l'allemande",
    price: 38900,
    year: 2022,
    mileage: 25000,
    image: "/lovable-uploads/d15525f5-82bc-4335-ab44-5fab478e6c2c.png",
    description: "La nouvelle Mercedes Classe C redéfinit les standards du segment premium avec son design sophistiqué et ses technologies innovantes.",
    features: [
      "Pack AMG Line",
      "Affichage tête haute",
      "Système MBUX nouvelle génération",
      "Sellerie cuir Nappa",
      "Assistant de conduite DISTRONIC"
    ]
  }
};

const VehicleDetail = () => {
  const { id } = useParams();
  const vehicle = vehicles[id as keyof typeof vehicles];

  if (!vehicle) {
    return (
      <div>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Véhicule non trouvé</h1>
        </div>
      </div>
    );
  }

  const handleContact = () => {
    toast.success("Notre équipe vous contactera dans les plus brefs délais");
  };

  const handleFavorite = () => {
    toast.success("Véhicule ajouté aux favoris");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-semibold tracking-tight mb-4">{vehicle.title}</h1>
            <p className="text-2xl text-gray-600">{vehicle.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                <div className="text-4xl font-semibold text-blue-600 mb-4">
                  {vehicle.price.toLocaleString()}€
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-sm text-gray-600">Année</div>
                    <div className="font-semibold text-lg">{vehicle.year}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-sm text-gray-600">Kilométrage</div>
                    <div className="font-semibold text-lg">{vehicle.mileage.toLocaleString()} km</div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-8">{vehicle.description}</p>
                
                <div className="space-y-3">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  onClick={handleContact} 
                  className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Nous contacter
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleFavorite}
                  className="h-12 border-2 rounded-full px-6 hover:bg-gray-50"
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src={vehicle.image} 
                alt={vehicle.title}
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;