import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, TrendingUp, Clock, MapPin, Store, Home } from 'lucide-react';
import Header from '../../../components/Header';

const ExpediteurDashboard = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('Relais');

  const stats = {
    mois: 85000,
    colisEnvoyesMois: 127,
    enCours: 8,
    livres: 312,
    moyenneCout: 670,
  };

  const colisEnCours = [
    { id: '#CL28471', destinataire: 'Fatou S.', destination: 'Almadies', taille: 'Moyen', statut: 'En transit', prix: 700, mode: 'Relais' },
    { id: '#CL28469', destinataire: 'Moussa K.', destination: 'Plateau', taille: 'Petit', statut: 'Livré au Point Relais', prix: 500, mode: 'Relais' },
    { id: '#CL28455', destinataire: 'Amadou D.', destination: 'Ngor', taille: 'Grand', statut: 'En préparation', prix: 2000, mode: 'Domicile' },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 z-30">
        <Header title="Expéditeur Pro" showBack={true} backTo="/business" />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">
        <div className="px-6 pt-6 pb-20 space-y-5">
          {/* Stats Header */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-5 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-purple-100 text-sm">Dépenses ce mois</p>
                <p className="text-3xl font-bold">{stats.mois.toLocaleString()} F</p>
                <p className="text-xs text-purple-100 mt-1">{stats.colisEnvoyesMois} colis envoyés</p>
              </div>
              <Package className="w-12 h-12 opacity-80" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <p className="text-xs text-purple-100">En cours</p>
                <p className="text-2xl font-bold">{stats.enCours}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <p className="text-xs text-purple-100">Coût moyen</p>
                <p className="text-2xl font-bold">{stats.moyenneCout} F</p>
              </div>
            </div>
          </div>

          {/* Nouveau colis */}
          <button
            onClick={() => navigate('/colis')}
            className="w-full bg-purple-600 text-white font-semibold py-4 rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          >
            <Package className="w-5 h-5" />
            Envoyer un nouveau colis
          </button>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-purple-600" />
                <p className="text-xs text-gray-500">Total</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{stats.livres}</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <p className="text-xs text-gray-500">En cours</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{stats.enCours}</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-4 h-4 text-purple-600" />
                <p className="text-xs text-gray-500">Mois</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{stats.colisEnvoyesMois}</p>
            </div>
          </div>

          {/* Colis en cours */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Mes colis en cours</h3>
            <div className="space-y-3">
              {colisEnCours.map((colis, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-900 text-sm">{colis.id}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          colis.statut === 'Livré au Point Relais'
                            ? 'bg-green-100 text-green-700'
                            : colis.statut === 'En transit'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {colis.statut}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">Pour: {colis.destinataire}</p>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{colis.destination}</span>
                        {colis.mode === 'Relais' ? (
                          <div className="flex items-center gap-1 text-xs text-green-600">
                            <Store className="w-3 h-3" />
                            <span>Point Relais</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-xs text-blue-600">
                            <Home className="w-3 h-3" />
                            <span>Domicile</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-600 text-lg">{colis.prix} F</p>
                      <p className="text-xs text-gray-500">{colis.taille}</p>
                    </div>
                  </div>
                  <button className="w-full bg-gray-100 text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                    Suivre le colis
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-purple-900 text-sm mb-1">Tarifs préférentiels</p>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• Point Relais : 500-1000 F (3x moins cher)</li>
                  <li>• Domicile : 1500-2500 F (livraison rapide)</li>
                  <li>• Destinataire reçoit TOUJOURS gratuitement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpediteurDashboard;
