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
    <Link to={`/vehicle/${id}`} className="car-card block bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xl font-bold text-primary">{price.toLocaleString()}€</span>
          <span className="text-sm text-gray-500">{year}</span>
        </div>
        <div className="text-sm text-gray-600">
          {mileage.toLocaleString()} km
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;