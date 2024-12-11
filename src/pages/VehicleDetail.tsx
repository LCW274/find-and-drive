import { useParams } from "react-router-dom";
import { vehicles } from "@/data/vehicles";
import VehicleDetail from "@/components/VehicleDetail";
import Header from "../components/Header";

const VehicleDetailPage = () => {
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id === id);

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

  return <VehicleDetail vehicle={vehicle} />;
};

export default VehicleDetailPage;