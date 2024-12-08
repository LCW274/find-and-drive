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
import Footer from "./components/Footer";

// Import des nouvelles pages de véhicules
import TeslaModel3 from "./pages/vehicles/TeslaModel3";
import Peugeot3008 from "./pages/vehicles/Peugeot3008";
import VolkswagenID4 from "./pages/vehicles/VolkswagenID4";
import ToyotaRAV4 from "./pages/vehicles/ToyotaRAV4";
import RenaultMeganeETech from "./pages/vehicles/RenaultMeganeETech";
import CitroenC5X from "./pages/vehicles/CitroenC5X";

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
              <Route path="/vehicle/:id" element={<VehicleDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/account" element={<Account />} />
              
              {/* Nouvelles routes pour les véhicules spécifiques */}
              <Route path="/vehicles/tesla-model-3" element={<TeslaModel3 />} />
              <Route path="/vehicles/peugeot-3008" element={<Peugeot3008 />} />
              <Route path="/vehicles/volkswagen-id4" element={<VolkswagenID4 />} />
              <Route path="/vehicles/toyota-rav4" element={<ToyotaRAV4 />} />
              <Route path="/vehicles/renault-megane-etech" element={<RenaultMeganeETech />} />
              <Route path="/vehicles/citroen-c5x" element={<CitroenC5X />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;