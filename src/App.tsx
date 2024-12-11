import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Search from "./pages/Search";
import VehicleDetail from "./pages/VehicleDetail";
import Contact from "./pages/Contact";
import Promotions from "./pages/Promotions";
import Favorites from "./pages/Favorites";
import Account from "./pages/Account";
import Vehicles from "./pages/Vehicles";
import Footer from "./components/Footer";

// Import des pages de véhicules spécifiques
import TeslaModel3 from "./pages/vehicles/TeslaModel3";
import Peugeot3008 from "./pages/vehicles/Peugeot3008";
import VolkswagenID4 from "./pages/vehicles/VolkswagenID4";
import ToyotaRAV4 from "./pages/vehicles/ToyotaRAV4";
import RenaultMeganeETech from "./pages/vehicles/RenaultMeganeETech";
import CitroenC5X from "./pages/vehicles/CitroenC5X";
import BMWSerie3 from "./pages/vehicles/BMWSerie3";
import AudiA4 from "./pages/vehicles/AudiA4";
import MercedesClasseC from "./pages/vehicles/MercedesClasseC";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/search" element={<Search />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/vehicle/:id" element={<VehicleDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/account" element={<Account />} />
              
              {/* Routes pour les véhicules spécifiques */}
              <Route path="/vehicles/tesla-model-3" element={<TeslaModel3 />} />
              <Route path="/vehicles/peugeot-3008" element={<Peugeot3008 />} />
              <Route path="/vehicles/volkswagen-id4" element={<VolkswagenID4 />} />
              <Route path="/vehicles/toyota-rav4" element={<ToyotaRAV4 />} />
              <Route path="/vehicles/renault-megane-etech" element={<RenaultMeganeETech />} />
              <Route path="/vehicles/citroen-c5x" element={<CitroenC5X />} />
              <Route path="/vehicles/bmw-serie3" element={<BMWSerie3 />} />
              <Route path="/vehicles/audi-a4" element={<AudiA4 />} />
              <Route path="/vehicles/mercedes-classe-c" element={<MercedesClasseC />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;