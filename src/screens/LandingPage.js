import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Package, UtensilsCrossed, Briefcase } from 'lucide-react';
import '../styles/LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleDiscover = () => {
    navigate('/app');
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <h1 className="logo">AndMoov</h1>
          <p className="tagline">Ensemble, allons plus loin</p>
          <p className="subtitle">La super-app sénégalaise pour vos courses, colis, repas et plus encore</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
            <button className="cta-button" onClick={handleDiscover}>
              App Client
            </button>
            <button
              className="cta-button"
              style={{ background: 'white', color: '#9333EA' }}
              onClick={() => navigate('/business')}
            >
              Espace Professionnel
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Nos Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Car className="w-14 h-14 text-blue-600 mx-auto" />
              </div>
              <h3>AndMoov Course</h3>
              <p>Réservez votre chauffeur en un clic. Choisissez parmi Eco, Standard ou Premium selon vos besoins et votre budget.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Package className="w-14 h-14 text-green-600 mx-auto" />
              </div>
              <h3>AndMoov Colis</h3>
              <p>Envoyez vos colis ! Point relais ou livraison domicile. Le destinataire reçoit TOUJOURS gratuitement. Point relais moins cher grâce à l'envoi groupé.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <UtensilsCrossed className="w-14 h-14 text-orange-600 mx-auto" />
              </div>
              <h3>AndMoov Resto</h3>
              <p>Commandez dans vos restaurants préférés à Dakar. Livraison rapide et suivi en temps réel de votre commande.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Briefcase className="w-14 h-14 mx-auto" style={{ color: '#9333EA' }} />
              </div>
              <h3>AndMoov Business</h3>
              <p>Solutions complètes pour restaurateurs, commerçants, chauffeurs et livreurs. Intégration e-commerce clé en main.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="innovation">
        <div className="container">
          <h2>Notre Innovation : Livraison 100% Gratuite pour le Destinataire</h2>
          <div className="innovation-content">
            <p className="innovation-text">
              AndMoov révolutionne la livraison de colis à Dakar ! L'expéditeur paie l'envoi, le destinataire reçoit <strong>TOUJOURS gratuitement</strong>.
              Le <strong>Point Relais économique</strong> profite de l'envoi groupé pour un tarif jusqu'à 3× moins cher que la livraison domicile.
              Bénéfique pour tous et soutient les commerces locaux.
            </p>
            <div className="innovation-benefits">
              <div className="benefit">✅ Destinataire reçoit 100% gratuit</div>
              <div className="benefit">✅ Point Relais économique (envoi groupé)</div>
              <div className="benefit">✅ Réseau de 50+ commerces de proximité</div>
              <div className="benefit">✅ Flexibilité horaire (8h-20h, 7j/7)</div>
              <div className="benefit">✅ Soutien à l'économie locale</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">3 en 1</div>
              <div className="stat-label">Services Intégrés</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Sénégalais</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Disponible</div>
            </div>
            <div className="stat">
              <div className="stat-number">Wave/OM</div>
              <div className="stat-label">Paiement Mobile</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ensemble, Allons Plus Loin</h2>
          <p>Découvrez la première super-app 100% sénégalaise qui réunit mobilité, livraison et restauration en une seule plateforme</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 AndMoov - Dakar, Sénégal 🇸🇳</p>
          <p className="footer-note">Démo de présentation • Paiement Wave & Orange Money</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
