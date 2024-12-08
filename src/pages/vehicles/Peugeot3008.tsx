import Header from "../../components/Header";
import { ArrowLeft, Share2, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Peugeot3008 = () => {
  const { toast } = useToast();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Lien copié !",
      description: "Le lien a été copié dans votre presse-papiers.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="mb-8">
          <Link to="/search" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux résultats
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800" 
              alt="Peugeot 3008" 
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>

          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold">Peugeot 3008</h1>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={handleShare}>
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold">28 500 €</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#1d1d1f] p-4 rounded-lg">
                <span className="text-sm text-gray-400">Année</span>
                <p className="text-xl font-semibold">2021</p>
              </div>
              <div className="bg-[#1d1d1f] p-4 rounded-lg">
                <span className="text-sm text-gray-400">Kilométrage</span>
                <p className="text-xl font-semibold">40 000 km</p>
              </div>
              <div className="bg-[#1d1d1f] p-4 rounded-lg">
                <span className="text-sm text-gray-400">Énergie</span>
                <p className="text-xl font-semibold">Essence</p>
              </div>
              <div className="bg-[#1d1d1f] p-4 rounded-lg">
                <span className="text-sm text-gray-400">Boîte de vitesse</span>
                <p className="text-xl font-semibold">Automatique</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full" size="lg">Contacter le vendeur</Button>
              <Button variant="outline" className="w-full" size="lg">Réserver un essai</Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              Le Peugeot 3008 allie style et technologie dans un SUV compact moderne.
              Cette version comprend :
            </p>
            <ul>
              <li>Moteur PureTech 130ch</li>
              <li>i-Cockpit avec écran tactile 10 pouces</li>
              <li>Navigation connectée 3D</li>
              <li>Pack Safety Plus</li>
              <li>Toit panoramique ouvrant</li>
              <li>Sièges chauffants</li>
            </ul>
            <p>
              Véhicule première main, carnet d'entretien complet.
              Garantie constructeur jusqu'en 2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peugeot3008;