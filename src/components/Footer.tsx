import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-[980px] mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-[#1d1d1f] text-lg font-semibold mb-4">CarConnect</h3>
            <p className="text-[#86868b] text-sm leading-relaxed">
              Votre partenaire de confiance pour l'achat de véhicules d'occasion.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[#1d1d1f] text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#424245] hover:text-[#1d1d1f] transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-[#424245] hover:text-[#1d1d1f] transition-colors text-sm">
                  Nos véhicules
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="text-[#424245] hover:text-[#1d1d1f] transition-colors text-sm">
                  Promotions
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[#1d1d1f] text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-[#424245] text-sm">123 Avenue des Champs-Élysées</li>
              <li className="text-[#424245] text-sm">75008 Paris</li>
              <li className="text-[#424245] text-sm">01 23 45 67 89</li>
              <li className="text-[#424245] text-sm">contact@carconnect.fr</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[#1d1d1f] text-sm font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-[#424245] hover:text-[#1d1d1f] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-[#424245] hover:text-[#1d1d1f] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-[#424245] hover:text-[#1d1d1f] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Legal Section */}
        <div className="mt-12 pt-8 border-t border-[#d2d2d7]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#86868b] text-sm">
              &copy; 2024 CarConnect. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#424245] hover:text-[#1d1d1f] transition-colors text-sm">
                Mentions légales
              </a>
              <a href="#" className="text-[#424245] hover:text-[#1d1d1f] transition-colors text-sm">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;