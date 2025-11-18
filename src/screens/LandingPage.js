import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Package, UtensilsCrossed, Briefcase } from 'lucide-react';

function LandingPage() {
  const navigate = useNavigate();

  const handleDiscover = () => {
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-white text-center overflow-x-hidden">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white px-6 pt-16 pb-12 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl font-black mb-6 tracking-tight">AndMoov</h1>
          <p className="text-3xl mb-4 font-semibold">Ensemble, allons plus loin</p>
          <p className="text-xl mb-10 text-blue-50 font-light max-w-3xl mx-auto">La super-app sénégalaise pour vos courses, colis, repas et plus encore</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="bg-white text-blue-600 border-none px-12 py-4 text-lg font-bold rounded-lg cursor-pointer transition-all shadow-sm hover:bg-gray-100 hover:shadow-md"
              onClick={handleDiscover}
            >
              App Client
            </button>
            <button
              className="bg-white text-purple-600 border-none px-12 py-4 text-lg font-bold rounded-lg cursor-pointer transition-all shadow-sm hover:bg-gray-100 hover:shadow-md"
              onClick={() => navigate('/business')}
            >
              Espace Professionnel
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-10 rounded-lg shadow-sm transition-all hover:shadow-md">
              <div className="mb-6">
                <Car className="w-14 h-14 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">AndMoov Course</h3>
              <p className="text-gray-600 leading-relaxed">Réservez votre chauffeur en un clic. Choisissez parmi Eco, Standard ou Premium selon vos besoins et votre budget.</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-sm transition-all hover:shadow-md">
              <div className="mb-6">
                <Package className="w-14 h-14 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">AndMoov Colis</h3>
              <p className="text-gray-600 leading-relaxed">Envoyez vos colis via notre réseau de Points Relais ou en livraison domicile. Tarifs ultra compétitifs grâce à l'envoi groupé et soutien aux commerces locaux.</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-sm transition-all hover:shadow-md">
              <div className="mb-6">
                <UtensilsCrossed className="w-14 h-14 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">AndMoov Resto</h3>
              <p className="text-gray-600 leading-relaxed">Commandez dans vos restaurants préférés à Dakar. Livraison rapide et suivi en temps réel de votre commande.</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-sm transition-all hover:shadow-md">
              <div className="mb-6">
                <Briefcase className="w-14 h-14 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">AndMoov Business</h3>
              <p className="text-gray-600 leading-relaxed">Solutions complètes pour restaurateurs, commerçants, chauffeurs et livreurs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 px-6 bg-blue-50 border-t border-blue-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Notre Innovation : Le Réseau de Points Relais</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              AndMoov révolutionne la livraison de colis à Dakar avec son <strong>réseau de Points Relais</strong> chez les commerçants de quartier !
              Grâce à l'<strong>envoi groupé</strong>, bénéficiez de tarifs jusqu'à 3× plus économiques qu'une livraison domicile classique.
              Simple, flexible et solidaire : récupérez vos colis quand vous voulez, tout en soutenant les commerces locaux.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-white p-6 rounded-lg text-lg text-blue-600 font-semibold shadow-sm text-center">
                ✅ 50+ points relais à Dakar
              </div>
              <div className="bg-white p-6 rounded-lg text-lg text-blue-600 font-semibold shadow-sm text-center">
                ✅ Envoi groupé ultra économique
              </div>
              <div className="bg-white p-6 rounded-lg text-lg text-blue-600 font-semibold shadow-sm text-center">
                ✅ Commerces de proximité partenaires
              </div>
              <div className="bg-white p-6 rounded-lg text-lg text-blue-600 font-semibold shadow-sm text-center">
                ✅ Horaires flexibles (8h-20h, 7j/7)
              </div>
              <div className="bg-white p-6 rounded-lg text-lg text-blue-600 font-semibold shadow-sm text-center">
                ✅ Soutien à l'économie locale
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="text-6xl font-black mb-2">3 en 1</div>
              <div className="text-xl text-blue-50 font-light">Services Intégrés</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black mb-2">100%</div>
              <div className="text-xl text-blue-50 font-light">Sénégalais</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black mb-2">24/7</div>
              <div className="text-xl text-blue-50 font-light">Disponible</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black mb-2">Wave/OM</div>
              <div className="text-xl text-blue-50 font-light">Paiement Mobile</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ensemble, Allons Plus Loin</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez la première super-app 100% sénégalaise qui réunit mobilité, livraison et restauration en une seule plateforme
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 AndMoov - Dakar, Sénégal 🇸🇳</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
