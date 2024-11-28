import { Link } from "react-router-dom";
import { Search, User, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-heading font-bold text-primary">
              CarConnect
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="text-gray-600 hover:text-primary transition-colors">
              Nos véhicules
            </Link>
            <Link to="/promotions" className="text-gray-600 hover:text-primary transition-colors">
              Promotions
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/search" className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-600" />
            </Link>
            <Link to="/favorites" className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-5 h-5 text-gray-600" />
            </Link>
            <Link to="/account" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;