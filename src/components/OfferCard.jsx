import React from 'react';
import { Star, MapPin, CheckCircle, Tag, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { businesses } from '../data/mockData';

const OfferCard = ({ offer, onHover, onLeave }) => {
  const navigate = useNavigate();
  const discount = Math.round(((offer.originalPrice - offer.price) / offer.originalPrice) * 100);
  
  // Get the business details for the offer
  const business = businesses.find(b => b.id === offer.businessId);
  const image = business?.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop';
  
  return (
    <div
      className="card cursor-pointer hover:shadow-lg transition-shadow"
      onMouseEnter={() => onHover?.(offer)}
      onMouseLeave={() => onLeave?.()}
      onClick={() => navigate(`/business/${offer.businessId}`)}
    >
      <div className="flex flex-col sm:flex-row gap-0">
        {/* Image */}
        <div className="relative sm:w-72 h-48 sm:h-64 flex-shrink-0">
          <img
            src={image}
            alt={offer.businessName}
            className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
          />
          {offer.topChoice && (
            <div className="absolute top-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
              <span className="text-white">⭐</span>
              Top Choice
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
              {discount}% OFF
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-grow p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{offer.businessName}</h3>
                {offer.verified && (
                  <CheckCircle className="w-5 h-5 text-green-600 fill-green-600" aria-label="Verified" />
                )}
              </div>
            </div>
          </div>
          
          {/* Address */}
          {business?.address && (
            <div className="flex items-start gap-1.5 text-sm text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{business.address}</span>
            </div>
          )}
          
          {/* Rating and Distance */}
          <div className="flex items-center gap-4 text-sm mb-4">
            <div className="flex items-center gap-1">
              <span className="font-semibold">{offer.distance}</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1">
              <span className="font-semibold">{offer.rating}</span>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-600">({offer.reviewCount})</span>
            </div>
          </div>
          
          {/* Offer Details */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-2 mb-2">
              <Gift className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="flex-grow">
                <h4 className="font-semibold text-gray-900 mb-1">{offer.title}</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span>{typeof offer.sessions === 'number' ? `${offer.sessions} sessions` : offer.sessions} • {offer.duration}</span>
                  </div>
                  {offer.description && (
                    <p className="mt-2">{offer.description}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Eligibility Badge */}
            <div className="mt-3">
              <span className="inline-block px-3 py-1 bg-white border border-blue-200 text-blue-700 rounded-full text-xs font-medium">
                {offer.eligibility}
              </span>
            </div>
          </div>
          
          {/* Footer - Pricing and Action */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-gray-900">${offer.price}</span>
                {offer.originalPrice > offer.price && (
                  <span className="text-lg text-gray-400 line-through">${offer.originalPrice}</span>
                )}
              </div>
              {offer.expiresIn && (
                <p className="text-xs text-gray-500">{offer.expiresIn}</p>
              )}
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Handle purchase
                alert('Purchase flow would open here');
              }}
              className="btn-primary px-6 py-3"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
