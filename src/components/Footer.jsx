import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-600 hover:text-primary-600">About Us</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-primary-600">Careers</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-primary-600">Press</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-primary-600">Blog</Link></li>
            </ul>
          </div>
          
          {/* For Businesses */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">For Businesses</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-600 hover:text-primary-600">List Your Business</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-primary-600">Business Solutions</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-primary-600">Marketing</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-primary-600">Resources</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-600 hover:text-primary-600">Help Center</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-primary-600">Contact Us</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-primary-600">Safety</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-primary-600">Terms of Service</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © 2024 WellnessLiving Explorer. All rights reserved. Over 150,000 fitness, health, and beauty services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
