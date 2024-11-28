import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Heart, Phone } from "lucide-react";
import { toast } from "sonner";

const VehicleDetail = () => {
  const { id } = useParams();
  
  // Simulation de données (à remplacer par un appel API)
  const vehicle = {
    id,
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
  };

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