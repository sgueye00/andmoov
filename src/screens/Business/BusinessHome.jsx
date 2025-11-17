import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bike, Car, UtensilsCrossed, Store, Package, ArrowLeft } from 'lucide-react';

const BusinessHome = () => {
  const navigate = useNavigate();

  const profils = [
    {
      id: 'coursier',
      icon: Bike,
      title: 'Coursier Moto',
      description: 'Livrez des colis, gagnez de l\'argent',
      gradient: 'from-orange-500 to-red-600',
      route: '/business/coursier',
      stats: 'Commission 75-82%',
    },
    {
      id: 'chauffeur',
      icon: Car,
      title: 'Chauffeur VTC',
      description: 'Transportez des passagers',
      gradient: 'from-blue-500 to-blue-700',
      route: '/business/chauffeur',
      stats: 'Commission 80%',
    },
    {
      id: 'restaurateur',
      icon: UtensilsCrossed,
      title: 'Restaurateur',
      description: 'Vendez vos plats sur Andmoov',
      gradient: 'from-orange-600 to-yellow-500',
      route: '/business/restaurateur',
      stats: 'Commission 15%',
    },
    {
      id: 'point-relais',
      icon: Store,
      title: 'Point Relais',
      description: 'Stockez et remettez des colis',
      gradient: 'from-green-500 to-green-700',
      route: '/business/point-relais',
      stats: '150 F par colis',
    },
    {
      id: 'expediteur',
      icon: Package,
      title: 'Expéditeur Pro',
      description: 'Envoyez des colis en volume',
      gradient: 'from-purple-500 to-purple-700',
      route: '/business/expediteur',
      stats: 'Dès 500 F/colis',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Andmoov Business</h1>
              <p className="text-sm text-gray-500">Choisissez votre profil professionnel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-2">Bienvenue sur Andmoov Business 🚀</h2>
          <p className="text-blue-100 text-lg">
            Rejoignez notre réseau de professionnels et commencez à gagner de l'argent dès aujourd'hui
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">1,500+</div>
              <div className="text-sm text-blue-100">Professionnels actifs</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm text-blue-100">Satisfaction</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-blue-100">Support dédié</div>
            </div>
          </div>
        </div>

        {/* Profils Grid */}
        <h3 className="text-xl font-bold text-gray-900 mb-6">Sélectionnez votre activité</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profils.map((profil) => {
            const Icon = profil.icon;
            return (
              <button
                key={profil.id}
                onClick={() => navigate(profil.route)}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 text-left border-2 border-transparent hover:border-blue-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${profil.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">{profil.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{profil.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold bg-gradient-to-r ${profil.gradient} bg-clip-text text-transparent`}>
                    {profil.stats}
                  </span>
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Revenus attractifs</h4>
            <p className="text-gray-600 text-sm">
              Commissions compétitives et paiements hebdomadaires via Wave/Orange Money
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Interface intuitive</h4>
            <p className="text-gray-600 text-sm">
              Dashboard professionnel simple et efficace pour gérer votre activité
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Support dédié</h4>
            <p className="text-gray-600 text-sm">
              Équipe support disponible 7j/7 pour vous accompagner dans votre activité
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Pas encore inscrit ?</h3>
          <p className="text-gray-300 mb-6">Rejoignez Andmoov Business en quelques minutes</p>
          <button className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
            Créer mon compte professionnel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessHome;
