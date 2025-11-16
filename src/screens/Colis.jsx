import React, { useState } from 'react';
import { MapPin, Package, Store, Home } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const Colis = () => {
  const [expediteur, setExpediteur] = useState('');
  const [destinataire, setDestinataire] = useState('');
  const [taille, setTaille] = useState('Moyen');
  const [mode, setMode] = useState('Relais');

  const tailles = [
    { name: 'Petit', icon: '📦', max: '5 kg' },
    { name: 'Moyen', icon: '📦📦', max: '15 kg' },
    { name: 'Grand', icon: '📦📦📦', max: '30 kg' },
  ];

  const modes = [
    {
      name: 'Relais',
      icon: Store,
      price: '500 F',
      description: 'Point relais partenaire',
      color: 'bg-green-50 border-green-500 text-green-700',
    },
    {
      name: 'Domicile',
      icon: Home,
      price: '1500 F',
      description: 'Livraison à domicile',
      color: 'bg-blue-50 border-blue-500 text-blue-700',
    },
  ];

  const selectedMode = modes.find(m => m.name === mode);

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 z-30">
        <Header title="AndMoov Colis" showBack={true} />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">

      <div className="px-6 pt-6 pb-20 space-y-5">
        {/* Info banner */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Package className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900 text-sm">Livraison en point relais économique !</p>
              <p className="text-xs text-green-700 mt-1">
                Profitez de notre réseau de points relais partenaires à Dakar
              </p>
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <input
              type="text"
              placeholder="Adresse expéditeur (ex: Plateau)"
              value={expediteur}
              onChange={(e) => setExpediteur(e.target.value)}
              className="flex-1 text-gray-900 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="h-px bg-gray-200"></div>

          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-red-500" />
            <input
              type="text"
              placeholder="Adresse destinataire (ex: Almadies)"
              value={destinataire}
              onChange={(e) => setDestinataire(e.target.value)}
              className="flex-1 text-gray-900 placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Package size */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Taille du colis</h3>
          <div className="grid grid-cols-3 gap-3">
            {tailles.map((t) => (
              <button
                key={t.name}
                onClick={() => setTaille(t.name)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  taille === t.name
                    ? 'bg-green-50 border-green-500 text-green-700'
                    : 'bg-white border-gray-200 text-gray-700'
                }`}
              >
                <div className="text-2xl mb-2">{t.icon}</div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs opacity-75 mt-1">{t.max}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Delivery mode */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Mode de livraison</h3>
          <div className="space-y-3">
            {modes.map((m) => {
              const Icon = m.icon;
              return (
                <button
                  key={m.name}
                  onClick={() => setMode(m.name)}
                  className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                    mode === m.name
                      ? m.color
                      : 'bg-white border-gray-200 text-gray-700'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <div className="flex-1 text-left">
                    <p className="font-semibold">{m.name}</p>
                    <p className="text-sm opacity-75">{m.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{m.price}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        {expediteur && destinataire && (
          <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-5 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-green-100">Prix total</p>
                <p className="text-3xl font-bold">{selectedMode.price}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <Package className="w-8 h-8" />
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-3 mb-4 text-sm">
              <div className="flex justify-between mb-2">
                <span className="text-green-100">Taille:</span>
                <span className="font-semibold">{taille}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-100">Mode:</span>
                <span className="font-semibold">{mode}</span>
              </div>
            </div>

            <button className="w-full bg-white text-green-600 font-semibold py-3 rounded-xl hover:bg-green-50 transition-colors">
              Valider l'envoi
            </button>
          </div>
        )}

        {/* Points relais */}
        {mode === 'Relais' && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Points relais à proximité</h3>
            <div className="space-y-2">
              {['Boutique Kermel - Plateau', 'Épicerie Safir - Almadies', 'Pharmacie Ngor'].map(
                (relais, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-xl flex items-center gap-3 border border-gray-100"
                  >
                    <Store className="w-5 h-5 text-green-600" />
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium text-sm">{relais}</p>
                      <p className="text-xs text-gray-500">Ouvert 8h - 20h</p>
                    </div>
                    <span className="text-xs text-green-600 font-semibold">500 F</span>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Colis;
