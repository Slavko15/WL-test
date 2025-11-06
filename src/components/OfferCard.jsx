import React from 'react';
import { Star, MapPin, CheckCircle, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OfferCard = ({ offer }) => {
  const navigate = useNavigate();
  const discount = Math.round(((offer.originalPrice - offer.price) / offer.originalPrice) * 100);
  
  return (
    <div className="card hover:shadow-lg transition-shadow">
      {offer.topChoice && (
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-2 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-yellow-900" />
          <span className="text-sm font-semibold text-yellow-900">Top Choice</span>
        </div>
      )}
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 pr-4">
              {offer.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span className="font-medium">{offer.businessName}</span>
              {offer.verified && (
                <CheckCircle className="w-4 h-4 text-primary-600" />
              )}
            </div>
          </div>
          
          {discount > 0 && (
            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">
              {discount}% OFF
            </div>
          )}
        </div>
        
        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Tag className="w-4 h-4 text-gray-400" />
            <span>{offer.sessions} session{typeof offer.sessions === 'number' && offer.sessions > 1 ? 's' : ''} • {offer.duration}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{offer.distance} away</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{offer.rating}</span>
            <span className="text-gray-600">({offer.reviewCount} reviews)</span>
          </div>
        </div>
        
        {/* Eligibility */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
            {offer.eligibility}
          </span>
        </div>
        
        {/* Description */}
        {offer.description && (
          <p className="text-sm text-gray-600 mb-4">{offer.description}</p>
        )}
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">${offer.price}</span>
              {offer.originalPrice > offer.price && (
                <span className="text-lg text-gray-400 line-through">${offer.originalPrice}</span>
              )}
            </div>
            {offer.expiresIn && (
              <p className="text-xs text-gray-500 mt-1">{offer.expiresIn}</p>
            )}
          </div>
          
          <button
            onClick={() => {
              // In production, this would open a purchase modal
              alert('Purchase flow would open here');
            }}
            className="btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
