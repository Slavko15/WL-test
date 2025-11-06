import React, { useState } from 'react';
import { X, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { activityTypes, amenities } from '../data/mockData';

const FilterBar = ({ activeFilters, onFilterChange, onClearFilters }) => {
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [expandedFilter, setExpandedFilter] = useState(null);
  
  const toggleFilter = (category, value) => {
    const currentFilters = activeFilters[category] || [];
    const newFilters = currentFilters.includes(value)
      ? currentFilters.filter(f => f !== value)
      : [...currentFilters, value];
    
    onFilterChange({
      ...activeFilters,
      [category]: newFilters
    });
  };
  
  const removeFilter = (category, value) => {
    const newFilters = {
      ...activeFilters,
      [category]: (activeFilters[category] || []).filter(f => f !== value)
    };
    onFilterChange(newFilters);
  };
  
  const hasActiveFilters = Object.values(activeFilters).some(arr => arr.length > 0);
  
  const distanceOptions = ['5 kilometers', '10 kilometers', '25 kilometers', '50 kilometers'];
  const genderOptions = ['Any', 'Male', 'Female', 'Non-binary'];
  const priceRanges = ['$', '$$', '$$$', '$$$$'];
  
  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Quick Filters */}
        <div className="flex items-center gap-3 mb-3 overflow-x-auto pb-2">
          {/* Activity Type Dropdown */}
          <div className="relative">
            <button
              onClick={() => setExpandedFilter(expandedFilter === 'activity' ? null : 'activity')}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg font-medium text-sm whitespace-nowrap transition-colors"
            >
              Activity type
              {(activeFilters.activity?.length || 0) > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-primary-600 text-white rounded-full text-xs">
                  {activeFilters.activity.length}
                </span>
              )}
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilter === 'activity' ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedFilter === 'activity' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
                <div className="space-y-2">
                  {activityTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="checkbox"
                        checked={(activeFilters.activity || []).includes(type)}
                        onChange={() => toggleFilter('activity', type)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Amenities Dropdown */}
          <div className="relative">
            <button
              onClick={() => setExpandedFilter(expandedFilter === 'amenities' ? null : 'amenities')}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg font-medium text-sm whitespace-nowrap transition-colors"
            >
              Amenities
              {(activeFilters.amenities?.length || 0) > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-primary-600 text-white rounded-full text-xs">
                  {activeFilters.amenities.length}
                </span>
              )}
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilter === 'amenities' ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedFilter === 'amenities' && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 max-h-96 overflow-y-auto">
                <div className="space-y-2">
                  {amenities.map((amenity) => (
                    <label key={amenity} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="checkbox"
                        checked={(activeFilters.amenities || []).includes(amenity)}
                        onChange={() => toggleFilter('amenities', amenity)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Distance Dropdown */}
          <div className="relative">
            <button
              onClick={() => setExpandedFilter(expandedFilter === 'distance' ? null : 'distance')}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg font-medium text-sm whitespace-nowrap transition-colors"
            >
              Distance
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilter === 'distance' ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedFilter === 'distance' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50">
                <div className="space-y-1">
                  {distanceOptions.map((distance) => (
                    <button
                      key={distance}
                      onClick={() => {
                        onFilterChange({ ...activeFilters, distance: [distance] });
                        setExpandedFilter(null);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded"
                    >
                      {distance}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Provider Gender Dropdown */}
          <div className="relative">
            <button
              onClick={() => setExpandedFilter(expandedFilter === 'gender' ? null : 'gender')}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg font-medium text-sm whitespace-nowrap transition-colors"
            >
              Provider gender
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilter === 'gender' ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedFilter === 'gender' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50">
                <div className="space-y-1">
                  {genderOptions.map((gender) => (
                    <button
                      key={gender}
                      onClick={() => {
                        onFilterChange({ ...activeFilters, gender: [gender] });
                        setExpandedFilter(null);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded"
                    >
                      {gender}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Price Dropdown */}
          <div className="relative">
            <button
              onClick={() => setExpandedFilter(expandedFilter === 'price' ? null : 'price')}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg font-medium text-sm whitespace-nowrap transition-colors"
            >
              Price
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilter === 'price' ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedFilter === 'price' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50">
                <div className="space-y-1">
                  {priceRanges.map((priceRange) => (
                    <button
                      key={priceRange}
                      onClick={() => {
                        onFilterChange({ ...activeFilters, price: [priceRange] });
                        setExpandedFilter(null);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded"
                    >
                      {priceRange}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* All Filters Button */}
          <button
            onClick={() => setShowAllFilters(!showAllFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg font-medium text-sm whitespace-nowrap transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            All filters
          </button>
          
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium text-sm whitespace-nowrap underline"
            >
              Clear all
            </button>
          )}
        </div>
        
        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([category, values]) =>
              values.map((value) => (
                <span key={`${category}-${value}`} className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                  {value}
                  <button
                    onClick={() => removeFilter(category, value)}
                    className="hover:bg-gray-200 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))
            )}
          </div>
        )}
      </div>
      
      {/* All Filters Modal */}
      {showAllFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">All Filters</h3>
              <button
                onClick={() => setShowAllFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {/* Activity Type */}
                <div>
                  <h4 className="font-semibold mb-3">Activity Type</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {activityTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                          type="checkbox"
                          checked={(activeFilters.activity || []).includes(type)}
                          onChange={() => toggleFilter('activity', type)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Amenities */}
                <div>
                  <h4 className="font-semibold mb-3">Amenities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {amenities.map((amenity) => (
                      <label key={amenity} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                          type="checkbox"
                          checked={(activeFilters.amenities || []).includes(amenity)}
                          onChange={() => toggleFilter('amenities', amenity)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between">
              <button
                onClick={onClearFilters}
                className="btn-secondary"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowAllFilters(false)}
                className="btn-primary"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
