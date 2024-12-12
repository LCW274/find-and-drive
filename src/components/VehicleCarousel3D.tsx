import { useEffect, useState, TouchEvent } from "react";
import { useNavigate } from "react-router-dom";
import { vehicles } from "@/data/vehicles";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VehicleCarousel3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const navigate = useNavigate();

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + vehicles.length) % vehicles.length);
  };

  const handleVehicleClick = (vehicleId: string) => {
    // Only navigate if not swiping
    if (Math.abs(touchStart - touchEnd) < 5) {
      navigate(`/vehicle/${vehicleId}`);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      goToNext();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      goToPrevious();
    }
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Responsive height using aspect ratio */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-[90vw] lg:max-w-[1200px]">
            {vehicles.map((vehicle, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={vehicle.id}
                  onClick={() => handleVehicleClick(vehicle.id)}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  className={`absolute left-1/2 top-1/2 w-full sm:w-[80%] md:w-[70%] lg:w-[800px] 
                    aspect-video cursor-pointer transition-all duration-700 ease-out
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
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 lg:p-8">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                        {vehicle.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-200">
                        {vehicle.price.toLocaleString()}€
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 
          bg-white/10 hover:bg-white/20 p-1 sm:p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 
          bg-white/10 hover:bg-white/20 p-1 sm:p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>
    </div>
  );
};

export default VehicleCarousel3D;