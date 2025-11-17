import React, { useState } from 'react';
import { Car, Package, UtensilsCrossed, Clock, CheckCircle, Navigation } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { orders } from '../data/mockData';

const Commandes = () => {
  const [activeTab, setActiveTab] = useState('En cours');

  const tabs = ['En cours', 'Historique'];

  const getIcon = (type) => {
    switch (type) {
      case 'course':
        return Car;
      case 'colis':
        return Package;
      case 'resto':
        return UtensilsCrossed;
      default:
        return Package;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'course':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'colis':
        return 'bg-green-50 text-green-600 border-green-200';
      case 'resto':
        return 'bg-orange-50 text-orange-600 border-orange-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  const filteredOrders = orders.filter((order) =>
    activeTab === 'En cours' ? order.status === 'En cours' : order.status === 'Terminé'
  );

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header - Sticky */}
      <div className="sticky top-0 z-30 bg-white">
        <Header title="Mes Commandes" showBack={false} showNotif={true} />
        {/* Tabs - Sticky sous le header */}
        <div className="bg-gray-50 px-6 py-3">
          <div className="bg-gray-100 rounded-xl p-2 flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">
      <div className="px-6 pt-4 pb-20 space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              {activeTab === 'En cours'
                ? 'Aucune commande en cours'
                : 'Aucun historique'}
            </p>
          </div>
        ) : (
          filteredOrders.map((order) => {
            const Icon = getIcon(order.type);
            const colorClass = getColor(order.type);

            return (
              <div key={order.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header */}
                <div className={`px-4 py-3 border-b ${colorClass} flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">
                        {order.type === 'course' && 'Course VTC'}
                        {order.type === 'colis' && 'Livraison Colis'}
                        {order.type === 'resto' && 'Livraison Resto'}
                      </p>
                      <p className="text-xs opacity-75">{order.date}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      order.status === 'En cours'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  {order.type === 'resto' && (
                    <>
                      <p className="font-semibold text-gray-900 mb-2">
                        {order.restaurant}
                      </p>
                      <div className="text-sm text-gray-600 space-y-1 mb-3">
                        {order.items.map((item, index) => (
                          <p key={index}>" {item}</p>
                        ))}
                      </div>
                    </>
                  )}

                  {(order.type === 'course' || order.type === 'colis') && (
                    <div className="space-y-2 mb-3">
                      <div className="flex items-start gap-2 text-sm">
                        <div className="w-3 h-3 rounded-full bg-green-500 mt-1"></div>
                        <div>
                          <p className="text-gray-500 text-xs">Départ</p>
                          <p className="text-gray-900 font-medium">{order.from}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Navigation className="w-3 h-3 text-red-500 mt-1" />
                        <div>
                          <p className="text-gray-500 text-xs">Arrivée</p>
                          <p className="text-gray-900 font-medium">{order.to}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-600">
                      {order.status === 'En cours' ? (
                        <>
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{order.deliveryTime}</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Terminé</span>
                        </>
                      )}
                    </div>
                    <p className="font-bold text-gray-900">{order.price || order.total} F</p>
                  </div>

                  {order.status === 'En cours' && (
                    <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                      <Navigation className="w-4 h-4" />
                      Suivre en temps réel
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Commandes;
