import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

interface VehicleCardProps {
  id: string;
  title: string;
  price: number;
  year: number;
  mileage: number;
  image: string;
}

const VehicleCard = ({ id, title, price, year, mileage, image }: VehicleCardProps) => {
  return (
    <Link to={`/vehicle/${id}`} className="block bg-[#1d1d1f] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70 transition-colors">
          <Heart className="w-4 h-4 text-white" />
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-white">{title}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xl font-bold text-white">{price.toLocaleString()}€</span>
          <span className="text-sm text-gray-400">{year}</span>
        </div>
        <div className="text-sm text-gray-400">
          {mileage.toLocaleString()} km
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;