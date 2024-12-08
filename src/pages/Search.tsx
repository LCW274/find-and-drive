import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import VehicleCard from "../components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Search = () => {
  const [searchResults] = useState([
    {
      id: "1",
      title: "BMW Série 3 320d",
      price: 29900,
      year: 2020,
      mileage: 45000,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
      category: "Diesel"
    },
    {
      id: "2",
      title: "Audi A4 Avant",
      price: 32500,
      year: 2021,
      mileage: 35000,
      image: "/lovable-uploads/59d8ac8a-b2bd-4f4a-9e5b-7bc0a5d8e5e7.png",
      category: "Essence"
    },
  ]);

  const [priceSort, setPriceSort] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="mb-8">
          <SearchBar />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Filter className="w-4 h-4" />
            <span>Filtres :</span>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Select value={priceSort} onValueChange={setPriceSort}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Prix" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Prix croissant</SelectItem>
                <SelectItem value="desc">Prix décroissant</SelectItem>
              </SelectContent>
            </Select>

            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Année" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>

            {(priceSort || yearFilter) && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setPriceSort("");
                  setYearFilter("");
                }}
              >
                Réinitialiser les filtres
              </Button>
            )}
          </div>
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