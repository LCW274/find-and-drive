import { vehicles } from "@/data/vehicles";
import VehicleDetail from "@/components/VehicleDetail";

const CitroenC5X = () => {
  const vehicle = vehicles.find(v => v.id === "citroen-c5x")!;
  return <VehicleDetail vehicle={vehicle} />;
};

export default CitroenC5X;