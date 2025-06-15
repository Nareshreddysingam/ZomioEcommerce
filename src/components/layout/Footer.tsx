import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <ShoppingBag className="w-8 h-8 text-primary-500" />
              <span className="ml-2 text-2xl font-bold text-white">Zomio</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Hyperlocal delivery of fresh, local food and beverage products in Chittoor, Tirupati, and nearby villages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/?category=beverages" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Beverages
                </Link>
              </li>
              <li>
                <Link to="/?category=snacks" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Snacks
                </Link>
              </li>
              <li>
                <Link to="/?category=meals" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Meals
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Your Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Delivery Areas */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Delivery Areas</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Chittoor</li>
              <li className="text-gray-400">Tirupati</li>
              <li className="text-gray-400">Chandragiri</li>
              <li className="text-gray-400">Renigunta</li>
              <li className="text-gray-400 mt-2 italic">
                More areas coming soon!
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Main Street, Chittoor, Andhra Pradesh 517001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-2" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-primary-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-2" />
                <a href="mailto:info@zomio.in" className="text-gray-400 hover:text-primary-500 transition-colors">
                  info@zomio.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="mt-8 flex justify-center md:justify-start">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full flex items-center transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
              />
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Zomio. All rights reserved.</p>
          <p className="mt-1">
            "Taste First, Trust Next" - Fast, local delivery in 5-10 minutes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;