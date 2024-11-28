import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Heart, Phone } from "lucide-react";
import { toast } from "sonner";

const vehicles = {
  "1": {
    id: "1",
    title: "BMW Série 3 320d",
    price: 29900,
    year: 2020,
    mileage: 45000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
    description: "Magnifique BMW Série 3 320d en excellent état. Carnet d'entretien complet, première main.",
    features: [
      "Boîte automatique",
      "GPS",
      "Sièges cuir",
      "Climatisation automatique",
      "Caméra de recul"
    ]
  },
  "2": {
    id: "2",
    title: "Audi A4 Avant",
    price: 32500,
    year: 2021,
    mileage: 35000,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800",
    description: "Superbe Audi A4 Avant avec finition S-Line. Véhicule très bien entretenu, historique complet.",
    features: [
      "Finition S-Line",
      "Toit ouvrant",
      "Système audio Bang & Olufsen",
      "Sièges chauffants",
      "Aide au stationnement"
    ]
  },
  "3": {
    id: "3",
    title: "Mercedes Classe C",
    price: 34900,
    year: 2021,
    mileage: 30000,
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=800",
    description: "Mercedes Classe C AMG Line en parfait état. Toutes options, faible kilométrage.",
    features: [
      "Pack AMG Line",
      "Affichage tête haute",
      "Système MBUX",
      "Suspension adaptative",
      "Pack assistance à la conduite"
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img 
              src={vehicle.image} 
              alt={vehicle.title} 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{vehicle.title}</h1>
            <div className="text-3xl font-bold text-primary mb-6">
              {vehicle.price.toLocaleString()}€
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Année</div>
                <div className="font-semibold">{vehicle.year}</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Kilométrage</div>
                <div className="font-semibold">{vehicle.mileage.toLocaleString()} km</div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">{vehicle.description}</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Équipements</h2>
              <ul className="grid grid-cols-2 gap-2">
                {vehicle.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">• {feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-4">
              <Button onClick={handleContact} className="flex-1">
                <Phone className="w-4 h-4 mr-2" />
                Contacter
              </Button>
              <Button variant="outline" onClick={handleFavorite}>
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;