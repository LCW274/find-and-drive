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
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;