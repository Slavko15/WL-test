import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Map, List } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import BusinessCard from '../components/BusinessCard';
import MapView from '../components/MapView';
import { businesses } from '../data/mockData';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(true);
  const [hoveredBusiness, setHoveredBusiness] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    activity: [],
    amenities: [],
  });
  
  const query = searchParams.get('q') || '';
  const location = searchParams.get('location') || '';
  const time = searchParams.get('time') || '';
  
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
  
  const handleBusinessClick = (business) => {
    navigate(`/business/${business.id}`);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Filter Bar */}
      <FilterBar
        activeFilters={activeFilters}
        onFilterChange={setActiveFilters}
        onClearFilters={() => setActiveFilters({ activity: [], amenities: [] })}
      />
      
      {/* Search Info */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {query ? `"${query}"` : 'All Services'} in {location || 'your area'}
              </h1>
              <p className="text-gray-600 mt-1">
                {filteredBusinesses.length} result{filteredBusinesses.length !== 1 ? 's' : ''} found
                {time && time !== 'Anytime' && ` • ${time}`}
              </p>
            </div>
            
            {/* Map Toggle */}
            <button
              onClick={() => setShowMap(!showMap)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {showMap ? (
                <>
                  <List className="w-4 h-4" />
                  <span className="hidden sm:inline">Hide Map</span>
                </>
              ) : (
                <>
                  <Map className="w-4 h-4" />
                  <span className="hidden sm:inline">Show Map</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Results Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className={`flex gap-6 ${showMap ? 'lg:grid lg:grid-cols-2' : ''}`}>
          {/* Results List */}
          <div className={`space-y-4 ${showMap ? 'lg:overflow-y-auto lg:max-h-[calc(100vh-300px)]' : 'w-full'}`}>
            {filteredBusinesses.length > 0 ? (
              filteredBusinesses.map((business) => (
                <BusinessCard
                  key={business.id}
                  business={business}
                  onHover={setHoveredBusiness}
                  onLeave={() => setHoveredBusiness(null)}
                />
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
                  onClick={() => setActiveFilters({ activity: [], amenities: [] })}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
          
          {/* Map View */}
          {showMap && (
            <div className="hidden lg:block sticky top-24 h-[calc(100vh-300px)]">
              <MapView
                businesses={filteredBusinesses}
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
