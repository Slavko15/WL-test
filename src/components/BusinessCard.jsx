import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, CheckCircle, Gift } from 'lucide-react';

const BusinessCard = ({ business, onHover, onLeave }) => {
  const navigate = useNavigate();
  const [showAllActivities, setShowAllActivities] = useState(false);
  
  const activitiesToShow = showAllActivities 
    ? business.activities 
    : business.activities?.slice(0, 3) || [];
  
  return (
    <div
      className="card cursor-pointer hover:shadow-lg transition-shadow"
      onMouseEnter={() => onHover?.(business)}
      onMouseLeave={() => onLeave?.()}
      onClick={() => navigate(`/business/${business.id}`)}
    >
      <div className="flex flex-col sm:flex-row gap-0">
        {/* Image */}
        <div className="relative sm:w-72 h-48 sm:h-64 flex-shrink-0">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
          />
          {business.topChoice && (
            <div className="absolute top-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
              <span className="text-white">⭐</span>
              Top Choice
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-grow p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{business.name}</h3>
                {business.verified && (
                  <CheckCircle className="w-5 h-5 text-green-600 fill-green-600" aria-label="Verified" />
                )}
              </div>
              
              {/* Promoted Badge */}
              {business.promoted && (
                <div className="inline-flex items-center text-xs text-gray-600 mb-2">
                  <span>Promoted</span>
                  <span className="ml-1">ⓘ</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Address */}
          <div className="flex items-start gap-1.5 text-sm text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{business.address}</span>
          </div>
          
          {/* Rating and Distance */}
          <div className="flex items-center gap-4 text-sm mb-3">
            <div className="flex items-center gap-1">
              <span className="font-semibold">{business.distance}</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1">
              <span className="font-semibold">{business.rating}</span>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-600">({business.reviewCount})</span>
            </div>
          </div>
          
          {/* Amenities */}
          {business.amenities && business.amenities.length > 0 && (
            <div className="text-sm text-gray-600 mb-3">
              {business.amenities.slice(0, 3).join(', ')}
              {business.amenities.length > 3 && ` +${business.amenities.length - 3}`}
            </div>
          )}
          
          {/* Special Offers */}
          {business.specialOffers && business.specialOffers.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {business.specialOffers.map((offer, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium"
                >
                  <Gift className="w-4 h-4" />
                  {offer.label}
                </div>
              ))}
            </div>
          )}
          
          {/* Activities */}
          <div className="space-y-3">
            {activitiesToShow.map((activity, index) => (
              <div key={index} className="border-t pt-3 first:border-t-0 first:pt-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{activity.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <span className="font-bold text-gray-900">${activity.price}</span>
                      <span>•</span>
                      <span>{activity.duration}</span>
                      <span>•</span>
                      <span>{activity.instructor}</span>
                    </div>
                  </div>
                </div>
                
                {/* Time Slots */}
                {activity.availableTimes && activity.availableTimes.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {activity.availableTimes.slice(0, 4).map((time, timeIndex) => (
                      <button
                        key={timeIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle booking
                        }}
                        className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-colors"
                      >
                        {time}
                      </button>
                    ))}
                    {activity.availableTimes.length > 4 && (
                      <button
                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        More
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* See More Button */}
          {business.activities && business.activities.length > 3 && !showAllActivities && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAllActivities(true);
              }}
              className="mt-4 text-primary-600 font-medium text-sm hover:text-primary-700"
            >
              See more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
