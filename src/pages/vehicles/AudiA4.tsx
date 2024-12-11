import { vehicles } from "@/data/vehicles";
import VehicleDetail from "@/components/VehicleDetail";

const AudiA4 = () => {
  const vehicle = vehicles.find(v => v.id === "audi-a4")!;
  return <VehicleDetail vehicle={vehicle} />;
};

export default AudiA4;