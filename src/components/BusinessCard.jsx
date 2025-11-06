import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, CheckCircle, Clock } from 'lucide-react';

const BusinessCard = ({ business, onHover, onLeave }) => {
  const navigate = useNavigate();
  
  return (
    <div
      className="card cursor-pointer"
      onMouseEnter={() => onHover?.(business)}
      onMouseLeave={() => onLeave?.()}
      onClick={() => navigate(`/business/${business.id}`)}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Image */}
        <div className="sm:w-64 h-48 sm:h-auto flex-shrink-0">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="flex-grow p-4 sm:p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold text-gray-900">{business.name}</h3>
                {business.verified && (
                  <CheckCircle className="w-5 h-5 text-primary-600" aria-label="Verified" />
                )}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{business.rating}</span>
                  <span>({business.reviewCount})</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{business.distance}</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">{business.address}</p>
          
          <div className="flex items-center gap-2 mb-4 text-sm">
            <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full font-medium">
              {business.type}
            </span>
            <span className="text-gray-600">•</span>
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">{business.duration}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-600">{business.instructor}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">${business.price}</span>
              <span className="text-gray-600 text-sm ml-1">per session</span>
            </div>
            
            {business.availableTimes && business.availableTimes.length > 0 && (
              <div className="flex gap-2">
                {business.availableTimes.slice(0, 3).map((time, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle booking
                    }}
                    className="px-3 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                  >
                    {time}
                  </button>
                ))}
                {business.availableTimes.length > 3 && (
                  <button
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    More
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
