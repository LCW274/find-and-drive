import { Link } from "react-router-dom";
import { Search, User, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-[980px] mx-auto">
        <div className="flex items-center justify-between h-12 px-4 text-sm">
          <Link to="/" className="flex items-center">
            <h1 className="text-white font-medium">
              CarConnect
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="text-white/90 hover:text-white transition-colors text-sm">
              Nos véhicules
            </Link>
            <Link to="/promotions" className="text-white/90 hover:text-white transition-colors text-sm">
              Promotions
            </Link>
            <Link to="/contact" className="text-white/90 hover:text-white transition-colors text-sm">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-white/90 hover:text-white">
              <Search className="w-4 h-4" />
            </Link>
            <Link to="/favorites" className="text-white/90 hover:text-white">
              <Heart className="w-4 h-4" />
            </Link>
            <Link to="/account" className="text-white/90 hover:text-white">
              <User className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;