import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Car } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

// Composants d'icônes pour les catégories - Utilisant Car de lucide-react avec badges
const EcoCarIcon = () => (
  <div className="relative inline-block">
    <Car className="w-7 h-7" />
    <div className="absolute -bottom-1 -right-1 bg-white rounded-full w-3 h-3 flex items-center justify-center">
      <span className="text-[8px] font-bold text-green-600">E</span>
    </div>
  </div>
);

const StandardCarIcon = () => (
  <div className="relative inline-block">
    <Car className="w-8 h-8" />
    <div className="absolute -bottom-1 -right-1 bg-white rounded-full w-3 h-3 flex items-center justify-center">
      <span className="text-[8px] font-bold text-blue-600">S</span>
    </div>
  </div>
);

const PremiumCarIcon = () => (
  <div className="relative inline-block">
    <Car className="w-9 h-9" />
    <div className="absolute -bottom-1 -right-1 bg-white rounded-full w-3.5 h-3.5 flex items-center justify-center">
      <span className="text-[9px] font-bold text-purple-600">P</span>
    </div>
  </div>
);

const Course = () => {
  const [depart, setDepart] = useState('');
  const [arrivee, setArrivee] = useState('');
  const [category, setCategory] = useState('Standard');

  // Voitures disponibles sur la carte avec positions aléatoires
  const availableCars = [
    { id: 1, type: 'Eco', x: 20, y: 30, rotation: 45 },
    { id: 2, type: 'Standard', x: 60, y: 50, rotation: -30 },
    { id: 3, type: 'Eco', x: 75, y: 25, rotation: 90 },
    { id: 4, type: 'Premium', x: 40, y: 70, rotation: 0 },
    { id: 5, type: 'Standard', x: 85, y: 80, rotation: -45 },
  ];

  const categories = [
    {
      name: 'Eco',
      price: 1500,
      icon: <EcoCarIcon />,
      time: '5 min',
      color: 'bg-green-50 border-green-500 text-green-700',
      bgColor: 'bg-green-500'
    },
    {
      name: 'Standard',
      price: 2500,
      icon: <StandardCarIcon />,
      time: '3 min',
      color: 'bg-blue-50 border-blue-500 text-blue-700',
      bgColor: 'bg-blue-500'
    },
    {
      name: 'Premium',
      price: 4000,
      icon: <PremiumCarIcon />,
      time: '2 min',
      color: 'bg-purple-50 border-purple-500 text-purple-700',
      bgColor: 'bg-purple-500'
    },
  ];

  const selectedCategory = categories.find(c => c.name === category);

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header + Search - Sticky */}
      <div className="sticky top-0 z-30 bg-white">
        <Header title="AndMoov Course" showBack={true} />
        {/* Location inputs - Sticky */}
        <div className="bg-gray-50 px-6 py-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <input
              type="text"
              placeholder="Point de départ (ex: Plateau)"
              value={depart}
              onChange={(e) => setDepart(e.target.value)}
              className="flex-1 text-gray-900 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="h-px bg-gray-200"></div>

          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-red-500" />
            <input
              type="text"
              placeholder="Destination (ex: Almadies)"
              value={arrivee}
              onChange={(e) => setArrivee(e.target.value)}
              className="flex-1 text-gray-900 placeholder-gray-400 outline-none"
            />
          </div>
        </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">
      {/* Map interactive avec voitures */}
      <div className="relative h-72 bg-gray-100 overflow-hidden">
        {/* Fond de carte avec rues */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Grille de rues */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="#E5E7EB"/>
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D1D5DB" strokeWidth="1"/>
            </pattern>
            <pattern id="streets" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#grid)"/>
              <rect x="0" y="45" width="100" height="10" fill="#9CA3AF" opacity="0.3"/>
              <rect x="45" y="0" width="10" height="100" fill="#9CA3AF" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#streets)"/>

          {/* Routes principales */}
          <path d="M 0 100 Q 150 80 300 120" stroke="#6B7280" strokeWidth="8" fill="none" opacity="0.2"/>
          <path d="M 150 0 Q 180 140 200 288" stroke="#6B7280" strokeWidth="8" fill="none" opacity="0.2"/>

          {/* Zones vertes (parcs) */}
          <circle cx="80" cy="80" r="25" fill="#10B981" opacity="0.15"/>
          <circle cx="280" cy="200" r="30" fill="#10B981" opacity="0.15"/>
        </svg>

        {/* Voitures disponibles sur la carte */}
        {availableCars.map((car) => (
          <div
            key={car.id}
            className="absolute transition-all duration-300 cursor-pointer"
            style={{
              left: `${car.x}%`,
              top: `${car.y}%`,
              transform: `translate(-50%, -50%) rotate(${car.rotation}deg)`,
            }}
          >
            <div className={`${categories.find(c => c.name === car.type)?.bgColor} p-2 rounded-lg shadow-sm animate-pulse`}>
              <Car className="w-4 h-4 text-white" />
            </div>
          </div>
        ))}

        {/* Pin de départ (si départ renseigné) */}
        {depart && (
          <div className="absolute left-1/4 top-1/3 animate-bounce">
            <div className="bg-green-500 p-2 rounded-full shadow-sm">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        )}

        {/* Pin d'arrivée (si arrivée renseignée) */}
        {arrivee && (
          <div className="absolute right-1/4 bottom-1/3 animate-bounce">
            <div className="bg-red-500 p-3 rounded-full shadow-sm">
              <MapPin className="w-5 h-5 text-white" />
            </div>
          </div>
        )}

        {/* Overlay avec info */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
          <p className="text-xs font-semibold text-gray-700">Dakar, Sénégal</p>
          <p className="text-xs text-gray-500">{availableCars.length} véhicules disponibles</p>
        </div>

        {/* Bouton de recentrage */}
        <button className="absolute bottom-3 right-3 bg-white p-3 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
          <Navigation className="w-5 h-5 text-blue-600" />
        </button>

        {/* Bouton zoom */}
        <div className="absolute bottom-3 left-3 bg-white rounded-lg shadow-sm overflow-hidden">
          <button className="px-3 py-2 hover:bg-gray-50 border-b border-gray-200 transition-colors">
            <span className="text-xl font-semibold text-gray-700">+</span>
          </button>
          <button className="px-3 py-2 hover:bg-gray-50 transition-colors">
            <span className="text-xl font-semibold text-gray-700">−</span>
          </button>
        </div>
      </div>

      <div className="px-6 pt-4 pb-20 space-y-4">
        {/* Categories */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Choisir une catégorie</h3>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setCategory(cat.name)}
                className={`p-4 rounded-lg border transition-all ${
                  category === cat.name
                    ? cat.color + ' shadow-sm'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="mb-2 flex justify-center">{cat.icon}</div>
                <p className="font-semibold text-sm">{cat.name}</p>
                <p className="text-xs opacity-75 mt-1">{cat.price} F</p>
              </button>
            ))}
          </div>
        </div>

        {/* Price estimate */}
        {depart && arrivee && (
          <div className="bg-blue-600 rounded-lg p-6 text-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-blue-100">Prix estimé</p>
                <p className="text-3xl font-bold">{selectedCategory.price} F</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-blue-100 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{selectedCategory.time}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Confirmer la course
            </button>
          </div>
        )}

        {/* Recent addresses */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Adresses récentes</h3>
          <div className="space-y-2">
            {['Plateau, Avenue Roume', 'Almadies, Route de Ngor', 'Mermoz, Sacré-Cœur'].map((address, index) => (
              <button
                key={index}
                onClick={() => setDepart(address)}
                className="w-full bg-white p-3 rounded-xl text-left flex items-center gap-3 hover:bg-gray-50 transition-colors"
              >
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{address}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Course;
