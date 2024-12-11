import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { vehicles } from "@/data/vehicles";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VehicleCarousel3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + vehicles.length) % vehicles.length);
  };

  const handleVehicleClick = (vehicleId: string) => {
    navigate(`/vehicle/${vehicleId}`);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-[1200px] h-full">
          {vehicles.map((vehicle, index) => {
            const offset = index - currentIndex;
            const isActive = index === currentIndex;
            
            return (
              <div
                key={vehicle.id}
                onClick={() => handleVehicleClick(vehicle.id)}
                className={`absolute left-1/2 top-1/2 w-[800px] h-[450px] cursor-pointer
                  transition-all duration-700 ease-out
                  ${isActive ? 'z-20' : 'z-10'}`}
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translateX(${offset * 70}%)
                    scale(${isActive ? 1 : 0.8})
                    rotateY(${offset * -25}deg)
                    perspective(1000px)
                  `,
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {vehicle.title}
                    </h3>
                    <p className="text-xl text-gray-200">
                      {vehicle.price.toLocaleString()}€
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};

export default VehicleCarousel3D;