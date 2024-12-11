import { vehicles } from "@/data/vehicles";
import VehicleDetail from "@/components/VehicleDetail";

const RenaultMeganeETech = () => {
  const vehicle = vehicles.find(v => v.id === "renault-megane-etech")!;
  return <VehicleDetail vehicle={vehicle} />;
};

export default RenaultMeganeETech;