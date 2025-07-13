import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Menu, 
  X, 
  User, 
  Heart, 
  ShoppingCart, 
  Bell, 
  Settings, 
  Crown,
  Sparkles,
  Shield,
  Zap
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Home', 
      href: '/', 
      icon: <Crown className="h-4 w-4" />,
      gradient: 'from-accent-500 to-primary-500'
    },
    { 
      name: 'Categories', 
      href: '/categories', 
      icon: <Sparkles className="h-4 w-4" />,
      gradient: 'from-primary-500 to-secondary-500'
    },
    { 
      name: 'Reviews', 
      href: '/reviews', 
      icon: <Shield className="h-4 w-4" />,
      gradient: 'from-secondary-500 to-success-500'
    },
    { 
      name: 'Deals', 
      href: '/deals', 
      icon: <Zap className="h-4 w-4" />,
      gradient: 'from-gold-500 to-gold-600'
    }
  ];

  return (
    <>
      {/* Premium Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-luxury-900/95 backdrop-blur-xl shadow-luxury border-b border-platinum-200/50 dark:border-luxury-700/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Premium Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="p-2 rounded-xl bg-gradient-to-r from-accent-600 to-primary-600 shadow-luxury-glow group-hover:shadow-premium transition-all duration-300">
                  <Crown className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-luxury font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
                  Wirecutter
                </h1>
                <p className="text-xs text-platinum-600 dark:text-platinum-300 font-medium -mt-1">
                  Premium Discovery
                </p>
              </div>
            </Link>

            {/* Premium Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group relative flex items-center space-x-2 py-2 px-4 rounded-xl transition-all duration-300 hover:bg-white/10 dark:hover:bg-luxury-800/50"
                >
                  <div className={`p-1 rounded-lg bg-gradient-to-r ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                    {item.icon}
                  </div>
                  <span className="font-medium text-luxury-700 dark:text-platinum-200 group-hover:text-luxury-900 dark:group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </span>
                  <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-300`}></div>
                </Link>
              ))}
            </nav>

            {/* Premium Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className={`relative w-full transition-all duration-300 ${
                isSearchFocused ? 'transform scale-105' : ''
              }`}>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className={`h-5 w-5 transition-colors duration-300 ${
                    isSearchFocused ? 'text-accent-500' : 'text-platinum-400'
                  }`} />
                </div>
                <input
                  type="text"
                  placeholder="Search premium products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 dark:bg-luxury-800/50 border border-platinum-200/50 dark:border-luxury-700/50 rounded-2xl backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 text-luxury-900 dark:text-platinum-100 placeholder-platinum-500 dark:placeholder-platinum-400 transition-all duration-300"
                />
                {searchQuery && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-luxury-800/95 backdrop-blur-xl rounded-2xl shadow-premium border border-platinum-200/50 dark:border-luxury-700/50 max-h-96 overflow-y-auto">
                    <div className="p-4">
                      <p className="text-sm text-platinum-600 dark:text-platinum-400 mb-2">Search suggestions</p>
                      {/* Add search suggestions here */}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Premium Action Buttons */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              
              {/* Wishlist */}
              <button className="relative p-2 lg:p-3 rounded-xl bg-white/10 dark:bg-luxury-800/50 hover:bg-white/20 dark:hover:bg-luxury-700/50 backdrop-blur-xl border border-platinum-200/30 dark:border-luxury-700/30 transition-all duration-300 group">
                <Heart className="h-5 w-5 text-luxury-700 dark:text-platinum-300 group-hover:text-accent-600 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">3</span>
                </div>
              </button>

              {/* Cart */}
              <button className="relative p-2 lg:p-3 rounded-xl bg-white/10 dark:bg-luxury-800/50 hover:bg-white/20 dark:hover:bg-luxury-700/50 backdrop-blur-xl border border-platinum-200/30 dark:border-luxury-700/30 transition-all duration-300 group">
                <ShoppingCart className="h-5 w-5 text-luxury-700 dark:text-platinum-300 group-hover:text-accent-600 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">5</span>
                </div>
              </button>

              {/* Notifications */}
              <button className="relative p-2 lg:p-3 rounded-xl bg-white/10 dark:bg-luxury-800/50 hover:bg-white/20 dark:hover:bg-luxury-700/50 backdrop-blur-xl border border-platinum-200/30 dark:border-luxury-700/30 transition-all duration-300 group">
                <Bell className="h-5 w-5 text-luxury-700 dark:text-platinum-300 group-hover:text-accent-600 transition-colors duration-300" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-error-500 to-error-600 rounded-full animate-pulse"></div>
              </button>

              {/* Profile Menu */}
              <div className="relative">
                <button className="flex items-center space-x-2 p-2 lg:p-3 rounded-xl bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 transition-all duration-300 shadow-luxury-glow hover:shadow-premium transform hover:-translate-y-0.5">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 flex items-center justify-center">
                    <User className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                  </div>
                  <span className="hidden lg:block text-white font-medium">Premium</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-white/10 dark:bg-luxury-800/50 hover:bg-white/20 dark:hover:bg-luxury-700/50 backdrop-blur-xl border border-platinum-200/30 dark:border-luxury-700/30 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-luxury-700 dark:text-platinum-300" />
                ) : (
                  <Menu className="h-6 w-6 text-luxury-700 dark:text-platinum-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Premium Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-luxury-900/80 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 bg-white/95 dark:bg-luxury-900/95 backdrop-blur-xl border-l border-platinum-200/50 dark:border-luxury-700/50 shadow-premium">
            <div className="p-6 space-y-6">
              
              {/* Mobile Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-platinum-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 dark:bg-luxury-800/50 border border-platinum-200/50 dark:border-luxury-700/50 rounded-2xl backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-luxury-900 dark:text-platinum-100 placeholder-platinum-500"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 p-4 rounded-2xl hover:bg-white/10 dark:hover:bg-luxury-800/50 transition-all duration-300 group"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient}`}>
                      {item.icon}
                    </div>
                    <span className="font-medium text-luxury-700 dark:text-platinum-200 group-hover:text-luxury-900 dark:group-hover:text-white">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Premium Features */}
              <div className="border-t border-platinum-200/50 dark:border-luxury-700/50 pt-6">
                <h3 className="text-lg font-bold text-luxury-800 dark:text-platinum-100 mb-4">Premium Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20">
                    <Crown className="h-5 w-5 text-accent-600" />
                    <span className="text-sm font-medium text-luxury-700 dark:text-platinum-200">AI Recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-gold-50 to-gold-100 dark:from-gold-900/20 dark:to-gold-800/20">
                    <Zap className="h-5 w-5 text-gold-600" />
                    <span className="text-sm font-medium text-luxury-700 dark:text-platinum-200">Instant Deals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;