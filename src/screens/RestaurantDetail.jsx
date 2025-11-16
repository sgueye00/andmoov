import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Clock, DollarSign, Plus, ShoppingCart } from 'lucide-react';
import Header from '../components/Header';
import { restaurants, menuItems } from '../data/mockData';
import { useCart } from '../context/CartContext';

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart: addToCartContext, getItemQuantity, cartTotal, cartItemCount } = useCart();

  const restaurant = restaurants.find((r) => r.id === parseInt(id));
  const menu = menuItems[parseInt(id)] || [];

  const handleAddToCart = (item) => {
    addToCartContext(item, restaurant);
  };

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Restaurant non trouvé</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <Header title={restaurant.name} showBack={true} />

        {/* Restaurant Header */}
        <div className="relative h-48 bg-gray-200">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h1 className="text-2xl font-bold text-white mb-2">{restaurant.name}</h1>
            <div className="flex items-center gap-4 text-sm text-white">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{restaurant.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>{restaurant.deliveryFee}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="px-6 py-6 space-y-4 pb-6">
          <h2 className="text-xl font-bold text-gray-900">Menu</h2>

          {menu.map((item) => {
            const quantity = getItemQuantity(item.id);
            return (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="flex gap-4 p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <p className="text-lg font-bold text-orange-600">{item.price} F</p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors self-end"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                {quantity > 0 && (
                  <div className="bg-orange-50 px-4 py-2 text-sm text-orange-700 font-medium">
                    {quantity} ajouté{quantity > 1 ? 's' : ''} au panier
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Cart button - Fixed at bottom */}
      {cartItemCount > 0 && (
        <div className="p-4 bg-white border-t border-gray-200">
          <button
            onClick={() => navigate('/panier')}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 rounded-xl flex items-center justify-between px-6 hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Voir le panier ({cartItemCount})</span>
            </div>
            <span>{cartTotal} F</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetail;
