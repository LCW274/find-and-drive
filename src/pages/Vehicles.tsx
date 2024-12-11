import Header from "../components/Header";
import VehicleCard from "../components/VehicleCard";
import { vehicles } from "@/data/vehicles";

const Vehicles = () => {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Header />
      
      <div className="py-16 max-w-[1200px] mx-auto px-4">
        <h1 className="text-4xl font-semibold mb-8 text-white text-center">Nos Véhicules</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;