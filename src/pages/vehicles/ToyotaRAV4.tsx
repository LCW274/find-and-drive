import Header from "../../components/Header";
import { ArrowLeft, Phone, Heart, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ToyotaRAV4 = () => {
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
            <h1 className="text-5xl font-semibold tracking-tight mb-4">Toyota RAV4</h1>
            <p className="text-2xl text-gray-600">L'hybride qui fait la différence</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                <div className="text-4xl font-semibold text-blue-600 mb-4">
                  36 900€
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-sm text-gray-600">Année</div>
                    <div className="font-semibold text-lg">2022</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-sm text-gray-600">Kilométrage</div>
                    <div className="font-semibold text-lg">25 000 km</div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-8">
                  Le Toyota RAV4 Hybride combine puissance et efficience dans un SUV familial robuste.
                  Une référence en matière de fiabilité et d'économie.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Motorisation Hybride 218ch",
                    "Toyota Safety Sense 2.0",
                    "Système multimédia Toyota Touch",
                    "Caméra 360°",
                    "Toit ouvrant panoramique",
                    "Sièges chauffants et ventilés"
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
                src="https://images.unsplash.com/photo-1549927681-0b673b8243ab?auto=format&fit=crop&w=800"
                alt="Toyota RAV4"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyotaRAV4;