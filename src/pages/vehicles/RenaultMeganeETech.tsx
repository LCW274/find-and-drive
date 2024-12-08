import Header from "../../components/Header";
import { ArrowLeft, Phone, Heart, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const RenaultMeganeETech = () => {
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
            <h1 className="text-5xl font-semibold tracking-tight mb-4">Renault Mégane E-Tech</h1>
            <p className="text-2xl text-gray-600">L'innovation électrique à la française</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                <div className="text-4xl font-semibold text-blue-600 mb-4">
                  38 900€
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-sm text-gray-600">Année</div>
                    <div className="font-semibold text-lg">2023</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-sm text-gray-600">Kilométrage</div>
                    <div className="font-semibold text-lg">8 000 km</div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-8">
                  La Renault Mégane E-Tech incarne l'innovation électrique française avec son design distinctif.
                  Une expérience de conduite unique alliant performance et écologie.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Batterie 60 kWh",
                    "Autonomie jusqu'à 450 km (WLTP)",
                    "OpenR Link avec Google intégré",
                    "Harman Kardon® Sound System",
                    "Conduite semi-autonome niveau 2",
                    "Charge rapide 130 kW"
                  ].map((feature, index) => (
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
                src="https://images.unsplash.com/photo-1558425924-f8a26f439537?auto=format&fit=crop&w=800"
                alt="Renault Mégane E-Tech"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenaultMeganeETech;