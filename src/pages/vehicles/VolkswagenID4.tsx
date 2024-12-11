import { vehicles } from "@/data/vehicles";
import VehicleDetail from "@/components/VehicleDetail";

const VolkswagenID4 = () => {
  const vehicle = vehicles.find(v => v.id === "volkswagen-id4")!;
  return <VehicleDetail vehicle={vehicle} />;
};

export default VolkswagenID4;