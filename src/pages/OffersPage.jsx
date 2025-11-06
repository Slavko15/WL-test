import React, { useState } from 'react';
import { Search, SlidersHorizontal, Tag } from 'lucide-react';
import OfferCard from '../components/OfferCard';
import { offers } from '../data/mockData';

const OffersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  
  // Filter and sort offers
  const filteredOffers = offers
    .filter(offer => {
      if (!searchQuery) return true;
      return offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             offer.businessName.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'discount':
          const discountA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
          const discountB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
          return discountB - discountA;
        default: // featured
          return b.topChoice - a.topChoice;
      }
    });
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Tag className="w-12 h-12 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Special Offers & Packages</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Discover exclusive deals on wellness services near you
            </p>
          </div>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search offers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            {/* Sort */}
            <div className="flex gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="discount">Highest Discount</option>
              </select>
              
              <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mt-4">
            <p className="text-gray-600">
              {filteredOffers.length} offer{filteredOffers.length !== 1 ? 's' : ''} available
            </p>
          </div>
        </div>
      </div>
      
      {/* Offers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredOffers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Tag className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No offers found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms</p>
            <button
              onClick={() => setSearchQuery('')}
              className="btn-primary"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
      
      {/* Info Section */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Price Guarantee</h3>
              <p className="text-sm text-gray-600">Find a better price? We'll match it.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy Booking</h3>
              <p className="text-sm text-gray-600">Book instantly and manage on the go.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Packages</h3>
              <p className="text-sm text-gray-600">Use at your own pace with extended validity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
