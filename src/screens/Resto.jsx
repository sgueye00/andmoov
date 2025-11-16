import React, { useState } from 'react';
import { Search, Star, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { restaurants } from '../data/mockData';

const Resto = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'Italien', 'Japonais', 'Africain', 'Fast Food'];

  const filteredRestaurants = restaurants.filter((resto) => {
    const matchesSearch =
      resto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resto.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Tous' || resto.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 z-30 bg-white">
        <Header title="AndMoov Resto" showBack={true} />
        {/* Search and Categories - Sticky */}
        <div className="bg-gray-50 px-6 py-3 space-y-3">
          {/* Search */}
          <div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un restaurant..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-gray-900 placeholder-gray-400 outline-none"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">

      <div className="px-6 pt-6 pb-6 space-y-5">

        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun restaurant trouvé</p>
          </div>
        ) : (
          <div className="space-y-4 pb-14">
            {filteredRestaurants.map((resto) => (
              <button
                key={resto.id}
                onClick={() => navigate(`/resto/${resto.id}`)}
                className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                {/* Image */}
                <div className="relative h-40 bg-gray-200">
                  <img
                    src={resto.image}
                    alt={resto.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{resto.rating}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 text-left">
                  <h3 className="font-bold text-gray-900 mb-1">{resto.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{resto.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{resto.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500">{resto.deliveryFee}</span>
                    </div>
                    <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                      {resto.category}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      </div>

      <BottomNav />

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Resto;
