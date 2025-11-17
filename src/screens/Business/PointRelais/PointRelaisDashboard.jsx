import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, Package, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Header from '../../../components/Header';

const PointRelaisDashboard = () => {
  const navigate = useNavigate();

  const stats = {
    aujourdhui: 4500,
    colisAujourdhui: 30,
    semaine: 28500,
    mois: 108000,
    enStock: 12,
    totalColis: 847,
  };

  const colisEnStock = [
    { id: '#CL28471', expediteur: 'Amadou D.', taille: 'Moyen', arrivee: 'Il y a 2h', statut: 'En attente', remuneration: 150 },
    { id: '#CL28469', expediteur: 'Fatou S.', taille: 'Petit', arrivee: 'Il y a 5h', statut: 'En attente', remuneration: 150 },
    { id: '#CL28455', expediteur: 'Moussa K.', taille: 'Grand', arrivee: 'Hier 18:30', statut: 'Prêt à retirer', remuneration: 150 },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 z-30">
        <Header title="Point Relais" showBack={true} backTo="/business" />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">
        <div className="px-6 pt-6 pb-20 space-y-5">
          {/* Stats Header */}
          <div className="rounded-xl p-5 text-white" style={{ background: 'linear-gradient(to right, #51B8EC, #2E8BC0)' }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/80 text-sm">Gains aujourd'hui</p>
                <p className="text-3xl font-bold">{stats.aujourdhui.toLocaleString()} F</p>
                <p className="text-xs text-white/80 mt-1">{stats.colisAujourdhui} colis traités</p>
              </div>
              <Store className="w-12 h-12 opacity-80" />
            </div>

            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm">Colis en stock</span>
                <span className="text-xl font-bold">{stats.enStock}</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <p className="text-xs text-gray-500">Semaine</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{(stats.semaine / 1000).toFixed(1)}K</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-4 h-4 text-green-600" />
                <p className="text-xs text-gray-500">Mois</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{(stats.mois / 1000).toFixed(0)}K</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <Store className="w-4 h-4 text-green-600" />
                <p className="text-xs text-gray-500">Total</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{stats.totalColis}</p>
            </div>
          </div>

          {/* Colis en stock */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Colis en stock ({stats.enStock})</h3>
            <div className="space-y-3">
              {colisEnStock.map((colis, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-900 text-sm">{colis.id}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          colis.statut === 'Prêt à retirer' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {colis.statut}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">De: {colis.expediteur}</p>
                      <p className="text-xs text-gray-500">Taille: {colis.taille} • {colis.arrivee}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600 text-lg">{colis.remuneration} F</p>
                      <p className="text-xs text-gray-500">Par colis</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {colis.statut === 'En attente' ? (
                      <button className="flex-1 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        Notifier destinataire
                      </button>
                    ) : (
                      <button className="flex-1 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                        Marquer comme retiré
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-900 text-sm mb-1">Rémunération</p>
                <p className="text-xs text-green-700">Vous gagnez 150 F par colis stocké et remis au destinataire</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointRelaisDashboard;
