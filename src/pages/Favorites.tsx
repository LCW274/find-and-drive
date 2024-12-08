import Header from "../components/Header";
import { Heart } from "lucide-react";
import VehicleCard from "../components/VehicleCard";
import { useState } from "react";

const Favorites = () => {
  const [favorites] = useState([
    {
      id: "1",
      title: "BMW Série 3 320d",
      price: 29900,
      year: 2020,
      mileage: 45000,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-6 h-6 text-accent" />
          <h1 className="text-2xl font-semibold">Mes Favoris</h1>
        </div>
        
        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Vous n'avez pas encore de favoris</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;