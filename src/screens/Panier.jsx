import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, MapPin, CreditCard } from 'lucide-react';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';

const Panier = () => {
  const navigate = useNavigate();
  const { cart, restaurant, updateQuantity, removeItem } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = restaurant ? parseInt(restaurant.deliveryFee) : 500;
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header title="Panier" showBack={true} />
        <div className="flex flex-col items-center justify-center h-96">
          <p className="text-gray-500 text-lg">Votre panier est vide</p>
          <button
            onClick={() => navigate('/resto')}
            className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            Découvrir les restaurants
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <Header title="Panier" showBack={true} />

        <div className="px-6 py-6 space-y-6 pb-6">
          {/* Restaurant info */}
          {restaurant && (
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-1">{restaurant.name}</h3>
              <p className="text-sm text-gray-600">{restaurant.deliveryTime}</p>
            </div>
          )}

          {/* Cart items */}
          <div className="space-y-3">
            <h2 className="font-bold text-gray-900 text-lg">Vos articles</h2>
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <p className="text-orange-600 font-bold">{item.price} F</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600 p-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="bg-gray-100 hover:bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-4 h-4 text-gray-700" />
                  </button>
                  <span className="font-semibold text-gray-900 w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="bg-orange-500 hover:bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                  <span className="ml-auto font-bold text-gray-900">
                    {item.price * item.quantity} F
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery address */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">Adresse de livraison</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Plateau, Avenue Roume</p>
                <p className="text-sm text-gray-600">Dakar, Sénégal</p>
              </div>
              <button className="ml-auto text-orange-600 text-sm font-semibold">
                Modifier
              </button>
            </div>
          </div>

          {/* Payment method */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">Mode de paiement</h3>
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-gray-400" />
              <span className="text-gray-900">Wave Money</span>
              <button className="ml-auto text-orange-600 text-sm font-semibold">
                Modifier
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary - Fixed at bottom */}
      <div className="bg-white border-t border-gray-200 p-6">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-gray-600">
            <span>Sous-total</span>
            <span>{subtotal} F</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Frais de livraison</span>
            <span>{deliveryFee} F</span>
          </div>
          <div className="h-px bg-gray-200"></div>
          <div className="flex justify-between font-bold text-gray-900 text-lg">
            <span>Total</span>
            <span>{total} F</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all">
          Commander maintenant
        </button>
      </div>
    </div>
  );
};

export default Panier;
