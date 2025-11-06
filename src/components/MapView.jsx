import React, { useState } from 'react';
import { MapPin, Star } from 'lucide-react';

const MapView = ({ businesses, hoveredBusiness, onBusinessClick }) => {
  const [tooltip, setTooltip] = useState(null);
  
  // Mock map with pins - in production, use Google Maps or Mapbox
  return (
    <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
      {/* Mock Map Background */}
      <div className="absolute inset-0">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-79.3832,43.6532,12,0/600x800@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Map Pins */}
      <div className="absolute inset-0">
        {businesses.map((business, index) => {
          const isHovered = hoveredBusiness?.id === business.id;
          
          // Mock positioning based on index
          const top = 20 + (index * 15) % 60;
          const left = 15 + (index * 20) % 60;
          
          return (
            <div
              key={business.id}
              style={{ top: `${top}%`, left: `${left}%` }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
              onMouseEnter={() => setTooltip(business)}
              onMouseLeave={() => setTooltip(null)}
              onClick={() => onBusinessClick?.(business)}
            >
              <div
                className={`cursor-pointer transition-all duration-200 ${
                  isHovered ? 'scale-125 z-10' : 'scale-100'
                }`}
              >
                <div className="relative">
                  <MapPin
                    className={`w-10 h-10 ${
                      isHovered ? 'text-primary-600 fill-primary-600' : 'text-primary-500 fill-primary-500'
                    } drop-shadow-lg`}
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xs">
                    ${business.price}
                  </div>
                </div>
              </div>
              
              {/* Tooltip */}
              {tooltip?.id === business.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl p-3 min-w-[200px] z-20">
                  <div className="text-sm font-semibold mb-1">{business.name}</div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{business.rating}</span>
                    <span>•</span>
                    <span>${business.price}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
      </div>
      
      {/* Attribution */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-600 bg-white/80 px-2 py-1 rounded">
        Map data © OpenStreetMap
      </div>
    </div>
  );
};

export default MapView;
