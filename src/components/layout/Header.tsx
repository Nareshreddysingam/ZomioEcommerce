import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, MapPin, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { areas } from '../../data/mockProducts';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [selectedArea, setSelectedArea] = useState(localStorage.getItem('selectedArea') || 'Chittoor');
  const { getTotalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setShowSearch(!showSearch);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
    }
  };

  const handleAreaChange = (area: string) => {
    setSelectedArea(area);
    localStorage.setItem('selectedArea', area);
    // Reload products with new area filter
    if (location.pathname === '/') {
      navigate('/?area=' + area);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <ShoppingBag className="w-8 h-8 text-primary-600" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 text-transparent bg-clip-text">
              Zomio
            </span>
          </Link>

          {/* Area Selector */}
          <div className="hidden md:flex items-center mx-4">
            <MapPin className="h-4 w-4 text-primary-600 mr-1" />
            <select
              value={selectedArea}
              onChange={(e) => handleAreaChange(e.target.value)}
              className="text-sm border-none focus:ring-0 font-medium"
            >
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 font-medium">
                Categories
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/?category=beverages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">
                    Beverages
                  </Link>
                  <Link to="/?category=snacks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">
                    Snacks
                  </Link>
                  <Link to="/?category=meals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">
                    Meals
                  </Link>
                  <Link to="/?category=desserts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">
                    Desserts
                  </Link>
                </div>
              </div>
            </div>
            <button onClick={toggleSearch} className="text-gray-700 hover:text-primary-600">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-700 hover:text-primary-600" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium">
                  <User className="h-5 w-5 mr-1" />
                  {user?.username}
                </button>
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link to="/admin/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">
                      Dashboard
                    </Link>
                    <button 
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/admin" className="text-gray-700 hover:text-primary-600 font-medium">
                Admin
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-700" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-16">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center mb-6">
              <MapPin className="h-5 w-5 text-primary-600 mr-2" />
              <select
                value={selectedArea}
                onChange={(e) => handleAreaChange(e.target.value)}
                className="text-sm border-none focus:ring-0 font-medium"
              >
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-3 text-gray-400 hover:text-primary-600"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </div>
            <nav className="flex flex-col space-y-6">
              <Link
                to="/"
                className="text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Categories</h3>
                <div className="ml-4 space-y-3">
                  <Link
                    to="/?category=beverages"
                    className="block text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Beverages
                  </Link>
                  <Link
                    to="/?category=snacks"
                    className="block text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Snacks
                  </Link>
                  <Link
                    to="/?category=meals"
                    className="block text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Meals
                  </Link>
                  <Link
                    to="/?category=desserts"
                    className="block text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Desserts
                  </Link>
                </div>
              </div>
              {isAuthenticated ? (
                <>
                  <Link
                    to="/admin/dashboard"
                    className="text-xl font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="text-xl font-medium text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/admin"
                  className="text-xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Admin Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}

      {/* Search Overlay for Desktop */}
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium">Search Products</h3>
              <button onClick={toggleSearch} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-3 text-gray-400 hover:text-primary-600"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;