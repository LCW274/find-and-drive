import { Vehicle } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Check } from "lucide-react";
import { toast } from "sonner";
import Header from "./Header";

interface VehicleDetailProps {
  vehicle: Vehicle;
}

const VehicleDetail = ({ vehicle }: VehicleDetailProps) => {
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
            <p className="text-2xl text-gray-600">{vehicle.description}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Caractéristiques techniques</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Moteur</div>
                        <div className="font-medium">{vehicle.specs.engine}</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Puissance</div>
                        <div className="font-medium">{vehicle.specs.power}</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Transmission</div>
                        <div className="font-medium">{vehicle.specs.transmission}</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Consommation</div>
                        <div className="font-medium">{vehicle.specs.consumption}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Équipements</h3>
                    <div className="space-y-3">
                      {vehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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