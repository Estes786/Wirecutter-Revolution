import React, { useState } from 'react';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">WireCutter Pro</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-200 hover:text-white transition-colors">Reviews</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors">Categories</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors">Deals</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors">About</a>
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search reviews..."
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <User className="w-6 h-6 text-gray-200 hover:text-white cursor-pointer transition-colors" />
            <ShoppingCart className="w-6 h-6 text-gray-200 hover:text-white cursor-pointer transition-colors" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-md rounded-lg mt-2">
              <a href="#" className="block px-3 py-2 text-gray-200 hover:text-white">Reviews</a>
              <a href="#" className="block px-3 py-2 text-gray-200 hover:text-white">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-200 hover:text-white">Deals</a>
              <a href="#" className="block px-3 py-2 text-gray-200 hover:text-white">About</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;