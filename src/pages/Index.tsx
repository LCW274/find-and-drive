import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import VehicleCard from "../components/VehicleCard";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredVehicles = [
    {
      id: "tesla-model-3",
      title: "Tesla Model 3",
      price: 41900,
      year: 2022,
      mileage: 15000,
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800",
      category: "Électrique"
    },
    {
      id: "peugeot-3008",
      title: "Peugeot 3008",
      price: 28500,
      year: 2021,
      mileage: 40000,
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800",
      category: "Essence"
    },
    {
      id: "volkswagen-id4",
      title: "Volkswagen ID.4",
      price: 44900,
      year: 2023,
      mileage: 5000,
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800",
      category: "Électrique"
    },
    {
      id: "toyota-rav4",
      title: "Toyota RAV4",
      price: 36900,
      year: 2022,
      mileage: 25000,
      image: "https://images.unsplash.com/photo-1549927681-0b673b8243ab?auto=format&fit=crop&w=800",
      category: "Hybride"
    },
    {
      id: "renault-megane-etech",
      title: "Renault Mégane E-Tech",
      price: 38900,
      year: 2023,
      mileage: 8000,
      image: "https://images.unsplash.com/photo-1558425924-f8a26f439537?auto=format&fit=crop&w=800",
      category: "Électrique"
    },
    {
      id: "citroen-c5x",
      title: "Citroën C5 X",
      price: 33900,
      year: 2022,
      mileage: 20000,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800",
      category: "Essence"
    },
    {
      id: "bmw-serie3",
      title: "BMW Série 3 320d",
      price: 29900,
      year: 2020,
      mileage: 45000,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
      category: "Diesel"
    },
    {
      id: "audi-a4",
      title: "Audi A4 Avant",
      price: 32500,
      year: 2021,
      mileage: 35000,
      image: "/lovable-uploads/59d8ac8a-b2bd-4f4a-9e5b-7bc0a5d8e5e7.png",
      category: "Essence"
    },
    {
      id: "mercedes-classe-c",
      title: "Mercedes Classe C",
      price: 34900,
      year: 2021,
      mileage: 30000,
      image: "/lovable-uploads/d15525f5-82bc-4335-ab44-5fab478e6c2c.png",
      category: "Hybride"
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000]">
      <Header />
      
      {/* Promotion Banner */}
      <div className="bg-[#1d1d1f] text-center py-2 text-white text-sm px-4">
        <p>
          À partir du 29/11, recevez jusqu'à 1500€ de remise sur nos véhicules premium.{" "}
          <a href="/promotions" className="text-blue-500 hover:underline">
            En savoir plus <ArrowRight className="inline w-3 h-3" />
          </a>
        </p>
      </div>
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-semibold mb-2">
          Trouvez votre prochaine voiture
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
          Une sélection premium de véhicules d'exception.
        </h2>
        <div className="flex justify-center mb-8">
          <SearchBar />
        </div>
      </div>

      {/* Featured Vehicles */}
      <section className="py-16 max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-white text-center">Nos véhicules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-white">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Sélection rigoureuse</h3>
              <p className="text-gray-400">Tous nos véhicules sont inspectés et certifiés</p>
            </div>
            <div className="text-center">
              <div className="bg-black/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Prix transparents</h3>
              <p className="text-gray-400">Les meilleurs prix du marché, sans surprise</p>
            </div>
            <div className="text-center">
              <div className="bg-black/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Service premium</h3>
              <p className="text-gray-400">Un accompagnement personnalisé de A à Z</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;