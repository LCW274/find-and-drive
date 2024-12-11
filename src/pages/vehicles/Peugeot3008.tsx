import { vehicles } from "@/data/vehicles";
import VehicleDetail from "@/components/VehicleDetail";

const Peugeot3008 = () => {
  const vehicle = vehicles.find(v => v.id === "peugeot-3008")!;
  return <VehicleDetail vehicle={vehicle} />;
};

export default Peugeot3008;