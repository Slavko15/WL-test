import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, User, Menu } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">WellnessLiving</span>
            <span className="ml-2 text-sm font-medium text-gray-500">Explorer</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Discover
            </Link>
            <Link 
              to="/search" 
              className={`text-sm font-medium transition-colors ${
                isActive('/search') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Search
            </Link>
            <Link 
              to="/offers" 
              className={`text-sm font-medium transition-colors ${
                isActive('/offers') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Offers
            </Link>
          </nav>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Favorites"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
