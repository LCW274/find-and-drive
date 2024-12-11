import { Link } from "react-router-dom";
import { Vehicle } from "@/data/vehicles";

interface VehicleCardProps extends Vehicle {}

const VehicleCard = ({ id, title, price, year, mileage, image, category }: VehicleCardProps) => {
  return (
    <Link to={`/vehicle/${id}`} className="group">
      <div className="bg-[#1d1d1f] rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <div className="aspect-[16/9] relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <div className="flex justify-between items-center text-gray-400 mb-4">
            <span>{year}</span>
            <span>{mileage.toLocaleString()} km</span>
            <span>{category}</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {price.toLocaleString()}€
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;