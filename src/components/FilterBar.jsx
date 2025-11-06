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
  
  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Quick Filters */}
        <div className="flex items-center gap-3 mb-3 overflow-x-auto pb-2">
          <button
            onClick={() => setShowAllFilters(!showAllFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-sm whitespace-nowrap transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            All Filters
          </button>
          
          <div className="relative">
            <button
              onClick={() => setExpandedFilter(expandedFilter === 'activity' ? null : 'activity')}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg font-medium text-sm whitespace-nowrap transition-colors"
            >
              Activity Type
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
          
          <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg font-medium text-sm whitespace-nowrap transition-colors">
            Distance
          </button>
          
          <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg font-medium text-sm whitespace-nowrap transition-colors">
            Price Range
          </button>
          
          <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg font-medium text-sm whitespace-nowrap transition-colors">
            Amenities
          </button>
          
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="px-4 py-2 text-primary-600 hover:text-primary-700 font-medium text-sm whitespace-nowrap"
            >
              Clear All
            </button>
          )}
        </div>
        
        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([category, values]) =>
              values.map((value) => (
                <span key={`${category}-${value}`} className="chip">
                  {value}
                  <button
                    onClick={() => removeFilter(category, value)}
                    className="hover:bg-primary-200 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
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
