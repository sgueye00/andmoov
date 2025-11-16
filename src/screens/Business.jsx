import React, { useState } from 'react';
import {
  BarChart3,
  DollarSign,
  Package,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import Header from '../components/Header';

const Business = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const stats = {
    today: {
      revenue: 45000,
      orders: 23,
      pending: 5,
      completed: 18,
    },
    week: {
      revenue: 285000,
      orders: 147,
      pending: 12,
      completed: 135,
    },
    month: {
      revenue: 1200000,
      orders: 620,
      pending: 28,
      completed: 592,
    },
  };

  const currentStats = stats[selectedPeriod];

  const recentOrders = [
    { id: 1, customer: 'Fatou Diop', amount: 3500, status: 'pending', time: '5 min' },
    { id: 2, customer: 'Moussa Sarr', amount: 7200, status: 'completed', time: '15 min' },
    { id: 3, customer: 'Aïcha Ndiaye', amount: 4500, status: 'pending', time: '8 min' },
    { id: 4, customer: 'Cheikh Fall', amount: 6800, status: 'completed', time: '32 min' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="AndMoov Business" showBack={false} showMenu={true} />

      <div className="px-6 py-6 space-y-6">
        {/* Welcome */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Tableau de bord</h2>
          <p className="text-purple-100">Restaurant Pizza Roma</p>
        </div>

        {/* Period selector */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { key: 'today', label: "Aujourd'hui" },
            { key: 'week', label: 'Cette semaine' },
            { key: 'month', label: 'Ce mois' },
          ].map((period) => (
            <button
              key={period.key}
              onClick={() => setSelectedPeriod(period.key)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                selectedPeriod === period.key
                  ? 'bg-purple-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-gray-600 text-sm">Revenus</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{currentStats.revenue.toLocaleString()} F</p>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +12%
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-gray-600 text-sm">Commandes</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{currentStats.orders}</p>
            <p className="text-xs text-gray-500 mt-1">{currentStats.completed} terminées</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-gray-600 text-sm">En attente</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{currentStats.pending}</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-gray-600 text-sm">Clients</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">342</p>
            <p className="text-xs text-purple-600 mt-1">+24 nouveaux</p>
          </div>
        </div>

        {/* Recent Orders */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Commandes récentes</h3>
            <button className="text-purple-600 text-sm font-semibold">Voir tout</button>
          </div>

          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-700">
                        {order.customer.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{order.customer}</p>
                      <p className="text-xs text-gray-500">Il y a {order.time}</p>
                    </div>
                  </div>
                  <p className="font-bold text-gray-900">{order.amount} F</p>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${
                      order.status === 'pending'
                        ? 'bg-orange-50 text-orange-700'
                        : 'bg-green-50 text-green-700'
                    }`}
                  >
                    {order.status === 'pending' ? (
                      <>
                        <AlertCircle className="w-3 h-3" />
                        En préparation
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-3 h-3" />
                        Livrée
                      </>
                    )}
                  </span>

                  {order.status === 'pending' && (
                    <button className="text-purple-600 text-sm font-semibold">
                      Accepter
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
            <BarChart3 className="w-8 h-8 text-purple-600 mb-2" />
            <p className="font-semibold text-gray-900">Statistiques</p>
          </button>
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
            <Package className="w-8 h-8 text-blue-600 mb-2" />
            <p className="font-semibold text-gray-900">Menu</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Business;
