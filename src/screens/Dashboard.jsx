import React from 'react';
import { Car, Package, UtensilsCrossed, ChevronRight, User, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { promotions } from '../data/mockData';

const Dashboard = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      title: 'AndMoov Course',
      description: 'Réservez un chauffeur',
      path: '/course',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Package,
      title: 'AndMoov Colis',
      description: 'Envoyez vos colis',
      path: '/colis',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: UtensilsCrossed,
      title: 'AndMoov Resto',
      description: 'Commandez à manger',
      path: '/resto',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header - Sticky */}
      <div className="sticky top-0 z-30 bg-blue-600 text-white px-6 pt-10 pb-4 rounded-b-3xl shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-0.5">Bonjour, Djibril</h1>
            <p className="text-blue-50 text-sm">Que souhaitez-vous faire aujourd'hui ?</p>
          </div>
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">
        {/* Services */}
        <div className="px-6 pt-4 pb-2 space-y-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.path}
                onClick={() => navigate(service.path)}
                className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-4"
              >
                <div className={`${service.bgColor} ${service.iconColor} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900 text-base">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-orange-500 flex-shrink-0" />
              </button>
            );
          })}
        </div>

        {/* Promotions */}
        <div className="px-6 pb-20">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Promotions</h2>
          <div className="space-y-3">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                style={{ borderLeft: `4px solid ${promo.color}` }}
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{promo.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{promo.description}</p>
                  <p className="text-xs font-mono bg-gray-100 text-gray-700 px-2 py-1 rounded mt-2 inline-block">
                    {promo.code}
                  </p>
                </div>
                <Gift className="w-8 h-8 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Sticky */}
      <BottomNav />
    </div>
  );
};

export default Dashboard;
