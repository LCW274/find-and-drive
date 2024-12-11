import { vehicles } from "@/data/vehicles";
import VehicleDetail from "@/components/VehicleDetail";

const BMWSerie3 = () => {
  const vehicle = vehicles.find(v => v.id === "bmw-serie3")!;
  return <VehicleDetail vehicle={vehicle} />;
};

export default BMWSerie3;