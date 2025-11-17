import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bike, Car, UtensilsCrossed, Store, Package, DollarSign, Smartphone, Users } from 'lucide-react';
import Header from '../../components/Header';

const BusinessHome = () => {
  const navigate = useNavigate();

  const profils = [
    {
      id: 'coursier',
      icon: Bike,
      title: 'Coursier Moto',
      description: 'Livrez des colis, gagnez de l\'argent',
      color: 'bg-purple-600',
      route: '/business/coursier',
      stats: 'Commission 75-82%',
    },
    {
      id: 'chauffeur',
      icon: Car,
      title: 'Chauffeur VTC',
      description: 'Transportez des passagers',
      color: 'bg-purple-600',
      route: '/business/chauffeur',
      stats: 'Commission 80%',
    },
    {
      id: 'restaurateur',
      icon: UtensilsCrossed,
      title: 'Restaurateur',
      description: 'Vendez vos plats sur Andmoov',
      color: 'bg-purple-600',
      route: '/business/restaurateur',
      stats: 'Commission 15%',
    },
    {
      id: 'point-relais',
      icon: Store,
      title: 'Point Relais',
      description: 'Stockez et remettez des colis',
      color: 'bg-purple-600',
      route: '/business/point-relais',
      stats: '150 F par colis',
    },
    {
      id: 'expediteur',
      icon: Package,
      title: 'Expéditeur Pro',
      description: 'Envoyez des colis en volume',
      color: 'bg-purple-600',
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
          <div className="bg-purple-600 rounded-xl p-6 text-white">
            <h2 className="text-xl font-bold mb-2">Andmoov Business</h2>
            <p className="text-purple-50 text-sm mb-4">
              Rejoignez notre réseau de professionnels et commencez à gagner de l'argent dès aujourd'hui
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-xl font-bold">1,500+</div>
                <div className="text-xs text-purple-100">Pros</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-xl font-bold">95%</div>
                <div className="text-xs text-purple-100">Satisfait</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-xl font-bold">24/7</div>
                <div className="text-xs text-purple-100">Support</div>
              </div>
            </div>
          </div>

          {/* Profils Grid */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sélectionnez votre activité</h3>
            <div className="space-y-4">
              {profils.map((profil) => {
                const Icon = profil.icon;
                return (
                  <button
                    key={profil.id}
                    onClick={() => navigate(profil.route)}
                    className="w-full bg-white rounded-xl p-4 border border-purple-200 hover:border-purple-400 transition-all text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg ${profil.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-base mb-1">{profil.title}</h4>
                        <p className="text-gray-600 text-sm mb-1">{profil.description}</p>
                        <span className="text-sm font-semibold text-purple-600">
                          {profil.stats}
                        </span>
                      </div>
                      <span className="text-purple-600 text-xl">→</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-purple-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Revenus attractifs</h4>
                  <p className="text-gray-600 text-sm">
                    Commissions compétitives et paiements hebdomadaires via Wave/Orange Money
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-purple-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Interface intuitive</h4>
                  <p className="text-gray-600 text-sm">
                    Dashboard professionnel simple et efficace pour gérer votre activité
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-purple-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Support dédié</h4>
                  <p className="text-gray-600 text-sm">
                    Équipe support disponible 7j/7 pour vous accompagner dans votre activité
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-purple-600 rounded-xl p-6 text-center text-white">
            <h3 className="text-lg font-bold mb-1">Pas encore inscrit ?</h3>
            <p className="text-purple-100 text-sm mb-4">Rejoignez Andmoov Business en quelques minutes</p>
            <button className="w-full bg-white text-purple-600 font-semibold px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors">
              Créer mon compte professionnel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHome;
