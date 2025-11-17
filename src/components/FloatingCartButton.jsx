import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const FloatingCartButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItemCount } = useCart();

  // Ne pas afficher le bouton sur l'écran Panier lui-même ou sur la page de détail restaurant
  if (location.pathname === '/panier' || location.pathname.startsWith('/resto/')) {
    return null;
  }

  // Ne pas afficher si le panier est vide
  if (cartItemCount === 0) {
    return null;
  }

  return (
    <button
      onClick={() => navigate('/panier')}
      className="absolute bottom-24 right-6 z-40 bg-orange-500 hover:bg-orange-600 text-white w-14 h-14 rounded-full shadow-sm flex items-center justify-center transition-colors"
      aria-label="Voir le panier"
    >
      <ShoppingBag className="w-6 h-6" />
      {cartItemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {cartItemCount}
        </span>
      )}
    </button>
  );
};

export default FloatingCartButton;
