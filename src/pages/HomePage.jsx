import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Clock, ChevronRight } from 'lucide-react';
import { categories } from '../data/mockData';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Toronto, ON');
  const [timeOfDay, setTimeOfDay] = useState('Anytime');
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}&location=${location}&time=${timeOfDay}`);
  };
  
  const handleCategoryClick = (category) => {
    navigate(`/search?q=${category.name}&location=${location}`);
  };
  
  return (
    <div className="bg-wellness-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-wellness-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover & Book Your<br />
              <span className="text-primary-600">Favorite Wellness Services</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-600 mb-10">
              With over 150,000 fitness, health, and beauty services to choose from
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-3 sm:p-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
                {/* Search Input */}
                <div className="md:col-span-5 relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for a wellness experience"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-base border-0 focus:ring-0 rounded-lg bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>
                
                {/* Location Input */}
                <div className="md:col-span-4 relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-base border-0 focus:ring-0 rounded-lg bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>
                
                {/* Time Dropdown */}
                <div className="md:col-span-3 relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <select
                    value={timeOfDay}
                    onChange={(e) => setTimeOfDay(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-base border-0 focus:ring-0 rounded-lg bg-gray-50 focus:bg-white transition-colors appearance-none cursor-pointer"
                  >
                    <option>Anytime</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>
              </div>
              
              {/* Search Button */}
              <button
                type="submit"
                className="w-full mt-4 btn-primary text-lg py-4 rounded-xl"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Top Activities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explore Popular Activities
          </h2>
          <p className="text-lg text-gray-600">
            Discover what's trending in wellness near you
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-5xl mb-3">{category.icon}</span>
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <ChevronRight className="w-6 h-6 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      
      {/* Trust Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">150,000+</div>
              <div className="text-gray-600">Wellness Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
              <div className="text-gray-600">Verified Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">2M+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Book your wellness experience in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Search</h3>
            <p className="text-gray-600">Find the perfect wellness service in your area</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Compare</h3>
            <p className="text-gray-600">Review ratings, prices, and available times</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Book</h3>
            <p className="text-gray-600">Secure your spot instantly online</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
