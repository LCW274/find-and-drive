import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre message a été envoyé avec succès !");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-semibold text-center mb-16 tracking-tight">
            Contactez-nous
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold">Notre adresse</h3>
                    <p className="text-gray-600 mt-1">123 Avenue des Champs-Élysées, 75008 Paris</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold">Téléphone</h3>
                    <p className="text-gray-600 mt-1">01 23 45 67 89</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-gray-600 mt-1">contact@carconnect.fr</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
              <div>
                <Input 
                  placeholder="Votre nom" 
                  required 
                  className="h-12 rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Votre email" 
                  required 
                  className="h-12 rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>
              <div>
                <Input 
                  placeholder="Sujet" 
                  required 
                  className="h-12 rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Votre message" 
                  className="min-h-[150px] rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600" 
                  required 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;