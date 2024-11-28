import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import VehicleCard from "../components/VehicleCard";

const Index = () => {
  // Données temporaires pour la démo
  const featuredVehicles = [
    {
      id: "1",
      title: "BMW Série 3 320d",
      price: 29900,
      year: 2020,
      mileage: 45000,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
    },
    {
      id: "2",
      title: "Audi A4 Avant",
      price: 32500,
      year: 2021,
      mileage: 35000,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800",
    },
    {
      id: "3",
      title: "Mercedes Classe C",
      price: 34900,
      year: 2021,
      mileage: 30000,
      image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-primary to-blue-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Trouvez la voiture de vos rêves
          </h1>
          <p className="text-xl mb-8 text-center">
            Plus de 500 véhicules d'occasion sélectionnés pour vous
          </p>
          <SearchBar />
        </div>
      </div>

      {/* Featured Vehicles */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Véhicules en vedette</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sélection rigoureuse</h3>
              <p className="text-gray-600">Tous nos véhicules sont inspectés et certifiés</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prix transparents</h3>
              <p className="text-gray-600">Les meilleurs prix du marché, sans surprise</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Service premium</h3>
              <p className="text-gray-600">Un accompagnement personnalisé de A à Z</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;