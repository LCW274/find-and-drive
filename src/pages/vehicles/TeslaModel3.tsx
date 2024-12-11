import { vehicles } from "@/data/vehicles";
import VehicleDetail from "@/components/VehicleDetail";

const TeslaModel3 = () => {
  const vehicle = vehicles.find(v => v.id === "tesla-model-3")!;
  return <VehicleDetail vehicle={vehicle} />;
};

export default TeslaModel3;