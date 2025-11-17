import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bike, Car, UtensilsCrossed, Store, Package } from 'lucide-react';
import Header from '../../components/Header';

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
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 z-30">
        <Header title="Andmoov Business" showBack={true} backTo="/" />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">
        <div className="px-6 pt-6 pb-20 space-y-6">
          {/* Welcome Banner */}
          <div className="rounded-xl p-5 text-white" style={{ background: 'linear-gradient(to right, #51B8EC, #2E8BC0)' }}>
            <h2 className="text-xl font-bold mb-2">Andmoov Business</h2>
            <p className="text-white/90 text-sm mb-4">
              Rejoignez notre réseau de professionnels et commencez à gagner de l'argent dès aujourd'hui
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">1,500+</div>
                <div className="text-xs text-white/90">Professionnels</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-white/90">Satisfaction</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs text-white/90">Support</div>
              </div>
            </div>
          </div>

          {/* Profils Grid */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Sélectionnez votre activité</h3>
            <div className="space-y-3">
              {profils.map((profil) => {
                const Icon = profil.icon;
                return (
                  <button
                    key={profil.id}
                    onClick={() => navigate(profil.route)}
                    className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-gray-400 transition-all text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${profil.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{profil.title}</h4>
                        <p className="text-gray-600 text-xs mb-1 truncate">{profil.description}</p>
                        <span className="text-xs font-medium text-gray-500">
                          {profil.stats}
                        </span>
                      </div>
                      <span className="text-gray-400 text-lg flex-shrink-0">→</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💰</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Revenus attractifs</h4>
                  <p className="text-gray-600 text-xs">
                    Commissions compétitives et paiements hebdomadaires via Wave/Orange Money
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Interface intuitive</h4>
                  <p className="text-gray-600 text-xs">
                    Dashboard professionnel simple et efficace pour gérer votre activité
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🤝</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Support dédié</h4>
                  <p className="text-gray-600 text-xs">
                    Équipe support disponible 7j/7 pour vous accompagner dans votre activité
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl p-5 text-center text-white" style={{ background: 'linear-gradient(to right, #51B8EC, #2E8BC0)' }}>
            <h3 className="text-lg font-bold mb-1">Pas encore inscrit ?</h3>
            <p className="text-white/90 text-sm mb-4">Rejoignez Andmoov Business en quelques minutes</p>
            <button className="w-full bg-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors" style={{ color: '#51B8EC' }}>
              Créer mon compte professionnel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHome;
