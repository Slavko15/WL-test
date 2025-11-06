import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import BusinessCard from '../components/BusinessCard';
import MapView from '../components/MapView';
import { businesses } from '../data/mockData';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(true);
  const [hoveredBusiness, setHoveredBusiness] = useState(null);
  const [activeTab, setActiveTab] = useState('LOCATIONS');
  const [sortBy, setSortBy] = useState('Distance');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    activity: [],
    amenities: [],
    distance: [],
    gender: [],
    price: [],
  });
  
  const query = searchParams.get('q') || 'Massage therapy';
  const location = searchParams.get('location') || 'Toronto';
  const time = searchParams.get('time') || 'Tuesday, October 4';
  
  // Filter businesses based on search and filters
  const filteredBusinesses = businesses.filter(business => {
    // Search query filter
    if (query && !business.name.toLowerCase().includes(query.toLowerCase()) &&
        !business.type.toLowerCase().includes(query.toLowerCase())) {
      return false;
    }
    
    // Activity type filter
    if (activeFilters.activity.length > 0 && 
        !activeFilters.activity.includes(business.type)) {
      return false;
    }
    
    // Amenities filter
    if (activeFilters.amenities.length > 0 &&
        !activeFilters.amenities.some(a => business.amenities.includes(a))) {
      return false;
    }
    
    return true;
  });
  
  // Sort businesses
  const sortedBusinesses = [...filteredBusinesses].sort((a, b) => {
    switch (sortBy) {
      case 'Distance':
        return parseFloat(a.distance) - parseFloat(b.distance);
      case 'Rating':
        return b.rating - a.rating;
      case 'Price':
        return a.price - b.price;
      default:
        return 0;
    }
  });
  
  const handleBusinessClick = (business) => {
    navigate(`/business/${business.id}`);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            {['SERVICES', 'LOCATIONS', 'OFFERS'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-4 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Filter Bar */}
      <FilterBar
        activeFilters={activeFilters}
        onFilterChange={setActiveFilters}
        onClearFilters={() => setActiveFilters({ activity: [], amenities: [], distance: [], gender: [], price: [] })}
      />
      
      {/* Search Info & Controls */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {query} in {location} – {time}
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  Sort by: {sortBy}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showSortDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50">
                    {['Distance', 'Rating', 'Price'].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortBy(option);
                          setShowSortDropdown(false);
                        }}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Map Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Show map</span>
                <button
                  onClick={() => setShowMap(!showMap)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    showMap ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      showMap ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className={`flex gap-6 ${showMap ? '' : ''}`}>
          {/* Results List */}
          <div className={`space-y-4 ${showMap ? 'flex-1' : 'w-full'}`}>
            {sortedBusinesses.length > 0 ? (
              sortedBusinesses.map((business, index) => (
                <React.Fragment key={business.id}>
                  <BusinessCard
                    business={business}
                    onHover={setHoveredBusiness}
                    onLeave={() => setHoveredBusiness(null)}
                  />
                  {/* Show "See more" link after first card in wireframe */}
                  {index === 0 && sortedBusinesses.length > 1 && (
                    <button
                      onClick={() => {}}
                      className="text-primary-600 font-medium text-sm hover:text-primary-700 pl-6"
                    >
                      See more
                    </button>
                  )}
                </React.Fragment>
              ))
            ) : (
              <div className="card p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                <button
                  onClick={() => setActiveFilters({ activity: [], amenities: [], distance: [], gender: [], price: [] })}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
          
          {/* Map View */}
          {showMap && (
            <div className="hidden lg:block w-[600px] sticky top-32 h-[calc(100vh-200px)]">
              <MapView
                businesses={sortedBusinesses}
                hoveredBusiness={hoveredBusiness}
                onBusinessClick={handleBusinessClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
