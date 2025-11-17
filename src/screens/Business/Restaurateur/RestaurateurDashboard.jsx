import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UtensilsCrossed, TrendingUp, ShoppingBag, Clock, CheckCircle, Award } from 'lucide-react';
import Header from '../../../components/Header';

const RestaurateurDashboard = () => {
  const navigate = useNavigate();
  const [ouvert, setOuvert] = useState(true);

  const stats = {
    aujourdhui: 32000,
    commandesAujourdhui: 18,
    semaine: 218000,
    mois: 850000,
    note: 4.6,
    totalCommandes: 1247,
    badge: 'Argent',
    commission: 15,
  };

  const commandesEnCours = [
    { id: '#CMD2847', plats: 'Thiéboudienne x2, Yassa Poulet x1', total: 7500, temps: '12 min', statut: 'En préparation' },
    { id: '#CMD2848', plats: 'Mafé x1, Bissap x2', total: 4500, temps: '5 min', statut: 'Prêt' },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 z-30">
        <Header title="Restaurateur" showBack={true} backTo="/business" />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">
        <div className="px-6 pt-6 pb-20 space-y-5">
          {/* Stats Header */}
          <div className="bg-purple-600 rounded-xl p-4 text-white">
            <div className="flex items-center justify-between mb-3">
              <div className="flex-1 min-w-0">
                <p className="text-purple-50 text-xs">Aujourd'hui</p>
                <p className="text-2xl font-bold truncate">{stats.aujourdhui.toLocaleString()} F</p>
                <p className="text-xs text-purple-50 mt-0.5">{stats.commandesAujourdhui} commandes</p>
              </div>
              <UtensilsCrossed className="w-10 h-10 opacity-80 flex-shrink-0 ml-2" />
            </div>

            {/* Toggle Restaurant ouvert */}
            <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <span className="text-sm font-medium">Restaurant ouvert</span>
              <button
                onClick={() => setOuvert(!ouvert)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  ouvert ? 'bg-green-500' : 'bg-gray-400'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    ouvert ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-3 border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-purple-600" />
                <p className="text-xs text-gray-500">Semaine</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{(stats.semaine / 1000).toFixed(0)}K</p>
            </div>
            <div className="bg-white rounded-xl p-3 border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="w-4 h-4 text-purple-600" />
                <p className="text-xs text-gray-500">Note</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{stats.note}/5</p>
            </div>
            <div className="bg-white rounded-xl p-3 border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <UtensilsCrossed className="w-4 h-4 text-purple-600" />
                <p className="text-xs text-gray-500">Total</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{stats.totalCommandes}</p>
            </div>
          </div>

          {/* Badge */}
          <div className="bg-purple-50 border border-purple-300 rounded-xl p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-base">Badge {stats.badge}</h3>
                <p className="text-sm text-gray-600">
                  Commission actuelle : {stats.commission}% • Votre part: {100 - stats.commission}%
                </p>
                <div className="mt-2 bg-white rounded-lg px-3 py-1 inline-block border border-purple-200">
                  <span className="text-xs text-gray-600">
                    Progression vers Or: <span className="font-semibold">{stats.totalCommandes}/2000</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Commandes en cours */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Commandes en cours</h3>
            <div className="space-y-3">
              {commandesEnCours.map((cmd, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-purple-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-900 text-sm">{cmd.id}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          cmd.statut === 'Prêt' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                        }`}>
                          {cmd.statut}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">{cmd.plats}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-600 text-lg">{cmd.total} F</p>
                      <p className="text-xs text-gray-500">Commission 15%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Il y a {cmd.temps}</span>
                    </div>
                  </div>
                  <button className={`w-full font-semibold py-2 rounded-lg mt-3 transition-colors text-sm ${
                    cmd.statut === 'Prêt'
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}>
                    {cmd.statut === 'Prêt' ? 'Marquer comme livrée' : 'Marquer comme prête'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurateurDashboard;
