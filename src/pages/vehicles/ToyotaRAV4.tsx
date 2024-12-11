import { vehicles } from "@/data/vehicles";
import VehicleDetail from "@/components/VehicleDetail";

const ToyotaRAV4 = () => {
  const vehicle = vehicles.find(v => v.id === "toyota-rav4")!;
  return <VehicleDetail vehicle={vehicle} />;
};

export default ToyotaRAV4;