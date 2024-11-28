import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import VehicleCard from "../components/VehicleCard";

const Search = () => {
  const [searchResults] = useState([
    {
      id: "1",
      title: "BMW Série 3 320d",
      price: 29900,
      year: 2020,
      mileage: 45000,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
    },
    {
      id: "2",
      title: "Audi A4 Avant",
      price: 32500,
      year: 2021,
      mileage: 35000,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800",
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchResults.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;