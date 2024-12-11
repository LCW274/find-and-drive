import { vehicles } from "@/data/vehicles";
import VehicleDetail from "@/components/VehicleDetail";

const MercedesClasseC = () => {
  const vehicle = vehicles.find(v => v.id === "mercedes-classe-c")!;
  return <VehicleDetail vehicle={vehicle} />;
};

export default MercedesClasseC;