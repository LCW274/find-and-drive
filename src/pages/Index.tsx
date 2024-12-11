import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Header />
      
      {/* Promotion Banner */}
      <div className="bg-[#1d1d1f] text-center py-2 text-white text-sm px-4">
        <p>
          À partir du 29/11, recevez jusqu'à 1500€ de remise sur nos véhicules premium.{" "}
          <a href="/promotions" className="text-blue-500 hover:underline">
            En savoir plus <ArrowRight className="inline w-3 h-3" />
          </a>
        </p>
      </div>
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-semibold mb-2">
          Trouvez votre prochaine voiture
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
          Une sélection premium de véhicules d'exception.
        </h2>
        <div className="flex flex-col items-center gap-6">
          <SearchBar />
          <Link to="/vehicles">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Découvrir nos véhicules <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-white">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Sélection rigoureuse</h3>
              <p className="text-gray-400">Tous nos véhicules sont inspectés et certifiés</p>
            </div>
            <div className="text-center">
              <div className="bg-black/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Prix transparents</h3>
              <p className="text-gray-400">Les meilleurs prix du marché, sans surprise</p>
            </div>
            <div className="text-center">
              <div className="bg-black/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Service premium</h3>
              <p className="text-gray-400">Un accompagnement personnalisé de A à Z</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;