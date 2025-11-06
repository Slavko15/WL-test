import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, MapPin, CheckCircle, Clock, Phone, Globe, Calendar, ChevronLeft, Heart } from 'lucide-react';
import { businesses } from '../data/mockData';

const BusinessDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedService, setSelectedService] = useState(null);
  
  const business = businesses.find(b => b.id === parseInt(id));
  
  if (!business) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business not found</h2>
        <button onClick={() => navigate('/search')} className="btn-primary">
          Back to Search
        </button>
      </div>
    );
  }
  
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'reviews', label: 'Reviews' },
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to results
          </button>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2 mt-2">
                {[business.image, business.image, business.image, business.image].map((img, i) => (
                  <div key={i} className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                    <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Booking Card */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="card p-6">
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">${selectedService?.price || business.price}</span>
                    <span className="text-gray-600">per session</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {selectedService?.name || business.type} • {selectedService?.duration || business.duration}
                  </p>
                </div>
                
                {/* Available Times */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Time
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {business.availableTimes.map((time, index) => (
                      <button
                        key={index}
                        className="px-4 py-3 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button className="w-full btn-primary text-lg py-4 mb-3">
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Book Now
                </button>
                
                <button className="w-full btn-secondary">
                  <Heart className="w-5 h-5 inline mr-2" />
                  Save
                </button>
                
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                  <p>✓ Instant confirmation</p>
                  <p>✓ Free cancellation up to 24h</p>
                  <p>✓ Flexible rescheduling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Business Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">{business.name}</h1>
                      {business.verified && (
                        <CheckCircle className="w-6 h-6 text-primary-600" />
                      )}
                    </div>
                    <p className="text-lg text-gray-600">{business.type}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{business.rating}</span>
                    <span className="text-gray-600">({business.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>{business.distance} away</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span>{business.hours}</span>
                  </div>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-primary-600 border-b-2 border-primary-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">About</h3>
                      <p className="text-gray-600 leading-relaxed">{business.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {business.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Location</h3>
                      <p className="text-gray-600 mb-4">{business.address}</p>
                      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={`https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-s+0ea5e9(${business.lng},${business.lat})/${business.lng},${business.lat},14,0/600x400@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`}
                          alt="Map"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'services' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Available Services</h3>
                    {business.services.map((service, index) => (
                      <div
                        key={index}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedService?.name === service.name
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                        onClick={() => setSelectedService(service)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">{service.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{service.duration}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-gray-900">${service.price}</div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedService(service);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="text-sm text-primary-600 hover:text-primary-700 font-medium mt-1"
                            >
                              Select
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Client Reviews</h3>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-5xl font-bold text-gray-900">{business.rating}</div>
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-5 h-5 ${
                                  star <= Math.floor(business.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-gray-600">{business.reviewCount} reviews</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {business.reviews.map((review, index) => (
                        <div key={index} className="pb-4 border-b border-gray-200 last:border-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-semibold text-gray-900">{review.author}</div>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= review.rating
                                      ? 'fill-yellow-400 text-yellow-400'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-2">{review.text}</p>
                          <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-4">
            {/* Contact Info */}
            <div className="card p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <a href="tel:+14165551234" className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>(416) 555-1234</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors">
                  <Globe className="w-5 h-5" />
                  <span>Visit Website</span>
                </a>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span>{business.address}</span>
                </div>
              </div>
            </div>
            
            {/* Instructor Info */}
            <div className="card p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Featured Practitioner</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">
                    {business.instructor.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{business.instructor}</div>
                  <div className="text-sm text-gray-600">{business.type} Specialist</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Certified professional with years of experience in wellness and client care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailPage;
