import React, { useState } from 'react';
import { MapPin, Package, Store, Home } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const Colis = () => {
  const [expediteur, setExpediteur] = useState('');
  const [destinataire, setDestinataire] = useState('');
  const [taille, setTaille] = useState('Moyen');
  const [mode, setMode] = useState('Relais');

  // Tarification par taille et mode
  const tarifs = {
    Relais: {
      Petit: 500,
      Moyen: 700,
      Grand: 1000,
    },
    Domicile: {
      Petit: 1500,
      Moyen: 2000,
      Grand: 2500,
    },
  };

  const tailles = [
    { name: 'Petit', icon: '📦', max: '0-5 kg', description: 'Vêtements, livres' },
    { name: 'Moyen', icon: '📦📦', max: '5-15 kg', description: 'Chaussures, électronique' },
    { name: 'Grand', icon: '📦📦📦', max: '15-30 kg', description: 'Appareils, gros volumes' },
  ];

  const modes = [
    {
      name: 'Relais',
      icon: Store,
      description: 'Point relais partenaire',
      delai: '24-48h',
      color: 'bg-green-50 border-green-500 text-green-700',
      badge: 'Économique',
      badgeColor: 'bg-green-100 text-green-700',
    },
    {
      name: 'Domicile',
      icon: Home,
      description: 'Livraison à domicile',
      delai: '2-6h',
      color: 'bg-blue-50 border-blue-500 text-blue-700',
      badge: 'Rapide',
      badgeColor: 'bg-blue-100 text-blue-700',
    },
  ];

  // Prix actuel selon taille et mode sélectionnés
  const prixActuel = tarifs[mode][taille];
  const economie = mode === 'Relais' ? tarifs.Domicile[taille] - prixActuel : 0;

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
            <div className="flex-1">
              <p className="font-semibold text-green-900 text-sm">Envoi de colis simple et économique</p>
              <div className="mt-2 space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-green-700">💰 Expéditeur (vous) :</span>
                  <span className="font-semibold text-green-900">Paie l'envoi</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-green-700">📦 Destinataire :</span>
                  <span className="font-semibold text-green-900">Récupère GRATUITEMENT</span>
                </div>
              </div>
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
                className={`p-3 rounded-xl border-2 transition-all ${
                  taille === t.name
                    ? 'bg-green-50 border-green-500 text-green-700'
                    : 'bg-white border-gray-200 text-gray-700'
                }`}
              >
                <div className="text-2xl mb-1">{t.icon}</div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs opacity-75 mt-0.5">{t.max}</p>
                <p className="text-xs opacity-60 mt-1 leading-tight">{t.description}</p>
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
              const prixMode = tarifs[m.name][taille];
              const economieMode = m.name === 'Relais' ? tarifs.Domicile[taille] - prixMode : 0;

              return (
                <button
                  key={m.name}
                  onClick={() => setMode(m.name)}
                  className={`w-full p-4 rounded-xl border-2 transition-all ${
                    mode === m.name
                      ? m.color
                      : 'bg-white border-gray-200 text-gray-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 mt-1" />
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold">{m.name}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${m.badgeColor}`}>
                          {m.badge}
                        </span>
                      </div>
                      <p className="text-sm opacity-75 mb-1">{m.description}</p>
                      <p className="text-xs opacity-60">Délai : {m.delai}</p>
                      {m.name === 'Relais' && (
                        <p className="text-xs text-green-600 font-medium mt-1">
                          ✓ Destinataire récupère gratuitement
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{prixMode} F</p>
                      {economieMode > 0 && (
                        <p className="text-xs text-green-600 font-medium">
                          Économie {economieMode} F
                        </p>
                      )}
                    </div>
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
                <p className="text-sm text-green-100">Vous payez (expéditeur)</p>
                <p className="text-3xl font-bold">{prixActuel} F</p>
                {economie > 0 && (
                  <p className="text-xs text-green-100 mt-1">
                    Économie de {economie} F vs Domicile
                  </p>
                )}
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <Package className="w-8 h-8" />
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-3 mb-3 text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-green-100">Taille:</span>
                <span className="font-semibold">{taille} ({tailles.find(t => t.name === taille)?.max})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-100">Mode:</span>
                <span className="font-semibold">{mode} ({selectedMode.delai})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-100">Destinataire paie:</span>
                <span className="font-semibold text-yellow-300">
                  {mode === 'Relais' ? '0 F (Gratuit ✓)' : '0 F'}
                </span>
              </div>
            </div>

            {mode === 'Relais' && (
              <div className="bg-yellow-400/20 border border-yellow-300/30 rounded-lg p-2 mb-3">
                <p className="text-xs text-yellow-100 text-center">
                  🎉 Le destinataire récupère gratuitement en point relais
                </p>
              </div>
            )}

            <button className="w-full bg-white text-green-600 font-semibold py-3 rounded-xl hover:bg-green-50 transition-colors">
              Valider l'envoi - {prixActuel} F
            </button>
          </div>
        )}

        {/* Points relais */}
        {mode === 'Relais' && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Points relais à proximité</h3>
            <div className="space-y-2">
              {[
                { nom: 'Boutique Kermel - Plateau', distance: '800m' },
                { nom: 'Épicerie Safir - Almadies', distance: '1.2km' },
                { nom: 'Pharmacie Ngor', distance: '2.5km' }
              ].map((relais, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-xl flex items-center gap-3 border border-gray-100 hover:border-green-300 transition-colors cursor-pointer"
                  >
                    <Store className="w-5 h-5 text-green-600" />
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium text-sm">{relais.nom}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-xs text-gray-500">Ouvert 8h - 20h</p>
                        <span className="text-xs text-gray-400">• {relais.distance}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-green-600 font-semibold">{prixActuel} F</p>
                      <p className="text-xs text-gray-400">Retrait gratuit</p>
                    </div>
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
