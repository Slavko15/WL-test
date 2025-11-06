import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, ChevronDown, Search, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Toronto, Ontario, Canada');
  const [timeOfDay, setTimeOfDay] = useState('October 4, Afternoon');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(location)}&time=${encodeURIComponent(timeOfDay)}`);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-gray-900">WellnessLiving</span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Explorer</span>
            </div>
          </Link>
          
          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <button 
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="List your business"
            >
              LIST YOUR BUSINESS
            </button>
            <button 
              className="flex items-center gap-1 p-2 text-gray-700 hover:text-primary-600 transition-colors rounded-full border border-gray-300"
              aria-label="Account menu"
            >
              <User className="w-5 h-5" />
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="pb-4">
          <form onSubmit={handleSearch} className="flex items-center gap-3">
            {/* Search Input */}
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Massage therapy"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>
            
            {/* Location Input */}
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <MapPin className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>
            
            {/* Time Input */}
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Clock className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Time"
                value={timeOfDay}
                onChange={(e) => setTimeOfDay(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>
            
            {/* Search Button */}
            <button
              type="submit"
              className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              SEARCH
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
