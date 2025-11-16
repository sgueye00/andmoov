import React from 'react';
import {
  User,
  CreditCard,
  Globe,
  Gift,
  Users,
  HelpCircle,
  Bell,
  Trash2,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { userProfile } from '../data/mockData';

const Compte = () => {
  const menuItems = [
    {
      section: 'Compte',
      items: [
        { icon: User, label: 'Profil utilisateur', path: '/profile' },
        { icon: CreditCard, label: 'Moyens de paiement', path: '/payment' },
        { icon: Globe, label: 'Langue', value: 'Français', path: '/language' },
      ],
    },
    {
      section: 'Avantages',
      items: [
        { icon: Gift, label: 'Promotions & Offres', badge: '2', path: '/promotions' },
        { icon: Users, label: 'Parrainer un ami', path: '/referral' },
      ],
    },
    {
      section: 'Assistance',
      items: [
        { icon: HelpCircle, label: 'FAQ / Centre d\'aide', path: '/help' },
        { icon: Bell, label: 'Notifications & sécurité', path: '/notifications' },
      ],
    },
    {
      section: 'Danger',
      items: [
        { icon: Trash2, label: 'Supprimer mon compte', path: '/delete', danger: true },
        { icon: LogOut, label: 'Se déconnecter', path: '/logout', danger: true },
      ],
    },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 z-30">
        <Header title="Mon Compte" showBack={false} showNotif={true} />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">

      <div className="px-6 pt-6 pb-20 space-y-6">
        {/* User Profile */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-14 h-14 rounded-full border-2 border-white/30"
            />
            <div className="flex-1">
              <h2 className="text-lg font-bold">{userProfile.name}</h2>
              <p className="text-blue-100 text-xs">{userProfile.phone}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-xs">Points de fidélité</p>
              <p className="text-xl font-bold">350 pts</p>
            </div>
            <Gift className="w-6 h-6 text-blue-200" />
          </div>
        </div>

        {/* Menu Sections */}
        {menuItems.map((section, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3 px-2">
              {section.section}
            </h3>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIndex}
                    className={`w-full px-4 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors ${
                      itemIndex !== section.items.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.danger
                          ? 'bg-red-50 text-red-600'
                          : 'bg-gray-50 text-gray-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`flex-1 text-left font-medium ${
                        item.danger ? 'text-red-600' : 'text-gray-900'
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.value && (
                      <span className="text-gray-500 text-sm">{item.value}</span>
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* App Version */}
        <div className="text-center text-gray-400 text-sm py-4">
          <p>AndMoov v1.0.0</p>
          <p className="mt-1">© 2025 AndMoov Holding</p>
        </div>
      </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Compte;
