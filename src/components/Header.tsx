import { Link, useNavigate } from "react-router-dom";
import { Search, User, Heart, Menu, X, ArrowLeft } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="bg-black fixed w-full z-50">
      <div className="max-w-[980px] mx-auto">
        <div className="flex items-center justify-between h-12 px-4 text-sm">
          <div className="flex items-center gap-2">
            <button 
              onClick={handleBack}
              className="text-white/90 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Retour"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <Link to="/" className="flex items-center">
              <h1 className="text-white font-medium">
                CarConnect
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
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

          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-12 bg-black md:hidden">
            <nav className="flex flex-col items-center pt-8 space-y-8">
              <Link 
                to="/search" 
                className="text-white/90 hover:text-white transition-colors text-lg"
                onClick={toggleMenu}
              >
                Nos véhicules
              </Link>
              <Link 
                to="/promotions" 
                className="text-white/90 hover:text-white transition-colors text-lg"
                onClick={toggleMenu}
              >
                Promotions
              </Link>
              <Link 
                to="/contact" 
                className="text-white/90 hover:text-white transition-colors text-lg"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="flex space-x-8 pt-4">
                <Link to="/search" className="text-white/90 hover:text-white" onClick={toggleMenu}>
                  <Search className="w-6 h-6" />
                </Link>
                <Link to="/favorites" className="text-white/90 hover:text-white" onClick={toggleMenu}>
                  <Heart className="w-6 h-6" />
                </Link>
                <Link to="/account" className="text-white/90 hover:text-white" onClick={toggleMenu}>
                  <User className="w-6 h-6" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;