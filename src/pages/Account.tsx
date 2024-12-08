import Header from "../components/Header";
import { User, Settings, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Account = () => {
  const handleLogout = () => {
    toast.success("Déconnexion réussie");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="flex items-center gap-3 mb-8">
          <User className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-semibold">Mon Compte</h1>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-gray-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-500">john.doe@example.com</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2"
                onClick={() => toast.info("Fonctionnalité à venir")}
              >
                <Settings className="w-4 h-4" />
                Paramètres du compte
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2"
                onClick={() => toast.info("Fonctionnalité à venir")}
              >
                <Heart className="w-4 h-4" />
                Gérer mes favoris
              </Button>
              
              <Button 
                variant="destructive"
                className="w-full"
                onClick={handleLogout}
              >
                Se déconnecter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;